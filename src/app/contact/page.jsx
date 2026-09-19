"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "web-development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    message: "",
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
    }, 1200);
  };

  return (
    <div className="pattern-square-light p-3 pb-4 rounded-pixel-lg bg-[#22074f] border-2 border-purple-800 shadow-2xl">
      <div className="bg-[#130825] p-6 md:p-8 rounded-pixel-sm border-2 border-purple-700">
        
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-purple-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-fuchsia-400"></span>
            <span className="w-2.5 h-2.5 bg-amber-400"></span>
            <span className="w-2.5 h-2.5 bg-cyan-400"></span>
            <span className="text-white font-bold ml-2">PROJECT_DISPATCH_TERMINAL.v2</span>
          </div>
          <span className="text-cyan-400 text-[11px]">SLA: &lt; 4 HOURS</span>
        </div>

        {status === "success" ? (
          <div className="py-12 px-6 bg-[#09051c] border-2 border-cyan-400 rounded-pixel-sm text-center">
            <div className="w-12 h-12 bg-cyan-400 text-cyan-950 rounded-pixel-sm mx-auto flex items-center justify-center text-xl font-black mb-4">
              ✓
            </div>
            <h3 className="text-white text-xl font-black mb-2">Transmission Dispatched!</h3>
            <p className="text-purple-200 text-xs mb-6 max-w-md mx-auto leading-relaxed">
              Our engineering leads have received your request for{" "}
              <strong className="text-cyan-300 capitalize">{formData.service.replace("-", " ")}</strong>. We will review your technical specifications and reply within <strong className="text-cyan-300">4 business hours</strong>.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", company: "", service: "web-development", message: "" });
              }}
              className="px-4 py-2 bg-purple-900 hover:bg-purple-800 border border-cyan-400 text-cyan-300 text-xs font-bold cursor-pointer"
            >
              Send Another Transmission
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-purple-300 font-bold mb-1.5">
                  Your Name / Contact Handle *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full bg-[#09051c] border border-purple-700 p-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-purple-300 font-bold mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@company.com"
                  className="w-full bg-[#09051c] border border-purple-700 p-3 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-purple-300 font-bold mb-1.5">
                Company / Organization (Optional)
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme AI Technologies Inc."
                className="w-full bg-[#09051c] border border-purple-700 p-3 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            {/* Project Category Selection */}
            <div>
              <label className="block text-purple-300 font-bold mb-2">
                Core Project / Service Requirement *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "web-development", label: "Web Development & SaaS Platforms" },
                  { id: "ai-bug-fixer", label: "Autonomous AI Bug Fixer Agent" },
                  { id: "llm-training", label: "LLM Model Training, Fine-Tuning & RAG" },
                  { id: "computer-vision", label: "Computer Vision & Spatial Digital Twins" },
                  { id: "enterprise-studio", label: "Dedicated Full Engineering Pod" },
                ].map((svc) => (
                  <button
                    type="button"
                    key={svc.id}
                    onClick={() => setFormData({ ...formData, service: svc.id })}
                    className={`p-3 text-left border text-[11px] font-bold transition-colors cursor-pointer ${
                      formData.service === svc.id
                        ? "bg-purple-900 border-cyan-400 text-white shadow-sm"
                        : "bg-[#09051c] border-purple-800 text-purple-400 hover:text-white"
                    }`}
                  >
                    <span className={formData.service === svc.id ? "text-cyan-400" : "text-purple-600"}>
                      {formData.service === svc.id ? "● " : "○ "}
                    </span>
                    {svc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-purple-300 font-bold mb-1.5">
                Project Scope, Requirements &amp; Timeline *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe what you want to build (e.g. Next.js SaaS portal, automated bug-fixing for GitHub repos, fine-tuning Llama on custom data, or YOLO/drone vision model)..."
                className="w-full bg-[#09051c] border border-purple-700 p-3 text-white focus:border-cyan-400 focus:outline-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "transmitting"}
              className="w-full py-3.5 px-6 bg-[#642cc2] hover:bg-[#784fcf] text-white font-black text-sm border-b-4 border-purple-950 transition-all cursor-pointer shadow-lg disabled:opacity-50"
            >
              {status === "transmitting"
                ? "DISPATCHING ENCRYPTED TRANSMISSION..."
                : "DISPATCH PROJECT SPECIFICATION →"}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-screen-xl mx-auto font-mono text-purple-100 select-none">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-xs text-purple-400 mb-6">
        <Link href="/" className="hover:text-cyan-300 transition-colors">
          ~ / dorvik
        </Link>
        <span>/</span>
        <span className="text-cyan-400 font-bold">contact-transmission</span>
      </div>

      {/* Hero Heading */}
      <div className="mb-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-900 border border-purple-600 text-xs text-cyan-300 font-bold mb-3">
          <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
          DIRECT ENGINEERING LINE
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-black mb-3">
          Initiate Project with Dorvik
        </h1>
        <p className="text-purple-300 text-sm md:text-base leading-relaxed">
          From custom Web Development &amp; Autonomous AI Bug Fixer Agents to LLM Model Fine-Tuning and Computer Vision Digital Twins. Tell us what you need built.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Terminal */}
        <div className="lg:col-span-7">
          <Suspense fallback={<div className="p-8 text-cyan-400 font-mono text-xs">Loading terminal...</div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* Channels & Operational Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="pattern-square-light p-3 pb-4 rounded-pixel-lg bg-[#22074f] border-2 border-purple-800 shadow-xl">
            <div className="bg-[#130825] p-6 rounded-pixel-sm border-2 border-purple-700 space-y-4">
              <h2 className="text-white font-black text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-cyan-400 inline-block"></span>
                Direct Channels &amp; Codebases
              </h2>
              <p className="text-purple-300 text-xs leading-relaxed">
                Connect with our core team, check open-source repositories, or reach out through verified professional channels.
              </p>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/company/dorvik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#09051c] border-2 border-purple-700 hover:border-cyan-400 text-purple-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-900 border border-purple-600 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-cyan-950 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-white text-xs font-bold">LinkedIn</strong>
                    <span className="text-[11px] text-purple-400">linkedin.com/company/dorvik</span>
                  </div>
                </div>
                <span className="text-cyan-400 text-xs font-bold">Connect →</span>
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/dorvik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#09051c] border-2 border-purple-700 hover:border-cyan-400 text-purple-200 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-900 border border-purple-600 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-cyan-950 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-white text-xs font-bold">GitHub</strong>
                    <span className="text-[11px] text-purple-400">github.com/dorvik</span>
                  </div>
                </div>
                <span className="text-cyan-400 text-xs font-bold">Browse Repos →</span>
              </a>

              {/* Direct Email */}
              <div className="p-3.5 bg-[#09051c] border border-purple-800 text-xs space-y-1">
                <span className="text-purple-400 text-[10px] block">DIRECT INQUIRIES:</span>
                <a href="mailto:contact@dorvik.com" className="text-cyan-300 font-bold hover:underline block">
                  contact@dorvik.com
                </a>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-[#130825] p-5 rounded-pixel-sm border-2 border-purple-800 text-xs space-y-3 font-mono">
            <div className="text-purple-400 text-[11px] font-bold border-b border-purple-800/60 pb-2">
              DORVIK COMMITMENTS
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Sub-4 Hour Initial Engineering Response</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Full IP Ownership &amp; Code Repository Transfer</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Strict Mutual NDA &amp; Enterprise Security Standards</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
