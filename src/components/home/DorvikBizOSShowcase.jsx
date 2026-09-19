"use client";

import React, { useState } from "react";
import Link from "next/link";

const DEMO_PRESETS = [
  {
    id: "fashion",
    label: "Fashion & Retail (3 Branches)",
    prompt: "I run a clothing business with 3 branches in Dhaka. I need inventory tracking, sales POS, customer CRM, and automated WhatsApp promotions.",
    modules: ["Multi-Branch Inventory", "Barcode POS Sales", "VIP Customer CRM", "WhatsApp Automations"],
    integrations: ["bKash / Nagad", "Thermal Receipt Printer", "SMS / WhatsApp Gateway"],
    stats: { revenue: "৳ 14,85,000", branches: "3 Active", stockAlerts: "4 Items Low" },
  },
  {
    id: "clinic",
    label: "Medical Clinic & Diagnostics",
    prompt: "A diagnostic clinic with 8 visiting doctors, patient appointment scheduling, lab test billing, and digital reports.",
    modules: ["Doctor Scheduling", "Patient Electronic Records", "Diagnostic Test Billing", "Report Portal"],
    integrations: ["SSLCOMMERZ", "bKash Merchant", "SMS Report Notification"],
    stats: { revenue: "৳ 8,40,000", branches: "1 Main Facility", stockAlerts: "All Reagents OK" },
  },
  {
    id: "agency",
    label: "Digital Agency & Software Studio",
    prompt: "Global software agency with remote developers, client milestone billing, USD Stripe invoices, and Web3 crypto escrow.",
    modules: ["Client Deal Pipeline", "Milestone Invoicing", "Project Timesheets", "Web3 Escrow Protocol"],
    integrations: ["Stripe (USD/EUR)", "Polygon (USDT/USDC)", "bKash Local Payroll"],
    stats: { revenue: "$38,500 USD", branches: "Remote / Global", stockAlerts: "99.4% On-Time Delivery" },
  },
];

export function DorvikBizOSShowcase() {
  const [activePreset, setActivePreset] = useState(DEMO_PRESETS[0]);
  const [customPrompt, setCustomPrompt] = useState(DEMO_PRESETS[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePresetSelect = (preset) => {
    setActivePreset(preset);
    setCustomPrompt(preset.prompt);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 450);
  };

  return (
    <section className="w-full bg-[#08080A] text-neutral-200 py-24 border-t border-neutral-800/80 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>FLAGSHIP PRODUCT &bull; AI BUSINESS OPERATING SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            BizOS: One Operating System for Your Entire Business
          </h2>

          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Instead of stitching together 5 separate subscriptions for CRM, inventory, POS, accounting, and marketing—build your own custom business software in seconds using natural language prompts.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/bizos"
              className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-tight transition-colors shadow-md flex items-center gap-2"
            >
              <span>Explore BizOS Full Platform</span>
              <span>&rarr;</span>
            </Link>
            <Link
              href="/bizos#waitlist"
              className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium text-xs transition-colors"
            >
              Request Early Access Demo
            </Link>
          </div>
        </div>

        {/* Interactive Prompt-to-Software Sandbox Simulator */}
        <div className="bg-[#0C0C12] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                INTERACTIVE PROMPT-TO-SOFTWARE BUILDER
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Tell BizOS what your business does
              </h3>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-2">
              {DEMO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handlePresetSelect(preset)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activePreset.id === preset.id
                      ? "bg-neutral-800 text-white border border-neutral-600"
                      : "bg-black/60 text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Input Box */}
          <div className="my-6">
            <div className="relative">
              <textarea
                rows={2}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="w-full bg-black/80 border border-neutral-700/80 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                placeholder="Describe your business in plain English or Bengali..."
              />
              <div className="absolute right-3 bottom-3 text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>AI Schema Engine Ready</span>
              </div>
            </div>
          </div>

          {/* Live Generated Workspace Output */}
          <div className={`transition-opacity duration-300 ${isGenerating ? "opacity-40" : "opacity-100"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Generated Modules */}
              <div className="bg-black/40 border border-neutral-800/80 rounded-xl p-4">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  1. Generated Modules
                </span>
                <ul className="mt-3 space-y-2 text-xs">
                  {activePreset.modules.map((m, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-200">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active Integrations */}
              <div className="bg-black/40 border border-neutral-800/80 rounded-xl p-4">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  2. Payment &amp; Rails
                </span>
                <ul className="mt-3 space-y-2 text-xs">
                  {activePreset.integrations.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-200">
                      <span className="text-emerald-400 font-bold">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real-Time Metrics */}
              <div className="bg-black/40 border border-neutral-800/80 rounded-xl p-4">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  3. Live Workspace Telemetry
                </span>
                <div className="mt-3 space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-800/60">
                    <span className="text-neutral-400">Monthly Volume:</span>
                    <span className="text-white font-mono font-bold">{activePreset.stats.revenue}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-800/60">
                    <span className="text-neutral-400">Operations:</span>
                    <span className="text-white font-mono">{activePreset.stats.branches}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Inventory Status:</span>
                    <span className="text-amber-400 font-mono">{activePreset.stats.stockAlerts}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓ bKash &amp; Nagad Ready</span>
                <span>&bull;</span>
                <span className="text-cyan-400">✓ Stripe &amp; Polygon USDT Escrow</span>
                <span>&bull;</span>
                <span>✓ Multi-Branch POS</span>
              </div>
              <Link
                href="/bizos"
                className="text-white hover:text-cyan-400 transition-colors font-sans font-semibold flex items-center gap-1"
              >
                <span>Launch BizOS Builder</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
