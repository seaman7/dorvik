"use client";

import React from "react";
import Link from "next/link";

const PILLARS = [
  {
    title: "Software & Web Development",
    tagline: "High-Performance Modern Web Applications",
    desc: "From interactive SaaS dashboards to distributed web portals, we engineer state-of-the-art web apps using Next.js, React, Node.js, and cloud-native backends.",
    badge: "WEB & SOFTWARE STUDIO",
    badgeColor: "bg-cyan-400 text-cyan-950",
    features: [
      "Custom Next.js & React 19 Frontend Architecture",
      "Scalable REST, GraphQL & WebSocket APIs",
      "Tailwind CSS, Turbopack, and High-Speed UI",
      "Cloud Deployment on AWS, GCP, Vercel & Docker",
    ],
    ctaText: "Start a Web Project",
    ctaLink: "/contact",
  },
  {
    title: "Autonomous AI Bug Fixer Agent",
    tagline: "Zero-Human-Intervention Bug Triaging & Patching",
    desc: "Connect your repo and error trackers (Sentry, GitHub Issues). Dorvik's autonomous agent analyzes runtime crashes, synthesizes unit tests, and commits verified PRs.",
    badge: "AUTONOMOUS BUG AGENT",
    badgeColor: "bg-fuchsia-400 text-fuchsia-950",
    features: [
      "Automated Stack Trace & AST Parsing",
      "Regression Test Synthesis & Verification",
      "One-Click GitHub / GitLab PR Generation",
      "Continuous Production Reliability Monitoring",
    ],
    ctaText: "Deploy Bug Fixer Agent",
    ctaLink: "/contact",
  },
];

const ACTIVITIES = [
  {
    title: "Feature Roadmaps",
    desc: "Shipping user-facing product features without getting derailed by legacy bug backlogs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 text-cyan-400" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M4 2h16v4H4V2zm2 2v0h12V4H6zm-2 6h7v4H4v-4zm2 2h3v0H6v-2zm7-2h7v4h-7v-4zm2 2h3v0h-3v-2zm-9 6h16v4H4v-4zm2 2h12v0H6v-2z" />
      </svg>
    ),
    badge: "ROADMAP",
    badgeColor: "bg-cyan-400 text-cyan-950",
  },
  {
    title: "Weekend Freedom",
    desc: "Relaxing outdoors while Dorvik patches unhandled promise rejections automatically",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 text-amber-400" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M15.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM5 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm2 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm12 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM10 9l3-3 2 2-3 3h-2z" />
      </svg>
    ),
    badge: "RECHARGE",
    badgeColor: "bg-amber-400 text-amber-950",
  },
  {
    title: "Deep Coffee & Focus",
    desc: "Enjoying coffee while clean, signed PR diffs arrive with green CI checkmarks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 text-fuchsia-400" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M19 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 18H6a1 1 0 0 1-1-1v-1h13v2zm0-4H6V4h12v12z" />
      </svg>
    ),
    badge: "FLOW STATE",
    badgeColor: "bg-fuchsia-400 text-fuchsia-950",
  },
  {
    title: "Zero Production Panic",
    desc: "Sleeping soundly knowing edge runtime memory leaks are caught before customers notice",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-9 h-9 text-purple-300" style={{ imageRendering: "pixelated" }}>
        <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    ),
    badge: "99.99% UPTIME",
    badgeColor: "bg-purple-400 text-purple-950",
  },
];

export function DorvikFeatureCallout() {
  return (
    <section id="services" className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-10 relative">
      {/* 3-Square Retro Divider */}
      <div className="w-full h-8 pattern-dot-three mb-14"></div>

      {/* Main Dual Pillar Showcase */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-block px-3 py-1 bg-purple-900 border border-purple-600 text-xs font-mono text-cyan-300 font-bold mb-3">
          WHAT DORVIK DOES
        </div>
        <h2 className="text-white text-2xl md:text-4xl font-black mb-3">
          Software & Web Development meets Autonomous AI Debugging
        </h2>
        <p className="text-purple-200 text-sm md:text-base font-mono">
          We combine cutting-edge bespoke web engineering with autonomous agents that debug your stack 24/7.
        </p>
      </div>

      {/* Two Flagship Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {PILLARS.map((pillar, idx) => (
          <div
            key={idx}
            className="pattern-square-light p-3 pb-4 rounded-pixel-lg bg-[#22074f] border-2 border-purple-800 hover:border-cyan-400 transition-colors flex flex-col justify-between"
          >
            <div className="p-6 md:p-8 bg-[#130825] border-2 border-purple-800 rounded-pixel-sm h-full flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-black px-2.5 py-1 ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                  <span className="text-xs text-purple-400">ENGINEERED BY DORVIK</span>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-black mb-2">
                  {pillar.title}
                </h3>
                <p className="text-cyan-300 text-xs font-bold mb-4">
                  {pillar.tagline}
                </p>
                <p className="text-purple-200 text-xs md:text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 mb-8 border-t border-purple-800/60 pt-4">
                  {pillar.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-purple-200">
                      <span className="text-cyan-400 font-bold shrink-0">■</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={pillar.ctaLink}
                className="w-full py-3 px-4 bg-[#642cc2] hover:bg-[#784fcf] text-white font-black text-xs text-center border-b-4 border-purple-950 transition-colors shadow-md"
              >
                {pillar.ctaText} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Strip: "More Time For..." */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-white text-lg md:text-2xl font-black mb-2">
          More time for building new features, and everything else.
        </p>
        <p className="text-purple-300 text-xs md:text-sm font-mono">
          Let Dorvik take care of subtle web bugs, race conditions, and boilerplate migrations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTIVITIES.map((act, i) => (
          <div
            key={i}
            className="pattern-square-light p-2.5 pb-3 rounded-pixel-sm bg-[#22074f] border-2 border-purple-800 hover:border-cyan-400 transition-colors group"
          >
            <div className="p-5 bg-[#130825] border-2 border-purple-900 rounded-pixel-sm h-full flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-900/80 border border-purple-700 group-hover:border-cyan-400 transition-colors">
                    {act.icon}
                  </div>
                  <span className={`text-[10px] font-black px-2 py-0.5 ${act.badgeColor}`}>
                    {act.badge}
                  </span>
                </div>

                <h4 className="text-white font-black text-sm mb-2 group-hover:text-cyan-300 transition-colors">
                  {act.title}
                </h4>
                <p className="text-purple-300 text-xs leading-relaxed">
                  {act.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-800/40 text-[10px] text-purple-400 flex items-center justify-between">
                <span>DORVIK AGENT</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
