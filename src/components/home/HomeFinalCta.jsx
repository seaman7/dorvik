import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageSquareText } from "lucide-react";

export function HomeFinalCta() {
  return (
    <section className="py-20 bg-[#14382c] text-white border-t border-[#1b4334]">
      <div className="dv-container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4334] border border-[#2b5e4b] text-xs font-mono text-[#a3e635]">
            <MessageSquareText size={14} />
            <span>LET’S WORK TOGETHER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have a dataset, model, or software challenge to solve?
          </h2>

          <p className="text-sm sm:text-base text-[#b7cfc3] max-w-xl mx-auto leading-relaxed">
            Tell us about your requirements, data volume, and target outcomes.
            We will help you define a clear scope, run a qualification sample, and build a delivery roadmap.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#a3e635] text-[#0c241c] font-bold text-sm hover:bg-[#b2f04b] transition-all shadow-md"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#1b4334] text-white font-semibold text-sm hover:bg-[#235341] border border-[#2b5e4b] transition-all"
            >
              <span>Explore All Services</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <p className="text-xs text-[#799b8d] pt-2">
            Prepare and download a structured project brief directly in your browser.
          </p>
        </div>
      </div>
    </section>
  );
}
