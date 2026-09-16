"use client";

import React from "react";
import { ArrowUpRight, Cpu, Layers, Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function DualProductShowcase() {
  return (
    <section id="platforms" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#FFFFFF]">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D1D5DB] bg-[#F9FAFB] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
            <span className="font-mono-code text-[11px] font-semibold text-[#0E1015] uppercase tracking-wider">
              One Partner. Two Core Engines.
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1015]">
            Engineered for applied intelligence and complete digital products.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E6470]">
            Whether you need custom perception models or full-stack software platforms, we deliver end-to-end technical execution.
          </p>
        </div>

        {/* Dual Split Cards (HackerRank Exact Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Applied AI & Computer Vision */}
          <div className="group rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 sm:p-10 flex flex-col justify-between hover:border-[#0E1015]/40 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
                <span className="font-mono-code text-xs font-bold text-[#008738] uppercase tracking-wider bg-[#E6F9EE] px-3 py-1 rounded-full border border-[#B3F2CE]">
                  AI &amp; VISION ENGINE
                </span>
                <Cpu className="w-6 h-6 text-[#0E1015]" />
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-[#0E1015]">
                Applied AI &amp; Computer Vision
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#5E6470] leading-relaxed">
                Transform camera feeds and raw data into actionable intelligence. We design OpenCV solutions, custom YOLO object detection, edge robotics perception, and high-accuracy dataset annotation pipelines.
              </p>

              {/* Technical Capability Badges */}
              <div className="mt-6 pt-6 border-t border-[#E5E7EB] space-y-2.5">
                {[
                  "Real-time object detection, tracking, & segmentation",
                  "OpenCV integration for robotic environments and drones",
                  "Custom dataset annotation with COCO & YOLO exports",
                  "RAG architecture & fine-tuned machine learning models",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0E1015]">
                    <Check className="w-4 h-4 text-[#008738] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Interactive Area */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0E1015] hover:bg-[#1A1D24] transition-colors group"
              >
                <span>Deploy AI Systems</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00EA64] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="font-mono-code text-xs text-[#5E6470]">01 // PERCEPTION_STACK</span>
            </div>
          </div>

          {/* Card 2: Custom Software & Digital Products */}
          <div className="group rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 sm:p-10 flex flex-col justify-between hover:border-[#0E1015]/40 hover:shadow-xl transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
                <span className="font-mono-code text-xs font-bold text-[#1D4ED8] uppercase tracking-wider bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE]">
                  PRODUCT &amp; CLOUD ENGINE
                </span>
                <Layers className="w-6 h-6 text-[#0E1015]" />
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-[#0E1015]">
                Digital Products &amp; Scalable Infrastructure
              </h3>

              <p className="mt-4 text-sm sm:text-base text-[#5E6470] leading-relaxed">
                Design and engineer reliable digital platforms from scratch. We build responsive web applications, modern mobile interfaces, backend microservices, and Dockerized cloud infrastructure that scale seamlessly.
              </p>

              {/* Technical Capability Badges */}
              <div className="mt-6 pt-6 border-t border-[#E5E7EB] space-y-2.5">
                {[
                  "Modern Next.js, React, and Node.js platform engineering",
                  "High-performance REST & GraphQL APIs with sub-10ms response",
                  "SaaS architectures, administrative dashboards, and internal tools",
                  "Dockerized cloud runtimes with CI/CD deployment automation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0E1015]">
                    <Check className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Interactive Area */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0E1015] hover:bg-[#1A1D24] transition-colors group"
              >
                <span>Build a Digital Product</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00EA64] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="font-mono-code text-xs text-[#5E6470]">02 // FULLSTACK_INFRA</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
