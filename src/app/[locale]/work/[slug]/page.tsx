import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { V2Cta } from "@/components/v2/cta";
import { V2PageHero } from "@/components/v2/page-hero";
import {
  V2_PROJECTS,
  V2_PROJECT_IDS,
  isV2ProjectId,
  v2ServicePath,
} from "@/lib/v2";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return V2_PROJECT_IDS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isV2ProjectId(slug)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: `v2.pages.workDetail.${slug}`,
  });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function V2WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isV2ProjectId(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const project = V2_PROJECTS.find((item) => item.id === slug);
  if (!project) {
    notFound();
  }

  const t = await getTranslations(`v2.pages.workDetail.${slug}`);
  const tc = await getTranslations("v2.pages.common");
  const ts = await getTranslations("services");
  const tp = await getTranslations("v2.projects");
  const outcomes = t.raw("outcomes") as string[];
  const stack = t.raw("stack") as string[];

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("work"), href: "/work" },
          { label: t("headline") },
        ]}
        eyebrow={t("sector")}
        title={t("headline")}
        description={t("subheadline")}
      />

      <section className="v2-section bg-white">
        <div className="v2-container grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            <FadeIn>
              <article className="v2-card p-8">
                <p className="v2-eyebrow">{tc("context")}</p>
                <p className="mt-5 text-[16px] leading-[1.7] text-[#4A5568]">
                  {t("context")}
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={0.06}>
              <article className="v2-card p-8">
                <p className="v2-eyebrow">{tc("approach")}</p>
                <p className="mt-5 text-[16px] leading-[1.7] text-[#4A5568]">
                  {t("approach")}
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="v2-card p-8">
                <p className="v2-eyebrow">{tc("outcomes")}</p>
                <ul className="mt-5 space-y-3">
                  {outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-[#1E2A3F]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--v2-accent)]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
            <FadeIn delay={0.14}>
              <Link
                href={v2ServicePath(project.relatedService)}
                className="v2-text-link self-start"
              >
                {tc("relatedService")}: {ts(`items.${project.relatedService}.title`)}
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.08}>
            <div className="v2-card overflow-hidden">
              <div className="v2-photo-placeholder flex aspect-[16/11] items-center justify-center p-5">
                <span className="rounded-md bg-white px-2.5 py-1.5 text-center font-[family-name:var(--font-v2-mono)] text-xs text-[#5E6A7E]">
                  {tp(project.photoKey)}
                </span>
              </div>
              <div className="p-8">
                <p className="text-[11.5px] font-bold tracking-[0.18em] text-[color:var(--v2-accent)] uppercase">
                  {tc("stack")}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="v2-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <V2Cta />
    </main>
  );
}
