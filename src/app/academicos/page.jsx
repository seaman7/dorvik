import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import EduOSPage from "@/app/eduos/page";

export const metadata = {
  title: "AcademicOS is now EduOS — Connected Education Platform",
  description:
    "AcademicOS has evolved into EduOS: student records, coursework submissions, OCR-assisted document processing, and teacher-reviewed grading.",
  alternates: {
    canonical: "/eduos",
  },
};

export default function AcademicOSPage() {
  return (
    <div>
      {/* Notice Banner */}
      <div className="bg-[#edf5f1] border-b border-[#d2e5da] py-3 px-4 text-xs font-medium text-[#14382c] text-center flex items-center justify-center gap-2">
        <Info size={14} className="text-[#84cc16]" />
        <span>
          AcademicOS has evolved into <strong>EduOS</strong> (Connected Education &amp; Assessment).
        </span>
        <Link href="/eduos" className="underline font-bold hover:text-[#0c241c]">
          Explore EduOS →
        </Link>
      </div>

      <EduOSPage />
    </div>
  );
}
