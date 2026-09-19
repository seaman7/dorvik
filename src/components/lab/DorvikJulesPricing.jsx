"use client";

import React from "react";
import Link from "next/link";

export function DorvikJulesPricing() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 select-none">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight mb-2">
          Get the AI team that fixes your workflow.
        </h3>
        <p className="text-purple-300 font-mono text-xs sm:text-sm leading-relaxed">
          Autonomous code fixing without burnout. Free to start, scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tier 1: Free */}
        <div className="p-4 bg-[#14022e] border-2 border-purple-700 rounded-pixel-sm shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-mono font-black text-white">Dorvik</span>
              <span className="font-mono text-xs text-purple-400 font-bold">[■□□]</span>
            </div>
            <div className="text-xs font-mono text-purple-200 mb-4">
              Free forever for public open source.
            </div>
            <ul className="space-y-2 text-xs font-mono text-purple-300 border-t border-purple-800/80 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> 5 autonomous PRs / month
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> Public GitHub repositories
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> Standard VM sandbox
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> Community support
              </li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="mt-6 w-full py-2 bg-purple-900/80 hover:bg-purple-800 text-purple-200 text-xs font-mono font-bold rounded-pixel-sm border border-purple-600 text-center block transition-all"
          >
            Start Free
          </Link>
        </div>

        {/* Tier 2: Pro */}
        <div className="p-4 bg-[#1d0342] border-2 border-cyan-400 rounded-pixel-sm shadow-[0_0_25px_rgba(0,210,239,0.25)] flex flex-col justify-between relative scale-105">
          <div className="absolute -top-3 right-4 px-2 py-0.5 bg-[#00D2EF] text-[#09051c] font-mono text-[10px] font-black rounded-pixel-sm">
            POPULAR
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-mono font-black text-white">Dorvik</span>
                <span className="px-2 py-0.5 bg-cyan-400/20 border border-cyan-400 text-cyan-300 font-mono text-[10px] font-bold rounded">
                  PRO
                </span>
              </div>
              <span className="font-mono text-xs text-cyan-400 font-bold">[■■□]</span>
            </div>
            <div className="text-xs font-mono text-purple-200 mb-4">
              For solo developers and fast-moving teams.
            </div>
            <ul className="space-y-2 text-xs font-mono text-purple-200 border-t border-purple-800/80 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> Unlimited private repos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> High-concurrency tasks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> Priority AI models (PyTorch, Gemini, Claude)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span> Custom linters & test suites
              </li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="mt-6 w-full py-2 bg-[#00D2EF] hover:bg-[#3de2f7] text-[#09051c] text-xs font-mono font-black rounded-pixel-sm text-center block transition-all shadow-md"
          >
            Get Pro Access
          </Link>
        </div>

        {/* Tier 3: Enterprise */}
        <div className="p-4 bg-[#14022e] border-2 border-purple-700 rounded-pixel-sm shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg font-mono font-black text-white">Dorvik</span>
                <span className="px-2 py-0.5 bg-fuchsia-500/20 border border-fuchsia-400 text-fuchsia-300 font-mono text-[10px] font-bold rounded">
                  ULTRA
                </span>
              </div>
              <span className="font-mono text-xs text-fuchsia-400 font-bold">[■■■]</span>
            </div>
            <div className="text-xs font-mono text-purple-200 mb-4">
              For engineering organizations and regulated codebases.
            </div>
            <ul className="space-y-2 text-xs font-mono text-purple-300 border-t border-purple-800/80 pt-4">
              <li className="flex items-center gap-2">
                <span className="text-fuchsia-400 font-bold">•</span> Air-gapped VPC execution
              </li>
              <li className="flex items-center gap-2">
                <span className="text-fuchsia-400 font-bold">•</span> Zero data retention guarantee
              </li>
              <li className="flex items-center gap-2">
                <span className="text-fuchsia-400 font-bold">•</span> 99.99% Enterprise SLA
              </li>
              <li className="flex items-center gap-2">
                <span className="text-fuchsia-400 font-bold">•</span> Custom model adapters & fine-tuning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-fuchsia-400 font-bold">•</span> 24/7 dedicated engineering support
              </li>
            </ul>
          </div>
          <Link
            href="/contact"
            className="mt-6 w-full py-2 bg-purple-900/80 hover:bg-purple-800 text-purple-200 text-xs font-mono font-bold rounded-pixel-sm border border-purple-600 text-center block transition-all"
          >
            Contact Enterprise
          </Link>
        </div>
      </div>
    </div>
  );
}
