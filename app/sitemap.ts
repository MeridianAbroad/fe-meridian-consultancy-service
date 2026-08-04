import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";
import { getCountries, getUniversities, getBlogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;

  const staticRoutes = [
    "",
    "/about",
    "/countries",
    "/universities",
    "/courses",
    "/services",
    "/fees",
    "/visa-assistance",
    "/success-stories",
    "/blog",
    "/faqs",
    "/contact",
    "/apply",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const countryRoutes = getCountries().map((c) => ({
    url: `${base}/countries/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const universityRoutes = getUniversities().map((u) => ({
    url: `${base}/universities/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...countryRoutes, ...universityRoutes, ...blogRoutes];
}
