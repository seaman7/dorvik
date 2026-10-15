import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DorvikBrand } from "@/components/home/DorvikBrand";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e271f] text-[#d6e2db] border-t border-[#1b3d31] pt-16 pb-12 font-sans">
      <div className="dv-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#1b3d31]">
          {/* Brand & Positioning Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="Dorvik home">
              <DorvikBrand light={true} />
            </Link>
            <p className="text-sm text-[#9eb5a9] max-w-sm leading-relaxed">
              {SITE_CONFIG.positioning}
            </p>
            <div className="pt-2 text-xs text-[#79998b] space-y-1">
              <p>Operating from Dhaka, Bangladesh.</p>
              <p>Serving technical teams and businesses worldwide.</p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153e30] border border-[#245744] text-[11px] font-mono text-[#a3e635]">
                <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
                Planned domain {SITE_CONFIG.plannedDomain} launching Oct 18, 2026
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#a3e635] font-semibold">
              Services
            </h2>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link
                  href="/services/data-annotation"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  AI Data & Annotation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-engineering"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  AI Engineering & Models
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  Software & Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gpu-cloud"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  Managed GPU & Cloud
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs text-[#a3e635] hover:underline"
                >
                  <span>All Services</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#a3e635] font-semibold">
              Products
            </h2>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link
                  href="/bizos"
                  className="text-[#9eb5a9] hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>BizOS</span>
                  <span className="text-[10px] font-mono text-[#79998b]">Operations</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/eduos"
                  className="text-[#9eb5a9] hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>EduOS</span>
                  <span className="text-[10px] font-mono text-[#79998b]">Education</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs text-[#a3e635] hover:underline"
                >
                  <span>Products Overview</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Inquiries Column */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#a3e635] font-semibold">
              Company
            </h2>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link
                  href="/about"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  About Dorvik
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-we-work"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#9eb5a9] hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#9eb5a9] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Project Inquiries</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9eb5a9] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#79998b]">
          <p>© {currentYear} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
            <a
              href="#main-content"
              className="hover:text-white transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Export as DorvikFooter for compatibility
export { Footer as DorvikFooter };
