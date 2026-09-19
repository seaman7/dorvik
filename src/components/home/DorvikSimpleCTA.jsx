"use client";

import React from "react";
import Link from "next/link";

export function DorvikSimpleCTA() {
  return (
    <section className="w-full bg-[#080809] text-white py-28 font-sans border-b border-[#1b1b20]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest font-semibold block mb-4">
          PILOT ONBOARDING
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to deploy BizOS for your company?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Speak with our founding engineering team. We will provision your custom workspace, configure your bKash and crypto rails, and provide full hands-on onboarding.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/bizos#waitlist"
              className="w-full sm:w-auto px-6 py-3 rounded-lg btn-light-refined text-xs tracking-tight transition-colors shadow-sm"
            >
              Request Dedicated Workspace &rarr;
            </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141418] hover:bg-[#1a1a20] border border-[#262630] text-neutral-300 hover:text-white font-medium text-xs transition-colors"
          >
            Direct Engineering Contact
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-neutral-400">
          <span>Dedicated Dhaka support</span>
          <span>&bull;</span>
          <span>Zero migration disruption</span>
        </div>
      </div>
    </section>
  );
}
