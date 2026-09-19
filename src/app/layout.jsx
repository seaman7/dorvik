import "./globals.css";
import { DorvikNavbar } from "@/components/home/DorvikNavbar";
import { DorvikFooter } from "@/components/home/DorvikFooter";

export const viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "DORVIK — Autonomous AI & Cloud Infrastructure Agent",
    template: "%s | DORVIK",
  },
  description:
    "Dorvik is an autonomous AI & infrastructure agent that handles the complex cloud, GPU, and engineering tasks you don't want to do.",
  keywords: [
    "DORVIK",
    "Autonomous Agent",
    "Dorvik",
    "AI Agent",
    "GPU Orchestration",
    "WareTwin",
    "H100 Clusters",
    "Cloud Infrastructure",
    "Gemini 3 Pro",
    "Claude 3.7",
  ],
  authors: [{ name: "DORVIK Engineering Labs" }],
  creator: "DORVIK",
  publisher: "DORVIK",
  metadataBase: new URL("https://dorvik.com"),
  alternates: {
    canonical: "https://dorvik.com",
  },
  openGraph: {
    title: "DORVIK — Autonomous AI & Cloud Infrastructure Agent",
    description:
      "Autonomous agent for high-throughput GPU orchestration, digital twin simulations, and automated code migrations.",
    url: "https://dorvik.com",
    siteName: "DORVIK",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DORVIK — Autonomous AI & Cloud Infrastructure Agent",
    description:
      "Dorvik handles the complex engineering tasks you don't want to do.",
  },
  icons: {
    icon: "/dorvik-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#08080A] text-neutral-200 antialiased selection:bg-cyan-500 selection:text-black font-sans">
        {/* Accessible Skip Link */}
        <a
          href="#editor"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-400 focus:text-purple-950 focus:outline-none font-bold"
        >
          Skip to editor
        </a>

        {/* Dorvik Navigation Bar */}
        <DorvikNavbar />

        {/* Main Content */}
        <main id="main-content" className="relative z-10 min-h-screen flex flex-col">
          {children}
        </main>

        {/* Dorvik Footer */}
        <DorvikFooter />
      </body>
    </html>
  );
}
