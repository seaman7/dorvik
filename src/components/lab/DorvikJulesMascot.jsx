"use client";

import React from "react";
import Link from "next/link";

export function DorvikJulesMascot() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 select-none relative">
      {/* Decorative Pixel Plus Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#00D2EF 1.5px, transparent 1.5px), radial-gradient(#E1308D 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      <div className="relative z-10">
        {/* Layout: Center Mascot + 4 surrounding Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left 2 Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1: GitHub Integration */}
            <div className="pattern-square-light p-3 rounded-pixel-sm bg-[#1a0836] border-2 border-purple-700 shadow-xl hover:border-cyan-400 transition-all">
              <div className="bg-[#100129] p-4 rounded-pixel-sm border border-purple-800">
                <div className="w-8 h-8 rounded-pixel-sm bg-purple-900 border border-purple-600 flex items-center justify-center text-cyan-400 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-1">
                  GitHub Integration
                </h4>
                <p className="text-purple-300 font-mono text-xs leading-relaxed">
                  Dorvik inspects your repos to address issues, reproduce bugs, and listen to review comments.
                </p>
              </div>
            </div>

            {/* Card 2: Cloud Sandboxes */}
            <div className="pattern-square-light p-3 rounded-pixel-sm bg-[#1a0836] border-2 border-purple-700 shadow-xl hover:border-amber-400 transition-all">
              <div className="bg-[#100129] p-4 rounded-pixel-sm border border-purple-800">
                <div className="w-8 h-8 rounded-pixel-sm bg-purple-900 border border-purple-600 flex items-center justify-center text-amber-400 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="12" x="3" y="4" rx="1" />
                    <path d="M7 8h.01M10 8h.01M13 8h.01M6 16h12" />
                  </svg>
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-1">
                  Cloud Sandboxes
                </h4>
                <p className="text-purple-300 font-mono text-xs leading-relaxed">
                  Dorvik clones your code in an isolated cloud VM sandbox and creates one verified PR at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Center Mascot (Half Fox / Half Cybernetic Neural Brain) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-6">
            <div className="relative w-56 h-56 flex items-center justify-center drop-shadow-[0_0_35px_rgba(225,48,141,0.4)]">
              <svg viewBox="0 0 160 160" className="w-full h-full" style={{ imageRendering: 'pixelated' }} shapeRendering="crispEdges">
                {/* Body Base */}
                <path d="M 40 60 C 40 30, 120 30, 120 60 L 120 110 C 120 130, 100 130, 95 115 C 90 130, 70 130, 65 115 C 60 130, 40 130, 40 110 Z" fill="#784fcf" />

                {/* LEFT HALF: Cute Dorvik Fox Face */}
                <path d="M 40 60 C 40 30, 80 30, 80 60 L 80 110 C 80 125, 60 130, 40 110 Z" fill="#784fcf" />
                {/* Left Tentacle */}
                <path d="M 40 85 C 20 85, 15 105, 30 115 C 40 120, 45 105, 40 95 Z" fill="#784fcf" />
                {/* Left Eye */}
                <circle cx="62" cy="70" r="6" fill="#09051c" />
                <circle cx="64" cy="68" r="2" fill="#FFFFFF" />

                {/* RIGHT HALF: Exposed Cybernetic AI Brain & Circuit Gears */}
                <path d="M 80 35 C 105 35, 120 45, 120 60 L 120 110 C 120 125, 105 130, 80 115 Z" fill="#1b033d" stroke="#E1308D" strokeWidth="2" />
                {/* Brain Gyri & Neon Circuit Paths */}
                <path d="M 85 45 Q 98 40 108 48 Q 115 56 105 65 Q 92 70 85 62" fill="none" stroke="#E1308D" strokeWidth="3" />
                <path d="M 85 68 Q 102 70 112 78 Q 116 88 106 94 Q 94 98 85 88" fill="none" stroke="#00D2EF" strokeWidth="3" />
                <path d="M 90 82 Q 102 85 104 98 Q 96 108 85 105" fill="none" stroke="#F0C642" strokeWidth="3" />
                {/* Microchips & Nodes */}
                <rect x="94" y="52" width="6" height="6" fill="#00D2EF" />
                <rect x="106" y="66" width="5" height="5" fill="#F0C642" />
                <rect x="92" y="74" width="7" height="7" fill="#E1308D" />
                <circle cx="102" cy="92" r="3" fill="#FFFFFF" />
                {/* Right Tentacle with circuit dots */}
                <path d="M 120 85 C 140 85, 145 105, 130 115 C 120 120, 115 105, 120 95 Z" fill="#784fcf" />
                <circle cx="132" cy="98" r="2.5" fill="#00D2EF" />
                <circle cx="126" cy="108" r="2.5" fill="#E1308D" />
              </svg>
            </div>
          </div>

          {/* Right 2 Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 3: Safe & Secure */}
            <div className="pattern-square-light p-3 rounded-pixel-sm bg-[#1a0836] border-2 border-purple-700 shadow-xl hover:border-emerald-400 transition-all">
              <div className="bg-[#100129] p-4 rounded-pixel-sm border border-purple-800">
                <div className="w-8 h-8 rounded-pixel-sm bg-purple-900 border border-purple-600 flex items-center justify-center text-emerald-400 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-1">
                  Safe & Secure
                </h4>
                <p className="text-purple-300 font-mono text-xs leading-relaxed">
                  Dorvik will not use your private code or repositories to train models. Zero data retention.
                </p>
              </div>
            </div>

            {/* Card 4: Available Anywhere */}
            <div className="pattern-square-light p-3 rounded-pixel-sm bg-[#1a0836] border-2 border-purple-700 shadow-xl hover:border-fuchsia-400 transition-all">
              <div className="bg-[#100129] p-4 rounded-pixel-sm border border-purple-800">
                <div className="w-8 h-8 rounded-pixel-sm bg-purple-900 border border-purple-600 flex items-center justify-center text-fuchsia-400 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
                    <path d="M12 3v18" />
                    <path d="m3 8 9 5 9-5" />
                  </svg>
                </div>
                <h4 className="text-white font-mono font-bold text-sm mb-1">
                  Available Anywhere
                </h4>
                <p className="text-purple-300 font-mono text-xs leading-relaxed">
                  Web view from the CLI or install your own workflows using the API.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
