import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export async function DetailCTA() {
  const t = await getTranslations("pages.common");
  const tc = await getTranslations("common");

  return (
    <section className="section-padding border-t border-border/60 bg-surface/60 dark:bg-surface/50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            {t("readyToStart")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            {t("ctaDescription")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/#contact" variant="secondary" size="lg" showArrow>
              {tc("bookConsultation")}
            </Button>
            <Button href="/" variant="outline" size="lg">
              {t("backToHome")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
