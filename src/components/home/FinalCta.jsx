"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI & Machine Learning",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-b border-[#DEDED8] bg-[#FAF9F5] relative">
      <Container size="default">
        <div className="bg-[#FFFFFF] border border-[#DEDED8] p-8 sm:p-12 lg:p-16 rounded-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: CTA Messaging */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                <span className="text-xs font-mono font-semibold tracking-wider text-[#6B6B6B] uppercase">
                  INITIATE COLLABORATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#111111] leading-[1.12]">
                Have an idea? Let’s make it work.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                Tell us what you are trying to build, improve or solve. We will help you identify the next practical step.
              </p>

              <div className="mt-8 pt-6 border-t border-[#E8E8E2] space-y-3">
                <p className="text-sm font-medium text-[#111111]">
                  Prefer to ask a question first?{" "}
                  <a
                    href="mailto:contact@dorvik.com"
                    className="text-[#1D4ED8] hover:underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    <span>Get in touch directly</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </p>
                <p className="text-xs text-[#8E8E88] font-mono">
                  DIRECT: contact@dorvik.com · RESPONSE TIME: &lt; 24 HOURS
                </p>
              </div>
            </div>

            {/* Right Column: Project Inquiry Form */}
            <div className="lg:col-span-6 bg-[#F7F7F3] p-6 sm:p-8 border border-[#DEDED8] rounded-xs">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-[#111111]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto">
                    Thank you. We have logged your project inquiry and will reply with engineering feedback within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#1D4ED8] underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5"
                    >
                      Your Name / Company *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Miller, Acme Systems"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#DEDED8] text-[#111111] focus:border-[#111111] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5"
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#DEDED8] text-[#111111] focus:border-[#111111] transition-colors rounded-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5"
                    >
                      Primary Service Focus
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#DEDED8] text-[#111111] focus:border-[#111111] transition-colors rounded-none"
                    >
                      <option>AI & Machine Learning</option>
                      <option>Computer Vision & OpenCV</option>
                      <option>Data Annotation & Dataset Engineering</option>
                      <option>Custom Software Development</option>
                      <option>Web & Mobile Application Development</option>
                      <option>Backend, APIs & Cloud Deployment</option>
                      <option>Full-Platform Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-1.5"
                    >
                      Project Goals &amp; Scope *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      placeholder="Briefly describe what you are building or the problem you are solving..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFFFFF] border border-[#DEDED8] text-[#111111] focus:border-[#111111] transition-colors rounded-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#FFFFFF] bg-[#111111] hover:bg-[#222222] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
