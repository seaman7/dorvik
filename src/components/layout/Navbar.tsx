"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#F7F7F3]/90 backdrop-blur-md border-b border-[#DEDED8] py-3.5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
          : "bg-transparent py-5 sm:py-6"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Left Brand */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm p-1 -m-1"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#111111]">
                DORVIK
              </span>
              <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-[#6B6B6B] font-medium border-l border-[#DEDED8] pl-2">
                Technology, engineered.
              </span>
            </div>
            <span className="sm:hidden text-[10px] text-[#6B6B6B] tracking-wide">
              Technology, engineered.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4A4A4A] hover:text-[#111111] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-[#FFFFFF] bg-[#111111] hover:bg-[#222222] border border-[#111111] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-none"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#111111] hover:bg-[#EBEBE6] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 top-[61px] bottom-0 bg-[#F7F7F3] z-40 md:hidden flex flex-col justify-between px-6 py-8 border-t border-[#DEDED8] transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="space-y-6 pt-4">
          <p className="text-[11px] font-semibold tracking-widest text-[#8E8E88] uppercase">
            Navigation
          </p>
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-medium text-[#111111] hover:text-[#1D4ED8] transition-colors py-1 flex items-center justify-between border-b border-[#E8E8E2]"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#8E8E88]" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 pb-4 border-t border-[#DEDED8] space-y-4">
          <p className="text-xs text-[#6B6B6B]">
            Ready to explore an engineering collaboration?
          </p>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#FFFFFF] bg-[#111111] hover:bg-[#222222] transition-colors"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
