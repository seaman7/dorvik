"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "ai-bug-fixer";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    timeline: "immediate",
    message: "",
    requestNda: true,
  });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const s = searchParams.get("service");
    if (s) {
      setFormData((prev) => ({ ...prev, service: s }));
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("transmitting");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <div className="bg-[#121218] border border-neutral-800 rounded-xl p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800/80">
        <div>
          <h2 className="text-white text-lg font-bold">Project Specification &amp; Dispatch</h2>
          <p className="text-neutral-400 text-xs mt-0.5">
            Directly transmitted to our engineering triage leads.
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          SLA: &lt; 2 Hours
        </span>
      </div>

      {status === "success" ? (
        <div className="py-12 px-6 bg-[#181820] border border-emerald-500/30 rounded-lg text-center">
          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full mx-auto flex items-center justify-center text-xl font-bold mb-4">
            ✓
          </div>
          <h3 className="text-white text-xl font-bold mb-2">Transmission Received</h3>
          <p className="text-neutral-300 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our engineering leads have logged your inquiry for{" "}
            <strong className="text-emerald-400 capitalize">{formData.service.replace(/-/g, " ")}</strong>. We will review your requirements and respond within <strong className="text-white">2 business hours</strong>.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                company: "",
                service: "ai-bug-fixer",
                timeline: "immediate",
                message: "",
                requestNda: true,
              });
            }}
            className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-neutral-700"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          {/* Name & Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-300 text-xs font-medium mb-1.5">
                Full Name &amp; Title <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Sarah Chen, VP Engineering"
                className="w-full bg-[#0a0a0e] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-sm transition-all"
              />
            </div>
            <div>
              <label className="block text-neutral-300 text-xs font-medium mb-1.5">
                Corporate Work Email <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full bg-[#0a0a0e] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-sm transition-all"
              />
            </div>
          </div>

          {/* Company & Repository Scale */}
          <div>
            <label className="block text-neutral-300 text-xs font-medium mb-1.5">
              Company / Organization &amp; Engineering Scale
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Acme Technologies (approx. 40 engineers, 65 repos)"
              className="w-full bg-[#0a0a0e] border border-neutral-700 rounded-lg px-3.5 py-2.5 text-white placeholder-neutral-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-sm transition-all"
            />
          </div>

          {/* Project Category Selection */}
          <div>
            <label className="block text-neutral-300 text-xs font-medium mb-2">
              Primary Engagement Area <span className="text-rose-400">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: "ai-bug-fixer", label: "Autonomous AI Bug Fixer (Repo Integration)" },
                { id: "web-development", label: "Custom Full-Stack Web App & SaaS" },
                { id: "llm-training", label: "LLM Fine-Tuning & Enterprise RAG" },
                { id: "computer-vision", label: "Computer Vision & Digital Twin Models" },
                { id: "enterprise-studio", label: "Dedicated Enterprise Pod (Full Studio)" },
                { id: "consulting", label: "Architecture Audit & Security Review" },
              ].map((svc) => (
                <button
                  type="button"
                  key={svc.id}
                  onClick={() => setFormData({ ...formData, service: svc.id })}
                  className={`p-3 text-left rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-2.5 ${
                    formData.service === svc.id
                      ? "bg-cyan-950/40 border-cyan-500 text-white shadow-sm ring-1 ring-cyan-500/30"
                      : "bg-[#0a0a0e] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${
                    formData.service === svc.id ? "bg-cyan-400" : "bg-neutral-600"
                  }`} />
                  <span className="truncate">{svc.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Kickoff Timeline */}
          <div>
            <label className="block text-neutral-300 text-xs font-medium mb-2">
              Deployment Timeline
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: "immediate", label: "Immediate (< 2 wks)" },
                { id: "month", label: "Within 1-2 mos" },
                { id: "discovery", label: "Discovery / Q2" },
              ].map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setFormData({ ...formData, timeline: t.id })}
                  className={`py-2 px-3 text-center rounded-lg border font-medium transition-all cursor-pointer ${
                    formData.timeline === t.id
                      ? "bg-purple-950/40 border-purple-500 text-white"
                      : "bg-[#0a0a0e] border-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-neutral-300 text-xs font-medium mb-1.5">
              Technical Scope &amp; Architecture Details <span className="text-rose-400">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Outline your tech stack (e.g. Next.js, Node.js, Python, PostgreSQL), repository challenges, automated testing requirements, or custom AI models needed..."
              className="w-full bg-[#0a0a0e] border border-neutral-700 rounded-lg p-3.5 text-white placeholder-neutral-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none text-sm leading-relaxed"
            />
          </div>

          {/* Mutual NDA Checkbox */}
          <label className="flex items-start gap-3 p-3 bg-[#0a0a0e] border border-neutral-800 rounded-lg cursor-pointer hover:border-neutral-700 transition-colors">
            <input
              type="checkbox"
              checked={formData.requestNda}
              onChange={(e) => setFormData({ ...formData, requestNda: e.target.checked })}
              className="mt-0.5 accent-cyan-400 w-4 h-4 rounded cursor-pointer"
            />
            <div className="text-xs text-neutral-300">
              <strong className="text-white block font-semibold">Execute Mutual NDA Prior to Code Audit</strong>
              <span className="text-neutral-400 text-[11px] block mt-0.5">
                We will automatically issue our standard bilateral mutual NDA to your legal team before any proprietary architecture is inspected.
              </span>
            </div>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "transmitting"}
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-neutral-950 font-bold text-sm rounded-lg transition-all cursor-pointer shadow-lg shadow-cyan-950/50 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "transmitting" ? (
              <>
                <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></span>
                Processing Encrypted Transmission...
              </>
            ) : (
              <>Submit Project Specification &rarr;</>
            )}
          </button>

          {/* Security footnote */}
          <div className="pt-2 text-center text-[11px] text-neutral-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>🔒 256-bit TLS Encrypted</span>
            <span>·</span>
            <span>🛡️ SOC 2 Type II Workflows</span>
            <span>·</span>
            <span>🚫 Zero Code Training Retention</span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-neutral-200">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-white font-medium">Enterprise Contact</span>
      </nav>

      {/* Hero Header */}
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-semibold mb-3.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          DIRECT ENGINEERING CONCIERGE
        </div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Initiate an Engagement with Dorvik
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          From autonomous AI bug-fixing bots deployed directly into your private GitHub or GitLab repos, to high-performance SaaS web applications and bespoke model fine-tuning — collaborate directly with our founding engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Left: Contact / Specification Form */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-8 text-neutral-400 text-sm">Loading project intake form...</div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Right Column: Corporate Channels & Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          {/* Fast-Track Calendar Card */}
          <div className="bg-gradient-to-br from-[#1b1233] to-[#120a24] border border-purple-800/60 rounded-xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                FAST-TRACK DISCOVERY
              </span>
              <span className="text-xs text-neutral-400">30 Min Call</span>
            </div>
            <h3 className="text-white text-lg font-bold mb-1.5">
              Book a Technical Architecture Call
            </h3>
            <p className="text-neutral-300 text-xs leading-relaxed mb-4">
              Skip email back-and-forth. Schedule a 30-minute deep dive with a Principal Systems Engineer to analyze your repositories, CI/CD pipeline, and automation goals.
            </p>
            <a
              href="mailto:consultation@dorvik.com?subject=Dorvik%20Architecture%20Deep%20Dive%20Request"
              className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-md"
            >
              Schedule Architecture Consultation 🗓️
            </a>
          </div>

          {/* Direct Verified Communications */}
          <div className="bg-[#121218] border border-neutral-800 rounded-xl p-6 shadow-xl space-y-4">
            <h3 className="text-white font-bold text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
              Direct Inquiries &amp; Channels
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-[#0a0a0e] border border-neutral-800/80 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">ENTERPRISE SOLUTIONS</span>
                  <a href="mailto:solutions@dorvik.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                    solutions@dorvik.com
                  </a>
                </div>
                <span className="text-emerald-400 font-medium text-[11px]">&lt; 2h SLA</span>
              </div>

              <div className="p-3 bg-[#0a0a0e] border border-neutral-800/80 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-neutral-500 block text-[10px] font-semibold">GENERAL &amp; PARTNERSHIPS</span>
                  <a href="mailto:contact@dorvik.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                    contact@dorvik.com
                  </a>
                </div>
                <span className="text-neutral-400 text-[11px]">Direct Inbox</span>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/company/dorvik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 bg-[#0a0a0e] border border-neutral-800 hover:border-neutral-600 rounded-lg text-neutral-300 hover:text-white transition-all text-xs font-medium"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z"/>
                </svg>
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/dorvik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 bg-[#0a0a0e] border border-neutral-800 hover:border-neutral-600 rounded-lg text-neutral-300 hover:text-white transition-all text-xs font-medium"
              >
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
                GitHub Repos
              </a>
            </div>
          </div>

          {/* Enterprise Commitments & Guarantees */}
          <div className="bg-[#121218] border border-neutral-800 rounded-xl p-6 shadow-xl text-xs space-y-3.5">
            <div className="text-neutral-400 text-[11px] font-bold tracking-wider uppercase border-b border-neutral-800 pb-2">
              Enterprise Trust &amp; Governance
            </div>
            
            <div className="flex items-start gap-2.5 text-neutral-300">
              <span className="text-cyan-400 font-bold text-sm leading-none mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-semibold">Sub-2 Hour Initial Engineering Response</strong>
                <span className="text-neutral-400 text-[11px]">Guaranteed reply time from our technical triage pod.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-neutral-300">
              <span className="text-cyan-400 font-bold text-sm leading-none mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-semibold">100% Client Intellectual Property</strong>
                <span className="text-neutral-400 text-[11px]">All generated code, patches, tests, and documentation belong exclusively to your firm.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-neutral-300">
              <span className="text-cyan-400 font-bold text-sm leading-none mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-semibold">Private VPC &amp; On-Premise Air-Gapped Deployment</strong>
                <span className="text-neutral-400 text-[11px]">Deploy Dorvik agents isolated inside your AWS, GCP, Azure, or Kubernetes clusters.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-neutral-300">
              <span className="text-cyan-400 font-bold text-sm leading-none mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-semibold">Zero-Training Code Privacy Policy</strong>
                <span className="text-neutral-400 text-[11px]">Your proprietary codebase is never indexed or used to train third-party foundation models.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise FAQ / Reassurance Section */}
      <div className="mt-20 pt-12 border-t border-neutral-800">
        <div className="max-w-2xl mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">Frequently Asked Enterprise Questions</h2>
          <p className="text-neutral-400 text-sm">Everything you need to know before initiating a proof of concept or contract.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-[#121218] border border-neutral-800 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-2">How quickly can Dorvik integrate into our GitHub / GitLab CI?</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Standard integration takes less than 15 minutes via our GitHub App or GitLab webhook connector. Once granted repository access, Dorvik automatically parses your test suites and initiates shadow bug-triaging.
            </p>
          </div>

          <div className="p-5 bg-[#121218] border border-neutral-800 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-2">Is our proprietary code secure and isolated?</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Yes. Each task executes within an ephemeral, microVM-isolated sandbox with zero data egress. Code is analyzed in memory and immediately purged upon pull request generation.
            </p>
          </div>

          <div className="p-5 bg-[#121218] border border-neutral-800 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-2">Do you execute custom bilateral NDAs?</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Yes. Check the mutual NDA option in our inquiry form or send your legal counsel&apos;s standard agreement to legal@dorvik.com for immediate countersignature.
            </p>
          </div>

          <div className="p-5 bg-[#121218] border border-neutral-800 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-2">What pricing and contract models do you support?</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              We offer both recurring SaaS subscription plans (Dev, Pro, Studio) with monthly task quotas, and bespoke fixed-scope contracts for custom web application builds and model training pods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
