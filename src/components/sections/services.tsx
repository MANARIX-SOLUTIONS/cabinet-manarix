import {
  Check,
  Cloud,
  Compass,
  CreditCard,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICE_ICONS, SERVICE_IDS } from "@/lib/constants";
import { servicePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "credit-card": CreditCard,
  layers: Layers,
  cloud: Cloud,
  compass: Compass,
};

export async function Services() {
  const t = await getTranslations("services");
  const tp = await getTranslations("pages.common");

  return (
    <section id="services" className="section-padding relative section-glow">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeIn>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {SERVICE_IDS.map((id, index) => {
            const iconKey = SERVICE_ICONS[id];
            const Icon = ICONS[iconKey];
            const features = t.raw(`items.${id}.features`) as string[];

            return (
              <FadeIn key={id} delay={index * 0.08}>
                <Link
                  href={servicePath(id)}
                  className={cn(
                    "premium-card group block h-full p-8",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
                  )}
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className={cn(
                        "brand-icon flex h-12 w-12 items-center justify-center rounded-2xl",
                        "shadow-subtle transition-transform duration-300 group-hover:scale-105",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-5xl font-extrabold leading-none text-text-muted/30 transition-colors group-hover:text-secondary/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary">
                    {t(`items.${id}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {t(`items.${id}.description`)}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-border/80 pt-7">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10">
                          <Check
                            className="h-3 w-3 text-accent"
                            strokeWidth={2.5}
                          />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              {tp("viewAllServices")} →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
