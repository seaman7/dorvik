import { redirect } from "next/navigation";
import { CORE_SERVICES } from "@/lib/servicesData";

const SLUG_MAP = {
  "data-annotation": "/services/data-annotation",
  "ai-engineering": "/services/ai-engineering",
  "software-development": "/services/software-development",
  "gpu-cloud": "/services/gpu-cloud",
  "ai-ml-data": "/services/ai-engineering",
  "custom-software": "/services/software-development",
  "saas": "/services/software-development",
  "erp": "/bizos",
  "e-governance": "/eduos",
  "paperless-office": "/bizos",
  "ar-vr-iot": "/services/software-development",
  "outsourced-development": "/services/software-development",
};

export function generateStaticParams() {
  return Object.keys(SLUG_MAP).map((slug) => ({ slug }));
}

export default async function SolutionRedirectPage({ params }) {
  const { slug } = await params;
  const target = SLUG_MAP[slug] || "/services";
  redirect(target);
}
