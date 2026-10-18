import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { V2Cta } from "@/components/v2/cta";
import { V2PageHero } from "@/components/v2/page-hero";
import {
  SERVICE_FAMILY_BY_OFFER,
  SERVICE_IDS,
  type ServiceSlug,
} from "@/lib/constants";
import { v2ContactPath } from "@/lib/v2";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

function isServiceSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_IDS as readonly string[]).includes(slug);
}

export function generateStaticParams() {
  return SERVICE_IDS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t(`items.${slug}.title`),
    description: t(`items.${slug}.description`),
  };
}

export default async function V2ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("services");
  const tc = await getTranslations("v2.pages.common");
  const tcommon = await getTranslations("common");

  const deliverables = t.raw(`items.${slug}.features`) as string[];
  const hasGuarantee = t.has(`items.${slug}.guarantee`);
  const isEmergency = t.has(`items.${slug}.cta`);
  const family = SERVICE_FAMILY_BY_OFFER[slug];

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("services"), href: "/services" },
          { label: t(`items.${slug}.title`) },
        ]}
        eyebrow={t(`families.${family}.title`)}
        title={t(`items.${slug}.title`)}
        description={t(`items.${slug}.description`)}
      />

      <section className="border-b border-[#E1E6EE] bg-[#F5F7FA] py-6">
        <div className="v2-container flex flex-wrap items-center gap-3">
          <span className="v2-chip">{t(`families.${family}.title`)}</span>
          <span className="text-sm text-[#4A5568]">
            {t(`items.${slug}.duration`)}
          </span>
        </div>
      </section>

      <section className="v2-section bg-white">
        <div className="v2-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <article className="v2-card p-8">
              <p className="v2-eyebrow">{tc("audience")}</p>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#4A5568]">
                {t(`items.${slug}.audience`)}
              </p>
              {hasGuarantee && (
                <p className="mt-6 text-[15px] leading-[1.65] text-[#0B1426]">
                  <span className="font-bold">{t("guaranteeLabel")} — </span>
                  {t(`items.${slug}.guarantee`)}
                </p>
              )}
            </article>
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="v2-card p-8">
              <p className="v2-eyebrow">{tc("deliverables")}</p>
              <ul className="mt-5 space-y-3">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-[#1E2A3F]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--v2-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
        <div className="v2-container mt-8">
          <FadeIn delay={0.12}>
            <div className="v2-card flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-[16px] font-semibold text-[#0B1426]">
                {tcommon("quotePromise")}
              </p>
              <Link href={v2ContactPath(slug)} className="v2-btn-accent">
                {isEmergency
                  ? tcommon("contactEmergency")
                  : tcommon("requestQuote")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <V2Cta />
    </main>
  );
}
