import {
  ArrowUpRight,
  HeartPulse,
  Landmark,
  Shield,
  ShoppingBag,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { INDUSTRY_ICONS, INDUSTRY_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  landmark: Landmark,
  shield: Shield,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  "heart-pulse": HeartPulse,
};

export async function Industries() {
  const t = await getTranslations("industries");

  return (
    <section id="industries" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_IDS.map((id, index) => {
            const Icon = ICONS[INDUSTRY_ICONS[id]];
            return (
              <FadeIn key={id} delay={index * 0.06}>
                <div
                  className={cn(
                    "group flex items-start gap-4 rounded-[16px] border border-border/80",
                    "bg-card p-6 card-hover cursor-default",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                      "bg-surface text-secondary",
                      "transition-all duration-300 group-hover:bg-secondary group-hover:text-white",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading text-base font-bold text-text-primary">
                        {t(`items.${id}.title`)}
                      </h3>
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 shrink-0 text-text-muted",
                          "opacity-60 transition-all duration-300",
                          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-secondary",
                        )}
                      />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                      {t(`items.${id}.description`)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
