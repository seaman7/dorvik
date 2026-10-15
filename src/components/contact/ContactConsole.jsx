"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Mail,
  ShieldAlert,
  Info,
  CheckCircle2,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

const SERVICE_OPTIONS = [
  { id: "general", label: "General Project Inquiry", placeholderVolume: "Scope outline" },
  { id: "data-annotation", label: "AI Data & Annotation (BBoxes, Segmentation, Audio)", placeholderVolume: "Estimated images, hours of audio, or text items" },
  { id: "ai-engineering", label: "AI Engineering & Model Training (CV, OCR, RAG)", placeholderVolume: "Expected inputs, latency targets, and model types" },
  { id: "software-development", label: "Software & Business Automation (Portals, CRM, Dashboards)", placeholderVolume: "User roles, primary workflows, integration targets" },
  { id: "gpu-cloud", label: "Managed GPU & Deployment (Sizing, PyTorch, Cloud Setup)", placeholderVolume: "Target GPU tier (A10G, A100), estimated runtime hours" },
  { id: "bizos", label: "BizOS Pilot Inquiry (Operations, Inventory, Invoicing)", placeholderVolume: "Branch count, inventory volume, team size" },
  { id: "eduos", label: "EduOS Pilot Inquiry (Admissions, Submissions, OCR)", placeholderVolume: "Active student count, annual exam batches" },
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 2 weeks)",
  "2 – 4 Weeks",
  "1 – 3 Months",
  "Exploratory / Planning Stage",
];

const CURRENCY_OPTIONS = ["USD ($)", "BDT (৳)", "EUR (€)"];

export function ContactConsole({ initialService = "general", initialRole = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: SERVICE_OPTIONS.some((o) => o.id === initialService)
      ? initialService
      : "general",
    requirements: initialRole ? `I am inquiring regarding the ${initialRole} position.` : "",
    volume: "",
    timeline: TIMELINE_OPTIONS[1],
    budget: "",
    currency: "USD ($)",
  });

  const [preparedBrief, setPreparedBrief] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setPreparedBrief(null);
  }

  function handlePrepareBrief(e) {
    e.preventDefault();

    const selectedServiceObj =
      SERVICE_OPTIONS.find((o) => o.id === form.service) || SERVICE_OPTIONS[0];

    const formattedDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const briefText = `=====================================================
DORVIK AI SERVICES — PROJECT BRIEF
Prepared Locally: ${formattedDate}
=====================================================

CLIENT DETAILS:
- Contact Name: ${form.name}
- Email Address: ${form.email}
- Organization / Company: ${form.company || "Not specified"}

PROJECT SCOPE:
- Target Offering: ${selectedServiceObj.label}
- Technical / Volume Specs: ${form.volume || "To be discussed"}
- Desired Timeline: ${form.timeline}
- Budget Range: ${form.budget ? `${form.currency} ${form.budget}` : "To be scoped"}

PROJECT REQUIREMENTS & OBJECTIVES:
${form.requirements}

-----------------------------------------------------
NOTICE:
This project brief was generated in-browser at ${SITE_CONFIG.baseUrl}.
Official business email setup for dorvik.tech is scheduled for ${SITE_CONFIG.domainLaunchScheduled}.
No credentials, passwords, or unmasked datasets are included.
=====================================================`;

    const briefMarkdown = `# Dorvik Project Brief
**Generated:** ${formattedDate}  
**Reference Domain:** ${SITE_CONFIG.plannedDomain} (Scheduled Launch: ${SITE_CONFIG.domainLaunchScheduled})

## 1. Client Information
- **Name:** ${form.name}
- **Email:** ${form.email}
- **Company / Organization:** ${form.company || "Not specified"}

## 2. Project Parameters
- **Service Offering:** ${selectedServiceObj.label}
- **Technical Volume / Sizing:** ${form.volume || "To be discussed"}
- **Target Timeline:** ${form.timeline}
- **Budget / Currency:** ${form.budget ? `${form.currency} ${form.budget}` : "To be determined during scoping"}

## 3. Scope & Requirements
${form.requirements}

---
*Generated browser-locally via Dorvik Contact Console. No data transmitted without client dispatch.*`;

    setPreparedBrief({
      date: formattedDate,
      serviceTitle: selectedServiceObj.label,
      subject: `Project Inquiry — ${selectedServiceObj.label} — ${form.company || form.name}`,
      text: briefText,
      markdown: briefMarkdown,
    });
  }

  async function handleCopy() {
    if (!preparedBrief) return;
    try {
      await navigator.clipboard.writeText(preparedBrief.text);
      setCopyStatus("Project brief copied to clipboard.");
      setTimeout(() => setCopyStatus(""), 3000);
    } catch {
      setCopyStatus("Failed to copy automatically. Please select text below.");
    }
  }

  function handleDownload(format) {
    if (!preparedBrief) return;
    const content = format === "md" ? preparedBrief.markdown : preparedBrief.text;
    const filename = `Dorvik_Project_Brief_${form.service}_${new Date().toISOString().slice(0, 10)}.${format}`;
    const blob = new Blob([content], { type: format === "md" ? "text/markdown" : "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const selectedServiceObj =
    SERVICE_OPTIONS.find((o) => o.id === form.service) || SERVICE_OPTIONS[0];

  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Header */}
        <header className="max-w-3xl mb-12 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Project Brief &amp; Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            Start a project discussion.
          </h1>
          <p className="text-base sm:text-lg text-[#596a60] leading-relaxed">
            Fill out your technical requirements below to generate a formatted Project Brief.
            We evaluate data volumes, timeline constraints, and deliverable targets before agreeing on scope.
          </p>
        </header>

        {/* Domain Notice Banner */}
        <div className="mb-10 p-5 rounded-xl bg-white border border-[#e5ded1] flex items-start gap-3.5">
          <Info size={19} className="text-[#84cc16] shrink-0 mt-0.5" />
          <div className="text-xs text-[#4a5c51] leading-relaxed space-y-1">
            <strong className="text-[#14382c] block">
              Business Email &amp; Domain Setup Schedule
            </strong>
            <p>
              Domain registration and official business email on <strong>{SITE_CONFIG.plannedDomain}</strong> are scheduled for <strong>{SITE_CONFIG.domainLaunchScheduled}</strong>.
              In accordance with our strict data transparency policy, we do not present unverified email addresses or claim web forms have sent messages without an active backend.
              You can generate, copy, and download your structured brief immediately.
            </p>
          </div>
        </div>

        {/* 2-Column Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#e5ded1] shadow-xs">
            <form onSubmit={handlePrepareBrief} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                  <span>Full Name *</span>
                  <input
                    required
                    type="text"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                  <span>Corporate or Work Email *</span>
                  <input
                    required
                    type="email"
                    maxLength={120}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="e.g. s.jenkins@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                  />
                </label>
              </div>

              {/* Company & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                  <span>Company / Institution</span>
                  <input
                    type="text"
                    maxLength={120}
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="e.g. Acme Health or Dhaka College"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                  />
                </label>

                <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                  <span>Service Offering *</span>
                  <select
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Data Volume or Technical Specs */}
              <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                <span>Estimated Volume / Technical Scale</span>
                <input
                  type="text"
                  maxLength={160}
                  value={form.volume}
                  onChange={(e) => updateField("volume", e.target.value)}
                  placeholder={selectedServiceObj.placeholderVolume}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                />
              </label>

              {/* Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <label className="sm:col-span-2 block text-xs font-semibold text-[#14382c] space-y-1.5">
                  <span>Target Timeline</span>
                  <select
                    value={form.timeline}
                    onChange={(e) => updateField("timeline", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                  <span>Currency</span>
                  <select
                    value={form.currency}
                    onChange={(e) => updateField("currency", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all"
                  >
                    {CURRENCY_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Project Description */}
              <label className="block text-xs font-semibold text-[#14382c] space-y-1.5">
                <span>Project Description &amp; Specific Objectives *</span>
                <textarea
                  required
                  rows={5}
                  maxLength={3000}
                  value={form.requirements}
                  onChange={(e) => updateField("requirements", e.target.value)}
                  placeholder="Describe your current bottlenecks, target deliverables, data formats, and what success looks like for your team."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#d8d0c2] bg-[#fcfbf7] text-sm text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c] transition-all leading-relaxed"
                />
              </label>

              {/* Security Guidance Note */}
              <div className="p-3.5 rounded-lg bg-[#fffbeb] border border-[#fef3c7] flex items-start gap-2.5 text-xs text-[#92400e]">
                <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                <span>
                  <strong>Security Note:</strong> Please do not include passwords, API keys, private tokens, or confidential unmasked datasets in project briefs.
                </span>
              </div>

              {/* Submit / Prepare Button */}
              <div className="pt-2">
                <button type="submit" className="dv-btn-primary w-full py-3">
                  <span>Prepare Project Brief</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-center text-[#798a80] mt-2 font-mono">
                  Generates a clean text/markdown brief locally in your browser.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Brief Output & Guidance */}
          <div className="lg:col-span-5 space-y-6">
            {/* If Brief is Prepared */}
            {preparedBrief ? (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-[#14382c] shadow-md space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-[#eee8dc]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#84cc16]" />
                    <span className="text-xs font-mono font-bold text-[#14382c]">
                      PROJECT BRIEF GENERATED
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#edf5f1] text-[#14382c]">
                    Ready to Save
                  </span>
                </div>

                <div className="text-xs text-[#4a5c51] leading-relaxed">
                  Your brief has been compiled with all technical specifications.
                  You can copy the brief or download it directly to your device.
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="dv-btn-primary w-full justify-center !py-2.5 text-xs"
                  >
                    <Copy size={14} />
                    <span>Copy Formatted Brief</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleDownload("txt")}
                      className="dv-btn-secondary w-full justify-center !py-2 text-xs"
                    >
                      <Download size={13} />
                      <span>Download .TXT</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDownload("md")}
                      className="dv-btn-secondary w-full justify-center !py-2 text-xs"
                    >
                      <Download size={13} />
                      <span>Download .MD</span>
                    </button>
                  </div>

                  {copyStatus && (
                    <p className="text-center text-xs font-mono text-[#15803d]" role="status">
                      {copyStatus}
                    </p>
                  )}
                </div>

                {/* Email Dispatch Information */}
                <div className="p-3.5 bg-[#fbf9f4] rounded-lg border border-[#e5ded1] text-xs text-[#596a60] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#14382c]">
                    <Mail size={14} />
                    <span>Email Dispatch Information</span>
                  </div>
                  <p>
                    Once email routing is activated on {SITE_CONFIG.domainLaunchScheduled}, inquiries will be received at <strong>{SITE_CONFIG.contact.futureMailboxes.hello}</strong>.
                    Until then, keep your downloaded brief saved for consultation.
                  </p>
                </div>

                {/* Collapsible Preview */}
                <details className="text-xs border-t border-[#eee8dc] pt-3">
                  <summary className="font-semibold text-[#14382c] cursor-pointer hover:underline py-1">
                    Preview Generated Brief Content
                  </summary>
                  <pre className="mt-2 p-3 bg-[#fbf9f4] rounded text-[11px] font-mono leading-relaxed overflow-x-auto max-h-[220px] text-[#293830] border border-[#eee8dc]">
                    {preparedBrief.text}
                  </pre>
                </details>
              </div>
            ) : (
              /* Default Guidance Card */
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#e5ded1] space-y-5">
                <div className="border-b border-[#eee8dc] pb-3">
                  <span className="text-[10px] font-mono uppercase text-[#798a80]">
                    What Happens Next
                  </span>
                  <h3 className="text-base font-bold text-[#14382c] mt-0.5">
                    Our Engagement Cadence
                  </h3>
                </div>

                <ol className="space-y-4 text-xs text-[#4a5c51]">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#edf5f1] text-[#14382c] font-mono font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-[#14382c] block">
                        Prepare &amp; Save Your Brief
                      </strong>
                      Complete the form with your volume estimates and technical goals.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#edf5f1] text-[#14382c] font-mono font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-[#14382c] block">
                        Technical Discovery Discussion
                      </strong>
                      We review constraints, edge cases, and define acceptance criteria.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#edf5f1] text-[#14382c] font-mono font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-[#14382c] block">
                        Qualification Sample / Pilot
                      </strong>
                      For annotation and AI projects, we calibrate agreement before volume ramp.
                    </div>
                  </li>
                </ol>

                <div className="pt-2 border-t border-[#eee8dc] text-xs text-[#798a80]">
                  <p>
                    Operating from <strong>Dhaka, Bangladesh</strong>.
                    Dual Bangla &amp; English support.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
