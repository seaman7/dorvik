"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function DorvikNavbar() {
  return (
    <header className="flex flex-row items-center justify-between w-full p-4 md:px-8 absolute top-0 left-0 z-50">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        {/* Dorvik Logo Image */}
        <div className="w-10 h-10 relative flex items-center justify-center bg-black border-2 border-purple-700 group-hover:border-cyan-400 transition-colors">
          <Image
            src="/dorvik-logo.png"
            alt="Dorvik Logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-black tracking-widest text-lg text-white group-hover:text-cyan-400 transition-colors font-mono">
            DORVIK
          </span>
          <span className="text-[9px] sm:text-[10px] text-purple-300 tracking-wider hidden sm:block font-mono">
            SOFTWARE &amp; WEB DEV • AI BUG FIXER AGENT
          </span>
        </div>
      </Link>

      {/* Nav Links & Social Channels */}
      <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
        <Link
          href="/#case-studies"
          className="hidden md:inline-flex items-center text-xs md:text-sm font-bold text-purple-200 hover:text-cyan-400 px-2.5 py-1.5 transition-colors border border-transparent hover:border-purple-600 font-mono"
        >
          Case Studies
        </Link>

        <Link
          href="/#projects"
          className="hidden lg:inline-flex items-center text-xs md:text-sm font-bold text-purple-200 hover:text-white px-2.5 py-1.5 transition-colors border border-transparent hover:border-purple-600 font-mono"
        >
          Core Projects
        </Link>

        <Link
          href="/#plans"
          className="hidden md:inline-flex items-center justify-center px-3 py-1 text-xs md:text-sm font-bold transition-colors border-2 border-cyan-400 text-white bg-transparent hover:bg-cyan-400/10 gap-1 font-mono"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            width="16px"
            viewBox="0 -960 960 960"
            className="text-cyan-400"
          >
            <path
              fill="currentColor"
              d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"
            />
          </svg>
          Plans
        </Link>

        {/* In-House Agent Studio Link */}
        <Link
          href="/agent-builder"
          className="inline-flex items-center justify-center px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-colors bg-purple-900 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-cyan-950 font-mono shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-cyan-400 mr-1.5 animate-pulse hidden sm:inline-block"></span>
          Agent Studio
        </Link>

        {/* GitHub Link */}
        <a
          href="https://github.com/dorvik"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dorvik on GitHub"
          className="p-1.5 md:p-2 text-purple-200 hover:text-white hover:bg-purple-900/60 border border-purple-800 transition-colors flex items-center justify-center"
          title="GitHub"
        >
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
            className="w-4 h-4 text-cyan-300"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/company/dorvik"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dorvik on LinkedIn"
          className="p-1.5 md:p-2 text-purple-200 hover:text-white hover:bg-purple-900/60 border border-purple-800 transition-colors flex items-center justify-center"
          title="LinkedIn"
        >
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
            className="w-4 h-4 text-cyan-300"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        {/* Contact Page Link */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 text-xs md:text-sm font-bold transition-colors border-2 border-fuchsia-400 text-fuchsia-200 hover:bg-fuchsia-500/20 font-mono"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
