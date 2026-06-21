import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Container } from "@/components/ui/container";
import { WhyManarix } from "@/components/sections/why-manarix";
import { Team } from "@/components/sections/team";
import { Trust } from "@/components/sections/trust";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.about");
  const tc = await getTranslations("pages.common");

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: tc("about") }]}
        title={t("title")}
        description={t("description")}
      />

      <section className="section-padding border-b border-border/60 bg-background">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-card border border-border/80 bg-card p-8">
              <h2 className="font-heading text-xl font-bold text-text-primary">
                {t("missionTitle")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {t("mission")}
              </p>
            </div>
            <div className="rounded-card border border-border/80 bg-card p-8">
              <h2 className="font-heading text-xl font-bold text-text-primary">
                {t("visionTitle")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                {t("vision")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <WhyManarix />
      <Team />
      <Trust />
      <DetailCTA />
    </PageShell>
  );
}
