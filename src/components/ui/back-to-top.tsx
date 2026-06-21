"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const t = useTranslations("common");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("backToTop")}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center",
        "rounded-2xl border border-border/60 bg-card/90 text-text-secondary",
        "shadow-elevated backdrop-blur-md",
        "transition-all duration-300 hover:border-secondary/30 hover:text-secondary",
        "hover:-translate-y-0.5 focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        "max-sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}
