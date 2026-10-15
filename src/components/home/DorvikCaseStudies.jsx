import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function DorvikCaseStudies() {
  return (
    <section className="py-16 bg-white border-t border-[#e5ded1]">
      <div className="dv-container">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Practical Case Studies</span>
          </span>
          <h2 className="text-2xl font-bold text-[#14382c]">
            Real engineering challenges and verifiable outcomes.
          </h2>
          <p className="text-sm text-[#596a60]">
            Explore our work across computer vision, OCR extraction, and operational systems.
          </p>
          <div className="pt-2">
            <Link href="/projects" className="dv-btn-primary text-xs">
              <span>View Verified Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
