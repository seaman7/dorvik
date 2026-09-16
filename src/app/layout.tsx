import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#F7F7F3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "DORVIK — Intelligent Software, AI Systems & Digital Engineering",
    template: "%s | DORVIK",
  },
  description:
    "DORVIK builds intelligent software, AI systems, computer vision solutions, digital products and reliable cloud infrastructure for ambitious teams.",
  keywords: [
    "DORVIK",
    "intelligent software",
    "AI systems",
    "computer vision",
    "data annotation",
    "custom software development",
    "web application development",
    "cloud deployment",
    "OpenCV",
    "digital engineering",
  ],
  authors: [{ name: "DORVIK Engineering Team" }],
  creator: "DORVIK",
  publisher: "DORVIK",
  metadataBase: new URL("https://dorvik.com"),
  alternates: {
    canonical: "https://dorvik.com",
  },
  openGraph: {
    title: "DORVIK — Intelligent Software, AI Systems & Digital Engineering",
    description:
      "DORVIK builds intelligent software, AI systems, computer vision solutions, digital products and reliable cloud infrastructure for ambitious teams.",
    url: "https://dorvik.com",
    siteName: "DORVIK",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DORVIK — Intelligent Software, AI Systems & Digital Engineering",
    description:
      "We build intelligent software, AI systems and digital products for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F7F7F3] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#F7F7F3]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#F7F7F3] focus:outline-none"
        >
          Skip to main content
        </a>

        {/* 1. Navigation Header */}
        <Navbar />

        {/* Page Main Content */}
        {children}

        {/* 11. Footer */}
        <Footer />
      </body>
    </html>
  );
}
