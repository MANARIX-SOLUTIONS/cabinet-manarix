import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";

type Props = {
  params: Promise<{ locale: string }>;
};

const PRIVACY_SECTIONS = [
  "collect",
  "use",
  "retention",
  "rights",
  "security",
  "contact",
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.privacy" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.privacy");
  const tc = await getTranslations("pages.common");

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("privacy") },
        ]}
        title={t("title")}
        description={t("lastUpdated")}
      />

      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-text-secondary">
              {t("intro")}
            </p>

            <div className="mt-12 space-y-10">
              {PRIVACY_SECTIONS.map((key) => (
                <div key={key}>
                  <h2 className="font-heading text-xl font-bold text-text-primary">
                    {t(`sections.${key}.title`)}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {t(`sections.${key}.body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
