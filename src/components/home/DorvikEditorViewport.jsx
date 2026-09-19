"use client";

import React, { useState, useEffect } from "react";

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

// Dorvik's 3 real-world SWE agent scenarios
const SCENARIOS = [
  {
    id: "state-machine",
    title: "State Machine Refactor",
    category: "Architecture",
    file: "src/auth/UserOnboarding.ts",
    objective: "Refactor multi-step onboarding into a deterministic finite state machine",
    initialLines: [
      { num: 1, text: "// Objective: Refactor UserOnboarding into a typed StateMachine", type: "comment" },
      { num: 2, text: "import { createMachine, interpret } from 'xstate';", type: "normal" },
      { num: 3, text: "", type: "normal" },
      { num: 4, text: "export class UserOnboarding {", type: "normal" },
      { num: 5, text: "  private user: UserRecord;", type: "normal" },
      { num: 6, text: "  private currentStep: number = 0;", type: "normal" },
      { num: 7, text: "  private legacySteps: Record<string, string>;", type: "normal" },
      { num: 8, text: "", type: "normal" },
      { num: 9, text: "  constructor(user: UserRecord) {", type: "normal" },
      { num: 10, text: "    this.user = user;", type: "normal" },
      { num: 11, text: "    this.legacySteps = { welcome: 'profile_setup' };", type: "normal" },
      { num: 12, text: "  }", type: "normal" },
      { num: 13, text: "", type: "normal" },
      { num: 14, text: "  async proceedNext(): Promise<string> {", type: "normal" },
      { num: 15, text: "    if (this.currentStep < 3) {", type: "normal" },
      { num: 16, text: "      this.currentStep++;", type: "normal" },
      { num: 17, text: "      return this.legacySteps['welcome'];", type: "normal" },
      { num: 18, text: "    }", type: "normal" },
      { num: 19, text: "    return 'completed';", type: "normal" },
      { num: 20, text: "  }", type: "normal" },
      { num: 21, text: "", type: "normal" },
      { num: 22, text: "  legacyAlert(): void {", type: "normal" },
      { num: 23, text: "    alert('Welcome ' + this.user.name);", type: "normal" },
      { num: 24, text: "  }", type: "normal" },
      { num: 25, text: "}", type: "normal" },
    ],
    edits: [
      {
        targetLineIndex: 6,
        thought: "Injecting deterministic StateMachine schema & transition guards...",
        statusText: "AST Synthesis: Binding XState machine transitions...",
        replacementLines: [
          { num: 7, text: "+   private machine = createMachine({", type: "add" },
          { num: 8, text: "+     id: 'onboarding',", type: "add" },
          { num: 9, text: "+     initial: 'welcome',", type: "add" },
          { num: 10, text: "+     states: { welcome: { on: { NEXT: 'profile_setup' } } }", type: "add" },
          { num: 11, text: "+   });", type: "add" },
        ],
      },
      {
        targetLineIndex: 16,
        thought: "Replacing untyped dictionary lookup with state machine transition...",
        statusText: "Control Flow: Injecting typed transition telemetry...",
        replacementLines: [
          { num: 17, text: "+     await telemetry.track('step_advance', { uid: this.user.id });", type: "add" },
          { num: 18, text: "+     return this.machine.transition('NEXT').value as string;", type: "add" },
        ],
      },
      {
        targetLineIndex: 22,
        thought: "Purging synchronous alert() to eliminate main thread blocking...",
        statusText: "Clean-up: Replacing legacy alert with NotificationBroker...",
        replacementLines: [
          { num: 23, text: "-     alert('Welcome ' + this.user.name);", type: "delete" },
          { num: 24, text: "+     NotificationBroker.sendWelcome(this.user.id);", type: "add" },
        ],
      },
    ],
    logs: [
      "[0.04s] AST Parser: Indexed 48 syntax nodes in src/auth/UserOnboarding.ts",
      "[0.18s] Diagnostic: Detected state mutation race condition in proceedNext()",
      "[0.35s] Patch: Injected XState finite state schema with guard rules",
      "[0.62s] Sandbox: MicroVM isolated runner executed Jest harness",
      "[0.88s] Verification: 5/5 unit tests passed. Regression rate: 0.0%",
    ],
  },
  {
    id: "version-bump",
    title: "Next.js 16 Upgrade",
    category: "Dependency Migration",
    file: "package.json",
    objective: "Migrate dependencies to Next.js 16, React 19, and Tailwind CSS v4",
    initialLines: [
      { num: 1, text: "{", type: "normal" },
      { num: 2, text: "  \"name\": \"dorvik-production-web\",", type: "normal" },
      { num: 3, text: "  \"version\": \"1.4.0\",", type: "normal" },
      { num: 4, text: "  \"dependencies\": {", type: "normal" },
      { num: 5, text: "    \"next\": \"14.2.3\",", type: "normal" },
      { num: 6, text: "    \"react\": \"18.2.0\",", type: "normal" },
      { num: 7, text: "    \"react-dom\": \"18.2.0\",", type: "normal" },
      { num: 8, text: "    \"lucide-react\": \"^0.350.0\"", type: "normal" },
      { num: 9, text: "  },", type: "normal" },
      { num: 10, text: "  \"devDependencies\": {", type: "normal" },
      { num: 11, text: "    \"tailwindcss\": \"^3.4.1\",", type: "normal" },
      { num: 12, text: "    \"postcss\": \"^8.4.31\"", type: "normal" },
      { num: 13, text: "  }", type: "normal" },
      { num: 14, text: "}", type: "normal" },
    ],
    edits: [
      {
        targetLineIndex: 4,
        thought: "Bumping React core and Next.js to latest stable release...",
        statusText: "Dependency Solver: Resolving peer dependency matrix...",
        replacementLines: [
          { num: 5, text: "-   \"next\": \"14.2.3\",", type: "delete" },
          { num: 6, text: "-   \"react\": \"18.2.0\",", type: "delete" },
          { num: 7, text: "-   \"react-dom\": \"18.2.0\",", type: "delete" },
          { num: 8, text: "+   \"next\": \"16.0.2\",", type: "add" },
          { num: 9, text: "+   \"react\": \"19.1.0\",", type: "add" },
          { num: 10, text: "+   \"react-dom\": \"19.1.0\",", type: "add" },
        ],
      },
      {
        targetLineIndex: 10,
        thought: "Upgrading Tailwind CSS v3 compiler to @tailwindcss/postcss v4...",
        statusText: "PostCSS Engine: Replacing legacy config with native CSS cascade...",
        replacementLines: [
          { num: 11, text: "-   \"tailwindcss\": \"^3.4.1\",", type: "delete" },
          { num: 12, text: "+   \"@tailwindcss/postcss\": \"^4.0.0\",", type: "add" },
          { num: 13, text: "+   \"tailwindcss\": \"^4.0.0\"", type: "add" },
        ],
      },
    ],
    logs: [
      "[0.03s] Dependency Graph: Parsed 14 manifest entries",
      "[0.15s] Solver: Verified React 19 forward-ref deprecation compatibility",
      "[0.41s] Bundle Analyzer: Turbopack compilation succeeded with 0 warnings",
      "[0.72s] Verification: Build artifact validated in clean container",
    ],
  },
  {
    id: "memory-leak",
    title: "React useEffect Memory Leak",
    category: "Performance",
    file: "src/hooks/useDataStream.ts",
    objective: "Fix dangling WebSocket listener and missing AbortController teardown",
    initialLines: [
      { num: 1, text: "import { useEffect, useState } from 'react';", type: "normal" },
      { num: 2, text: "", type: "normal" },
      { num: 3, text: "export function useDataStream(streamUrl: string) {", type: "normal" },
      { num: 4, text: "  const [data, setData] = useState<any[]>([]);", type: "normal" },
      { num: 5, text: "", type: "normal" },
      { num: 6, text: "  useEffect(() => {", type: "normal" },
      { num: 7, text: "    const socket = new WebSocket(streamUrl);", type: "normal" },
      { num: 8, text: "    socket.onmessage = (e) => setData(JSON.parse(e.data));", type: "normal" },
      { num: 9, text: "    // Bug: Missing teardown/cleanup listener on unmount", type: "comment" },
      { num: 10, text: "  }, [streamUrl]);", type: "normal" },
      { num: 11, text: "", type: "normal" },
      { num: 12, text: "  return { data };", type: "normal" },
      { num: 13, text: "}", type: "normal" },
    ],
    edits: [
      {
        targetLineIndex: 8,
        thought: "Detecting unclosed socket connection causing browser memory leak...",
        statusText: "AST Inspection: Synthesizing return cleanup function...",
        replacementLines: [
          { num: 9, text: "+   return () => {", type: "add" },
          { num: 10, text: "+     socket.close(1000, 'Component unmounted');", type: "add" },
          { num: 11, text: "+     socket.onmessage = null;", type: "add" },
          { num: 12, text: "+   };", type: "add" },
        ],
      },
    ],
    logs: [
      "[0.05s] Memory Profiler: Detected active listener retention after unmount",
      "[0.22s] Taint Analysis: Variable socket escapes useEffect closure scope",
      "[0.38s] Patch Synthesized: Injected clean idempotent teardown handler",
      "[0.68s] Memory Stress Test: Heap usage normalized to 14MB baseline",
    ],
  },
];

export function DorvikEditorViewport() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [currentLines, setCurrentLines] = useState(SCENARIOS[0].initialLines);
  const [activeStep, setActiveStep] = useState(0);
  const [activeLineNum, setActiveLineNum] = useState(1);
  const [agentState, setAgentState] = useState("thinking"); // 'thinking' | 'editing' | 'idle'
  const [thought, setThought] = useState("");
  const [statusMsg, setStatusMsg] = useState("Dorvik Fox: Parsing repository AST...");

  const scenario = SCENARIOS[selectedIdx];

  useEffect(() => {
    let isMounted = true;
    setCurrentLines(scenario.initialLines);
    setActiveStep(0);
    setActiveLineNum(1);
    setAgentState("thinking");
    setThought("Analyzing repository abstract syntax tree...");
    setStatusMsg("Dorvik Fox: Parsing AST...");

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

        await new Promise((r) => setTimeout(r, 1100));
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
      setThought("");
      setStatusMsg("✓ Verified: Patch compiles cleanly in isolated MicroVM container");
    };

    runEdits();

    return () => {
      isMounted = false;
    };
  }, [selectedIdx]);

  // Calculate character vertical position based on active line (24px per line + 16px top offset)
  const characterY = Math.max(12, 16 + activeLineNum * 24);

  return (
    <div className="w-full bg-[#0B0C10] border border-[#1F2128] rounded-xl shadow-2xl overflow-hidden font-sans">
      {/* Top Chrome: File Tabs & Agent Telemetry */}
      <div className="h-11 bg-[#101116] border-b border-[#1F2128] px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* macOS controls */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2B2D35]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2B2D35]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2B2D35]" />
          </div>

          <div className="h-4 w-[1px] bg-[#22242D] mx-1" />

          {/* Active File Tab with Dorvik Fox emblem */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#16181F] border border-[#262833] text-xs font-mono text-white">
            <div className="w-4 h-4 shrink-0">
              <DorvikPixelFox className="w-full h-full" />
            </div>
            <span className="text-cyan-400 font-bold">TS</span>
            <span>{scenario.file}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Live Agent Status */}
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>MicroVM Active</span>
          </span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-neutral-300 font-semibold flex items-center gap-1.5">
            <span className="text-orange-400">Dorvik Pixel Fox</span>
            <span className="text-cyan-400 text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">v2.4</span>
          </span>
        </div>
      </div>

      {/* Main Grid: Code Editor on Left, Agent Diagnostics on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Code Diff Canvas (Left 8 cols) */}
        <div className="lg:col-span-8 bg-[#090A0E] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#1F2128] flex flex-col justify-between relative overflow-hidden">
          <div className="relative min-h-[440px]">
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

                {/* Floating Thought / Reasoning Bubble */}
                {thought && (
                  <div className="ml-2.5 px-3 py-1.5 rounded-lg bg-[#141622] border border-cyan-500/50 shadow-2xl text-xs font-mono text-cyan-300 flex items-center gap-2 whitespace-nowrap z-40 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                    <span className="font-semibold text-white">{thought}</span>
                    <span className="text-[10px] text-cyan-400/80 border-l border-cyan-500/30 pl-2">
                      Step {activeStep}/{scenario.edits.length}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Monaco-style Code Diff Canvas with Gutter for the Fox */}
            <div className="font-mono text-xs sm:text-[13px] leading-6 overflow-x-auto select-text pl-12 sm:pl-14">
              {currentLines.map((line, idx) => {
                const isActive = activeLineNum === idx && agentState !== "idle";
                return (
                  <div
                    key={`${line.num}-${line.text}`}
                    className={`flex items-center px-2 py-0.5 rounded-sm transition-colors ${
                      isActive
                        ? "bg-cyan-950/30 border-l-2 border-cyan-400"
                        : line.type === "add"
                        ? "bg-emerald-950/30 text-emerald-300 border-l-2 border-emerald-400"
                        : line.type === "delete"
                        ? "bg-red-950/30 text-red-400 border-l-2 border-red-500 line-through opacity-70"
                        : line.type === "comment"
                        ? "text-neutral-500 italic"
                        : "text-neutral-300 hover:bg-white/[0.02]"
                    }`}
                  >
                    <span className="w-8 shrink-0 text-right pr-4 text-neutral-600 select-none text-[11px]">
                      {line.num}
                    </span>
                    <span className="whitespace-pre">{line.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Status Ribbon */}
          <div className="mt-4 pt-3 border-t border-[#1C1D24] flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="truncate text-neutral-300">{statusMsg}</span>
            </div>
            <span className="shrink-0 text-neutral-500 hidden sm:inline">UTF-8 &bull; TypeScript AST</span>
          </div>
        </div>

        {/* Right Side: Fox Agent Card, Scenario Selector & Live Agent Execution Trace */}
        <div className="lg:col-span-4 bg-[#0D0E13] p-5 flex flex-col justify-between">
          <div>
            {/* Dorvik Pixel Fox Agent Engine Badge */}
            <div className="p-3.5 mb-5 rounded-xl bg-[#12131C] border border-[#222534] flex items-center gap-3.5 shadow-lg">
              <div className="w-12 h-12 p-1.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-cyan-500/10 border border-orange-500/40 shrink-0 flex items-center justify-center shadow-inner">
                <DorvikPixelFox className="w-9 h-9" />
              </div>
              <div className="min-w-0 flex-1 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white tracking-wide">Dorvik Pixel Fox</span>
                  <span className="text-[10px] text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">SWE Agent</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="truncate">
                    {agentState === "editing"
                      ? "Patching AST node..."
                      : agentState === "thinking"
                      ? "Traversing AST graph..."
                      : "Verified in MicroVM"}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold mb-3">
              Select Bug Scenario
            </div>

            <div className="space-y-2 mb-6">
              {SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                    selectedIdx === idx
                      ? "bg-[#181A22] border-cyan-500/40 text-white shadow-sm"
                      : "bg-[#101116] border-[#1F2128] text-neutral-400 hover:text-white hover:border-[#2C2E3A]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{sc.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{sc.category}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 line-clamp-1">{sc.objective}</p>
                </button>
              ))}
            </div>

            {/* Execution Trace Logs */}
            <div className="border-t border-[#1F2128] pt-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
                <span>MicroVM Execution Trace</span>
                <span className="text-emerald-400">Isolated</span>
              </div>

              <div className="p-3 bg-[#08090C] border border-[#1A1C22] rounded-lg space-y-1.5 text-[11px] font-mono text-neutral-300">
                {scenario.logs.map((log, lIdx) => (
                  <div key={lIdx} className="leading-relaxed">
                    <span className="text-cyan-400">{log.split(" ")[0]}</span>{" "}
                    <span className="text-neutral-300">{log.substring(log.indexOf(" ") + 1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Micro Telemetry Footer */}
          <div className="mt-6 pt-3 border-t border-[#1F2128] flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>Deterministic AST Engine</span>
            <span className="text-emerald-400 font-semibold">Zero Regressions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
