"use client";

import React from "react";
import Link from "next/link";

export function DorvikSimpleCTA() {
  return (
    <section className="w-full bg-[#08080A] text-white py-24 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PILOT ONBOARDING OPEN &bull; BANGLADESH &amp; WORLDWIDE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to Modernize Your Business Operations?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Get in touch with our founding team. We will set up your custom BizOS workspace, configure your payment rails, and give you a personal walk-through.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/bizos#waitlist"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-sm transition-colors shadow-lg"
          >
            Request Free Workspace Setup &rarr;
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-medium text-sm transition-colors"
          >
            Contact Dorvik Team
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs font-mono text-neutral-500">
          <span>✓ Zero setup fee for pilot partners</span>
          <span>&bull;</span>
          <span>✓ Personal onboarding support</span>
        </div>
      </div>
    </section>
  );
}
