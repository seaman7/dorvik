"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#F7F7F3] pt-16 sm:pt-20 pb-12 border-t border-[#262626]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-xl tracking-tight text-[#FFFFFF]">
                DORVIK
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8E8E88] font-medium border-l border-[#333333] pl-2">
                Technology, engineered.
              </span>
            </div>

            <p className="text-sm text-[#9E9E98] max-w-sm leading-relaxed">
              Intelligent software, applied AI and digital engineering for ambitious teams.
            </p>

            <div className="pt-2 text-xs font-mono text-[#8E8E88] space-y-1">
              <p>INQUIRIES: contact@dorvik.com</p>
              <p className="text-[#666666]">
                * Global Operations · Available for Select Engagements
              </p>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#8E8E88]">
              NAVIGATION
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#8E8E88]">
              PRACTICE AREAS
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  AI &amp; Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Computer Vision &amp; OpenCV
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Data Annotation &amp; Dataset Engineering
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Web &amp; Mobile Applications
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-[#9E9E98] hover:text-[#FFFFFF] transition-colors"
                >
                  Backend, APIs &amp; Cloud Deployment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8E88]">
          <p>© {currentYear} DORVIK. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a
              href="#contact"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Privacy &amp; Terms
            </a>
            <span className="text-[#333333]">|</span>
            <a
              href="#contact"
              className="hover:text-[#FFFFFF] transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
