import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { LinkedInIcon } from "@/components/ui/social-icons";
import { V2Cta } from "@/components/v2/cta";
import { V2PageHero } from "@/components/v2/page-hero";
import { TEAM_MEMBER_IDS, TRANSPARENCY_COMMITMENT_IDS } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2.pages.about" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function V2AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("v2.pages.about");
  const tc = await getTranslations("v2.pages.common");
  const ta = await getTranslations("pages.about");
  const tt = await getTranslations("team");
  const tr = await getTranslations("transparency");

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("about") },
        ]}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <section className="v2-section bg-white">
        <div className="v2-container grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
          <FadeIn>
            <article className="v2-card h-full p-8">
              <p className="v2-eyebrow">{ta("missionTitle")}</p>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#4A5568]">
                {ta("mission")}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="v2-card h-full p-8">
              <p className="v2-eyebrow">{ta("visionTitle")}</p>
              <p className="mt-5 text-[17px] leading-[1.7] text-[#4A5568]">
                {ta("vision")}
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="v2-section bg-[#F5F7FA]">
        <div className="v2-container">
          <FadeIn>
            <div className="max-w-[720px]">
              <p className="v2-eyebrow">{tt("eyebrow")}</p>
              <h2 className="v2-h2">{tt("title")}</h2>
              <p className="v2-lead">{tt("description")}</p>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {TEAM_MEMBER_IDS.map((id, index) => {
              const expertise = tt.raw(`members.${id}.expertise`) as string[];
              const linkedin = tt(`members.${id}.linkedin`);

              return (
                <FadeIn key={id} delay={index * 0.08}>
                  <article className="v2-card h-full p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1426] text-sm font-bold text-white">
                        {tt(`members.${id}.initials`)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold tracking-[-0.015em] text-[#0B1426]">
                          {tt(`members.${id}.name`)}
                        </h3>
                        <p className="mt-1 text-sm text-[#7A8599]">
                          {tt(`members.${id}.role`)}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-[15px] leading-[1.65] text-[#4A5568]">
                      {tt(`members.${id}.bio`)}
                    </p>
                    {expertise.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {expertise.map((item) => (
                          <span key={item} className="v2-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-6 flex items-center justify-between border-t border-[#EEF1F5] pt-4">
                      <p className="text-[13px] text-[#7A8599]">
                        {tt(`members.${id}.location`)}
                      </p>
                      {linkedin ? (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={tt("linkedinLabel", {
                            name: tt(`members.${id}.name`),
                          })}
                          className="text-[#4A5568] transition-colors hover:text-[color:var(--v2-accent)]"
                        >
                          <LinkedInIcon className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="v2-section bg-white">
        <div className="v2-container">
          <FadeIn>
            <div className="max-w-[720px]">
              <p className="v2-eyebrow">{tr("eyebrow")}</p>
              <h2 className="v2-h2">{tr("title")}</h2>
              <p className="v2-lead">{tr("intro")}</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <FadeIn delay={0.08}>
              <article className="v2-card h-full p-8">
                <p className="text-[11.5px] font-bold tracking-[0.18em] text-[color:var(--v2-accent)] uppercase">
                  {tr("gainsTitle")}
                </p>
                <p className="mt-4 text-[15px] leading-[1.65] text-[#0B1426]">
                  {tr("gains")}
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={0.12}>
              <article className="v2-card h-full p-8">
                <p className="text-[11.5px] font-bold tracking-[0.18em] text-[#7A8599] uppercase">
                  {tr("costsTitle")}
                </p>
                <p className="mt-4 text-[15px] leading-[1.65] text-[#4A5568]">
                  {tr("costs")}
                </p>
              </article>
            </FadeIn>
          </div>
          <FadeIn delay={0.16}>
            <h3 className="mt-14 text-2xl font-extrabold tracking-[-0.025em] text-[#0B1426]">
              {tr("commitmentsTitle")}
            </h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {TRANSPARENCY_COMMITMENT_IDS.map((id) => (
                <li key={id} className="v2-card p-6">
                  <p className="font-bold text-[#0B1426]">
                    {tr(`commitments.${id}.title`)}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#4A5568]">
                    {tr(`commitments.${id}.description`)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/contact" className="v2-btn-accent">
                {tc("ctaButton")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <V2Cta />
    </main>
  );
}
