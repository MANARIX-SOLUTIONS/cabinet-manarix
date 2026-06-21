import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { HubCard } from "@/components/pages/hub-card";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Container } from "@/components/ui/container";
import { CASE_STUDY_IDS } from "@/lib/constants";
import { workPath } from "@/lib/paths";

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
  const tw = await getTranslations("caseStudies");

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: tc("work") }]}
        title={t("title")}
        description={t("description")}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {CASE_STUDY_IDS.map((id, index) => (
              <HubCard
                key={id}
                index={index}
                href={workPath(id)}
                title={tw(`items.${id}.title`)}
                description={tw(`items.${id}.description`)}
              />
            ))}
          </div>
        </Container>
      </section>

      <DetailCTA />
    </PageShell>
  );
}
