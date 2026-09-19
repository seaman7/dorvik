"use client";

import React from "react";
import Link from "next/link";

const COMPARISON_ROWS = [
  {
    feature: "Inventory & Outlets",
    legacy: "Separate Excel sheets per branch. Manual stock counting at end-of-day. Frequent overselling.",
    bizos: "Unified real-time ledger. Automatic branch stock transfer notes and low-stock reorder triggers.",
  },
  {
    feature: "Local Payment Reconciliation",
    legacy: "Cashiers check personal phones for bKash SMS. Manual transaction ID entry prone to fraud.",
    bizos: "Direct merchant webhook API. Dynamic QR on counter POS automatically marks invoices as PAID.",
  },
  {
    feature: "Unpaid Invoices & Overdue Cash",
    legacy: "Manual WhatsApp calls and awkward follow-ups. Invoices easily forgotten or delayed for weeks.",
    bizos: "Scheduled polite WhatsApp bot dispatching 1-click payment links directly to client phones.",
  },
  {
    feature: "International & Export Billing",
    legacy: "3–5 business day SWIFT bank wires. 4% to 7% eaten by intermediary banks and forex margins.",
    bizos: "Polygon / Base smart contract escrow. Settle in USDT/USDC within seconds at sub-cent gas fees.",
  },
  {
    feature: "Software Cost & Overhead",
    legacy: "$120–$300/month across 4 separate software subscriptions that don't speak to each other.",
    bizos: "Single unified workspace tailored to your business model with zero redundant subscriptions.",
  },
];

export function DorvikProblemSolution() {
  return (
    <section className="w-full bg-[#080809] text-neutral-200 py-24 border-b border-[#1b1b20] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-2">
            OPERATIONAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why traditional business software fails growing companies.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            Legacy tools are built for Western enterprises with credit-card heavy workflows. BizOS is engineered from day one for modern multi-channel retail, local mobile banking, and cross-border trade.
          </p>
        </div>

        {/* Clean Comparative Table (Staff Designer / Linear Style) */}
        <div className="bg-[#0C0C10] border border-[#1e1e26] rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-12 bg-[#101015] border-b border-[#1e1e26] py-3.5 px-6 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            <div className="col-span-12 sm:col-span-3 font-semibold text-neutral-300">Operational Area</div>
            <div className="hidden sm:block sm:col-span-4 text-neutral-400">Fragmented Legacy Tools</div>
            <div className="hidden sm:block sm:col-span-5 text-white font-semibold">BizOS Unified Architecture</div>
          </div>

          <div className="divide-y divide-[#171720]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 py-5 px-6 gap-4 sm:gap-6 hover:bg-[#0f0f14] transition-colors text-xs"
              >
                <div className="col-span-12 sm:col-span-3 font-medium text-white flex items-center">
                  <span>{row.feature}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 text-neutral-400 leading-relaxed sm:pr-4">
                  <span className="sm:hidden font-mono text-[10px] uppercase text-neutral-400 block mb-1">
                    Legacy Way:
                  </span>
                  {row.legacy}
                </div>

                <div className="col-span-12 sm:col-span-5 text-neutral-200 leading-relaxed font-normal bg-[#13131a]/60 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-[#202028]">
                  <span className="sm:hidden font-mono text-[10px] uppercase text-emerald-400 block mb-1">
                    BizOS Solution:
                  </span>
                  <span className="text-white font-medium">{row.bizos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <span>Designed for Bangladesh SMBs &bull; Export Houses &bull; Global Agencies</span>
          <Link href="/bizos" className="text-white hover:underline">
            Read technical whitepaper &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
