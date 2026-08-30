"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

export function LogoMarquee() {
  const t = useTranslations("marquee");
  const items = t.raw("items") as string[];
  const doubled = [...items, ...items];

  return (
    <section
      aria-label={t("label")}
      className="marquee-on-hero relative overflow-hidden border-y border-white/8 bg-hero py-6"
    >
      <Container className="relative mb-4 lg:mb-5">
        <p className="text-center text-[10px] font-medium tracking-[0.2em] text-white/35 uppercase lg:text-left">
          {t("label")}
        </p>
      </Container>

      <div className="marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24" />
      <div className="marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="tech-badge mx-2 sm:mx-3">
            <span className="tech-badge-dot" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
