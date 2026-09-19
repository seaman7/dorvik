import React from "react";
import { DorvikCleanHero }        from "@/components/home/DorvikCleanHero";
import { DorvikClientTrust }      from "@/components/home/DorvikClientTrust";
import { DorvikProblemSolution }  from "@/components/home/DorvikProblemSolution";
import { DorvikValueProps }       from "@/components/home/DorvikValueProps";
import { DorvikIndustryGrid }     from "@/components/home/DorvikIndustryGrid";
import { DorvikCaseStudies }      from "@/components/home/DorvikCaseStudies";
import { DorvikSimpleCTA }        from "@/components/home/DorvikSimpleCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FAFAFC] dark:bg-[#08080A] transition-colors duration-200">
      {/* 1. Crystal-Clear Hero: What is BizOS, what it does, and live realistic dashboard metrics */}
      <DorvikCleanHero />

      {/* 2. Enterprise Trust: MetLife, PassNFly & Global Production Credibility */}
      <DorvikClientTrust />

      {/* 3. Problem vs Solution: Why businesses need BizOS (Stop juggling 5 tools) */}
      <DorvikProblemSolution />

      {/* 4. What We Are Building: 4 core capabilities (Billing, Multi-Branch Stock, WhatsApp CRM, AI) */}
      <DorvikValueProps />

      {/* 5. Industry Solutions: Tailored for Retail, Garments, Clinics, Restaurants, Coaching, Studios */}
      <DorvikIndustryGrid />

      {/* 6. Production Proof: Deep-Dive Case Studies (MetLife & PassNFly) */}
      <DorvikCaseStudies />

      {/* 7. Clean Direct Action: Free Workspace Demo & Contact */}
      <DorvikSimpleCTA />
    </div>
  );
}
