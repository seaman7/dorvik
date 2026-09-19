"use client";

import React from "react";
import Link from "next/link";

export function DorvikProblemSolution() {
  return (
    <section className="w-full bg-[#08080A] text-neutral-200 py-20 border-b border-neutral-800/80 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            WHY BIZOS? &bull; THE DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Stop Juggling 5 Disconnected Tools.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Most businesses lose hours every day switching between messy spreadsheets, separate billing apps, and manual WhatsApp follow-ups. BizOS fixes this.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Old Painful Way */}
          <div className="p-6 sm:p-8 rounded-2xl bg-red-950/10 border border-red-900/30 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-4">
              <span>✕ The Old Fragmented Way</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              Disconnected, Slow, &amp; Expensive
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                <div>
                  <strong className="text-white block">Multiple costly subscriptions:</strong>
                  Paying for separate POS, CRM, accounting, and inventory tools that don&apos;t sync.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                <div>
                  <strong className="text-white block">Manual bKash payment verification:</strong>
                  Staff waste time checking personal phones for transaction IDs and missing payments.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                <div>
                  <strong className="text-white block">Unpaid invoices fall through the cracks:</strong>
                  No automated system to chase late client payments without awkward phone calls.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                <div>
                  <strong className="text-white block">Cross-border payment friction:</strong>
                  Waiting 5 business days for bank SWIFT wires with 5% to 7% eaten in fees and forex.
                </div>
              </li>
            </ul>
          </div>

          {/* The BizOS Solution */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950/10 border border-emerald-500/30 relative shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <span>✓ The BizOS Solution</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              Everything in One Simple Operating System
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <strong className="text-white block">One customized workspace:</strong>
                  Inventory, sales, customer CRM, and billing live together—tailored to your exact business.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <strong className="text-white block">Automatic payment matching:</strong>
                  Customers pay via bKash, Nagad, or cards; invoices automatically mark as PAID instantly.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <strong className="text-white block">Automated WhatsApp payment chaser:</strong>
                  Polite, scheduled reminders sent automatically to clients with an instant payment link.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <strong className="text-white block">Instant Blockchain escrow:</strong>
                  Receive international payments in USDT/USDC in 2 seconds with zero banking hold-ups.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/bizos"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5 border-b border-neutral-700 pb-0.5"
          >
            <span>See the full feature breakdown for your business</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
