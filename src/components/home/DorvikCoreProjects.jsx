"use client";

import React, { useState } from "react";
import Link from "next/link";

const CORE_PROJECTS = [
  {
    id: "web-dev",
    category: "Web & Full-Stack",
    title: "Full-Stack Web Applications & SaaS Platforms",
    subtitle: "High-Performance Modern Web Engineering",
    desc: "We architect and deliver scalable web platforms, interactive portals, and enterprise dashboards with sub-second page loads and responsive design.",
    stack: ["Next.js 16", "React 19", "Node.js", "Tailwind CSS v4", "PostgreSQL", "Docker", "AWS"],
    deliverables: [
      "Custom SaaS platforms & enterprise client portals",
      "SSR / SSG / Server Component hybrid architectures",
      "RESTful, GraphQL & real-time WebSocket APIs",
      "Automated CI/CD pipelines & zero-downtime deployment",
    ],
    accentColor: "border-cyan-400",
    badgeBg: "bg-cyan-400 text-cyan-950",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M3 3h18v18H3V3zm2 4h14v12H5V7zm2-2h2v2H7V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5z" />
      </svg>
    ),
  },
  {
    id: "ai-bugfix",
    category: "AI SWE Agent",
    title: "Autonomous AI Bug Fixer & Code Quality Agent",
    subtitle: "24/7 Self-Healing Repository Bot",
    desc: "An autonomous agent integrated into your GitHub/GitLab repositories that ingests Sentry crashes, isolates AST faults, writes reproduction tests, and submits verified PRs.",
    stack: ["Gemini 3 Pro", "Claude 3.7", "Tree-Sitter AST", "Sentry Webhooks", "Jest/Vitest", "GitHub API"],
    deliverables: [
      "Automatic stack trace ingestion & root-cause localization",
      "Automated reproduction unit test synthesis",
      "Self-contained Pull Request commits with passing CI receipts",
      "Continuous dependency migration & deprecation patching",
    ],
    accentColor: "border-fuchsia-400",
    badgeBg: "bg-fuchsia-400 text-fuchsia-950",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-fuchsia-400" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M9 2h6v2H9V2zM7 6h10v2H7V6zM5 8h14v10H5V8zm4 3h2v2H9v-2zm4 0h2v2h-2v-2zm-6 5h10v2H7v-2zM3 11h2v4H3v-4zm16 0h2v4h-2v-4z" />
      </svg>
    ),
  },
  {
    id: "llm-training",
    category: "LLM & GenAI",
    title: "LLM Fine-Tuning & Custom Domain Models",
    subtitle: "Private Weights, Domain Adaptation & RAG",
    desc: "We train, fine-tune, and align custom Large Language Models for your proprietary data, combined with high-throughput RAG retrieval systems and optimized serving.",
    stack: ["Llama 3.3", "Mistral", "Qwen", "LoRA / QLoRA", "vLLM", "Qdrant", "Hugging Face", "CUDA"],
    deliverables: [
      "Custom dataset curation, cleansing, and tokenization",
      "Parameter-Efficient Fine-Tuning (PEFT / LoRA) on custom domain tasks",
      "Multi-modal & Enterprise RAG pipelines with semantic search",
      "Optimized inference serving with vLLM & TensorRT-LLM",
    ],
    accentColor: "border-amber-400",
    badgeBg: "bg-amber-400 text-amber-950",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-amber-400" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 4 0v1h-4V6zm-4 5h12v6H6v-6zm3 2v2h2v-2H9zm4 0v2h2v-2h-2z" />
      </svg>
    ),
  },
  {
    id: "computer-vision",
    category: "Computer Vision",
    title: "Computer Vision, Perception & Digital Twins",
    subtitle: "WareTwin & Autonomous Spatial Intelligence",
    desc: "Advanced computer vision pipelines, real-time object tracking, aerial drone perception, and physics-informed 3D digital twins for industrial operations.",
    stack: ["OpenCV", "YOLOv11", "PyTorch", "WareTwin Engine", "NVIDIA Jetson", "TensorRT", "WebRTC"],
    deliverables: [
      "Real-time object detection, segmentation & multi-camera tracking",
      "Autonomous aerial drone perception & automated inspection",
      "WareTwin 3D spatial simulation for warehouse & robotics fleets",
      "Edge AI optimization for low-latency embedded deployment",
    ],
    accentColor: "border-purple-400",
    badgeBg: "bg-[#D0B9FF] text-purple-950",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 text-cyan-300" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
  },
];

export function DorvikCoreProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? CORE_PROJECTS
      : CORE_PROJECTS.filter((p) => p.id === activeFilter);

  return (
    <section id="projects" className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-12 relative font-mono">
      {/* 3-Square Retro Divider */}
      <div className="w-full h-8 pattern-dot-three mb-14"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-3 py-1 bg-purple-900 border border-purple-600 text-xs text-cyan-300 font-bold mb-3">
          DORVIK CORE CAPABILITIES
        </div>
        <h2 className="text-white text-2xl md:text-4xl font-black mb-3">
          Main Core Projects &amp; Solutions
        </h2>
        <p className="text-purple-200 text-sm md:text-base">
          From custom full-stack web applications and autonomous AI bug-fixing to private LLM training and computer vision digital twins.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {[
          { id: "all", label: "All Projects & Services" },
          { id: "web-dev", label: "Web Development" },
          { id: "ai-bugfix", label: "AI Bug Fixer" },
          { id: "llm-training", label: "LLM Model Training" },
          { id: "computer-vision", label: "Computer Vision & Twins" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer ${
              activeFilter === btn.id
                ? "bg-cyan-400 text-cyan-950 border-cyan-300 shadow-md scale-105"
                : "bg-[#130825] text-purple-300 border-purple-800 hover:text-white hover:border-purple-600"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* 2x2 Grid of Core Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className={`pattern-square-light p-3 pb-4 rounded-pixel-lg bg-[#22074f] border-2 ${proj.accentColor} shadow-xl flex flex-col justify-between group`}
          >
            <div className="bg-[#130825] p-6 md:p-8 rounded-pixel-sm border-2 border-purple-900 h-full flex flex-col justify-between">
              <div>
                {/* Header with Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-purple-900/80 border border-purple-700">
                    {proj.icon}
                  </div>
                  <span className={`text-[11px] font-black px-2.5 py-1 ${proj.badgeBg}`}>
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-black mb-1 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-purple-300 text-xs font-bold mb-3">
                  {proj.subtitle}
                </p>
                <p className="text-purple-200 text-xs md:text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 border-t border-purple-800/60 pt-4">
                  <span className="text-[11px] text-purple-400 font-bold block mb-1">
                    KEY DELIVERABLES:
                  </span>
                  {proj.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-purple-100">
                      <span className="text-cyan-400 font-bold shrink-0">■</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <span className="text-[11px] text-purple-400 font-bold block mb-2">
                    TECHNOLOGY STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((tech, tIdx) => (
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

              {/* Action Button linking to Contact */}
              <Link
                href={`/contact?service=${proj.id}`}
                className="w-full py-3 px-4 bg-[#642cc2] hover:bg-[#784fcf] text-white font-black text-xs text-center border-b-4 border-purple-950 transition-colors shadow-md mt-2"
              >
                Discuss {proj.category} Project with Engineers →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
