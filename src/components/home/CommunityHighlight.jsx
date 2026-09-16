"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CommunityHighlight() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <Container size="wide">
        <div className="rounded-3xl bg-[#0E1015] text-white p-8 sm:p-14 lg:p-16 border border-[#252A36] relative overflow-hidden">
          {/* Subtle background tech grid */}
          <div className="absolute inset-0 hr-grid-pattern-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252A36] bg-[#161922] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00EA64]" />
              <span className="font-mono-code text-[11px] font-semibold text-[#00EA64] uppercase tracking-wider">
                Engineering Labs &amp; Open R&amp;D
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              One more thing…
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#8C93A0] leading-relaxed">
              DORVIK maintains an active technical lab exploring autonomous systems, browser-native 3D simulations, and edge AI inferencing. When you partner with us, you don’t just get code—you get battle-tested architectures and specialized engineering depth.
            </p>

            <div className="mt-8 pt-6 border-t border-[#252A36] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#0E1015] bg-[#00EA64] hover:bg-[#00D45B] rounded-full transition-colors group"
              >
                <span>Partner with DORVIK</span>
                <ArrowUpRight className="w-4 h-4 text-[#0E1015] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#161922] hover:bg-[#1F2430] border border-[#252A36] rounded-full transition-colors"
              >
                <span>View Lab Systems</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
