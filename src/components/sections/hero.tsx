"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroVisual } from "@/components/visual/hero-visual";

const TRUST_INDICATORS = [
  "trustIntegration",
  "trustModernization",
  "trustGreenfield",
] as const;

const TRUST_SECONDARY = ["trustRegion", "trustProcess"] as const;

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");

  return (
    <section id="top" className="hero-canvas relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <Container className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <FadeIn delay={0.08}>
              <Badge className="border-white/12 bg-white/6 text-white/75">
                {t("eyebrow")}
              </Badge>
            </FadeIn>

            <FadeIn delay={0.16}>
              <h1 className="mt-8 font-heading text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.75rem]">
                {t("headlineLine1")}
                <br />
                <span className="hero-headline-accent">
                  {t("headlineLine2")}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.24}>
              <p className="mt-7 max-w-xl text-lg leading-[1.75] text-white/58 lg:text-[1.125rem]">
                {t("subheadline")}
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/#contact" variant="accent" size="lg" showArrow>
                  {tc("bookDiscovery")}
                </Button>
                <Button
                  href="/#expertise"
                  variant="outline"
                  size="lg"
                  className="border-white/18 bg-white/4 text-white hover:border-white/35 hover:bg-white/8"
                >
                  {tc("exploreExpertise")}
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {TRUST_INDICATORS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-2.5 text-[12px] tracking-wide text-white/48"
                  >
                    <span
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
                      aria-hidden="true"
                    >
                      <span className="h-1 w-1 rounded-full bg-blue-400/90" />
                    </span>
                    {t(key)}
                  </li>
                ))}
              </ul>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {TRUST_SECONDARY.map((key) => (
                  <li
                    key={key}
                    className="text-[11px] tracking-wide text-white/32"
                  >
                    {t(key)}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.22} direction="left" className="relative lg:pl-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-12 rounded-full bg-blue-600/15 blur-3xl"
            />
            <HeroVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
