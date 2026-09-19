"use client";

import React from "react";
import Link from "next/link";

export function DorvikCleanHero() {
  return (
    <section className="relative w-full bg-[#08080A] text-white pt-32 pb-20 border-b border-neutral-800/80 overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Value Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-mono mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>BizOS &bull; The All-in-One AI &amp; Blockchain Business OS</span>
        </div>

        {/* Clear Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Manage Your Entire Business From One Simple Platform.
        </h1>

        {/* Clear Plain Subheadline */}
        <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Stop paying for 5 separate apps. Manage sales, multi-branch inventory, customer CRM, and automated billing in one place—powered by AI with built-in <strong className="text-white font-medium">bKash, Nagad, and zero-fee Blockchain payments</strong>.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/bizos"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-sm tracking-tight transition-all shadow-lg hover:shadow-cyan-500/10 flex items-center justify-center gap-2"
          >
            <span>Explore BizOS Platform</span>
            <span>&rarr;</span>
          </Link>

          <Link
            href="/bizos#waitlist"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>Book a Free Live Demo</span>
          </Link>
        </div>

        {/* 3 Key Trust Highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-neutral-400 border-t border-neutral-800/60 pt-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 text-base font-bold">✓</span>
            <span>bKash, Nagad &amp; Card Gateway</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-base font-bold">✓</span>
            <span>Instant USDT Blockchain Escrow</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-base font-bold">✓</span>
            <span>Multi-Branch Inventory &amp; POS</span>
          </div>
        </div>

        {/* Realistic Business UI Preview Card (Clean, understandable, not a game) */}
        <div className="mt-14 max-w-5xl mx-auto bg-[#0C0C12] border border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-left">
          {/* Top window bar */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[11px] text-neutral-500">BizOS Live Workspace &bull; Dhaka Main &bull; Active</span>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ● All Systems Connected
            </span>
          </div>

          {/* Clean Dashboard Content */}
          <div className="pt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Quick Metrics */}
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 uppercase font-mono tracking-wider">Today&apos;s Revenue</span>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">৳ 1,48,500</div>
                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <span>+18.4%</span>
                  <span className="text-neutral-500">vs yesterday</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">bKash / Nagad:</span>
                <span className="text-white font-medium">৳ 94,200</span>
              </div>
            </div>

            {/* Inventory Status */}
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800 flex flex-col justify-between">
              <div>
                <span className="text-xs text-neutral-400 uppercase font-mono tracking-wider">Stock &amp; Inventory</span>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">3 Outlets</div>
                <div className="text-xs text-neutral-400 mt-1">
                  1,420 SKUs tracked &bull; Dhanmondi, Banani, Uttara
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-amber-400">Low Stock Alert:</span>
                <span className="text-amber-300 font-medium">3 items auto-reordered</span>
              </div>
            </div>

            {/* Global & Blockchain Rail */}
            <div className="p-4 bg-neutral-900/60 rounded-xl border border-cyan-500/20 flex flex-col justify-between bg-cyan-950/5">
              <div>
                <span className="text-xs text-cyan-400 uppercase font-mono tracking-wider">International Rail</span>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1">$4,850 <span className="text-xs text-cyan-300 font-normal">USDT</span></div>
                <div className="text-xs text-neutral-400 mt-1">
                  Polygon Smart Contract Escrow &bull; 0% Bank Wire Fee
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">Status:</span>
                <span className="text-emerald-400 font-mono">Milestone Released ✓</span>
              </div>
            </div>
          </div>

          {/* Recent Automated Activity Strip */}
          <div className="mt-4 p-3 bg-black/40 rounded-xl border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span><strong>Automated WhatsApp Bot:</strong> Sent payment receipt with bKash confirmation to Rahim Ahmed (+88017...).</span>
            </div>
            <span className="text-neutral-500 font-mono text-[11px] shrink-0">2 mins ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}
