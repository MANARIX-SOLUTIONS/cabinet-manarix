import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

export function Logo({
  className,
  showText = true,
  variant = "dark",
}: LogoProps) {
  const t = useTranslations("footer");
  const tl = useTranslations("logo");

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={t("homeLabel")}
    >
      <div
        className={cn(
          "brand-icon relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
          "text-sm font-bold shadow-subtle",
          "transition-all duration-300 group-hover:shadow-elevated group-hover:scale-[1.03]",
        )}
      >
        <span className="relative z-10">M</span>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-sm font-bold tracking-tight",
              variant === "light" ? "text-white" : "text-text-primary",
            )}
          >
            {tl("manarix")}
          </span>
          <span
            className={cn(
              "mt-0.5 text-[11px] font-medium tracking-wider uppercase",
              variant === "light" ? "text-white/50" : "text-text-muted",
            )}
          >
            {tl("solutions")}
          </span>
        </div>
      )}
    </Link>
  );
}
