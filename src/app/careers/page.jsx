"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const OPEN_POSITIONS = [
  {
    id: "mle-code-intelligence",
    title: "Machine Learning Engineer (Code Intelligence & LLMs)",
    department: "AI & Research",
    location: "Remote (Global) / San Francisco / London",
    type: "Full-Time",
    experience: "Senior / Staff",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    summary:
      "Design, evaluate, and fine-tune specialized code-generation and bug-localization models (7B-70B params). You will build synthetic data pipelines to train models on AST transformations, regression test generation, and autonomous patch verification.",
    responsibilities: [
      "Curate high-quality synthetic datasets of real-world SWE bugs, stack traces, and verified patches.",
      "Fine-tune and quantize open-weights models (DeepSeek-Coder, Llama-3, Qwen-Coder) for sub-second inference.",
      "Build rigorous benchmark and eval harnesses measuring First-Pass PR Merge Rate and semantic correctness.",
      "Collaborate with Systems Engineers to deploy low-latency inference on private VPC clusters for enterprise clients.",
    ],
    requirements: [
      "3+ years of experience training/fine-tuning transformer models for code or reasoning tasks.",
      "Strong proficiency with PyTorch, vLLM, DeepSpeed, Hugging Face, and Triton.",
      "Solid understanding of Abstract Syntax Trees (ASTs), compilers, and software testing paradigms.",
      "Track record of shipping ML models into high-stakes production environments.",
    ],
  },
  {
    id: "founding-agent-engineer",
    title: "Founding AI Agent Systems Engineer",
    department: "Agent Architecture",
    location: "Remote / Hybrid (NYC or London)",
    type: "Full-Time",
    experience: "Senior / Lead",
    badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    summary:
      "Architect Dorvik's core autonomous SWE agent loop. You will engineer multi-step reasoning, tool-calling pipelines (AST parsers, test runners, git committers), and self-healing error correction mechanisms that resolve production software defects without human intervention.",
    responsibilities: [
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
  },
  {
    id: "distributed-infra-engineer",
    title: "Senior Distributed Systems & Sandbox Engineer",
    department: "Infrastructure & Security",
    location: "Remote (US / EU)",
    type: "Full-Time",
    experience: "Senior",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    summary:
      "Build high-concurrency, air-gapped sandboxing infrastructure to safely execute untrusted code patches. You will scale our microVM execution engine (Firecracker / Docker / gVisor) to handle thousands of concurrent test runs with bank-grade isolation.",
    responsibilities: [
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
  },
  {
    id: "forward-deployed-engineer",
    title: "Forward Deployed Engineer (Enterprise AI)",
    department: "Enterprise Solutions",
    location: "Hybrid (New York / London) or Remote",
    type: "Full-Time",
    experience: "Mid / Senior",
    badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    summary:
      "Embed directly with enterprise engineering leadership (Fortune 50 leaders like MetLife and high-growth travel engines like PassNFly) to deploy Dorvik's autonomous agents into their core CI/CD pipelines, monoliths, and proprietary microservices.",
    responsibilities: [
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
  },
  {
    id: "fullstack-product-engineer",
    title: "Senior Full-Stack Product Engineer (Developer Experience)",
    department: "Product Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    experience: "Mid / Senior",
    badgeColor: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    summary:
      "Build stunning, lightning-fast interfaces for developer tools. You will create interactive code review visualizers, real-time agent execution timelines, IDE integrations, and collaborative debugging workspaces using Next.js, React 19, and Tailwind CSS.",
    responsibilities: [
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
  },
];

const VALUES = [
  {
    title: "High Agency & Extreme Ownership",
    desc: "We hire builders who take ambiguous technical challenges from zero to production without waiting for committee approval.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Deep Moats Over Wrappers",
    desc: "We don't build superficial API wrappers. We train specialized models, engineer sandboxed microVMs, and solve hard compiler & AST problems.",
    icon: (
      <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Real Production Impact",
    desc: "Our agents actively safeguard uptime and patch regressions for Fortune 50 enterprises and multi-million passenger travel systems.",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Top 1% Compensation & Equity",
    desc: "We believe exceptional talent deserves exceptional upside. Generous equity packages, top-tier salaries, and unlimited hardware budgets.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [activeJob, setActiveJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    portfolioUrl: "",
    githubUrl: "",
    coverNote: "",
  });
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "submitting" | "success"

  const departments = ["All", "AI & Research", "Agent Architecture", "Infrastructure & Security", "Enterprise Solutions", "Product Engineering"];

  const filteredJobs =
    selectedDept === "All"
      ? OPEN_POSITIONS
      : OPEN_POSITIONS.filter((job) => job.department === selectedDept);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#050508] text-white pt-24 pb-20 font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-cyan-400">CAREERS &amp; ENGINEERING TALENT</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span>We Are Hiring Elite Builders</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Build the Future of{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-200 to-orange-400 bg-clip-text text-transparent">
              Autonomous Software Engineering
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            Software defects and manual maintenance cost the global economy over $1.5 Trillion annually. 
            At Dorvik, we engineer autonomous AI agents that identify, reproduce, and patch production bugs before developers are paged.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-lg bg-[#0f0f16] border border-white/10 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> 100% Remote-First
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0f0f16] border border-white/10 flex items-center gap-2">
              <span className="text-cyan-400 font-bold">✓</span> High-Agency Small Teams
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#0f0f16] border border-white/10 flex items-center gap-2">
              <span className="text-orange-400 font-bold">✓</span> Real Clients (MetLife, PassNFly)
            </span>
          </div>
        </div>

        {/* Company Culture & Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#0b0b12] border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,210,239,0.06)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-sans">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Open Positions Section Header & Filter */}
        <div id="openings" className="mb-12 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                GROWTH &amp; SCALE ROLES
              </span>
              <h2 className="text-3xl font-black text-white mt-1">
                Open Engineering Positions ({filteredJobs.length})
              </h2>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0f0f16] border border-white/10">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                    selectedDept === dept
                      ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Positions List */}
        <div className="space-y-6 mb-24">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#0c0c14] border border-white/[0.08] hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(0,210,239,0.06)] flex flex-col lg:flex-row lg:items-start justify-between gap-8"
            >
              {/* Job Details (Left) */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className={`text-xs font-mono font-bold px-3 py-0.5 rounded-full border ${job.badgeColor}`}>
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    &bull; {job.experience}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    &bull; {job.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {job.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                  <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{job.location}</span>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
                  {job.summary}
                </p>

                {/* Key Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-bold">
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400 font-sans">
                      {job.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-500 font-bold select-none">&bull;</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-2 font-bold">
                      Key Requirements
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400 font-sans">
                      {job.requirements.slice(0, 3).map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-500 font-bold select-none">&bull;</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button (Right) */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end flex-shrink-0">
                <button
                  onClick={() => {
                    setActiveJob(job);
                    setSubmitStatus("idle");
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm font-mono tracking-tight shadow-[0_0_20px_rgba(0,210,239,0.2)] hover:shadow-[0_0_30px_rgba(0,210,239,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply for Role</span>
                  <span>&rarr;</span>
                </button>

                <a
                  href={`mailto:careers@dorvik.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors text-center"
                >
                  Email Resume Directly
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Application Modal */}
        {activeJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0e0e16] border border-cyan-500/30 rounded-2xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setActiveJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white text-lg font-mono p-1"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  JOB APPLICATION
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeJob.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {activeJob.department} &bull; {activeJob.location}
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full mx-auto flex items-center justify-center text-2xl mb-4 font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Application Dispatched!
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{applicationData.name}</strong>. Our engineering leads and founders review every single application personally. We will reach out within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setActiveJob(null);
                      setSubmitStatus("idle");
                    }}
                    className="px-6 py-2.5 rounded-lg bg-cyan-500 text-black font-mono font-bold text-xs uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alan Turing"
                      value={applicationData.name}
                      onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                      className="w-full bg-[#14141f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="alan@domain.com"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                      className="w-full bg-[#14141f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1">GITHUB PROFILE</label>
                      <input
                        type="url"
                        placeholder="https://github.com/username"
                        value={applicationData.githubUrl}
                        onChange={(e) => setApplicationData({ ...applicationData, githubUrl: e.target.value })}
                        className="w-full bg-[#14141f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1">LINKEDIN / RESUME LINK *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/username"
                        value={applicationData.portfolioUrl}
                        onChange={(e) => setApplicationData({ ...applicationData, portfolioUrl: e.target.value })}
                        className="w-full bg-[#14141f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">
                      WHY DO YOU WANT TO BUILD WITH DORVIK?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the most complex bug or agent system you've built..."
                      value={applicationData.coverNote}
                      onChange={(e) => setApplicationData({ ...applicationData, coverNote: e.target.value })}
                      className="w-full bg-[#14141f] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wider uppercase transition-colors"
                    >
                      {submitStatus === "submitting" ? "Transmitting Application..." : "Submit Application →"}
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
