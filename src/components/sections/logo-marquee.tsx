"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function LogoMarquee() {
  const t = useTranslations("marquee");
  const items = t.raw("items") as string[];
  const doubled = [...items, ...items];

  return (
    <section
      aria-label={t("label")}
      className="relative overflow-hidden border-y border-border/60 bg-surface py-5 dark:bg-surface/50"
    >
      <div className="marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-24" />
      <div className="marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-24" />

      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "mx-6 inline-flex items-center gap-2",
              "text-sm font-medium tracking-wide text-text-muted",
            )}
          >
            <span
              className="h-1 w-1 rounded-full bg-secondary/40"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
