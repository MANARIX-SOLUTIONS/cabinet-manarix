import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import {
  GitHubIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/social-icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  FOOTER_EXPERTISE_LINKS,
  FOOTER_PAGE_LINKS,
  NAV_ITEMS,
} from "@/lib/constants";
import { getWhatsAppUrl, SITE } from "@/lib/site";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: SITE.social.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: SITE.social.github, icon: GitHubIcon },
] as const;

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const tp = await getTranslations("pages.common");
  const tc = await getTranslations("common");
  const tm = await getTranslations("metadata");
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="relative overflow-hidden bg-hero text-white">
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-80" />
      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {t("description")}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 text-white/70 transition-colors hover:border-white/28 hover:bg-white/6 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-sm font-medium text-white">{tc("navigation")}</p>
            <ul className="mt-4 space-y-3">
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {tn(key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {tn("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-white">
              {t("expertiseTitle")}
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_EXPERTISE_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {t(`expertise.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-medium text-white">{tc("contact")}</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    {tc("whatsapp")}
                  </a>
                </li>
              )}
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {tc("bookDiscovery")}
                </Link>
              </li>
              {FOOTER_PAGE_LINKS.filter(({ key }) =>
                ["legal", "privacy"].includes(key),
              ).map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {tp(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            &copy; {new Date().getFullYear()} {SITE.name}.{" "}
            {tc("rightsReserved")}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm text-white/45">{tm("tagline")}</p>
            <ThemeToggle inverted />
          </div>
        </div>
      </Container>
    </footer>
  );
}
