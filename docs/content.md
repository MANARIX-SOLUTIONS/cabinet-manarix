# Content guide

All user-facing text lives in JSON translation files. Keep **English and French in sync** when editing copy.

---

## Translation files

| File               | Locale            |
| ------------------ | ----------------- |
| `messages/en.json` | English (default) |
| `messages/fr.json` | French            |

### Namespace map (homepage)

| Namespace      | Section                                    |
| -------------- | ------------------------------------------ |
| `metadata`     | `<title>`, meta description, tagline       |
| `hero`         | Hero headline, stats, subheadline          |
| `marquee`      | Expertise ticker items                     |
| `problem`      | Costly problems we solve                   |
| `expertise`    | Technical domains (means, not positioning) |
| `services`     | Engagement families and offers             |
| `partners`     | Agency / SI / PSP collaboration            |
| `labs`         | Planned public demonstrators               |
| `industries`   | Industries grid                            |
| `transparency` | Two-engineer positioning                   |
| `proofs`       | Real work (Xaalis, publications)           |
| `team`         | Team members (`team.members.{id}`)         |
| `process`      | 4-step delivery process                    |
| `faq`          | Homepage FAQ                               |
| `cta`          | Bottom call-to-action                      |
| `contact`      | Form labels, validation, success/error     |
| `footer`       | Footer copy and links                      |
| `nav`          | Navigation labels                          |

Inner pages use `pages.*` namespaces — see existing keys for `about`, `privacy`, `servicesHub`, `workHub`, `serviceDetail.{slug}`, `workDetail.{slug}`.

---

## Adding a service

1. **Register the ID** in `src/lib/constants.ts`:

   ```ts
   export const SERVICE_IDS = [..., "your-service"] as const;
   ```

   Then add the ID to `SERVICE_FAMILY_OFFERS` for the right family (`advisory`, `engineering`, or `managed`).

2. **Add translations** under `pages.serviceDetail.your-service` in both locale files:
   - `metaTitle`, `metaDescription`
   - `title`, `description`, `eyebrow`
   - `capabilities.items[]`, `outcomes.items[]`, `process` steps

3. **Add contact form option** (optional) in `contact.services.your-service`.

4. Rebuild — `generateStaticParams()` in `src/app/[locale]/services/[slug]/page.tsx` picks up new IDs automatically.

---

## Adding a case study

1. **Register slug** in `src/lib/constants.ts`:

   ```ts
   export const WORK_SLUGS = {
     ...,
     yourCase: "your-case-slug",
   } as const;
   export const CASE_STUDY_IDS = [..., "yourCase"] as const;
   ```

2. **Add translations** under `pages.workDetail.yourCase` and `caseStudies.items.yourCase`.

3. Rebuild — static params generated from `WORK_SLUG_LIST`.

---

## Adding a team member

1. Add ID to `TEAM_MEMBER_IDS` and gradient to `TEAM_GRADIENTS` in `constants.ts`.
2. Add `team.members.{id}` block in both locale files (name, role, bio, initials, LinkedIn URL if applicable).

---

## Adding a client

1. Add ID to `CLIENT_IDS` and gradient to `CLIENT_GRADIENTS`.
2. Add `clients.items.{id}` in both locale files.

---

## Consulting launch (internal)

Operational docs — not published on the site:

| File                             | Role                                                    |
| -------------------------------- | ------------------------------------------------------- |
| `docs/consulting-launch-plan.md` | Positioning, 3 offers, funnel, first 3 clients          |
| `docs/launch/sales-kit.md`       | LinkedIn, outreach, discovery script, proposal, billing |
| `docs/launch/prospects.md`       | 50-name working list                                    |
| `docs/pricing-internal.md`       | FCFA floors — do not publish                            |

Homepage featured offers (launch doors): `payment-audit`, `add-rail`, `spring-modernization`, `multi-rail`.

---

## Site-wide settings

Edit `src/lib/site.ts` for:

- Company name, tagline, description
- Public URL, email
- LinkedIn / GitHub URLs
- Calendly URL (or use `NEXT_PUBLIC_CALENDLY_URL` env var)

---

## Navigation

Primary nav items: `src/lib/constants.ts` → `NAV_ITEMS`.

Footer page links: `FOOTER_PAGE_LINKS`.

Labels come from `nav.*` and `pages.common.*` translation keys.

---

## Checklist before publishing copy changes

- [ ] Updated both `en.json` and `fr.json`
- [ ] New IDs added to `constants.ts` if applicable
- [ ] `npm run build` passes
- [ ] Spot-check `/` and `/fr` in browser
- [ ] Verify meta titles on new/changed pages (View Source)
