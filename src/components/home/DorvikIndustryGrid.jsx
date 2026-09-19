"use client";

import React from "react";
import Link from "next/link";

const INDUSTRIES = [
  {
    name: "Fashion & Multi-Outlet Retail",
    details: "Central stock balancing, automated inter-branch transfer notes, barcode POS, and instant bKash QR at counter checkout.",
  },
  {
    name: "Garments & Textile Manufacturers",
    details: "Raw fabric yardage tracking, cutting batch costing, export proforma invoices, and international crypto/wire settlement.",
  },
  {
    name: "Medical Practices & Diagnostics",
    details: "Doctor chamber queues, prescription test billing, cash-drawer reconciliation, and automated SMS/WhatsApp digital receipts.",
  },
  {
    name: "Restaurants & Cloud Kitchens",
    details: "Table management, kitchen order tickets (KOT), recipe ingredient depletion, split payments, and daily closing accounts.",
  },
  {
    name: "Coaching Centers & Academies",
    details: "Batch student registries, monthly tuition fee reminders, automated bKash reconciliation, and attendance logging.",
  },
  {
    name: "Digital Agencies & Studios",
    details: "Deal pipeline CRM, milestone project billing, smart contract escrow, and multi-currency international invoicing.",
  },
];

export function DorvikIndustryGrid() {
  return (
    <section className="w-full bg-[#080809] text-neutral-200 py-24 border-b border-[#1b1b20] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-2">
            INDUSTRY CONFIGURATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pre-configured templates for Bangladesh &amp; global trade.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            BizOS ships with production-tested schema models tailored to your industry. Launch immediately with zero setup complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0C0C10] border border-[#1e1e26] hover:border-[#2b2b36] transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {ind.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#171720] text-[11px] font-mono text-neutral-400">
                Template: Ready to Deploy
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <span>Custom fields and schema models can be altered at any time</span>
          <Link href="/bizos" className="text-white hover:underline">
            Explore industry sandbox &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
