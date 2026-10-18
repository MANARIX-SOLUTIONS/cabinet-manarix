import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";
import { V2PageHero } from "@/components/v2/page-hero";

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

export default async function V2PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.privacy");
  const tc = await getTranslations("v2.pages.common");

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("privacy") },
        ]}
        title={t("title")}
        description={t("lastUpdated")}
      />

      <section className="v2-section bg-[#F5F7FA]">
        <div className="v2-container mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-base leading-relaxed text-[#4A5568]">{t("intro")}</p>
          </FadeIn>
          <div className="mt-10 space-y-5">
            {PRIVACY_SECTIONS.map((key, index) => (
              <FadeIn key={key} delay={Math.min(index * 0.04, 0.16)}>
                <article className="v2-card p-7">
                  <h2 className="text-xl font-bold text-[#0B1426]">
                    {t(`sections.${key}.title`)}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                    {t(`sections.${key}.body`)}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
