import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PROCESS_STEP_IDS, PROCESS_STEP_NUMBERS } from "@/lib/constants";

export async function Process() {
  const t = await getTranslations("process");

  return (
    <section
      id="approach"
      className="section-padding relative border-y border-border/60"
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

        <ol className="process-timeline mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEP_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.06}>
              <li className="process-step premium-card relative h-full p-6 lg:p-7">
                <div className="flex items-center gap-3">
                  <p className="index-mark">{PROCESS_STEP_NUMBERS[index]}</p>
                  {index < PROCESS_STEP_IDS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="process-step-connector hidden h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent lg:block"
                    />
                  )}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                  {t(`steps.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`steps.${id}.description`)}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
