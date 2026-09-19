#!/usr/bin/env python3
"""
DORVIK BugFixer - QLoRA Fine-Tuning Script
==========================================
Production-grade fine-tuning of a code LLM on bug-fix pairs using:
  - HuggingFace Transformers + PEFT (LoRA)
  - bitsandbytes 4-bit NF4 quantization
  - TRL SFTTrainer with packing
  - Automatic adapter merge & export

Usage:
    # Dry run (no GPU needed - validates config & dataset loading)
    python3 training/train_qlora.py --dry-run

    # Full fine-tune (requires CUDA GPU, ~6GB VRAM for Qwen 7B 4-bit)
    python3 training/train_qlora.py \
        --base_model Qwen/Qwen2.5-Coder-7B-Instruct \
        --lora_r 16 --lora_alpha 32 \
        --epochs 3 --batch_size 2 \
        --merge_and_save

    # Lightweight test on CPU (tiny model, educational only)
    python3 training/train_qlora.py \
        --base_model bigcode/starcoder2-3b \
        --cpu_only \
        --max_steps 10 \
        --dry-run

Requirements:
    pip install -r training/requirements.txt
"""

import argparse
import json
import os
import sys
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser(description="Dorvik BugFixer QLoRA Fine-Tuning")

    # Model selection
    parser.add_argument(
        "--base_model",
        default="Qwen/Qwen2.5-Coder-7B-Instruct",
        help=(
            "Base HuggingFace model ID. Recommended options:\n"
            "  Qwen/Qwen2.5-Coder-7B-Instruct   (best SWE score, ~6GB VRAM)\n"
            "  deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct\n"
            "  bigcode/starcoder2-3b             (lightweight CPU test)"
        ),
    )

    # LoRA hyperparameters
    parser.add_argument("--lora_r",     type=int,   default=16,    help="LoRA rank (higher = more params). Default: 16")
    parser.add_argument("--lora_alpha", type=int,   default=32,    help="LoRA alpha scaling. Default: 32")
    parser.add_argument("--lora_dropout", type=float, default=0.05, help="LoRA dropout. Default: 0.05")

    # Training settings
    parser.add_argument("--data_dir",    default="training/data",            help="Directory with train.jsonl and val.jsonl")
    parser.add_argument("--output_dir",  default="training/output",          help="Where to save LoRA adapter weights")
    parser.add_argument("--merged_dir",  default="training/output/dorvik-bugfixer-merged", help="Where to save merged full model")
    parser.add_argument("--epochs",      type=int,   default=3,     help="Number of training epochs")
    parser.add_argument("--batch_size",  type=int,   default=2,     help="Per-device training batch size")
    parser.add_argument("--grad_accum",  type=int,   default=4,     help="Gradient accumulation steps")
    parser.add_argument("--lr",          type=float, default=2e-4,  help="Learning rate")
    parser.add_argument("--max_seq_len", type=int,   default=2048,  help="Maximum sequence length")
    parser.add_argument("--max_steps",   type=int,   default=-1,    help="Override epochs with fixed step count. -1 = use epochs")
    parser.add_argument("--warmup_ratio",type=float, default=0.05,  help="LR warmup ratio")

    # Hardware
    parser.add_argument("--cpu_only",   action="store_true", help="Force CPU execution (very slow, for testing only)")
    parser.add_argument("--no_4bit",    action="store_true", help="Disable 4-bit quantization (use full precision)")

    # Actions
    parser.add_argument("--dry-run",      action="store_true", help="Validate config & data without running training")
    parser.add_argument("--merge_and_save", action="store_true", help="After training, merge LoRA weights into base model")

    return parser.parse_args()


def check_dependencies(dry_run: bool) -> bool:
    """Check if required ML packages are installed."""
    required = {
        "torch":          "pip install torch --index-url https://download.pytorch.org/whl/cu121",
        "transformers":   "pip install transformers>=4.45.0",
        "peft":           "pip install peft>=0.12.0",
        "trl":            "pip install trl>=0.9.0",
        "bitsandbytes":   "pip install bitsandbytes>=0.43.0",
        "accelerate":     "pip install accelerate>=0.33.0",
        "datasets":       "pip install datasets>=2.20.0",
    }
    missing = []
    for pkg, install_cmd in required.items():
        try:
            __import__(pkg)
        except ImportError:
            missing.append((pkg, install_cmd))

    if missing:
        print("\n❌  Missing dependencies:")
        for pkg, cmd in missing:
            print(f"    {pkg:20s}  →  {cmd}")
        print("\nInstall all at once:")
        print("    pip install -r training/requirements.txt\n")
        if dry_run:
            print("[dry-run] Dependency check FAILED (see above). Training aborted.")
        return False

    print("✅  All dependencies found.")
    return True


def load_dataset_records(data_dir: str):
    """Load JSONL chat records from train/val splits."""
    train_file = os.path.join(data_dir, "train.jsonl")
    val_file   = os.path.join(data_dir, "val.jsonl")

    if not os.path.exists(train_file):
        print(f"❌  Training data not found: {train_file}")
        print("    Run first: python3 training/dataset_curator.py")
        sys.exit(1)

    train_records, val_records = [], []
    with open(train_file, encoding="utf-8") as f:
        for line in f:
            train_records.append(json.loads(line.strip()))
    if os.path.exists(val_file):
        with open(val_file, encoding="utf-8") as f:
            for line in f:
                val_records.append(json.loads(line.strip()))

    print(f"✅  Loaded {len(train_records)} train samples, {len(val_records)} val samples")
    return train_records, val_records


def format_chatml(record: dict) -> str:
    """Convert a chat record into ChatML format for SFTTrainer."""
    out = ""
    for msg in record["messages"]:
        role    = msg["role"]
        content = msg["content"]
        out += f"<|im_start|>{role}\n{content}<|im_end|>\n"
    return out


def run_training(args):
    """Execute QLoRA fine-tuning with TRL SFTTrainer."""
    import torch
    from transformers import (
        AutoModelForCausalLM,
        AutoTokenizer,
        BitsAndBytesConfig,
        TrainingArguments,
    )
    from peft import (
        LoraConfig,
        TaskType,
        get_peft_model,
        prepare_model_for_kbit_training,
    )
    from trl import SFTTrainer, SFTConfig
    from datasets import Dataset

    # ── Device & Quantization Config ──────────────────────────────────────────
    use_gpu = not args.cpu_only and torch.cuda.is_available()
    device  = "cuda" if use_gpu else "cpu"
    print(f"\n🔧  Device: {device}")
    if use_gpu:
        gpu_name = torch.cuda.get_device_name(0)
        vram_gb  = torch.cuda.get_device_properties(0).total_memory / 1e9
        print(f"    GPU: {gpu_name}  |  VRAM: {vram_gb:.1f} GB")

    bnb_config = None
    load_in_4bit = use_gpu and not args.no_4bit
    if load_in_4bit:
        bnb_config = BitsAndBytesConfig(
            load_in_4bit=True,
            bnb_4bit_use_double_quant=True,
            bnb_4bit_quant_type="nf4",          # NF4 = best quality at 4-bit
            bnb_4bit_compute_dtype=torch.bfloat16,
        )
        print("🔧  4-bit NF4 quantization enabled (bfloat16 compute)")
    else:
        print("🔧  Full precision mode (no quantization)")

    # ── Load Tokenizer ────────────────────────────────────────────────────────
    print(f"\n⬇️   Loading tokenizer: {args.base_model}")
    tokenizer = AutoTokenizer.from_pretrained(
        args.base_model,
        trust_remote_code=True,
        padding_side="right",
    )
    # Add ChatML special tokens if missing
    special_tokens = ["<|im_start|>", "<|im_end|>"]
    new_tokens = [t for t in special_tokens if t not in tokenizer.get_vocab()]
    if new_tokens:
        tokenizer.add_special_tokens({"additional_special_tokens": new_tokens})
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    print(f"    Vocab size: {len(tokenizer):,}  |  Pad token: {tokenizer.pad_token}")

    # ── Load Base Model ───────────────────────────────────────────────────────
    print(f"\n⬇️   Loading base model: {args.base_model}")
    model_kwargs = dict(
        trust_remote_code=True,
        quantization_config=bnb_config,
        device_map="auto" if use_gpu else None,
    )
    if not use_gpu:
        model_kwargs["torch_dtype"] = torch.float32

    model = AutoModelForCausalLM.from_pretrained(args.base_model, **model_kwargs)
    model.resize_token_embeddings(len(tokenizer))

    if load_in_4bit:
        model = prepare_model_for_kbit_training(model, use_gradient_checkpointing=True)

    # ── LoRA Config ───────────────────────────────────────────────────────────
    lora_config = LoraConfig(
        task_type=TaskType.CAUSAL_LM,
        r=args.lora_r,
        lora_alpha=args.lora_alpha,
        lora_dropout=args.lora_dropout,
        bias="none",
        # Target the attention projection matrices (standard for most LLMs)
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj",
                        "gate_proj", "up_proj", "down_proj"],
    )
    model = get_peft_model(model, lora_config)
    model.print_trainable_parameters()

    # ── Dataset Preparation ───────────────────────────────────────────────────
    train_records, val_records = load_dataset_records(args.data_dir)

    train_texts = [format_chatml(r) for r in train_records]
    val_texts   = [format_chatml(r) for r in val_records]

    train_ds = Dataset.from_dict({"text": train_texts})
    val_ds   = Dataset.from_dict({"text": val_texts}) if val_texts else None

    Path(args.output_dir).mkdir(parents=True, exist_ok=True)

    # ── Training Arguments ────────────────────────────────────────────────────
    sft_config = SFTConfig(
        output_dir=args.output_dir,
        num_train_epochs=args.epochs,
        max_steps=args.max_steps,
        per_device_train_batch_size=args.batch_size,
        gradient_accumulation_steps=args.grad_accum,
        learning_rate=args.lr,
        warmup_ratio=args.warmup_ratio,
        lr_scheduler_type="cosine",
        fp16=use_gpu and not load_in_4bit,
        bf16=load_in_4bit,
        logging_steps=5,
        save_steps=50,
        eval_steps=50,
        evaluation_strategy="steps" if val_ds else "no",
        max_seq_length=args.max_seq_len,
        packing=True,                   # Pack short sequences for efficiency
        dataset_text_field="text",
        report_to="none",               # No wandb/neptune required
        optim="paged_adamw_8bit" if load_in_4bit else "adamw_torch",
    )

    # ── Launch Training ───────────────────────────────────────────────────────
    print(f"\n🚀  Starting QLoRA fine-tuning...")
    print(f"    Model:        {args.base_model}")
    print(f"    LoRA rank:    {args.lora_r}  |  alpha: {args.lora_alpha}")
    print(f"    Epochs:       {args.epochs}")
    print(f"    Batch size:   {args.batch_size} × {args.grad_accum} (grad accum)")
    print(f"    LR:           {args.lr}")
    print(f"    Output:       {args.output_dir}\n")

    trainer = SFTTrainer(
        model=model,
        tokenizer=tokenizer,
        train_dataset=train_ds,
        eval_dataset=val_ds,
        args=sft_config,
    )
    trainer.train()

    # ── Save LoRA Adapter ─────────────────────────────────────────────────────
    print(f"\n💾  Saving LoRA adapter to {args.output_dir} …")
    trainer.save_model(args.output_dir)
    tokenizer.save_pretrained(args.output_dir)
    print("✅  LoRA adapter saved.")

    # ── Merge Weights (optional) ──────────────────────────────────────────────
    if args.merge_and_save:
        print(f"\n🔀  Merging LoRA adapters into base model…")
        from peft import PeftModel

        # Reload base in float16 for merge (no quantization)
        base_model = AutoModelForCausalLM.from_pretrained(
            args.base_model,
            torch_dtype=torch.float16,
            trust_remote_code=True,
            device_map="auto" if use_gpu else None,
        )
        merged = PeftModel.from_pretrained(base_model, args.output_dir)
        merged = merged.merge_and_unload()

        Path(args.merged_dir).mkdir(parents=True, exist_ok=True)
        merged.save_pretrained(args.merged_dir)
        tokenizer.save_pretrained(args.merged_dir)
        print(f"✅  Merged model saved to {args.merged_dir}")
        print(f"\n📦  Next steps:")
        print(f"    1. Convert to GGUF:  bash training/convert_to_gguf.sh")
        print(f"    2. Load in Ollama:   ollama create dorvik-bugfixer -f training/Modelfile")
        print(f"    3. Or serve via vLLM: bash training/serve_vllm.sh")


def dry_run(args):
    """Validate everything without training."""
    print("\n🔍  DRY RUN — Validating Dorvik BugFixer training config\n")
    print(f"  Base model:    {args.base_model}")
    print(f"  LoRA rank:     {args.lora_r}  |  alpha: {args.lora_alpha}")
    print(f"  Epochs:        {args.epochs}")
    print(f"  Batch size:    {args.batch_size} × {args.grad_accum} steps")
    print(f"  Data dir:      {args.data_dir}")
    print(f"  Output dir:    {args.output_dir}\n")

    ok = check_dependencies(dry_run=True)

    # Validate dataset
    train_file = os.path.join(args.data_dir, "train.jsonl")
    if not os.path.exists(train_file):
        print(f"❌  Dataset not found: {train_file}")
        print(f"    Run: python3 training/dataset_curator.py\n")
    else:
        train_records, val_records = load_dataset_records(args.data_dir)
        # Validate ChatML format
        sample = format_chatml(train_records[0])
        print(f"\n📝  Sample ChatML (first record, first 500 chars):\n")
        print(sample[:500] + "…\n")
        print(f"✅  Dataset valid | {len(train_records)} train, {len(val_records)} val\n")

    if ok:
        print("✅  Config validated. Run without --dry-run to start training.")
    else:
        print("❌  Fix missing dependencies first (see above).")


if __name__ == "__main__":
    args = parse_args()

    print("=" * 60)
    print("  DORVIK BUGFIXER — QLoRA Fine-Tuning Pipeline")
    print("  Zero external APIs. 100% self-hosted.")
    print("=" * 60)

    if args.dry_run:
        dry_run(args)
    else:
        ok = check_dependencies(dry_run=False)
        if not ok:
            sys.exit(1)
        run_training(args)
