import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { LAB_IDS } from "@/lib/constants";

export async function Labs() {
  const t = await getTranslations("labs");

  return (
    <section
      id="labs"
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

        <ul className="mt-14 grid gap-5 lg:grid-cols-2">
          {LAB_IDS.map((id, index) => {
            const steps = t.raw(`items.${id}.steps`) as string[];

            return (
              <FadeIn key={id} delay={index * 0.06}>
                <li className="premium-card flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="index-mark">0{index + 1}</span>
                    <Badge>{t("status")}</Badge>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                    {t(`items.${id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {t(`items.${id}.description`)}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {steps.map((step) => (
                      <li
                        key={step}
                        className="rounded-full border border-border/80 bg-surface px-2.5 py-1 text-[11px] font-medium tracking-wide text-text-muted"
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
