"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function V2LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      role="radiogroup"
      aria-label={t("label")}
      className="flex gap-0.5 rounded-lg border border-white/16 p-[3px]"
    >
      {routing.locales.map((loc) => {
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={t(loc)}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={cn(
              "flex items-center gap-1.5 rounded-[5px] px-2 py-1 text-[12px] font-bold tracking-[0.04em] transition-colors",
              isActive
                ? "bg-white/14 text-white"
                : "bg-transparent text-white/60 hover:text-white",
            )}
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-3.5 rounded-[2px]"
              style={{
                background:
                  loc === "fr"
                    ? "linear-gradient(90deg,#1F4FA8 0 33%,#fff 33% 66%,#E1373B 66%)"
                    : "linear-gradient(180deg,#1F4FA8 0 40%,#fff 40% 60%,#E1373B 60%)",
              }}
            />
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
