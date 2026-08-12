import type { MetadataRoute } from "next";
import { siteUrl } from "@content/profile";
import { projects } from "@content/projects";
import { routing } from "@/i18n/routing";

const paths = ["", "/work", "/about", "/publications", "/teaching", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const project of projects) {
      entries.push({
        url: `${siteUrl}/${locale}/work/${project.slug}`,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
