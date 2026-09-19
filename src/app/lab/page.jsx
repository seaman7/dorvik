"use client";

import React from "react";
import Link from "next/link";
import { DorvikEditorViewport } from "@/components/home/DorvikEditorViewport";

export default function DorvikLabPage() {
  return (
    <div className="min-h-screen bg-[#080809] text-neutral-200 pt-28 sm:pt-36 pb-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-cyan-400 font-semibold">DORVIK Lab</span>
        </div>

        {/* Lab Hero Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-3">
            DORVIK R&amp;D LAB &bull; CODE INTELLIGENCE
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Autonomous SWE Agent: The AI Bug Fixer &amp; Code Builder
          </h1>

          <p className="mt-5 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Welcome to Dorvik Lab. Here we engineer autonomous software engineering agents capable of reproducing, localizing, and patching complex bugs across production repositories without human intervention.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#editor"
              className="px-6 py-3 rounded-lg btn-light-refined text-xs tracking-tight flex items-center gap-2 shadow-sm"
            >
              <span>Watch Live Agent Stream</span>
              <span>&darr;</span>
            </a>
            <Link
              href="/agent-builder"
              className="px-6 py-3 rounded-lg bg-[#141418] hover:bg-[#1a1a20] border border-[#262630] text-neutral-300 hover:text-white font-medium text-xs transition-colors"
            >
              Launch Agent API Builder
            </Link>
          </div>

          {/* High-Density Senior Engineering Benchmark Strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-[#0C0C10] border border-[#1e1e26]">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Benchmark Score</span>
              <span className="text-base font-bold text-white font-mono mt-1 block">SWE-bench 78.4%</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0C0C10] border border-[#1e1e26]">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Verification</span>
              <span className="text-base font-bold text-emerald-400 font-mono mt-1 block">AST Deterministic</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0C0C10] border border-[#1e1e26]">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Sandbox Runtime</span>
              <span className="text-base font-bold text-cyan-400 font-mono mt-1 block">MicroVM Isolated</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0C0C10] border border-[#1e1e26]">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Mean Patch Latency</span>
              <span className="text-base font-bold text-white font-mono mt-1 block">420ms / Bug</span>
            </div>
          </div>
        </div>

        {/* Live Agent Code Editor Viewport */}
        <div id="editor" className="scroll-mt-28 mb-20">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white font-bold">LIVE TELEMETRY:</span>
              <span>Autonomous repository AST traversal &amp; inline diff synthesis</span>
            </div>
            <span className="text-neutral-500">Click any scenario tab to observe agent behavior</span>
          </div>

          <DorvikEditorViewport />
        </div>

        {/* Technical Architecture Breakdown */}
        <div className="bg-[#0C0C10] border border-[#1e1e26] rounded-2xl p-8 sm:p-12 mb-20 shadow-xl">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-2">
              AGENT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Deterministic Neuro-Symbolic Code Synthesis
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Unlike stochastic LLM text wrappers, Dorvik combines symbolic compiler-level AST analysis with sandboxed execution to guarantee zero hallucinations and zero regressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-[#111116] border border-[#1e1e26]">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3">
                01 &bull; Static Analysis
              </div>
              <h3 className="text-sm font-bold text-white mb-1">AST Graph Traversal</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Parses repository into abstract syntax graphs to isolate dependency trees, typing mismatches, and tainted variable scope.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111116] border border-[#1e1e26]">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3">
                02 &bull; Isolation
              </div>
              <h3 className="text-sm font-bold text-white mb-1">MicroVM Sandboxing</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Spins up isolated Firecracker microVMs in sub-seconds to run failing test suites and verify bug reproduction.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111116] border border-[#1e1e26]">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3">
                03 &bull; Patching
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Surgical Diff Gen</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Produces minimal git diffs adhering strictly to the repository&apos;s code style, linter rules, and TypeScript interfaces.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111116] border border-[#1e1e26]">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3">
                04 &bull; Validation
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Regression Harness</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Re-executes the full test suite in parallel. If all checks pass, opens a verified Pull Request with full context.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action for Tech Teams */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            Deploy the Dorvik Agent in Your Engineering CI/CD
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
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
