"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

const TRUSTED_DOMAINS = [
  "COMPUTER VISION & OPENCV",
  "AUTONOMOUS SYSTEMS",
  "SAAS PLATFORMS",
  "PREDICTIVE ML",
  "DATASET ENGINEERING",
  "CLOUD & API DEPLOYMENT",
];

export function TrustTicker() {
  return (
    <section className="py-12 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <Container size="wide">
        <p className="text-center font-mono-code text-xs uppercase tracking-widest text-[#5E6470] mb-8">
          Trusted engineering partner for ambitious teams, startups and research laboratories
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {TRUSTED_DOMAINS.map((domain) => (
            <div
              key={domain}
              className="p-3 text-center rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] shadow-2xs hover:border-[#0E1015]/40 transition-colors"
            >
              <span className="font-mono-code text-[11px] font-semibold text-[#0E1015] tracking-tight">
                {domain}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
