import React from "react";
import { HackerRankHero } from "@/components/home/HackerRankHero";
import { TrustTicker } from "@/components/home/TrustTicker";
import { HackerRankPillars } from "@/components/home/HackerRankPillars";
import { DualProductShowcase } from "@/components/home/DualProductShowcase";
import { WorkflowTimeline } from "@/components/home/WorkflowTimeline";
import { FeaturedWorkHackerRank } from "@/components/home/FeaturedWorkHackerRank";
import { PersonaTabs } from "@/components/home/PersonaTabs";
import { CommunityHighlight } from "@/components/home/CommunityHighlight";
import { HackerRankFinalCta } from "@/components/home/HackerRankFinalCta";

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      {/* 1. Hero with Interactive Agentic IDE */}
      <HackerRankHero />

      {/* 2. Trust Ticker */}
      <TrustTicker />

      {/* 3. Three-Pillar Interactive Capabilities */}
      <HackerRankPillars />

      {/* 4. Dual Core Engines Showcase ("One Platform. Two Products" style) */}
      <DualProductShowcase />

      {/* 5. 5-Phase Interactive AI Workflow */}
      <WorkflowTimeline />

      {/* 6. Selected Work (WareTwin, Drone Vision, AcademicOS) */}
      <FeaturedWorkHackerRank />

      {/* 7. Dual Persona Engagement (Startups vs Enterprises) */}
      <PersonaTabs />

      {/* 8. "One more thing…" Engineering Labs Banner */}
      <CommunityHighlight />

      {/* 9. Final High-Impact CTA Card */}
      <HackerRankFinalCta />
    </main>
  );
}
