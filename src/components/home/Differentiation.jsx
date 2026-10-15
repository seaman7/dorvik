import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Languages, Eye, GitBranch } from "lucide-react";

const PILLARS = [
  {
    icon: Eye,
    title: "Multi-Tier Human Review",
    description:
      "Algorithms hallucinate and automated labeling produces noise. We build structured review matrices where human specialists audit sample distributions and resolve ambiguous boundary conditions.",
  },
  {
    icon: Languages,
    title: "Bangla & English Linguistic Strength",
    description:
      "Native fluency in Bengali script, regional dialects, and complex phonetic transcription, coupled with professional technical English communication for international machine learning teams.",
  },
  {
    icon: GitBranch,
    title: "Practical Deliverables, Not Just Models",
    description:
      "We provide clean export schemas (COCO, YOLO, JSON, CSV), evaluation test harnesses, integration client SDKs, and deployment documentation ready for immediate adoption.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Data Protection & IP Ownership",
    description:
      "All annotated datasets, custom source code, and fine-tuned weights remain 100% the intellectual property of the client. We operate under rigorous non-disclosure agreements.",
  },
];

export function Differentiation() {
  return (
    <section className="py-20 bg-[#fbf9f4] border-t border-[#e5ded1]">
      <div className="dv-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="dv-eyebrow">
              <span className="dv-eyebrow-dot" />
              <span>Why Teams Partner With Us</span>
            </div>

            <h2 className="dv-section-title">
              Clear commitments. Practical engineering.
            </h2>

            <p className="text-base text-[#4a5c51] leading-relaxed">
              We do not market ourselves as an overnight hyperscale cloud provider or make
              unverifiable claims. Dorvik is a focused engineering team in Dhaka that gets
              the details right—from tight bounding box tolerances to clean API schemas.
            </p>

            <div className="pt-2">
              <Link href="/about" className="dv-link-arrow">
                <span>Learn more about our team and values</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="bg-white p-5 rounded-xl border border-[#e5ded1] space-y-3"
                >
                  <div className="w-9 h-9 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-[#14382c]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#596a60] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
