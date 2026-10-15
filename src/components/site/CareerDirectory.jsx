"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search, ChevronDown, MapPin, Clock, X, Check, Briefcase } from "lucide-react";
import { OPEN_POSITIONS } from "@/lib/careersData";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function CareerDirectory() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All teams");

  const teams = ["All teams", ...new Set(OPEN_POSITIONS.map((job) => job.team))];

  const jobs = OPEN_POSITIONS.filter(
    (job) =>
      (team === "All teams" || job.team === team) &&
      `${job.title} ${job.team} ${job.overview}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="dv-page py-16">
      <div className="dv-container">
        {/* Header */}
        <header className="max-w-3xl mb-12 space-y-4">
          <div className="dv-eyebrow">
            <span className="dv-eyebrow-dot" />
            <span>Join Our Engineering Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight leading-tight">
            Build technology that matters.
          </h1>
          <p className="text-base sm:text-lg text-[#596a60] leading-relaxed">
            We are looking for thoughtful engineers, computer vision specialists, and data
            leads based in Bangladesh to tackle high-precision client and product challenges.
          </p>
        </header>

        {/* Directory Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#e5ded1]">
          {/* Team Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter positions by team">
            {teams.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTeam(item)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  team === item
                    ? "bg-[#14382c] text-white"
                    : "bg-white text-[#596a60] border border-[#e5ded1] hover:border-[#14382c]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex items-center w-full sm:w-64">
            <Search size={15} className="absolute left-3 text-[#798a80]" />
            <input
              type="text"
              aria-label="Search open positions"
              placeholder="Search roles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-lg border border-[#e5ded1] bg-white text-xs text-[#14382c] focus:outline-none focus:ring-2 focus:ring-[#14382c]"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear role search"
                onClick={() => setQuery("")}
                className="absolute right-2.5 text-[#798a80] hover:text-[#14382c]"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <p className="text-xs font-mono text-[#798a80] mb-6" role="status">
          Showing {jobs.length} open position{jobs.length === 1 ? "" : "s"}
        </p>

        {/* Positions Accordion */}
        <div className="space-y-4 mb-16">
          {jobs.map((job) => (
            <details
              key={job.id}
              className="bg-white rounded-xl border border-[#e5ded1] overflow-hidden group open:border-[#14382c] transition-all"
            >
              <summary className="p-6 flex items-center justify-between gap-4 cursor-pointer list-none hover:bg-[#fbf9f4] transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-[#edf5f1] text-[#14382c]">
                      {job.team}
                    </span>
                    <span className="text-[10px] font-mono text-[#798a80]">
                      {job.level}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#14382c]">
                    {job.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-[#596a60] pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#84cc16]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-[#84cc16]" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className="text-[#798a80] group-open:rotate-180 transition-transform shrink-0"
                />
              </summary>

              <div className="p-6 pt-4 border-t border-[#eee8dc] space-y-6 bg-[#fbf9f4]/40">
                <p className="text-sm text-[#4a5c51] leading-relaxed">
                  {job.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase font-bold text-[#14382c]">
                      What You'll Do:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#293830]">
                      {job.whatYouWillDo.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase font-bold text-[#14382c]">
                      What You'll Bring:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#293830]">
                      {job.requirements.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check size={14} className="text-[#84cc16] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eee8dc] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-[#596a60]">
                    <strong>Compensation:</strong> {job.compensation}
                  </span>

                  <Link
                    href={`/contact?service=general&role=${encodeURIComponent(job.title)}`}
                    className="dv-btn-primary !py-2 !px-4 text-xs whitespace-nowrap self-start sm:self-auto"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="p-8 rounded-xl bg-white border border-[#e5ded1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#14382c]">
              Don't see an exact title match?
            </h3>
            <p className="text-xs text-[#596a60]">
              If you have exceptional skills in computer vision, OCR, or full-stack engineering, we'd like to hear from you.
            </p>
          </div>
          <Link href="/contact?service=general" className="dv-btn-primary whitespace-nowrap">
            <span>Introduce Yourself</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
