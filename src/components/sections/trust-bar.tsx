"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { TRUST_STAT_IDS } from "@/lib/constants";

export function TrustBar() {
  const t = useTranslations("trustBar");
  const rails = t.raw("rails") as string[];
  const doubledRails = [...rails, ...rails];

  return (
    <section
      aria-label={t("railsLabel")}
      className="marquee-on-hero relative overflow-hidden border-b border-white/8 bg-hero pb-6"
    >
      <Container className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] text-white/35 uppercase">
              {t("railsLabel")}
            </p>
            <p className="mt-1 text-[11px] text-white/28">{t("railsDisclaimer")}</p>
          </div>

          <ul className="flex flex-wrap gap-2 sm:justify-end">
            {TRUST_STAT_IDS.map((id) => (
              <li
                key={id}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[11px]"
              >
                <span className="font-heading font-semibold text-white/75">
                  {t(`stats.${id}.value`)}
                </span>
                <span className="text-white/40">·</span>
                <span className="text-white/45">{t(`stats.${id}.label`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative mt-5 overflow-hidden">
        <div className="marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24" />
        <div className="marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubledRails.map((item, i) => (
            <span key={`${item}-${i}`} className="rail-badge mx-2 sm:mx-3">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
