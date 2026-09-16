"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HackerRankFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1015] text-white pt-16 sm:pt-20 pb-12 border-t border-[#252A36]">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 pb-16 border-b border-[#252A36]">
          {/* Brand Column (Col 1-4) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-sm bg-white flex items-center justify-center text-[#0E1015] font-mono font-bold text-sm tracking-tighter">
                D<span className="text-[#00EA64]">/</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                DORVIK
              </span>
            </div>

            <p className="text-sm text-[#8C93A0] max-w-sm leading-relaxed">
              We build intelligent software, applied AI systems, computer vision perception, and reliable cloud infrastructure for ambitious businesses worldwide.
            </p>

            <div className="pt-2 font-mono-code text-xs text-[#8C93A0] space-y-1">
              <p>INQUIRIES: contact@dorvik.com</p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#161922] border border-[#252A36] text-[11px] text-[#00EA64]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64] animate-pulse" />
                <span>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Solutions Column (Col 5-6) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5E6470] font-bold">
              SOLUTIONS
            </p>
            <ul className="space-y-2 text-sm text-[#8C93A0]">
              <li><a href="#solutions" className="hover:text-white transition-colors">AI &amp; Machine Learning</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Computer Vision</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Dataset Engineering</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Web &amp; Mobile Apps</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Cloud &amp; APIs</a></li>
            </ul>
          </div>

          {/* Platforms & R&D (Col 7-8) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5E6470] font-bold">
              PLATFORMS &amp; LABS
            </p>
            <ul className="space-y-2 text-sm text-[#8C93A0]">
              <li><a href="#work" className="hover:text-white transition-colors">WareTwin Digital Twin</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Autonomous Drone Vision</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">AcademicOS</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">Edge Telemetry</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">PyTorch / YOLO Models</a></li>
            </ul>
          </div>

          {/* Company & Resources (Col 9-10) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5E6470] font-bold">
              ORGANIZATION
            </p>
            <ul className="space-y-2 text-sm text-[#8C93A0]">
              <li><a href="#solutions" className="hover:text-white transition-colors">About DORVIK</a></li>
              <li><a href="#for-builders" className="hover:text-white transition-colors">For Founders</a></li>
              <li><a href="#for-builders" className="hover:text-white transition-colors">For Enterprises</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Careers &amp; Fellows</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Engineering</a></li>
            </ul>
          </div>

          {/* Legal & Trust (Col 11-12) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#5E6470] font-bold">
              TRUST &amp; ETHOS
            </p>
            <ul className="space-y-2 text-sm text-[#8C93A0]">
              <li><a href="#contact" className="hover:text-white transition-colors">100% IP Ownership</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Zero Data Leakage</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Auditable AI Bias Tests</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#5E6470]">
          <p>© {currentYear} DORVIK. All rights reserved. Built for the Agentic Era.</p>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Terms</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
