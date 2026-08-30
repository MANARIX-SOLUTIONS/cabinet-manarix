import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export async function DetailCTA() {
  const t = await getTranslations("pages.common");
  const tc = await getTranslations("common");

  return (
    <section className="hero-canvas relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium tracking-[0.18em] text-white/40 uppercase">
            {tc("scheduleDiscoveryCall")}
          </p>
          <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t("readyToStartTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/58">
            {t("readyToStart")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/#contact" variant="accent" size="lg" showArrow>
              {tc("bookDiscovery")}
            </Button>
            <Button
              href="/"
              variant="outline"
              size="lg"
              className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/8"
            >
              {t("backToHome")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
