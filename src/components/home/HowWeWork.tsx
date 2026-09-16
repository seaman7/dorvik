"use client";

import React from "react";
import { Search, Compass, Layers, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROCESS_STEPS = [
  {
    number: "01",
    name: "Discover",
    description: "Understand your goals, constraints and technical requirements.",
    icon: Search,
    detail: "Deep dive into problem space, feasibility assessment, and data audit.",
  },
  {
    number: "02",
    name: "Define",
    description: "Shape the scope, architecture, priorities and delivery plan.",
    icon: Compass,
    detail: "Architecture blueprint, technology selection, and milestone definition.",
  },
  {
    number: "03",
    name: "Build",
    description: "Design, develop and validate the solution through focused iterations.",
    icon: Layers,
    detail: "Agile sprints, rigorous code reviews, automated tests, and client demos.",
  },
  {
    number: "04",
    name: "Launch",
    description: "Deploy the product and support the next stage of improvement.",
    icon: CheckCircle2,
    detail: "Zero-downtime deployment, infrastructure monitoring, and handoff.",
  },
];

export function HowWeWork() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[#DEDED8] bg-[#F7F7F3]">
      <Container size="wide">
        <SectionHeading
          eyebrow="HOW WE WORK"
          heading="A clear path from idea to implementation."
          description="We take a transparent, engineering-driven approach designed to minimize risk and deliver dependable outcomes."
        />

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FFFFFF] border border-[#DEDED8] p-7 sm:p-8 rounded-sm flex flex-col justify-between hover:border-[#111111]/60 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#E8E8E2]">
                    <span className="font-mono text-sm font-semibold text-[#1D4ED8]">
                      {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-sm bg-[#F7F7F3] border border-[#DEDED8] flex items-center justify-center text-[#111111]">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-medium text-[#111111] tracking-tight">
                    {step.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#6B6B6B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E2] text-xs font-mono text-[#8E8E88]">
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Note */}
        <div className="mt-10 p-4 border border-[#DEDED8] bg-[#FFFFFF] flex items-center gap-3 text-xs text-[#6B6B6B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
          <p className="italic">
            Note: Every project is scoped according to its goals, complexity and requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
