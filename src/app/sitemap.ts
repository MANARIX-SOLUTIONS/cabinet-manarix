import type { MetadataRoute } from "next";
import { SERVICE_IDS, WORK_SLUG_LIST } from "@/lib/constants";
import { STATIC_PAGE_PATHS } from "@/lib/paths";
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
  const paths = [
    "/",
    ...STATIC_PAGE_PATHS,
    "/services",
    ...SERVICE_IDS.map((id) => `/services/${id}`),
    "/work",
    ...WORK_SLUG_LIST.map((slug) => `/work/${slug}`),
  ];

  const now = new Date();

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: buildLocalizedUrl(path, locale),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.7,
      alternates: buildAlternates(path),
    })),
  );
}
