"use client";

import React from "react";
import Link from "next/link";

const INDUSTRIES = [
  {
    name: "Fashion & Retail Stores",
    description: "Central inventory, multi-branch stock transfers, barcode POS, and bKash QR at counter.",
  },
  {
    name: "Garments & Manufacturing",
    description: "Fabric yardage tracking, cutting batches, and export proforma invoices in USD / Crypto.",
  },
  {
    name: "Medical Clinics & Diagnostics",
    description: "Doctor chamber scheduling, patient test billing, automated SMS/WhatsApp digital receipts.",
  },
  {
    name: "Restaurants & Cloud Kitchens",
    description: "Kitchen order tickets (KOT), ingredient costing, split billing, and daily sales closing.",
  },
  {
    name: "Coaching Centers & Institutes",
    description: "Student batch directory, monthly tuition fee reminders, and automatic bKash reconciliation.",
  },
  {
    name: "Digital Studios & Agencies",
    description: "Client CRM, milestone billing, project escrow, and instant international settlement.",
  },
];

export function DorvikIndustryGrid() {
  return (
    <section className="w-full bg-[#08080A] text-neutral-200 py-20 border-b border-neutral-800/80 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            TAILORED FOR YOUR BUSINESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Built for Bangladesh &amp; Global Markets
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            BizOS comes pre-configured with industry-standard templates. Choose your industry or let AI generate your setup in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0C0C12] border border-neutral-800/90 hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{ind.name}</span>
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/bizos"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
          >
            <span>Preview all industry templates on the BizOS page</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
