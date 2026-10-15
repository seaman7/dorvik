/**
 * Dorvik Core Services Data
 *
 * Defines the 4 primary technology offerings:
 * 1. AI Data & Annotation
 * 2. AI Engineering & Model Training
 * 3. Software & Business Automation
 * 4. Managed GPU & Deployment
 */

export const CORE_SERVICES = [
  {
    id: "data-annotation",
    slug: "data-annotation",
    number: "01",
    title: "AI Data & Annotation",
    navTitle: "Data & Annotation",
    eyebrow: "HUMAN-IN-THE-LOOP QUALITY",
    tagline: "High-accuracy annotation and transcription pipelines for production machine learning models.",
    shortDescription:
      "Image bounding boxes, polygon segmentation, video tracking, and dual Bangla/English transcription with rigorous guideline alignment and multi-tier human review.",
    fullOverview:
      "Machine learning models are only as dependable as the training datasets behind them. Dorvik provides structured data labeling, transcription, and evaluation workflows led by trained human annotators. From bounding boxes and semantic segmentation to complex Bangla and English audio transcription, we agree on clear qualification benchmarks, pilot batches, and iterative feedback to deliver clean datasets in your target format.",
    capabilities: [
      "Image classification and 2D bounding box labeling",
      "Polygon annotation and semantic object segmentation",
      "Video frame annotation and continuous object tracking",
      "Bangla and English audio transcription & dialect handling",
      "Text classification, named entity recognition (NER) & intent labeling",
      "AI response evaluation and human feedback (RLHF) against custom rubrics",
      "Dataset structuring, deduplication, and quality inspection audits",
    ],
    deliverables: [
      "Standard COCO, YOLO (txt), and Pascal VOC (XML) export formats",
      "Custom JSON and structured CSV tabular datasets",
      "Formalized Annotation Guideline and edge-case reference document",
      "Inter-annotator agreement (IAA) metrics and qualification sample reports",
    ],
    workflow: [
      {
        step: "01",
        name: "Requirements & Taxonomy",
        description:
          "Define object classes, attribute schemas, edge-case scenarios, and acceptable error margins with your machine learning team.",
      },
      {
        step: "02",
        name: "Annotation Guidelines",
        description:
          "Draft clear visual reference cards, negative examples, and boundary conditions to ensure annotator consistency.",
      },
      {
        step: "03",
        name: "Qualification Sample",
        description:
          "Annotate a calibrated sample batch (50–100 items) to align edge-case interpretation and establish agreement scores.",
      },
      {
        step: "04",
        name: "Pilot Phase",
        description:
          "Execute a bounded pilot dataset to measure throughput, review edge cases, and validate downstream model ingestion.",
      },
      {
        step: "05",
        name: "Reviewer Feedback",
        description:
          "Senior reviewers audit randomized batches and incorporate engineering feedback to tune precision before volume ramp.",
      },
      {
        step: "06",
        name: "Production & Export",
        description:
          "Deliver validated datasets packaged in COCO, YOLO, JSON, or CSV with full schema documentation.",
      },
    ],
    supportedFormats: [
      { name: "YOLO Format", ext: ".txt", use: "Object detection bounding boxes (normalized x_center, y_center, w, h)" },
      { name: "COCO JSON", ext: ".json", use: "Standard segmentation, keypoints, and bounding box collections" },
      { name: "Pascal VOC", ext: ".xml", use: "XML-based bounding box coordinates for legacy and academic pipelines" },
      { name: "Tabular CSV", ext: ".csv", use: "Audio transcription timestamps, text classification & NER tags" },
    ],
    qualityCommitment:
      "We do not promise arbitrary 100% accuracy or infinite turnaround. Target precision and inter-annotator agreement are agreed upfront with quantifiable sampling audits and iterative review cycles.",
    cta: {
      label: "Request an Annotation Pilot",
      href: "/contact?service=data-annotation",
    },
  },
  {
    id: "ai-engineering",
    slug: "ai-engineering",
    number: "02",
    title: "AI Engineering & Model Training",
    navTitle: "AI Engineering",
    eyebrow: "APPLIED MACHINE LEARNING",
    tagline: "Computer vision, OCR document extraction, and domain-adapted model fine-tuning for real workflows.",
    shortDescription:
      "Applied computer vision, OCR extraction for printed and handwritten text, domain-specific fine-tuning, and low-latency inference APIs integrated into your application stack.",
    fullOverview:
      "Bridging the gap between a research model and a reliable production service requires pragmatic engineering. Dorvik builds applied AI solutions: edge-ready computer vision pipelines, high-recall OCR engines for English and Bengali documents, specialized model fine-tuning (LoRA/QLoRA), and retrieval-augmented assistants. We provide reproducible evaluation benchmarks, test splits, and clean API endpoints ready for production handover.",
    capabilities: [
      "Computer vision pipeline development (object detection, tracking, visual inspection)",
      "OCR and structured key-value extraction for invoices, forms, and IDs",
      "Domain-specific model fine-tuning and task adaptation (LoRA, QLoRA)",
      "Dataset curation, synthetic augmentation, and stratified holdout evaluation",
      "Retrieval-Augmented Generation (RAG) over internal documents with citation proofs",
      "Model inference APIs (FastAPI, ONNX, vLLM) with containerized deployment",
      "Application integration connecting model outputs directly to web and mobile frontends",
    ],
    deliverables: [
      "Baseline performance benchmark and evaluation test harness",
      "Trained model weights or containerized inference endpoint",
      "Clean OpenAPI / REST documentation and client integration snippets",
      "Model card, hyperparameter logs, and production handover runbook",
    ],
    workflow: [
      {
        step: "01",
        name: "Problem Formulation",
        description:
          "Analyze the business workflow, error tolerance, latency constraints, and hardware target (edge vs. cloud).",
      },
      {
        step: "02",
        name: "Data Preparation & Baselines",
        description:
          "Prepare stratified training/validation/test holdouts and establish quantifiable baseline performance metrics.",
      },
      {
        step: "03",
        name: "Training & Fine-Tuning",
        description:
          "Fine-tune open-weight architectures (e.g. YOLO, Vision Transformers, domain LLMs) against curated domain data.",
      },
      {
        step: "04",
        name: "Inference API Packaging",
        description:
          "Containerize models with optimized inference runtimes (ONNX, TensorRT, vLLM) and health check endpoints.",
      },
      {
        step: "05",
        name: "Application Integration",
        description:
          "Embed endpoints into your web portal, mobile app, or backend workflow with graceful fallback handling.",
      },
      {
        step: "06",
        name: "Handover & Observability",
        description:
          "Deliver documentation, evaluation scripts, and operational guidance for ongoing monitoring.",
      },
    ],
    costSeparationNotice:
      "We strictly distinguish data annotation, model training compute, and production inference hosting. These are separate activities with distinct resource requirements and transparent cost structures.",
    cta: {
      label: "Discuss AI Engineering",
      href: "/contact?service=ai-engineering",
    },
  },
  {
    id: "software-development",
    slug: "software-development",
    number: "03",
    title: "Software & Business Automation",
    navTitle: "Software & Automation",
    eyebrow: "CUSTOM DIGITAL SYSTEMS",
    tagline: "Purpose-built business portals, internal operations dashboards, and workflow automation.",
    shortDescription:
      "Reliable web applications, customer portals, CRM pipelines, and backend automations designed around your team's real operational processes rather than rigid templates.",
    fullOverview:
      "When off-the-shelf software doesn't fit your operational logic, teams resort to disconnected spreadsheets and manual re-keying. Dorvik designs and builds bespoke software systems tailored to your workflows. We develop responsive web applications, secure client portals, automated lead-management pipelines, and operational dashboards that give leadership real-time clarity.",
    capabilities: [
      "Custom business web applications and client service portals",
      "CRM, inquiry tracking, and lead-management routing workflows",
      "Operational dashboards and real-time activity reporting interfaces",
      "Automated business workflows (invoicing, approvals, document generation)",
      "Full-stack web and cross-platform mobile client development",
      "System integrations connecting legacy databases, messaging, and REST APIs",
      "Role-based access control (RBAC), audit logging, and data privacy safeguards",
    ],
    deliverables: [
      "Responsive, accessible web application (Next.js / React)",
      "Administrative dashboard with role-based permissions",
      "Automated notification and task routing pipelines",
      "Clean, documented source code repository with zero vendor lock-in",
      "Deployment runbook and environment configuration guides",
    ],
    useCases: [
      {
        title: "Client Service & Project Portals",
        description:
          "Dedicated client-facing portals where customers submit project briefs, review milestone deliverables, and access historical assets securely.",
      },
      {
        title: "Lead & Operational Workflows",
        description:
          "Automate inbound lead qualification, assign follow-up tasks to account managers, and track customer journeys without spreadsheet friction.",
      },
      {
        title: "Internal Operations & Inventory Hubs",
        description:
          "Centralized operational systems unifying multi-location branch records, product catalogs, and order dispatch status in real time.",
      },
    ],
    workflow: [
      {
        step: "01",
        name: "Workflow Discovery",
        description:
          "Map manual friction points, existing data sources, user roles, and core operational milestones.",
      },
      {
        step: "02",
        name: "Interactive Prototype",
        description:
          "Review structured wireframes and user interaction flows before writing application code.",
      },
      {
        step: "03",
        name: "Milestone Engineering",
        description:
          "Build in focused sprint milestones with bi-weekly demo previews to test working features early.",
      },
      {
        step: "04",
        name: "Validation & Testing",
        description:
          "Execute cross-device responsive checks, form input validation, and role-permission security reviews.",
      },
      {
        step: "05",
        name: "Deployment & Training",
        description:
          "Deploy to client-owned cloud hosting, conduct staff onboarding, and provide documentation.",
      },
    ],
    cta: {
      label: "Discuss Software Development",
      href: "/contact?service=software-development",
    },
  },
  {
    id: "gpu-cloud",
    slug: "gpu-cloud",
    number: "04",
    title: "Managed GPU & Deployment",
    navTitle: "Managed GPU",
    eyebrow: "MANAGED COMPUTE",
    tagline: "Workload sizing, PyTorch/CUDA environment setup, and managed cloud GPU execution.",
    shortDescription:
      "Hands-on workload assessment, GPU instance selection (RunPod, Lambda, AWS, GCP), hardened environment provisioning, and inference deployment for growing AI teams.",
    fullOverview:
      "Provisioning, configuring, and maintaining cloud GPU infrastructure for training and inference is time-consuming and prone to costly idle billing. Dorvik acts as your managed infrastructure partner: we evaluate your VRAM requirements, select the right third-party cloud provider, harden Docker and PyTorch environments, oversee training runs, and deploy low-latency inference services.",
    capabilities: [
      "Workload assessment (VRAM sizing, precision selection, batch throughput targets)",
      "Provider and GPU selection (A10G, L4, A100, H100 via third-party cloud infrastructure)",
      "Pre-configured PyTorch, CUDA, Docker, and JupyterLab environments",
      "Training run execution oversight, checkpoint management, and cloud storage sync",
      "Production inference deployment (FastAPI, vLLM, TensorRT-LLM runtimes)",
      "Cost estimation, resource monitoring, and automated idle shutdown policies",
      "Operating runbooks and reproducible environment definition files (Dockerfile, scripts)",
    ],
    deliverables: [
      "Workload Sizing & Provider Recommendation brief",
      "Containerized environment definition (Docker / compose scripts)",
      "Automated checkpoint synchronization to secure cloud object storage (S3 / GCS)",
      "Inference API endpoint deployment with health checks and rate controls",
      "Operating runbook, shutdown procedures, and billing alert documentation",
    ],
    disclaimers: [
      "Dorvik operates as a managed services and engineering team utilizing certified third-party cloud providers (e.g., RunPod, Lambda Labs, AWS, Google Cloud). Dorvik does not claim to own physical datacenter hardware.",
      "Hardware availability is confirmed directly with cloud providers upon project reservation.",
      "Third-party cloud infrastructure costs (compute, storage, egress) are itemized and billed separately from Dorvik's engineering management fee.",
      "We do not provide instant unverified self-service checkout; every environment is engineered to your specific workload constraints.",
    ],
    illustrativeWorkloads: [
      {
        name: "Computer Vision / Small Model Fine-Tuning",
        hardware: "1x NVIDIA RTX 4090 / A10G (24 GB VRAM)",
        typicalUse: "YOLO detection, small embedding models, LoRA fine-tuning up to 7B parameters",
        illustrativeCostRange: "$0.40 – $0.90 / hour (provider compute) + setup service",
      },
      {
        name: "Medium LLM Fine-Tuning & Multi-Modal",
        hardware: "1x–2x NVIDIA A100 (80 GB VRAM)",
        typicalUse: "13B–34B parameter fine-tuning, large image-to-text generation",
        illustrativeCostRange: "$1.80 – $3.60 / hour (provider compute) + setup service",
      },
      {
        name: "High-Throughput Production Inference",
        hardware: "Dedicated GPU Instance with vLLM / TensorRT",
        typicalUse: "Sub-50ms API response times for mission-critical client applications",
        illustrativeCostRange: "Custom monthly sizing based on expected concurrent requests",
      },
    ],
    workflow: [
      {
        step: "01",
        name: "Workload Sizing",
        description:
          "Analyze model architecture, precision (FP16, BF16, INT8), sequence length, and estimated training or inference volume.",
      },
      {
        step: "02",
        name: "Provider Selection",
        description:
          "Compare availability, geographic proximity, and spot vs. on-demand pricing across reputable cloud providers.",
      },
      {
        step: "03",
        name: "Environment Provisioning",
        description:
          "Build and test Docker containers with exact CUDA, PyTorch, and driver dependencies.",
      },
      {
        step: "04",
        name: "Storage & Checkpointing",
        description:
          "Configure secure object storage mounts and automated checkpoint saving to prevent lost compute on preemption.",
      },
      {
        step: "05",
        name: "Execution & Monitoring",
        description:
          "Run validation jobs, monitor GPU utilization, memory temperature, and loss metrics.",
      },
      {
        step: "06",
        name: "Shutdown & Handover",
        description:
          "Ensure instances are safely decommissioned or transitioned to steady-state inference with runbooks provided.",
      },
    ],
    cta: {
      label: "Request a GPU Setup Quote",
      href: "/contact?service=gpu-cloud",
    },
  },
];

// Helper to look up service by slug
export function getServiceBySlug(slug) {
  return CORE_SERVICES.find((s) => s.slug === slug) || null;
}

// Backward compatibility alias for legacy imports
export const SERVICES = CORE_SERVICES;
export const SERVICE_GROUPS = [
  { id: "core", title: "Core Services", services: CORE_SERVICES.map(s => s.slug) }
];
