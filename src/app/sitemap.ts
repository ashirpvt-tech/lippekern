import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["de", "en"].map((locale) => ({
    url: `${site.url}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: { de: `${site.url}/de`, en: `${site.url}/en` } },
  }));
}
