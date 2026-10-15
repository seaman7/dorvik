/**
 * Dorvik Products Data
 *
 * Defines the two evolving proprietary software products:
 * 1. BizOS — Connected Business Operations
 * 2. EduOS — Connected Education & Assessment Workflows
 */

export const PRODUCTS = [
  {
    id: "bizos",
    slug: "bizos",
    name: "BizOS",
    title: "BizOS — Connected Business Operations",
    category: "Commercial Operations",
    badge: "In Active Pilot Development",
    readiness: "Prototype & Pilot Inquiries",
    tagline: "Customer records, inventory movements, invoicing, and follow-up routing in one cohesive workspace.",
    summary:
      "An evolving business operations product built to help commercial teams replace scattered spreadsheets and manual re-keying with structured, role-governed modules.",
    description:
      "BizOS brings core business activities together into a unified control plane. Rather than forcing your team into bloated enterprise ERPs, BizOS focuses on the high-frequency tasks that keep businesses moving: tracking client accounts, maintaining multi-location stock levels, generating clean customer invoices, and routing operational tasks to staff with complete accountability.",
    readinessDetails:
      "BizOS is currently in active prototype and pilot deployment with selected partner businesses. Production modules and custom workflows are scoped and implemented based on the client's operational architecture.",
    targetTeams: [
      "Retail, wholesale & distribution businesses managing physical stock",
      "Commercial enterprises needing unified customer follow-ups and invoicing",
      "Multi-branch service companies needing centralized operational summaries",
    ],
    modules: [
      {
        id: "crm",
        title: "Customer Records & CRM",
        description:
          "Maintain unified customer profiles, purchase history, communication logs, and account manager assignments.",
      },
      {
        id: "inventory",
        title: "Multi-Location Inventory",
        description:
          "Track physical stock counts, stock transfers between branches, low-stock threshold alerts, and supplier catalogs.",
      },
      {
        id: "invoicing",
        title: "Invoicing & Billing Records",
        description:
          "Generate professional customer invoices, record partial or full settlements, and maintain transparent transaction ledgers.",
      },
      {
        id: "tasks",
        title: "Follow-Up & Task Routing",
        description:
          "Automate internal task handoffs between sales, operations, and fulfillment with audit logs and deadline reminders.",
      },
      {
        id: "reporting",
        title: "Executive Summaries & Reporting",
        description:
          "Real-time operational dashboards highlighting daily transaction volume, top inventory movers, and overdue follow-ups.",
      },
    ],
    industries: [
      {
        name: "Retail & Multi-Branch Stores",
        context: "Synchronize branch inventory counts, customer loyalty contacts, and point-of-sale transaction logs.",
      },
      {
        name: "Wholesale & Light Manufacturing",
        context: "Track raw material stock intake, production batch movements, and client delivery dispatch notes.",
      },
      {
        name: "Service & Maintenance Operations",
        context: "Coordinate work orders, field technician assignments, customer billing, and maintenance history.",
      },
    ],
    cta: {
      label: "Discuss BizOS for Your Business",
      href: "/contact?service=bizos",
    },
  },
  {
    id: "eduos",
    slug: "eduos",
    name: "EduOS",
    title: "EduOS — Connected Education & Assessment",
    category: "Education Technology",
    badge: "Working Prototype",
    readiness: "Prototype & Pilot Inquiries",
    tagline: "Student records, assignment submissions, OCR-assisted workflows, and teacher-reviewed grading.",
    summary:
      "An evolving education platform designed to streamline academic administration, coursework submission, OCR-assisted document extraction, and structured teacher grading.",
    description:
      "EduOS addresses the operational friction in modern educational institutions, coaching centres, and training academies. It bridges student records, coursework submissions, and teacher evaluation into a transparent workflow. Using high-recall OCR and structured rubrics, EduOS assists teachers in digitizing handwritten submissions and verifying student identifiers, while keeping human educators firmly in control of all grading decisions.",
    readinessDetails:
      "EduOS features are operational in interactive prototype environments. Institutional pilots are configured directly to the institution's curriculum, assessment rubrics, and administrative hierarchy.",
    targetTeams: [
      "Coaching and specialized test preparation centres",
      "Schools, colleges, and university departments",
      "Professional training academies and certification programs",
    ],
    modules: [
      {
        id: "admissions",
        title: "Admissions & Learner Records",
        description:
          "Manage digital enrolments, student identity records, batch placements, and attendance records in one database.",
      },
      {
        id: "submissions",
        title: "Coursework & Submissions",
        description:
          "Provide students with an intuitive portal to upload written assignments, lab reports, and exam scripts.",
      },
      {
        id: "ocr-workflow",
        title: "OCR-Assisted Document Processing",
        description:
          "Automatically digitize scanned student scripts, recognize student roll numbers, and organize pages for teacher review.",
      },
      {
        id: "teacher-grading",
        title: "Teacher-Reviewed Assessment",
        description:
          "Structured rubric interfaces allowing instructors to annotate scripts, assign verified marks, and provide constructive feedback.",
      },
      {
        id: "transparency",
        title: "Student Progress & Transcripts",
        description:
          "Generate clear term summaries, verified academic transcripts, and parent/student progress report cards.",
      },
    ],
    institutions: [
      {
        name: "Coaching & Training Centres",
        context: "Streamline batch admissions, test answer-sheet digitization, and rapid score dispatch to students.",
      },
      {
        name: "Schools & Colleges",
        context: "Connect department approvals, continuous assessment records, and centralized term examinations.",
      },
      {
        name: "Universities & Academic Labs",
        context: "Coordinate course registrations, faculty evaluation matrices, and tamper-resistant digital transcripts.",
      },
    ],
    cta: {
      label: "Discuss EduOS for Your Institution",
      href: "/contact?service=eduos",
    },
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}
