import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export async function RecruiterSection() {
  const t = await getTranslations("recruiter");
  const tc = await getTranslations("common");

  return (
    <section className="relative border-t border-border/60 py-16 lg:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-border/80 bg-surface/30 px-8 py-10 text-center lg:px-12">
            <p className="text-[11px] font-medium tracking-[0.18em] text-text-muted uppercase">
              {t("disclaimer")}
            </p>
            <h2 className="mt-4 font-heading text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
              {t("description")}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/#contact" variant="outline" size="md">
                {tc("discussOpportunity")}
              </Button>
              <Button
                href={SITE.social.linkedin}
                variant="ghost"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tc("viewEngineeringProfile")} →
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
