"use client";

import React, { useState } from "react";

export function TechnologyStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  const STACK_DATA = [
    {
      domain: "AI, Machine Learning & Big Data",
      runtimes: [
        { tool: "PyTorch & JAX", role: "Deep learning models & gradient optimization", protocol: "CUDA 12 / ROCm", status: "Primary ML Runtime" },
        { tool: "vLLM & TensorRT-LLM", role: "High-throughput, continuous-batching model inference", protocol: "Triton C++ Backend", status: "Sub-50ms TTFT" },
        { tool: "OpenCV & Ultralytics", role: "Real-time edge computer vision & frame segmentation", protocol: "ONNX / TensorRT", status: "60+ FPS Video Pipeline" },
        { tool: "LangGraph / LlamaIndex", role: "Deterministic multi-agent execution & RAG graphs", protocol: "Semantic Vector Search", status: "Zero Hallucination Guardrails" },
        { tool: "ClickHouse & Apache Spark", role: "Columnar analytical queries & big data ingestion", protocol: "Distributed MapReduce", status: "Petabyte Query Engine" },
        { tool: "DuckDB & TimescaleDB", role: "High-velocity embedded time-series telemetry", protocol: "SQL / Parquet Streaming", status: "Zero-Overhead Analytical" },
      ],
    },
    {
      domain: "Software & Enterprise Engineering",
      runtimes: [
        { tool: "Next.js & React 19", role: "Server-rendered enterprise web interfaces", protocol: "React Server Components", status: "Sub-Second Global LCP" },
        { tool: "Node.js & NestJS", role: "Modular domain-driven microservices architecture", protocol: "TypeScript / Node v22", status: "High Concurrency API" },
        { tool: "Go (Golang)", role: "High-throughput network proxies & event processors", protocol: "gRPC / Protobuf", status: "Low Memory Footprint" },
        { tool: "PostgreSQL & CockroachDB", role: "ACID transactional persistence & ledger state", protocol: "Row-Level Security (RLS)", status: "Zero Data Loss Guarantee" },
        { tool: "Apache Kafka & Redis", role: "Distributed event streaming & sub-millisecond cache", protocol: "Pub/Sub Event Bus", status: "100k+ msg/sec Throughput" },
        { tool: "Docker & Kubernetes", role: "Multi-cloud container orchestration & autoscaling", protocol: "OCI Standard / Helm", status: "Zero-Downtime Rollouts" },
      ],
    },
    {
      domain: "Emerging Tech, Spatial & Connected Systems",
      runtimes: [
        { tool: "Three.js & WebGL", role: "Real-time browser-rendered 3D spatial models", protocol: "GLTF / WebXR", status: "60 FPS Web Digital Twins" },
        { tool: "MQTT & CoAP", role: "Lightweight pub/sub protocol for industrial sensors", protocol: "TLS 1.3 / mTLS", status: "Low-Bandwidth Telemetry" },
        { tool: "Edge ML (WASM / ONNX)", role: "On-device inference on drones & gateway computers", protocol: "WebAssembly", status: "Offline-First Execution" },
        { tool: "TimescaleDB Sensor Fabrics", role: "Multi-year industrial telemetry archiving", protocol: "Time-Bucket Hypertables", status: "Lossless Signal Logging" },
        { tool: "Industrial PLC Gateways", role: "SCADA & Modbus machine signal bridge", protocol: "OPC-UA / Modbus TCP", status: "Hardware Agnostic" },
      ],
    },
  ];

  return (
    <section id="technology" className="relative w-full py-20 lg:py-28 border-b border-neutral-200 dark:border-[#1b1b20] bg-[#FAFAFC] dark:bg-[#08080A] transition-colors duration-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase block">
            TECHNOLOGY RUNTIMES &amp; STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-[-0.02em]">
            Built across the technology stack
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Modern, battle-tested toolchains engineered for high throughput, data integrity, and operational resilience.
          </p>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          {STACK_DATA.map((domain, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === idx
                  ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 shadow-sm"
                  : "bg-neutral-100/70 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {domain.domain}
            </button>
          ))}
        </div>

        {/* Technical Specification Table */}
        <div className="pt-6 overflow-x-auto">
          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                <th className="pb-3 pr-6 font-semibold">TECHNOLOGY / TOOL</th>
                <th className="pb-3 pr-6 font-semibold">ENGINEERING ROLE</th>
                <th className="pb-3 pr-6 font-semibold hidden sm:table-cell">PROTOCOL / STANDARD</th>
                <th className="pb-3 font-semibold text-right">BENCHMARK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800/60">
              {STACK_DATA[activeTab].runtimes.map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-100/60 dark:hover:bg-neutral-900/40 transition-colors">
                  <td className="py-3.5 pr-6 font-mono font-semibold text-neutral-900 dark:text-white">
                    {item.tool}
                  </td>
                  <td className="py-3.5 pr-6 text-neutral-700 dark:text-neutral-300">
                    {item.role}
                  </td>
                  <td className="py-3.5 pr-6 font-mono text-[11px] text-neutral-500 dark:text-neutral-400 hidden sm:table-cell">
                    {item.protocol}
                  </td>
                  <td className="py-3.5 text-right font-mono text-[11px]">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40 font-medium">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
