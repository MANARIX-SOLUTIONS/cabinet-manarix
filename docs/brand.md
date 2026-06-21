# Brand & design system

Visual identity for Manarix Solutions on the web.

---

## Logo assets

| File                         | Usage                                           |
| ---------------------------- | ----------------------------------------------- |
| `public/logo-full.png`       | Full logo on dark background (marketing, decks) |
| `public/logo-full.svg`       | Vector full lockup (icon + wordmark)            |
| `src/components/ui/logo.tsx` | Interactive logo in navbar & footer             |

### In-app logo component

```tsx
import { Logo } from "@/components/ui/logo";

<Logo />                          // mark + text
<Logo showText={false} />         // icon only
<Logo variant="light" />          // for dark backgrounds
```

Favicon and social preview are generated dynamically:

- `src/app/icon.tsx` — 32×32 app icon
- `src/app/opengraph-image.tsx` — 1200×630 OG image

---

## Color palette

Defined as CSS variables in `src/app/globals.css`.

### Light theme (`:root`)

| Token              | Hex       | Usage                     |
| ------------------ | --------- | ------------------------- |
| `--brand`          | `#0F172A` | Primary brand / headings  |
| `--secondary`      | `#2563EB` | Links, CTAs, accents      |
| `--accent`         | `#059669` | Success, secondary accent |
| `--background`     | `#F8FAFC` | Page background           |
| `--surface`        | `#FFFFFF` | Elevated surfaces         |
| `--text-primary`   | `#0F172A` | Body text                 |
| `--text-secondary` | `#475569` | Supporting text           |
| `--text-muted`     | `#64748B` | Captions, labels          |

### Dark theme (`.dark`)

| Token            | Value     |
| ---------------- | --------- |
| `--background`   | `#060B18` |
| `--surface`      | `#0C1222` |
| `--text-primary` | `#F1F5F9` |

### Gradients

- **Text gradient:** `#2563EB → #3B82F6 → #10B981` (class: `text-gradient`)
- **Brand icon:** `#0F172A → #1E293B` (class: `brand-icon`)
- **CTA surface:** soft blue/green wash (light mode)

Tailwind theme tokens map via `@theme inline` — use classes like `text-secondary`, `bg-background`, `border-border`.

---

## Typography

| Role     | Font        | Class                 |
| -------- | ----------- | --------------------- |
| Body     | Inter       | `font-sans` (default) |
| Headings | Inter Tight | `font-heading`        |

Loaded in `src/app/[locale]/layout.tsx` via `next/font/google`.

### Scale conventions

- Hero headlines: large, tight tracking, optional `text-gradient`
- Section eyebrows: uppercase, small, muted (`SectionHeader`)
- Body: `text-sm` / `text-base`, `text-text-secondary` for supporting copy

---

## UI patterns

| Pattern            | Class / component                                    |
| ------------------ | ---------------------------------------------------- |
| Cards              | `premium-card`, `card-hover`                         |
| Section spacing    | `section-padding`                                    |
| Background texture | `dot-grid`, `grid-pattern`, `noise-overlay`          |
| Glow effects       | `glow-primary`, `glow-ring`, `section-glow`          |
| Buttons            | `Button` — variants: `primary`, `secondary`, `ghost` |
| Badges             | `Badge`                                              |
| Container          | `Container` — max-width wrapper                      |

---

## PWA manifest

`public/manifest.json`:

- **Name:** Manarix Solutions
- **Theme color:** `#2563EB`
- **Background:** `#000000`

---

## Accessibility

- Skip link to `#main-content` in locale layout
- Focus rings: `:focus-visible` with secondary blue outline
- Reduced motion: `@media (prefers-reduced-motion: reduce)` disables marquee and hover transforms
- Semantic landmarks: `<main>`, `<nav>`, `<footer>`, ARIA labels on icon-only controls
