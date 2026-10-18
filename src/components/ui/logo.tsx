import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/ui/logo-mark";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
  href?: "/";
}

export function Logo({
  className,
  showText = true,
  variant = "dark",
  href = "/",
}: LogoProps) {
  const t = useTranslations("footer");
  const tl = useTranslations("logo");
  const isLight = variant === "light";

  return (
    <Link
      href={href}
      className={cn("group flex items-center gap-3", className)}
      aria-label={t("homeLabel")}
    >
      <LogoMark variant={variant} size={34} />
      {showText && (
        <>
          <span
            aria-hidden="true"
            className={cn(
              "mx-0.5 hidden h-7 w-px sm:block",
              isLight ? "bg-white/15" : "bg-border/80",
            )}
          />
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-[14px] font-semibold tracking-[0.055em] uppercase",
                isLight ? "text-white" : "text-text-primary",
              )}
            >
              {tl("manarix")}
            </span>
            <span
              className={cn(
                "mt-1 text-[8.5px] font-semibold tracking-[0.26em] uppercase",
                isLight ? "text-white/50" : "text-text-muted",
              )}
            >
              {tl("solutions")}
            </span>
          </div>
        </>
      )}
    </Link>
  );
}
