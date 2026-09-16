export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dorvik.com/sitemap.xml",
  };
}
