"use client";

import React from "react";
import { DorvikPixelFox } from "@/components/home/DorvikEditorViewport";

export function DorvikJulesWorkflow() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 select-none space-y-12">
      
      {/* STEP 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-pixel-sm bg-[#784fcf] text-white font-mono font-black flex items-center justify-center shrink-0 text-base shadow-[0_0_15px_rgba(120,79,207,0.5)]">
            1
          </div>
          <div>
            <h4 className="text-white font-mono font-bold text-sm sm:text-base leading-snug mb-1">
              Select your GitHub repository and describe your task in prompt or issue...
            </h4>
            <p className="text-purple-300 font-mono text-xs leading-relaxed">
              Ask the models directly to inspect issues, implement features, or optimize memory.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="p-4 bg-[#09051c] border-2 border-purple-700 rounded-pixel-sm shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <span className="text-purple-300 ml-2 font-bold">dorvik / repo-selector</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-purple-400">
                <span className="px-2 py-0.5 bg-purple-900 border border-purple-700 rounded">dorvik-labs/model-engine ▾</span>
                <span className="px-2 py-0.5 bg-purple-900 border border-purple-700 rounded">main ▾</span>
              </div>
            </div>
            <div className="p-3 bg-[#130825] rounded border border-purple-800 text-xs font-mono text-purple-200 leading-relaxed">
              "Analyze how the concept of gradient checkpointing is applied and used in the project, is anything missing?"
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag Divider */}
      <div className="w-full text-center text-purple-600/60 font-mono tracking-[0.3em] overflow-hidden select-none text-xs">
        /////////////////////////////////////////////////////      </div>

      {/* STEP 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-pixel-sm bg-[#F0C642] text-[#09051c] font-mono font-black flex items-center justify-center shrink-0 text-base shadow-[0_0_15px_rgba(240,198,66,0.5)]">
            2
          </div>
          <div>
            <h4 className="text-white font-mono font-bold text-sm sm:text-base leading-snug mb-1">
              Dorvik inspects your repository, parses the codebase, and synthesizes a plan...
            </h4>
            <p className="text-purple-300 font-mono text-xs leading-relaxed">
              Autonomous AST inspection, dependency mapping, and reproduction sandbox generation.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 flex justify-end">
          <div className="w-full max-w-md p-4 bg-[#fff0f5] text-[#160238] border-2 border-fuchsia-400 rounded-pixel-sm shadow-xl relative">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#784fcf]">
              <div className="w-6 h-6">
                <DorvikPixelFox className="w-full h-full" />
              </div>
              <span>Here is my plan:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 font-mono text-xs text-neutral-800">
              <li>Clone repository into VM sandbox</li>
              <li>Reproduce failing tensor backward regression</li>
              <li>Synthesize non-reentrant gradient checkpointing patch</li>
            </ol>
            <div className="mt-3 pt-3 border-t border-fuchsia-300 flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-purple-700 underline cursor-pointer">
                Review All Steps ▾
              </span>
              <button className="px-3 py-1 bg-[#E1308D] hover:bg-[#ff2a85] text-white font-mono font-bold text-xs rounded-pixel-sm transition-all shadow-md">
                Start Auto-Fixing Patch →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag Divider */}
      <div className="w-full text-center text-purple-600/60 font-mono tracking-[0.3em] overflow-hidden select-none text-xs">
        /////////////////////////////////////////////////////      </div>

      {/* STEP 3 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-pixel-sm bg-[#00D2EF] text-[#09051c] font-mono font-black flex items-center justify-center shrink-0 text-base shadow-[0_0_15px_rgba(0,210,239,0.5)]">
            3
          </div>
          <div>
            <h4 className="text-white font-mono font-bold text-sm sm:text-base leading-snug mb-1">
              Dorvik runs in a secure sandbox, builds dependencies, and runs tests...
            </h4>
            <p className="text-purple-300 font-mono text-xs leading-relaxed">
              Every synthesized fix is rigorously verified with automated synthetic unit tests.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="p-4 bg-[#09051c] border-2 border-purple-700 rounded-pixel-sm shadow-xl font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-800 text-[11px] text-purple-400">
              <span>SANDBOX EXECUTION: test_tensor_lora.py</span>
              <span className="text-emerald-400 font-bold">● 18/18 TESTS PASSED</span>
            </div>
            <div className="space-y-1">
              <div className="text-rose-400">- return torch.matmul(q, k.transpose(-2, -1))</div>
              <div className="text-emerald-300 font-bold bg-emerald-500/10 px-1 py-0.5 rounded">
                + return F.scaled_dot_product_attention(q, k, v, attn_mask=mask)
              </div>
              <div className="text-purple-400 text-[11px] pt-1">
                + # Verified flash-attention memory allocation: 0 regressions
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zigzag Divider */}
      <div className="w-full text-center text-purple-600/60 font-mono tracking-[0.3em] overflow-hidden select-none text-xs">
        /////////////////////////////////////////////////////      </div>

      {/* STEP 4 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-pixel-sm bg-[#E1308D] text-white font-mono font-black flex items-center justify-center shrink-0 text-base shadow-[0_0_15px_rgba(225,48,141,0.5)]">
            4
          </div>
          <div>
            <h4 className="text-white font-mono font-bold text-sm sm:text-base leading-snug mb-1">
              Review pull request at your convenience...
            </h4>
            <p className="text-purple-300 font-mono text-xs leading-relaxed">
              Approve the PR and merge into production or comment for further autonomous refinement.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="p-4 bg-[#100129] border-2 border-purple-600 rounded-pixel-sm shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-pixel-sm bg-purple-900 border border-purple-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div>
                <span className="text-white font-mono font-bold text-xs block">
                  Fix Issue #241: Resolved memory leak & added AST test verification
                </span>
                <span className="text-purple-400 font-mono text-[11px]">
                  Opened by dorvik-bot • Verified CI passing
                </span>
              </div>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#2b0b5e] hover:bg-[#3d0f85] border border-purple-500 text-cyan-300 font-mono text-xs font-bold rounded-pixel-sm transition-all shrink-0"
            >
              Open PR ↗
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
