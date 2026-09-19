"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CASE_STUDIES = [
  {
    id: "metlife",
    client: "MetLife",
    logoUrl: "/assets/clients/metlife-white.svg",
    tagline: "Enterprise Policy Modernization & Regression-Free Releases",
    industry: "Enterprise InsurTech & FinTech",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    deployment: "Air-Gapped Private Cloud (AWS VPC)",
    metrics: [
      { value: "74%", label: "Triage Acceleration", note: "Reduced bug triage from 3 days to under 4 hours" },
      { value: "0", label: "Production Regressions", note: "Zero critical policy calculation regressions in Q3/Q4" },
      { value: "18 hrs", label: "Saved per Engineer / Mo", note: "Reclaimed bandwidth dedicated to new feature velocity" },
    ],
    challenge:
      "MetLife operates mission-critical policy calculation services serving millions of policyholders worldwide. With deeply nested dependency graphs and complex actuarial business logic, small schema changes frequently caused brittle regression bugs that delayed bi-weekly release cycles by up to 72 hours.",
    solution:
      "Dorvik deployed an autonomous code analysis and regression-testing agent within MetLife's private VPC. When an exception or failing test is detected, Dorvik analyzes the AST diff, synthesizes reproduction test cases in an isolated Docker sandbox, and creates a verified, ready-to-merge GitHub Pull Request with zero manual developer intervention.",
    results:
      "Regression triage time dropped by 74%, code review cycles accelerated from days to minutes, and the actuarial engineering team successfully met 100% of quarterly SLA commitments without emergency hotfixes.",
    testimonial: {
      quote:
        "Dorvik gave our engineering organization weeks of bandwidth back. The autonomous test synthesis and bug-fixing agent caught actuarial edge cases before our staging test suites even finished running.",
      author: "Senior Director of Enterprise Engineering",
      role: "Global Core Systems & Actuarial Platform",
      company: "MetLife Global Technology",
    },
    codeSnippet: {
      title: "actuarial_policy_dispatcher.ts",
      bugDescription: "Unhandled floating-point rounding exception in legacy premium tier tiering calculator",
      bugCode: `// ❌ BEFORE: Runtime NaN crash when tier multiplier is null or uninitialized
function computePolicySurplus(premium: number, tierIndex?: number): number {
  const multiplier = ACTUARIAL_TIERS[tierIndex!].rate; // CRASH: Cannot read properties of undefined
  return Math.round((premium * multiplier + Number.EPSILON) * 100) / 100;
}`,
      fixedCode: `// ✅ DORVIK PATCH: Defensive null-coalescing, fallback tiering, & epsilon precision
function computePolicySurplus(premium: number, tierIndex?: number): number {
  const safeTier = (tierIndex !== undefined && ACTUARIAL_TIERS[tierIndex]) 
    ? ACTUARIAL_TIERS[tierIndex] 
    : ACTUARIAL_TIERS[DEFAULT_TIER_INDEX];

  const multiplier = safeTier.rate ?? 1.0;
  return Number((premium * multiplier).toFixed(2));
}

// 🧪 DORVIK SYNTHETIC TEST: Verified against 2,400 historic actuarial vectors
describe("computePolicySurplus (Synthetic)", () => {
  it("safely handles undefined tierIndex without throwing", () => {
    expect(computePolicySurplus(1250)).toBe(1250);
  });
});`,
      logs: [
        "[Dorvik-Agent] Telemetry caught TypeError in PolicyDispatcher#312",
        "[Dorvik-Agent] Isolated AST branch: ACTUARIAL_TIERS[tierIndex!]",
        "[Dorvik-Agent] Generated synthetic reproduction vector: tierIndex=undefined",
        "[Dorvik-Agent] Synthesized defensive patch + 2 regression unit tests",
        "[Dorvik-Agent] Executed sandbox test suite: 42/42 PASSED in 1.4s",
        "[Dorvik-Agent] Created Pull Request #1409 [VERIFIED CLEAN]",
      ],
    },
  },
  {
    id: "passnfly",
    client: "PassNFly",
    logoUrl: "/assets/clients/passnfly.png",
    tagline: "Resilient Microservices for 2.5M+ Real-Time Flight Check-Ins",
    industry: "High-Throughput Global TravelTech",
    badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    deployment: "Multi-Region Distributed Mesh (GCP & Redis)",
    metrics: [
      { value: "99.99%", label: "Check-in Availability", note: "Maintained continuous uptime across 200+ airline APIs" },
      { value: "10x", label: "Faster MTTR", note: "Production latency spikes mitigated in under 12 minutes" },
      { value: "2.5M+", label: "Check-Ins Protected", note: "Zero dropped flight boarding passes during peak holiday season" },
    ],
    challenge:
      "PassNFly's smart check-in engine connects directly to more than 200 airline reservation systems across the globe. Third-party airline APIs frequently updated their response schemas without notice or experienced rate-limiting throttling, causing unhandled promise rejections and cascading Redis queue bottlenecks during high-traffic morning flight waves.",
    solution:
      "Dorvik integrated directly into PassNFly's distributed event stream and Sentry error pipeline. The agent autonomously identified schema payload drift, generated resilient fallback deserializers, and patched microservice retry logic with dynamic exponential backoff and circuit-breaker guards.",
    results:
      "Passenger check-in failure rate dropped to near zero, airline schema deviations are now automatically isolated and patched before customer impact, and the on-call pager alert volume decreased by 85%.",
    testimonial: {
      quote:
        "In global travel tech, a 5-minute outage at 6 AM can ground thousands of passenger itineraries. Dorvik's autonomous agent detects and patches API schema drift before our morning peak kicks in.",
      author: "VP of Product Engineering & Infrastructure",
      role: "Platform Architecture & Airline Integrations",
      company: "PassNFly Smart Check-In",
    },
    codeSnippet: {
      title: "airline_checkin_worker.js",
      bugDescription: "Cascading socket timeout when airline GDS returns non-standard seat map payload",
      bugCode: `// ❌ BEFORE: Unhandled JSON parse drift & missing circuit breaker on GDS timeout
async function executeBoardingPassSync(bookingRef, airlineCode) {
  const res = await fetch(\`https://api.airline.com/\${airlineCode}/checkin\`, {
    body: JSON.stringify({ pnr: bookingRef })
  });
  const data = await res.json(); // CRASH: Unexpected token '<' in JSON (HTML 502 gateway error)
  return data.seatAssignment.boardingBarcode;
}`,
      fixedCode: `// ✅ DORVIK PATCH: Circuit breaker fallback, XML/HTML check, & asynchronous retry queue
async function executeBoardingPassSync(bookingRef, airlineCode) {
  return circuitBreaker.execute(async () => {
    const res = await resilientFetch(\`https://api.airline.com/\${airlineCode}/checkin\`, {
      method: "POST",
      body: JSON.stringify({ pnr: bookingRef }),
      timeoutMs: 4500,
      retryBackoff: "exponential"
    });

    const parsed = await safeParseAirlinePayload(res);
    if (!parsed?.seatAssignment?.boardingBarcode) {
      await enqueueAsyncRecheckQueue({ bookingRef, airlineCode, delaySec: 60 });
      return { status: "QUEUED_FOR_RETRY", ref: bookingRef };
    }
    return parsed.seatAssignment.boardingBarcode;
  });
}`,
      logs: [
        "[Dorvik-Agent] Anomaly Alert: 502 Gateway surge from SkyConnect API",
        "[Dorvik-Agent] Stack trace pinpointed unhandled HTML response parsing",
        "[Dorvik-Agent] Applied circuit breaker + resilientFetch wrapper",
        "[Dorvik-Agent] Synthesized test case with mocked 502 gateway payload",
        "[Dorvik-Agent] Test run: 18/18 edge-case scenarios passed",
        "[Dorvik-Agent] Deployed canary patch via GitHub Actions PR #842",
      ],
    },
  },
];

export function DorvikCaseStudies() {
  const [activeTab, setActiveTab] = useState("metlife");
  const [codeMode, setCodeMode] = useState("fixed"); // "fixed" | "bug" | "logs"

  const currentStudy = CASE_STUDIES.find((s) => s.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="relative w-full py-24 bg-[#08080c] border-b border-white/[0.08] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Enterprise Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Real Impact for{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                MetLife & PassNFly
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-base leading-relaxed">
              Explore how global enterprise organizations deploy Dorvik&apos;s autonomous engineering agent to eliminate production outages and protect millions of user transactions.
            </p>
          </div>

          {/* Interactive Client Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#101016] border border-white/10 self-start md:self-auto">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => {
                  setActiveTab(study.id);
                  setCodeMode("fixed");
                }}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold tracking-tight transition-all duration-200 flex items-center gap-2.5 ${
                  activeTab === study.id
                    ? "bg-[#181824] text-white border border-cyan-500/40 shadow-[0_0_20px_rgba(0,210,239,0.15)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === study.id ? "bg-cyan-400 animate-pulse" : "bg-slate-600"}`} />
                <span>{study.client}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Feature Container */}
        <div className="bg-[#0b0b10] border border-white/[0.08] rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Top Bar with Badges & Official Logo */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3.5">
              <div className="h-8 px-3 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Image
                  src={currentStudy.logoUrl}
                  alt={`${currentStudy.client} Official Logo`}
                  width={currentStudy.id === "metlife" ? 115 : 135}
                  height={24}
                  className="h-5 w-auto object-contain"
                />
              </div>
              <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${currentStudy.badgeColor}`}>
                {currentStudy.industry}
              </span>
              <span className="text-xs font-mono text-slate-400 hidden sm:flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Deployment: {currentStudy.deployment}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>OFFICIAL CLIENT ENGAGEMENT</span>
            </div>
          </div>

          {/* Headline & 3 Key Stats */}
          <div className="py-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">
              {currentStudy.tagline}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {currentStudy.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#12121a] border border-white/[0.08] hover:border-cyan-500/30 rounded-xl p-5 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-mono font-black text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                    {metric.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive Grid: Story (Left) + Interactive Code & Logs (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-white/[0.08]">
            {/* Story & Technical Breakdown (Left 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-orange-400 flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span>01. The Engineering Challenge</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans bg-[#121218]/60 p-4 rounded-xl border border-white/[0.04]">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>02. Dorvik Autonomous Intervention</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans bg-[#121218]/60 p-4 rounded-xl border border-white/[0.04]">
                    {currentStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>03. Business & Developer Impact</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans bg-[#121218]/60 p-4 rounded-xl border border-white/[0.04]">
                    {currentStudy.results}
                  </p>
                </div>
              </div>

              {/* Verified Executive Testimonial */}
              <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-[#13131e] to-[#0d0d14] border border-cyan-500/20 relative">
                <svg className="w-8 h-8 text-cyan-500/20 absolute top-4 right-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-slate-200 italic font-sans leading-relaxed mb-4">
                  &ldquo;{currentStudy.testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 px-2.5 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={currentStudy.logoUrl}
                      alt={`${currentStudy.client} Official Logo`}
                      width={90}
                      height={20}
                      className="h-4 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {currentStudy.testimonial.author}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {currentStudy.testimonial.role} &bull; {currentStudy.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Interactive Code & Patch Inspector (Right 6 Cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-[#050508] rounded-xl border border-white/[0.1] overflow-hidden flex flex-col h-full shadow-xl">
                {/* Editor Header & Tabs */}
                <div className="bg-[#0d0d12] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-300">
                      {currentStudy.codeSnippet.title}
                    </span>
                  </div>

                  {/* Toggle Modes */}
                  <div className="flex items-center gap-1 bg-[#161620] p-1 rounded-lg border border-white/5 text-xs font-mono">
                    <button
                      onClick={() => setCodeMode("fixed")}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        codeMode === "fixed" ? "bg-cyan-500/20 text-cyan-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Dorvik Patch
                    </button>
                    <button
                      onClick={() => setCodeMode("bug")}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        codeMode === "bug" ? "bg-red-500/20 text-red-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Original Bug
                    </button>
                    <button
                      onClick={() => setCodeMode("logs")}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        codeMode === "logs" ? "bg-purple-500/20 text-purple-300 font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Agent Logs
                    </button>
                  </div>
                </div>

                {/* Bug Context Bar */}
                <div className="bg-[#09090f] px-4 py-2 border-b border-white/[0.06] text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span className="truncate pr-2">
                    <span className="text-amber-400 font-bold">DETECTED: </span>
                    {currentStudy.codeSnippet.bugDescription}
                  </span>
                  <span className="text-emerald-400 flex-shrink-0">● CI PASSED</span>
                </div>

                {/* Code / Logs Viewport */}
                <div className="p-4 flex-1 font-mono text-xs overflow-x-auto leading-relaxed">
                  {codeMode === "fixed" && (
                    <pre className="text-emerald-300 whitespace-pre">
                      <code>{currentStudy.codeSnippet.fixedCode}</code>
                    </pre>
                  )}

                  {codeMode === "bug" && (
                    <pre className="text-red-300 whitespace-pre">
                      <code>{currentStudy.codeSnippet.bugCode}</code>
                    </pre>
                  )}

                  {codeMode === "logs" && (
                    <div className="space-y-1.5 py-1">
                      {currentStudy.codeSnippet.logs.map((log, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-slate-600 select-none">&gt;</span>
                          <span className={i === currentStudy.codeSnippet.logs.length - 1 ? "text-cyan-400 font-bold" : "text-slate-400"}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Verification Footer */}
                <div className="bg-[#0b0b12] p-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-white">Pull Request Auto-Created & Tested</span>
                  </div>
                  <Link
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Request Similar Setup</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
