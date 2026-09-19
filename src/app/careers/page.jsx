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
    level: "Senior / Staff",
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
    level: "Senior / Lead",
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
    level: "Senior",
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
    level: "Mid / Senior",
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
    level: "Mid / Senior",
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

const HIGHLIGHTS = [
  {
    title: "100% Remote in Bangladesh",
    desc: "Work from anywhere in Bangladesh with flexible hours and asynchronous engineering culture.",
  },
  {
    title: "Deep Technical Focus",
    desc: "Train specialized models, parse abstract syntax trees, and sandbox microVMs. Real systems engineering.",
  },
  {
    title: "Global Production Impact",
    desc: "Your code runs on mission-critical production systems for leaders like MetLife and PassNFly.",
  },
  {
    title: "Competitive Compensation",
    desc: "Market-leading compensation, equity ownership, GPU cluster access, and home office stipends.",
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
    <div className="min-h-screen bg-[#08080A] text-neutral-200 pt-24 pb-28 font-sans antialiased">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-white">Careers</span>
        </div>

        {/* Hero Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>5 Open Roles &bull; Remote (Bangladesh Based)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Careers at Dorvik
          </h1>

          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            We are a software engineering and AI systems studio based in Bangladesh. We build high-performance web platforms and autonomous code reliability agents for global enterprise teams like MetLife and PassNFly.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-400">
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              100% Remote across Bangladesh
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              High-Agency Small Team
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              Direct Engineering Ownership
            </span>
          </div>
        </div>

        {/* 4 Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-4 transition-colors hover:border-neutral-700"
            >
              <h3 className="text-sm font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <svg
                className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2"
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
                placeholder="Search roles or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-black border border-neutral-800 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
              />
            </div>

            {/* Total count badge */}
            <div className="text-xs text-neutral-400 font-mono">
              <span>{filteredJobs.length} open position{filteredJobs.length === 1 ? "" : "s"}</span>
            </div>
          </div>

          {/* Department Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-neutral-800/60">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  selectedTeam === team
                    ? "bg-white text-black font-semibold"
                    : "bg-black text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                {team}
              </button>
            ))}
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-3">
          {filteredJobs.length === 0 ? (
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-10 text-center">
              <p className="text-neutral-400 text-sm">
                No matching open positions found.
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div
                  key={job.id}
                  className={`bg-neutral-900/50 border transition-colors rounded-xl overflow-hidden ${
                    isExpanded ? "border-neutral-700 bg-neutral-900/80" : "border-neutral-800/80 hover:border-neutral-700"
                  }`}
                >
                  {/* Job Header Row */}
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {job.team}
                        </span>
                        <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                          <span>{job.location}</span>
                        </span>
                        <span className="text-xs text-neutral-500">
                          &bull; {job.level}
                        </span>
                        <span className="text-xs text-neutral-500">
                          &bull; {job.type}
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold text-white tracking-tight">
                        {job.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2.5 self-start sm:self-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyingJob(job);
                          setSubmitStatus("idle");
                        }}
                        className="px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 font-medium text-xs transition-colors"
                      >
                        Apply
                      </button>

                      <button
                        className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors"
                        aria-label="Toggle details"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
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
                    <div className="px-5 pb-6 pt-2 border-t border-neutral-800/80 bg-black/40">
                      {/* Overview */}
                      <div className="mb-5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                          About the Role
                        </h4>
                        <p className="text-sm text-neutral-300 leading-relaxed">
                          {job.overview}
                        </p>
                      </div>

                      {/* Responsibilities & Requirements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-neutral-800/60 mb-5">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2.5">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2 text-xs text-neutral-300">
                            {job.whatYouWillDo.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-neutral-500 font-bold select-none">&bull;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-2.5">
                            Qualifications
                          </h4>
                          <ul className="space-y-2 text-xs text-neutral-300">
                            {job.requirements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-neutral-500 font-bold select-none">&bull;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Compensation Bar & Direct Apply Button */}
                      <div className="pt-3 border-t border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="text-xs text-neutral-400">
                          <span className="text-neutral-300 font-medium font-mono">Offer: </span>
                          <span>{job.compensation}</span>
                        </div>

                        <button
                          onClick={() => {
                            setApplyingJob(job);
                            setSubmitStatus("idle");
                          }}
                          className="px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 font-medium text-xs transition-colors self-start sm:self-auto"
                        >
                          Submit Application &rarr;
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* General Application Note */}
        <div className="mt-12 bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <h3 className="text-base font-semibold text-white mb-1">
            Don&apos;t see the exact role?
          </h3>
          <p className="text-neutral-400 text-xs mb-4 leading-relaxed">
            We are always happy to connect with exceptional engineers in Bangladesh. You can email your resume and GitHub profile directly to our team.
          </p>
          <a
            href="mailto:careers@dorvik.com?subject=General Engineering Application - Bangladesh"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
          >
            <span>Email careers@dorvik.com</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Clean Application Modal */}
        {applyingJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#0D0D11] border border-neutral-800 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={() => setApplyingJob(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white text-lg p-1 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="mb-5">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Apply for Position
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {applyingJob.title}
                </h3>
                <div className="text-xs text-emerald-400 font-mono mt-1">
                  100% Remote (Bangladesh Based) &bull; Full-Time
                </div>
              </div>

              {submitStatus === "success" ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full mx-auto flex items-center justify-center text-xl mb-3 font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Application Received
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed max-w-xs mx-auto mb-5">
                    Thank you, {formData.fullName}. We review all applications directly and will reply within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setApplyingJob(null);
                      setSubmitStatus("idle");
                    }}
                    className="px-5 py-2 rounded-lg bg-white text-black font-medium text-xs"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs font-sans">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tanvir@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        GitHub Profile
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={formData.githubUrl}
                        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-300 font-medium mb-1">
                        LinkedIn / CV Link *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/..."
                        value={formData.portfolioOrLinkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, portfolioOrLinkedin: e.target.value })
                        }
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Brief Note / Highlights
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the most challenging software problem or project you have built..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="w-full py-2.5 rounded-lg bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors"
                    >
                      {submitStatus === "submitting"
                        ? "Submitting Application..."
                        : "Submit Application"}
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
