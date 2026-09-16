"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Play, Terminal, CheckCircle2, FileCode, Cpu, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const DEMO_TABS = [
  {
    id: "vision",
    label: "Computer Vision Stack",
    fileName: "perception_pipeline.py",
    language: "python",
    code: `import cv2
import torch
from dorvik.vision import SpatialDetector, TelemetryTracker

# Initialize real-time perception model
detector = SpatialDetector(model="yolo-v11-custom", precision="fp16")
stream = cv2.VideoCapture("rtsp://edge-node-01.local/live")

while stream.isOpened():
    frame = stream.read()
    detections = detector.detect(frame, confidence=0.88)
    
    # Real-time multi-object coordinate telemetry
    for obj in detections:
        print(f"[EDGE // {obj.class_name}] x={obj.x:.2f} y={obj.y:.2f} speed={obj.velocity}km/h")
        TelemetryTracker.dispatch(obj.vector)`,
    output: "Model loaded (CUDA:0). Latency: 9.4ms. Stream fps: 60. Precision: fp16 active.",
    badge: "OPEN_CV // REALTIME",
  },
  {
    id: "agent",
    label: "AI Agent & RAG Core",
    fileName: "agent_orchestrator.js",
    language: "javascript",
    code: `import { AgentCluster, VectorIndex } from "@dorvik/core";

export async function orchestrateWorkflow(request) {
  // 1. Semantic query embedding & domain synthesis
  const context = await VectorIndex.retrieve({
    query: request.prompt,
    topK: 8,
    rerank: "cross-encoder"
  });

  // 2. Structured tool execution with audit validation
  const agent = new AgentCluster({ model: "gemini-flash", temperature: 0.1 });
  const result = await agent.runStep({ prompt: request.prompt, context });
  
  return { status: 200, latencyMs: 142, data: result };
}`,
    output: "Index verified: 48,200 vectors. Rerank complete: top 8 items dispatched to agent.",
    badge: "RAG // ORCHESTRATION",
  },
  {
    id: "cloud",
    label: "Cloud & Distributed API",
    fileName: "docker-compose.yml",
    language: "yaml",
    code: `version: "3.8"
services:
  dorvik-inference-gateway:
    image: dorvik/gateway:latest
    ports:
      - "443:443"
    environment:
      - RUNTIME_WORKERS=8
      - REDIS_CLUSTER=redis://cache:6379
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]`,
    output: "Containers healthy: 8 workers spawned across GPU clusters. Zero downtime verified.",
    badge: "INFRA // DEPLOYMENT",
  },
];

export function HackerRankHero() {
  const [activeTab, setActiveTab] = useState(DEMO_TABS[0]);

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 border-b border-[#E5E7EB] overflow-hidden bg-[#FFFFFF]">
      {/* HackerRank subtle dot/grid background */}
      <div className="absolute inset-0 hr-grid-pattern opacity-50 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Top Centered Header Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* HackerRank Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D1D5DB] bg-[#F9FAFB] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00EA64] animate-pulse" />
            <span className="font-mono-code text-xs font-semibold text-[#0E1015] uppercase tracking-wider">
              Hire &amp; Build for the Agentic Era
            </span>
          </div>

          {/* Large Headline with Serif Italic Accent */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0E1015] leading-[1.08]">
            Software &amp; AI systems for the{" "}
            <span className="font-serif-italic text-[#0E1015] font-normal underline decoration-[#00EA64] decoration-wavy decoration-1 underline-offset-8">
              Agentic Era.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#5E6470] leading-relaxed max-w-2xl mx-auto">
            From intelligent computer vision and OpenCV perception to custom software, web applications and cloud deployments, we build technology that moves businesses forward.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0E1015] hover:bg-[#1A1D24] rounded-full transition-all duration-200 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00EA64]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#00EA64] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#0E1015] bg-[#FFFFFF] hover:bg-[#F3F4F6] border border-[#D1D5DB] rounded-full transition-colors group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#5E6470] transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* HackerRank-style Interactive Agentic IDE Window */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto rounded-xl border border-[#E5E7EB] bg-[#0E1015] shadow-2xl overflow-hidden text-white">
          {/* Window Top Bar */}
          <div className="px-4 py-3 bg-[#161922] border-b border-[#252A36] flex items-center justify-between">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono-code text-xs text-[#8C93A0] hidden sm:inline-block">
                dorvik-agentic-ide // production-v2.4
              </span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {DEMO_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 text-xs font-mono-code rounded-md transition-all whitespace-nowrap ${
                    activeTab.id === tab.id
                      ? "bg-[#0E1015] text-[#00EA64] border border-[#252A36] font-semibold"
                      : "text-[#8C93A0] hover:text-white hover:bg-[#1F2430]"
                  }`}
                >
                  {tab.fileName}
                </button>
              ))}
            </div>

            {/* Right Status Badge */}
            <div className="hidden md:flex items-center gap-2">
              <span className="font-mono-code text-[11px] px-2 py-0.5 rounded bg-[#1F2430] text-[#00EA64] border border-[#252A36]">
                {activeTab.badge}
              </span>
            </div>
          </div>

          {/* IDE Content Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[340px]">
            {/* Left File Tree Sidebar */}
            <div className="hidden lg:block lg:col-span-3 bg-[#111318] border-r border-[#252A36] p-4 text-xs font-mono-code text-[#8C93A0] space-y-3">
              <div className="text-[10px] uppercase font-bold text-[#5E6470] tracking-wider mb-2">
                PROJECT WORKSPACE
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium">
                  <FileCode className="w-3.5 h-3.5 text-[#00EA64]" />
                  <span>perception/</span>
                </div>
                <div className="pl-5 space-y-1 text-[#8C93A0]">
                  <div className="text-[#00EA64] font-medium">↳ vision_pipeline.py</div>
                  <div>↳ tracker_kalman.py</div>
                  <div>↳ dataset_coco.json</div>
                </div>
                <div className="flex items-center gap-2 pt-2 text-white font-medium">
                  <Cpu className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>models/</span>
                </div>
                <div className="pl-5 space-y-1 text-[#8C93A0]">
                  <div>↳ yolo_custom.pt</div>
                  <div>↳ lora_weights.safetensors</div>
                </div>
                <div className="flex items-center gap-2 pt-2 text-white font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>deploy/</span>
                </div>
                <div className="pl-5 space-y-1 text-[#8C93A0]">
                  <div>↳ docker-compose.yml</div>
                  <div>↳ api_gateway.go</div>
                </div>
              </div>
            </div>

            {/* Main Code View Pane */}
            <div className="lg:col-span-9 p-5 sm:p-6 bg-[#0E1015] flex flex-col justify-between">
              <div className="overflow-x-auto code-scroll">
                <pre className="font-mono-code text-xs sm:text-sm text-[#E6EDF3] leading-relaxed">
                  <code>{activeTab.code}</code>
                </pre>
              </div>

              {/* Bottom Live Terminal Output Strip */}
              <div className="mt-6 pt-4 border-t border-[#252A36] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-code">
                <div className="flex items-center gap-2 text-[#8C93A0]">
                  <Terminal className="w-3.5 h-3.5 text-[#00EA64]" />
                  <span className="text-[#00EA64]">SYS_LOG:</span>
                  <span className="text-[#C9D1D9] truncate">{activeTab.output}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0 text-[#8C93A0] text-[11px]">
                  <span>P99: 11ms</span>
                  <span>CUDA: ACTIVE</span>
                  <span className="text-[#00EA64]">● LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
