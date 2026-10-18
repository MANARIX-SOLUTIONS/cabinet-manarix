import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";
import { V2PageHero } from "@/components/v2/page-hero";
import { SITE } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.legal" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function V2LegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.legal");
  const tc = await getTranslations("v2.pages.common");
  const hasIdentifiers = Boolean(
    SITE.legal.form || SITE.legal.ninea || SITE.legal.rccm,
  );

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("legal") },
        ]}
        title={t("title")}
        description={t("intro")}
      />

      <section className="v2-section bg-[#F5F7FA]">
        <div className="v2-container mx-auto max-w-3xl space-y-5">
          <FadeIn>
            <article className="v2-card p-7">
              <h2 className="text-xl font-bold text-[#0B1426]">
                {t("publisherTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                {t("publisherBody")}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.04}>
            <article className="v2-card p-7">
              <h2 className="text-xl font-bold text-[#0B1426]">
                {t("directorTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                {t("directorBody")}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="v2-card p-7">
              <h2 className="text-xl font-bold text-[#0B1426]">
                {t("identifiersTitle")}
              </h2>
              {hasIdentifiers ? (
                <dl className="mt-3 space-y-2 text-base text-[#4A5568]">
                  {SITE.legal.form ? (
                    <div>
                      <dt className="inline font-semibold text-[#0B1426]">
                        {t("formLabel")} :{" "}
                      </dt>
                      <dd className="inline">{SITE.legal.form}</dd>
                    </div>
                  ) : null}
                  {SITE.legal.ninea ? (
                    <div>
                      <dt className="inline font-semibold text-[#0B1426]">
                        {t("nineaLabel")} :{" "}
                      </dt>
                      <dd className="inline">{SITE.legal.ninea}</dd>
                    </div>
                  ) : null}
                  {SITE.legal.rccm ? (
                    <div>
                      <dt className="inline font-semibold text-[#0B1426]">
                        {t("rccmLabel")} :{" "}
                      </dt>
                      <dd className="inline">{SITE.legal.rccm}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : (
                <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                  {t("identifiersPending")}
                </p>
              )}
            </article>
          </FadeIn>
          <FadeIn delay={0.12}>
            <article className="v2-card p-7">
              <h2 className="text-xl font-bold text-[#0B1426]">
                {t("addressTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                {SITE.legal.address}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.16}>
            <article className="v2-card p-7">
              <h2 className="text-xl font-bold text-[#0B1426]">
                {t("hostingTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                {t("hostingBody")}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.2}>
            <article className="v2-card p-7">
              <h2 className="text-xl font-bold text-[#0B1426]">
                {t("contactTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
                {t("contactBody", { email: SITE.email })}
              </p>
            </article>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
