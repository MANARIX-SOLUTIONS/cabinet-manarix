import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PrincipleIcon } from "@/components/sections/principle-icon";
import { ARCHITECTURE_PRINCIPLE_IDS } from "@/lib/constants";

export async function ArchitecturePrinciples() {
  const t = await getTranslations("architecture");

  return (
    <section
      id="architecture"
      className="section-padding section-surface relative overflow-hidden border-y border-border/60"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <Container className="relative">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARCHITECTURE_PRINCIPLE_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.05}>
              <article className="card-accent-top premium-card group h-full p-6 lg:p-7">
                <PrincipleIcon id={id} />
                <h3 className="mt-4 font-heading text-base font-semibold text-text-primary">
                  {t(`principles.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`principles.${id}.description`)}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
