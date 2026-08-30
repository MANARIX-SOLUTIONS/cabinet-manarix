import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import {
  PROCESS_STEP_NUMBERS,
  WHY_MANARIX_COLUMN_IDS,
} from "@/lib/constants";

export async function WhyManarix() {
  const t = await getTranslations("whyManarix");

  return (
    <section
      id="expertise"
      className="section-padding section-surface relative border-y border-border/60"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {WHY_MANARIX_COLUMN_IDS.map((id, index) => {
            const items = t.raw(`columns.${id}.items`) as string[];

            return (
              <FadeIn key={id} delay={index * 0.06}>
                <article className="premium-card h-full p-7 lg:p-8">
                  <p className="index-mark">{PROCESS_STEP_NUMBERS[index]}</p>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                    {t(`columns.${id}.title`)}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-relaxed text-text-secondary before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-secondary/70 before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
