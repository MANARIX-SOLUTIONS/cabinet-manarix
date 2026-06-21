"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PROCESS_STEP_IDS, PROCESS_STEP_NUMBERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Process() {
  const t = useTranslations("process");
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden border-y border-border/60 bg-background dark:bg-surface/80">
      <div className="pointer-events-none absolute inset-0 section-glow" />

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

        <div ref={timelineRef} className="relative mt-20">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border lg:left-1/2 lg:block lg:-translate-x-px" />
          <motion.div
            className="absolute left-8 top-0 hidden w-px bg-gradient-to-b from-secondary via-secondary/60 to-accent lg:left-1/2 lg:block lg:-translate-x-px"
            initial={{ height: prefersReducedMotion ? "100%" : 0 }}
            animate={
              isInView || prefersReducedMotion
                ? { height: "100%" }
                : { height: 0 }
            }
            transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          />

          <div className="space-y-10 lg:space-y-0">
            {PROCESS_STEP_IDS.map((id, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={id} delay={index * 0.12}>
                  <div
                    className={cn(
                      "relative lg:grid lg:grid-cols-2 lg:gap-16",
                      "lg:pb-20 last:lg:pb-0",
                    )}
                  >
                    <div
                      className={cn(
                        "lg:col-start-1",
                        !isEven && "lg:col-start-2",
                      )}
                    >
                      <div
                        className={cn(
                          "premium-card p-7 lg:max-w-md",
                          isEven ? "lg:ml-auto" : "lg:mr-auto",
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 font-heading text-sm font-bold text-secondary">
                            {PROCESS_STEP_NUMBERS[index]}
                          </span>
                          <div className="h-px flex-1 bg-border/80" />
                        </div>
                        <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-text-primary">
                          {t(`steps.${id}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          {t(`steps.${id}.description`)}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-8 top-8 hidden lg:block lg:left-1/2 lg:-translate-x-1/2">
                      <div className="relative flex h-5 w-5 items-center justify-center">
                        <span className="absolute h-5 w-5 rounded-full bg-secondary/20" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-secondary ring-4 ring-background" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
