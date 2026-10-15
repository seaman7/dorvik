"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Box, ScanLine, ChevronDown, Check } from "lucide-react";

const PROJECTS = [
  {
    id: "eduos",
    category: "Education Software",
    name: "EduOS (formerly AcademicOS)",
    subtitle: "Connected learning & assessment operations.",
    text: "An evolving education platform unifying student admissions, assignment submissions, OCR document scanning, and teacher-reviewed grading.",
    icon: GraduationCap,
    tags: ["Education", "OCR Workflows", "Teacher Grading", "Student Portal"],
    details:
      "Engineered to help learning institutions and coaching centres replace manual paper grading and administrative silos with a transparent, rubric-based evaluation system.",
    href: "/eduos",
    action: "Explore EduOS product",
  },
  {
    id: "waretwin",
    category: "Custom Software",
    name: "WareTwin Logistics Telemetry",
    subtitle: "3D operational spatial visibility.",
    text: "Digital twin engineering for warehouse logistics, automated equipment telemetry, and operational status dashboards.",
    icon: Box,
    tags: ["Operational Dashboards", "Telemetry", "Web Systems"],
    details:
      "Connects sensor streams with interactive spatial dashboards so operations supervisors can identify equipment bottlenecks and review event logs in real time.",
    href: "/services/software-development",
    action: "Discuss software automation",
  },
  {
    id: "drone-vision",
    category: "Applied AI",
    name: "Autonomous Infrastructure Vision",
    subtitle: "High-recall defect detection & OCR.",
    text: "Computer vision and edge model workflows for structural inspection, crack segmentation, and automated equipment telemetry alerts.",
    icon: ScanLine,
    tags: ["Computer Vision", "Model Fine-Tuning", "Inference APIs"],
    details:
      "Quantized vision models running low-latency inference on video feeds, generating geo-tagged defect reports with verifiable confidence scores.",
    href: "/services/ai-engineering",
    action: "Discuss AI engineering",
  },
];

export function ProjectDirectory() {
  const [filter, setFilter] = useState("All projects");

  const filteredProjects = PROJECTS.filter(
    (p) => filter === "All projects" || p.category === filter
  );

  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Header */}
        <header className="max-w-3xl mb-12 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Project Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            Selected engineering initiatives.
          </h1>
          <p className="text-base sm:text-lg text-[#596a60] leading-relaxed">
            Explore authentic engineering prototypes and applied systems developed by Dorvik
            across education, computer vision, and business automation.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-[#e5ded1]">
          {["All projects", "Education Software", "Custom Software", "Applied AI"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === item
                  ? "bg-[#14382c] text-white"
                  : "bg-white text-[#596a60] border border-[#e5ded1] hover:border-[#14382c]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="space-y-6 mb-16">
          {filteredProjects.map((p, index) => {
            const Icon = p.icon;

            return (
              <article
                key={p.id}
                id={p.id}
                className="bg-white rounded-xl border border-[#e5ded1] p-6 sm:p-8 space-y-4 hover:border-[#14382c] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#eee8dc]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#798a80]">
                        0{index + 1} / {p.category}
                      </span>
                      <h2 className="text-xl font-bold text-[#14382c]">
                        {p.name}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href={p.href}
                    className="dv-btn-secondary !py-2 !px-3 text-xs self-start sm:self-auto"
                  >
                    <span>{p.action}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-[#1e4d3c]">
                    {p.subtitle}
                  </h3>
                  <p className="text-sm text-[#4a5c51] leading-relaxed max-w-3xl">
                    {p.text}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#fbf9f4] border border-[#e5ded1] text-[#596a60]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <details className="text-xs pt-2">
                    <summary className="font-semibold text-[#14382c] cursor-pointer hover:underline py-1">
                      Read Project Architecture Overview
                    </summary>
                    <p className="mt-2 p-4 bg-[#fbf9f4] rounded-lg border border-[#eee8dc] text-xs text-[#4a5c51] leading-relaxed">
                      {p.details}
                    </p>
                  </details>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-xl bg-[#14382c] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Have a similar engineering challenge?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              We evaluate feasibility, review datasets, and build custom proofs of concept.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
