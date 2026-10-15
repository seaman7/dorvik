import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Cpu, Terminal, FileCode, Layers, ShieldAlert } from "lucide-react";
import { getServiceBySlug } from "@/lib/servicesData";

const service = getServiceBySlug("ai-engineering");

export const metadata = {
  title: "AI Engineering & Model Training — Computer Vision, OCR & LLMs",
  description:
    "Applied computer vision pipelines, document OCR extraction, domain-specific fine-tuning, and production inference APIs with evaluation benchmarks.",
  alternates: {
    canonical: "/services/ai-engineering",
  },
};

export default function AiEngineeringPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#596a60] hover:text-[#14382c] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>All Services</span>
        </Link>

        {/* Hero Section */}
        <header className="max-w-3xl mb-16 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>{service.eyebrow}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-[#1e4d3c] font-medium">
            {service.tagline}
          </p>
          <p className="text-sm sm:text-base text-[#4a5c51] leading-relaxed">
            {service.fullOverview}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link href={service.cta.href} className="dv-btn-primary">
              <span>{service.cta.label}</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/services/data-annotation" className="dv-btn-secondary">
              <span>Explore Data Annotation</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </header>

        {/* Cost Separation Callout */}
        <div className="mb-12 p-6 rounded-xl bg-white border-l-4 border-l-[#14382c] border border-[#e5ded1] space-y-2">
          <div className="flex items-center gap-2">
            <ShieldAlert size={18} className="text-[#84cc16]" />
            <h3 className="text-sm font-bold text-[#14382c]">
              Understanding AI Engineering Economics
            </h3>
          </div>
          <p className="text-xs text-[#4a5c51] leading-relaxed">
            {service.costSeparationNotice} Data annotation produces structured training datasets.
            Model training is an intensive batch compute activity requiring GPU hours. Production
            inference requires continuous hosting. We keep these scopes cleanly decoupled so
            you only pay for what your system actually consumes.
          </p>
        </div>

        {/* Grid: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Capabilities */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#e5ded1] space-y-6">
            <div className="border-b border-[#eee8dc] pb-4">
              <h2 className="text-xl font-bold text-[#14382c]">
                Core Engineering Capabilities
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                From image processing to fine-tuned language and document parsing.
              </p>
            </div>

            <ul className="space-y-3.5">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-[#293830]">
                  <Check size={16} className="text-[#84cc16] shrink-0 mt-1" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-[#e5ded1] space-y-6">
            <div className="border-b border-[#eee8dc] pb-4">
              <h2 className="text-xl font-bold text-[#14382c]">
                Agreed Handover Deliverables
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                Every project includes code, evaluation harnesses, and documentation.
              </p>
            </div>

            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] text-xs text-[#293830] flex items-start gap-2.5"
                >
                  <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-lg bg-[#edf5f1] border border-[#d2e5da] text-xs text-[#14382c] leading-relaxed">
              <strong>Reproducible Validation:</strong> We establish holdout evaluation splits
              before training begins to guarantee transparent regression testing.
            </div>
          </div>
        </div>

        {/* 6-Step Workflow */}
        <section className="bg-white p-8 lg:p-12 rounded-2xl border border-[#e5ded1] mb-16 space-y-8">
          <div className="max-w-2xl">
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Engineering Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              How we take an AI project to production.
            </h2>
            <p className="text-sm text-[#596a60] mt-2">
              A structured, milestone-driven path from baseline definition to API handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.workflow.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-xl bg-[#fbf9f4] border border-[#e5ded1] space-y-2.5"
              >
                <span className="text-xl font-mono font-extrabold text-[#14382c]">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#14382c]">
                  {item.name}
                </h3>
                <p className="text-xs text-[#4a5c51] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Bar */}
        <div className="p-8 rounded-xl bg-[#14382c] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Have an AI model or OCR requirement to evaluate?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Share sample inputs and latency constraints for a preliminary architectural review.
            </p>
          </div>
          <Link
            href="/contact?service=ai-engineering"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Discuss AI Engineering</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
