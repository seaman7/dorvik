import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, GraduationCap, Users, FileText, ScanText, CheckCircle2, AlertCircle } from "lucide-react";
import { getProductBySlug } from "@/lib/productsData";

const product = getProductBySlug("eduos");

export const metadata = {
  title: "EduOS — Connected Education & Assessment Software",
  description:
    "Evolving education platform: student records, coursework submissions, OCR-assisted document processing, and teacher-reviewed grading workflows.",
  alternates: {
    canonical: "/eduos",
  },
};

const MODULE_ICONS = {
  admissions: Users,
  submissions: FileText,
  "ocr-workflow": ScanText,
  "teacher-grading": CheckCircle2,
  transparency: GraduationCap,
};

export default function EduOSPage() {
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
              Education Technology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            {product.name}: Connected Education &amp; Assessment
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
            <Link href="/services/ai-engineering" className="dv-btn-secondary">
              <span>OCR &amp; Document Extraction</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </header>

        {/* Readiness Alert */}
        <div className="mb-14 p-5 rounded-xl bg-white border border-[#e5ded1] flex items-start gap-3">
          <AlertCircle size={18} className="text-[#84cc16] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs leading-relaxed text-[#4a5c51]">
            <strong className="text-[#14382c] block">
              Prototype &amp; Pilot Readiness
            </strong>
            <p>
              EduOS features are functional in demonstration environments. Institutional rollouts
              are customized around the school, college, or coaching centre's specific grading
              rubrics, evaluation matrices, and administrative approval policies.
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <section className="mb-16 space-y-8">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Core Modules</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              Designed around teachers and learners.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.modules.map((mod) => {
              const Icon = MODULE_ICONS[mod.id] || GraduationCap;

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

        {/* Institution Workflows */}
        <section className="mb-16 bg-white p-8 lg:p-12 rounded-2xl border border-[#e5ded1] space-y-8">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Institutional Fit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14382c]">
              Built for diverse learning organizations.
            </h2>
            <p className="text-xs text-[#596a60] mt-1">
              From fast-paced test prep coaching to university faculty workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.institutions.map((inst) => (
              <div
                key={inst.name}
                className="p-5 rounded-xl bg-[#fbf9f4] border border-[#eee8dc] space-y-2"
              >
                <h3 className="text-sm font-bold text-[#14382c]">{inst.name}</h3>
                <p className="text-xs text-[#4a5c51] leading-relaxed">
                  {inst.context}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Bar */}
        <div className="p-8 rounded-xl bg-[#14382c] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Interested in piloting EduOS for your institution?
            </h3>
            <p className="text-xs text-[#b7cfc3]">
              Share your approximate student volume and administrative priorities to discuss a pilot.
            </p>
          </div>
          <Link
            href="/contact?service=eduos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-xs hover:bg-[#b2f04b] transition-all whitespace-nowrap"
          >
            <span>Discuss EduOS Pilot</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
