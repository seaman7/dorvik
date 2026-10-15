import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Boxes, GraduationCap } from "lucide-react";
import { PRODUCTS } from "@/lib/productsData";

export function ProductsPreview() {
  return (
    <section className="py-20 bg-[#fbf9f4] border-t border-[#e5ded1]">
      <div className="dv-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Proprietary Software Systems</span>
            </div>
            <h2 className="dv-section-title">
              Evolving software products.
            </h2>
          </div>
          <Link href="/products" className="dv-link-arrow">
            <span>Explore all products</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 2-Column Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => {
            const isBizOS = product.id === "bizos";
            const Icon = isBizOS ? Boxes : GraduationCap;

            return (
              <div
                key={product.id}
                className="dv-card flex flex-col justify-between group hover:border-[#14382c] transition-all duration-200"
              >
                <div className="space-y-5">
                  {/* Readiness Banner */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#eee8dc]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#14382c]">
                          {product.name}
                        </h3>
                        <span className="text-[11px] font-mono text-[#798a80]">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#f4fce3] text-[#3f6212] border border-[#d9f99d]">
                      {product.badge}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <div>
                    <h4 className="text-base font-semibold text-[#14382c] mb-1.5">
                      {product.tagline}
                    </h4>
                    <p className="text-sm text-[#4a5c51] leading-relaxed">
                      {product.summary}
                    </p>
                  </div>

                  {/* Modules Preview List */}
                  <div className="p-4 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] space-y-2.5">
                    <span className="text-[10px] font-mono uppercase text-[#798a80] font-bold block">
                      Core Feature Modules:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#293830]">
                      {product.modules.slice(0, 4).map((mod) => (
                        <li key={mod.title} className="flex items-start gap-1.5">
                          <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                          <span>{mod.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Honest Readiness Footnote */}
                  <p className="text-xs text-[#596a60] italic">
                    <strong>Readiness:</strong> {product.readinessDetails}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-[#eee8dc] flex items-center justify-between">
                  <Link
                    href={`/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14382c] hover:underline"
                  >
                    <span>View {product.name} specifications</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <Link
                    href={product.cta.href}
                    className="dv-btn-secondary !py-2 !px-3 text-xs"
                  >
                    <span>Inquire About Pilot</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
