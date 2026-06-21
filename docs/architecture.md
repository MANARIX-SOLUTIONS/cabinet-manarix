# Architecture

## High-level overview

```
Browser
   │
   ▼
src/proxy.ts          ← locale detection & redirects (next-intl middleware)
   │
   ▼
src/app/[locale]/     ← localized App Router pages (SSG)
   │
   ├── messages/{locale}.json   ← all user-facing copy
   ├── src/lib/constants.ts    ← content IDs (services, clients, team…)
   └── src/lib/site.ts          ← global site metadata
```

The site is **fully static** at build time. The only server runtime is the contact form server action (`src/app/actions/contact.ts`).

---

## Internationalization (i18n)

Configured in `src/i18n/routing.ts`:

- **Locales:** `en` (default), `fr`
- **Prefix:** `as-needed` — English URLs omit the locale prefix (`/` not `/en`)

### Key files

| File                                   | Role                                           |
| -------------------------------------- | ---------------------------------------------- |
| `src/i18n/routing.ts`                  | Locale list and prefix strategy                |
| `src/i18n/request.ts`                  | Loads `messages/{locale}.json` per request     |
| `src/i18n/navigation.ts`               | Locale-aware `Link`, `redirect`, `usePathname` |
| `src/proxy.ts`                         | Middleware — locale negotiation                |
| `messages/en.json`, `messages/fr.json` | All translatable strings                       |

### Usage in components

```tsx
// Server component
const t = await getTranslations("hero");

// Client component
const t = useTranslations("nav");
```

Namespaces mirror JSON keys: `metadata`, `hero`, `services`, `pages.serviceDetail.fintech`, etc.

---

## Page composition

### Homepage (`src/app/[locale]/page.tsx`)

Single-page layout stacking marketing sections:

1. Hero → Logo marquee → Services → Industries → Why Manarix
2. Team → Process → Case studies → Trust → Clients → Testimonials → CTA

Each section is an async server component in `src/components/sections/`.

### Inner pages

Use `PageShell` (`src/components/layout/page-shell.tsx`) for consistent navbar, footer, scroll progress, and back-to-top.

Detail pages (services, work) compose shared blocks from `src/components/pages/`:

- `PageHero` — title, description, breadcrumbs
- `DetailListSection` — bullet lists (capabilities, outcomes)
- `ProcessOverview` — numbered steps
- `DetailCTA` — bottom call-to-action

---

## Content model

Content is **ID-driven**, not CMS-backed.

1. Add an ID to `src/lib/constants.ts` (e.g. `SERVICE_IDS`, `CASE_STUDY_IDS`).
2. Add matching translation keys in both `messages/en.json` and `messages/fr.json`.
3. For routable content, wire `generateStaticParams()` in the page file.

Example — adding a service:

```ts
// constants.ts
export const SERVICE_IDS = ["fintech", "enterprise", "cloud", "advisory", "new-id"] as const;
```

```json
// messages/en.json → pages.serviceDetail.new-id
{
  "metaTitle": "...",
  "metaDescription": "...",
  "title": "...",
  "capabilities": { "items": ["...", "..."] }
}
```

---

## Contact form flow

```
ContactForm (client)
   │ useActionState
   ▼
submitContactForm (server action)
   ├── honeypot check (field: website)
   ├── validateContactForm (src/lib/validation.ts)
   └── sendViaResend → Resend API (if RESEND_API_KEY set)
```

Validation rules:

- Name ≥ 2 characters
- Valid email format
- Company required
- Service selection required
- Message ≥ 20 characters

Errors and success messages are localized via the `contact` namespace.

---

## SEO

| Mechanism        | Location                                                        |
| ---------------- | --------------------------------------------------------------- |
| Page metadata    | `generateMetadata()` per route + `[locale]/layout.tsx`          |
| Open Graph image | `src/app/opengraph-image.tsx` (1200×630)                        |
| Favicon          | `src/app/icon.tsx` (32×32)                                      |
| JSON-LD          | `src/components/seo/json-ld.tsx` — `ProfessionalService` schema |
| Sitemap          | `src/app/sitemap.ts` — all locales + hreflang alternates        |
| Robots           | `src/app/robots.ts`                                             |

Canonical URLs and hreflang are derived from `SITE.url` and `routing.locales`.

---

## Theming

CSS custom properties in `src/app/globals.css` drive light and dark themes:

```css
:root { --brand: #0f172a; --secondary: #2563eb; --accent: #059669; … }
.dark { … }
```

`ThemeProvider` (`src/components/providers/theme-provider.tsx`) persists preference under `manarix-theme` in `localStorage`.

Utility classes: `premium-card`, `text-gradient`, `dot-grid`, `glow-primary`, etc.

---

## Component conventions

| Directory   | Purpose                                                |
| ----------- | ------------------------------------------------------ |
| `ui/`       | Stateless primitives — Button, Input, Badge, Container |
| `sections/` | Full-width homepage blocks                             |
| `pages/`    | Blocks reused on inner pages                           |
| `layout/`   | Global chrome (navbar, footer)                         |
| `visual/`   | Decorative SVG / mockup illustrations                  |

- Prefer **server components** unless client interactivity is required (navbar scroll, theme toggle, contact form).
- Animations: `FadeIn` wrapper + Framer Motion where needed.
- Icons: Lucide React, mapped from string keys in `constants.ts`.

---

## Path aliases

TypeScript path `@/*` maps to `src/*` (see `tsconfig.json`).

```ts
import { SITE } from "@/lib/site";
import { Logo } from "@/components/ui/logo";
```
