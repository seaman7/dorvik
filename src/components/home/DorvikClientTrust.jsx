import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Cpu, Code2 } from "lucide-react";

export function DorvikClientTrust() {
  return (
    <section className="py-16 bg-[#fbf9f4] border-t border-[#e5ded1]">
      <div className="dv-container">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Engineering Discipline</span>
          </span>
          <h2 className="text-2xl font-bold text-[#14382c]">
            Built with rigor. Delivered with transparency.
          </h2>
          <p className="text-sm text-[#596a60]">
            From dataset calibration to production API handovers, we hold our code and annotation pipelines to measurable standards.
          </p>
        </div>
      </div>
    </section>
  );
}
