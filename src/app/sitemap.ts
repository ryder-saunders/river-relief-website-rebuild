import type { MetadataRoute } from "next";
import { absoluteUrl, seoRoutes } from "@/lib/seo";

const lastModified = new Date("2026-08-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return seoRoutes
    .filter((route) => !route.noIndex)
    .map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.image ? [absoluteUrl(route.image)] : undefined,
    }));
}
