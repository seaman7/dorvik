"use client";

import React, { useState, useEffect, useRef } from "react";

// Dorvik's 4 live agent scenarios — real SWE bug types Dorvik fixes autonomously
const SCENARIOS = [
  {
    id: "state-machine",
    category: "State Machine",
    categoryBadge: "bg-fuchsia-400 text-fuchsia-950 border-fuchsia-600",
    buttonLabel: "Bug Fixing",
    objective: "// Objective: Change UserOnboarding to use a state machine for steps",
    file: "src/auth/UserOnboarding.js",
    initialLines: [
      { num: 1, text: "// Objective: Change UserOnboarding to use a state machine for steps", type: "comment" },
      { num: 2, text: "", type: "normal" },
      { num: 3, text: "class UserOnboarding {", type: "normal" },
      { num: 4, text: "  constructor(user) {", type: "normal" },
      { num: 5, text: "    this.user = user;", type: "normal" },
      { num: 6, text: "    this.steps = {", type: "normal" },
      { num: 7, text: "      welcome: { next: 'profile_setup' },", type: "normal" },
      { num: 8, text: "    }", type: "normal" },
      { num: 9, text: "", type: "normal" },
      { num: 10, text: "    this.currentStep = 0;", type: "normal" },
      { num: 11, text: "  }", type: "normal" },
      { num: 12, text: "", type: "normal" },
      { num: 13, text: "  async nextStep() {", type: "normal" },
      { num: 14, text: "    if (this.currentStep < this.steps.length - 1) {", type: "normal" },
      { num: 15, text: "      this.currentStep++;", type: "normal" },
      { num: 16, text: "      // TODO: Trigger analytics", type: "comment" },
      { num: 17, text: "      return this.steps[this.currentStep];", type: "normal" },
      { num: 18, text: "    }", type: "normal" },
      { num: 19, text: "    return \"done\";", type: "normal" },
      { num: 20, text: "  }", type: "normal" },
      { num: 21, text: "", type: "normal" },
      { num: 22, text: "  // Old method - to be removed", type: "comment" },
      { num: 23, text: "  legacyNotification() {", type: "normal" },
      { num: 24, text: "    alert(\"Welcome aboard, \" + this.user.name);", type: "normal" },
      { num: 25, text: "  }", type: "normal" },
      { num: 26, text: "}", type: "normal" },
      { num: 27, text: "", type: "normal" },
      { num: 28, text: "const newUser = { name: \"David\", id: \"usr_123\" };", type: "normal" },
      { num: 29, text: "const onboardingProcess = new UserOnboarding(newUser);", type: "normal" },
      { num: 30, text: "onboardingProcess.nextStep();", type: "normal" },
    ],
    // The sequence of agent autonomous actions
    edits: [
      {
        targetLineIndex: 6, // line 7
        thought: "Converting step object to XState-compatible transition map...",
        statusText: "Dorvik Agent: Injecting OnboardingStateMachine state map...",
        replacementLines: [
          { num: 7, text: "+     this.machine = new StateMachine({", type: "add" },
          { num: 8, text: "+       initial: 'welcome',", type: "add" },
          { num: 9, text: "+       states: { welcome: { on: { NEXT: 'profile_setup' } } }", type: "add" },
          { num: 10, text: "+     });", type: "add" },
        ]
      },
      {
        targetLineIndex: 16, // line 17
        thought: "Adding async analytics emitter and transition guard...",
        statusText: "Dorvik Agent: Synthesizing transition telemetry event...",
        replacementLines: [
          { num: 17, text: "+     await sendTelemetry('step_transition', { user: this.user.id });", type: "add" },
          { num: 18, text: "+     return this.machine.transition('NEXT');", type: "add" },
        ]
      },
      {
        targetLineIndex: 23, // line 24
        thought: "Removing deprecated legacy alert method...",
        statusText: "Dorvik Agent: Purging legacy window.alert calls...",
        replacementLines: [
          { num: 24, text: "-   // legacyNotification removed by Dorvik AI Agent", type: "delete" },
          { num: 25, text: "+   // Handled via modern PushNotificationService", type: "add" },
        ]
      }
    ]
  },
  {
    id: "version-bump",
    category: "Version Bump",
    categoryBadge: "bg-cyan-400 text-cyan-950 border-cyan-500",
    buttonLabel: "Version Bump",
    objective: "// Objective: Bump Next.js to v16 & convert dependencies",
    file: "package.json",
    initialLines: [
      { num: 1, text: "{", type: "normal" },
      { num: 2, text: "  \"name\": \"dorvik-saas-web\",", type: "normal" },
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
      { num: 14, text: "}", type: "normal" }
    ],
    edits: [
      {
        targetLineIndex: 4, // line 5
        thought: "Upgrading Next.js to 16.3.5 with Turbopack...",
        statusText: "Dorvik Agent: Resolving peer dependencies for React 19...",
        replacementLines: [
          { num: 5, text: "-   \"next\": \"14.2.3\",", type: "delete" },
          { num: 6, text: "-   \"react\": \"18.2.0\",", type: "delete" },
          { num: 7, text: "-   \"react-dom\": \"18.2.0\",", type: "delete" },
          { num: 8, text: "+   \"next\": \"16.3.5\",", type: "add" },
          { num: 9, text: "+   \"react\": \"19.2.8\",", type: "add" },
          { num: 10, text: "+   \"react-dom\": \"19.2.8\",", type: "add" }
        ]
      },
      {
        targetLineIndex: 10, // line 11
        thought: "Migrating Tailwind v3 to Tailwind CSS v4...",
        statusText: "Dorvik Agent: Replacing legacy tailwind.config with @tailwindcss/postcss...",
        replacementLines: [
          { num: 11, text: "-   \"tailwindcss\": \"^3.4.1\",", type: "delete" },
          { num: 12, text: "+   \"@tailwindcss/postcss\": \"^4.0.0\",", type: "add" },
          { num: 13, text: "+   \"tailwindcss\": \"^4.0.0\"", type: "add" }
        ]
      }
    ]
  },
  {
    id: "tests",
    category: "Tests",
    categoryBadge: "bg-amber-400 text-amber-950 border-amber-500",
    buttonLabel: "Tests",
    objective: "// Objective: Synthesize comprehensive Jest/Vitest unit tests",
    file: "tests/auth.test.js",
    initialLines: [
      { num: 1, text: "import { describe, it, expect } from 'vitest';", type: "normal" },
      { num: 2, text: "import { UserOnboarding } from '../src/auth/UserOnboarding';", type: "normal" },
      { num: 3, text: "", type: "normal" },
      { num: 4, text: "describe('UserOnboarding Workflow', () => {", type: "normal" },
      { num: 5, text: "  // TODO: Add tests for edge cases and state machine", type: "comment" },
      { num: 6, text: "  it('should initialize correctly', () => {", type: "normal" },
      { num: 7, text: "    const p = new UserOnboarding({ name: 'Alice' });", type: "normal" },
      { num: 8, text: "    expect(p).toBeDefined();", type: "normal" },
      { num: 9, text: "  });", type: "normal" },
      { num: 10, text: "});", type: "normal" }
    ],
    edits: [
      {
        targetLineIndex: 8, // line 9
        thought: "Synthesizing full transition coverage for all states...",
        statusText: "Dorvik Agent: Synthesizing automated test suite...",
        replacementLines: [
          { num: 9, text: "+   it('should transition from welcome to profile_setup', async () => {", type: "add" },
          { num: 10, text: "+     const p = new UserOnboarding({ name: 'Alice', id: 'usr_99' });", type: "add" },
          { num: 11, text: "+     const next = await p.nextStep();", type: "add" },
          { num: 12, text: "+     expect(next.value).toBe('profile_setup');", type: "add" },
          { num: 13, text: "+   });", type: "add" },
        ]
      }
    ]
  },
  {
    id: "memory-leak",
    category: "Memory Leak",
    categoryBadge: "bg-purple-400 text-purple-950 border-purple-500",
    buttonLabel: "Memory Leak",
    objective: "// Objective: Fix React useEffect memory leak on unmounted component",
    file: "src/hooks/useRealtimeData.js",
    initialLines: [
      { num: 1, text: "// Bug: setState called after component unmounts → memory leak", type: "comment" },
      { num: 2, text: "export function useRealtimeData(endpoint) {", type: "normal" },
      { num: 3, text: "  const [data, setData] = useState(null);", type: "normal" },
      { num: 4, text: "  useEffect(() => {", type: "normal" },
      { num: 5, text: "    fetchStream(endpoint, (chunk) => {", type: "normal" },
      { num: 6, text: "      setData(chunk); // crashes if unmounted!", type: "comment" },
      { num: 7, text: "    });", type: "normal" },
      { num: 8, text: "  }, [endpoint]);", type: "normal" },
      { num: 9, text: "  return data;", type: "normal" },
      { num: 10, text: "}", type: "normal" }
    ],
    edits: [
      {
        targetLineIndex: 3,
        thought: "Adding isMounted cleanup guard to cancel async callbacks on unmount...",
        statusText: "Dorvik Agent: Injecting useEffect cleanup to prevent memory leak...",
        replacementLines: [
          { num: 4, text: "-   useEffect(() => {", type: "delete" },
          { num: 5, text: "+   useEffect(() => {", type: "add" },
          { num: 6, text: "+     let isMounted = true;", type: "add" },
          { num: 7, text: "+     fetchStream(endpoint, (chunk) => {", type: "add" },
          { num: 8, text: "+       if (isMounted) setData(chunk);", type: "add" },
          { num: 9, text: "+     });", type: "add" },
          { num: 10, text: "+     return () => { isMounted = false; }; // cleanup", type: "add" }
        ]
      }
    ]
  }
];

export function DorvikEditorViewport() {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const scenario = SCENARIOS[selectedScenarioIndex];

  // Dynamic code editor state
  const [currentLines, setCurrentLines] = useState(scenario.initialLines);
  const [currentEditStep, setCurrentEditStep] = useState(0);
  const [agentState, setAgentState] = useState("idle"); // moving, thinking, editing, idle
  const [thoughtText, setThoughtText] = useState("");
  const [activeLineNum, setActiveLineNum] = useState(6);
  const [statusMsg, setStatusMsg] = useState("Dorvik Agent ready to execute tasks.");

  // When user clicks a scenario button, reset and trigger sequence
  useEffect(() => {
    setCurrentLines(scenario.initialLines);
    setCurrentEditStep(0);
    setAgentState("idle");
    setThoughtText("");
    setActiveLineNum(scenario.edits[0]?.targetLineIndex || 4);
    setStatusMsg(`Dorvik Agent initialized on ${scenario.file}`);

    let isMounted = true;

    // Run the multi-step animation sequence
    const runSequence = async () => {
      // Small initial delay
      await new Promise((r) => setTimeout(r, 600));
      if (!isMounted) return;

      for (let i = 0; i < scenario.edits.length; i++) {
        const edit = scenario.edits[i];
        
        // 1. Move character to line
        setAgentState("moving");
        setActiveLineNum(edit.targetLineIndex);
        setStatusMsg(`Dorvik Agent moving to line ${edit.targetLineIndex + 1}...`);
        await new Promise((r) => setTimeout(r, 700));
        if (!isMounted) return;

        // 2. Think with thought bubble
        setAgentState("thinking");
        setThoughtText(edit.thought);
        setStatusMsg(edit.statusText);
        await new Promise((r) => setTimeout(r, 1200));
        if (!isMounted) return;

        // 3. Edit / Apply code lines
        setAgentState("editing");
        await new Promise((r) => setTimeout(r, 300));
        if (!isMounted) return;

        setCurrentLines((prev) => {
          const next = [...prev];
          next.splice(edit.targetLineIndex, 1, ...edit.replacementLines);
          // Re-index line numbers
          return next.map((l, idx) => ({ ...l, num: idx + 1 }));
        });

        await new Promise((r) => setTimeout(r, 1000));
        if (!isMounted) return;
      }

      // Finish sequence
      setAgentState("idle");
      setThoughtText("");
      setStatusMsg(`✓ Task Complete: ${scenario.file} verified with 0 errors.`);
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [selectedScenarioIndex]);

  // Calculate character vertical position based on active line
  // 24px per line + 48px header padding
  const characterY = Math.max(50, 48 + (activeLineNum * 24));

  return (
    <section id="editor" className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-6 relative">
      <div className="w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Code Editor Viewport (Left 8-9 cols) */}
          <div className="lg:col-span-8 xl:col-span-8 w-full relative z-10">
            {/* Tab selection for mobile or direct file browsing */}
            <div className="flex items-center justify-between mb-2 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">{scenario.file}</span>
                <span className="text-purple-500">•</span>
                <span className="text-purple-300 hidden sm:inline">{scenario.objective}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-cyan-300">
                <span className="animate-pulse text-cyan-400">●</span>
                <span>AGENT LIVE</span>
              </div>
            </div>

            {/* Dorvik Agent Editor — live diff view */}
            <div className="pattern-square-light p-3 md:p-5 rounded-pixel-lg bg-[#22074f] border-2 border-purple-800 shadow-2xl relative">
              <div className="bg-[#09051c] rounded-pixel-sm border-2 border-purple-900 overflow-hidden relative min-h-[520px] flex flex-col justify-between">
                
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#130825] border-b border-purple-800/60 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-fuchsia-500 inline-block"></span>
                    <span className="w-3 h-3 bg-amber-400 inline-block"></span>
                    <span className="w-3 h-3 bg-cyan-400 inline-block"></span>
                    <span className="text-purple-200 font-bold ml-2">{scenario.file}</span>
                  </div>
                  <span className="text-[11px] text-purple-400 font-mono">
                    AUTONOMOUS PATCH STREAM
                  </span>
                </div>

                {/* Editor Code Canvas with Line Numbers & Moving Character */}
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm leading-6 overflow-x-auto flex-1 relative">
                  
                  {/* DORVIK Pixel Bot — moves through lines as agent edits code */}
                  <div
                    className="absolute left-2 md:left-4 pointer-events-none z-30 transition-all duration-700 ease-in-out flex items-center"
                    style={{
                      transform: `translateY(${characterY}px)`,
                      top: 0,
                    }}
                  >
                    {/* Dynamic Thought Bubble */}
                    {thoughtText && (
                      <div className="absolute -top-9 left-6 md:left-8 px-2.5 py-1 bg-white text-purple-950 text-[10px] font-black rounded-pixel-sm shadow-xl border-b-2 border-fuchsia-400 whitespace-nowrap animate-pulse flex items-center gap-1.5 z-40">
                        <span className="w-1.5 h-1.5 bg-fuchsia-600 inline-block"></span>
                        <span>{thoughtText}</span>
                      </div>
                    )}

                    {/* Dorvik Bot SVG Mascot */}
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 shrink-0 ${
                        agentState === "thinking"
                          ? "animate-agent-thinking"
                          : agentState === "editing"
                          ? "animate-pulse"
                          : "animate-agent-idle"
                      }`}
                      style={{ imageRendering: "pixelated" }}
                    >
                       <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-full h-full drop-shadow-[0_2px_12px_rgba(0,210,239,0.6)] dorvik-fox-svg"
                        shapeRendering="crispEdges"
                        style={{ imageRendering: "pixelated" }}
                       >
                        {/* DORVIK PIXEL FOX — 32×32 crisp pixel art */}
                        {/* Left ear */}
                        <rect fill="#f97316" x="4"  y="0" width="6" height="7" />
                        <rect fill="#fff7ed" x="5"  y="1" width="3" height="4" />
                        {/* Right ear */}
                        <rect fill="#f97316" x="22" y="0" width="6" height="7" />
                        <rect fill="#fff7ed" x="23" y="1" width="3" height="4" />
                        {/* Head */}
                        <rect fill="#f97316" x="4"  y="6" width="24" height="12" />
                        {/* Left eye white */}
                        <rect fill="#ffffff" x="7"  y="8" width="6" height="5" />
                        {/* Right eye white */}
                        <rect fill="#ffffff" x="19" y="8" width="6" height="5" />
                        {/* Left pupil — cyan AI glow */}
                        <rect fill="#00D2EF" x="9"  y="9" width="3" height="3" />
                        {/* Right pupil */}
                        <rect fill="#00D2EF" x="21" y="9" width="3" height="3" />
                        {/* Left iris dot */}
                        <rect fill="#09051c" x="10" y="10" width="1" height="1" />
                        {/* Right iris dot */}
                        <rect fill="#09051c" x="22" y="10" width="1" height="1" />
                        {/* Muzzle left */}
                        <rect fill="#fff7ed" x="7"  y="14" width="7" height="5" />
                        {/* Muzzle right */}
                        <rect fill="#fff7ed" x="18" y="14" width="7" height="5" />
                        {/* Nose */}
                        <rect fill="#1e1b4b" x="14" y="14" width="4" height="2" />
                        {/* Body */}
                        <rect fill="#ea580c" x="6"  y="18" width="20" height="10" />
                        {/* Belly */}
                        <rect fill="#fff7ed" x="11" y="19" width="10" height="8" />
                        {/* Left tail */}
                        <rect fill="#f97316" x="0"  y="18" width="6" height="10" />
                        <rect fill="#fff7ed" x="0"  y="26" width="6" height="2" />
                        {/* Right tail */}
                        <rect fill="#f97316" x="26" y="18" width="6" height="10" />
                        <rect fill="#fff7ed" x="26" y="26" width="6" height="2" />
                        {/* Legs */}
                        <rect fill="#ea580c" x="8"  y="28" width="5" height="4" />
                        <rect fill="#ea580c" x="19" y="28" width="5" height="4" />
                       </svg>
                    </div>
                  </div>

                  {/* Code Lines Display */}
                  <div className="space-y-0 pl-10 md:pl-12">
                    {currentLines.map((line, idx) => {
                      const isDel = line.type === "delete";
                      const isAdd = line.type === "add";
                      const isComment = line.type === "comment";
                      const isActive = activeLineNum === idx && agentState === "editing";

                      return (
                        <div
                          key={idx}
                          className={`flex items-center font-mono py-0.5 px-2 transition-colors ${
                            isActive
                              ? "bg-purple-700/40 border-l-2 border-cyan-400"
                              : isDel
                              ? "bg-fuchsia-950/40 text-fuchsia-300 border-l-2 border-fuchsia-500"
                              : isAdd
                              ? "bg-cyan-950/40 text-cyan-300 border-l-2 border-cyan-400 font-semibold"
                              : isComment
                              ? "text-purple-400 italic"
                              : "text-purple-100 hover:bg-purple-900/30"
                          }`}
                        >
                          {/* Line Number */}
                          <span className="w-8 select-none text-right pr-3 text-purple-600 shrink-0 text-[11px]">
                            {line.num}
                          </span>
                          
                          {/* Diff symbol */}
                          <span className="w-4 select-none font-bold text-center shrink-0">
                            {isDel ? "-" : isAdd ? "+" : " "}
                          </span>

                          {/* Code string */}
                          <span className="ml-2 break-all whitespace-pre-wrap">
                            {line.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Dorvik Agent Status Bar */}
                <div className="bg-[#642cc2] px-4 py-2.5 text-white flex items-center justify-between text-xs md:text-sm font-bold border-t-2 border-purple-700">
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="w-6 h-6 bg-purple-900 border border-cyan-400 flex items-center justify-center shrink-0">
                      <span className="text-cyan-400 text-xs">▲</span>
                    </div>
                    <span className="truncate">{statusMsg}</span>
                  </div>
                  <span className="hidden sm:inline-block px-2 py-0.5 bg-purple-950 text-cyan-300 text-[10px] font-mono border border-cyan-400/40">
                    AST ACTIVE
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Dorvik Right Panel — task selector */}
          <div className="lg:col-span-4 xl:col-span-4 w-full">
            <div className="pattern-square-light p-3 pb-4 rounded-pixel-lg bg-[#22074f] border-2 border-purple-800">
              <div className="p-6 md:p-8 rounded-pixel-sm bg-[#130825] border-4 border-purple-700 text-purple-200 flex flex-col items-center text-center">
                
                {/* Dorvik Pixel Fox Icon */}
                <div className="w-14 h-14 bg-purple-900/80 border-2 border-purple-500 rounded-pixel-sm flex items-center justify-center mb-5 text-purple-300 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-10 h-10"
                    shapeRendering="crispEdges"
                    style={{ imageRendering: "pixelated" }}
                  >
                    {/* Left ear */}
                    <rect fill="#f97316" x="4"  y="0" width="6" height="7" />
                    <rect fill="#fff7ed" x="5"  y="1" width="3" height="4" />
                    {/* Right ear */}
                    <rect fill="#f97316" x="22" y="0" width="6" height="7" />
                    <rect fill="#fff7ed" x="23" y="1" width="3" height="4" />
                    {/* Head */}
                    <rect fill="#f97316" x="4"  y="6" width="24" height="12" />
                    {/* Eye whites */}
                    <rect fill="#ffffff" x="7"  y="8" width="6" height="5" />
                    <rect fill="#ffffff" x="19" y="8" width="6" height="5" />
                    {/* Cyan pupils */}
                    <rect fill="#00D2EF" x="9"  y="9" width="3" height="3" />
                    <rect fill="#00D2EF" x="21" y="9" width="3" height="3" />
                    {/* Iris dots */}
                    <rect fill="#09051c" x="10" y="10" width="1" height="1" />
                    <rect fill="#09051c" x="22" y="10" width="1" height="1" />
                    {/* Muzzle */}
                    <rect fill="#fff7ed" x="7"  y="14" width="7" height="5" />
                    <rect fill="#fff7ed" x="18" y="14" width="7" height="5" />
                    <rect fill="#1e1b4b" x="14" y="14" width="4" height="2" />
                    {/* Body */}
                    <rect fill="#ea580c" x="6"  y="18" width="20" height="9" />
                    <rect fill="#fff7ed" x="11" y="19" width="10" height="7" />
                  </svg>
                </div>

                <p className="text-white text-base md:text-lg mb-6 leading-snug font-bold font-mono">
                  Dorvik does coding tasks you{" "}
                  <span className="font-black border-b-3 pb-0.5 border-purple-400 text-purple-200">
                    don&apos;t want
                  </span>{" "}
                  to do.
                </p>

                {/* 4 Dorvik Agent Task Buttons */}
                <div className="flex flex-wrap justify-center gap-2.5 my-2 w-full font-mono">
                  {SCENARIOS.map((sc, sIdx) => {
                    const isSelected = selectedScenarioIndex === sIdx;
                    return (
                      <button
                        key={sc.id}
                        onClick={() => setSelectedScenarioIndex(sIdx)}
                        className={`text-xs md:text-sm font-bold px-3 py-2 border-b-2 transition-transform active:translate-y-0.5 cursor-pointer shadow-sm ${sc.categoryBadge} ${
                          isSelected ? "ring-2 ring-white scale-105" : "opacity-90 hover:opacity-100"
                        }`}
                      >
                        {sc.buttonLabel}
                      </button>
                    );
                  })}
                </div>

                <div className="w-full mt-6 pt-4 border-t border-purple-800/80 flex flex-col gap-2 font-mono">
                  <span className="text-[11px] text-purple-300">
                    Click any task above to watch the agent navigate, think, and patch lines in real time.
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1 text-xs font-bold text-cyan-300 hover:text-white underline mt-2"
                  >
                    Deploy Dorvik AI Bug Fixer on your repo →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
