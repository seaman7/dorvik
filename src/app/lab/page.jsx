"use client";

import React from "react";
import Link from "next/link";
import { DorvikEditorViewport } from "@/components/home/DorvikEditorViewport";

export default function DorvikLabPage() {
  return (
    <div className="min-h-screen bg-[#08080A] text-neutral-200 pt-24 pb-28 font-sans antialiased">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>DORVIK R&amp;D LAB &bull; AUTONOMOUS AI BUG FIXER &amp; CODE AGENT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Autonomous SWE Agent: The AI Bug Fixer &amp; Code Builder
          </h1>

          <p className="mt-5 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Welcome to Dorvik Lab. Here we build and benchmark autonomous software engineering agents capable of reproducing, localizing, and patching complex bugs in production codebases without human intervention.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#editor"
              className="px-6 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-tight transition-colors shadow-md flex items-center gap-2"
            >
              <span>Watch Live Agent In Action</span>
              <span>&darr;</span>
            </a>
            <Link
              href="/agent-builder"
              className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium text-xs transition-colors"
            >
              Launch Agent API Builder
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              🦊 Dorvik Pixel Fox Agent Engine
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              ⚡ Neuro-Symbolic AST Parsing
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              🔒 MicroVM Sandboxed Execution
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              🎯 SWE-bench Verified Patches
            </span>
          </div>
        </div>

        {/* Live Agent Code Editor Viewport (The Pixel Fox Mascot + Bug Scenarios) */}
        <div id="editor" className="scroll-mt-24 mb-20">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white font-bold">LIVE AGENT TELEMETRY:</span>
              <span>Autonomous bug inspection &amp; inline patching</span>
            </div>
            <span className="text-neutral-500">Select a scenario below to see the agent work</span>
          </div>

          <DorvikEditorViewport />
        </div>

        {/* Technical Architecture Breakdown */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              AGENT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              How the Dorvik Bug Fixer Works
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Unlike generic LLM wrappers, the Dorvik agent combines symbolic code analysis with sandboxed execution to guarantee zero hallucinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold mb-3">
                01
              </div>
              <h3 className="text-sm font-bold text-white mb-1">AST Static Analysis</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Parses repository AST into abstract syntax graphs to identify dependency trees, type mismatches, and tainted variable paths.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold mb-3">
                02
              </div>
              <h3 className="text-sm font-bold text-white mb-1">MicroVM Sandboxing</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Spins up isolated Firecracker microVMs in sub-seconds to run failing test suites and verify bug reproduction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold mb-3">
                03
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Syntactic Patch Gen</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Produces minimal, surgical git diffs adhering strictly to the repository&apos;s code style, linter rules, and typing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold mb-3">
                04
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Autonomous Regression Run</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Re-executes the full test harness. If all checks pass, opens a production-ready Pull Request with full context.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action for Tech Teams */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            Want to Integrate the Dorvik SWE Agent into Your CI/CD?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
            We partner with engineering organizations to deploy autonomous bug-fixing agents directly into GitHub, GitLab, and Bitbucket pipelines.
          </p>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors shadow-md"
          >
            Schedule Technical Briefing &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
