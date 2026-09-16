"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Platforms", href: "#platforms" },
  { label: "Workflow", href: "#workflow" },
  { label: "Work", href: "#work" },
];

export function HackerRankNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E7EB] py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : "bg-transparent py-5"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Left Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00EA64] rounded-sm"
          >
            {/* HackerRank-style geometric tech mark */}
            <div className="w-7 h-7 rounded-sm bg-[#0E1015] flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter">
              D<span className="text-[#00EA64]">/</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-lg tracking-tight text-[#0E1015]">
                DORVIK
              </span>
              <span className="hidden sm:inline-block font-mono-code text-[10px] text-[#5E6470] border-l border-[#E5E7EB] pl-2 uppercase tracking-wider">
                Technology, engineered.
              </span>
            </div>
          </Link>

          {/* Center Links (HackerRank Clean Nav) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-7"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#4A505C] hover:text-[#0E1015] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="#for-builders"
              className="hidden lg:inline-block text-xs font-mono-code uppercase tracking-wider text-[#5E6470] hover:text-[#0E1015] transition-colors"
            >
              For Builders
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#0E1015] bg-[#FFFFFF] hover:bg-[#F3F4F6] border border-[#D1D5DB] rounded-full transition-colors"
            >
              <span>Contact Us</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0E1015] hover:bg-[#1A1D24] rounded-full transition-all duration-200 group shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00EA64]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00EA64] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#0E1015] hover:bg-[#F3F4F6] rounded-md"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] bg-[#FFFFFF] border-b border-[#E5E7EB] p-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-[#0E1015] py-2 border-b border-[#F3F4F6] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C93A0]" />
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0E1015] rounded-full"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#00EA64]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
