import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
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

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.legal");
  const tc = await getTranslations("pages.common");
  const hasIdentifiers = Boolean(
    SITE.legal.form || SITE.legal.ninea || SITE.legal.rccm,
  );

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[{ label: tc("home"), href: "/" }, { label: tc("legal") }]}
        title={t("title")}
        description={t("intro")}
      />

      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5">
            <div className="premium-card p-7">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {t("publisherTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {t("publisherBody")}
              </p>
            </div>

            <div className="premium-card p-7">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {t("directorTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {t("directorBody")}
              </p>
            </div>

            <div className="premium-card p-7">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {t("identifiersTitle")}
              </h2>
              {hasIdentifiers ? (
                <dl className="mt-3 space-y-2 text-base text-text-secondary">
                  {SITE.legal.form ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">
                        {t("formLabel")} :{" "}
                      </dt>
                      <dd className="inline">{SITE.legal.form}</dd>
                    </div>
                  ) : null}
                  {SITE.legal.ninea ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">
                        {t("nineaLabel")} :{" "}
                      </dt>
                      <dd className="inline">{SITE.legal.ninea}</dd>
                    </div>
                  ) : null}
                  {SITE.legal.rccm ? (
                    <div>
                      <dt className="inline font-medium text-text-primary">
                        {t("rccmLabel")} :{" "}
                      </dt>
                      <dd className="inline">{SITE.legal.rccm}</dd>
                    </div>
                  ) : null}
                </dl>
              ) : (
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {t("identifiersPending")}
                </p>
              )}
            </div>

            <div className="premium-card p-7">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {t("addressTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {SITE.legal.address}
              </p>
            </div>

            <div className="premium-card p-7">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {t("hostingTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {t("hostingBody")}
              </p>
            </div>

            <div className="premium-card p-7">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                {t("contactTitle")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {t("contactBody", { email: SITE.email })}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
