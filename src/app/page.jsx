import React from "react";
import { DorvikHeroLogo }         from "@/components/home/DorvikHeroLogo";
import { DorvikEditorViewport }   from "@/components/home/DorvikEditorViewport";
import { DorvikClientTrust }      from "@/components/home/DorvikClientTrust";
import { DorvikCaseStudies }      from "@/components/home/DorvikCaseStudies";
import { DorvikCoreProjects }     from "@/components/home/DorvikCoreProjects";
import { DorvikFeatureCallout }   from "@/components/home/DorvikFeatureCallout";
import { DorvikWorkflowSteps }    from "@/components/home/DorvikWorkflowSteps";
import { DorvikPricingPlans }     from "@/components/home/DorvikPricingPlans";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Interactive DORVIK Pixel Hero Banner */}
      <DorvikHeroLogo />

      {/* 2. Live Agent Code Editor — Dorvik bot fixing real SWE bugs */}
      <DorvikEditorViewport />

      {/* 3. Enterprise Social Proof & Metrics: MetLife, PassNFly & Global Partners */}
      <DorvikClientTrust />

      {/* 4. Deep-Dive Case Studies: MetLife & PassNFly Production Impact */}
      <DorvikCaseStudies />

      {/* 5. Core Services: Web Dev, AI Bug Fixer, LLM Training, Computer Vision */}
      <DorvikCoreProjects />

      {/* 6. What Dorvik Does — pillars + service tiles */}
      <DorvikFeatureCallout />

      {/* 7. How Dorvik Works — 4-step autonomous pipeline */}
      <DorvikWorkflowSteps />

      {/* 8. Project Engagement Plans */}
      <DorvikPricingPlans />
    </div>
  );
}
