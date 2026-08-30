"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { useActiveSection } from "@/hooks/use-active-section";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const onHero = !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
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
          className="fixed inset-0 z-40 bg-hero/70 backdrop-blur-sm lg:hidden"
          aria-label={t("closeMenu")}
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
          onHero
            ? "nav-on-hero border-white/8 bg-hero/35 backdrop-blur-xl"
            : "border-border/70 bg-background/80 shadow-subtle backdrop-blur-xl",
        )}
      >
        <Container
          as="nav"
          aria-label={t("mainNav")}
          className="flex h-[4.25rem] items-center justify-between gap-3"
        >
          <Logo variant={onHero ? "light" : "dark"} />

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_ITEMS.map(({ key, href }) => {
              const isPage =
                !href.includes("#") &&
                (pathname === href || pathname.startsWith(`${href}/`));
              const isActive = isPage || activeSection === href;
              return (
                <Link
                  key={key}
                  href={href}
                  data-active={isActive || undefined}
                  className="nav-link text-[13px] font-medium tracking-wide"
                >
                  {t(key)}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <LocaleSwitcher inverted={onHero} />
            <Button
              href="/#contact"
              variant={onHero ? "accent" : "secondary"}
              size="sm"
              showArrow
            >
              {tc("bookConsultation")}
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
            <LocaleSwitcher
              inverted={onHero}
              className="scale-90 sm:scale-100"
            />
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-xl p-2 transition-colors",
                onHero
                  ? "text-white hover:bg-white/10"
                  : "text-text-primary hover:bg-surface",
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
          <div
            className={cn(
              "border-t lg:hidden",
              onHero
                ? "border-white/10 bg-hero"
                : "border-border/60 bg-background",
            )}
          >
            <Container className="flex flex-col gap-0.5 py-3">
              {NAV_ITEMS.map(({ key, href }) => {
                const isPage =
                  !href.includes("#") &&
                  (pathname === href || pathname.startsWith(`${href}/`));
                const isActive = isPage || activeSection === href;
                return (
                  <Link
                    key={key}
                    href={href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? onHero
                          ? "bg-white/10 text-white"
                          : "bg-surface text-text-primary"
                        : onHero
                          ? "text-white/70 hover:bg-white/8 hover:text-white"
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
                variant={onHero ? "accent" : "secondary"}
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
    </>
  );
}
