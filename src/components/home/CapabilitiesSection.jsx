"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CAPABILITY_GROUPS = [
  {
    category: "AI & DATA",
    description: "Modeling, perception stacks, and structured dataset engineering.",
    skills: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "Generative AI",
      "NLP",
      "Model Evaluation",
      "Dataset Engineering",
    ],
  },
  {
    category: "PRODUCT & SOFTWARE",
    description: "Robust frontends, full-stack systems, and intuitive user experiences.",
    skills: [
      "TypeScript / JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Backend Architecture",
      "API Development",
      "SaaS Platforms",
      "Workflow Automation",
    ],
  },
  {
    category: "INFRASTRUCTURE",
    description: "Reliable containerized runtimes, cloud deployment, and system telemetry.",
    skills: [
      "Docker",
      "Cloud Deployment",
      "Databases",
      "CI/CD",
      "Monitoring",
      "System Integration",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 border-b border-[#DEDED8] bg-[#F7F7F3]">
      <Container size="wide">
        <SectionHeading
          eyebrow="ENGINEERING CAPABILITIES"
          heading="The technology behind the work."
          description="A pragmatic, proven engineering stack applied to building reliable systems and modern digital products."
        />

        {/* 3 Grouped Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITY_GROUPS.map((group) => (
            <div
              key={group.category}
              className="bg-[#FFFFFF] border border-[#DEDED8] p-7 sm:p-8 flex flex-col justify-between rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E2]">
                  <h3 className="font-mono text-sm font-semibold tracking-wider text-[#111111] uppercase">
                    {group.category}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                </div>

                <p className="mt-4 text-xs text-[#6B6B6B] leading-relaxed">
                  {group.description}
                </p>

                {/* Capability Chips / List */}
                <div className="mt-6 pt-4 border-t border-[#E8E8E2] grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 text-xs font-medium text-[#111111] bg-[#F7F7F3] border border-[#E8E8E2] rounded-xs flex items-center justify-between hover:border-[#111111] transition-colors"
                    >
                      <span>{skill}</span>
                      <span className="w-1 h-1 bg-[#8E8E88] rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E8E2] text-[11px] font-mono text-[#8E8E88]">
                <span>PRACTICE AREA // VERIFIED TOOLING</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
