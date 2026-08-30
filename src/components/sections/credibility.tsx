import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CREDIBILITY_METRIC_IDS } from "@/lib/constants";

export async function Credibility() {
  const t = await getTranslations("credibility");

  return (
    <section
      aria-label="Credibility metrics"
      className="credibility-strip relative border-y border-border/60"
    >
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {CREDIBILITY_METRIC_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.05}>
              <div
                className={
                  index === 0
                    ? "text-center lg:text-left"
                    : "text-center lg:border-l lg:border-border/70 lg:pl-8 lg:text-left"
                }
              >
                <p className="font-heading text-[1.75rem] font-semibold tracking-tight text-text-primary sm:text-2xl">
                  {t(`metrics.${id}.value`)}
                </p>
                <p className="mt-2 text-[11px] leading-relaxed tracking-[0.14em] text-text-muted uppercase">
                  {t(`metrics.${id}.label`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
