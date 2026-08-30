export const SITE = {
  name: "Manarix Solutions",
  tagline: "FinTech Engineering & Payment Infrastructure",
  description:
    "Manarix Solutions aide fintechs, PSP et plateformes digitales à intégrer des paiements, moderniser des backends et construire des infrastructures greenfield.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://manarix-solutions.com",
  email: "hello@manarix-solutions.com",
  location: "Dakar, Sénégal",
  foundedYear: 2026,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  social: {
    linkedin: "https://linkedin.com/company/manarix-solutions",
    github: "https://github.com/manarix-solutions",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
  legal: {
    form: process.env.NEXT_PUBLIC_LEGAL_FORM ?? "",
    ninea: process.env.NEXT_PUBLIC_NINEA ?? "",
    rccm: process.env.NEXT_PUBLIC_RCCM ?? "",
    address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS ?? "Dakar, Sénégal",
    director: "Saifoulaye Diallo",
  },
} as const;

export function getWhatsAppUrl() {
  const digits = SITE.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}
