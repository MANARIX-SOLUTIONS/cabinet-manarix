"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/ui/logo";
import { V2LocaleSwitcher } from "@/components/v2/locale-switcher";
import { V2_NAV_ITEMS } from "@/lib/v2";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function V2Navbar() {
  const t = useTranslations("v2.nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1100) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-[14px] transition-[background-color,border-color] duration-300"
      style={{
        background:
          isScrolled || isMobileOpen
            ? "rgba(11,20,38,0.96)"
            : "rgba(11,20,38,0.25)",
        borderColor: isScrolled ? "rgba(255,255,255,0.08)" : "transparent",
      }}
    >
      <div className="v2-container flex h-[76px] items-center justify-between gap-6">
        <Logo href="/" variant="light" />

        <nav
          aria-label={t("mainNav")}
          className="hidden items-center gap-8 min-[1100px]:flex"
        >
          {V2_NAV_ITEMS.map(({ key, href }) => {
            const isActive = isNavActive(pathname, href);
            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  "whitespace-nowrap text-[14.5px] font-medium transition-colors",
                  isActive ? "text-white" : "text-white/75 hover:text-white",
                )}
              >
                {t(key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3.5">
          <V2LocaleSwitcher />
          <Link
            href="/contact"
            className="v2-btn-accent hidden !px-[18px] !py-[11px] text-sm min-[1100px]:inline-flex"
          >
            {t("cta")}
          </Link>
          <button
            type="button"
            aria-label={isMobileOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-white/16 bg-transparent min-[1100px]:hidden"
          >
            <span
              className="h-0.5 w-[18px] rounded-sm bg-white transition-transform duration-200"
              style={{
                transform: isMobileOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="h-0.5 w-[18px] rounded-sm bg-white transition-opacity duration-200"
              style={{ opacity: isMobileOpen ? 0 : 1 }}
            />
            <span
              className="h-0.5 w-[18px] rounded-sm bg-white transition-transform duration-200"
              style={{
                transform: isMobileOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <nav
          aria-label={t("mainNav")}
          className="flex flex-col border-t border-white/8 bg-[#0B1426] px-[clamp(20px,4vw,40px)] pt-2 pb-7 min-[1100px]:hidden"
        >
          {V2_NAV_ITEMS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="border-b border-white/8 py-3.5 text-lg font-semibold text-white"
            >
              {t(key)}
            </Link>
          ))}
          <Link href="/contact" className="v2-btn-accent mt-5 text-[15px]">
            {t("cta")}
          </Link>
        </nav>
      )}
    </header>
  );
}
