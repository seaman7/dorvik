"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const OPEN_POSITIONS = [
  {
    id: "mle-code-intelligence",
    title: "Machine Learning Engineer (Code Intelligence & LLMs)",
    team: "AI & Research",
    location: "Remote (Bangladesh Based)",
    type: "Full-Time",
    experience: "Senior / Staff",
    badge: "AI & ML",
    color: "cyan",
    overview:
      "Join as a foundational Machine Learning Engineer designing and fine-tuning specialized code-generation, AST diffing, and bug-localization models. You will build synthetic data pipelines to train models on real-world error traces, regression test synthesis, and autonomous patch verification.",
    whatYouWillDo: [
      "Curate high-signal synthetic datasets of real-world SWE bugs, stack traces, and verified patches.",
      "Fine-tune and quantize open-weights models (DeepSeek-Coder, Llama-3, Qwen-Coder) for sub-second inference.",
      "Build rigorous benchmark and eval harnesses measuring First-Pass PR Merge Rate and semantic correctness.",
      "Collaborate with Systems Engineers to deploy low-latency inference on private VPC clusters for enterprise clients.",
    ],
    requirements: [
      "3+ years of experience training or fine-tuning transformer models for code or reasoning tasks.",
      "Strong proficiency with PyTorch, vLLM, DeepSpeed, Hugging Face, and Triton.",
      "Solid understanding of Abstract Syntax Trees (ASTs), compilers, and software testing paradigms.",
      "Track record of shipping ML models into high-stakes production environments.",
    ],
    compensation: "Competitive tech market salary (BDT / USD pegged), GPU cluster access, 100% remote flexibility.",
  },
  {
    id: "founding-agent-engineer",
    title: "Founding AI Agent Systems Engineer",
    team: "Agent Architecture",
    location: "Remote (Bangladesh Based)",
    type: "Full-Time",
    experience: "Senior / Lead",
    badge: "AGENT CORE",
    color: "orange",
    overview:
      "Architect Dorvik's core autonomous SWE agent loop. You will engineer multi-step reasoning, tool-calling pipelines (AST parsers, test runners, git committers), and self-healing error correction mechanisms that resolve production software defects without human intervention.",
    whatYouWillDo: [
      "Develop recursive plan-and-execute agent architectures for automated code repair.",
      "Implement deterministic AST inspection and code-modification tools across TypeScript, Python, and Java.",
      "Engineer self-reflection loops that analyze failing unit tests and adjust patches iteratively.",
      "Optimize agent context window management, memory caching, and retrieval-augmented code indexing.",
    ],
    requirements: [
      "Deep expertise building agentic systems, tool-calling architectures, or developer tooling.",
      "Mastery of TypeScript, Node.js, Python, and Git internals.",
      "Experience with program analysis, static analyzers (Tree-sitter, ESLint, Babel), and test frameworks.",
      "High autonomy and a builder mindset obsessed with eliminating repetitive developer toil.",
    ],
    compensation: "Generous equity package, top-tier compensation, flexible hours, 100% remote flexibility.",
  },
  {
    id: "distributed-infra-engineer",
    title: "Senior Distributed Systems & Sandbox Engineer",
    team: "Infrastructure & Security",
    location: "Remote (Bangladesh Based)",
    type: "Full-Time",
    experience: "Senior",
    badge: "INFRASTRUCTURE",
    color: "emerald",
    overview:
      "Build high-concurrency, air-gapped sandboxing infrastructure to safely execute untrusted code patches. You will scale our microVM execution engine (Firecracker / Docker / gVisor) to handle thousands of concurrent test runs with bank-grade isolation.",
    whatYouWillDo: [
      "Engineer ephemeral, sub-100ms microVM execution environments for running untrusted test suites.",
      "Scale real-time telemetry pipelines processing millions of error events per day from clients like PassNFly.",
      "Implement enterprise VPC deployment templates (Terraform, Helm) for air-gapped Fortune 50 clients like MetLife.",
      "Maintain 99.99% infrastructure uptime with zero cross-tenant data leakage.",
    ],
    requirements: [
      "4+ years building high-throughput distributed systems in Go, Rust, or modern C++.",
      "Hands-on expertise with Linux container internals (cgroups, namespaces, seccomp), Docker, and Kubernetes.",
      "Experience with Firecracker microVMs, gVisor, or WebAssembly sandboxing is a huge plus.",
      "Strong understanding of VPC networking, IAM security, and SOC 2 Type II compliance.",
    ],
    compensation: "Top compensation, cloud infrastructure budget, home setup allowance, 100% remote.",
  },
  {
    id: "forward-deployed-engineer",
    title: "Forward Deployed Engineer (Enterprise AI)",
    team: "Enterprise Solutions",
    location: "Remote (Bangladesh Based)",
    type: "Full-Time",
    experience: "Mid / Senior",
    badge: "ENTERPRISE",
    color: "purple",
    overview:
      "Embed directly with enterprise engineering leadership (Fortune 50 leaders like MetLife and high-growth travel engines like PassNFly) to deploy Dorvik's autonomous agents into their core CI/CD pipelines, monoliths, and proprietary microservices.",
    whatYouWillDo: [
      "Lead technical discovery and architecture design for complex enterprise customer onboarding.",
      "Custom-tune Dorvik agents to navigate proprietary monorepos, internal frameworks, and custom CI pipelines.",
      "Act as the direct bridge between enterprise customer feedback and our core ML/Agent research roadmap.",
      "Demonstrate measurable ROI (MTTR reduction, bug resolution velocity) to VPs and CTOs.",
    ],
    requirements: [
      "Strong software engineering background across full-stack and backend architectures.",
      "Exceptional technical communication and client-facing stakeholder management skills.",
      "Experience navigating large enterprise codebases (Java/Spring, TypeScript, Go, Python).",
      "Comfort operating in high-stakes production environments where reliability is paramount.",
    ],
    compensation: "High visibility role, performance bonuses, client impact, 100% remote flexibility.",
  },
  {
    id: "fullstack-product-engineer",
    title: "Senior Full-Stack Product Engineer (Developer Tools)",
    team: "Product Engineering",
    location: "Remote (Bangladesh Based)",
    type: "Full-Time",
    experience: "Mid / Senior",
    badge: "DEV TOOLS",
    color: "sky",
    overview:
      "Build stunning, lightning-fast interfaces for developer tools. You will create interactive code review visualizers, real-time agent execution timelines, IDE integrations, and collaborative debugging workspaces using Next.js, React 19, and Tailwind CSS.",
    whatYouWillDo: [
      "Craft high-performance, aesthetically exceptional web interfaces for our agent cockpit and analytics.",
      "Build real-time streaming UI showing AST diffs, terminal execution logs, and synthetic test outputs.",
      "Develop browser and IDE extensions (VS Code, JetBrains) connecting developers to Dorvik agents.",
      "Optimize frontend bundle performance, sub-50ms page transitions, and keyboard-first developer UX.",
    ],
    requirements: [
      "3+ years building modern, polished web applications with React, Next.js, and TypeScript.",
      "Obsession with craft, micro-interactions, dark-mode aesthetics, and developer ergonomics.",
      "Experience with Monaco Editor, CodeMirror, WebSockets, and real-time streaming data.",
      "Strong visual sense and ability to design intuitive workflows for complex technical products.",
    ],
    compensation: "Top-tier developer tool allowance, modern tech stack, latest hardware, 100% remote.",
  },
];

const VALUES = [
  {
    title: "100% Remote in Bangladesh",
    desc: "Work from anywhere in Bangladesh with high flexibility and asynchronous engineering respect.",
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Real AI & Deep Moats",
    desc: "Train specialized models, parse syntax trees, and sandbox microVMs—no shallow API wrappers.",
    icon: (
      <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Global Enterprise Scale",
    desc: "Your code runs on mission-critical production systems for leaders like MetLife and PassNFly.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Top 1% Compensation",
    desc: "Competitive tech market salary, performance bonuses, GPU compute credits, and generous equity.",
    icon: (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState(OPEN_POSITIONS[0].id);
  const [applyingJob, setApplyingJob] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioOrLinkedin: "",
    githubUrl: "",
    note: "",
  });
  const [submitStatus, setSubmitStatus] = useState("idle");

  const teams = [
    "All",
    "AI & Research",
    "Agent Architecture",
    "Infrastructure & Security",
    "Enterprise Solutions",
    "Product Engineering",
  ];

  const filteredJobs = OPEN_POSITIONS.filter((job) => {
    const matchesTeam = selectedTeam === "All" || job.team === selectedTeam;
    const matchesQuery =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesQuery;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
    }, 1200);
  };

  return (
    <div className="font-sans-modern min-h-screen bg-[#08080C] text-slate-100 pt-28 pb-32">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-cyan-500/10 via-purple-600/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            HOME
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-cyan-400 font-semibold">CAREERS</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12121e] border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 tracking-wide shadow-[0_0_20px_rgba(0,210,239,0.12)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>WE ARE HIRING &bull; 100% REMOTE (BANGLADESH BASED)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Build the Next Frontier of{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-orange-400 bg-clip-text text-transparent">
              Autonomous Software
            </span>
          </h1>

          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We are engineering autonomous AI systems that detect, reproduce, and patch production bugs before developers are paged. Work remotely from anywhere in Bangladesh on software trusted by global leaders like MetLife and PassNFly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-300">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#141420] border border-white/10 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> 100% Remote across Bangladesh
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#141420] border border-white/10 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">✓</span> Real Clients (MetLife, PassNFly)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#141420] border border-white/10 flex items-center gap-2">
              <span className="text-orange-400 font-bold">✓</span> Top-Tier Compensation
            </span>
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f18] border border-white/[0.08] hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,210,239,0.08)]"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3.5">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {val.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Role Search & Filter Bar */}
        <div className="bg-[#11111a] border border-white/[0.1] rounded-2xl p-5 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search by role title, skill, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#171724] border border-white/15 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans"
              />
            </div>

            {/* Position count */}
            <div className="text-xs font-mono text-slate-300 flex items-center gap-2 self-start md:self-auto">
              <span>Open Roles:</span>
              <span className="text-white font-bold bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                {filteredJobs.length} Positions Available
              </span>
            </div>
          </div>

          {/* Department Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/[0.08]">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedTeam === team
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,210,239,0.3)]"
                    : "bg-[#171724] text-slate-300 hover:text-white hover:bg-[#1e1e30] border border-white/10"
                }`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="bg-[#11111a] border border-white/10 rounded-2xl p-12 text-center">
              <p className="text-slate-300 text-base">
                No matching open positions found. Try clearing your search query.
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  key={job.id}
                  className={`bg-[#101018] border transition-all duration-200 rounded-2xl overflow-hidden shadow-xl ${
                    isExpanded
                      ? "border-cyan-500/50 shadow-[0_4px_30px_rgba(0,210,239,0.1)]"
                      : "border-white/[0.1] hover:border-white/20"
                  }`}
                >
                  {/* Job Header Row (Clickable Accordion) */}
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none bg-[#12121c]/90 hover:bg-[#161624] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {job.badge}
                        </span>
                        <span className="text-xs font-mono text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1.5 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                          <span>{job.location}</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          &bull; {job.experience}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          &bull; {job.type}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {job.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyingJob(job);
                          setSubmitStatus("idle");
                        }}
                        className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono tracking-wide transition-all shadow-[0_0_15px_rgba(0,210,239,0.25)]"
                      >
                        Apply Now
                      </button>

                      <button
                        className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Toggle details"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-cyan-400" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Expanded In-Depth Details */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-5 border-t border-white/[0.08] bg-[#0c0c14]">
                      {/* About */}
                      <div className="mb-6">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                          Role Overview
                        </h4>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {job.overview}
                        </p>
                      </div>

                      {/* Responsibilities & Requirements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-white/[0.08] mb-6">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>What You Will Build &amp; Ship</span>
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                            {job.whatYouWillDo.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <span className="text-cyan-400 font-bold select-none text-base leading-none mt-0.5">
                                  &bull;
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-400" />
                            <span>What We Look For</span>
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                            {job.requirements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <span className="text-orange-400 font-bold select-none text-base leading-none mt-0.5">
                                  &bull;
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Compensation Bar & Direct Apply Button */}
                      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141422]/70 p-4 rounded-xl border border-white/[0.06]">
                        <div className="text-xs sm:text-sm text-slate-300">
                          <span className="text-cyan-400 font-mono font-bold">COMPENSATION &amp; PERKS: </span>
                          <span>{job.compensation}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setApplyingJob(job);
                              setSubmitStatus("idle");
                            }}
                            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs font-mono uppercase tracking-wider shadow-[0_0_20px_rgba(0,210,239,0.3)] transition-all"
                          >
                            Apply for this Position &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* General Application Banner */}
        <div className="mt-16 bg-[#11111a] border border-white/[0.1] rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-2">
            Don&apos;t see the exact title you&apos;re looking for?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            We are always scouting for top-tier software engineers, AI researchers, and compiler builders across Bangladesh. Send your GitHub and CV directly to our team.
          </p>
          <a
            href="mailto:careers@dorvik.com?subject=General Engineering Application - Bangladesh"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors"
          >
            <span>Email careers@dorvik.com directly</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Clean Application Modal with High Contrast */}
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-[#10101a] border border-cyan-500/40 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[92vh]">
              {/* Close Button */}
              <button
                onClick={() => setApplyingJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white text-xl font-mono p-1 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
                  DORVIK ENGINEERING TALENT APPLICATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {applyingJob.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>100% Remote (Bangladesh Based) &bull; Full-Time</span>
                </div>
              </div>

              {submitStatus === "success" ? (
                <div className="py-10 text-center">
                  <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full mx-auto flex items-center justify-center text-2xl mb-4 font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Application Successfully Dispatched!
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our engineering leads will review your GitHub and portfolio directly and get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setApplyingJob(null);
                      setSubmitStatus("idle");
                    }}
                    className="px-6 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block text-slate-200 font-bold mb-1 font-mono">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#181826] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-bold mb-1 font-mono">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tanvir@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181826] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-bold mb-1 font-mono">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#181826] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-200 font-bold mb-1 font-mono">
                        GITHUB PROFILE
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={formData.githubUrl}
                        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                        className="w-full bg-[#181826] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-200 font-bold mb-1 font-mono">
                        LINKEDIN / RESUME LINK *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/..."
                        value={formData.portfolioOrLinkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, portfolioOrLinkedin: e.target.value })
                        }
                        className="w-full bg-[#181826] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-200 font-bold mb-1 font-mono">
                      HIGHLIGHT (COMPLEX BUGS OR AGENTS BUILT)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about the most complex software problem, bug, or agent you have built..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-[#181826] border border-white/20 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wider uppercase font-mono transition-colors shadow-[0_0_20px_rgba(0,210,239,0.3)]"
                    >
                      {submitStatus === "submitting"
                        ? "Transmitting Application..."
                        : "Submit Application →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
