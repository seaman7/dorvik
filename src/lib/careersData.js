/**
 * Dorvik Careers Data
 *
 * Authentic engineering and operational roles at Dorvik AI Services.
 * Reflects genuine technical focus areas: AI training data, computer vision,
 * cloud GPU infrastructure, and custom software systems.
 */

export const OPEN_POSITIONS = [
  {
    id: "cv-ml-engineer",
    title: "Computer Vision & ML Engineer",
    team: "Applied AI",
    location: "Dhaka, Bangladesh (Hybrid / Remote)",
    type: "Full-Time",
    level: "Mid / Senior",
    overview:
      "Design and deploy applied computer vision pipelines and OCR extraction systems. You will work on object detection, semantic segmentation, and Bengali/English document processing models for client applications and our EduOS platform.",
    whatYouWillDo: [
      "Train, fine-tune, and evaluate vision models (YOLO, Vision Transformers) on domain-specific datasets.",
      "Develop high-accuracy OCR extraction and document parsing pipelines for structured receipts and exam scripts.",
      "Package models into low-latency containerized inference APIs using FastAPI, ONNX, and vLLM.",
      "Build deterministic evaluation harnesses and regression benchmarks to track model quality over time.",
    ],
    requirements: [
      "2+ years of experience training and deploying computer vision or OCR pipelines in Python/PyTorch.",
      "Proficiency with OpenCV, PIL, Hugging Face transformers, and Docker.",
      "Strong understanding of model evaluation metrics (mAP, IoU, Precision/Recall, CER/WER).",
      "Experience with edge optimization (quantization, TensorRT, ONNX runtime) is a strong plus.",
    ],
    compensation: "Competitive tech market compensation, hardware & compute budget, flexible hours.",
  },
  {
    id: "fullstack-engineer",
    title: "Full-Stack Software Engineer (Next.js / Node.js)",
    team: "Product Engineering",
    location: "Dhaka, Bangladesh (Hybrid / Remote)",
    type: "Full-Time",
    level: "Mid / Senior",
    overview:
      "Build high-performance web applications, customer portals, and core modules for BizOS and EduOS. You will translate business requirements into responsive, accessible, and maintainable software systems.",
    whatYouWillDo: [
      "Engineer modern web applications using Next.js App Router, Tailwind CSS, and Node.js microservices.",
      "Design relational database schemas (PostgreSQL) and implement role-based access control (RBAC).",
      "Develop clean RESTful and GraphQL APIs for client integrations and internal product modules.",
      "Ensure web accessibility (WCAG AA), responsive performance across mobile and desktop, and test coverage.",
    ],
    requirements: [
      "3+ years of professional full-stack development experience with modern JavaScript, React, and Node.js.",
      "Strong command of SQL, relational data modeling, query optimization, and transactions.",
      "Deep care for UI craft, responsive typography, and semantic HTML.",
      "Experience shipping production SaaS or enterprise administrative software.",
    ],
    compensation: "Competitive tech market compensation, learning stipend, flexible remote/hybrid setup.",
  },
  {
    id: "gpu-infra-engineer",
    title: "Cloud Infrastructure & GPU Systems Engineer",
    team: "Infrastructure",
    location: "Dhaka, Bangladesh (Hybrid / Remote)",
    type: "Full-Time",
    level: "Mid / Senior",
    overview:
      "Manage client GPU environments, PyTorch training infrastructure, and production inference deployments across third-party cloud providers (AWS, RunPod, Lambda Labs, GCP).",
    whatYouWillDo: [
      "Architect and provision reproducible cloud GPU environments with tailored CUDA and Docker configurations.",
      "Set up automated checkpoint synchronization to cloud object storage (S3 / GCS) to safeguard long training jobs.",
      "Configure inference runtimes (vLLM, Triton, FastAPI) with health monitoring and automated scaling policies.",
      "Implement scheduled shutdown policies and billing alerts to eliminate idle cloud compute costs for clients.",
    ],
    requirements: [
      "2+ years of DevOps or cloud infrastructure experience in Linux environments.",
      "Hands-on familiarity with NVIDIA drivers, CUDA toolkits, Docker, and cloud VM management.",
      "Proficiency in Python or Bash scripting for automated provisioning and telemetry.",
      "Experience deploying deep learning inference or distributed training workloads.",
    ],
    compensation: "Competitive tech market compensation, cloud compute sandbox, remote-first flexibility.",
  },
  {
    id: "data-operations-lead",
    title: "AI Data Operations & Quality Lead",
    team: "Data Operations",
    location: "Dhaka, Bangladesh (Hybrid)",
    type: "Full-Time",
    level: "Lead",
    overview:
      "Lead data annotation teams, formalize labeling taxonomies, and manage quality assurance workflows across computer vision, audio transcription, and text labeling projects.",
    whatYouWillDo: [
      "Translate client ML specifications into actionable annotation guidelines and visual reference cards.",
      "Train and onboard annotators on tools (Label Studio, CVAT, Roboflow) and domain-specific taxonomies.",
      "Design stratified sampling audits to measure and maintain high inter-annotator agreement (IAA).",
      "Coordinate delivery timelines, format conversions (COCO, YOLO, JSON), and client pilot reviews.",
    ],
    requirements: [
      "Demonstrated experience managing data labeling pipelines or QA operations for machine learning teams.",
      "Fluency in written and spoken Bangla and English with exceptional attention to linguistic and visual nuance.",
      "Familiarity with standard computer vision annotation formats (YOLO, COCO, Pascal VOC).",
      "High organizational discipline, empathy, and clear technical communication skills.",
    ],
    compensation: "Competitive leadership salary, performance incentives, structured professional growth.",
  },
];
