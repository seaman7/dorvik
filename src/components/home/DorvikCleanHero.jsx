"use client";

import React, { useState } from "react";
import Link from "next/link";

export function DorvikCleanHero() {
  const [activeTab, setActiveTab] = useState("inventory");

  return (
    <section className="relative w-full bg-[#080809] text-white pt-28 pb-24 border-b border-[#1b1b20] font-sans antialiased overflow-hidden">
      {/* Subtle architectural grid pattern instead of blurry neon blobs */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Crisp Announcement Bar (Linear / Vercel style) */}
        <div className="flex justify-center mb-8">
          <Link
            href="/bizos"
            className="group inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131317] border border-[#23232b] hover:border-[#353540] text-neutral-300 text-xs transition-all"
          >
            <span className="font-semibold text-white">BizOS 1.0</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400 group-hover:text-white transition-colors">
              Unified business operating system for Bangladesh &amp; global trade
            </span>
            <span className="text-neutral-500 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </Link>
        </div>

        {/* Confident, Professional Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-[-0.035em] text-white leading-[1.1] text-balance">
            Software that runs your stock, sales, and cross-border cash flow.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal text-balance">
            Replace disconnected spreadsheets, separate POS devices, and manual bKash checking. Manage multi-branch inventory, issue localized and crypto invoices, and automate customer follow-ups on WhatsApp.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/bizos#waitlist"
              className="w-full sm:w-auto px-6 py-3 rounded-lg btn-light-refined text-xs tracking-tight flex items-center justify-center gap-2"
            >
              <span>Request Early Access Workspace</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/bizos"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141418] hover:bg-[#1a1a20] border border-[#262630] text-neutral-200 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>View Product Architecture</span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="text-white font-semibold">Native BDT Rails:</span> bKash, Nagad &amp; SSLCOMMERZ
            </span>
            <span className="text-neutral-700 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <span className="text-white font-semibold">Web3 Protocol:</span> Polygon USDT Escrow
            </span>
            <span className="text-neutral-700 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <span className="text-white font-semibold">Offline-Sync:</span> Barcode POS
            </span>
          </div>
        </div>

        {/* REAL High-Fidelity Application Window Mockup (Genuine Engineering Craft) */}
        <div className="mt-16 bg-[#0E0E12] border border-[#202028] rounded-xl shadow-2xl overflow-hidden text-left">
          {/* Top Window Chrome */}
          <div className="h-10 bg-[#121216] border-b border-[#202028] px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a34]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a34]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a34]" />
              <span className="ml-3 font-mono text-[11px] text-neutral-500">
                bizos.dorvik.internal &bull; Apex Apparel Ltd &bull; Dhanmondi Central
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                POS Synced (3 Outlets)
              </span>
              <span className="text-neutral-600">|</span>
              <span>v1.0.4-prod</span>
            </div>
          </div>

          {/* App Workspace Layout: Sidebar + Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
            {/* Sidebar */}
            <aside className="md:col-span-3 lg:col-span-2 border-r border-[#1e1e26] bg-[#0B0B0E] p-3 hidden md:flex flex-col justify-between text-xs">
              <div className="space-y-1">
                <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Operations
                </div>

                <button
                  onClick={() => setActiveTab("inventory")}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left transition-colors ${
                    activeTab === "inventory"
                      ? "bg-[#1a1a22] text-white font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-[#131317]"
                  }`}
                >
                  <span>Branch Stock</span>
                  <span className="text-[10px] font-mono text-neutral-500">3 Outlets</span>
                </button>

                <button
                  onClick={() => setActiveTab("invoices")}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left transition-colors ${
                    activeTab === "invoices"
                      ? "bg-[#1a1a22] text-white font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-[#131317]"
                  }`}
                >
                  <span>Invoices &amp; Rails</span>
                  <span className="text-[10px] font-mono bg-cyan-950/40 text-cyan-400 px-1 rounded border border-cyan-800/40">bKash/USDT</span>
                </button>

                <button
                  onClick={() => setActiveTab("crm")}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left transition-colors ${
                    activeTab === "crm"
                      ? "bg-[#1a1a22] text-white font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-[#131317]"
                  }`}
                >
                  <span>WhatsApp CRM</span>
                  <span className="text-[10px] font-mono text-emerald-400">Active</span>
                </button>

                <div className="pt-4 px-2 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Financial Rails
                </div>

                <div className="px-2.5 py-1 text-neutral-400 text-[11px] flex justify-between">
                  <span>bKash Merchant:</span>
                  <span className="text-white font-mono">৳ 2,41,800</span>
                </div>
                <div className="px-2.5 py-1 text-neutral-400 text-[11px] flex justify-between">
                  <span>Polygon Treasury:</span>
                  <span className="text-cyan-400 font-mono">5,400 USDT</span>
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-2 border-t border-[#1e1e26] text-[11px] text-neutral-500 font-mono">
                Operator: Shift #2 &bull; Terminal 04
              </div>
            </aside>

            {/* Main Application Table / Workspace View */}
            <main className="md:col-span-9 lg:col-span-10 p-5 sm:p-6 bg-[#0E0E12] flex flex-col justify-between">
              <div>
                {/* Table Header Bar with Real Filter Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1e1e26]">
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      {activeTab === "inventory" && "Multi-Branch Live Inventory"}
                      {activeTab === "invoices" && "Multi-Rail Invoicing & Settlement Ledger"}
                      {activeTab === "crm" && "Customer Ledgers & Automated WhatsApp Triggers"}
                    </h2>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Showing real-time synced state across Dhanmondi, Banani, and Uttara warehouses.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded bg-[#15151b] border border-[#252530] text-[11px] font-mono text-neutral-300">
                      All Outlets (3)
                    </div>
                    <button className="px-3 py-1 rounded btn-light-refined text-[11px]">
                      + New Entry
                    </button>
                  </div>
                </div>

                {/* The Data Table */}
                {activeTab === "inventory" && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-xs text-neutral-300">
                      <thead>
                        <tr className="border-b border-[#1c1c24] text-[11px] font-mono text-neutral-500 uppercase">
                          <th className="py-2.5 font-medium">SKU / Item Name</th>
                          <th className="py-2.5 font-medium">Category</th>
                          <th className="py-2.5 font-medium">Dhanmondi</th>
                          <th className="py-2.5 font-medium">Banani</th>
                          <th className="py-2.5 font-medium">Uttara</th>
                          <th className="py-2.5 font-medium">Unit Price</th>
                          <th className="py-2.5 font-medium text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#181820] text-xs">
                        <tr>
                          <td className="py-3 font-medium text-white">
                            <div>Signature Slim Panjabi - Navy</div>
                            <span className="text-[10px] font-mono text-neutral-500">SKU-APX-8402</span>
                          </td>
                          <td className="py-3 text-neutral-400">Menswear</td>
                          <td className="py-3 font-mono">48 pcs</td>
                          <td className="py-3 font-mono">32 pcs</td>
                          <td className="py-3 font-mono">19 pcs</td>
                          <td className="py-3 font-mono text-white">৳ 2,850</td>
                          <td className="py-3 text-right">
                            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                              In Stock
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3 font-medium text-white">
                            <div>Cotton Twill Chino Trouser</div>
                            <span className="text-[10px] font-mono text-neutral-500">SKU-APX-3199</span>
                          </td>
                          <td className="py-3 text-neutral-400">Bottoms</td>
                          <td className="py-3 font-mono text-amber-400">3 pcs (Low)</td>
                          <td className="py-3 font-mono">42 pcs</td>
                          <td className="py-3 font-mono">28 pcs</td>
                          <td className="py-3 font-mono text-white">৳ 1,950</td>
                          <td className="py-3 text-right">
                            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40">
                              Auto-Transfer
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3 font-medium text-white">
                            <div>Linen Resort Collar Shirt</div>
                            <span className="text-[10px] font-mono text-neutral-500">SKU-APX-9120</span>
                          </td>
                          <td className="py-3 text-neutral-400">Casual</td>
                          <td className="py-3 font-mono">60 pcs</td>
                          <td className="py-3 font-mono">54 pcs</td>
                          <td className="py-3 font-mono">40 pcs</td>
                          <td className="py-3 font-mono text-white">৳ 1,650</td>
                          <td className="py-3 text-right">
                            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                              In Stock
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3 font-medium text-white">
                            <div>Export Jersey Polo - Black</div>
                            <span className="text-[10px] font-mono text-neutral-500">SKU-APX-4410</span>
                          </td>
                          <td className="py-3 text-neutral-400">Export Overrun</td>
                          <td className="py-3 font-mono">110 pcs</td>
                          <td className="py-3 font-mono">95 pcs</td>
                          <td className="py-3 font-mono">82 pcs</td>
                          <td className="py-3 font-mono text-white">$14.00 / ৳1,650</td>
                          <td className="py-3 text-right">
                            <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                              Multi-Rail
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "invoices" && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-xs text-neutral-300">
                      <thead>
                        <tr className="border-b border-[#1c1c24] text-[11px] font-mono text-neutral-500 uppercase">
                          <th className="py-2.5 font-medium">Invoice #</th>
                          <th className="py-2.5 font-medium">Client / Customer</th>
                          <th className="py-2.5 font-medium">Payment Rail</th>
                          <th className="py-2.5 font-medium">Amount</th>
                          <th className="py-2.5 font-medium">Settlement Speed</th>
                          <th className="py-2.5 font-medium text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#181820] text-xs">
                        <tr>
                          <td className="py-3 font-mono text-white">#INV-2026-089</td>
                          <td className="py-3 text-neutral-300">Tariqul Islam (Wholesale)</td>
                          <td className="py-3 text-neutral-300">
                            <span className="font-semibold text-[#E2136E]">bKash Merchant</span>
                          </td>
                          <td className="py-3 font-mono text-white">৳ 68,400 BDT</td>
                          <td className="py-3 font-mono text-neutral-400">Instant (Webhook Verified)</td>
                          <td className="py-3 text-right">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                              PAID
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3 font-mono text-white">#INV-2026-090</td>
                          <td className="py-3 text-neutral-300">Vortex Apparel Inc. (US Buyer)</td>
                          <td className="py-3 text-neutral-300">
                            <span className="font-semibold text-cyan-400">Polygon USDT Escrow</span>
                          </td>
                          <td className="py-3 font-mono text-white">$4,200.00 USDT</td>
                          <td className="py-3 font-mono text-neutral-400">2.4s (Tx #0x7b2f...81)</td>
                          <td className="py-3 text-right">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/40">
                              SETTLED ON-CHAIN
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3 font-mono text-white">#INV-2026-091</td>
                          <td className="py-3 text-neutral-300">Farhana Chowdhury</td>
                          <td className="py-3 text-neutral-300">Visa / Mastercard (SSLCOMMERZ)</td>
                          <td className="py-3 font-mono text-white">৳ 8,950 BDT</td>
                          <td className="py-3 font-mono text-neutral-400">Card Auth OK</td>
                          <td className="py-3 text-right">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                              PAID
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "crm" && (
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-[#131318] border border-[#202028] rounded-lg flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium text-xs">Rahim Textile Traders</span>
                          <span className="text-[10px] font-mono bg-emerald-950/40 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-800/40">
                            VIP Wholesale
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-1">
                          Last Purchase: ৳ 1,42,000 &bull; Automated WhatsApp reminder for overdue balance (৳ 24,000) scheduled for 4:00 PM today.
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 shrink-0">+880 1711-XXXXXX</span>
                    </div>

                    <div className="p-3 bg-[#131318] border border-[#202028] rounded-lg flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium text-xs">MedTech Lab Diagnostics</span>
                          <span className="text-[10px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.2 rounded">
                            Net-30 Client
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-1">
                          Automated digital PDF invoice dispatched to accountant via WhatsApp and email upon dispatch.
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500 shrink-0">+880 1819-XXXXXX</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Real-Time Telemetry Bar */}
              <div className="mt-6 pt-4 border-t border-[#1e1e26] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 font-mono">
                <div className="flex items-center gap-4">
                  <span>DB: PostgreSQL JSONB (Active)</span>
                  <span>Latency: 18ms</span>
                  <span>Webhook Status: OK</span>
                </div>
                <div className="text-neutral-500">
                  Built by Dorvik Engineering &bull; Production Grade
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
