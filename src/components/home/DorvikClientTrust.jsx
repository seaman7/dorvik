"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Authentic Official Enterprise Clients
const CLIENTS = [
  {
    name: "MetLife",
    category: "Global Enterprise Insurance & FinTech",
    badge: "FORTUNE 50 PARTNER",
    description: "Enterprise policy processing, automated AST regression testing, and zero-defect release verification pipelines.",
    highlight: "74% Faster Triage • Zero Regressions",
    logo: (
      <div className="flex items-center h-9">
        {/* Official MetLife Logo */}
        <Image
          src="/assets/clients/metlife-white.svg"
          alt="MetLife Official Logo"
          width={140}
          height={32}
          className="h-7 w-auto object-contain"
          priority
        />
      </div>
    ),
  },
  {
    name: "PassNFly",
    category: "High-Throughput Global TravelTech",
    badge: "TRAVELTECH LEADER",
    description: "Real-time airline check-in microservices, automated circuit breaker defenses, and high-concurrency API resilience across 200+ airlines.",
    highlight: "99.99% Availability • 10x Faster MTTR",
    logo: (
      <div className="flex items-center h-9">
        {/* Official PassNFly Logo */}
        <Image
          src="/assets/clients/passnfly.png"
          alt="PassNFly Official Logo"
          width={160}
          height={28}
          className="h-7 w-auto object-contain brightness-110"
          priority
        />
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
              MetLife &amp; PassNFly
            </span>
          </h2>

          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed font-sans">
            From Fortune 50 enterprise core policy platforms to high-concurrency real-time travel engines, 
            engineering organizations deploy Dorvik to safeguard uptime and eliminate sprint bug fatigue.
          </p>
        </div>

        {/* Client Logos 2-Column Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0c0c12] hover:bg-[#12121c] border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(0,210,239,0.1)] hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {client.logo}
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-white/[0.06] text-cyan-300 border border-cyan-500/30">
                    {client.badge}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  {client.category}
                </div>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {client.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold">{client.highlight}</span>
                <Link
                  href="#case-studies"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group-hover:text-cyan-400"
                >
                  <span>View Case Study</span>
                  <span>&rarr;</span>
                </Link>
              </div>
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
