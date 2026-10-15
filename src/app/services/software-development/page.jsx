import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Terminal, LayoutDashboard, Workflow, Users, ShieldCheck } from "lucide-react";
import { getServiceBySlug } from "@/lib/servicesData";

const service = getServiceBySlug("software-development");

export const metadata = {
  title: "Software & Business Automation — Custom Portals & Workflows",
  description:
    "Purpose-built client portals, CRM workflows, operational dashboards, and reliable system integrations designed around your specific processes.",
  alternates: {
    canonical: "/services/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
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
            <Link href="/bizos" className="dv-btn-secondary">
              <span>Explore BizOS Product</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </header>

        {/* Concrete Use Cases Grid */}
        <section className="mb-16">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold text-[#14382c]">
              Real Business Applications
            </h2>
            <p className="text-xs text-[#596a60] mt-1">
              Practical software systems replacing spreadsheet sprawl and manual admin toil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white p-6 rounded-xl border border-[#e5ded1] space-y-3"
              >
                <div className="w-8 h-8 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                  <Workflow size={16} />
                </div>
                <h3 className="text-base font-bold text-[#14382c]">
                  {useCase.title}
                </h3>
                <p className="text-xs text-[#596a60] leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Grid: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Capabilities */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#e5ded1] space-y-6">
            <div className="border-b border-[#eee8dc] pb-4">
              <h2 className="text-xl font-bold text-[#14382c]">
                Software Engineering Capabilities
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                Modern full-stack technologies engineered for long-term maintainability.
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
                What You Receive
              </h2>
              <p className="text-xs text-[#596a60] mt-1">
                Complete intellectual property transfer with documented deployment runbooks.
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
              <strong>No Vendor Lock-In:</strong> You receive the complete source code,
              environment variables, and container configurations.
            </div>
          </div>
        </div>

        {/* 5-Step Workflow */}
        <section className="bg-white p-8 lg:p-12 rounded-2xl border border-[#e5ded1] mb-16 space-y-8">
          <div className="max-w-2xl">
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Development Lifecycle</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              From process mapping to production handover.
            </h2>
            <p className="text-sm text-[#596a60] mt-2">
              Iterative, milestone-based builds with runnable demos every two weeks.
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
              Ready to replace manual spreadsheets with a custom system?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Tell us about your team's workflow and existing systems to explore scope.
            </p>
          </div>
          <Link
            href="/contact?service=software-development"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Discuss Software Development</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
