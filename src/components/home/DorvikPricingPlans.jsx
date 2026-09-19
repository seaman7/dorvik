"use client";

import React, { useState } from "react";
import Link from "next/link";

const SPECIFIC_PLANS = [
  {
    id: "web-development",
    category: "WEB DEVELOPMENT",
    title: "Full-Stack Web App Sprint",
    target: "For startups & businesses launching custom SaaS, portals, or web apps",
    tagline: "Modern, responsive, and high-performance web engineering from scratch.",
    badge: "WEB & FULL-STACK",
    badgeColor: "bg-cyan-400 text-cyan-950",
    accentBorder: "border-cyan-400",
    pricing: "From $2,400 / sprint",
    pricingSub: "Fixed scope milestone or monthly dedicated team",
    deliverables: [
      "Custom Next.js 16 + React 19 web application",
      "Tailwind CSS v4, responsive UI/UX & micro-interactions",
      "Scalable REST/GraphQL API & PostgreSQL/MongoDB schema",
      "User authentication, payments (Stripe) & dashboard",
      "Cloud deployment on AWS, Vercel, or Docker container",
      "30-day post-launch warranty & performance optimization",
    ],
    techStack: ["Next.js", "React", "Node.js", "Tailwind", "PostgreSQL", "AWS"],
    ctaText: "Start Web Development Project",
    ctaLink: "/contact?service=web-development",
    popular: false,
  },
  {
    id: "ai-bug-fixer",
    category: "AI BUG FIXER",
    title: "Autonomous SWE Bug Fixer Agent",
    target: "For fast-shipping teams wanting 24/7 automated bug triaging & PR fixes",
    tagline: "Autonomous agent monitoring Sentry & GitHub, committing verified patches.",
    badge: "MOST POPULAR",
    badgeColor: "bg-fuchsia-400 text-fuchsia-950",
    accentBorder: "border-fuchsia-400",
    pricing: "$499 / mo per repo",
    pricingSub: "Includes unlimited automated bug diagnoses & PRs",
    deliverables: [
      "24/7 Sentry, Datadog & GitHub Issue webhook ingestion",
      "AST fault localization & isolated sandbox reproduction",
      "Automated unit test synthesis (Jest / Vitest / PyTest)",
      "Signed, ready-to-merge Pull Requests with CI receipts",
      "Continuous dependency updates & deprecation fixes",
      "Dedicated Discord/Slack alerts for critical incident triages",
    ],
    techStack: ["Gemini 3 Pro", "Tree-Sitter AST", "GitHub API", "Sentry", "Vitest"],
    ctaText: "Deploy Bug Fixer Agent",
    ctaLink: "/contact?service=ai-bug-fixer",
    popular: true,
  },
  {
    id: "llm-training",
    category: "LLM & GEN-AI",
    title: "Custom LLM Fine-Tuning & RAG",
    target: "For companies building proprietary domain models & intelligent search",
    tagline: "Private weights, parameter-efficient fine-tuning & high-throughput serving.",
    badge: "ENTERPRISE AI",
    badgeColor: "bg-amber-400 text-amber-950",
    accentBorder: "border-amber-400",
    pricing: "Custom Project Quote",
    pricingSub: "Based on dataset scale, compute hours & latency SLA",
    deliverables: [
      "Proprietary dataset cleaning, curation & tokenization",
      "LoRA / QLoRA fine-tuning on open weights (Llama 3.3, Mistral, Qwen)",
      "Enterprise RAG pipeline with hybrid vector/semantic search",
      "Inference acceleration on vLLM & TensorRT-LLM (high token/s)",
      "Automated hallucination benchmarks & safety guardrails",
      "Full IP ownership and private on-prem / cloud weights",
    ],
    techStack: ["Llama 3.3", "vLLM", "LoRA", "Qdrant", "Hugging Face", "CUDA"],
    ctaText: "Request LLM Training Plan",
    ctaLink: "/contact?service=llm-training",
    popular: false,
  },
  {
    id: "computer-vision",
    category: "COMPUTER VISION",
    title: "Computer Vision & Spatial Digital Twin",
    target: "For drone operators, robotics fleets, logistics & visual inspection",
    tagline: "Perception systems, real-time tracking, and spatial scene understanding.",
    badge: "ROBOTICS & CV",
    badgeColor: "bg-[#D0B9FF] text-purple-950",
    accentBorder: "border-purple-400",
    pricing: "Custom Project Quote",
    pricingSub: "Hardware-in-the-loop or cloud streaming scope",
    deliverables: [
      "Real-time object detection, segmentation & tracking (YOLO, OpenCV)",
      "Autonomous drone perception & aerial facility inspection algorithms",
      "Real-time object detection & tracking for warehouse automation",
      "Edge AI optimization for NVIDIA Jetson & embedded devices",
      "Low-latency WebRTC video streaming & telemetry dashboards",
      "Dataset annotation guidelines & synthetic simulation generation",
    ],
    techStack: ["OpenCV", "YOLOv11", "Dorvik Vision SDK", "PyTorch", "NVIDIA Jetson"],
    ctaText: "Discuss Vision & Twin Project",
    ctaLink: "/contact?service=computer-vision",
    popular: false,
  },
  {
    id: "enterprise-studio",
    category: "ALL-INCLUSIVE POD",
    title: "Dedicated Engineering Pod",
    target: "For venture-backed startups & enterprises building multi-disciplinary AI products",
    tagline: "Full-Stack Web Developers + AI Agent Engineers + Computer Vision Specialists.",
    badge: "FULL POD ALLOCATION",
    badgeColor: "bg-purple-900 text-cyan-300 border border-cyan-400",
    accentBorder: "border-cyan-400",
    pricing: "Monthly Retainer",
    pricingSub: "Dedicated senior engineering team working as your core tech arm",
    deliverables: [
      "Bespoke Web Platform Development (Next.js / React / Cloud)",
      "Continuous Autonomous AI Bug Fixing across all repositories",
      "Custom LLM Fine-Tuning & Domain Multi-Modal Agents",
      "Computer Vision & Digital Twin integrations",
      "Direct daily syncs, private Slack channel & 2-hour emergency SLA",
      "Full SOC2 compliance readiness & complete code ownership",
    ],
    techStack: ["Full Stack", "All AI Models", "Cloud Native", "DevOps"],
    ctaText: "Schedule Engineering Consultation",
    ctaLink: "/contact?service=enterprise-studio",
    popular: false,
  },
];

export function DorvikPricingPlans() {
  const [selectedTab, setSelectedTab] = useState("all");

  const displayedPlans =
    selectedTab === "all"
      ? SPECIFIC_PLANS
      : SPECIFIC_PLANS.filter((p) => p.id === selectedTab);

  return (
    <section id="plans" className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-16 relative font-mono select-none">
      {/* 3-Square Retro Divider */}
      <div className="w-full h-8 pattern-dot-three mb-12"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-3 py-1 bg-purple-900 border border-purple-600 text-xs text-cyan-300 font-bold mb-3">
          ENGAGEMENT PLANS BY CORE PROJECT
        </div>
        <h2 className="text-white text-2xl md:text-4xl font-black mb-3">
          Specific Plans Built for Your Exact Project Needs
        </h2>
        <p className="text-purple-200 text-sm md:text-base">
          Choose a tailored engagement plan based on what you are building: Web Development, AI Bug Fixing, LLM Training, or Computer Vision.
        </p>
      </div>

      {/* Interactive Category Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {[
          { id: "all", label: "All Project Plans" },
          { id: "web-development", label: "Web Development" },
          { id: "ai-bug-fixer", label: "AI Bug Fixer Agent" },
          { id: "llm-training", label: "LLM Model Training" },
          { id: "computer-vision", label: "Computer Vision" },
          { id: "enterprise-studio", label: "Dedicated Pod" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer ${
              selectedTab === tab.id
                ? "bg-cyan-400 text-cyan-950 border-cyan-300 shadow-md scale-105"
                : "bg-[#130825] text-purple-300 border-purple-800 hover:text-white hover:border-purple-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pattern-square-light p-2.5 pb-3 rounded-pixel-sm bg-[#22074f] border-2 ${plan.accentBorder} flex flex-col justify-between shadow-xl relative group ${
              plan.popular ? "md:scale-[1.02] shadow-2xl" : ""
            }`}
          >
            {/* Highlight Tag for Popular */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-fuchsia-400 text-fuchsia-950 font-black text-[11px] shadow-md">
                RECOMMENDED FOR TEAMS
              </div>
            )}

            <div className="p-6 rounded-pixel-sm bg-[#130825] border-2 border-purple-900 text-purple-200 flex flex-col justify-between h-full">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-black px-2 py-0.5 ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  <span className="text-[10px] text-purple-400 font-bold">
                    {plan.category}
                  </span>
                </div>

                <h3 className="text-white font-black text-xl mb-1 group-hover:text-cyan-300 transition-colors">
                  {plan.title}
                </h3>
                <p className="text-cyan-300 text-xs font-bold mb-3">
                  {plan.pricing}
                </p>
                <p className="text-purple-400 text-[11px] mb-4">
                  {plan.pricingSub}
                </p>

                <p className="text-purple-300 text-xs mb-5 leading-relaxed">
                  {plan.tagline}
                </p>

                {/* Target audience */}
                <div className="p-2.5 bg-[#09051c] border border-purple-800 text-[11px] text-purple-300 mb-5 leading-snug">
                  <strong className="text-white block mb-0.5">Best For:</strong>
                  {plan.target}
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-2 mb-6 border-t border-purple-800/60 pt-4">
                  <span className="text-[10px] text-purple-400 font-bold block mb-1">
                    WHAT YOU GET:
                  </span>
                  {plan.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-purple-100">
                      <span className="text-cyan-400 font-bold shrink-0">■</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <span className="text-[10px] text-purple-400 font-bold block mb-1.5">
                    CORE STACK:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {plan.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-[#09051c] text-purple-300 border border-purple-800 text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={plan.ctaLink}
                className={`w-full py-3 px-4 font-black text-xs text-center border-b-4 transition-all shadow-md mt-2 ${
                  plan.popular
                    ? "bg-fuchsia-400 hover:bg-fuchsia-300 text-fuchsia-950 border-fuchsia-700"
                    : "bg-[#642cc2] hover:bg-[#784fcf] text-white border-purple-950"
                }`}
              >
                {plan.ctaText} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Custom Scope Notice */}
      <div className="mt-14 p-6 bg-[#130825] border-2 border-purple-700 rounded-pixel-sm text-center max-w-2xl mx-auto">
        <h4 className="text-white font-black text-sm mb-1">
          Have a hybrid project spanning multiple domains?
        </h4>
        <p className="text-purple-300 text-xs mb-4">
          We frequently engineer projects combining full-stack web applications with custom fine-tuned LLMs and edge computer vision.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-white underline"
        >
          Tell our engineering team about your specific custom scope →
        </Link>
      </div>
    </section>
  );
}
