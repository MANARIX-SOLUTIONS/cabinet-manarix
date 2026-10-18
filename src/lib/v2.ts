import { SERVICE_IDS, type ServiceSlug } from "@/lib/constants";

export const V2_NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/work" },
  { key: "contact", href: "/contact" },
] as const;

export type V2NavKey = (typeof V2_NAV_ITEMS)[number]["key"];

export const V2_FOOTER_LEGAL_ITEMS = [
  { key: "legal", href: "/legal" },
  { key: "privacy", href: "/privacy" },
] as const;

export const V2_PROJECTS = [
  {
    id: "payment-integration",
    photoKey: "photo1",
    relatedService: "add-rail",
  },
  {
    id: "greenfield-platform",
    photoKey: "photo2",
    relatedService: "multi-rail",
  },
  {
    id: "backend-modernization",
    photoKey: "photo3",
    relatedService: "spring-modernization",
  },
] as const;

export type V2ProjectId = (typeof V2_PROJECTS)[number]["id"];

export const V2_PROJECT_IDS = V2_PROJECTS.map((project) => project.id);

export function isV2ProjectId(slug: string): slug is V2ProjectId {
  return V2_PROJECT_IDS.includes(slug as V2ProjectId);
}

export function v2ServicePath(slug: ServiceSlug) {
  return `/services/${slug}` as const;
}

export function v2ProjectPath(slug: V2ProjectId) {
  return `/work/${slug}` as const;
}

export function v2ContactPath(offer?: ServiceSlug) {
  return offer ? (`/contact?offer=${offer}` as const) : ("/contact" as const);
}

export const V2_SITEMAP_PATHS = [
  "/",
  "/about",
  "/services",
  ...SERVICE_IDS.map((id) => `/services/${id}`),
  "/work",
  ...V2_PROJECT_IDS.map((id) => `/work/${id}`),
  "/contact",
  "/legal",
  "/privacy",
] as const;

export const V2_RAIL_COLORS = [
  "#2F6BFF",
  "#00A876",
  "#E5533D",
  "#F2A900",
  "#7B4DFF",
  "#0096C7",
  "#D6336C",
  "#2B9348",
  "#FF7A00",
  "#5C6AC4",
] as const;

export function v2RailRadius(index: number) {
  if (index % 3 === 0) return "50%";
  if (index % 3 === 1) return "6px";
  return "50% 50% 4px 50%";
}

export const V2_DOMAIN_SHAPES = [
  { radius: "50%", rotate: "none" },
  { radius: "3px", rotate: "rotate(45deg)" },
  { radius: "3px", rotate: "none" },
  { radius: "50% 50% 3px 50%", rotate: "none" },
  { radius: "50% 3px", rotate: "none" },
  { radius: "50%", rotate: "scale(0.7)" },
] as const;

export function v2TechInitials(name: string) {
  const letters = name.replace(/[^A-Za-z]/g, "");
  return letters.slice(0, 2) || name.slice(0, 2);
}

export type V2MethodItem = {
  kicker: string;
  title: string;
  body: string;
};

export type V2ProjectItem = {
  sector: string;
  title: string;
  body: string;
};

export type V2DomainItem = {
  title: string;
  desc: string;
  points: string[];
};

export type V2TechColumn = {
  title: string;
  items: string[];
};
