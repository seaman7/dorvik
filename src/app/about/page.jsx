import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Languages, MapPin, Target, Eye, Code2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata = {
  title: "About Dorvik — Bangladesh-Based Technology & Engineering Partner",
  description:
    "Learn about Dorvik: our Dhaka engineering team, bilingual capabilities, human-in-the-loop AI data annotation, and commitment to practical software.",
  alternates: {
    canonical: "/about",
  },
};

const VALUES = [
  {
    icon: Target,
    title: "Grounded Deliverables Over Hype",
    description:
      "We do not sell magical AI promises. We deliver quantifiable evaluation test splits, formalized annotation guidelines, clean OpenAPI contracts, and documented source code.",
  },
  {
    icon: Eye,
    title: "Human-in-the-Loop Precision",
    description:
      "AI models require human nuance. We build multi-tier review matrices where experienced human annotators and engineers audit data distributions and verify accuracy.",
  },
  {
    icon: Languages,
    title: "Dual Bangla & English Fluency",
    description:
      "Operating from Dhaka gives us deep native strength in Bengali script, dialectical variation, and local business contexts, paired with technical English communication for international partners.",
  },
  {
    icon: ShieldCheck,
    title: "Data Sovereignty & Client IP",
    description:
      "Your data and IP belong entirely to you. We operate under strict NDAs, sanitize test environments, and transfer full code and model artifact ownership upon completion.",
  },
];

export default function AboutPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Page Header */}
        <header className="max-w-3xl mb-16 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>About Dorvik</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            Pragmatic engineering for teams building the future.
          </h1>
          <p className="text-lg text-[#1e4d3c] font-medium">
            AI data, custom software, and managed compute for growing teams.
          </p>
          <p className="text-base text-[#4a5c51] leading-relaxed">
            Dorvik is an independent technology business founded and based in Dhaka,
            Bangladesh. We serve growing technical teams, educational institutions, and
            commercial businesses by solving high-friction data and software challenges.
          </p>
        </header>

        {/* Story & Differentiation Grid */}
        <section className="bg-white rounded-2xl border border-[#e5ded1] p-8 lg:p-12 shadow-xs mb-16 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-bold text-[#14382c]">
                Who We Are &amp; What We Believe
              </h2>
              <div className="space-y-3.5 text-sm text-[#4a5c51] leading-relaxed">
                <p>
                  The technology landscape is flooded with superficial wrappers, exaggerated
                  claims, and offshore agencies that prioritize volume over craftsmanship.
                  Dorvik was created on a different premise: that technical credibility is
                  earned through rigorous, verifiable deliverables.
                </p>
                <p>
                  Whether we are annotating thousands of video frames for an autonomous navigation
                  pipeline, training an OCR model to parse handwritten Bengali receipts, or
                  engineering an internal operations portal, our engineers work directly with your
                  technical stakeholders.
                </p>
                <p>
                  We keep our scope clear, our costs transparent, and our lines of communication open.
                </p>
              </div>
            </div>

            {/* Operating Facts Card */}
            <div className="lg:col-span-6 bg-[#fbf9f4] p-6 lg:p-8 rounded-xl border border-[#e5ded1] space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#14382c] font-bold pb-2 border-b border-[#eee8dc]">
                Operational Profile
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start justify-between">
                  <span className="text-[#596a60]">Headquarters</span>
                  <span className="font-semibold text-[#14382c] text-right">
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#596a60]">Primary Disciplines</span>
                  <span className="font-semibold text-[#14382c] text-right">
                    AI Data, CV/OCR, Web Systems, GPU
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#596a60]">Languages Supported</span>
                  <span className="font-semibold text-[#14382c] text-right">
                    Bangla &amp; English
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#596a60]">Client Engagement</span>
                  <span className="font-semibold text-[#14382c] text-right">
                    Direct SOW · Bounded Pilots
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#596a60]">Domain Status</span>
                  <span className="font-semibold text-[#14382c] text-right">
                    dorvik.tech (Launches Oct 18, 2026)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Values */}
        <section className="mb-16 space-y-8">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Core Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              How we approach our work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val) => {
              const Icon = val.icon;

              return (
                <div
                  key={val.title}
                  className="bg-white p-7 rounded-xl border border-[#e5ded1] space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#14382c]">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5c51] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA Bar */}
        <div className="p-8 rounded-xl bg-[#14382c] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Let's explore your project together.
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Have a conversation directly with our engineering team to evaluate technical feasibility.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Discuss a Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
