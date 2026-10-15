import Link from "next/link";
import { ArrowUpRight, Database, Cpu, Terminal, Server, Check } from "lucide-react";
import { CORE_SERVICES } from "@/lib/servicesData";

const SERVICE_ICONS = {
  "data-annotation": Database,
  "ai-engineering": Cpu,
  "software-development": Terminal,
  "gpu-cloud": Server,
};

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#fbf9f4]">
      <div className="dv-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Core Technology Offerings</span>
            </div>
            <h2 className="dv-section-title">
              What we engineer for clients.
            </h2>
          </div>
          <Link href="/services" className="dv-link-arrow">
            <span>Explore all service specifications</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Terminal;

            return (
              <article
                key={service.id}
                className="dv-card flex flex-col justify-between group hover:border-[#14382c] transition-all duration-200"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#eee8dc]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#edf5f1] text-[#14382c] flex items-center justify-center group-hover:bg-[#14382c] group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#798a80]">
                        {service.number} / CORE SERVICE
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f4efe4] text-[#14382c]">
                      {service.eyebrow}
                    </span>
                  </div>

                  {/* Heading & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-[#14382c] group-hover:text-[#0c241c] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#596a60] font-medium mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#4a5c51] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Capabilities Bulleted List */}
                  <div className="pt-2 border-t border-[#f4efe4] space-y-2">
                    <span className="text-[11px] font-mono uppercase text-[#798a80] block font-semibold">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#4a5c51]">
                      {service.capabilities.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-[#eee8dc] flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14382c] hover:text-[#0c241c] hover:underline"
                  >
                    <span>View full service scope</span>
                    <ArrowUpRight size={14} />
                  </Link>

                  <Link
                    href={service.cta.href}
                    className="text-xs font-semibold px-3 py-1.5 bg-[#edf5f1] hover:bg-[#14382c] text-[#14382c] hover:text-white rounded-md transition-colors"
                  >
                    {service.cta.label.split(" ")[0]}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
