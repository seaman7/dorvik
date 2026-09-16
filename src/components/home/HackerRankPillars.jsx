"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Box, Cpu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PILLARS = [
  {
    id: "real-systems",
    tabTitle: "Real systems, not toy models",
    icon: Box,
    eyebrow: "PRODUCTION ARCHITECTURE",
    heading: "Codebases that mirror real-world business complexity.",
    description:
      "We don't build superficial prototypes. DORVIK engineers multi-repo systems, OpenCV perception pipelines, and reliable software designed to withstand live production traffic.",
    bullets: [
      "Custom repository setups with real-world edge & cloud workflows",
      "Computer vision for autonomous UAVs, robotics, and physical inspection",
      "Multi-agent task orchestration with strict deterministic validation",
    ],
    previewTitle: "SYSTEM_SPEC // WARETWIN_CORE",
    previewMetrics: [
      { label: "Throughput", val: "60 FPS WebGL" },
      { label: "Routing", val: "A* Multi-Agent" },
      { label: "Uptime", val: "99.98%" },
    ],
  },
  {
    id: "ai-rigor",
    tabTitle: "Applied AI & Perception Rigor",
    icon: Cpu,
    eyebrow: "RELIABLE INTELLIGENCE",
    heading: "Beyond basic wrappers: fine-tuned models & clean datasets.",
    description:
      "We design AI that solves specific operational bottlenecks. From structured dataset engineering and annotation to localized inference and semantic RAG systems.",
    bullets: [
      "YOLO and OpenCV detection pipelines tuned for high-speed tracking",
      "Quality-assured dataset annotation with COCO and YOLO formats",
      "Grounded knowledge synthesis with transparent citations & zero hallucination",
    ],
    previewTitle: "MODEL_SPEC // EDGE_PERCEPTION",
    previewMetrics: [
      { label: "Latency", val: "< 14ms (p99)" },
      { label: "mAP@0.5", val: "94.2%" },
      { label: "Weights", val: "FP16 TensorRT" },
    ],
  },
  {
    id: "infra-scale",
    tabTitle: "Infrastructure & Scale",
    icon: ShieldCheck,
    eyebrow: "SYSTEM INTEGRITY",
    heading: "Reliable APIs, containerized runtimes & continuous monitoring.",
    description:
      "A great model or frontend requires bulletproof infrastructure. We engineer Dockerized backends, database architectures, and automated CI/CD pipelines that protect your data.",
    bullets: [
      "REST & gRPC APIs designed for high-concurrency microservices",
      "Automated testing, continuous deployment, and proactive health checks",
      "Enterprise security practices with complete data ownership",
    ],
    previewTitle: "INFRA_SPEC // CLUSTER_RUNTIME",
    previewMetrics: [
      { label: "Orchestration", val: "Docker / K8s" },
      { label: "DB Latency", val: "1.8ms" },
      { label: "CI/CD", val: "Automated" },
    ],
  },
];

export function HackerRankPillars() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PILLARS[activeIdx];
  const Icon = current.icon;

  return (
    <section id="solutions" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#FFFFFF]">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D1D5DB] bg-[#F9FAFB] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
            <span className="font-mono-code text-[11px] font-semibold text-[#0E1015] uppercase tracking-wider">
              The Engineering Paradigm Has Changed
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1015]">
            Engineering built for what comes next.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E6470]">
            How DORVIK delivers software, AI models, and infrastructure that perform in production.
          </p>
        </div>

        {/* Tab Buttons (HackerRank Tab Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {PILLARS.map((pillar, idx) => {
            const PIcon = pillar.icon;
            const isSelected = activeIdx === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 flex items-start gap-3.5 ${
                  isSelected
                    ? "bg-[#0E1015] text-white border-[#0E1015] shadow-md"
                    : "bg-[#F9FAFB] text-[#0E1015] border-[#E5E7EB] hover:bg-[#F3F4F6]"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-[#1A1D24] text-[#00EA64]" : "bg-[#FFFFFF] text-[#0E1015] border border-[#E5E7EB]"
                  }`}
                >
                  <PIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className={`font-mono-code text-[11px] uppercase tracking-wider ${isSelected ? "text-[#00EA64]" : "text-[#5E6470]"}`}>
                    PILLAR 0{idx + 1}
                  </div>
                  <div className="font-semibold text-sm sm:text-base mt-0.5">
                    {pillar.tabTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Pillar Details Container */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
              <span className="font-mono-code text-xs font-semibold text-[#5E6470] tracking-wider uppercase">
                {current.eyebrow}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0E1015] leading-snug">
              {current.heading}
            </h3>

            <p className="text-base text-[#5E6470] leading-relaxed">
              {current.description}
            </p>

            <ul className="space-y-3 pt-2">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-[#0E1015]">
                  <CheckCircle2 className="w-5 h-5 text-[#008738] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E1015] hover:text-[#008738] transition-colors"
              >
                <span>Discuss implementation with our engineers</span>
                <ArrowRight className="w-4 h-4 text-[#008738]" />
              </a>
            </div>
          </div>

          {/* Right Architecture / Telemetry Card */}
          <div className="lg:col-span-5 bg-[#0E1015] text-white p-6 sm:p-8 rounded-xl border border-[#252A36] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#252A36] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00EA64] animate-pulse" />
                <span className="font-mono-code text-xs font-semibold text-white tracking-wider">
                  {current.previewTitle}
                </span>
              </div>
              <span className="font-mono-code text-[11px] text-[#00EA64] bg-[#161922] px-2 py-0.5 rounded border border-[#252A36]">
                AUDITED
              </span>
            </div>

            <div className="space-y-4">
              {current.previewMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#161922] border border-[#252A36]"
                >
                  <span className="text-xs font-mono-code text-[#8C93A0]">{m.label}</span>
                  <span className="text-sm font-mono-code font-bold text-white">{m.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#252A36] text-[11px] font-mono-code text-[#5E6470] flex items-center justify-between">
              <span>SECURITY_COMPLIANT</span>
              <span className="text-[#00EA64]">READY_FOR_DEPLOYMENT</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
