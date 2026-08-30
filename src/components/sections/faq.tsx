import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQ_IDS } from "@/lib/constants";

export async function Faq() {
  const t = await getTranslations("faq");

  return (
    <section
      id="faq"
      className="section-padding relative border-t border-border/60 bg-surface/20"
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

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.05}>
              <details className="group overflow-hidden rounded-card border border-border/70 bg-card transition-[border-color,box-shadow] duration-200 hover:border-secondary/20 open:border-secondary/25 open:shadow-subtle">
                <summary className="cursor-pointer list-none px-6 py-5 font-heading text-base font-semibold text-text-primary marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {t(`items.${id}.question`)}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/80 bg-surface/60 text-sm font-normal text-text-muted transition-[transform,background-color,border-color] duration-200 group-open:rotate-45 group-open:border-secondary/25 group-open:bg-secondary/8 group-open:text-secondary"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-border/70 px-6 py-5 text-sm leading-relaxed text-text-secondary">
                  {t(`items.${id}.answer`)}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
