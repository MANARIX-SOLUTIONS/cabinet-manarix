import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { DetailListSection } from "@/components/pages/detail-list-section";
import { ProcessOverview } from "@/components/pages/process-overview";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Container } from "@/components/ui/container";
import {
  SERVICE_FAMILY_BY_OFFER,
  SERVICE_IDS,
  type ServiceSlug,
} from "@/lib/constants";
import { quotePath } from "@/lib/paths";
import { Button } from "@/components/ui/button";

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

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("services");
  const tc = await getTranslations("pages.common");
  const tcommon = await getTranslations("common");

  const deliverables = t.raw(`items.${slug}.features`) as string[];
  const hasGuarantee = t.has(`items.${slug}.guarantee`);
  const isEmergency = t.has(`items.${slug}.cta`);
  const family = SERVICE_FAMILY_BY_OFFER[slug];

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("services"), href: "/services" },
          { label: t(`items.${slug}.title`) },
        ]}
        title={t(`items.${slug}.title`)}
        description={t(`items.${slug}.description`)}
      />

      <section className="border-b border-border/60 bg-surface/60">
        <Container className="flex flex-wrap items-center gap-3 py-6">
          <span className="rounded-full border border-border/80 bg-card px-3 py-1 text-[11px] font-medium tracking-[0.14em] text-text-muted uppercase">
            {t(`families.${family}.title`)}
          </span>
          <span className="text-sm text-text-secondary">
            {t(`items.${slug}.duration`)}
          </span>
        </Container>
      </section>

      <section className="section-padding border-b border-border/60">
        <Container>
          <div className="premium-card max-w-3xl p-8">
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              {t("audienceLabel")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              {t(`items.${slug}.audience`)}
            </p>
            {hasGuarantee && (
              <p className="mt-6 text-sm leading-relaxed text-text-primary">
                <span className="font-medium">{t("guaranteeLabel")} — </span>
                {t(`items.${slug}.guarantee`)}
              </p>
            )}
          </div>
        </Container>
      </section>

      <DetailListSection
        title={tc("deliverables")}
        items={deliverables}
        variant="accent"
        className="border-y border-border/60"
      />

      <section className="section-padding bg-surface">
        <Container>
          <div className="premium-card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base font-medium text-text-primary">
              {tcommon("quotePromise")}
            </p>
            <Button
              href={quotePath(slug)}
              variant="primary"
              size="lg"
              showArrow
            >
              {isEmergency
                ? tcommon("contactEmergency")
                : tcommon("requestQuote")}
            </Button>
          </div>
        </Container>
      </section>

      <ProcessOverview />

      <DetailCTA />
    </PageShell>
  );
}
