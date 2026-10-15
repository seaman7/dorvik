/**
 * Dorvik Site & Contact Configuration
 *
 * Centralizes site identity, canonical base URLs, domain launch roadmap,
 * and business contact parameters.
 *
 * NOTE ON DOMAIN & EMAIL LAUNCH:
 * Domain registration for dorvik.tech and official business email configuration
 * are scheduled for Sunday, 18 October 2026.
 * Fallback URL points to the live Vercel deployment until DNS is activated.
 */

export const SITE_CONFIG = {
  name: "Dorvik",
  legalName: "Dorvik AI Services",
  positioning: "AI data, custom software, and managed compute for growing teams.",
  description:
    "Bangladesh-based technology business delivering high-accuracy AI training data, computer vision and OCR engineering, custom software automation, and managed GPU cloud deployments.",

  // Base URL configuration (uses environment variable with live Vercel fallback)
  baseUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://dorvik-murex.vercel.app",

  // Planned domain architecture
  plannedDomain: "dorvik.tech",
  domainLaunchScheduled: "Sunday, 18 October 2026",

  // Future subdomain architecture (to be activated post domain registration)
  futureSubdomains: {
    bizos: "bizos.dorvik.tech",
    eduos: "eduos.dorvik.tech",
    gpu: "gpu.dorvik.tech",
    portal: "portal.dorvik.tech",
  },

  // Contact & Business Email Configuration
  contact: {
    // Postponed until Sunday, 18 October 2026. Set to true once verified on dorvik.tech
    emailEnabled: false,
    
    // Configured active mailbox (null / empty string until mailbox verification)
    activeEmail: null,

    // Future mailboxes to be provisioned under dorvik.tech
    futureMailboxes: {
      hello: "hello@dorvik.tech",
      sales: "sales@dorvik.tech",
      support: "support@dorvik.tech",
    },

    // Location & Operating Hub
    location: {
      city: "Dhaka",
      country: "Bangladesh",
      region: "South Asia",
      coverage: "Serving clients in Bangladesh and internationally",
      timezone: "BST (UTC+6)",
    },
  },

  // Main navigation structure
  navigation: [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "How We Work", href: "/#how-we-work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Primary Action CTA
  primaryCta: {
    label: "Discuss a Project",
    href: "/contact",
  },

  // Social / Source Links
  links: {
    github: "https://github.com/seaman7/dorvik",
    deployment: "https://dorvik-murex.vercel.app",
  },
};
