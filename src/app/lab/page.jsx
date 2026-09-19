"use client";

import React from "react";
import Link from "next/link";
import { DorvikEditorViewport, DorvikPixelFox } from "@/components/home/DorvikEditorViewport";

export default function DorvikLabPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] dark:bg-[#080809] text-neutral-900 dark:text-neutral-200 pt-28 sm:pt-36 pb-28 font-sans antialiased transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-neutral-400 dark:text-neutral-600">/</span>
          <span className="text-blue-600 dark:text-cyan-400 font-semibold">DORVIK Lab</span>
        </div>

        {/* Lab Hero Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#12131A] border border-neutral-200 dark:border-[#222432] mb-5 text-xs font-mono text-neutral-800 dark:text-neutral-300 shadow-sm transition-colors">
            <div className="w-5 h-5 shrink-0">
              <DorvikPixelFox className="w-full h-full" />
            </div>
            <span className="text-orange-600 dark:text-orange-400 font-bold">Dorvik Pixel Fox</span>
            <span className="text-neutral-400 dark:text-neutral-600">&bull;</span>
            <span className="text-blue-600 dark:text-cyan-400 font-semibold">Autonomous AI &amp; Model Agent v2.4</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Autonomous SWE Agent: PyTorch Fine-Tuning &amp; Model Bug Fixer
          </h1>

          <p className="mt-5 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Welcome to Dorvik Lab. Here we engineer autonomous AI agents capable of reproducing, localizing, and patching complex bugs across PyTorch tensor graphs, LoRA fine-tuning pipelines, and distributed model architectures.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#editor"
              className="px-6 py-3 rounded-lg btn-light-refined text-xs tracking-tight flex items-center gap-2 shadow-sm"
            >
              <span>Watch Live Python Agent Stream</span>
              <span>&darr;</span>
            </a>
            <Link
              href="/agent-builder"
              className="px-6 py-3 rounded-lg bg-neutral-100 dark:bg-[#141418] hover:bg-neutral-200 dark:hover:bg-[#1a1a20] border border-neutral-300 dark:border-[#262630] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium text-xs transition-colors"
            >
              Launch Agent API Builder
            </Link>
          </div>

          {/* Banner: Use our Fox Bug Fixer for your software! */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl border transition-colors shadow-sm bg-white dark:bg-[#0C0C10] border-neutral-200 dark:border-[#1e1e26] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 p-2 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 flex items-center justify-center shrink-0 shadow-inner">
                <DorvikPixelFox className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  Use our Fox Bug Fixer for your software!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl leading-relaxed">
                  Autonomously detects runtime crashes, fixes memory leaks, and opens verified pull requests on your Python and AI repositories.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg btn-light-refined text-xs font-semibold tracking-tight flex items-center gap-2 shadow-sm"
              >
                <span>Deploy Fox on Your Repo</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Live Agent Code Editor Viewport */}
        <div id="editor" className="scroll-mt-28 mb-20">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-neutral-900 dark:text-white">LIVE TELEMETRY:</span>
              <span className="text-neutral-700 dark:text-neutral-300">
                PyTorch &amp; vLLM computational graph AST inspection &amp; autonomous tensor diff synthesis
              </span>
            </div>
            <span className="text-neutral-600 dark:text-neutral-400">
              Select any AI scenario tab to observe live tensor patches
            </span>
          </div>

          <DorvikEditorViewport />
        </div>

        {/* Technical Architecture Breakdown */}
        <div className="bg-white dark:bg-[#0C0C10] border border-neutral-200 dark:border-[#1e1e26] rounded-2xl p-8 sm:p-12 mb-20 shadow-sm dark:shadow-xl transition-colors">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-semibold block mb-2">
              AGENT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Deterministic Neuro-Symbolic Code Synthesis
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              Unlike stochastic LLM text wrappers, Dorvik combines symbolic compiler-level AST analysis with sandboxed execution to guarantee zero hallucinations and zero regressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#111116] border border-neutral-200 dark:border-[#1e1e26] transition-colors shadow-xs">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 mb-3">
                01 &bull; Static Analysis
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">AST Graph Traversal</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Parses repository into abstract syntax graphs to isolate dependency trees, typing mismatches, and tainted variable scope.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#111116] border border-neutral-200 dark:border-[#1e1e26] transition-colors shadow-xs">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 mb-3">
                02 &bull; Isolation
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">MicroVM Sandboxing</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Spins up isolated Firecracker microVMs in sub-seconds to run failing test suites and verify bug reproduction.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#111116] border border-neutral-200 dark:border-[#1e1e26] transition-colors shadow-xs">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 mb-3">
                03 &bull; Patching
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Surgical Diff Gen</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Produces minimal git diffs adhering strictly to the repository&apos;s code style, linter rules, and typing interfaces.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] dark:bg-[#111116] border border-neutral-200 dark:border-[#1e1e26] transition-colors shadow-xs">
              <div className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 mb-3">
                04 &bull; Validation
              </div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">Regression Harness</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Re-executes the full test suite in parallel. If all checks pass, opens a verified Pull Request with full context.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action for Tech Teams */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Deploy the Dorvik Agent in Your Engineering CI/CD
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            We partner with software engineering organizations to deploy autonomous bug-fixing agents directly into GitHub, GitLab, and Bitbucket pipelines.
          </p>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-lg btn-light-refined text-xs shadow-sm inline-flex items-center gap-2"
          >
            Schedule Technical Briefing &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
