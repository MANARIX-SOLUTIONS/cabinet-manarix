import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { ValuePropIcon } from "@/components/sections/value-prop-icon";
import { VALUE_PROP_IDS } from "@/lib/constants";

export async function Problem() {
  const t = await getTranslations("problem");

  return (
    <section
      id="value"
      className="section-padding relative border-b border-border/60"
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

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {VALUE_PROP_IDS.map((id, index) => {
            const tags = t.raw(`cards.${id}.tags`) as string[];

            return (
              <FadeIn key={id} delay={index * 0.06}>
                <article className="card-accent-top premium-card group h-full p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <ValuePropIcon id={id} />
                    <p className="index-mark">0{index + 1}</p>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-text-primary">
                    {t(`cards.${id}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {t(`cards.${id}.description`)}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-[11px] font-medium tracking-wide text-text-muted"
                      >
                        {tag}
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
