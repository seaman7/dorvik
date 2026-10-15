import { Search, FlaskConical, CheckSquare, PackageCheck } from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Discovery & Alignment",
    icon: Search,
    summary: "Establish goals, data schemas, and edge-case boundaries.",
    clientSupplies: "Raw sample data, workflow objectives, error thresholds, and domain constraints.",
    howAgreed: "Joint review of edge cases, labeling taxonomy or API specifications, and clear non-disclosure agreements.",
    whatDelivered: "Formal Statement of Work, qualification guideline card, and milestone schedule.",
  },
  {
    step: "02",
    name: "Sample & Pilot Calibration",
    icon: FlaskConical,
    summary: "Validate accuracy on an initial bounded dataset before scaling.",
    clientSupplies: "Target pilot slice and verification review from client technical lead.",
    howAgreed: "Inter-annotator agreement metrics, precision/recall benchmarks, or prototype demo signoff.",
    whatDelivered: "Completed pilot sample batch, calibration audit report, and tuned annotation or API guidelines.",
  },
  {
    step: "03",
    name: "Review & Quality Auditing",
    icon: CheckSquare,
    summary: "Weekly randomized audits with structured feedback loops.",
    clientSupplies: "Periodic feedback on edge cases and clarification on ambiguous items.",
    howAgreed: "Multi-tier human reviewer sign-off against the agreed acceptance rubric.",
    whatDelivered: "Weekly progress telemetry, audit pass/fail rates, and validated interim increments.",
  },
  {
    step: "04",
    name: "Production Delivery & Handover",
    icon: PackageCheck,
    summary: "Clean exports, documented repositories, and deployment support.",
    clientSupplies: "Final acceptance signoff on completed batches or staging environment.",
    howAgreed: "Automated schema validation test pass and client integration verification.",
    whatDelivered: "Complete packaged exports (COCO, YOLO, JSON, CSV), clean source code, runbooks, and handover.",
  },
];

export function DeliveryProcess() {
  return (
    <section id="how-we-work" className="py-20 bg-[#f4efe4]/50 border-t border-[#e5ded1] scroll-mt-20">
      <div className="dv-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="dv-eyebrow mb-2">
            <span className="dv-eyebrow-dot" />
            <span>Delivery Methodology</span>
          </div>
          <h2 className="dv-section-title">
            How we work with your team.
          </h2>
          <p className="dv-section-desc mt-3">
            Predictable engineering requires clear expectations. We define exactly what
            the client provides, how quality is evaluated, and what is delivered at every stage.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage) => {
            const Icon = stage.icon;

            return (
              <div
                key={stage.step}
                className="bg-white rounded-xl border border-[#e5ded1] p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#eee8dc]">
                    <span className="text-xl font-mono font-extrabold text-[#14382c]">
                      {stage.step}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-[#edf5f1] text-[#14382c] flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#14382c]">
                      {stage.name}
                    </h3>
                    <p className="text-xs text-[#596a60] mt-1 leading-relaxed">
                      {stage.summary}
                    </p>
                  </div>

                  {/* Concrete Details */}
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="p-2.5 rounded bg-[#fbf9f4] border border-[#eee8dc]">
                      <span className="block font-mono uppercase text-[9px] text-[#798a80] font-bold">
                        Client Supplies:
                      </span>
                      <p className="text-[#293830] mt-0.5">{stage.clientSupplies}</p>
                    </div>

                    <div className="p-2.5 rounded bg-[#fbf9f4] border border-[#eee8dc]">
                      <span className="block font-mono uppercase text-[9px] text-[#798a80] font-bold">
                        Acceptance Agreed:
                      </span>
                      <p className="text-[#293830] mt-0.5">{stage.howAgreed}</p>
                    </div>

                    <div className="p-2.5 rounded bg-[#edf5f1] border border-[#d2e5da]">
                      <span className="block font-mono uppercase text-[9px] text-[#14382c] font-bold">
                        What We Deliver:
                      </span>
                      <p className="text-[#14382c] font-medium mt-0.5">
                        {stage.whatDelivered}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
