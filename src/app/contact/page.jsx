import { ContactConsole } from "@/components/contact/ContactConsole";

export const metadata = {
  title: "Discuss a Project — Contact & Brief Console | Dorvik",
  description:
    "Prepare and download a structured project brief for AI data annotation, computer vision & OCR, software automation, or GPU deployments.",
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;
  const initialService = params?.service || "general";
  const initialRole = params?.role || "";

  return (
    <ContactConsole
      initialService={initialService}
      initialRole={initialRole}
    />
  );
}
