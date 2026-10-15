import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Boxes, Users, Receipt, ListOrdered, BarChart3, AlertCircle } from "lucide-react";
import { getProductBySlug } from "@/lib/productsData";

const product = getProductBySlug("bizos");

export const metadata = {
  title: "BizOS — Connected Business Operations Software",
  description:
    "Evolving business operations platform: unified customer records, multi-location inventory, billing logs, and follow-up task routing.",
  alternates: {
    canonical: "/bizos",
  },
};

const MODULE_ICONS = {
  crm: Users,
  inventory: Boxes,
  invoicing: Receipt,
  tasks: ListOrdered,
  reporting: BarChart3,
};

export default function BizOSPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#596a60] hover:text-[#14382c] mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>All Products</span>
        </Link>

        {/* Hero Section */}
        <header className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="dv-pill">{product.badge}</span>
            <span className="text-xs font-mono text-[#798a80]">
              Operational Software
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            {product.name}: Connected Business Operations
          </h1>

          <p className="text-lg text-[#1e4d3c] font-medium">
            {product.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#4a5c51] leading-relaxed">
            {product.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link href={product.cta.href} className="dv-btn-primary">
              <span>{product.cta.label}</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/services/software-development" className="dv-btn-secondary">
              <span>Custom Software Development</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </header>

        {/* Pilot Readiness Alert */}
        <div className="mb-14 p-5 rounded-xl bg-white border border-[#e5ded1] flex items-start gap-3">
          <AlertCircle size={18} className="text-[#84cc16] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs leading-relaxed text-[#4a5c51]">
            <strong className="text-[#14382c] block">
              Pilot Program Status
            </strong>
            <p>
              BizOS is currently in active prototype and pilot testing with selected partner businesses.
              We do not present mock payment gateways or fake instant workspace creators. Every
              deployment is scoped, configured, and supported directly by our engineering team.
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <section className="mb-16 space-y-8">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Modular Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              Core Operations Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.modules.map((mod) => {
              const Icon = MODULE_ICONS[mod.id] || Boxes;

              return (
                <div
                  key={mod.id}
                  className="bg-white p-6 rounded-xl border border-[#e5ded1] space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#14382c]">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-[#596a60] leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Industry Workflows */}
        <section className="mb-16 bg-white p-8 lg:p-12 rounded-2xl border border-[#e5ded1] space-y-8">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Target Use Cases</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              Configured around your business model.
            </h2>
            <p className="text-xs text-[#596a60] mt-1">
              Practical workflows built for real operational scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.industries.map((ind) => (
              <div
                key={ind.name}
                className="p-5 rounded-xl bg-[#fbf9f4] border border-[#eee8dc] space-y-2"
              >
                <h3 className="text-sm font-bold text-[#14382c]">{ind.name}</h3>
                <p className="text-xs text-[#4a5c51] leading-relaxed">
                  {ind.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Bar */}
        <div className="p-8 rounded-xl bg-[#14382c] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Interested in piloting BizOS for your business?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Share your business model, branch count, and current tooling to discuss pilot fit.
            </p>
          </div>
          <Link
            href="/contact?service=bizos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Discuss BizOS Pilot</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
