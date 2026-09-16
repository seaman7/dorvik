import React from "react";
import { Hero } from "@/components/home/Hero";
import { ValueStatement } from "@/components/home/ValueStatement";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { AiWorkflowSection } from "@/components/home/AiWorkflowSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      {/* 2. Hero section */}
      <Hero />

      {/* 3. Value statement */}
      <ValueStatement />

      {/* 4. Services section */}
      <ServicesSection />

      {/* 5. Featured work */}
      <FeaturedWork />

      {/* 6. AI workflow section (Dark) */}
      <AiWorkflowSection />

      {/* 7. Engineering capabilities */}
      <CapabilitiesSection />

      {/* 8. Industries section */}
      <IndustriesSection />

      {/* 9. How we work */}
      <HowWeWork />

      {/* 10. Final CTA */}
      <FinalCta />
    </main>
  );
}
