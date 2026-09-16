"use client";

import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/home/HeroVisual";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[#DEDED8] overflow-hidden">
      {/* Background Engineering Subtlety */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline and Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#6B6B6B] uppercase">
                AI · SOFTWARE · DATA · CLOUD
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-[#111111] leading-[1.08] max-w-2xl">
              Technology that moves your business forward.
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl font-normal">
              From AI and computer vision to custom software, web applications and cloud infrastructure, we turn complex ideas into reliable digital solutions.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#FFFFFF] bg-[#111111] hover:bg-[#222222] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#111111] bg-[#FFFFFF] hover:bg-[#F0F0EC] border border-[#DEDED8] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Micro Trust / Focus Highlights */}
            <div className="mt-12 pt-8 border-t border-[#E8E8E2] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block font-mono text-xs sm:text-sm font-semibold text-[#111111]">
                  PRODUCTION
                </span>
                <span className="text-[11px] text-[#6B6B6B]">
                  Applied AI &amp; Vision
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs sm:text-sm font-semibold text-[#111111]">
                  FULL-STACK
                </span>
                <span className="text-[11px] text-[#6B6B6B]">
                  Scalable Web &amp; APIs
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs sm:text-sm font-semibold text-[#111111]">
                  GLOBAL
                </span>
                <span className="text-[11px] text-[#6B6B6B]">
                  Engineered for scale
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Precision Technical Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
