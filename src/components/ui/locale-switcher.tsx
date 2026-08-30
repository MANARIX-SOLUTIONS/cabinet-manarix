"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

interface LocaleSwitcherProps {
  className?: string;
  inverted?: boolean;
}

export function LocaleSwitcher({ className, inverted = false }: LocaleSwitcherProps) {
  const t = useTranslations("locale");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      role="radiogroup"
      aria-label={t("label")}
      className={cn(
        "flex items-center gap-0.5 rounded-full border p-1",
        inverted
          ? "border-white/15 bg-white/5"
          : "border-border/60 bg-surface/80 backdrop-blur-sm",
        className,
      )}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          role="radio"
          aria-checked={locale === loc}
          aria-label={t(loc)}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={cn(
            "relative flex h-7 min-w-[2rem] items-center justify-center rounded-full px-1.5",
            "text-xs font-semibold tracking-wide transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40",
            locale === loc
              ? inverted
                ? "bg-white text-[#0b1220]"
                : "bg-card text-text-primary shadow-subtle"
              : inverted
                ? "text-white/55 hover:text-white"
                : "text-text-muted hover:text-text-secondary",
          )}
        >
          {LOCALE_LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
