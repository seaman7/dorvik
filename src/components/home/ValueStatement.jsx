"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export function ValueStatement() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 border-b border-[#DEDED8] bg-[#F7F7F3] relative">
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          {/* Subtle Accent Indicator */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[1.5px] bg-[#1D4ED8]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#6B6B6B]">
              PHILOSOPHY // 01
            </span>
          </div>

          {/* Oversized Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] leading-[1.12]">
            Complex problems deserve thoughtful engineering.
          </h2>

          {/* Supporting Text */}
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl text-[#6B6B6B] leading-relaxed font-normal">
            DORVIK combines product thinking, software engineering and applied AI to help teams move from ideas to dependable digital products.
          </p>

          {/* Minimal Engineered Divider */}
          <div className="mt-12 sm:mt-16 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-[#111111]" />
            <div className="flex-1 h-[1px] bg-[#DEDED8]" />
            <span className="font-mono text-[10px] text-[#8E8E88] uppercase tracking-wider">
              PRAGMATIC · MEASURABLE · ROBUST
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
