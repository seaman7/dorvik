"use client";

import React from "react";
import Link from "next/link";

export function DorvikJulesFooter() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-8 pb-16 select-none flex flex-col items-center text-center">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
        <Link
          href="/contact"
          className="px-8 py-3 bg-[#00D2EF] hover:bg-[#3de2f7] text-[#09051c] font-mono font-black text-sm rounded-pixel-sm shadow-[0_0_25px_rgba(0,210,239,0.5)] transition-all hover:scale-105"
        >
          Try Dorvik
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 bg-[#2b0b5e] hover:bg-[#3d0f85] border-2 border-purple-600 text-purple-200 hover:text-white font-mono font-bold text-sm rounded-pixel-sm transition-all"
        >
          Enterprise Access
        </Link>
      </div>

      {/* Signature Jules Bottom Circuit Tracks */}
      <div className="w-full max-w-3xl space-y-2 mb-10 opacity-70">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-[#784fcf] to-transparent relative">
          <span className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 bg-[#00D2EF] rotate-45"></span>
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 w-2 h-2 bg-[#E1308D] rotate-45"></span>
          <span className="absolute top-1/2 left-3/4 -translate-y-1/2 w-2 h-2 bg-[#F0C642] rotate-45"></span>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-800 to-transparent"></div>
      </div>

      {/* Bottom Minimalist Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-purple-400">
        <Link href="/contact" className="hover:text-cyan-300 transition-colors">
          Terms of Service
        </Link>
        <span>•</span>
        <Link href="/contact" className="hover:text-cyan-300 transition-colors">
          Privacy Policy
        </Link>
        <span>•</span>
        <span>© 2026 DORVIK Engineering Labs</span>
      </div>
    </div>
  );
}
