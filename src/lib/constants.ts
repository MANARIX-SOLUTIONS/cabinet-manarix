export const TRUST_STAT_IDS = ["region", "diagnostic", "proposal"] as const;

export const NAV_ITEMS = [
  { key: "expertise", href: "/#expertise" },
  { key: "services", href: "/#offers" },
  { key: "approach", href: "/#approach" },
  { key: "caseStudies", href: "/#work" },
  { key: "insights", href: "/#insights" },
  { key: "about", href: "/about" },
] as const;

export const FOOTER_EXPERTISE_LINKS = [
  { key: "payments", href: "/services/payment-audit" },
  { key: "modernization", href: "/services/spring-modernization" },
  { key: "greenfield", href: "/services/multi-rail" },
  { key: "architecture", href: "/services/architecture-review" },
  { key: "distributed", href: "/services/production-audit" },
] as const;

export const FOOTER_PAGE_LINKS = [
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "about", href: "/about" },
  { key: "legal", href: "/legal" },
  { key: "privacy", href: "/privacy" },
] as const;

export const SERVICE_FAMILY_IDS = [
  "advisory",
  "engineering",
  "managed",
] as const;

export const SERVICE_FAMILY_ICONS = {
  advisory: "search",
  engineering: "code",
  managed: "activity",
} as const;

export const SERVICE_IDS = [
  "api-audit",
  "payment-audit",
  "architecture-review",
  "production-audit",
  "security-audit",
  "performance-audit",
  "reconciliation-diagnostic",
  "golive-review",
  "due-diligence",
  "training",
  "spring-modernization",
  "multi-rail",
  "add-rail",
  "emergency",
  "ledger",
  "orchestration",
  "wallet",
  "engineering-care",
  "engineering-pro",
  "maintenance",
] as const;

export const SERVICE_FAMILY_OFFERS = {
  advisory: [
    "api-audit",
    "payment-audit",
    "architecture-review",
    "production-audit",
    "security-audit",
    "performance-audit",
    "reconciliation-diagnostic",
    "golive-review",
    "due-diligence",
    "training",
  ],
  engineering: [
    "spring-modernization",
    "multi-rail",
    "add-rail",
    "emergency",
    "ledger",
    "orchestration",
    "wallet",
  ],
  managed: ["engineering-care", "engineering-pro", "maintenance"],
} as const;

export type ServiceSlug = (typeof SERVICE_IDS)[number];
export type ServiceFamilyId = (typeof SERVICE_FAMILY_IDS)[number];

export const SERVICE_FAMILY_BY_OFFER = Object.fromEntries(
  (
    Object.entries(SERVICE_FAMILY_OFFERS) as [
      ServiceFamilyId,
      readonly ServiceSlug[],
    ][]
  ).flatMap(([family, offers]) => offers.map((offer) => [offer, family])),
) as Record<ServiceSlug, ServiceFamilyId>;

export const HOME_FEATURED_OFFERS = [
  "payment-audit",
  "add-rail",
  "spring-modernization",
  "multi-rail",
] as const;

export const OUT_OF_SCOPE_IDS = [
  "brochure",
  "staffing",
  "oncallRfp",
  "equity",
] as const;

export const EXPERTISE_IDS = [
  "payments",
  "api",
  "java",
  "architecture",
  "cloud",
  "observability",
  "security",
  "performance",
] as const;

export const EXPERTISE_ICONS = {
  payments: "credit-card",
  api: "waypoints",
  java: "file-code",
  architecture: "layers",
  cloud: "cloud",
  observability: "activity",
  security: "shield",
  performance: "gauge",
} as const;

export const LAB_IDS = ["payments", "legacy", "security", "recovery"] as const;

export const INDUSTRY_IDS = ["fintech", "greenfield", "platforms"] as const;

export const INDUSTRY_ICONS = {
  fintech: "trending-up",
  greenfield: "sparkles",
  platforms: "building-2",
} as const;

export const PROCESS_STEP_IDS = [
  "discover",
  "diagnose",
  "engineer",
  "scale",
] as const;

export const VALUE_PROP_IDS = [
  "integration",
  "modernization",
  "greenfield",
] as const;

export const VALUE_PROP_ICONS = {
  integration: "plug",
  modernization: "refresh-cw",
  greenfield: "sparkles",
} as const;

export const SECTION_CTA_VARIANTS = [
  "services",
  "caseStudies",
  "architecture",
] as const;

export type SectionCtaVariant = (typeof SECTION_CTA_VARIANTS)[number];

export const WHY_MANARIX_COLUMN_IDS = [
  "domain",
  "engineering",
  "impact",
] as const;

export const ARCHITECTURE_PRINCIPLE_IDS = [
  "idempotency",
  "resilience",
  "observability",
  "consistency",
  "security",
  "reconciliation",
] as const;

export const ARCHITECTURE_PRINCIPLE_ICONS = {
  idempotency: "repeat",
  resilience: "refresh-cw",
  observability: "scan-eye",
  consistency: "layers",
  security: "shield",
  reconciliation: "scale",
} as const;

export const CREDIBILITY_METRIC_IDS = [
  "experience",
  "enterprise",
  "stack",
  "perspective",
] as const;

export const CASE_STUDY_IDS = [
  "payment-platform",
  "greenfield-platform",
] as const;

export const PROCESS_STEP_NUMBERS = ["01", "02", "03", "04"] as const;

export const TEAM_MEMBER_IDS = ["founder", "partner"] as const;

export const TEAM_GRADIENTS = {
  founder: "from-secondary/30 to-blue-600/20",
  partner: "from-emerald-500/25 to-teal-600/15",
} as const;

export const TEAM_PHOTOS: Partial<
  Record<(typeof TEAM_MEMBER_IDS)[number], string>
> = {};

export const CONTACT_FAMILY_IDS = [
  ...SERVICE_FAMILY_IDS,
  "partnership",
] as const;

export const VOLUME_IDS = [
  "under5m",
  "from5to50m",
  "from50to500m",
  "over500m",
  "na",
] as const;

export const BUDGET_IDS = [
  "under1m",
  "from1to3m",
  "from3to10m",
  "over10m",
  "undecided",
] as const;

export const TIMELINE_IDS = [
  "immediate",
  "month",
  "quarter",
  "exploratory",
] as const;

export const FAQ_IDS = [
  "young",
  "capacity",
  "partners",
  "references",
  "pricing",
  "region",
  "start",
] as const;

export const PARTNER_CHANNEL_IDS = ["agencies", "integrators", "psps"] as const;

export const PARTNER_RULE_IDS = [
  "scope",
  "account",
  "label",
  "handover",
] as const;

export const PROBLEM_SYMPTOM_IDS = [
  "apis",
  "payments",
  "legacy",
  "observability",
] as const;

export const TRANSPARENCY_COMMITMENT_IDS = [
  "milestones",
  "ownership",
  "noLockin",
  "warranty",
  "formal",
] as const;

export const PROOF_PUBLICATION_IDS = [
  "webhooks",
  "timeouts",
  "reconciliation",
  "observability",
  "spring",
] as const;

export const WORK_SLUGS = {
  xaalis: "xaalis",
} as const;

export type WorkId = keyof typeof WORK_SLUGS;

export const WORK_SLUG_LIST = Object.values(WORK_SLUGS);

export const WORK_ID_BY_SLUG = Object.fromEntries(
  Object.entries(WORK_SLUGS).map(([id, slug]) => [slug, id]),
) as Record<(typeof WORK_SLUG_LIST)[number], WorkId>;

export type ValidationKey =
  | "name"
  | "email"
  | "company"
  | "family"
  | "volume"
  | "budget"
  | "timeline"
  | "message";

export type ValidationMessages = Record<ValidationKey | "formError", string>;
