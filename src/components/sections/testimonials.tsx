import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { TESTIMONIAL_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export async function Testimonials() {
  const t = await getTranslations("testimonials");

  return (
    <section className="section-padding border-y border-border/60 bg-surface/60 dark:bg-surface/50">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {TESTIMONIAL_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.1}>
              <blockquote className="premium-card flex h-full flex-col p-7">
                <div className="mb-5 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-1 w-4 rounded-full bg-secondary/20"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-[1.75] text-text-secondary">
                  &ldquo;{t(`items.${id}.quote`)}&rdquo;
                </p>
                <footer className="mt-7 flex items-center gap-3 border-t border-border/80 pt-6">
                  <div
                    className={cn(
                      "brand-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    )}
                  >
                    {t(`items.${id}.author`)
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {t(`items.${id}.author`)}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {t(`items.${id}.company`)}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
