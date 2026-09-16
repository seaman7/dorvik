"use client";

import React from "react";
import {
  BrainCircuit,
  Eye,
  Database,
  Code2,
  Smartphone,
  Server,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    index: "01",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    description:
      "Build intelligent systems with machine learning, generative AI, predictive analytics and model-driven automation.",
    examples: [
      "Machine learning models",
      "Generative AI",
      "RAG applications",
      "Predictive analytics",
      "Model fine-tuning",
      "AI workflow automation",
    ],
  },
  {
    index: "02",
    title: "Computer Vision",
    icon: Eye,
    description:
      "Turn visual data into actionable intelligence through computer vision and real-time perception systems.",
    examples: [
      "Object detection",
      "Object tracking",
      "Image classification",
      "OpenCV solutions",
      "Video analytics",
      "Robotics and drone vision",
    ],
  },
  {
    index: "03",
    title: "Data Annotation & Dataset Engineering",
    icon: Database,
    description:
      "Create cleaner, better-structured datasets for reliable AI model development and evaluation.",
    examples: [
      "Image annotation",
      "Video annotation",
      "Bounding boxes",
      "Segmentation",
      "Dataset cleaning",
      "YOLO & COCO exports",
      "Quality assurance",
    ],
  },
  {
    index: "04",
    title: "Custom Software Development",
    icon: Code2,
    description:
      "Build secure, scalable software tailored to your business processes and operational needs.",
    examples: [
      "SaaS platforms",
      "Business systems",
      "Internal tools",
      "Workflow automation",
      "Admin dashboards",
      "API-driven applications",
    ],
  },
  {
    index: "05",
    title: "Web & Mobile Applications",
    icon: Smartphone,
    description:
      "Design and develop fast, intuitive digital experiences for web, mobile and connected platforms.",
    examples: [
      "Corporate websites",
      "Web applications",
      "E-commerce platforms",
      "Cross-platform mobile apps",
      "Customer portals",
      "Product interfaces",
    ],
  },
  {
    index: "06",
    title: "Cloud, Backend & APIs",
    icon: Server,
    description:
      "Engineer reliable backend systems, APIs and cloud deployments that support long-term growth.",
    examples: [
      "REST and GraphQL APIs",
      "Backend architecture",
      "Database systems",
      "Docker deployments",
      "CI/CD pipelines",
      "Cloud infrastructure",
      "Monitoring",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 border-b border-[#DEDED8] bg-[#F7F7F3]">
      <Container size="wide">
        <SectionHeading
          eyebrow="WHAT WE DO"
          heading="From intelligent models to complete digital products."
          description="We help businesses design, build and deploy technology that solves meaningful problems."
        />

        {/* 6 Premium Service Cards in Refined Border Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DEDED8] border border-[#DEDED8]">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.index}
                className="group relative bg-[#FFFFFF] p-8 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:bg-[#FAF9F5] focus-within:ring-2 focus-within:ring-[#1D4ED8]"
              >
                {/* Card Top: Index and Minimal Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#E8E8E2]">
                    <span className="font-mono text-xs font-semibold tracking-wider text-[#6B6B6B] group-hover:text-[#1D4ED8] transition-colors">
                      // {service.index}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#F7F7F3] border border-[#DEDED8] flex items-center justify-center text-[#111111] group-hover:text-[#1D4ED8] group-hover:border-[#1D4ED8]/30 transition-all">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl sm:text-2xl font-medium text-[#111111] tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Examples List */}
                  <div className="mt-6 pt-5 border-t border-[#E8E8E2]">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#8E8E88] mb-3">
                      CAPABILITIES &amp; DELIVERABLES
                    </p>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[#4A4A4A]">
                      {service.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-1.5 truncate">
                          <span className="w-1 h-1 rounded-full bg-[#111111] group-hover:bg-[#1D4ED8] transition-colors shrink-0" />
                          <span className="truncate">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA Link */}
                <div className="mt-8 pt-4 border-t border-[#E8E8E2] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#111111] group-hover:text-[#1D4ED8] transition-colors">
                    Discuss this service
                  </span>
                  <a
                    href="#contact"
                    className="p-1 text-[#111111] group-hover:text-[#1D4ED8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D4ED8]"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
