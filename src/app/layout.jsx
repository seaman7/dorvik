import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const viewport = {
  themeColor: "#fbf9f4",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Dorvik — AI Data, Custom Software & Managed Compute",
    template: "%s | Dorvik",
  },
  description:
    "Bangladesh-based technology engineering partner delivering high-accuracy AI training data, computer vision and OCR solutions, custom software automation, and managed GPU cloud deployments.",
  keywords: [
    "Dorvik",
    "Dorvik AI Services",
    "AI Data Annotation",
    "Image Annotation Bangladesh",
    "Bangla Audio Transcription",
    "Computer Vision Engineering",
    "OCR Extraction",
    "Custom Software Development",
    "Business Automation",
    "Managed GPU Deployment",
    "BizOS",
    "EduOS",
    "Technology Company Bangladesh",
  ],
  authors: [{ name: "Dorvik AI Services" }],
  creator: "Dorvik",
  publisher: "Dorvik AI Services",
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dorvik — AI Data, Custom Software & Managed Compute",
    description:
      "High-accuracy AI training data, computer vision, custom software automation, and managed GPU cloud deployments for growing teams.",
    url: SITE_CONFIG.baseUrl,
    siteName: "Dorvik",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorvik — AI Data, Custom Software & Managed Compute",
    description:
      "Practical engineering for growing technical teams: AI data annotation, computer vision, bespoke software, and managed GPU deployments.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/dorvik-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth light" data-theme="light">
      <body className="min-h-screen bg-[#fbf9f4] text-[#293830] antialiased selection:bg-[#d9f99d] selection:text-[#14382c] font-sans flex flex-col">
        <ThemeProvider>
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#14382c] focus:text-white focus:outline-none font-semibold rounded-md shadow-lg"
          >
            Skip to main content
          </a>

          {/* Site Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>

          {/* Site Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
