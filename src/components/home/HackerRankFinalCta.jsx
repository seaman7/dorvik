"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Send, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HackerRankFinalCta() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI & Machine Learning",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#E5E7EB]">
      <Container size="wide">
        <div className="rounded-3xl bg-[#0E1015] text-white p-8 sm:p-14 lg:p-16 border border-[#252A36] shadow-2xl relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 hr-grid-pattern-dark opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252A36] bg-[#161922]">
                <span className="w-2 h-2 rounded-full bg-[#00EA64]" />
                <span className="font-mono-code text-[11px] font-semibold text-[#00EA64] uppercase tracking-wider">
                  INITIATE TECHNICAL COLLABORATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Have an idea?{" "}
                <span className="font-serif-italic font-normal text-white underline decoration-[#00EA64] decoration-1 underline-offset-8">
                  Let’s make it work.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#8C93A0] leading-relaxed">
                Tell us what you are trying to build, improve or solve. We will review your requirements and help you identify the next practical engineering milestone.
              </p>

              <div className="pt-4 border-t border-[#252A36] space-y-2 font-mono-code text-xs text-[#8C93A0]">
                <p>
                  DIRECT: <a href="mailto:contact@dorvik.com" className="text-white hover:text-[#00EA64] underline underline-offset-4">contact@dorvik.com</a>
                </p>
                <p className="text-[#5E6470]">
                  RESPONSE TIME: &lt; 24 HOURS · STRICT NDA &amp; IP PROTECTION
                </p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-[#161922] p-6 sm:p-8 rounded-2xl border border-[#252A36]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#00EA64] text-[#0E1015] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Project Request Received
                  </h3>
                  <p className="text-sm text-[#8C93A0] max-w-sm mx-auto">
                    Thank you. We have logged your project inquiry and will reply with technical feedback within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono-code text-[#00EA64] underline mt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#8C93A0] mb-1">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Lin, NextGen Labs"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#0E1015] border border-[#252A36] text-white rounded-lg focus:border-[#00EA64] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#8C93A0] mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#0E1015] border border-[#252A36] text-white rounded-lg focus:border-[#00EA64] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#8C93A0] mb-1">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#0E1015] border border-[#252A36] text-white rounded-lg focus:border-[#00EA64] transition-colors"
                    >
                      <option>AI &amp; Machine Learning</option>
                      <option>Computer Vision &amp; OpenCV</option>
                      <option>Data Annotation &amp; Dataset Engineering</option>
                      <option>Custom Software Development</option>
                      <option>Web &amp; Mobile Applications</option>
                      <option>Cloud, Backend &amp; APIs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#8C93A0] mb-1">
                      Brief Project Overview *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="What are you building or looking to optimize?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#0E1015] border border-[#252A36] text-white rounded-lg focus:border-[#00EA64] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0E1015] bg-[#00EA64] hover:bg-[#00D45B] rounded-full transition-colors group shadow-sm"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0E1015] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
