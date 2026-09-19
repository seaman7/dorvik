"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function DorvikNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080809]/90 border-b border-[#1b1b20] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 relative flex items-center justify-center bg-white/[0.05] border border-white/10 rounded-md group-hover:border-white/20 transition-colors">
            <Image
              src="/dorvik-logo.png"
              alt="Dorvik Logo"
              width={22}
              height={22}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold tracking-tight text-sm text-white">
            DORVIK
          </span>
        </Link>

        {/* Clean, Senior Developer Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-neutral-400">
          <Link
            href="/bizos"
            className="text-neutral-200 hover:text-white transition-colors"
          >
            BizOS
          </Link>

          <Link
            href="/lab"
            className="text-neutral-200 hover:text-white transition-colors"
          >
            Lab (SWE Agent)
          </Link>

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
            <span className="text-[9px] font-mono font-medium text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/40">
              Hiring
            </span>
          </Link>

          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Link
            href="/bizos#waitlist"
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-md btn-light-refined text-xs tracking-tight"
          >
            Request Demo
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0C10] border-b border-[#1b1b20] px-4 py-4 space-y-2 text-xs font-medium text-neutral-300">
          <Link
            href="/bizos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-white"
          >
            BizOS Platform
          </Link>
          <Link
            href="/lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-white"
          >
            Dorvik Lab (AI Bug Fixer)
          </Link>
          <Link
            href="/#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-white"
          >
            Case Studies
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-white"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-white"
          >
            Contact
          </Link>
          <div className="pt-2 flex items-center justify-between gap-3">
            <Link
              href="/bizos#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-md btn-light-refined text-xs"
            >
              Request Demo
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
