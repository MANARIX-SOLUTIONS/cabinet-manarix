"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
          aria-label={t("closeMenu")}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 lg:px-6">
        <header
          className={cn(
            "w-full max-w-6xl transition-all duration-500 ease-out",
            isScrolled
              ? "rounded-2xl border border-border/60 bg-background/90 shadow-elevated backdrop-blur-2xl"
              : [
                  "rounded-2xl border border-border/50 bg-background/80",
                  "shadow-subtle backdrop-blur-xl",
                  "dark:border-transparent dark:bg-transparent dark:shadow-none",
                ].join(" "),
          )}
        >
          <Container
            as="nav"
            aria-label={t("mainNav")}
            className="flex h-14 items-center justify-between gap-3 lg:h-16"
          >
            <Logo />

            <div className="hidden items-center gap-7 lg:flex">
              {NAV_ITEMS.map(({ key, href }) => {
                const isActive = activeSection === href;
                return (
                  <Link
                    key={key}
                    href={href}
                    className={cn(
                      "nav-link text-sm font-medium",
                      isActive && "text-text-primary after:w-full",
                    )}
                  >
                    {t(key)}
                  </Link>
                );
              })}
            </div>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <LocaleSwitcher />
              <ThemeToggle />
              <Button href="/#contact" variant="secondary" size="sm">
                {tc("bookConsultation")}
              </Button>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
              <LocaleSwitcher className="scale-90 sm:scale-100" />
              <ThemeToggle className="scale-90 sm:scale-100" />
              <button
                type="button"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl p-2",
                  "text-text-primary transition-colors hover:bg-surface",
                )}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </Container>

          {isMobileOpen && (
            <div className="border-t border-border/60 lg:hidden">
              <Container className="flex flex-col gap-0.5 py-3">
                {NAV_ITEMS.map(({ key, href }) => {
                  const isActive = activeSection === href;
                  return (
                    <Link
                      key={key}
                      href={href}
                      className={cn(
                        "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-secondary/10 text-secondary"
                          : "text-text-secondary hover:bg-surface hover:text-text-primary",
                      )}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {t(key)}
                    </Link>
                  );
                })}
                <Button
                  href="/#contact"
                  variant="secondary"
                  size="md"
                  className="mt-2 w-full"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {tc("bookConsultation")}
                </Button>
              </Container>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
