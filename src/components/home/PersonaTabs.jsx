"use client";

import React, { useState } from "react";
import { Rocket, Building2, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function PersonaTabs() {
  const [activeTab, setActiveTab] = useState("startups");

  return (
    <section id="for-builders" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#F9FAFB]">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D1D5DB] bg-[#FFFFFF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
            <span className="font-mono-code text-[11px] font-semibold text-[#0E1015] uppercase tracking-wider">
              Tailored Engagement
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1015]">
            Built for ambitious teams of every scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E6470]">
            Whether you are launching your first flagship product or modernizing complex industrial infrastructure.
          </p>

          {/* Toggle Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#E5E7EB] border border-[#D1D5DB]">
            <button
              type="button"
              onClick={() => setActiveTab("startups")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "startups"
                  ? "bg-[#0E1015] text-white shadow-xs"
                  : "text-[#5E6470] hover:text-[#0E1015]"
              }`}
            >
              For Startups &amp; Founders
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("enterprises")}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "enterprises"
                  ? "bg-[#0E1015] text-white shadow-xs"
                  : "text-[#5E6470] hover:text-[#0E1015]"
              }`}
            >
              For Enterprises &amp; Research
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-8 sm:p-12 shadow-sm">
          {activeTab === "startups" ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#E6F9EE] border border-[#B3F2CE] flex items-center justify-center text-[#008738]">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1015]">
                  Turn complex concepts into market-ready MVPs.
                </h3>
                <p className="text-sm sm:text-base text-[#5E6470] leading-relaxed">
                  We work side-by-side with technical and non-technical founders to rapidly build, test, and ship complete digital applications, intuitive SaaS interfaces, and AI workflows without technical debt.
                </p>
                <ul className="space-y-2 pt-2 text-sm text-[#0E1015]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008738]" /> Full-stack development from idea to launch
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008738]" /> Production-ready Next.js &amp; API architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008738]" /> Predictable sprint-based scoping
                  </li>
                </ul>
              </div>

              <div className="md:col-span-5 bg-[#F9FAFB] p-6 rounded-xl border border-[#E5E7EB] text-center space-y-4">
                <span className="font-mono-code text-xs uppercase text-[#5E6470] font-bold">
                  TYPICAL TIMELINE
                </span>
                <div className="text-3xl font-extrabold text-[#0E1015] font-mono-code">
                  3 – 6 Weeks
                </div>
                <p className="text-xs text-[#5E6470]">
                  From discovery and architecture planning to live production deployment.
                </p>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0E1015] hover:bg-[#1A1D24] transition-colors"
                >
                  <span>Build an MVP</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00EA64]" />
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#1D4ED8]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1015]">
                  Applied AI, Computer Vision &amp; Reliable Infrastructure.
                </h3>
                <p className="text-sm sm:text-base text-[#5E6470] leading-relaxed">
                  We integrate with existing engineering teams to deliver custom OpenCV pipelines, dataset engineering, robotics telemetry, and high-concurrency cloud deployments that meet rigorous enterprise criteria.
                </p>
                <ul className="space-y-2 pt-2 text-sm text-[#0E1015]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1D4ED8]" /> Custom OpenCV perception &amp; edge deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1D4ED8]" /> High-volume dataset annotation &amp; evaluation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1D4ED8]" /> 100% intellectual property ownership
                  </li>
                </ul>
              </div>

              <div className="md:col-span-5 bg-[#F9FAFB] p-6 rounded-xl border border-[#E5E7EB] text-center space-y-4">
                <span className="font-mono-code text-xs uppercase text-[#5E6470] font-bold">
                  DEPLOYMENT MODEL
                </span>
                <div className="text-3xl font-extrabold text-[#0E1015] font-mono-code">
                  Dedicated Pod
                </div>
                <p className="text-xs text-[#5E6470]">
                  Senior AI &amp; systems engineers embedded into your delivery roadmap.
                </p>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0E1015] hover:bg-[#1A1D24] transition-colors"
                >
                  <span>Inquire for Enterprise</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00EA64]" />
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
