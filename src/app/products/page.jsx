import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Boxes, GraduationCap, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/productsData";

export const metadata = {
  title: "Products — BizOS & EduOS Proprietary Software Systems",
  description:
    "Explore Dorvik's evolving software products: BizOS for business operations, inventory & invoicing; EduOS for education administration, coursework, and teacher-reviewed grading.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Header */}
        <header className="max-w-3xl mb-16 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Proprietary Products</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight">
            Software built for operational clarity.
          </h1>
          <p className="text-base sm:text-lg text-[#596a60] leading-relaxed">
            Dorvik engineers evolving software products designed to replace fragmented
            spreadsheets and rigid legacy tools. We work directly with pilot partners
            to validate features against real operational demands.
          </p>
        </header>

        {/* Products Detailed Cards */}
        <div className="space-y-16">
          {PRODUCTS.map((product) => {
            const isBizOS = product.id === "bizos";
            const Icon = isBizOS ? Boxes : GraduationCap;

            return (
              <section
                key={product.id}
                id={product.slug}
                className="bg-white rounded-2xl border border-[#e5ded1] p-8 lg:p-12 shadow-xs scroll-mt-24 space-y-8"
              >
                {/* Product Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#eee8dc]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#edf5f1] text-[#14382c] flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
                          {product.name}
                        </h2>
                        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f4fce3] text-[#3f6212] border border-[#d9f99d]">
                          {product.badge}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#798a80]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/${product.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#edf5f1] hover:bg-[#14382c] text-[#14382c] hover:text-white font-semibold text-xs transition-colors self-start md:self-auto"
                  >
                    <span>View dedicated product details</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-lg font-semibold text-[#14382c]">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-[#4a5c51] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Readiness Box */}
                    <div className="p-4 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] text-xs text-[#596a60] leading-relaxed">
                      <strong className="text-[#14382c] block mb-1">
                        Current Development &amp; Pilot Readiness:
                      </strong>
                      {product.readinessDetails}
                    </div>

                    {/* Target Teams */}
                    <div className="pt-2">
                      <span className="text-xs font-mono uppercase text-[#798a80] font-bold block mb-2">
                        Designed For:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#4a5c51]">
                        {product.targetTeams.map((team) => (
                          <li key={team} className="flex items-start gap-2">
                            <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                            <span>{team}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Feature Modules Column */}
                  <div className="lg:col-span-5 bg-[#fbf9f4] p-6 rounded-xl border border-[#e5ded1] space-y-5">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#14382c] font-bold mb-3">
                        Core Functional Modules:
                      </h3>
                      <div className="space-y-3">
                        {product.modules.map((mod) => (
                          <div
                            key={mod.title}
                            className="p-3 bg-white rounded-lg border border-[#eee8dc]"
                          >
                            <h4 className="text-xs font-bold text-[#14382c]">
                              {mod.title}
                            </h4>
                            <p className="text-[11px] text-[#596a60] mt-0.5">
                              {mod.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#eee8dc]">
                      <Link
                        href={product.cta.href}
                        className="dv-btn-primary w-full text-center justify-center !py-2.5 text-xs"
                      >
                        <span>{product.cta.label}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Pilot Inquiries Note */}
        <div className="mt-16 p-8 rounded-xl bg-white border border-[#e5ded1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#14382c]">
              Interested in piloting BizOS or EduOS?
            </h3>
            <p className="text-xs text-[#596a60]">
              We evaluate pilot partnerships based on operational fit and workflow alignment.
            </p>
          </div>
          <Link href="/contact" className="dv-btn-primary whitespace-nowrap">
            <span>Discuss a Pilot Deployment</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
