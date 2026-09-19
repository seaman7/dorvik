"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function DorvikFooter() {
  return (
    <footer className="w-full bg-[#FAFAFC] dark:bg-[#050508] border-t border-neutral-200 dark:border-white/[0.08] font-sans text-neutral-600 dark:text-neutral-300 pt-16 pb-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer Action Banner */}
        <div className="bg-white dark:bg-[#0C0C12] border border-neutral-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 mb-16 text-center relative overflow-hidden shadow-xl dark:shadow-2xl transition-colors">
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-12 h-12 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm">
              <Image
                src="/dorvik-logo.png"
                alt="Dorvik"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-3">
              Build resilient web systems &amp; eliminate bug backlogs
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed">
              Custom software engineering and autonomous agent reliability pipelines trusted by global enterprises and scale-ups.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 text-sm font-semibold transition-all shadow-md"
              >
                Contact Engineering Team
              </Link>
              <Link
                href="/careers"
                className="px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-white border border-neutral-300 dark:border-white/15 text-sm font-semibold transition-colors"
              >
                Explore Open Positions
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-200 dark:border-white/[0.08]">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 relative flex items-center justify-center bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 rounded-md">
                <Image
                  src="/dorvik-logo.png"
                  alt="Dorvik"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-neutral-900 dark:text-white text-base tracking-wider">
                DORVIK
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
              Autonomous software engineering and custom web development studio based in Bangladesh, serving global production platforms.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-bold mb-4">
              Products &amp; Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/bizos" className="text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors flex items-center gap-1.5">
                  <span>BizOS (AI Business OS)</span>
                  <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 px-1 py-0.2 rounded border border-cyan-200 dark:border-cyan-500/30">
                    Flagship
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Web &amp; Full-Stack Engineering
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors flex items-center gap-1.5">
                  <span>Dorvik Lab (AI Bug Fixer)</span>
                  <span className="text-[10px] font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-500/15 px-1 py-0.2 rounded border border-purple-200 dark:border-purple-500/30">
                    R&amp;D
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Distributed Cloud &amp; Microservices
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Custom LLM &amp; Code Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/#case-studies" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Enterprise Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/15 px-1 py-0.2 rounded border border-emerald-200 dark:border-emerald-500/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#plans" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Engagement &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Connect Column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-900 dark:text-white font-bold mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
              <li>
                <a
                  href="https://github.com/dorvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dorvik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@dorvik.com"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  contact@dorvik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Dorvik Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <span>SOC 2 Type II Certified Pipeline</span>
            <span>&bull;</span>
            <span>Zero Data Retention</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
