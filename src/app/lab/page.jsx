"use client";

import React from "react";
import { DorvikJulesHero } from "@/components/lab/DorvikJulesHero";
import { DorvikJulesEditor } from "@/components/lab/DorvikJulesEditor";
import { DorvikJulesIllustrations } from "@/components/lab/DorvikJulesIllustrations";
import { DorvikJulesMascot } from "@/components/lab/DorvikJulesMascot";
import { DorvikJulesWorkflow } from "@/components/lab/DorvikJulesWorkflow";
import { DorvikJulesPricing } from "@/components/lab/DorvikJulesPricing";
import { DorvikJulesFooter } from "@/components/lab/DorvikJulesFooter";

export default function DorvikLabPage() {
  return (
    <div className="dorvik-jules-lab w-full min-h-screen bg-gradient-to-b from-[#14002E] via-[#1D0245] to-[#0F0024] text-white selection:bg-[#00D2EF] selection:text-[#09051c] font-mono overflow-x-hidden relative pt-12 sm:pt-16">
      {/* Background ambient lighting matching Google Jules */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#472394]/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2b0b5e]/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* 1. Hero with ASCII Art Banner & Floating Glyphs */}
        <DorvikJulesHero />

        {/* 2. Framed Code Editor with Pixel Fox & Floating Action Card */}
        <DorvikJulesEditor />

        {/* 3. "More time to..." Pixel Illustrations */}
        <DorvikJulesIllustrations />

        {/* 4. Giant Mascot (Half Fox / Half Cybernetic Brain) & 4 Capability Cards */}
        <DorvikJulesMascot />

        {/* 5. 4-Step Interactive Workflow */}
        <DorvikJulesWorkflow />

        {/* 6. Pricing / Tiers */}
        <DorvikJulesPricing />

        {/* 7. Bottom CTA & Pixel Matrix Circuit Rails */}
        <DorvikJulesFooter />
      </div>
    </div>
  );
}
