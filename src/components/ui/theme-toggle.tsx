"use client";

import { useTranslations } from "next-intl";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type ThemeOption = "light" | "dark" | "system";

const OPTIONS: {
  value: ThemeOption;
  icon: typeof Sun;
  labelKey: "light" | "system" | "dark";
}[] = [
  { value: "light", icon: Sun, labelKey: "light" },
  { value: "system", icon: Monitor, labelKey: "system" },
  { value: "dark", icon: Moon, labelKey: "dark" },
];

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const t = useTranslations("theme");

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-9 w-[108px] rounded-xl border border-border/60 bg-surface",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const active = (theme ?? "system") as ThemeOption;

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
      {OPTIONS.map(({ value, icon: Icon, labelKey }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={active === value}
          aria-label={t(labelKey)}
          onClick={() => setTheme(value)}
          className={cn(
            "relative flex h-7 w-8 items-center justify-center rounded-lg",
            "transition-all duration-300 focus-visible:outline-none",
            "focus-visible:ring-2 focus-visible:ring-secondary/40",
            active === value
              ? "bg-card text-text-primary shadow-subtle"
              : "text-text-muted hover:text-text-secondary",
          )}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      ))}
    </div>
  );
}
