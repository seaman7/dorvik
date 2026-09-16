import "./globals.css";
import { HackerRankNavbar } from "@/components/home/HackerRankNavbar";
import { HackerRankFooter } from "@/components/home/HackerRankFooter";

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "DORVIK — Software & AI Systems for the Agentic Era",
    template: "%s | DORVIK",
  },
  description:
    "DORVIK builds intelligent software, applied AI systems, computer vision solutions, and scalable cloud infrastructure for ambitious businesses.",
  keywords: [
    "DORVIK",
    "Agentic Era",
    "intelligent software",
    "computer vision",
    "OpenCV",
    "AI systems",
    "data annotation",
    "digital engineering",
    "cloud infrastructure",
  ],
  authors: [{ name: "DORVIK Engineering Team" }],
  creator: "DORVIK",
  publisher: "DORVIK",
  metadataBase: new URL("https://dorvik.com"),
  alternates: {
    canonical: "https://dorvik.com",
  },
  openGraph: {
    title: "DORVIK — Software & AI Systems for the Agentic Era",
    description:
      "DORVIK builds intelligent software, applied AI systems, computer vision solutions, and scalable cloud infrastructure for ambitious businesses.",
    url: "https://dorvik.com",
    siteName: "DORVIK",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DORVIK — Software & AI Systems for the Agentic Era",
    description:
      "Software & AI systems engineered for the Agentic Era.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFFFFF] text-[#0E1015] antialiased selection:bg-[#00EA64] selection:text-[#0E1015]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0E1015] focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>

        {/* HackerRank Style Navigation Bar */}
        <HackerRankNavbar />

        {/* Main Content */}
        {children}

        {/* HackerRank Style Footer */}
        <HackerRankFooter />
      </body>
    </html>
  );
}
