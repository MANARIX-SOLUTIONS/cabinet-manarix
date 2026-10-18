import type { MetadataRoute } from "next";
import { V2_SITEMAP_PATHS } from "@/lib/v2";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";

function buildLocalizedUrl(path: string, locale: string) {
  const normalized = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) {
    return `${SITE.url}${normalized}`;
  }
  return `${SITE.url}/${locale}${normalized}`;
}

function buildAlternates(path: string) {
  return {
    languages: Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        buildLocalizedUrl(path, locale),
      ]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routing.locales.flatMap((locale) =>
    V2_SITEMAP_PATHS.map((path) => ({
      url: buildLocalizedUrl(path, locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.7,
      alternates: buildAlternates(path),
    })),
  );
}
