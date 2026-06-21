import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { FOOTER_PAGE_LINKS, NAV_ITEMS } from "@/lib/constants";
import { SITE } from "@/lib/site";

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

  return (
    <footer className="border-t border-border/60 bg-surface dark:bg-surface/80">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-text-secondary transition-all duration-200 hover:border-secondary/30 hover:text-secondary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-sm font-semibold text-text-primary">
              {tc("navigation")}
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {tn(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-text-primary">
              {tp("services")}
            </p>
            <ul className="mt-4 space-y-3">
              {FOOTER_PAGE_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {key === "work" ? tp("work") : tp(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-text-primary">
              {tc("contact")}
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {tc("bookConsultation")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {SITE.name}.{" "}
            {tc("rightsReserved")}
          </p>
          <p className="text-sm text-text-secondary">{tm("tagline")}</p>
        </div>
      </Container>
    </footer>
  );
}
