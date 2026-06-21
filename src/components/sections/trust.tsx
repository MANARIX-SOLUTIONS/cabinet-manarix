import { Building2, Cloud, CreditCard, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { TRUST_METRIC_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const METRIC_ICONS = [Clock, Building2, CreditCard, Cloud] as const;

export async function Trust() {
  const t = await getTranslations("trust");

  return (
    <section className="section-padding border-y border-border/60 bg-surface/60 dark:bg-surface/80">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_METRIC_IDS.map((id, index) => {
            const Icon = METRIC_ICONS[index];
            return (
              <FadeIn key={id} delay={index * 0.08}>
                <div className="premium-card group h-full p-6">
                  <div
                    className={cn(
                      "mb-5 flex h-10 w-10 items-center justify-center rounded-xl",
                      "bg-secondary/10 text-secondary",
                      "transition-colors duration-300 group-hover:bg-secondary/15",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="font-heading text-[2rem] font-bold leading-none tracking-tight text-text-primary">
                    {t(`metrics.${id}.value`)}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-text-primary">
                    {t(`metrics.${id}.label`)}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {t(`metrics.${id}.description`)}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
