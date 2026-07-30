import type { MetadataRoute } from "next";

const siteUrl = "https://www.divenzainc.com";

const routes = [
  "",
  "/about-us",
  "/services",
  "/products/ditechcloud",
  "/products/diseller",
  "/products/diposcloud",
  "/our-community",
  "/contact-us",
  "/careers",
  "/privacy-policy",
  "/terms-of-services",
  "/cookie-policy",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
