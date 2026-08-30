import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { INDUSTRY_IDS } from "@/lib/constants";

export async function Industries() {
  const t = await getTranslations("industries");

  return (
    <section id="industries" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeIn>

        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {INDUSTRY_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.06}>
              <li className="premium-card h-full p-7">
                <p className="index-mark">0{index + 1}</p>
                <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                  {t(`items.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`items.${id}.description`)}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
