"use client";

import React from "react";
import {
  Rocket,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Bot,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const INDUSTRIES = [
  {
    title: "Startups & Digital Products",
    description: "Rapidly turning product visions into validated MVPs and scalable web applications.",
    icon: Rocket,
  },
  {
    title: "Business Operations",
    description: "Custom internal tools, workflow automations, and operational software that eliminate bottlenecks.",
    icon: Briefcase,
  },
  {
    title: "Retail & Commerce",
    description: "Modern digital storefronts, inventory portals, and customer-facing interfaces built for speed.",
    icon: ShoppingBag,
  },
  {
    title: "Education & Research",
    description: "Software platforms and applied AI solutions supporting learning workflows and academic investigation.",
    icon: GraduationCap,
  },
  {
    title: "Robotics & Autonomous Systems",
    description: "Computer vision integration, spatial digital twins, and edge telemetry for robotic environments.",
    icon: Bot,
  },
  {
    title: "Data-Driven Organizations",
    description: "Dataset preparation, pipeline engineering, and predictive models that unlock operational clarity.",
    icon: BarChart3,
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20 sm:py-28 border-b border-[#DEDED8] bg-[#F7F7F3]">
      <Container size="wide">
        <SectionHeading
          eyebrow="WHERE WE HELP"
          heading="Technology adapted to your context."
          description="We apply consistent engineering rigor across varied business operational challenges and technical domains."
        />

        {/* 6 Industry Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="bg-[#FFFFFF] border border-[#DEDED8] p-7 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[#111111]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E2]">
                    <div className="w-9 h-9 rounded-sm bg-[#F7F7F3] border border-[#DEDED8] flex items-center justify-center text-[#111111]">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#8E8E88]">
                      SEC // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-medium text-[#111111] tracking-tight">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E2] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span className="text-[11px] font-mono text-[#8E8E88]">
                    DOMAIN ADAPTATION
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
