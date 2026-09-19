"use client";

import React from "react";

export function DorvikJulesIllustrations() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 select-none">
      <div className="text-center mb-8">
        <h3 className="text-xs sm:text-sm font-mono text-purple-300 font-semibold tracking-wider">
          More time to ... take your dog for a walk / go for a bike ride / read a book / play ping pong
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-end justify-items-center">
        {/* 1. Programmer at retro desk */}
        <div className="flex flex-col items-center group">
          <svg viewBox="0 0 100 80" className="w-28 h-24" style={{ imageRendering: 'pixelated' }} shapeRendering="crispEdges">
            {/* Desk */}
            <rect x="10" y="55" width="80" height="4" fill="#00D2EF" />
            <rect x="20" y="59" width="4" height="20" fill="#00D2EF" />
            <rect x="76" y="59" width="4" height="20" fill="#00D2EF" />
            {/* Monitor */}
            <rect x="48" y="24" width="34" height="26" fill="#22074f" stroke="#00D2EF" strokeWidth="2" />
            <rect x="52" y="28" width="26" height="18" fill="#00D2EF" opacity="0.25" />
            <rect x="62" y="50" width="6" height="5" fill="#00D2EF" />
            {/* Person sitting */}
            <rect x="22" y="20" width="16" height="16" fill="#F0C642" />
            <rect x="20" y="18" width="20" height="6" fill="#E1308D" />
            <rect x="22" y="36" width="18" height="20" fill="#E1308D" />
            <rect x="32" y="44" width="14" height="4" fill="#F0C642" />
            <rect x="18" y="50" width="16" height="20" fill="#2b0b5e" stroke="#784fcf" strokeWidth="2" />
          </svg>
        </div>

        {/* 2. Bike ride */}
        <div className="flex flex-col items-center group">
          <svg viewBox="0 0 100 80" className="w-28 h-24" style={{ imageRendering: 'pixelated' }} shapeRendering="crispEdges">
            {/* Person */}
            <rect x="42" y="14" width="14" height="14" fill="#F0C642" />
            <rect x="40" y="12" width="18" height="5" fill="#E1308D" />
            <rect x="38" y="28" width="18" height="18" fill="#E1308D" />
            {/* Bike frame */}
            <circle cx="28" cy="58" r="14" fill="none" stroke="#00D2EF" strokeWidth="3" />
            <circle cx="72" cy="58" r="14" fill="none" stroke="#00D2EF" strokeWidth="3" />
            <path d="M 28 58 L 48 58 L 62 38 L 42 38 Z" fill="none" stroke="#00D2EF" strokeWidth="2.5" />
            <line x1="48" y1="58" x2="42" y2="38" stroke="#00D2EF" strokeWidth="2.5" />
            <line x1="62" y1="38" x2="72" y2="58" stroke="#00D2EF" strokeWidth="2.5" />
            {/* Handlebar & seat */}
            <line x1="58" y1="34" x2="66" y2="34" stroke="#F0C642" strokeWidth="3" />
            <line x1="38" y1="36" x2="46" y2="36" stroke="#E1308D" strokeWidth="3" />
          </svg>
        </div>

        {/* 3. Reading book */}
        <div className="flex flex-col items-center group">
          <svg viewBox="0 0 100 80" className="w-28 h-24" style={{ imageRendering: 'pixelated' }} shapeRendering="crispEdges">
            {/* Person */}
            <rect x="42" y="18" width="16" height="16" fill="#F0C642" />
            <rect x="40" y="16" width="20" height="5" fill="#784fcf" />
            <rect x="38" y="34" width="24" height="22" fill="#E1308D" />
            {/* Legs crossed */}
            <rect x="28" y="56" width="44" height="8" fill="#2b0b5e" />
            {/* Book */}
            <path d="M 36 44 L 50 50 L 64 44 L 64 54 L 50 60 L 36 54 Z" fill="#F0C642" stroke="#00D2EF" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 4. Table Tennis / Ping Pong */}
        <div className="flex flex-col items-center group">
          <svg viewBox="0 0 100 80" className="w-28 h-24" style={{ imageRendering: 'pixelated' }} shapeRendering="crispEdges">
            {/* Table */}
            <rect x="15" y="48" width="70" height="4" fill="#00D2EF" />
            <rect x="25" y="52" width="3" height="20" fill="#00D2EF" />
            <rect x="72" y="52" width="3" height="20" fill="#00D2EF" />
            {/* Net */}
            <rect x="48" y="40" width="4" height="8" fill="#FFFFFF" />
            {/* Ball */}
            <circle cx="44" cy="34" r="2.5" fill="#F0C642" />
            {/* Player 1 */}
            <rect x="8" y="24" width="10" height="10" fill="#F0C642" />
            <rect x="6" y="34" width="12" height="18" fill="#E1308D" />
            <rect x="16" y="38" width="6" height="3" fill="#00D2EF" />
            {/* Player 2 */}
            <rect x="82" y="24" width="10" height="10" fill="#F0C642" />
            <rect x="82" y="34" width="12" height="18" fill="#784fcf" />
            <rect x="78" y="38" width="6" height="3" fill="#E1308D" />
          </svg>
        </div>
      </div>
    </div>
  );
}
