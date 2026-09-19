"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TEMPLATES = [
  {
    id: "fashion",
    name: "Fashion & Retail Stores",
    description: "Built for multi-branch clothing brands, boutiques, and footwear retailers.",
    modules: ["Central & Branch Inventory", "Barcode Scanning POS", "VIP Customer CRM", "Automated WhatsApp Promos", "bKash & Card Payments"],
    highlight: "Supports multiple outlet stock transfers and low-stock alerts.",
  },
  {
    id: "garments",
    name: "Garments & Manufacturing",
    description: "Designed for apparel export houses, factories, and textile workshops.",
    modules: ["Raw Fabric Inventory", "Production Batch Tracking", "Export Proforma Invoices", "Sub-contractor Accounts", "USD / Crypto Escrow"],
    highlight: "Tracks fabric yardage, cutting stages, and multi-currency billing.",
  },
  {
    id: "clinic",
    name: "Clinics & Diagnostic Centers",
    description: "Tailored for private healthcare practices, dental clinics, and diagnostics.",
    modules: ["Doctor Chamber Scheduling", "Patient Medical Records", "Test & Prescription Billing", "SMS/WhatsApp Report Dispatch", "Daily Cash Collection"],
    highlight: "Patient history tracking with instant automated digital memo generation.",
  },
  {
    id: "restaurant",
    name: "Restaurants & Cloud Kitchens",
    description: "Full suite for dine-in restaurants, cafes, and delivery brands.",
    modules: ["Table & KOT Management", "Recipe Costing & Ingredients", "Delivery Platform Sync", "Split Billing & bKash QR", "Loyalty Rewards"],
    highlight: "Real-time kitchen order tickets (KOT) and ingredient cost analysis.",
  },
  {
    id: "coaching",
    name: "Coaching Centers & Academies",
    description: "End-to-end management for schools, institutes, and tutoring networks.",
    modules: ["Student & Batch Directory", "Monthly Tuition Invoicing", "bKash Auto-Fee Collection", "Attendance & SMS Alerts", "Teacher Payroll"],
    highlight: "Automates monthly fee reminders and fee collection reconciliation.",
  },
  {
    id: "agency",
    name: "Software & Digital Studios",
    description: "All-in-one OS for digital agencies, creative studios, and tech consultancies.",
    modules: ["Client Deal Pipeline (CRM)", "Milestone Billing & Escrow", "Developer Timesheets", "Stripe & Polygon USDT Rail", "Client Portal"],
    highlight: "Cross-border instant crypto and credit card settlement without bank friction.",
  },
];

export default function BizOSPage() {
  const [activeTemplate, setActiveTemplate] = useState(TEMPLATES[0]);
  const [promptInput, setPromptInput] = useState(
    "I run a clothing business with 3 branches in Dhaka. I need inventory tracking, sales POS, customer CRM, and automated WhatsApp promotions."
  );
  const [builderStep, setBuilderStep] = useState("ready"); // 'ready' | 'generating' | 'done'

  // Early access form state
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "Retail & E-commerce",
    contactName: "",
    phone: "",
    email: "",
    branchesCount: "1",
    notes: "",
  });
  const [formStatus, setFormStatus] = useState("idle");

  const handleSimulateBuild = (e) => {
    e.preventDefault();
    setBuilderStep("generating");
    setTimeout(() => {
      setBuilderStep("done");
    }, 900);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-neutral-200 pt-24 pb-28 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-cyan-400 font-semibold">BizOS Platform</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>AI &amp; BLOCKCHAIN-POWERED BUSINESS OPERATING SYSTEM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Build, Automate, and Operate Your Business with AI &amp; Blockchain.
          </h1>

          <p className="mt-5 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            Instead of juggling separate CRM, sales, inventory, accounting, and marketing software, BizOS gives you one customizable platform. Integrated with local rails (bKash, Nagad, SSLCOMMERZ) and <strong className="text-white">Blockchain Smart Contracts (Polygon/Base L2)</strong> for instant cross-border settlement with zero bank delays.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#sandbox"
              className="px-6 py-3 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs tracking-tight transition-colors shadow-md"
            >
              Try AI Builder Demo &darr;
            </a>
            <a
              href="#blockchain"
              className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-cyan-500/30 text-cyan-300 font-mono text-xs transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>How Blockchain Works in BizOS &darr;</span>
            </a>
            <a
              href="#waitlist"
              className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium text-xs transition-colors"
            >
              Request Early Access
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              ✓ No-Code AI Builder
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              ✓ bKash &amp; Nagad Ready
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-cyan-500/30 text-cyan-300">
              ✓ Blockchain Smart Contract Escrow (Polygon / Base)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
              ✓ Multi-Branch Inventory &amp; POS
            </span>
          </div>
        </div>

        {/* The Equation Strip */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-20">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            THE 5 PILLARS OF BIZOS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            <div className="p-4 bg-black/40 rounded-xl border border-neutral-800/80">
              <span className="text-white font-bold text-sm block mb-1">1. AI Builder</span>
              <p className="text-xs text-neutral-400">Natural language prompts synthesize custom databases, forms, and views.</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-neutral-800/80">
              <span className="text-white font-bold text-sm block mb-1">2. Operations</span>
              <p className="text-xs text-neutral-400">Unified sales, barcode POS, multi-branch stock, and customer CRM.</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-neutral-800/80">
              <span className="text-white font-bold text-sm block mb-1">3. Automations</span>
              <p className="text-xs text-neutral-400">Automate WhatsApp payment reminders, reorder alerts, and receipts.</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-neutral-800/80">
              <span className="text-white font-bold text-sm block mb-1">4. AI Intelligence</span>
              <p className="text-xs text-neutral-400">Ask strategic questions about your margins, branch profits, and trends.</p>
            </div>
            <div className="p-4 bg-black/40 rounded-xl border border-cyan-500/30 bg-cyan-950/10">
              <span className="text-cyan-300 font-bold text-sm block mb-1">5. Blockchain Escrow</span>
              <p className="text-xs text-neutral-300">USDT/USDC smart contract settlement on Polygon &amp; Base with immutable audit trails.</p>
            </div>
          </div>
        </div>

        {/* Interactive AI Prompt-to-Software Sandbox */}
        <div id="sandbox" className="scroll-mt-24 bg-[#0C0C12] border border-neutral-800 rounded-2xl p-6 sm:p-8 mb-20 shadow-2xl">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              LIVE SIMULATOR
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Prompt-to-Software Architecture Demo
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Test how BizOS synthesizes an operational business workspace from a plain English or Bengali sentence.
            </p>
          </div>

          <form onSubmit={handleSimulateBuild} className="space-y-4 mb-8">
            <div className="relative">
              <textarea
                rows={3}
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full bg-black/90 border border-neutral-700/80 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                placeholder="Describe your business in plain English or Bengali..."
              />
              <button
                type="submit"
                className="absolute right-3 bottom-3 px-4 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Generate Workspace</span>
                <span>&rarr;</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-neutral-400 font-mono">Sample Presets:</span>
              <button
                type="button"
                onClick={() => {
                  setPromptInput("Clothing retail brand with 3 branches in Dhaka, POS sales, barcode inventory, and WhatsApp promotions.");
                  setBuilderStep("ready");
                }}
                className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              >
                Retail &amp; Fashion
              </button>
              <button
                type="button"
                onClick={() => {
                  setPromptInput("Diagnostic clinic with 10 doctors, appointment scheduling, lab test invoicing, and SMS report dispatch.");
                  setBuilderStep("ready");
                }}
                className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              >
                Medical Clinic
              </button>
              <button
                type="button"
                onClick={() => {
                  setPromptInput("Digital software agency with remote developers, milestone escrow, USD Stripe invoices, and Web3 crypto payments.");
                  setBuilderStep("ready");
                }}
                className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
              >
                Software Studio
              </button>
            </div>
          </form>

          {/* Generated Result View */}
          <div className="bg-black/60 border border-neutral-800 rounded-xl p-5">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${builderStep === "generating" ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`} />
                <span>Status: {builderStep === "generating" ? "Synthesizing Schema..." : "Active Dynamic Workspace"}</span>
              </div>
              <span className="text-neutral-500">PostgreSQL JSONB Engine</span>
            </div>

            {builderStep === "generating" ? (
              <div className="py-12 text-center text-xs font-mono text-cyan-400 animate-pulse">
                Parsing intent &bull; Generating custom relational models &bull; Binding local payment gateways...
              </div>
            ) : (
              <div className="pt-5 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase">Operational Modules</span>
                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-200">
                      <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> Multi-Branch Inventory Tracking</li>
                      <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> Barcode POS &amp; Cash Drawer</li>
                      <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> Customer VIP Directory &amp; History</li>
                      <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">✓</span> Automated WhatsApp Re-order Bot</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase">Payment &amp; Multi-Rail</span>
                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-200">
                      <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">●</span> bKash / Nagad Instant Merchant QR</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">●</span> SSLCOMMERZ Card Gateway</li>
                      <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">●</span> Stripe USD + Polygon USDT Escrow</li>
                      <li className="flex items-center gap-2"><span className="text-neutral-400 font-bold">●</span> Thermal Receipt / PDF Memo</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-neutral-900/60 rounded-lg border border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase">Automated AI Insights</span>
                    <div className="mt-2 text-xs text-neutral-300 space-y-2">
                      <p className="bg-black/40 p-2 rounded border border-neutral-800/80">
                        <strong className="text-white block font-mono text-[11px]">AI SUGGESTION:</strong>
                        Stock of &ldquo;Item #A42&rdquo; is running low in Dhanmondi branch while Gulshan has 48 units surplus. Auto-transfer recommendation generated.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-neutral-800/60 text-xs text-neutral-400">
                  <span>Ready to deploy for your company</span>
                  <a
                    href="#waitlist"
                    className="text-white hover:text-cyan-400 font-medium font-mono transition-colors"
                  >
                    Get Early Access for Your Business &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Industry Templates Showcase */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              PRE-BUILT TEMPLATES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Ready-to-Deploy for Any Industry
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Select an industry to see pre-configured modules, database fields, and payment integrations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => setActiveTemplate(tmpl)}
                className={`p-3 rounded-xl text-left transition-colors border text-xs font-medium ${
                  activeTemplate.id === tmpl.id
                    ? "bg-neutral-800 border-neutral-600 text-white shadow-sm"
                    : "bg-neutral-900/40 border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {tmpl.name}
              </button>
            ))}
          </div>

          <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
              <div>
                <h3 className="text-xl font-bold text-white">{activeTemplate.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">{activeTemplate.description}</p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
                Ready to Deploy
              </span>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-mono text-white font-semibold uppercase tracking-wider mb-3">
                  Included Modules
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeTemplate.modules.map((mod, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-white font-semibold uppercase tracking-wider mb-3">
                  Core Advantage
                </h4>
                <div className="p-4 rounded-xl bg-black/40 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {activeTemplate.highlight}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-mono">Customizable in real-time</span>
              <a
                href="#waitlist"
                className="text-xs font-mono text-white hover:text-cyan-400 font-semibold transition-colors"
              >
                Deploy this template &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Blockchain Architecture Section */}
        <div id="blockchain" className="scroll-mt-24 mb-20 bg-[#0C0C12] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>THE BIZOS BLOCKCHAIN PROTOCOL</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Why Blockchain? Solving the Global Cross-Border Payment Problem.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              For businesses in Bangladesh and emerging economies, international SWIFT bank wires take 3–5 days, deduct 4–7% in fees, and suffer from strict banking limits. BizOS integrates smart contracts to enable instant global trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-6 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold text-base">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Instant Sub-Cent Settlement (Polygon &amp; Base)
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Accept USDT and USDC from clients in the US, Europe, or Middle East. Transactions finalize in 2 seconds with gas fees below $0.01—straight to your business treasury wallet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold text-base">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Milestone Smart Contract Escrow
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Clients lock funds in a smart contract. As project milestones are verified and completed, funds are programmatically released with zero chargeback fraud and zero third-party dispute bias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/50 border border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold text-base">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Tamper-Proof Invoices &amp; Audit Trail
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every finalized invoice and payment confirmation is cryptographically hashed on IPFS and registered on-chain. Provides unalterable verification for global audits, taxation, and legal compliance.
              </p>
            </div>
          </div>

          {/* Rail Comparison Strip */}
          <div className="mt-8 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-emerald-400 font-bold">Local Rail:</span>
              <span>bKash / Nagad / SSLCOMMERZ (BDT)</span>
              <span className="text-neutral-600">&bull;</span>
              <span className="text-cyan-400 font-bold">Blockchain Rail:</span>
              <span>Polygon / Base L2 (USDT / USDC)</span>
            </div>
            <span className="text-neutral-500">EVM Smart Contract Compatible</span>
          </div>
        </div>

        {/* Early Access Onboarding Form */}
        <div id="waitlist" className="scroll-mt-24 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              EARLY ADOPTER ACCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Be First to Deploy BizOS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              We are onboarding pilot businesses in Bangladesh and globally. Tell us about your operations, and our founding engineering team will set up your custom BizOS workspace.
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full mx-auto flex items-center justify-center text-xl mb-3 font-bold">
                ✓
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Workspace Request Received!
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto mb-4">
                Thank you, <strong className="text-white">{formData.contactName}</strong>. Our team will contact you on WhatsApp ({formData.phone}) within 24 hours to demo your business workspace.
              </p>
              <button
                onClick={() => setFormStatus("idle")}
                className="px-5 py-2 rounded-lg bg-white text-black font-semibold text-xs"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Business / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Apparel or MedCare Clinic"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                  >
                    <option value="Retail & Fashion">Retail &amp; Fashion</option>
                    <option value="Garments & Manufacturing">Garments &amp; Manufacturing</option>
                    <option value="Clinic & Healthcare">Clinic &amp; Healthcare</option>
                    <option value="Restaurant & Food">Restaurant &amp; Food</option>
                    <option value="Coaching & Education">Coaching &amp; Education</option>
                    <option value="Software & Agency">Software &amp; Digital Agency</option>
                    <option value="E-commerce & Wholesale">E-commerce &amp; Wholesale</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="owner@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  What modules do you need most? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 3 branches inventory, barcode POS, automated WhatsApp receipts, and bKash payment..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-neutral-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-3 rounded-xl bg-white text-black hover:bg-neutral-200 font-semibold text-xs transition-colors shadow-md"
                >
                  {formStatus === "submitting"
                    ? "Submitting Workspace Request..."
                    : "Request BizOS Workspace Setup &rarr;"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
