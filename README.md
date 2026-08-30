# Manarix Solutions — Landing Site

Marketing website for **Manarix Solutions**, a FinTech engineering firm helping fintechs, PSPs, aggregators, and digital platforms integrate payments, modernize backends, and build greenfield payment infrastructure across Africa.

**Live URL:** [manarix.com](https://manarix.com) (configure via `NEXT_PUBLIC_SITE_URL`)

---

## Stack

| Layer     | Technology                                                                        |
| --------- | --------------------------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router)                                     |
| UI        | React 19, Tailwind CSS 4                                                          |
| i18n      | [next-intl](https://next-intl.dev) — English & French                             |
| Theming   | [next-themes](https://github.com/pacocoursey/next-themes) — light / dark / system |
| Motion    | Framer Motion                                                                     |
| Icons     | Lucide React                                                                      |
| Email     | [Resend](https://resend.com) (optional, contact form)                             |
| Language  | TypeScript                                                                        |

---

## Quick start

```bash
# Install dependencies
npm install

# Copy environment template and fill in values
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default locale is English; French is available at `/fr`.

### Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Development server with hot reload         |
| `npm run build` | Production build (SSG + static generation) |
| `npm run start` | Serve production build locally             |
| `npm run lint`  | ESLint (Next.js config)                    |

---

## Environment variables

See [`.env.example`](./.env.example).

| Variable                   | Required    | Description                                               |
| -------------------------- | ----------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | Recommended | Canonical site URL (sitemap, OG, JSON-LD)                 |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional    | Calendly link in contact section                          |
| `RESEND_API_KEY`           | Optional    | Enables contact form email delivery                       |
| `CONTACT_TO_EMAIL`         | Optional    | Inbox for form submissions (default: `hello@manarix.com`) |
| `CONTACT_FROM_EMAIL`       | Optional    | Sender address for Resend                                 |

Without `RESEND_API_KEY`, the contact form still validates and returns success; submissions are logged to the server console only.

---

## Project structure

```
manarix-landing/
├── messages/              # i18n copy (en.json, fr.json)
├── public/                # Static assets (logo, manifest, PWA)
├── src/
│   ├── app/
│   │   ├── [locale]/      # All localized pages
│   │   ├── actions/       # Server actions (contact form)
│   │   ├── icon.tsx       # Favicon (dynamic OG image)
│   │   ├── opengraph-image.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/        # Navbar, footer, page shell
│   │   ├── pages/         # Reusable inner-page blocks
│   │   ├── sections/      # Homepage & marketing sections
│   │   ├── seo/           # JSON-LD structured data
│   │   ├── ui/            # Design system primitives
│   │   └── visual/        # Hero / platform illustrations
│   ├── hooks/
│   ├── i18n/              # next-intl routing & navigation
│   ├── lib/               # Site config, constants, validation
│   └── proxy.ts           # Locale middleware (next-intl)
└── docs/                  # Extended documentation
```

---

## Routes

| Path               | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `/`                | Homepage (all marketing sections)                             |
| `/services`        | Services hub                                                  |
| `/services/[slug]` | Service detail (`fintech`, `enterprise`, `cloud`, `advisory`) |
| `/work`            | Case studies hub                                              |
| `/work/[slug]`     | Case study detail                                             |
| `/about`           | About page                                                    |
| `/privacy`         | Privacy policy                                                |
| `/fr/...`          | French equivalents (`localePrefix: as-needed`)                |

Homepage sections (anchor IDs): `#industries`, `#clients`, `#contact`.

---

## Documentation

| Guide                                          | Contents                                     |
| ---------------------------------------------- | -------------------------------------------- |
| [docs/architecture.md](./docs/architecture.md) | Routing, i18n, rendering, contact flow       |
| [docs/content.md](./docs/content.md)           | Editing copy, adding services & case studies |
| [docs/brand.md](./docs/brand.md)               | Logo assets, colors, typography              |

---

## Deployment

Optimized for [Vercel](https://vercel.com):

1. Connect the repository.
2. Set environment variables from `.env.example`.
3. Deploy — all pages are statically generated at build time.

Build output includes localized sitemap (`/sitemap.xml`), robots.txt, dynamic favicon, and Open Graph image.

---

## License

Private — © Manarix Solutions. All rights reserved.
