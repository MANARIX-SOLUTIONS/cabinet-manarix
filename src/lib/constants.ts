export const NAV_ITEMS = [
  { key: "services", href: "/services" },
  { key: "industries", href: "/#industries" },
  { key: "about", href: "/about" },
  { key: "clients", href: "/#clients" },
  { key: "contact", href: "/#contact" },
] as const;

export const FOOTER_PAGE_LINKS = [
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "about", href: "/about" },
  { key: "privacy", href: "/privacy" },
] as const;

export const SERVICE_IDS = [
  "fintech",
  "enterprise",
  "cloud",
  "advisory",
] as const;

export const SERVICE_ICONS = {
  fintech: "credit-card",
  enterprise: "layers",
  cloud: "cloud",
  advisory: "compass",
} as const;

export const INDUSTRY_IDS = [
  "fintech",
  "banking",
  "insurance",
  "retail",
  "logistics",
  "healthcare",
] as const;

export const INDUSTRY_ICONS = {
  fintech: "trending-up",
  banking: "landmark",
  insurance: "shield",
  retail: "shopping-bag",
  logistics: "truck",
  healthcare: "heart-pulse",
} as const;

export const PROCESS_STEP_IDS = [
  "discover",
  "architect",
  "build",
  "scale",
] as const;

export const PROCESS_STEP_NUMBERS = ["01", "02", "03", "04"] as const;

export const CASE_STUDY_IDS = ["payment", "operations", "cloud"] as const;

export const CASE_STUDY_TYPES = {
  payment: "payment",
  operations: "operations",
  cloud: "cloud",
} as const;

export const TESTIMONIAL_IDS = ["one", "two", "three"] as const;

export const TRUST_METRIC_IDS = [
  "experience",
  "platforms",
  "fintech",
  "cloud",
] as const;

export const TRUST_METRIC_ICONS = [
  "clock",
  "building",
  "credit-card",
  "cloud",
] as const;

export const WHY_PILLAR_IDS = ["mindset", "expertise", "architecture"] as const;

export const WHY_PILLAR_ICONS = {
  mindset: "trending-up",
  expertise: "shield",
  architecture: "layers",
} as const;

export const CLIENT_IDS = [
  "teranga",
  "sahel",
  "atlas",
  "kora",
  "baobab",
  "mande",
  "horizon",
  "nexus",
] as const;

export const CLIENT_GRADIENTS = {
  teranga: "from-blue-500/20 to-cyan-500/10",
  sahel: "from-emerald-500/20 to-teal-500/10",
  atlas: "from-violet-500/20 to-purple-500/10",
  kora: "from-amber-500/20 to-orange-500/10",
  baobab: "from-rose-500/20 to-pink-500/10",
  mande: "from-indigo-500/20 to-blue-500/10",
  horizon: "from-sky-500/20 to-blue-500/10",
  nexus: "from-secondary/20 to-accent/10",
} as const;

export const TEAM_MEMBER_IDS = [
  "ceo",
  "cto",
  "engineering",
  "fintech",
  "cloud",
  "delivery",
] as const;

export const TEAM_GRADIENTS = {
  ceo: "from-secondary/30 to-blue-600/20",
  cto: "from-violet-500/25 to-purple-600/15",
  engineering: "from-emerald-500/25 to-teal-600/15",
  fintech: "from-amber-500/25 to-orange-600/15",
  cloud: "from-sky-500/25 to-cyan-600/15",
  delivery: "from-rose-500/25 to-pink-600/15",
} as const;

export const CONTACT_SERVICE_IDS = [
  "fintech",
  "enterprise",
  "cloud",
  "advisory",
  "other",
] as const;

export const WORK_SLUGS = {
  payment: "payment-platform",
  operations: "operations-platform",
  cloud: "cloud-modernization",
} as const;

export type WorkId = keyof typeof WORK_SLUGS;

export const WORK_SLUG_LIST = Object.values(WORK_SLUGS);

export const WORK_ID_BY_SLUG = Object.fromEntries(
  Object.entries(WORK_SLUGS).map(([id, slug]) => [slug, id]),
) as Record<(typeof WORK_SLUG_LIST)[number], WorkId>;

export type ServiceSlug = (typeof SERVICE_IDS)[number];

export type ValidationKey =
  | "name"
  | "email"
  | "company"
  | "service"
  | "message";

export type ValidationMessages = Record<ValidationKey | "formError", string>;
