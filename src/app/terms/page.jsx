import Link from "next/link";
import { FileText, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata = {
  title: "Terms of Engagement & Service — Dorvik",
  description: "Terms of service, intellectual property ownership, and contractual principles at Dorvik AI Services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container max-w-4xl">
        {/* Header */}
        <header className="pb-8 border-b border-[#e5ded1] space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Contractual Principles</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14382c] tracking-tight">
            Terms of Service &amp; Engagement
          </h1>
          <p className="text-xs font-mono text-[#798a80]">
            Effective Date: October 2026 · Scheduled Domain Alignment: {SITE_CONFIG.domainLaunchScheduled}
          </p>
        </header>

        {/* Sections */}
        <div className="py-10 space-y-10 text-sm text-[#4a5c51] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#14382c]">1. Professional Scope &amp; Statements of Work (SOWs)</h2>
            <p>
              Dorvik AI Services provides AI data annotation, computer vision engineering, bespoke software development,
              and managed GPU cloud compute. All client engagements are executed under dedicated Statements of Work (SOWs)
              that explicitly define deliverables, acceptance criteria, milestone timelines, and pricing schedules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#14382c]">2. Intellectual Property &amp; Source Code Ownership</h2>
            <p>
              All custom software, tailored model configurations, and annotated datasets engineered for a client become
              the exclusive intellectual property of the client upon fulfillment of agreed milestone terms. Dorvik transfers
              all source code, documentation, and trained artifacts with zero proprietary lock-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#14382c]">3. Acceptance Benchmarks &amp; Quality Audits</h2>
            <p>
              Data annotation projects operate under agreed qualification samples and inter-annotator agreement thresholds.
              Software projects operate under bi-weekly demonstration milestones and defined user acceptance testing (UAT).
              We warrant that delivered deliverables substantially conform to agreed technical specifications.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#eee8dc]">
            <h2 className="text-lg font-bold text-[#14382c]">4. Third-Party Infrastructure &amp; Cloud Charges</h2>
            <p>
              For managed GPU and cloud hosting services, all underlying cloud compute, storage, and networking charges
              from third-party providers (e.g. AWS, RunPod, Lambda Labs, GCP) are billed directly to the client or itemized
              separately from Dorvik&apos;s engineering management fees.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#eee8dc]">
            <h2 className="text-lg font-bold text-[#14382c]">5. Inquiries &amp; Legal Consultation</h2>
            <p>
              To execute a Master Services Agreement (MSA) or discuss specific project terms, please generate a brief
              via our <Link href="/contact" className="text-[#14382c] font-semibold underline">Contact Console</Link>.
            </p>
            <p className="text-xs font-mono text-[#798a80]">
              Jurisdiction: Dhaka, Bangladesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
