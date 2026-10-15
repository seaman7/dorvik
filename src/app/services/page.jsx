import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Database, Cpu, Terminal, Server, ShieldCheck } from "lucide-react";
import { CORE_SERVICES } from "@/lib/servicesData";

export const metadata = {
  title: "Services — AI Data, Engineering, Software & GPU Cloud",
  description:
    "Explore Dorvik's four primary technology services: AI data annotation, computer vision & OCR engineering, bespoke business software, and managed GPU cloud deployments.",
  alternates: {
    canonical: "/services",
  },
};

const ICONS = {
  "data-annotation": Database,
  "ai-engineering": Cpu,
  "software-development": Terminal,
  "gpu-cloud": Server,
};

export default function ServicesPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Header */}
        <header className="max-w-3xl mb-16 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Technology Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight">
            Services designed around measurable outcomes.
          </h1>
          <p className="text-base sm:text-lg text-[#596a60] leading-relaxed">
            We partner with growing machine learning teams, startups, and operational
            businesses. Every engagement begins with defined deliverables, verifiable acceptance
            benchmarks, and transparent costs.
          </p>
        </header>

        {/* 4 Services Detailed Sections */}
        <div className="space-y-16">
          {CORE_SERVICES.map((service) => {
            const Icon = ICONS[service.id] || Terminal;

            return (
              <section
                key={service.id}
                id={service.slug}
                className="bg-white rounded-2xl border border-[#e5ded1] p-8 lg:p-12 shadow-xs scroll-mt-24 space-y-8"
              >
                {/* Top Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#eee8dc]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#edf5f1] text-[#14382c] flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#798a80]">
                        {service.number} / CORE OFFERING
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#edf5f1] hover:bg-[#14382c] text-[#14382c] hover:text-white font-semibold text-xs transition-colors self-start md:self-auto"
                  >
                    <span>Read dedicated specification</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Overview Text */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-lg font-semibold text-[#14382c]">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-[#4a5c51] leading-relaxed">
                      {service.fullOverview}
                    </p>

                    {/* Quality / Transparency Notice */}
                    {service.qualityCommitment && (
                      <div className="p-4 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] text-xs text-[#596a60] leading-relaxed">
                        <strong className="text-[#14382c] block mb-1">
                          Realistic Quality Standard:
                        </strong>
                        {service.qualityCommitment}
                      </div>
                    )}

                    {service.costSeparationNotice && (
                      <div className="p-4 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] text-xs text-[#596a60] leading-relaxed">
                        <strong className="text-[#14382c] block mb-1">
                          Transparent Cost Separation:
                        </strong>
                        {service.costSeparationNotice}
                      </div>
                    )}
                  </div>

                  {/* Capabilities & Deliverables Column */}
                  <div className="lg:col-span-5 bg-[#fbf9f4] p-6 rounded-xl border border-[#e5ded1] space-y-5">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#14382c] font-bold mb-3">
                        Confirmed Deliverables:
                      </h3>
                      <ul className="space-y-2 text-xs text-[#293830]">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#eee8dc]">
                      <Link
                        href={service.cta.href}
                        className="dv-btn-primary w-full text-center justify-center !py-2.5 text-xs"
                      >
                        <span>{service.cta.label}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 p-8 rounded-xl bg-white border border-[#e5ded1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#14382c]">
              Need a blended scope or custom combination?
            </h3>
            <p className="text-xs text-[#596a60]">
              Many client projects combine data annotation with model fine-tuning and a web interface.
            </p>
          </div>
          <Link href="/contact" className="dv-btn-primary whitespace-nowrap">
            <span>Discuss Custom Requirements</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
