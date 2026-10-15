import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Database, Server, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 border-b border-[#e5ded1] bg-radial from-[#ffffff] via-[#fbf9f4] to-[#f7f3eb]">
      <div className="dv-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="dv-eyebrow">
              <span className="dv-eyebrow-dot" />
              <span>Technology &amp; Engineering Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14382c] leading-[1.12]">
              AI data, custom software, and managed compute{" "}
              <span className="text-[#1e4d3c] font-medium">for growing teams.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4a5c51] leading-relaxed max-w-xl">
              Dorvik is a Bangladesh-based technology engineering business. We deliver
              high-accuracy dataset labeling, computer vision &amp; OCR models, bespoke
              business software, and hands-on managed GPU deployments for ambitious teams.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="dv-btn-primary">
                <span>Discuss a Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="dv-btn-secondary">
                <span>Explore Services</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Credibility highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#596a60]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#84cc16]" />
                Human-in-the-loop QA
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#84cc16]" />
                Bangla &amp; English Bilingual
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#84cc16]" />
                Quantifiable Qualification Pilots
              </span>
            </div>
          </div>

          {/* Right Visual Composition: Data-to-Deployment Architecture */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-[#e5ded1] p-6 shadow-md space-y-5 select-none">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#eee8dc]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16]" />
                  <span className="text-xs font-mono font-bold text-[#14382c] tracking-wide">
                    DATA-TO-DEPLOYMENT PIPELINE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#edf5f1] text-[#14382c] font-medium">
                  Dhaka Lab
                </span>
              </div>

              {/* Composition Stages */}
              <div className="space-y-3">
                {/* Stage 1: Data & Annotation */}
                <div className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                      <Database size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#14382c]">
                        01 / AI Data &amp; Annotation
                      </h4>
                      <p className="text-[11px] text-[#596a60]">
                        Image boxes, polygon segmentation &amp; audio transcription
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#f4fce3] text-[#3f6212] border border-[#d9f99d]">
                    COCO / YOLO
                  </span>
                </div>

                {/* Downward Connector */}
                <div className="flex justify-center -my-1 text-[#a3b8ad]">
                  <span className="text-xs font-mono">↓</span>
                </div>

                {/* Stage 2: Applied AI Engineering */}
                <div className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#14382c]">
                        02 / AI Engineering &amp; OCR
                      </h4>
                      <p className="text-[11px] text-[#596a60]">
                        Computer vision, document extraction, fine-tuning
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#edf5f1] text-[#14382c]">
                    FastAPI / ONNX
                  </span>
                </div>

                {/* Downward Connector */}
                <div className="flex justify-center -my-1 text-[#a3b8ad]">
                  <span className="text-xs font-mono">↓</span>
                </div>

                {/* Stage 3: Managed GPU Compute */}
                <div className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                      <Server size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#14382c]">
                        03 / Managed GPU Execution
                      </h4>
                      <p className="text-[11px] text-[#596a60]">
                        Workload sizing, Docker environments &amp; idle shutdown
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#edf5f1] text-[#14382c]">
                    Cloud Sizing
                  </span>
                </div>

                {/* Downward Connector */}
                <div className="flex justify-center -my-1 text-[#a3b8ad]">
                  <span className="text-xs font-mono">↓</span>
                </div>

                {/* Stage 4: Production Software */}
                <div className="p-3.5 rounded-lg bg-[#fbf9f4] border border-[#e5ded1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                      <Terminal size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#14382c]">
                        04 / Custom Software &amp; Portals
                      </h4>
                      <p className="text-[11px] text-[#596a60]">
                        Web platforms, client portals, BizOS &amp; EduOS
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#edf5f1] text-[#14382c]">
                    Next.js / Node
                  </span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-2 text-[11px] text-[#798a80] font-mono flex items-center justify-between">
                <span>CLIENT-FOCUSED DELIVERY</span>
                <span>CLEAR DELIVERABLE SCOPE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
