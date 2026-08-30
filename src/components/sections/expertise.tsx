import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { EXPERTISE_IDS } from "@/lib/constants";

export async function Expertise() {
  const t = await getTranslations("expertise");

  return (
    <section
      id="expertise"
      className="section-padding relative border-t border-border/60"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="max-w-3xl"
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTISE_IDS.map((id) => (
              <li key={id} className="bg-card px-6 py-7">
                <p className="font-heading text-sm font-semibold text-text-primary">
                  {t(`items.${id}.title`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`items.${id}.description`)}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
