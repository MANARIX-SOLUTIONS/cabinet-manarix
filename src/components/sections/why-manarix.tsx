import { Layers, Shield, TrendingUp } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { WHY_PILLAR_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PILLAR_ICONS = {
  mindset: TrendingUp,
  expertise: Shield,
  architecture: Layers,
} as const;

const PILLAR_GRADIENTS = {
  mindset: "from-blue-500/10 to-blue-600/5",
  expertise: "from-emerald-500/10 to-emerald-600/5",
  architecture: "from-violet-500/10 to-violet-600/5",
} as const;

export async function WhyManarix() {
  const t = await getTranslations("why");

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden border-y border-border/60 bg-background dark:bg-surface/50"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

      <Container className="relative">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {WHY_PILLAR_IDS.map((id, index) => {
            const Icon = PILLAR_ICONS[id];
            return (
              <FadeIn key={id} delay={index * 0.1}>
                <div
                  className={cn(
                    "group rounded-[16px] border border-border/80 bg-card p-8",
                    "card-hover text-center md:text-left",
                  )}
                >
                  <div
                    className={cn(
                      "mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl md:mx-0",
                      "border border-border/60 bg-gradient-to-br shadow-subtle",
                      PILLAR_GRADIENTS[id],
                    )}
                  >
                    <Icon
                      className="h-6 w-6 text-secondary"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text-primary">
                    {t(`pillars.${id}.title`)}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                    {t(`pillars.${id}.description`)}
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
