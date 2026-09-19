"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

const QUIPS = [
  "Welcome to Dorvik! I'm your AI engineering companion. Drop us a transmission!",
  "Zero hallucinations: We build deterministic systems backed by compiler AST verifications.",
  "Need full-stack web, custom AI agents, or PyTorch model tuning? We engineer it all.",
  "Our core engineers review all project specs and reply within 4 business hours.",
  "I eat memory leaks and distributed race conditions for breakfast! 🦊",
];

export function DorvikLiveVisualLogo() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [quipIdx, setQuipIdx] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isExcited, setIsExcited] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Periodic natural blinking animation (like Google Jules bot)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3600);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleMascotClick = () => {
    setIsExcited(true);
    setClickCount((prev) => prev + 1);
    setQuipIdx((prev) => (prev + 1) % QUIPS.length);
    setTimeout(() => setIsExcited(false), 700);
  };

  return (
    <div
      className={`rounded-2xl border p-5 transition-all duration-200 shadow-xl relative overflow-hidden ${
        isLight
          ? "bg-white border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          : "bg-[#0C0C14] border-[#222436] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
      }`}
    >
      {/* Subtle CRT / Cyber Background Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header Bar with Jules-style CRT status light */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200 dark:border-[#222436] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className={`font-bold tracking-wider ${isLight ? "text-neutral-900" : "text-white"}`}>
            DORVIK LIVE VISUAL LOGO
          </span>
        </div>
        <span
          className={`text-[10px] px-2 py-0.5 rounded font-semibold border ${
            isLight
              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
              : "bg-emerald-950/60 text-emerald-400 border-emerald-800/40"
          }`}
        >
          LIVE AGENT ACTIVE
        </span>
      </div>

      {/* Main Companion Display Area */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Interactive Pixel Fox Container (Google Jules style) */}
        <button
          type="button"
          onClick={handleMascotClick}
          title="Click to interact with Dorvik Fox!"
          className={`relative p-3 rounded-2xl border transition-all cursor-pointer group shrink-0 ${
            isLight
              ? "bg-gradient-to-b from-orange-50 to-amber-50/40 border-orange-200 hover:border-orange-400 shadow-md hover:shadow-lg"
              : "bg-gradient-to-b from-[#181926] to-[#0E0F18] border-orange-500/30 hover:border-orange-400 shadow-inner"
          } ${isExcited ? "scale-110 -rotate-3" : "hover:scale-105"}`}
        >
          {/* Visual Avatar SVG */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-full h-full dorvik-fox-svg drop-shadow-[0_4px_14px_rgba(249,115,22,0.5)]"
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

              {/* Pupils (animated blink state) */}
              {!isBlinking ? (
                <>
                  <rect fill="#00D2EF" x="9" y="9" width="3" height="3" />
                  <rect fill="#00D2EF" x="21" y="9" width="3" height="3" />
                  <rect fill="#09051c" x="10" y="10" width="1" height="1" />
                  <rect fill="#09051c" x="22" y="10" width="1" height="1" />
                </>
              ) : (
                <>
                  {/* Blinking eyes slit */}
                  <rect fill="#09051c" x="7" y="10" width="6" height="1" />
                  <rect fill="#09051c" x="19" y="10" width="6" height="1" />
                </>
              )}

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
          </div>

          {/* Click me hint badge */}
          <span className="absolute -bottom-2 -right-2 px-1.5 py-0.5 bg-orange-600 text-[9px] font-mono font-bold text-white rounded shadow-sm group-hover:bg-orange-500">
            Click me!
          </span>
        </button>

        {/* Dynamic Thought / Speech Bubble */}
        <div className="flex-1 min-w-0">
          <div
            className={`p-3.5 rounded-xl border text-xs font-mono relative transition-colors shadow-sm ${
              isLight
                ? "bg-[#F8FAFC] border-[#CBD5E1] text-[#0F172A]"
                : "bg-[#141624] border-[#2B2E42] text-neutral-200"
            }`}
          >
            {/* Pointer arrow pointing to the mascot */}
            <div
              className={`hidden sm:block absolute -left-2 top-6 w-3 h-3 rotate-45 border-l border-b ${
                isLight ? "bg-[#F8FAFC] border-[#CBD5E1]" : "bg-[#141624] border-[#2B2E42]"
              }`}
            />
            
            <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              <span>Dorvik Companion • Thought Stream</span>
              {clickCount > 0 && <span>(Tap #{clickCount})</span>}
            </div>

            <p className="text-xs leading-relaxed font-mono select-text">
              &ldquo;{QUIPS[quipIdx]}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Retro Telemetry Footer (Google Jules aesthetic) */}
      <div
        className={`mt-4 pt-3 border-t flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono ${
          isLight ? "border-[#E2E8F0] text-neutral-500" : "border-[#1F212E] text-neutral-400"
        }`}
      >
        <div className="flex items-center gap-2">
          <span>AST CORE: DETERMINISTIC</span>
          <span>&bull;</span>
          <span>SLA: &lt; 4H</span>
        </div>
        <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-bold">
          <span>LATENCY: 14ms</span>
          <span>&bull;</span>
          <span>ENCRYPTION: AES-256</span>
        </div>
      </div>
    </div>
  );
}
