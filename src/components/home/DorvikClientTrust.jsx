"use client";

import React from "react";
import Link from "next/link";

// High-fidelity SVG Logos for MetLife, PassNFly, and strategic technology partners
const CLIENTS = [
  {
    name: "MetLife",
    category: "Global Enterprise Insurance & FinTech",
    badge: "FORTUNE 50",
    description: "Enterprise policy processing & automated regression triage",
    logo: (
      <div className="flex items-center gap-2.5">
        {/* MetLife Iconic Interlocking Ribbon Glyph */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8L14 26H22L12 8H4Z" fill="#00D2EF" fillOpacity="0.9" />
          <path d="M14 8L24 26H28L18 8H14Z" fill="#2563EB" />
          <path d="M10 8L20 26" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-bold tracking-tight text-white text-xl font-sans leading-none">
            Met<span className="text-[#00D2EF]">Life</span>
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Enterprise Insurance</span>
        </div>
      </div>
    ),
  },
  {
    name: "PassNFly",
    category: "High-Throughput Global TravelTech",
    badge: "GLOBAL TRAVEL",
    description: "Real-time airline check-in microservices & concurrency protection",
    logo: (
      <div className="flex items-center gap-2.5">
        {/* PassNFly Supersonic Jet / Origami Flight Glyph */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 16L29 4L18 28L14 18L3 16Z" fill="url(#passnfly-grad)" />
          <path d="M14 18L29 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
          <defs>
            <linearGradient id="passnfly-grad" x1="3" y1="4" x2="29" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-bold tracking-tight text-white text-xl font-sans leading-none">
            Pass<span className="text-[#F97316]">N</span>Fly
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Smart Travel Automation</span>
        </div>
      </div>
    ),
  },
  {
    name: "Nexis Cloud",
    category: "Cloud Native Distributed Systems",
    badge: "SCALE-UP",
    description: "Zero-downtime containerized pipeline deployment",
    logo: (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 32 32" className="w-7 h-7 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="10" height="10" rx="2" fill="#10B981" />
          <rect x="18" y="4" width="10" height="10" rx="2" fill="#059669" />
          <rect x="4" y="18" width="10" height="10" rx="2" fill="#047857" />
          <rect x="18" y="18" width="10" height="10" rx="2" fill="#34D399" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-bold tracking-tight text-white text-lg font-sans leading-none">
            Nexis<span className="text-emerald-400">Cloud</span>
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Distributed Infra</span>
        </div>
      </div>
    ),
  },
  {
    name: "FinVanguard",
    category: "Algorithmic Wealth & Asset Tech",
    badge: "FINTECH",
    description: "High-frequency trade execution & latency patch agent",
    logo: (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 32 32" className="w-7 h-7 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3L28 8V16C28 23.5 22.8 28.5 16 30C9.2 28.5 4 23.5 4 16V8L16 3Z" stroke="#8B5CF6" strokeWidth="2.5" fill="#8B5CF6" fillOpacity="0.2" />
          <path d="M12 16L15 19L21 13" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-bold tracking-tight text-white text-lg font-sans leading-none">
            Fin<span className="text-purple-400">Vanguard</span>
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Asset Intelligence</span>
        </div>
      </div>
    ),
  },
  {
    name: "AeroCore API",
    category: "Global Flight & Cargo Telemetry",
    badge: "AVIATION",
    description: "Resilient aviation payload orchestration & schema sync",
    logo: (
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 32 32" className="w-7 h-7 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="16" cy="16" r="6" fill="#0284C7" />
          <path d="M16 4V10M16 22V28M4 16H10M22 16H28" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="flex flex-col text-left">
          <span className="font-bold tracking-tight text-white text-lg font-sans leading-none">
            Aero<span className="text-sky-400">Core</span>
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">Flight Telemetry</span>
        </div>
      </div>
    ),
  },
];

const METRICS = [
  {
    value: "99.4%",
    label: "First-Pass PR Merge Rate",
    sub: "Autonomous code patches pass CI & test suites on the very first commit",
    color: "from-cyan-400 to-blue-500",
    border: "border-cyan-500/30",
    glow: "shadow-[0_0_24px_rgba(0,210,239,0.12)]",
  },
  {
    value: "< 14m",
    label: "Mean Time to Resolution",
    sub: "From exception capture in production to ready-to-merge pull request",
    color: "from-emerald-400 to-teal-500",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_24px_rgba(16,185,129,0.12)]",
  },
  {
    value: "$1.8M+",
    label: "Engineering Labor Saved",
    sub: "Prevented sprint delays, on-call fatigue, and emergency hotfixes",
    color: "from-amber-400 to-orange-500",
    border: "border-amber-500/30",
    glow: "shadow-[0_0_24px_rgba(249,115,22,0.12)]",
  },
  {
    value: "0 Regressions",
    label: "Synthetic Test Coverage",
    sub: "Every patch includes automatically generated reproduction unit tests",
    color: "from-fuchsia-400 to-purple-500",
    border: "border-fuchsia-500/30",
    glow: "shadow-[0_0_24px_rgba(217,70,239,0.12)]",
  },
];

const TRUST_BADGES = [
  {
    title: "SOC 2 Type II Certified",
    desc: "Rigorous controls over data security, availability, and privacy",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Zero Data Retention",
    desc: "Your proprietary code is never cached, exposed, or used to train models",
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Air-Gapped & VPC Support",
    desc: "Deploy Dorvik inside your dedicated AWS, GCP, or on-premise VPC network",
    icon: (
      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "99.99% Enterprise SLA",
    desc: "Guaranteed uptime and 24/7 dedicated engineering support escalation",
    icon: (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export function DorvikClientTrust() {
  return (
    <section id="clients" className="relative w-full py-20 bg-[#060608] border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Proven In High-Stakes Production</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Trusted by Engineering Leaders at{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-white to-orange-400 bg-clip-text text-transparent">
              MetLife, PassNFly
            </span>{" "}
            & Global Scale-Ups
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            From Fortune 50 enterprise core policy services to high-concurrency real-time travel engines, 
            engineering organizations deploy Dorvik to safeguard uptime and eliminate sprint bug fatigue.
          </p>
        </div>

        {/* Client Logos Grid / Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0c0c10]/80 hover:bg-[#121218] border border-white/[0.08] hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,210,239,0.08)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                {client.logo}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.08] group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                  {client.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed border-t border-white/[0.05] pt-3 mt-1">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Metrics Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`relative bg-[#0b0b0f] border ${metric.border} ${metric.glow} rounded-2xl p-6 flex flex-col justify-between overflow-hidden group hover:border-white/30 transition-all duration-300`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none group-hover:bg-white/[0.06] transition-colors" />

              <div>
                <div className={`text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r ${metric.color} bg-clip-text text-transparent font-mono mb-2`}>
                  {metric.value}
                </div>
                <h3 className="text-white font-bold text-base tracking-tight mb-2">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {metric.sub}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED TELEMETRY</span>
                <span className="text-emerald-400">● LIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Trust Bar */}
        <div className="bg-[#09090d] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                ENTERPRISE RIGOR
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                Engineered for Regulated & Mission-Critical Codebases
              </h4>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 hover:border-cyan-500/40 transition-all self-start lg:self-auto"
            >
              <span>Request Enterprise Security Whitepaper</span>
              <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] flex-shrink-0 mt-0.5">
                  {badge.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1">
                    {badge.title}
                  </div>
                  <div className="text-xs text-slate-400 font-sans leading-relaxed">
                    {badge.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
