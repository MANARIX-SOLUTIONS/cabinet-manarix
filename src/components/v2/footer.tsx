import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/logo";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { V2_FOOTER_LEGAL_ITEMS, V2_NAV_ITEMS } from "@/lib/v2";
import { SITE } from "@/lib/site";

const SOCIAL_LINKS = [
  { label: "LINKEDIN", href: SITE.social.linkedin, icon: LinkedInIcon },
  { label: "GITHUB", href: SITE.social.github, icon: GitHubIcon },
] as const;

export async function V2Footer() {
  const t = await getTranslations("v2.footer");
  const tn = await getTranslations("v2.nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-[#08101F] pt-[52px] pb-9 text-white">
      <div className="v2-container">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <Logo href="/" variant="light" />
          <div className="flex flex-wrap items-center gap-3.5 text-[12.5px] font-bold tracking-[0.16em]">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }, index) => (
              <span key={label} className="flex items-center gap-3.5">
                {index > 0 && (
                  <span className="text-white/25" aria-hidden="true">
                    |
                  </span>
                )}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[color:var(--v2-accent)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[14.5px]">
            <a
              href={`mailto:${SITE.email}`}
              className="text-white/80 transition-colors hover:text-white"
            >
              {SITE.email}
            </a>
            <span className="text-white/80">{SITE.location}</span>
          </div>
        </div>

        <nav
          aria-label={t("navLabel")}
          className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/8 pt-6 text-[14.5px]"
        >
          {V2_NAV_ITEMS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {tn(key)}
            </Link>
          ))}
          {V2_FOOTER_LEGAL_ITEMS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap justify-between gap-3 text-[13px] text-white/50">
          <span>
            © {year} {SITE.name}. {t("rights")}
          </span>
          <span>{t("location")}</span>
        </div>
      </div>
    </footer>
  );
}
