"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function DorvikNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#08080A]/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative flex items-center justify-center bg-white/[0.04] border border-white/10 rounded-lg group-hover:border-cyan-400/50 transition-colors">
            <Image
              src="/dorvik-logo.png"
              alt="Dorvik Logo"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-wider text-base text-white group-hover:text-cyan-400 transition-colors">
              DORVIK
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <Link
            href="/#case-studies"
            className="hover:text-white transition-colors"
          >
            Case Studies
          </Link>

          <Link
            href="/careers"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Careers</span>
            <span className="text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/25">
              HIRING
            </span>
          </Link>

          <Link
            href="/#projects"
            className="hover:text-white transition-colors"
          >
            Capabilities
          </Link>

          <Link
            href="/#plans"
            className="hover:text-white transition-colors"
          >
            Engagement
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* GitHub Icon */}
          <a
            href="https://github.com/dorvik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dorvik GitHub"
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
            title="GitHub"
          >
            <svg
              className="w-4 h-4"
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
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/dorvik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dorvik LinkedIn"
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
            title="LinkedIn"
          >
            <svg
              className="w-4 h-4"
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
          </a>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-tight transition-all shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
