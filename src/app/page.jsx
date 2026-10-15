import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { InteractiveProof } from "@/components/home/InteractiveProof";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { DeliveryProcess } from "@/components/home/DeliveryProcess";
import { Differentiation } from "@/components/home/Differentiation";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";

export const metadata = {
  title: "Dorvik — AI Data, Custom Software & Managed Compute",
  description:
    "AI training data & annotation services, computer vision & OCR engineering, custom software automation, and managed GPU cloud deployments for growing teams.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="dv-page flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Core Services */}
      <ServicesSection />

      {/* 3. Interactive Working Proof */}
      <InteractiveProof />

      {/* 4. Products Preview (BizOS & EduOS) */}
      <ProductsPreview />

      {/* 5. Delivery Process (How We Work) */}
      <DeliveryProcess />

      {/* 6. Differentiation & Values */}
      <Differentiation />

      {/* 7. Final Action CTA */}
      <HomeFinalCta />
    </div>
  );
}
