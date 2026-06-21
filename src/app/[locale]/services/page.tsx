import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { HubCard } from "@/components/pages/hub-card";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Container } from "@/components/ui/container";
import { SERVICE_IDS } from "@/lib/constants";
import { servicePath } from "@/lib/paths";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.servicesHub" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ServicesHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.servicesHub");
  const tc = await getTranslations("pages.common");
  const ts = await getTranslations("services");

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("services") },
        ]}
        title={t("title")}
        description={t("description")}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICE_IDS.map((id, index) => (
              <HubCard
                key={id}
                index={index}
                href={servicePath(id)}
                title={ts(`items.${id}.title`)}
                description={ts(`items.${id}.description`)}
              />
            ))}
          </div>
        </Container>
      </section>

      <DetailCTA />
    </PageShell>
  );
}
