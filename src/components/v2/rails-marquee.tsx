"use client";

import { useTranslations } from "next-intl";
import { V2_RAIL_COLORS, v2RailRadius } from "@/lib/v2";

export function V2RailsMarquee() {
  const t = useTranslations("v2.rails");
  const trust = useTranslations("trustBar");
  const rails = trust.raw("rails") as string[];
  const doubled = [...rails, ...rails];

  return (
    <section
      aria-label={t("label")}
      className="border-b border-[#E6EAF0] bg-white py-9"
    >
      <p className="mb-[22px] text-center text-[11.5px] font-bold tracking-[0.2em] text-[#7A8599] uppercase">
        {t("label")}
      </p>
      <p className="sr-only">{t("disclaimer")}</p>
      <div className="relative overflow-hidden">
        <div className="v2-marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24" />
        <div className="v2-marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24" />
        <div className="animate-marquee flex w-max gap-4">
          {doubled.map((name, index) => {
            const color = V2_RAIL_COLORS[index % V2_RAIL_COLORS.length];
            return (
              <div
                key={`${name}-${index}`}
                className="flex h-16 cursor-default items-center gap-2.5 rounded-[10px] border border-[#E6EAF0] px-7 grayscale opacity-55 transition-[filter,opacity,border-color] duration-300 hover:border-[#C9D2DF] hover:opacity-100 hover:grayscale-0"
              >
                <span
                  className="h-[22px] w-[22px] shrink-0"
                  style={{
                    background: color,
                    borderRadius: v2RailRadius(index),
                  }}
                />
                <span className="text-[17px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-[#0B1426]">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
