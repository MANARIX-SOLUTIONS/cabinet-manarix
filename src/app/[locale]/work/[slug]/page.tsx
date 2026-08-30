import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Container } from "@/components/ui/container";
import { PlatformMockup } from "@/components/visual/platform-mockup";
import { WORK_ID_BY_SLUG, WORK_SLUG_LIST, type WorkId } from "@/lib/constants";
import { isValidWorkSlug, servicePath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import type { ServiceSlug } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return WORK_SLUG_LIST.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidWorkSlug(slug)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: `pages.workDetail.${slug}`,
  });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidWorkSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const workId = WORK_ID_BY_SLUG[slug] as WorkId;
  const t = await getTranslations(`pages.workDetail.${slug}`);
  const tc = await getTranslations("pages.common");
  const ts = await getTranslations("services");

  const outcomes = t.raw("outcomes") as string[];
  const relatedService = t("relatedService") as ServiceSlug;

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("work"), href: "/work" },
          { label: t("headline") },
        ]}
        title={t("headline")}
        description={t("subheadline")}
      />

      <section className="section-padding border-b border-border/60 bg-background">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="grid gap-5">
              <div className="premium-card p-7">
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  {tc("context")}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {t("context")}
                </p>
              </div>
              <div className="premium-card p-7">
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  {tc("approach")}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {t("approach")}
                </p>
              </div>
              <div className="premium-card p-7">
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  {tc("outcomes")}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="text-sm leading-relaxed text-text-secondary before:mr-2 before:text-text-muted before:content-['—']"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={servicePath(relatedService)}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium text-secondary",
                  "transition-colors hover:text-secondary/80",
                )}
              >
                {tc("relatedServices")}: {ts(`items.${relatedService}.title`)}
              </Link>
            </div>

            <div className="premium-card overflow-hidden p-5">
              <PlatformMockup type={workId} />
            </div>
          </div>
        </Container>
      </section>

      <DetailCTA />
    </PageShell>
  );
}
