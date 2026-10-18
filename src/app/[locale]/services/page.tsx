import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { V2Cta } from "@/components/v2/cta";
import { V2PageHero } from "@/components/v2/page-hero";
import {
  OUT_OF_SCOPE_IDS,
  SERVICE_FAMILY_IDS,
  SERVICE_FAMILY_OFFERS,
  type ServiceSlug,
} from "@/lib/constants";
import { v2ContactPath, v2ServicePath } from "@/lib/v2";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2.pages.services" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function V2ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("v2.pages.services");
  const tc = await getTranslations("v2.pages.common");
  const ts = await getTranslations("services");
  const tcommon = await getTranslations("common");

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("services") },
        ]}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      {SERVICE_FAMILY_IDS.map((family, familyIndex) => (
        <section
          key={family}
          id={family}
          className={familyIndex % 2 === 0 ? "v2-section bg-white" : "v2-section bg-[#F5F7FA]"}
        >
          <div className="v2-container">
            <FadeIn>
              <p className="v2-eyebrow">{ts(`families.${family}.title`)}</p>
              <h2 className="v2-h2">{ts(`families.${family}.tagline`)}</h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
              {SERVICE_FAMILY_OFFERS[family].map((id, index) => {
                const offer = id as ServiceSlug;
                const features = ts.raw(`items.${offer}.features`) as string[];
                const isEmergency = ts.has(`items.${offer}.cta`);

                return (
                  <FadeIn key={offer} delay={Math.min(index * 0.04, 0.16)}>
                    <article className="v2-card flex h-full flex-col p-7">
                      <h3 className="text-[21px] font-bold tracking-[-0.015em] text-[#0B1426]">
                        {ts(`items.${offer}.title`)}
                      </h3>
                      <p className="mt-2 text-[12.5px] font-bold tracking-[0.12em] text-[color:var(--v2-accent)] uppercase">
                        {ts(`items.${offer}.duration`)}
                      </p>
                      <p className="mt-3 text-[15px] leading-[1.65] text-[#4A5568]">
                        {ts(`items.${offer}.description`)}
                      </p>
                      <ul className="mt-5 flex-1 space-y-2">
                        {features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-[#1E2A3F]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--v2-accent)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        <Link
                          href={v2ContactPath(offer)}
                          className="v2-btn-accent !px-4 !py-2.5 text-sm"
                        >
                          {isEmergency
                            ? tcommon("contactEmergency")
                            : tcommon("requestQuote")}
                        </Link>
                        <Link
                          href={v2ServicePath(offer)}
                          className="v2-text-link"
                        >
                          {tc("deliverables")}
                        </Link>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="v2-section bg-white">
        <div className="v2-container">
          <FadeIn>
            <article className="v2-card p-8">
              <h2 className="text-[28px] font-extrabold tracking-[-0.025em] text-[#0B1426]">
                {ts("outOfScope.title")}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#4A5568]">
                {ts("outOfScope.intro")}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {OUT_OF_SCOPE_IDS.map((id) => (
                  <li
                    key={id}
                    className="flex items-start gap-2.5 text-[15px] text-[#1E2A3F]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7A8599]" />
                    {ts(`outOfScope.items.${id}`)}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
      </section>

      <V2Cta />
    </main>
  );
}
