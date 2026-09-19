"use client";

import React, { useState } from "react";
import { DorvikPixelFox } from "@/components/home/DorvikEditorViewport";

const CODE_SCENARIOS = {
  fix: {
    title: "train_lora_qwen.py",
    action: "Fix Issue",
    activeLine: 13,
    bubble: "Synthesizing non-reentrant gradient checkpointing fix for LoRA...",
    lines: [
      { num: 1, text: "import torch", type: "keyword" },
      { num: 2, text: "from peft import LoraConfig, get_peft_model", type: "keyword" },
      { num: 3, text: "from transformers import AutoModelForCausalLM", type: "keyword" },
      { num: 4, text: "", type: "plain" },
      { num: 5, text: "class DorvikModelTrainer:", type: "def" },
      { num: 6, text: "    def __init__(self, model_id: str):", type: "def" },
      { num: 7, text: "        self.model = AutoModelForCausalLM.from_pretrained(model_id)", type: "code" },
      { num: 8, text: "        self.lora_config = LoraConfig(r=16, lora_alpha=32, target_modules=[\"q_proj\", \"v_proj\"])", type: "code" },
      { num: 9, text: "", type: "plain" },
      { num: 10, text: "    def forward_pass(self, input_ids, attention_mask):", type: "def" },
      { num: 11, text: "        # ❌ BEFORE: Runtime tensor mismatch during gradient backward", type: "comment-red" },
      { num: 12, text: "        # ✅ DORVIK PATCH: Dynamic shape validation & safe detachment", type: "comment-green" },
      { num: 13, text: "        if attention_mask is not None and attention_mask.dim() == 2:", type: "patch" },
      { num: 14, text: "            attention_mask = attention_mask[:, None, None, :].to(dtype=torch.float32)", type: "patch" },
      { num: 15, text: "        outputs = self.model(input_ids=input_ids, attention_mask=attention_mask)", type: "code" },
      { num: 16, text: "        return outputs.loss", type: "keyword" },
      { num: 17, text: "", type: "plain" },
      { num: 18, text: "    def execute_backward_step(self, loss, optimizer):", type: "def" },
      { num: 19, text: "        loss.backward()", type: "code" },
      { num: 20, text: "        torch.nn.utils.clip_grad_norm_(self.model.parameters(), 1.0)", type: "code" },
      { num: 21, text: "        optimizer.step()", type: "keyword" },
      { num: 22, text: "        optimizer.zero_grad(set_to_none=True)", type: "code" },
      { num: 23, text: "", type: "plain" },
      { num: 24, text: "# Dorvik Autonomous Verification: 0 Regressions across 2,400 test vectors", type: "comment-cyan" },
    ]
  },
  review: {
    title: "quantize_vllm_engine.py",
    action: "Review PR",
    activeLine: 14,
    bubble: "Reviewing PR #182: Validating BitsAndBytes 4-bit NF4 Quantization...",
    lines: [
      { num: 1, text: "import torch", type: "keyword" },
      { num: 2, text: "from vllm import LLM, SamplingParams", type: "keyword" },
      { num: 3, text: "from transformers import BitsAndBytesConfig", type: "keyword" },
      { num: 4, text: "", type: "plain" },
      { num: 5, text: "def configure_vllm_engine(tensor_parallel_size: int = 4):", type: "def" },
      { num: 6, text: "    bnb_config = BitsAndBytesConfig(", type: "code" },
      { num: 7, text: "        load_in_4bit=True,", type: "code" },
      { num: 8, text: "        bnb_4bit_quant_type=\"nf4\",", type: "code" },
      { num: 9, text: "        bnb_4bit_compute_dtype=torch.bfloat16,", type: "code" },
      { num: 10, text: "    )", type: "code" },
      { num: 11, text: "    # Verify GPU VRAM headroom and KV cache paging", type: "comment-cyan" },
      { num: 12, text: "    engine = LLM(", type: "code" },
      { num: 13, text: "        model=\"Qwen/Qwen2.5-Coder-32B-Instruct\",", type: "code" },
      { num: 14, text: "        gpu_memory_utilization=0.92,", type: "patch" },
      { num: 15, text: "        max_model_len=8192,", type: "code" },
      { num: 16, text: "        trust_remote_code=True", type: "code" },
      { num: 17, text: "    )", type: "code" },
      { num: 18, text: "    return engine", type: "keyword" },
      { num: 19, text: "", type: "plain" },
      { num: 20, text: "# All 16 GPU nodes healthy. KV cache allocated in 1.2 seconds.", type: "comment-green" },
    ]
  },
  plan: {
    title: "dpo_alignment_planner.py",
    action: "Plan",
    activeLine: 8,
    bubble: "Synthesizing AST execution graph: Reference model logit detaching...",
    lines: [
      { num: 1, text: "import torch.nn.functional as F", type: "keyword" },
      { num: 2, text: "from trl import DPOTrainer, DPOConfig", type: "keyword" },
      { num: 3, text: "", type: "plain" },
      { num: 4, text: "def compute_implicit_rewards(policy_chosen_logps, ref_chosen_logps, beta=0.1):", type: "def" },
      { num: 5, text: "    \"\"\"Calculates implicit reward margins under DPO loss formulation\"\"\"", type: "comment-cyan" },
      { num: 6, text: "    with torch.no_grad():", type: "keyword" },
      { num: 7, text: "        # Crucial: detach reference logps to prevent memory leak", type: "comment-green" },
      { num: 8, text: "        ref_chosen_logps = ref_chosen_logps.detach()", type: "patch" },
      { num: 9, text: "    reward = beta * (policy_chosen_logps - ref_chosen_logps)", type: "code" },
      { num: 10, text: "    return reward", type: "keyword" },
      { num: 11, text: "", type: "plain" },
      { num: 12, text: "# Plan: Execute reproduction test suite with 10k synthetic token pairs", type: "comment-cyan" },
    ]
  },
  debug: {
    title: "debug_tensor_kernel.py",
    action: "Debug App's Code",
    activeLine: 11,
    bubble: "Kernel bug isolated: CUDA out-of-memory in FlashAttention-2 tile size...",
    lines: [
      { num: 1, text: "import torch", type: "keyword" },
      { num: 2, text: "import triton", type: "keyword" },
      { num: 3, text: "import triton.language as tl", type: "keyword" },
      { num: 4, text: "", type: "plain" },
      { num: 5, text: "@triton.jit", type: "def" },
      { num: 6, text: "def _fused_attention_kernel(Q, K, V, sm_scale, BLOCK_M: tl.constexpr):", type: "def" },
      { num: 7, text: "    start_m = tl.program_id(0)", type: "code" },
      { num: 8, text: "    offs_m = start_m * BLOCK_M + tl.arange(0, BLOCK_M)", type: "code" },
      { num: 9, text: "    # BUG: Tile boundary overflow during unaligned sequence masking", type: "comment-red" },
      { num: 10, text: "    # FIXED: Bound clamping added for non-power-of-two batches", type: "comment-green" },
      { num: 11, text: "    mask = offs_m[:, None] < seq_len", type: "patch" },
      { num: 12, text: "    tl.store(out_ptr, acc, mask=mask)", type: "code" },
      { num: 13, text: "", type: "plain" },
      { num: 14, text: "# Triton compilation verified on H100 SXM5 with 0 memory faults", type: "comment-green" },
    ]
  }
};

export function DorvikJulesEditor() {
  const [activeTab, setActiveTab] = useState("fix");
  const scenario = CODE_SCENARIOS[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 relative">
      <div className="pattern-square-light p-3 pb-4 rounded-pixel-lg bg-[#22074f] border-2 border-purple-800 shadow-2xl relative">
        <div className="bg-[#09051c] rounded-pixel-sm border-2 border-purple-700 overflow-hidden relative">
          
          {/* Top Window Bar */}
          <div className="h-8 bg-[#130825] border-b border-purple-800/80 px-4 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-fuchsia-400 inline-block"></span>
              <span className="w-2.5 h-2.5 bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 bg-cyan-400 inline-block"></span>
              <span className="text-purple-300 ml-2 font-bold">{scenario.title}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-purple-400">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                RUNNING IN SANDBOX
              </span>
              <span>PYTHON 3.11</span>
            </div>
          </div>

          {/* Editor Body with Code & Line Gliding Mascot */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed relative min-h-[400px] overflow-x-auto">
            {scenario.lines.map((line) => {
              const isActive = line.num === scenario.activeLine;
              return (
                <div
                  key={line.num}
                  className={`flex items-center gap-4 py-0.5 ${
                    isActive ? "bg-purple-900/40 -mx-4 px-4 border-l-2 border-cyan-400" : ""
                  }`}
                >
                  <span className="w-6 text-right select-none text-purple-500/50 font-semibold text-xs">
                    {line.num}
                  </span>
                  <div className="flex-1 whitespace-pre font-mono">
                    {line.type === "keyword" && <span className="text-fuchsia-400 font-semibold">{line.text}</span>}
                    {line.type === "def" && <span className="text-cyan-300 font-bold">{line.text}</span>}
                    {line.type === "code" && <span className="text-purple-100">{line.text}</span>}
                    {line.type === "comment-red" && <span className="text-rose-400 italic">{line.text}</span>}
                    {line.type === "comment-green" && <span className="text-emerald-300 font-medium">{line.text}</span>}
                    {line.type === "comment-cyan" && <span className="text-cyan-400 font-semibold">{line.text}</span>}
                    {line.type === "patch" && <span className="text-amber-300 font-bold bg-amber-500/10 px-1 py-0.5 rounded">{line.text}</span>}
                    {line.type === "plain" && <span>&nbsp;</span>}
                  </div>
                </div>
              );
            })}

            {/* Gliding Dorvik Pixel Fox mascot positioned dynamically */}
            <div
              className="absolute left-6 sm:left-10 transition-all duration-500 pointer-events-none flex items-center gap-3 z-10"
              style={{ top: `${Math.max(20, scenario.activeLine * 22 - 10)}px` }}
            >
              <div className="w-8 h-8 drop-shadow-[0_0_12px_rgba(249,115,22,0.8)] animate-bounce">
                <DorvikPixelFox className="w-full h-full" />
              </div>
              <div className="bg-[#1D0245] border border-cyan-400/80 px-3 py-1.5 rounded-pixel-sm text-[11px] font-mono text-cyan-200 shadow-xl max-w-xs sm:max-w-md animate-pulse">
                🦊 {scenario.bubble}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Pop-up Card on the right matching Jules */}
        <div className="w-full sm:w-80 sm:absolute sm:top-16 sm:right-8 mt-4 sm:mt-0 p-4 bg-[#14022e] border-2 border-purple-600 rounded-pixel-sm shadow-[0_12px_35px_rgba(0,0,0,0.6)] z-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-pixel-sm bg-purple-900 border border-purple-500 flex items-center justify-center text-lg text-purple-300 font-bold">
              ☹
            </div>
            <div className="text-xs font-mono font-bold text-white leading-tight">
              Dorvik does tedious tasks so you don't have to.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={() => setActiveTab("fix")}
              className={`px-2.5 py-1.5 text-xs font-mono font-bold rounded-pixel-sm transition-all text-center ${
                activeTab === "fix"
                  ? "bg-[#E1308D] text-white shadow-[0_0_12px_rgba(225,48,141,0.5)] scale-105"
                  : "bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700"
              }`}
            >
              Fix Issue
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={`px-2.5 py-1.5 text-xs font-mono font-bold rounded-pixel-sm transition-all text-center ${
                activeTab === "review"
                  ? "bg-[#00D2EF] text-[#09051c] shadow-[0_0_12px_rgba(0,210,239,0.5)] scale-105"
                  : "bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700"
              }`}
            >
              Review PR
            </button>
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-2.5 py-1.5 text-xs font-mono font-bold rounded-pixel-sm transition-all text-center ${
                activeTab === "plan"
                  ? "bg-[#F0C642] text-[#09051c] shadow-[0_0_12px_rgba(240,198,66,0.5)] scale-105"
                  : "bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700"
              }`}
            >
              Plan
            </button>
            <button
              onClick={() => setActiveTab("debug")}
              className={`px-2.5 py-1.5 text-xs font-mono font-bold rounded-pixel-sm transition-all text-center ${
                activeTab === "debug"
                  ? "bg-[#784fcf] text-white shadow-[0_0_12px_rgba(120,79,207,0.5)] scale-105"
                  : "bg-purple-900/60 hover:bg-purple-800 text-purple-200 border border-purple-700"
              }`}
            >
              Debug App's Code
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
