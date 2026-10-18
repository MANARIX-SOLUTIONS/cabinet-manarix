import {
  SERVICE_IDS,
  WORK_ID_BY_SLUG,
  WORK_SLUGS,
  type WorkId,
} from "@/lib/constants";

export const STATIC_PAGE_PATHS = [
  "/about",
  "/privacy",
  "/legal",
  "/contact",
] as const;

export type StaticPagePath = (typeof STATIC_PAGE_PATHS)[number];

export function servicePath(slug: (typeof SERVICE_IDS)[number]) {
  return `/services/${slug}` as const;
}

export function quotePath(offer?: (typeof SERVICE_IDS)[number]) {
  return offer ? (`/contact?offer=${offer}` as const) : ("/contact" as const);
}

export function partnerInquiryPath() {
  return "/contact?family=partnership";
}

export function workPath(id: WorkId) {
  return `/work/${WORK_SLUGS[id]}` as const;
}

export function isValidWorkSlug(
  slug: string,
): slug is keyof typeof WORK_ID_BY_SLUG {
  return slug in WORK_ID_BY_SLUG;
}
