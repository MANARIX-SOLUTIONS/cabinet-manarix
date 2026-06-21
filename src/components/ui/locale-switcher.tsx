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
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations("locale");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      role="radiogroup"
      aria-label={t("label")}
      className={cn(
        "flex items-center gap-0.5 rounded-xl border border-border/60",
        "bg-surface/80 p-1 backdrop-blur-sm",
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
            "relative flex h-7 min-w-[2rem] items-center justify-center rounded-lg px-1.5",
            "text-xs font-semibold tracking-wide transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40",
            locale === loc
              ? "bg-card text-text-primary shadow-subtle"
              : "text-text-muted hover:text-text-secondary",
          )}
        >
          {LOCALE_LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
