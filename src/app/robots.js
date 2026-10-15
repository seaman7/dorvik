import { SITE_CONFIG } from "@/lib/siteConfig";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
  };
}
