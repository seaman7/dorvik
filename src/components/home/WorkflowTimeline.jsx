"use client";

import React, { useState } from "react";
import { Download, Tags, Cpu, ShieldCheck, Rocket, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const WORKFLOW = [
  {
    step: "01",
    title: "Collect",
    summary: "Gather relevant, structured, and usable telemetry data.",
    icon: Download,
    details: "Ingesting sensor streams, camera feeds, and operational logs with automated schema validation.",
    outputBadge: "DATA_INGEST: 100% COMPLETE",
  },
  {
    step: "02",
    title: "Annotate",
    summary: "Prepare high-quality labels, bounding boxes, and datasets.",
    icon: Tags,
    details: "High-precision computer vision annotation with COCO and YOLO labeling formats and QA verification.",
    outputBadge: "ANNOTATION_QA: 99.4% ACCURACY",
  },
  {
    step: "03",
    title: "Train",
    summary: "Develop and fine-tune models for your specific use cases.",
    icon: Cpu,
    details: "PyTorch & CUDA accelerated fine-tuning, domain adaptation, and parameter optimization.",
    outputBadge: "WEIGHTS: FP16 TENSORRT READY",
  },
  {
    step: "04",
    title: "Evaluate",
    summary: "Validate performance against meaningful production metrics.",
    icon: ShieldCheck,
    details: "Benchmarking mAP, inference latency, stress tests, and bias prevention before production release.",
    outputBadge: "BENCHMARK: P99 < 12MS",
  },
  {
    step: "05",
    title: "Deploy",
    summary: "Integrate solutions directly into live products and workflows.",
    icon: Rocket,
    details: "Docker containers, automated CI/CD pipelines, edge microservices, and continuous health monitoring.",
    outputBadge: "STATUS: LIVE IN PRODUCTION",
  },
];

export function WorkflowTimeline() {
  const [selectedStep, setSelectedStep] = useState(0);
  const active = WORKFLOW[selectedStep];
  const StepIcon = active.icon;

  return (
    <section id="workflow" className="py-20 sm:py-28 bg-[#0E1015] text-white border-b border-[#252A36]">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252A36] bg-[#161922] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
            <span className="font-mono-code text-[11px] font-semibold text-[#00EA64] uppercase tracking-wider">
              From Data to Deployment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Turning raw information into useful intelligence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8C93A0]">
            Our AI workflows connect dataset preparation, model development, rigorous evaluation, and deployment into one reliable engineering process.
          </p>
        </div>

        {/* 5 Step Progress Bar (HackerRank Connected Interactive Line) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {WORKFLOW.map((item, idx) => {
            const isCurrent = selectedStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isCurrent
                    ? "bg-[#161922] border-[#00EA64] shadow-[0_0_15px_rgba(0,234,100,0.15)]"
                    : "bg-[#111318] border-[#252A36] hover:border-[#3B4252]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-code text-xs font-bold ${isCurrent ? "text-[#00EA64]" : "text-[#5E6470]"}`}>
                    PHASE {item.step}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isCurrent ? "bg-[#00EA64]" : "bg-[#252A36]"}`} />
                </div>
                <div className="font-semibold text-sm text-white">{item.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Console */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[#252A36] bg-[#161922] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-xs text-[#00EA64] font-bold">
                STEP {active.step} OF 05
              </span>
              <span className="text-[#5E6470]">/</span>
              <span className="text-xs font-mono-code text-[#8C93A0] uppercase">
                ENGINEERING PIPELINE
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {active.title}: {active.summary}
            </h3>

            <p className="text-base text-[#8C93A0] leading-relaxed max-w-2xl">
              {active.details}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0E1015] border border-[#252A36] font-mono-code text-xs text-[#00EA64]">
                <span>✓</span>
                <span>{active.outputBadge}</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#0E1015] border border-[#252A36] flex flex-col items-center justify-center p-4 text-center">
              <StepIcon className="w-10 h-10 text-[#00EA64] mb-2 stroke-[1.5]" />
              <span className="font-mono-code text-[11px] font-bold text-white uppercase">
                {active.title}
              </span>
              <span className="font-mono-code text-[9px] text-[#5E6470]">
                STAGE_CERTIFIED
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
