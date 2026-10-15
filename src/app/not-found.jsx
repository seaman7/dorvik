import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Dorvik",
  description: "The requested page could not be found on Dorvik.",
};

export default function NotFound() {
  return (
    <div className="dv-page py-24 min-h-[65vh] flex items-center justify-center">
      <div className="dv-container max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf5f1] border border-[#d2e5da] text-xs font-mono text-[#14382c] font-bold">
          <span>ERROR 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14382c] tracking-tight">
          Page not found.
        </h1>

        <p className="text-sm sm:text-base text-[#596a60] leading-relaxed">
          The page or resource you requested may have moved or is not published yet.
          You can return to the homepage or explore our core offerings below.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="dv-btn-primary">
            <Home size={15} />
            <span>Return Home</span>
          </Link>
          <Link href="/services" className="dv-btn-secondary">
            <span>Explore Services</span>
            <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="dv-btn-secondary">
            <span>Discuss a Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
