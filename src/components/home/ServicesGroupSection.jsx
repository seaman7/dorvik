"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { SERVICE_GROUPS, SERVICES } from "@/lib/servicesData";

export function ServicesGroupSection() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const activeGroup = SERVICE_GROUPS[activeGroupIndex];
  const groupServices = SERVICES.filter((s) =>
    activeGroup.services.includes(s.slug)
  );
  const [activeServiceSlug, setActiveServiceSlug] = useState(groupServices[0]?.slug);

  const currentService =
    groupServices.find((s) => s.slug === activeServiceSlug) || groupServices[0];

  return (
    <section id="solutions" className="relative w-full py-20 lg:py-28 border-b border-neutral-200 dark:border-[#1b1b20] bg-[#FAFAFC] dark:bg-[#08080A] transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2">
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase block">
              CORE SERVICES &amp; ARCHITECTURES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              What we build
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-xl">
              Eight core engineering disciplines organized across four specialized technology domains.
            </p>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <span>INDEX OF ALL 8 SOLUTIONS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Domain Switcher Tabs */}
        <div className="pt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
          {SERVICE_GROUPS.map((group, idx) => (
            <button
              key={group.id}
              onClick={() => {
                setActiveGroupIndex(idx);
                const firstSlug = SERVICES.find((s) => group.services.includes(s.slug))?.slug;
                setActiveServiceSlug(firstSlug);
              }}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeGroupIndex === idx
                  ? "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white shadow-sm"
                  : "bg-neutral-100/60 dark:bg-neutral-950/40 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
              }`}
            >
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold block mb-1">
                DOMAIN 0{idx + 1}
              </span>
              <span className="text-xs sm:text-sm font-bold block leading-snug">
                {group.title}
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block mt-1 line-clamp-1">
                {group.services.length} {group.services.length === 1 ? "Capability" : "Capabilities"}
              </span>
            </button>
          ))}
        </div>

        {/* Master-Detail Interactive Engineering Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: List of Services within Active Domain */}
          <div className="lg:col-span-5 space-y-2.5">
            {groupServices.map((service) => {
              const isSelected = currentService?.slug === service.slug;

              return (
                <div
                  key={service.slug}
                  onClick={() => setActiveServiceSlug(service.slug)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-white dark:bg-neutral-900 border-blue-500/80 shadow-md"
                      : "bg-white/80 dark:bg-[#0B0D14] border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">
                        {service.number}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-600 dark:text-neutral-400 px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                        {service.badge}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-blue-600 dark:text-blue-400 translate-x-0.5" : "text-neutral-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: In-Depth Technical Specification Inspector */}
          {currentService && (
            <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0B0D14] border border-neutral-200 dark:border-neutral-800 space-y-6 shadow-sm dark:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">SPECIFICATION</span>
                    <span>//</span>
                    <span>{currentService.number}</span>
                    <span>&bull;</span>
                    <span>{currentService.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                    {currentService.title}
                  </h3>
                </div>

                <Link
                  href={`/solutions/${currentService.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline font-mono"
                >
                  <span>FULL SPEC PAGE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Tagline & Overview */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-neutral-800 dark:text-neutral-300 font-mono">
                  {currentService.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  {currentService.fullOverview}
                </p>
              </div>

              {/* Core Capabilities */}
              <div className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 dark:text-neutral-400 font-bold block">
                  Granular Engineering Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.capabilities.slice(0, 6).map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-800 dark:text-neutral-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Runtimes */}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 mr-2">
                  Stack:
                </span>
                {currentService.technologyAreas.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
                <Link
                  href={`/solutions/${currentService.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 font-semibold text-xs transition-all shadow-sm"
                >
                  <span>Explore {currentService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
