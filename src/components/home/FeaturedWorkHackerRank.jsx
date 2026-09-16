"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const PROJECTS = [
  {
    id: "waretwin",
    name: "WareTwin",
    tag: "Digital Twin · Robotics · Computer Vision",
    description:
      "An operations and visualization platform concept for autonomous drone infrastructure and robotic environments.",
    image: "/assets/projects/waretwin.png",
    status: "Live Concept Prototype",
    metrics: "60 FPS WebGL · Multi-Agent",
  },
  {
    id: "drone-vision",
    name: "Autonomous Drone & Vision Systems",
    tag: "UAV · AI · Real-Time Perception",
    description:
      "Computer vision and perception workflows for autonomous aerial systems with edge detection and telemetry tracking.",
    image: "/assets/projects/drone-vision.png",
    status: "R&D Architecture",
    metrics: "OpenCV · Edge YOLO · Telemetry",
  },
  {
    id: "academicos",
    name: "AcademicOS",
    tag: "Education Technology · AI · Platform Engineering",
    description:
      "An AI-powered academic platform concept designed to support learning, research synthesis and academic workflows.",
    image: null,
    status: "Architecture Preview",
    metrics: "Knowledge Graphs · RAG Synthesis",
  },
];

export function FeaturedWorkHackerRank() {
  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[#E5E7EB] bg-[#FFFFFF]">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D1D5DB] bg-[#F9FAFB] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
            <span className="font-mono-code text-[11px] font-semibold text-[#0E1015] uppercase tracking-wider">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1015]">
            Built for real-world engineering challenges.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E6470]">
            A selection of platforms, prototypes, and laboratory systems engineered by our team across AI, computer vision, and modern software.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] overflow-hidden flex flex-col justify-between hover:border-[#0E1015]/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Visual Container */}
              <div className="relative w-full aspect-[16/10] bg-[#F3F4F6] overflow-hidden border-b border-[#E5E7EB]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#F9FAFB] hr-grid-pattern">
                    <div className="w-full max-w-[240px] p-4 bg-white border border-[#E5E7EB] rounded-lg shadow-xs text-left">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E7EB]">
                        <span className="font-mono-code text-[10px] font-bold text-[#1D4ED8]">
                          ACADEMIC_OS // CONCEPT
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-3/4 bg-[#E5E7EB] rounded" />
                        <div className="h-2 w-1/2 bg-[#E5E7EB] rounded" />
                      </div>
                    </div>
                    <span className="font-mono-code text-[10px] text-[#8C93A0] mt-3">
                      Architectural Preview · In Active Design
                    </span>
                  </div>
                )}

                {/* Pill Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#0E1015] border border-[#E5E7EB] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64]" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-mono-code text-xs text-[#008738] font-bold uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-[#0E1015] group-hover:text-[#008738] transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#5E6470] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="font-mono-code text-xs text-[#8C93A0]">
                    {project.metrics}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-mono-code text-xs font-bold text-[#0E1015] group-hover:text-[#008738] transition-colors"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00EA64] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
