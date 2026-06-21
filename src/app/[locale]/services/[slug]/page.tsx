import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { DetailListSection } from "@/components/pages/detail-list-section";
import { ProcessOverview } from "@/components/pages/process-overview";
import { DetailCTA } from "@/components/pages/detail-cta";
import { SERVICE_IDS, type ServiceSlug } from "@/lib/constants";

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

  const t = await getTranslations({
    locale,
    namespace: `pages.serviceDetail.${slug}`,
  });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isServiceSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations(`pages.serviceDetail.${slug}`);
  const tc = await getTranslations("pages.common");

  const challenges = t.raw("challenges") as string[];
  const deliverables = t.raw("deliverables") as string[];
  const technologies = t.raw("technologies") as string[];

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("services"), href: "/services" },
          { label: t("headline") },
        ]}
        title={t("headline")}
        description={t("subheadline")}
      />

      <DetailListSection
        title={tc("challenges")}
        items={challenges}
        className="bg-background"
      />

      <DetailListSection
        title={tc("deliverables")}
        items={deliverables}
        variant="accent"
        className="border-y border-border/60 bg-surface/60"
      />

      <DetailListSection
        title={tc("technologies")}
        items={technologies}
        className="bg-background"
      />

      <ProcessOverview />

      <DetailCTA />
    </PageShell>
  );
}
