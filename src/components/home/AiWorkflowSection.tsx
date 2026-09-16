"use client";

import React from "react";
import { HardDriveDownload, Tags, Cpu, ShieldCheck, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Collect",
    summary: "Gather relevant, structured and usable data.",
    icon: HardDriveDownload,
    techNote: "Sensor & telemetry ingestion, format standardization",
  },
  {
    step: "02",
    title: "Annotate",
    summary: "Prepare high-quality labels and datasets.",
    icon: Tags,
    techNote: "COCO/YOLO labels, semantic segmentations & QA",
  },
  {
    step: "03",
    title: "Train",
    summary: "Develop and fine-tune models for the intended task.",
    icon: Cpu,
    techNote: "PyTorch, CUDA acceleration & LoRA fine-tuning",
  },
  {
    step: "04",
    title: "Evaluate",
    summary: "Validate performance against meaningful criteria.",
    icon: ShieldCheck,
    techNote: "mAP, F1-scores, latency profiling & stress tests",
  },
  {
    step: "05",
    title: "Deploy",
    summary: "Integrate the solution into a usable product or workflow.",
    icon: Rocket,
    techNote: "FastAPI, Docker, edge runtimes & cloud orchestration",
  },
];

export function AiWorkflowSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] text-[#F7F7F3] border-b border-[#262626] relative overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 tech-grid-pattern-dark opacity-40 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          theme="dark"
          eyebrow="FROM DATA TO DEPLOYMENT"
          heading="Turning raw information into useful intelligence."
          description="Our AI workflows connect data preparation, model development, evaluation and deployment into one practical engineering process."
        />

        {/* 5 Connected Steps */}
        <div className="relative mt-12 sm:mt-16">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1px] bg-[#262626] z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-[#1D4ED8] to-transparent opacity-60" />
          </div>

          {/* Grid Layout: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative bg-[#171717] border border-[#262626] hover:border-[#1D4ED8]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 rounded-xs"
                >
                  <div>
                    {/* Top Row: Index Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-semibold text-[#8E8E88] group-hover:text-[#1D4ED8] transition-colors">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-sm bg-[#1F1F1F] border border-[#2C2C2C] flex items-center justify-center text-[#F7F7F3] group-hover:text-[#1D4ED8] group-hover:border-[#1D4ED8]/40 transition-colors">
                        <Icon className="w-4 h-4 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-medium text-[#F7F7F3] tracking-tight">
                      {item.title}
                    </h3>

                    {/* Step Summary */}
                    <p className="mt-2.5 text-sm text-[#9E9E98] leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Technical Sub-note */}
                  <div className="mt-6 pt-4 border-t border-[#262626] text-[11px] font-mono text-[#8E8E88]">
                    <span className="text-[#1D4ED8] mr-1">↳</span>
                    {item.techNote}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow Disclaimer Note */}
        <div className="mt-12 pt-8 border-t border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8E8E88] font-mono">
          <span>PIPELINE SPEC // REPEATABLE, AUDITABLE, OBSERVABLE</span>
          <span>
            * Tailored according to project specifics, data availability and computational targets.
          </span>
        </div>
      </Container>
    </section>
  );
}
