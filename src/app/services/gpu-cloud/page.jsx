import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Server, Cpu, ShieldAlert, FileText, Clock, AlertTriangle } from "lucide-react";
import { getServiceBySlug } from "@/lib/servicesData";

const service = getServiceBySlug("gpu-cloud");

export const metadata = {
  title: "Managed GPU & Deployment — Cloud Compute Sizing & Execution",
  description:
    "Workload sizing, PyTorch/CUDA environment setup, training execution oversight, and inference deployment on third-party cloud infrastructure.",
  alternates: {
    canonical: "/services/gpu-cloud",
  },
};

export default function GpuCloudPage() {
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
            <Link href="/services/ai-engineering" className="dv-btn-secondary">
              <span>Explore AI Engineering</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </header>

        {/* Critical Disclaimers Banner */}
        <section className="mb-16 bg-white p-6 lg:p-8 rounded-xl border border-[#e5ded1] space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#eee8dc]">
            <AlertTriangle size={20} className="text-[#84cc16]" />
            <h2 className="text-base font-bold text-[#14382c]">
              Important Service Model &amp; Infrastructure Transparency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#4a5c51] leading-relaxed">
            {service.disclaimers.map((item, index) => (
              <div
                key={index}
                className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] space-y-1"
              >
                <span className="font-mono font-bold text-[#14382c] text-[10px] uppercase">
                  Policy 0{index + 1}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Illustrative Workload Sizing Guide (Clearly Labeled Assumptions) */}
        <section className="mb-16 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#14382c]">
              Illustrative Workload Sizing Guide
            </h2>
            <p className="text-xs text-[#596a60] mt-1">
              Representative examples based on typical third-party cloud rates.
              This guide is illustrative only and does not constitute a formal quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.illustrativeWorkloads.map((item) => (
              <div
                key={item.name}
                className="bg-white p-6 rounded-xl border border-[#e5ded1] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="pb-3 border-b border-[#eee8dc]">
                    <span className="text-[10px] font-mono uppercase text-[#798a80]">
                      Workload Tier
                    </span>
                    <h3 className="text-base font-bold text-[#14382c] mt-0.5">
                      {item.name}
                    </h3>
                  </div>

                  <div className="p-3 bg-[#fbf9f4] rounded border border-[#eee8dc]">
                    <span className="text-[10px] font-mono text-[#798a80] uppercase block">
                      Recommended Hardware:
                    </span>
                    <span className="text-xs font-mono font-bold text-[#14382c]">
                      {item.hardware}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#798a80] uppercase block mb-1">
                      Typical Task:
                    </span>
                    <p className="text-xs text-[#4a5c51]">{item.typicalUse}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eee8dc]">
                  <span className="text-[10px] font-mono text-[#798a80] uppercase block">
                    Illustrative Compute Cost:
                  </span>
                  <span className="text-xs font-semibold text-[#14382c]">
                    {item.illustrativeCostRange}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#798a80] font-mono">
            * Assumptions: Compute rates reflect publicly available third-party on-demand pricing.
            Dorvik service fees for setup, monitoring, and checkpoint scripting are itemized separately.
          </p>
        </section>

        {/* Grid: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Capabilities */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#e5ded1] space-y-6">
            <div className="border-b border-[#eee8dc] pb-4">
              <h2 className="text-xl font-bold text-[#14382c]">
                Managed Compute Capabilities
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                From initial VRAM sizing to production inference endpoint optimization.
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
                Setup &amp; Operating Deliverables
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                Artifacts delivered to your engineering team.
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

            <div className="p-4 rounded-lg bg-[#edf5f1] border border-[#d2e5da] text-xs text-[#14382c]">
              <strong>Scheduled Shutdown:</strong> We configure automated scripts to terminate
              idle GPU instances, preventing surprise cloud bills when jobs complete.
            </div>
          </div>
        </div>

        {/* 6-Step Workflow */}
        <section className="bg-white p-8 lg:p-12 rounded-2xl border border-[#e5ded1] mb-16 space-y-8">
          <div className="max-w-2xl">
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Execution Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              How we manage your cloud compute runs.
            </h2>
            <p className="text-sm text-[#596a60] mt-2">
              Structured provisioning, checkpoint safeguards, and verified handover.
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
              Planning a model training or inference run?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Share your model architecture, batch size, and timeline for an accurate sizing recommendation.
            </p>
          </div>
          <Link
            href="/contact?service=gpu-cloud"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Request a GPU Setup Quote</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
