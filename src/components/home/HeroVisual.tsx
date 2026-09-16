"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] max-w-xl mx-auto rounded-sm border border-[#DEDED8] bg-[#FFFFFF] p-5 sm:p-7 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60 pointer-events-none" />

      {/* Top Header Bar / Technical Telemetry */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#E8E8E2] pb-3 text-[10px] font-mono text-[#6B6B6B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
          <span className="font-semibold text-[#111111] uppercase tracking-wider">
            ARCH // 04.SYS.RUNNING
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[#8E8E88]">
          <span>LATENCY: 12ms</span>
          <span>PIPELINE: ACTIVE</span>
          <span className="text-[#1D4ED8]">NODES: 06/06</span>
        </div>
      </div>

      {/* Interactive / Animated Architecture Canvas */}
      <div className="relative z-10 w-full h-[calc(100%-2.5rem)] flex items-center justify-center">
        <svg
          viewBox="0 0 500 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Subtle Outer Boundary Guides */}
          <rect
            x="30"
            y="30"
            width="440"
            height="300"
            stroke="#E8E8E2"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Coordinate crosshairs */}
          <line x1="25" y1="30" x2="35" y2="30" stroke="#111111" strokeWidth="1.5" />
          <line x1="30" y1="25" x2="30" y2="35" stroke="#111111" strokeWidth="1.5" />
          <line x1="465" y1="30" x2="475" y2="30" stroke="#111111" strokeWidth="1.5" />
          <line x1="470" y1="25" x2="470" y2="35" stroke="#111111" strokeWidth="1.5" />
          <line x1="25" y1="330" x2="35" y2="330" stroke="#111111" strokeWidth="1.5" />
          <line x1="30" y1="325" x2="30" y2="335" stroke="#111111" strokeWidth="1.5" />
          <line x1="465" y1="330" x2="475" y2="330" stroke="#111111" strokeWidth="1.5" />
          <line x1="470" y1="325" x2="470" y2="335" stroke="#111111" strokeWidth="1.5" />

          {/* Connected Data Flow Paths */}
          {/* Path 1: Input to Center */}
          <path
            d="M 100 110 C 160 110, 180 180, 250 180"
            stroke="#DEDED8"
            strokeWidth="1.5"
          />
          {/* Path 2: Vision Input to Center */}
          <path
            d="M 100 250 C 160 250, 180 180, 250 180"
            stroke="#DEDED8"
            strokeWidth="1.5"
          />
          {/* Path 3: Center to Inference */}
          <path
            d="M 250 180 C 320 180, 340 110, 400 110"
            stroke="#DEDED8"
            strokeWidth="1.5"
          />
          {/* Path 4: Center to Cloud API */}
          <path
            d="M 250 180 C 320 180, 340 250, 400 250"
            stroke="#DEDED8"
            strokeWidth="1.5"
          />

          {/* Animated Flow Packets */}
          {!shouldReduceMotion && (
            <>
              <motion.circle
                r="3.5"
                fill="#1D4ED8"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  offsetPath: "path('M 100 110 C 160 110, 180 180, 250 180')",
                }}
              />
              <motion.circle
                r="3.5"
                fill="#111111"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.2,
                }}
                style={{
                  offsetPath: "path('M 100 250 C 160 250, 180 180, 250 180')",
                }}
              />
              <motion.circle
                r="3.5"
                fill="#1D4ED8"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
                style={{
                  offsetPath: "path('M 250 180 C 320 180, 340 110, 400 110')",
                }}
              />
              <motion.circle
                r="3.5"
                fill="#111111"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.8,
                }}
                style={{
                  offsetPath: "path('M 250 180 C 320 180, 340 250, 400 250')",
                }}
              />
            </>
          )}

          {/* Node 1: Ingestion Stream */}
          <g transform="translate(60, 85)">
            <rect
              width="80"
              height="50"
              fill="#FFFFFF"
              stroke="#DEDED8"
              strokeWidth="1"
            />
            <rect x="0" y="0" width="3" height="50" fill="#111111" />
            <text x="12" y="22" fill="#111111" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              STREAM_IN
            </text>
            <text x="12" y="38" fill="#6B6B6B" fontSize="8" fontFamily="monospace">
              raw.telemetry
            </text>
          </g>

          {/* Node 2: Vision Perception */}
          <g transform="translate(60, 225)">
            <rect
              width="80"
              height="50"
              fill="#FFFFFF"
              stroke="#DEDED8"
              strokeWidth="1"
            />
            <rect x="0" y="0" width="3" height="50" fill="#1D4ED8" />
            <text x="12" y="22" fill="#111111" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              CV_PERCEPT
            </text>
            <text x="12" y="38" fill="#6B6B6B" fontSize="8" fontFamily="monospace">
              spatial.tensors
            </text>
          </g>

          {/* Center Hub: Model Orchestration Core */}
          <g transform="translate(200, 135)">
            <rect
              width="100"
              height="90"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="40" r="22" stroke="#E8E8E2" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="50" cy="40" r="14" fill="#F7F7F3" stroke="#1D4ED8" strokeWidth="1" />
            <text
              x="50"
              y="44"
              textAnchor="middle"
              fill="#1D4ED8"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
            >
              AI_CORE
            </text>
            <text
              x="50"
              y="74"
              textAnchor="middle"
              fill="#111111"
              fontSize="8.5"
              fontWeight="600"
              fontFamily="sans-serif"
            >
              ORCHESTRATOR
            </text>
          </g>

          {/* Node 3: Real-Time Inference */}
          <g transform="translate(360, 85)">
            <rect
              width="85"
              height="50"
              fill="#FFFFFF"
              stroke="#DEDED8"
              strokeWidth="1"
            />
            <rect x="82" y="0" width="3" height="50" fill="#1D4ED8" />
            <text x="10" y="22" fill="#111111" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              INFERENCE
            </text>
            <text x="10" y="38" fill="#6B6B6B" fontSize="8" fontFamily="monospace">
              p99 &lt; 14ms
            </text>
          </g>

          {/* Node 4: Product & Cloud APIs */}
          <g transform="translate(360, 225)">
            <rect
              width="85"
              height="50"
              fill="#FFFFFF"
              stroke="#DEDED8"
              strokeWidth="1"
            />
            <rect x="82" y="0" width="3" height="50" fill="#111111" />
            <text x="10" y="22" fill="#111111" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              CLOUD_API
            </text>
            <text x="10" y="38" fill="#6B6B6B" fontSize="8" fontFamily="monospace">
              grpc.rest.v1
            </text>
          </g>
        </svg>
      </div>

      {/* Visual Bottom Footer */}
      <div className="relative z-10 pt-2 border-t border-[#E8E8E2] flex items-center justify-between text-[11px] text-[#6B6B6B]">
        <span className="font-mono text-[10px]">VERIFIED_MODEL_GRAPH</span>
        <span className="italic text-[#8E8E88]">Systems designed for real-world complexity.</span>
      </div>
    </div>
  );
}
