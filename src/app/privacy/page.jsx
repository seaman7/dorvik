import Link from "next/link";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy & Data Governance Policy — Dorvik",
  description:
    "Data governance practices, client intellectual property protections, and privacy standards at Dorvik AI Services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="dv-page py-16">
      <div className="dv-container max-w-4xl">
        {/* Header */}
        <header className="pb-8 border-b border-[#e5ded1] space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Data Governance &amp; Sovereignty</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14382c] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#798a80]">
            Effective Date: October 2026 · Scheduled Domain Alignment: {SITE_CONFIG.domainLaunchScheduled}
          </p>
        </header>

        {/* Content Sections */}
        <div className="py-10 space-y-10 text-sm text-[#4a5c51] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#14382c]">
              1. Commitment to Data Integrity &amp; Client Ownership
            </h2>
            <p>
              Dorvik AI Services (&quot;Dorvik&quot;, &quot;we&quot;, &quot;us&quot;) provides AI data annotation,
              computer vision engineering, custom software, and managed GPU deployment services. We operate
              under strict principles of data minimization and client sovereignty. We do not monetize, broker,
              or train foundational models on client-provided datasets without explicit authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#14382c]">
              2. Information Collected via Project Inquiries
            </h2>
            <p>
              When prospective clients prepare an inquiry through our project console, we collect only the
              information explicitly provided:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#293830]">
              <li>Full Name and business/corporate email address</li>
              <li>Company or institutional organization name</li>
              <li>Project scope, technical specifications, and volume estimates</li>
              <li>Target timelines and optional budget parameters</li>
            </ul>
            <p>
              Project briefs generated locally in your browser are not stored in third-party tracking databases
              without direct transmission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#14382c]">
              3. Client Datasets &amp; Non-Disclosure Agreements (NDAs)
            </h2>
            <p>
              In the course of providing data annotation, model training, or software engineering services,
              all raw images, videos, audio recordings, documents, and annotated ground-truth files remain
              the exclusive intellectual property of the client.
            </p>
            <p>
              All engineers and annotators sign binding confidentiality agreements. Project files are processed
              in segregated environments and deleted or handed over in accordance with client contractual terms.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#eee8dc]">
            <h2 className="text-lg font-bold text-[#14382c]">
              4. Cookies &amp; Telemetry
            </h2>
            <p>
              Our website uses strictly necessary functional headers to support responsive rendering,
              accessible navigation, and security. We do not use third-party tracking cookies or advertising pixels.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#eee8dc]">
            <h2 className="text-lg font-bold text-[#14382c]">
              5. Legal Entity &amp; Contact Inquiries
            </h2>
            <p>
              For legal inquiries, NDA execution, or data protection questions, please prepare a project brief
              via our <Link href="/contact" className="text-[#14382c] font-semibold underline">Contact Console</Link> or
              consult our Dhaka operating office.
            </p>
            <p className="text-xs font-mono text-[#798a80]">
              Corporate Hub: Dhaka, Bangladesh · Operating under laws of the People&apos;s Republic of Bangladesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
