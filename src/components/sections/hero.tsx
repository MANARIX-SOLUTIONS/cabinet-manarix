"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroVisual } from "@/components/visual/hero-visual";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");
  const prefersReducedMotion = useReducedMotion();

  const stats = [
    { value: "99.9%", label: t("statUptime"), accent: true },
    { value: t("statSecurityValue"), label: t("statSecurity"), accent: false },
    { value: t("statReachValue"), label: t("statReach"), accent: false },
  ] as const;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-70 dark:opacity-60" />
      <div className="pointer-events-none absolute inset-0 glow-primary" />
      <div className="pointer-events-none absolute inset-0 glow-accent" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <FadeIn delay={0.1}>
              <Badge pulse>{tc("finTechEnterprise")}</Badge>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="mt-6 font-heading text-[2.75rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-text-primary sm:text-5xl lg:text-[3.75rem]">
                {t("headlineLine1")}
                <br />
                <span className="text-gradient">{t("headlineLine2")}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-[480px] text-lg leading-[1.7] text-text-secondary">
                {t("subheadline")}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href="/#contact"
                  variant="secondary"
                  size="lg"
                  showArrow
                >
                  {tc("scheduleDiscoveryCall")}
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  {tc("exploreServices")}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-12 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="stat-glass rounded-2xl px-3 py-4 sm:px-4"
                  >
                    <p
                      className={cn(
                        "font-heading font-bold tracking-tight",
                        stat.value.length > 4
                          ? "text-lg sm:text-xl"
                          : "text-2xl",
                        stat.accent ? "text-accent" : "text-text-primary",
                      )}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-text-secondary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="relative lg:pl-4">
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 0.96, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 blur-2xl" />
              <HeroVisual />
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
