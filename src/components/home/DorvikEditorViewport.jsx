"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

// Dorvik Pixel Fox mascot SVG (pixel-perfect, crispEdges)
export function DorvikPixelFox({ className = "w-8 h-8" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={`${className} dorvik-fox-svg drop-shadow-[0_2px_10px_rgba(249,115,22,0.45)]`}
      shapeRendering="crispEdges"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Left ear */}
      <rect fill="#f97316" x="4" y="0" width="6" height="7" />
      <rect fill="#fff7ed" x="5" y="1" width="3" height="4" />
      {/* Right ear */}
      <rect fill="#f97316" x="22" y="0" width="6" height="7" />
      <rect fill="#fff7ed" x="23" y="1" width="3" height="4" />
      {/* Head */}
      <rect fill="#f97316" x="4" y="6" width="24" height="12" />
      {/* Eye whites */}
      <rect fill="#ffffff" x="7" y="8" width="6" height="5" />
      <rect fill="#ffffff" x="19" y="8" width="6" height="5" />
      {/* Cyan pupils */}
      <rect fill="#00D2EF" x="9" y="9" width="3" height="3" />
      <rect fill="#00D2EF" x="21" y="9" width="3" height="3" />
      {/* Iris dots */}
      <rect fill="#09051c" x="10" y="10" width="1" height="1" />
      <rect fill="#09051c" x="22" y="10" width="1" height="1" />
      {/* Muzzle */}
      <rect fill="#fff7ed" x="7" y="14" width="7" height="5" />
      <rect fill="#fff7ed" x="18" y="14" width="7" height="5" />
      <rect fill="#1e1b4b" x="14" y="14" width="4" height="2" />
      {/* Body */}
      <rect fill="#ea580c" x="6" y="18" width="20" height="9" />
      <rect fill="#fff7ed" x="11" y="19" width="10" height="7" />
      {/* Tail */}
      <rect fill="#f97316" x="24" y="20" width="8" height="8" />
      <rect fill="#fff7ed" x="26" y="26" width="6" height="2" />
      {/* Legs */}
      <rect fill="#ea580c" x="8" y="28" width="5" height="4" />
      <rect fill="#ea580c" x="19" y="28" width="5" height="4" />
    </svg>
  );
}

// Dorvik AI Engineering Lab: 3 Real-World Python AI Model / Fine-Tuning Scenarios
const SCENARIOS = [
  {
    id: "lora-sft",
    title: "PyTorch LoRA SFT & Attention Mask",
    category: "Model Fine-Tuning",
    file: "train_lora_qwen.py",
    language: "Python",
    badgeLang: "PY",
    objective: "Resolve flash-attention padded tensor mask mismatch & gradient accumulation scaling in LoRA adapter",
    initialLines: [
      { num: 1, text: "# Dorvik AI Lab: LoRA Fine-Tuning Pipeline for Qwen-2.5-Coder", type: "comment" },
      { num: 2, text: "import torch", type: "keyword" },
      { num: 3, text: "from peft import LoraConfig, get_peft_model, TaskType", type: "keyword" },
      { num: 4, text: "from transformers import AutoModelForCausalLM, TrainingArguments", type: "keyword" },
      { num: 5, text: "", type: "normal" },
      { num: 6, text: "def build_lora_trainer(model_id: str, target_rank: int = 16):", type: "def" },
      { num: 7, text: "    print(f'Loading base checkpoint: {model_id}')", type: "normal" },
      { num: 8, text: "    base_model = AutoModelForCausalLM.from_pretrained(", type: "normal" },
      { num: 9, text: "        model_id,", type: "normal" },
      { num: 10, text: "        torch_dtype=torch.bfloat16,", type: "normal" },
      { num: 11, text: "        attn_implementation='flash_attention_2',", type: "normal" },
      { num: 12, text: "        device_map='auto'", type: "normal" },
      { num: 13, text: "    )", type: "normal" },
      { num: 14, text: "    ", type: "normal" },
      { num: 15, text: "    # Bug: Restricting LoRA to q/v only causes rank collapse & poor alignment", type: "comment" },
      { num: 16, text: "    lora_config = LoraConfig(", type: "normal" },
      { num: 17, text: "        r=target_rank,", type: "normal" },
      { num: 18, text: "        lora_alpha=target_rank * 2,", type: "normal" },
      { num: 19, text: "        target_modules=['q_proj', 'v_proj'],", type: "normal" },
      { num: 20, text: "        bias='none',", type: "normal" },
      { num: 21, text: "        task_type=TaskType.CAUSAL_LM", type: "normal" },
      { num: 22, text: "    )", type: "normal" },
      { num: 23, text: "    ", type: "normal" },
      { num: 24, text: "    model = get_peft_model(base_model, lora_config)", type: "normal" },
      { num: 25, text: "    return model", type: "keyword" },
    ],
    edits: [
      {
        targetLineIndex: 18,
        thought: "Expanding LoRA target modules to include k_proj, o_proj & MLP gates to prevent rank collapse...",
        statusText: "AST Patch: Injecting full-rank projection modules [q, k, v, o, gate, up, down]...",
        replacementLines: [
          { num: 19, text: "+       target_modules=['q_proj', 'k_proj', 'v_proj', 'o_proj', 'gate_proj', 'up_proj', 'down_proj'],", type: "add" },
          { num: 20, text: "+       lora_dropout=0.05,", type: "add" },
        ],
      },
      {
        targetLineIndex: 23,
        thought: "Enabling gradient checkpointing with non-reentrant autograd to eliminate CUDA OOM...",
        statusText: "Autograd Optimizer: Enabling memory-efficient gradient checkpointing...",
        replacementLines: [
          { num: 24, text: "+   model.gradient_checkpointing_enable(gradient_checkpointing_kwargs={'use_reentrant': False})", type: "add" },
          { num: 25, text: "+   model.enable_input_require_grads()", type: "add" },
        ],
      },
    ],
    logs: [
      "[0.02s] AST Analyzer: Indexed PyTorch training graph in train_lora_qwen.py",
      "[0.14s] Telemetry: Detected LoRA parameter coverage bottleneck (only 0.08% trainable)",
      "[0.31s] Patch: Expanded adapter projections across all self-attention & MLP layers (0.42%)",
      "[0.55s] MicroVM CUDA Runner: Simulated forward-backward pass [B=4, SeqLen=4096]",
      "[0.78s] Verification: Zero NaN gradients. Peak VRAM stabilized at 18.4GB on A100-80GB",
    ],
  },
  {
    id: "nf4-quantization",
    title: "vLLM 4-Bit NF4 Quantization",
    category: "Model Optimization",
    file: "quantize_vllm_engine.py",
    language: "Python",
    badgeLang: "PY",
    objective: "Resolve BitsAndBytes 4-bit compute dtype fallback to FP32 and double-quantization VRAM leak",
    initialLines: [
      { num: 1, text: "# Objective: 4-bit NF4 Quantization & vLLM PagedAttention KV Cache Loader", type: "comment" },
      { num: 2, text: "import torch", type: "keyword" },
      { num: 3, text: "from transformers import BitsAndBytesConfig, AutoModelForCausalLM", type: "keyword" },
      { num: 4, text: "", type: "normal" },
      { num: 5, text: "class QuantizedModelEngine:", type: "def" },
      { num: 6, text: "    def __init__(self, checkpoint_path: str):", type: "def" },
      { num: 7, text: "        self.model_id = checkpoint_path", type: "normal" },
      { num: 8, text: "        self.device = 'cuda' if torch.cuda.is_available() else 'cpu'", type: "normal" },
      { num: 9, text: "        ", type: "normal" },
      { num: 10, text: "    def load_compressed_checkpoint(self):", type: "def" },
      { num: 11, text: "        # Bug: Default compute dtype falls back to float32 causing CUDA OOM", type: "comment" },
      { num: 12, text: "        bnb_config = BitsAndBytesConfig(", type: "normal" },
      { num: 13, text: "            load_in_4bit=True,", type: "normal" },
      { num: 14, text: "            bnb_4bit_quant_type='nf4',", type: "normal" },
      { num: 15, text: "        )", type: "normal" },
      { num: 16, text: "        ", type: "normal" },
      { num: 17, text: "        model = AutoModelForCausalLM.from_pretrained(", type: "normal" },
      { num: 18, text: "            self.model_id,", type: "normal" },
      { num: 19, text: "            quantization_config=bnb_config,", type: "normal" },
      { num: 20, text: "            device_map='auto'", type: "normal" },
      { num: 21, text: "        )", type: "normal" },
      { num: 22, text: "        return model", type: "keyword" },
    ],
    edits: [
      {
        targetLineIndex: 14,
        thought: "Injecting bnb_4bit_compute_dtype=bfloat16 and nested double quantization...",
        statusText: "Quantization Solver: Configuring NF4 tensor scale packing...",
        replacementLines: [
          { num: 15, text: "+           bnb_4bit_use_double_quant=True,", type: "add" },
          { num: 16, text: "+           bnb_4bit_compute_dtype=torch.bfloat16,", type: "add" },
        ],
      },
      {
        targetLineIndex: 20,
        thought: "Binding flash-attention 2 kernel and tying word embeddings to avoid memory duplication...",
        statusText: "Kernel Binding: Activating FlashAttention-2 compute graph...",
        replacementLines: [
          { num: 21, text: "+           attn_implementation='flash_attention_2',", type: "add" },
          { num: 22, text: "+           torch_dtype=torch.bfloat16,", type: "add" },
        ],
      },
    ],
    logs: [
      "[0.03s] Profiler: Detected FP32 de-quantization fallback in BitsAndBytes configuration",
      "[0.17s] Patch: Injected double-quantization & native bfloat16 tensor compute backend",
      "[0.42s] MicroVM Runner: 70B parameter model footprint reduced from 140GB to 38GB VRAM",
      "[0.69s] Validation: Perplexity baseline verified at 4.88. Zero degradation on GSM8K",
    ],
  },
  {
    id: "dpo-alignment",
    title: "DPO Alignment & Reference Graph Detach",
    category: "RLHF & Alignment",
    file: "dpo_alignment_trainer.py",
    language: "Python",
    badgeLang: "PY",
    objective: "Detach reference model log-probabilities to prevent autograd graph memory explosion during preference optimization",
    initialLines: [
      { num: 1, text: "# Objective: Direct Preference Optimization (DPO) Loss & Implicit Reward Modeling", type: "comment" },
      { num: 2, text: "import torch", type: "keyword" },
      { num: 3, text: "import torch.nn.functional as F", type: "keyword" },
      { num: 4, text: "", type: "normal" },
      { num: 5, text: "def compute_dpo_loss(", type: "def" },
      { num: 6, text: "    policy_chosen_logps: torch.Tensor,", type: "normal" },
      { num: 7, text: "    policy_rejected_logps: torch.Tensor,", type: "normal" },
      { num: 8, text: "    reference_chosen_logps: torch.Tensor,", type: "normal" },
      { num: 9, text: "    reference_rejected_logps: torch.Tensor,", type: "normal" },
      { num: 10, text: "    beta: float = 0.1", type: "normal" },
      { num: 11, text: ") -> torch.Tensor:", type: "normal" },
      { num: 12, text: "    pi_logratios = policy_chosen_logps - policy_rejected_logps", type: "normal" },
      { num: 13, text: "    # Bug: Missing .detach() preserves computation graph of frozen reference model", type: "comment" },
      { num: 14, text: "    ref_logratios = reference_chosen_logps - reference_rejected_logps", type: "normal" },
      { num: 15, text: "    ", type: "normal" },
      { num: 16, text: "    logits = pi_logratios - ref_logratios", type: "normal" },
      { num: 17, text: "    losses = -F.logsigmoid(beta * logits)", type: "normal" },
      { num: 18, text: "    return losses.mean()", type: "keyword" },
    ],
    edits: [
      {
        targetLineIndex: 13,
        thought: "Detaching reference model log-probabilities tensor to free backward graph memory...",
        statusText: "Autograd Optimizer: Freeing reference model computation graph...",
        replacementLines: [
          { num: 14, text: "-   ref_logratios = reference_chosen_logps - reference_rejected_logps", type: "delete" },
          { num: 15, text: "+   ref_logratios = (reference_chosen_logps - reference_rejected_logps).detach()", type: "add" },
        ],
      },
      {
        targetLineIndex: 17,
        thought: "Injecting reward margin telemetry to monitor implicit policy drift...",
        statusText: "Telemetry: Adding implicit reward margin tracking...",
        replacementLines: [
          { num: 18, text: "+   reward_margin = (pi_logratios - ref_logratios).mean().item()", type: "add" },
          { num: 19, text: "+   torch.cuda.empty_cache()", type: "add" },
        ],
      },
    ],
    logs: [
      "[0.02s] Computational Graph: Found active backward gradient leaf on frozen reference model",
      "[0.19s] Patch Synthesized: Injected tensor detachment on reference log-ratio baseline",
      "[0.48s] MicroVM Sandbox: Autograd graph memory allocated reduced from 16.4GB to 2.2GB",
      "[0.74s] Verification: Reward accuracy 84.6% achieved on UltraFeedback benchmark",
    ],
  },
];

export function DorvikEditorViewport() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [currentLines, setCurrentLines] = useState(SCENARIOS[0].initialLines);
  const [activeStep, setActiveStep] = useState(0);
  const [activeLineNum, setActiveLineNum] = useState(1);
  const [agentState, setAgentState] = useState("thinking"); // 'thinking' | 'editing' | 'idle'
  const [thought, setThought] = useState("Analyzing PyTorch computation graph & attention masks...");
  const [statusMsg, setStatusMsg] = useState("Dorvik Fox: Parsing PyTorch AST graph...");

  const scenario = SCENARIOS[selectedIdx];

  useEffect(() => {
    let isMounted = true;
    setCurrentLines(scenario.initialLines);
    setActiveStep(0);
    setActiveLineNum(1);
    setAgentState("thinking");
    setThought("Analyzing PyTorch tensor shapes and computational graph...");
    setStatusMsg(`Dorvik Fox: Inspecting ${scenario.file}...`);

    const runEdits = async () => {
      await new Promise((r) => setTimeout(r, 600));
      if (!isMounted) return;

      for (let i = 0; i < scenario.edits.length; i++) {
        const edit = scenario.edits[i];
        if (!isMounted) return;

        setActiveStep(i + 1);
        setActiveLineNum(edit.targetLineIndex);
        setAgentState("thinking");
        setThought(edit.thought);
        setStatusMsg(edit.statusText);

        await new Promise((r) => setTimeout(r, 1200));
        if (!isMounted) return;

        setAgentState("editing");
        setCurrentLines((prev) => {
          const next = [...prev];
          next.splice(edit.targetLineIndex, 1, ...edit.replacementLines);
          return next.map((l, idx) => ({ ...l, num: idx + 1 }));
        });

        await new Promise((r) => setTimeout(r, 900));
        if (!isMounted) return;
      }

      setAgentState("idle");
      setThought("✓ Optimization verified: 0 errors | Model weights ready for checkpoint export");
      setStatusMsg("✓ Verified: PyTorch forward-backward pass passed in MicroVM container");
    };

    runEdits();

    return () => {
      isMounted = false;
    };
  }, [selectedIdx]);

  // Calculate character vertical position based on active line (24px per line + 16px top offset)
  const characterY = Math.max(12, 16 + activeLineNum * 24);

  return (
    <div
      className={`dorvik-ide-root w-full rounded-xl shadow-2xl overflow-hidden font-sans border transition-colors duration-200 ${
        isLight
          ? "bg-white border-[#E2E8F0] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          : "bg-[#0B0C10] border-[#1F2128]"
      }`}
    >
      {/* Top Chrome: File Tabs & Agent Telemetry */}
      <div
        className={`h-11 px-4 flex items-center justify-between border-b transition-colors ${
          isLight
            ? "bg-[#F8FAFC] border-[#E2E8F0]"
            : "bg-[#101116] border-[#1F2128]"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* macOS controls */}
          <div className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isLight ? "bg-[#CBD5E1]" : "bg-[#2B2D35]"}`} />
            <span className={`w-2.5 h-2.5 rounded-full ${isLight ? "bg-[#CBD5E1]" : "bg-[#2B2D35]"}`} />
            <span className={`w-2.5 h-2.5 rounded-full ${isLight ? "bg-[#CBD5E1]" : "bg-[#2B2D35]"}`} />
          </div>

          <div className={`h-4 w-[1px] mx-1 ${isLight ? "bg-[#E2E8F0]" : "bg-[#22242D]"}`} />

          {/* Active File Tab with Dorvik Fox emblem */}
          <div
            className={`flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono border shadow-sm transition-colors ${
              isLight
                ? "bg-white border-[#CBD5E1] text-[#0F172A]"
                : "bg-[#16181F] border-[#262833] text-white"
            }`}
          >
            <div className="w-4 h-4 shrink-0">
              <DorvikPixelFox className="w-full h-full" />
            </div>
            <span className={isLight ? "text-blue-600 font-bold" : "text-cyan-400 font-bold"}>
              {scenario.badgeLang}
            </span>
            <span className="font-semibold">{scenario.file}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Live Agent Status */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>CUDA MicroVM Active</span>
          </span>
          <span className="text-neutral-300 dark:text-neutral-600 hidden sm:inline">|</span>
          <span className="font-semibold flex items-center gap-1.5 text-neutral-800 dark:text-neutral-300">
            <span className="text-orange-500">Dorvik Pixel Fox</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded border ${
                isLight
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-cyan-950/60 text-cyan-400 border-cyan-500/30"
              }`}
            >
              v2.4
            </span>
          </span>
        </div>
      </div>

      {/* Main Grid: Code Editor on Left, Agent Diagnostics on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px]">
        {/* Code Diff Canvas (Left 8 cols) */}
        <div
          className={`lg:col-span-8 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r flex flex-col justify-between relative overflow-hidden transition-colors ${
            isLight
              ? "bg-[#FAFAFD] border-[#E2E8F0]"
              : "bg-[#090A0E] border-[#1F2128]"
          }`}
        >
          <div className="relative min-h-[460px]">
            {/* DORVIK PIXEL FOX MASCOT — Smoothly glides along lines in the left gutter */}
            <div
              className="absolute left-1 sm:left-2 z-30 pointer-events-none transition-all duration-700 ease-out flex items-center"
              style={{
                top: `${characterY}px`,
              }}
            >
              <div className="relative flex items-center">
                {/* Fox Character Avatar */}
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 ${
                    agentState === "thinking"
                      ? "animate-agent-thinking scale-110"
                      : agentState === "editing"
                      ? "animate-pulse scale-105"
                      : "animate-agent-idle"
                  }`}
                >
                  <DorvikPixelFox className="w-full h-full" />
                </div>

                {/* Floating Thought / Reasoning Bubble — ALWAYS VISIBLE WITH HIGH CONTRAST */}
                {thought && (
                  <div
                    className={`ml-2.5 px-3 py-1.5 rounded-lg shadow-2xl text-xs font-mono flex items-center gap-2 whitespace-nowrap z-40 backdrop-blur-md border ${
                      isLight
                        ? "bg-[#0F172A] text-white border-blue-400 shadow-xl"
                        : "bg-[#141622] text-cyan-300 border-cyan-500/50"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                    <span className="font-semibold text-white">{thought}</span>
                    {activeStep > 0 && (
                      <span className="text-[10px] text-cyan-300/80 border-l border-cyan-500/30 pl-2">
                        Step {activeStep}/{scenario.edits.length}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Monaco-style Code Diff Canvas with Gutter for the Fox */}
            <div className="font-mono text-xs sm:text-[13px] leading-6 overflow-x-auto select-text pl-12 sm:pl-14">
              {currentLines.map((line, idx) => {
                const isActive = activeLineNum === idx && agentState !== "idle";

                // High-contrast color mapping for Day Mode and Night Mode
                let lineBg = "";
                let lineText = "";
                let lineBorder = "";

                if (isActive) {
                  lineBg = isLight ? "bg-blue-50" : "bg-cyan-950/40";
                  lineBorder = isLight ? "border-l-2 border-blue-600" : "border-l-2 border-cyan-400";
                } else if (line.type === "add") {
                  lineBg = isLight ? "bg-[#DCFCE7]" : "bg-emerald-950/40";
                  lineText = isLight ? "text-[#14532D] font-bold" : "text-emerald-300 font-bold";
                  lineBorder = isLight ? "border-l-2 border-emerald-600" : "border-l-2 border-emerald-400";
                } else if (line.type === "delete") {
                  lineBg = isLight ? "bg-[#FEE2E2]" : "bg-red-950/40";
                  lineText = isLight ? "text-[#991B1B] line-through opacity-80" : "text-red-400 line-through opacity-70";
                  lineBorder = isLight ? "border-l-2 border-red-600" : "border-l-2 border-red-500";
                } else if (line.type === "comment") {
                  lineText = isLight ? "text-[#64748B] italic" : "text-neutral-500 italic";
                } else if (line.type === "keyword") {
                  lineText = isLight ? "text-[#7C3AED] font-semibold" : "text-[#C084FC] font-semibold";
                } else if (line.type === "def") {
                  lineText = isLight ? "text-[#0284C7] font-semibold" : "text-[#38BDF8] font-semibold";
                } else {
                  lineText = isLight ? "text-[#0F172A]" : "text-neutral-200";
                }

                return (
                  <div
                    key={`${line.num}-${line.text}`}
                    className={`flex items-center px-2 py-0.5 rounded-sm transition-colors ${lineBg} ${lineBorder} ${lineText}`}
                  >
                    <span
                      className={`w-8 shrink-0 text-right pr-4 select-none text-[11px] font-mono ${
                        isLight ? "text-[#94A3B8]" : "text-neutral-600"
                      }`}
                    >
                      {line.num}
                    </span>
                    <span className="whitespace-pre font-mono">{line.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Status Ribbon */}
          <div
            className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-mono transition-colors ${
              isLight
                ? "border-[#E2E8F0] text-[#334155]"
                : "border-[#1C1D24] text-neutral-400"
            }`}
          >
            <div className="flex items-center gap-2 truncate">
              <span className={`w-2 h-2 rounded-full ${isLight ? "bg-blue-600" : "bg-cyan-400"}`} />
              <span className={`truncate font-medium ${isLight ? "text-[#0F172A]" : "text-neutral-200"}`}>
                {statusMsg}
              </span>
            </div>
            <span className={`shrink-0 hidden sm:inline ${isLight ? "text-[#64748B]" : "text-neutral-500"}`}>
              UTF-8 &bull; PyTorch AST Graph &bull; CUDA 12.4
            </span>
          </div>
        </div>

        {/* Right Side: Fox Agent Card, Scenario Selector & Live Agent Execution Trace */}
        <div
          className={`lg:col-span-4 p-5 flex flex-col justify-between transition-colors ${
            isLight
              ? "bg-[#F8FAFC]"
              : "bg-[#0D0E13]"
          }`}
        >
          <div>
            {/* Dorvik Pixel Fox Agent Engine Badge */}
            <div
              className={`p-3.5 mb-5 rounded-xl border flex items-center gap-3.5 shadow-md transition-colors ${
                isLight
                  ? "bg-white border-[#E2E8F0]"
                  : "bg-[#12131C] border-[#222534]"
              }`}
            >
              <div
                className={`w-12 h-12 p-1.5 rounded-xl shrink-0 flex items-center justify-center shadow-inner border ${
                  isLight
                    ? "bg-orange-50 border-orange-200"
                    : "bg-gradient-to-br from-orange-500/20 to-cyan-500/10 border-orange-500/40"
                }`}
              >
                <DorvikPixelFox className="w-9 h-9" />
              </div>
              <div className="min-w-0 flex-1 font-mono">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold tracking-wide ${isLight ? "text-[#0F172A]" : "text-white"}`}>
                    Dorvik Pixel Fox
                  </span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded border font-semibold ${
                      isLight
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-cyan-950/60 text-cyan-400 border-cyan-500/30"
                    }`}
                  >
                    AI Agent
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 mt-1 text-[11px] ${isLight ? "text-[#475569]" : "text-neutral-400"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="truncate font-medium">
                    {agentState === "editing"
                      ? "Patching PyTorch AST..."
                      : agentState === "thinking"
                      ? "Analyzing computational graph..."
                      : "Verified in MicroVM Sandbox"}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`text-[11px] font-mono uppercase tracking-wider font-bold mb-3 ${
                isLight ? "text-[#475569]" : "text-neutral-400"
              }`}
            >
              Select AI Model Scenario
            </div>

            <div className="space-y-2 mb-6">
              {SCENARIOS.map((sc, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-3 rounded-lg border transition-all text-xs font-mono ${
                      isSelected
                        ? isLight
                          ? "bg-blue-50/70 border-blue-500 shadow-sm ring-1 ring-blue-500/30"
                          : "bg-[#181A22] border-cyan-500/50 text-white shadow-sm"
                        : isLight
                        ? "bg-white border-[#E2E8F0] text-[#334155] hover:border-[#CBD5E1] hover:bg-neutral-50"
                        : "bg-[#101116] border-[#1F2128] text-neutral-400 hover:text-white hover:border-[#2C2E3A]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold ${isLight ? "text-[#0F172A]" : "text-white"}`}>
                        {sc.title}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-semibold ${
                          isLight ? "text-blue-700" : "text-cyan-400"
                        }`}
                      >
                        {sc.category}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] line-clamp-1 ${
                        isLight ? "text-[#64748B]" : "text-neutral-400"
                      }`}
                    >
                      {sc.objective}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Execution Trace Logs */}
            <div className={`border-t pt-4 ${isLight ? "border-[#E2E8F0]" : "border-[#1F2128]"}`}>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider mb-2 font-bold">
                <span className={isLight ? "text-[#475569]" : "text-neutral-400"}>
                  CUDA MicroVM Trace
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Isolated
                </span>
              </div>

              <div
                className={`p-3 rounded-lg space-y-1.5 text-[11px] font-mono border shadow-inner ${
                  isLight
                    ? "bg-white border-[#E2E8F0] text-[#1E293B]"
                    : "bg-[#08090C] border-[#1A1C22] text-neutral-300"
                }`}
              >
                {scenario.logs.map((log, lIdx) => (
                  <div key={lIdx} className="leading-relaxed font-mono">
                    <span className={isLight ? "text-blue-600 font-bold" : "text-cyan-400 font-bold"}>
                      {log.split(" ")[0]}
                    </span>{" "}
                    <span className={isLight ? "text-[#1E293B] font-medium" : "text-neutral-200"}>
                      {log.substring(log.indexOf(" ") + 1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Micro Telemetry Footer */}
          <div
            className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
              isLight
                ? "border-[#E2E8F0] text-[#64748B]"
                : "border-[#1F2128] text-neutral-400"
            }`}
          >
            <span>Deterministic PyTorch AST Engine</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Zero Regressions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
