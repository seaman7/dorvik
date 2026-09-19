"use client";

import React from "react";
import Link from "next/link";

const VALUE_PILLARS = [
  {
    step: "01",
    title: "Multi-Rail Billing & Invoicing",
    subtitle: "Local BDT, Global Fiat, & Blockchain Rails",
    description:
      "Generate clean invoices in seconds. Bangladeshi customers pay via bKash and Nagad; international clients pay via Credit Card or instant USDT on Polygon with zero bank wire delay.",
    tags: ["bKash & Nagad QR", "Stripe Cards", "Polygon USDT Escrow", "PDF Receipts"],
  },
  {
    step: "02",
    title: "Multi-Branch Inventory & POS",
    subtitle: "Real-time stock across every shop & warehouse",
    description:
      "Track every unit in real-time. Transfer products between branches, scan barcodes at the cash counter, and get instant automated alerts before any popular item runs out.",
    tags: ["Barcode POS", "Inter-branch Transfers", "Low-Stock Reorder", "Dead-Stock Alert"],
  },
  {
    step: "03",
    title: "Automated WhatsApp CRM",
    subtitle: "Turn one-time buyers into repeat customers",
    description:
      "Send digital invoices, order tracking updates, and friendly payment reminders straight to your customer's WhatsApp automatically—without manual typing.",
    tags: ["WhatsApp Invoices", "Payment Chaser", "Customer History", "VIP Segments"],
  },
  {
    step: "04",
    title: "AI Business Assistant",
    subtitle: "Ask questions, get instant business answers",
    description:
      "Ask in plain English or Bengali: 'Which branch made the highest profit this week?' or 'Which product is not selling?' Get instant charts and actionable answers.",
    tags: ["Natural Language Queries", "Profit Margins", "Daily Digest", "Decision Support"],
  },
];

export function DorvikValueProps() {
  return (
    <section className="w-full bg-[#08080A] text-neutral-200 py-20 border-b border-neutral-800/80 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            WHAT YOU GET &bull; CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Four Core Tools. One Clean System.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Everything your business needs to sell, fulfill, collect payments, and grow—without the bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUE_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="p-6 sm:p-8 rounded-2xl bg-[#0C0C12] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                    {pillar.step}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    BizOS Module
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 font-medium mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80">
                {pillar.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/60 border border-neutral-800 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-12 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">Need a custom workflow for your business?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">BizOS molds to your exact workflow using natural language prompts.</p>
          </div>
          <Link
            href="/bizos"
            className="px-5 py-2.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors shrink-0"
          >
            Explore Interactive Demo &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
