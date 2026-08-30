import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Proofs } from "@/components/sections/proofs";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.workHub" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function WorkHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.workHub");
  const tc = await getTranslations("pages.common");

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: tc("work") }]}
        title={t("title")}
        description={t("description")}
      />
      <Proofs hideHeader />
      <DetailCTA />
    </PageShell>
  );
}
