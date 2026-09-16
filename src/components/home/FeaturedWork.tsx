"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROJECTS = [
  {
    id: "waretwin",
    name: "WareTwin",
    category: "Digital Twin · Robotics · Computer Vision",
    description:
      "An operations and visualization platform concept for autonomous drone infrastructure and robotic environments.",
    status: "Active System Concept",
    image: "/assets/projects/waretwin.png",
    aspectRatio: "aspect-[16/10]",
    hasRealImage: true,
    highlights: ["3D Spatial Modeling", "Telemetry Dashboard", "Multi-Agent Coordination"],
  },
  {
    id: "drone-vision",
    name: "Autonomous Drone & Vision Systems",
    category: "UAV · AI · Real-Time Perception",
    description:
      "Computer vision and perception workflows for autonomous aerial systems.",
    status: "R&D Prototype Architecture",
    image: "/assets/projects/drone-vision.png",
    aspectRatio: "aspect-[16/10]",
    hasRealImage: true,
    highlights: ["OpenCV Pipeline", "Edge Perception", "Real-Time Tracking"],
  },
  {
    id: "academicos",
    name: "AcademicOS",
    category: "Education Technology · AI · Platform Engineering",
    description:
      "An AI-powered academic platform concept designed to support learning, research and academic workflows.",
    status: "Concept Platform Architecture",
    image: null,
    aspectRatio: "aspect-[16/10]",
    hasRealImage: false,
    placeholderNotice: "Architectural Concept Preview — Interface Design in Progress",
    highlights: ["Knowledge Synthesis", "Research RAG", "Workflow Orchestration"],
  },
];

export function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 border-b border-[#DEDED8] bg-[#F7F7F3]">
      <Container size="wide">
        <SectionHeading
          eyebrow="SELECTED WORK"
          heading="Built for real-world challenges."
          description="A selection of experiments, platforms and engineering projects exploring the intersection of AI, software and intelligent systems."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-[#FFFFFF] border border-[#DEDED8] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#111111]/40 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.08)]"
            >
              {/* Visual Display Container */}
              <div className="relative w-full aspect-[16/10] bg-[#F0F0EB] overflow-hidden border-b border-[#E8E8E2]">
                {project.hasRealImage && project.image ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} interface preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  /* Elegant Architectural Placeholder Diagram for AcademicOS */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-[#FAF9F5] tech-grid-pattern">
                    <div className="relative z-10 w-full max-w-[280px] p-4 bg-[#FFFFFF] border border-[#DEDED8] rounded shadow-xs text-left">
                      <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-2 mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#1D4ED8] font-semibold">
                          SYS // ACADEMIC_OS
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-[#E8E8E2] rounded-xs" />
                        <div className="h-2 w-1/2 bg-[#E8E8E2] rounded-xs" />
                        <div className="pt-2 flex gap-1.5">
                          <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#F0F0EB] text-[#4A4A4A] border border-[#DEDED8]">
                            PAPERS_RAG
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#F0F0EB] text-[#4A4A4A] border border-[#DEDED8]">
                            GRAPH_INDEX
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="relative z-10 mt-3 text-[10px] font-mono text-[#8E8E88] text-center italic">
                      {project.placeholderNotice}
                    </p>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#111111] bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DEDED8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B]">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-[#111111] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#E8E8E2] flex flex-wrap gap-1.5">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[#F7F7F3] border border-[#E8E8E2] text-[#4A4A4A]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Interaction Link */}
                <div className="mt-6 pt-4 border-t border-[#E8E8E2] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#111111] group-hover:text-[#1D4ED8] transition-colors">
                    View project overview
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#111111] group-hover:text-[#1D4ED8] transition-colors p-1"
                    aria-label={`View details for ${project.name}`}
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding featured work transparency */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#8E8E88] font-mono">
            * Selected works represent architectural prototypes, laboratory systems, and platform concepts engineered by our team.
          </p>
        </div>
      </Container>
    </section>
  );
}
