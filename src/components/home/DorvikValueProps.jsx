"use client";

import React from "react";
import Link from "next/link";

const CAPABILITY_MODULES = [
  {
    category: "Financial Engine",
    title: "Multi-Rail Invoicing & Settlement",
    description:
      "A unified billing infrastructure that natively accepts bKash, Nagad, and credit cards for local buyers, while providing Polygon & Base smart contract escrow for cross-border clients without SWIFT wire delays.",
    specs: [
      { label: "Local Settlement", value: "Instant via Merchant Webhook" },
      { label: "Blockchain Rail", value: "Polygon / Base (USDT & USDC)" },
      { label: "Compliance", value: "Automated VAT & Digital PDF Memos" },
    ],
  },
  {
    category: "Store & Warehouse",
    title: "Distributed Multi-Branch Inventory",
    description:
      "Real-time stock synchronization across all physical retail stores, central godowns, and online storefronts. Eliminates stockouts with automated inter-branch transfer manifests and barcode checkout.",
    specs: [
      { label: "POS Engine", value: "Sub-second barcode scan & thermal print" },
      { label: "Stock Balancing", value: "Automated inter-outlet transfer notes" },
      { label: "Reorder Triggers", value: "Predictive minimum threshold alerts" },
    ],
  },
  {
    category: "Customer Engagement",
    title: "Automated WhatsApp Operations",
    description:
      "Direct integration with WhatsApp Business API. Automatically sends branded PDF invoices upon purchase, dispatches tracking details, and executes polite, scheduled payment reminders for outstanding credit.",
    specs: [
      { label: "Delivery Speed", value: "Instant dispatch upon POS transaction" },
      { label: "Payment Links", value: "1-click dynamic bKash & card URL" },
      { label: "Credit Control", value: "Automated aging-balance reminder flows" },
    ],
  },
  {
    category: "Executive Intelligence",
    title: "Conversational Business Analytics",
    description:
      "Query your entire transactional database in plain Bengali or English. Ask about branch profitability, sluggish inventory, or customer acquisition costs without building complex SQL queries.",
    specs: [
      { label: "Data Source", value: "Real-time PostgreSQL JSONB records" },
      { label: "Reporting", value: "Automated daily P&L and cash-flow digest" },
      { label: "Insights", value: "Branch margin & dead-stock alerts" },
    ],
  },
];

export function DorvikValueProps() {
  return (
    <section className="w-full bg-[#080809] text-neutral-200 py-24 border-b border-[#1b1b20] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-2">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered as a cohesive operating system.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            Each module functions independently or connects seamlessly to form an end-to-end commerce and financial backbone for your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITY_MODULES.map((mod, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#0C0C10] border border-[#1e1e26] hover:border-[#2b2b36] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-wider">
                    {mod.category}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    Module 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {mod.description}
                </p>
              </div>

              {/* Technical Spec List */}
              <div className="pt-4 border-t border-[#1a1a22] space-y-2">
                {mod.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono text-[11px]">{spec.label}</span>
                    <span className="text-neutral-300 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Callout Strip */}
        <div className="mt-10 p-5 rounded-xl bg-[#0E0E14] border border-[#1e1e26] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">Custom Integration:</span>
            <span className="text-xs text-neutral-300">
              Need custom ERP connectors or proprietary accounting APIs? Dorvik engineers custom adapters for enterprise setups.
            </span>
          </div>

          <Link
            href="/contact"
            className="text-xs font-mono text-white hover:underline shrink-0"
          >
            Inquire with Engineering &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
