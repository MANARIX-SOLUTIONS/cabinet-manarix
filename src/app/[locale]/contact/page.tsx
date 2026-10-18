import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";
import { V2ContactForm } from "@/components/v2/contact-form";
import { V2PageHero } from "@/components/v2/page-hero";
import { SITE } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2.pages.contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function V2ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("v2.pages.contact");
  const tc = await getTranslations("v2.pages.common");

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("contact") },
        ]}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <section className="v2-section bg-[#F5F7FA]">
        <div className="v2-container grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <div>
              <p className="v2-eyebrow">{t("infoEyebrow")}</p>
              <h2 className="v2-h2">{t("infoTitle")}</h2>
              <p className="v2-lead">{t("infoBody")}</p>
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-[11.5px] font-bold tracking-[0.16em] text-[#7A8599] uppercase">
                    {t("emailLabel")}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-lg font-semibold text-[#0B1426] transition-colors hover:text-[color:var(--v2-accent)]"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11.5px] font-bold tracking-[0.16em] text-[#7A8599] uppercase">
                    {t("locationLabel")}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-[#0B1426]">
                    {SITE.location}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11.5px] font-bold tracking-[0.16em] text-[#7A8599] uppercase">
                    {t("responseLabel")}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-[#0B1426]">
                    {t("responseValue")}
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <V2ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
