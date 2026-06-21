export const SITE = {
  name: "Manarix Solutions",
  tagline: "Engineering Africa's Digital Future",
  description:
    "FinTech & Enterprise Software Engineering firm helping banks, fintechs, startups, and enterprises build scalable digital platforms across Africa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://manarix.com",
  email: "hello@manarix.com",
  social: {
    linkedin: "https://linkedin.com/company/manarix-solutions",
    github: "https://github.com/manarix-solutions",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
} as const;
