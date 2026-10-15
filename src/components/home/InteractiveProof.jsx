"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Layers,
  FileCode,
  ScanText,
  Eye,
  EyeOff,
  Info,
  CheckCircle2,
} from "lucide-react";

// Predefined illustrative annotation boxes
const ANNOTATION_ITEMS = [
  {
    id: "box-1",
    label: "Automated Carrier / AGV",
    category: "vehicle",
    color: "#84cc16", // Lime
    textColor: "#3f6212",
    bgColor: "rgba(132, 204, 22, 0.16)",
    borderColor: "#84cc16",
    coords: { x: 18, y: 22, w: 38, h: 48 }, // Percentage for responsive scaling
    pixelCoords: [144, 180, 310, 410],
    normalized: [0.37, 0.46, 0.38, 0.48],
    confidence: "98.9%",
    reviewerCount: 2,
  },
  {
    id: "box-2",
    label: "Logistics Specialist",
    category: "person",
    color: "#0284c7", // Sky blue
    textColor: "#0369a1",
    bgColor: "rgba(2, 132, 199, 0.15)",
    borderColor: "#0284c7",
    coords: { x: 62, y: 16, w: 22, h: 62 },
    pixelCoords: [520, 130, 190, 520],
    normalized: [0.73, 0.47, 0.22, 0.62],
    confidence: "99.4%",
    reviewerCount: 3,
  },
  {
    id: "box-3",
    label: "High-Priority Parcel",
    category: "package",
    color: "#16a34a", // Emerald
    textColor: "#15803d",
    bgColor: "rgba(22, 163, 74, 0.16)",
    borderColor: "#16a34a",
    coords: { x: 26, y: 52, w: 18, h: 26 },
    pixelCoords: [210, 420, 150, 220],
    normalized: [0.35, 0.65, 0.18, 0.26],
    confidence: "97.8%",
    reviewerCount: 2,
  },
];

// Predefined illustrative OCR document
const OCR_DOCUMENT = {
  documentTitle: "Bilingual Shipment Clearance Receipt",
  documentLanguage: "Bangla & English (Mixed Script)",
  extractedFields: [
    { label: "Consignment ID", value: "DVK-2026-BD884", confidence: "99.9%" },
    { label: "Client / Organization", value: "Bengal Logistics Enterprise", confidence: "99.2%" },
    { label: "Dispatch Hub (ঢাকা)", value: "Dhaka North Sorting Facility", confidence: "98.6%" },
    { label: "Destination (চট্টগ্রাম)", value: "Chattogram Port Terminal", confidence: "98.8%" },
    { label: "Declared Weight", value: "480.50 KG (8 Pallets)", confidence: "99.5%" },
    { label: "Inspection Status", value: "VERIFIED & CLEARED", confidence: "100.0%" },
  ],
  rawJsonOutput: `{
  "document_type": "consignment_dispatch_receipt",
  "document_id": "DVK-2026-BD884",
  "verified_at": "2026-10-15T14:32:00+06:00",
  "language_detected": ["bn", "en"],
  "entities": {
    "organization": "Bengal Logistics Enterprise",
    "origin_hub": "ঢাকা উত্তর বাছাই কেন্দ্র",
    "destination": "চট্টগ্রাম বন্দর টার্মিনাল",
    "weight_kg": 480.5,
    "inspection_passed": true
  },
  "overall_extraction_confidence": 0.993
}`,
};

// Export formats
const FORMAT_SNIPPETS = {
  yolo: `# YOLOv8 txt format: <class-index> <x_center> <y_center> <width> <height>
0 0.370000 0.460000 0.380000 0.480000
1 0.730000 0.470000 0.220000 0.620000
2 0.350000 0.650000 0.180000 0.260000`,

  coco: `{
  "images": [
    { "id": 1, "file_name": "logistics_inspection_01.jpg", "width": 800, "height": 600 }
  ],
  "categories": [
    { "id": 0, "name": "agv_carrier" },
    { "id": 1, "name": "logistics_specialist" },
    { "id": 2, "name": "priority_parcel" }
  ],
  "annotations": [
    { "id": 101, "image_id": 1, "category_id": 0, "bbox": [144, 180, 310, 410], "area": 127100 },
    { "id": 102, "image_id": 1, "category_id": 1, "bbox": [520, 130, 190, 520], "area": 98800 }
  ]
}`,

  voc: `<annotation>
  <filename>logistics_inspection_01.jpg</filename>
  <size>
    <width>800</width>
    <height>600</height>
    <depth>3</depth>
  </size>
  <object>
    <name>agv_carrier</name>
    <bndbox>
      <xmin>144</xmin>
      <ymin>180</ymin>
      <xmax>454</xmax>
      <ymax>590</ymax>
    </bndbox>
  </object>
</annotation>`,

  csv: `image_id,class_name,x_min,y_min,x_max,y_max,confidence,reviewers
logistics_01,agv_carrier,144,180,454,590,0.989,2
logistics_01,logistics_specialist,520,130,710,650,0.994,3
logistics_01,priority_parcel,210,420,360,640,0.978,2`,
};

export function InteractiveProof() {
  const [activeTab, setActiveTab] = useState("vision"); // 'vision' | 'ocr' | 'formats'
  const [visibleClasses, setVisibleClasses] = useState({
    vehicle: true,
    person: true,
    package: true,
  });
  const [selectedBoxId, setSelectedBoxId] = useState("box-1");
  const [selectedFormat, setSelectedFormat] = useState("yolo");
  const [copied, setCopied] = useState(false);

  function toggleClass(category) {
    setVisibleClasses((prev) => ({ ...prev, [category]: !prev[category] }));
  }

  async function handleCopy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  }

  const selectedBox = ANNOTATION_ITEMS.find((b) => b.id === selectedBoxId) || ANNOTATION_ITEMS[0];

  return (
    <section className="py-20 bg-[#f4efe4]/60 border-y border-[#e5ded1]">
      <div className="dv-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="dv-eyebrow mb-2">
              <span className="dv-eyebrow-dot" />
              <span>Interactive Demonstration</span>
            </div>
            <h2 className="dv-section-title">
              Inspect how we verify data.
            </h2>
          </div>
          <p className="text-sm text-[#596a60] max-w-md">
            Explore sample visual bounding boxes, OCR document extraction, and
            export schemas. Clearly labeled illustrative data calibrated for production teams.
          </p>
        </div>

        {/* Demo Console Card */}
        <div className="bg-white rounded-xl border border-[#e5ded1] shadow-sm overflow-hidden">
          {/* Top Control Bar with Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-[#e5ded1] bg-[#fbf9f4]">
            {/* Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#ede6d8] rounded-lg" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "vision"}
                onClick={() => setActiveTab("vision")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "vision"
                    ? "bg-white text-[#14382c] shadow-xs"
                    : "text-[#596a60] hover:text-[#14382c]"
                }`}
              >
                <Layers size={14} />
                <span>Object Annotation</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "ocr"}
                onClick={() => setActiveTab("ocr")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "ocr"
                    ? "bg-white text-[#14382c] shadow-xs"
                    : "text-[#596a60] hover:text-[#14382c]"
                }`}
              >
                <ScanText size={14} />
                <span>Document OCR</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "formats"}
                onClick={() => setActiveTab("formats")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "formats"
                    ? "bg-white text-[#14382c] shadow-xs"
                    : "text-[#596a60] hover:text-[#14382c]"
                }`}
              >
                <FileCode size={14} />
                <span>Export Schemas</span>
              </button>
            </div>

            {/* Illustrative Notice Pill */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f4efe4] border border-[#e5ded1] text-[11px] font-mono text-[#596a60]">
              <Info size={13} className="text-[#84cc16]" />
              <span>Predefined Sample · No live model invoked</span>
            </div>
          </div>

          {/* Tab 1: Vision / Bounding Boxes */}
          {activeTab === "vision" && (
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Simulated Camera Viewport */}
              <div className="lg:col-span-8 flex flex-col space-y-3">
                <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-[#1e2a24] border border-[#2d3e35] select-none">
                  {/* Subtle Grid Backdrop simulating warehouse/facility visual feed */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(#84cc16 1px, transparent 1px), linear-gradient(to right, #354a3f 1px, transparent 1px)",
                      backgroundSize: "24px 24px, 48px 48px",
                    }}
                  />

                  {/* Visual Scene Simulation Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                    <div className="w-full h-full flex flex-col justify-between text-xs font-mono text-[#5f7a6c]">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-ping" />
                          CAM_DHAKA_04 · 1080p
                        </span>
                        <span>FPS: 30.0 · EXPOSURE: AUTO</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-[#4d6659]">
                        <span>COORDINATE SPACE: 1920x1080</span>
                        <span>AGREEMENT SCORE: 0.984</span>
                      </div>
                    </div>
                  </div>

                  {/* Render Bounding Boxes */}
                  {ANNOTATION_ITEMS.map((item) => {
                    const isVisible = visibleClasses[item.category];
                    const isSelected = selectedBoxId === item.id;
                    if (!isVisible) return null;

                    return (
                      <div
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-label={`Inspect ${item.label}`}
                        onClick={() => setSelectedBoxId(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setSelectedBoxId(item.id);
                          }
                        }}
                        style={{
                          left: `${item.coords.x}%`,
                          top: `${item.coords.y}%`,
                          width: `${item.coords.w}%`,
                          height: `${item.coords.h}%`,
                          borderColor: item.borderColor,
                          backgroundColor: isSelected
                            ? item.bgColor
                            : "rgba(0, 0, 0, 0.05)",
                        }}
                        className={`absolute border-2 rounded-xs cursor-pointer transition-all duration-150 group focus:outline-none ${
                          isSelected
                            ? "ring-2 ring-white/50 shadow-lg z-20"
                            : "hover:border-white z-10"
                        }`}
                      >
                        {/* Box Tag Label */}
                        <div
                          style={{ backgroundColor: item.color }}
                          className="absolute -top-6 left-0 px-2 py-0.5 text-[10px] font-mono font-bold text-[#0c241c] rounded-xs shadow-xs flex items-center gap-1 whitespace-nowrap"
                        >
                          <span>{item.label}</span>
                          <span className="opacity-80">({item.confidence})</span>
                        </div>

                        {/* Corner Crosshairs */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white pointer-events-none" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white pointer-events-none" />
                      </div>
                    );
                  })}
                </div>

                {/* Layer Toggle Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-[#596a60] mr-1">
                    Toggle Classes:
                  </span>
                  {ANNOTATION_ITEMS.map((item) => {
                    const isVisible = visibleClasses[item.category];
                    return (
                      <button
                        key={item.category}
                        type="button"
                        onClick={() => toggleClass(item.category)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border transition-all ${
                          isVisible
                            ? "bg-white border-[#d1c8b8] text-[#14382c] shadow-xs"
                            : "bg-[#f4efe4] border-transparent text-[#798a80] line-through"
                        }`}
                      >
                        {isVisible ? <Eye size={13} /> : <EyeOff size={13} />}
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Inspection Inspector Side Panel */}
              <div className="lg:col-span-4 bg-[#fbf9f4] p-5 rounded-lg border border-[#e5ded1] space-y-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#798a80] tracking-wider block mb-1">
                    Selected Entity Telemetry
                  </span>
                  <h4 className="text-base font-bold text-[#14382c]">
                    {selectedBox.label}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#15803d] font-semibold mt-1">
                    <CheckCircle2 size={14} />
                    <span>Quality Verified ({selectedBox.reviewerCount} Reviewers)</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono pt-2 border-t border-[#e5ded1]">
                  <div className="flex justify-between py-1 border-b border-[#eee8dc]">
                    <span className="text-[#596a60]">Confidence</span>
                    <span className="font-semibold text-[#14382c]">
                      {selectedBox.confidence}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#eee8dc]">
                    <span className="text-[#596a60]">Pixel BBox</span>
                    <span className="font-semibold text-[#14382c]">
                      [{selectedBox.pixelCoords.join(", ")}]
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#eee8dc]">
                    <span className="text-[#596a60]">Normalized [x, y, w, h]</span>
                    <span className="font-semibold text-[#14382c]">
                      [{selectedBox.normalized.join(", ")}]
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#596a60]">Guideline ID</span>
                    <span className="text-[#14382c]">GL-LOG-2026-v2</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-md border border-[#e5ded1] text-xs text-[#596a60] leading-relaxed">
                  <strong>Guideline Rule:</strong> Tight bounding fit around outer edge of equipment chassis; ignores shadow projections on floor surfaces.
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Document OCR */}
          {activeTab === "ocr" && (
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Document Visual Card */}
              <div className="lg:col-span-6 bg-[#fbf9f4] p-6 rounded-lg border border-[#e5ded1] space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#e5ded1]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#798a80]">
                      Sample Scanned Document
                    </span>
                    <h4 className="text-sm font-bold text-[#14382c]">
                      {OCR_DOCUMENT.documentTitle}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f4efe4] text-[#596a60]">
                    {OCR_DOCUMENT.documentLanguage}
                  </span>
                </div>

                {/* Structured Key-Value List */}
                <div className="space-y-2.5">
                  {OCR_DOCUMENT.extractedFields.map((field) => (
                    <div
                      key={field.label}
                      className="flex items-center justify-between p-2.5 bg-white rounded border border-[#e5ded1] text-xs"
                    >
                      <div>
                        <span className="block text-[10px] text-[#798a80] font-mono uppercase">
                          {field.label}
                        </span>
                        <span className="font-semibold text-[#14382c]">
                          {field.value}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono font-medium text-[#15803d] px-2 py-0.5 rounded bg-[#edf5f1]">
                        {field.confidence}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* JSON Output Viewer */}
              <div className="lg:col-span-6 flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-semibold text-[#14382c]">
                    Structured JSON Extraction Payload
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(OCR_DOCUMENT.rawJsonOutput)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#14382c] bg-[#fbf9f4] hover:bg-[#ede6d8] border border-[#e5ded1] rounded transition-colors"
                  >
                    {copied ? <Check size={13} className="text-[#15803d]" /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy JSON"}</span>
                  </button>
                </div>

                <pre className="p-4 bg-[#14231b] text-[#c9e2d3] rounded-lg text-xs font-mono leading-relaxed overflow-x-auto max-h-[360px] border border-[#23382c]">
                  <code>{OCR_DOCUMENT.rawJsonOutput}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tab 3: Format Schemas */}
          {activeTab === "formats" && (
            <div className="p-6 lg:p-8 space-y-6">
              {/* Format Selector Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#596a60] mr-1">
                    Select ML Format:
                  </span>
                  {[
                    { id: "yolo", label: "YOLO (txt)" },
                    { id: "coco", label: "COCO (JSON)" },
                    { id: "voc", label: "Pascal VOC (XML)" },
                    { id: "csv", label: "Tabular (CSV)" },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormat(fmt.id)}
                      className={`px-3 py-1.5 rounded text-xs font-mono font-medium border transition-colors ${
                        selectedFormat === fmt.id
                          ? "bg-[#14382c] text-white border-[#14382c]"
                          : "bg-white text-[#596a60] border-[#e5ded1] hover:border-[#14382c]"
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(FORMAT_SNIPPETS[selectedFormat])}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#14382c] bg-[#fbf9f4] hover:bg-[#ede6d8] border border-[#e5ded1] rounded transition-colors"
                >
                  {copied ? <Check size={14} className="text-[#15803d]" /> : <Copy size={14} />}
                  <span>{copied ? "Copied Snippet" : "Copy Snippet"}</span>
                </button>
              </div>

              {/* Code Preview Box */}
              <div className="relative">
                <pre className="p-5 bg-[#0f241c] text-[#d6ede0] rounded-lg text-xs font-mono leading-relaxed overflow-x-auto max-h-[380px] border border-[#1b3d30]">
                  <code>{FORMAT_SNIPPETS[selectedFormat]}</code>
                </pre>
              </div>

              <div className="text-xs text-[#596a60] flex items-center gap-2">
                <Info size={14} className="text-[#84cc16] shrink-0" />
                <span>
                  All Dorvik annotation datasets are delivered in standard schemas with coordinate validation scripts included.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
