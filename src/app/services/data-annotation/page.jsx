import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Database, FileText, Layers, ShieldCheck } from "lucide-react";
import { getServiceBySlug } from "@/lib/servicesData";

const service = getServiceBySlug("data-annotation");

export const metadata = {
  title: "AI Data & Annotation Services — Computer Vision & Audio Labeling",
  description:
    "High-accuracy bounding boxes, polygon segmentation, video tracking, and Bangla/English transcription pipelines reviewed by human specialists.",
  alternates: {
    canonical: "/services/data-annotation",
  },
};

export default function DataAnnotationPage() {
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
            <Link href="/contact" className="dv-btn-secondary">
              <span>Discuss Guidelines</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </header>

        {/* Grid: Capabilities & Formats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Capabilities */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#e5ded1] space-y-6">
            <div className="border-b border-[#eee8dc] pb-4">
              <h2 className="text-xl font-bold text-[#14382c]">
                Annotation &amp; Labeling Capabilities
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                Multi-modal capabilities spanning visual, acoustic, and textual datasets.
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

            <div className="p-4 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] text-xs text-[#596a60] leading-relaxed">
              <strong className="text-[#14382c] block mb-1">
                Human-in-the-Loop Quality Assurance:
              </strong>
              {service.qualityCommitment}
            </div>
          </div>

          {/* Formats & Deliverables */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl border border-[#e5ded1] space-y-6">
            <div className="border-b border-[#eee8dc] pb-4">
              <h2 className="text-xl font-bold text-[#14382c]">
                Supported Formats &amp; Exports
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                Packaged to ingest directly into PyTorch, Ultralytics, and TensorFlow pipelines.
              </p>
            </div>

            <div className="space-y-3">
              {service.supportedFormats.map((fmt) => (
                <div
                  key={fmt.name}
                  className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#14382c]">
                      {fmt.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#14382c] border border-[#eee8dc]">
                      {fmt.ext}
                    </span>
                  </div>
                  <p className="text-xs text-[#596a60]">{fmt.use}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase text-[#798a80] font-bold mb-2">
                What We Deliver With Every Batch:
              </h3>
              <ul className="space-y-1.5 text-xs text-[#4a5c51]">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 6-Step Workflow */}
        <section className="bg-white p-8 lg:p-12 rounded-2xl border border-[#e5ded1] mb-16 space-y-8">
          <div className="max-w-2xl">
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Annotation Methodology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              How we execute an annotation pipeline.
            </h2>
            <p className="text-sm text-[#596a60] mt-2">
              From defining edge-case rules to qualification samples and volume ramp.
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
              Ready to calibrate your annotation guidelines?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Request an initial qualification sample (50–100 items) to align agreement before committing.
            </p>
          </div>
          <Link
            href="/contact?service=data-annotation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Request an Annotation Pilot</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
