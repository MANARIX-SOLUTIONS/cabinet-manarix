import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { CLIENT_GRADIENTS, CLIENT_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export async function TrustedClients() {
  const t = await getTranslations("clients");

  return (
    <section
      id="clients"
      className="section-padding relative overflow-hidden border-b border-border/60 bg-surface dark:bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0 glow-primary" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

      <Container className="relative">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            align="center"
            className="mx-auto max-w-3xl"
          />
        </FadeIn>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {(["projects", "sectors", "retention"] as const).map(
            (stat, index) => (
              <FadeIn key={stat} delay={index * 0.06}>
                <div
                  className={cn(
                    "rounded-full border border-border/70 bg-card/80 px-4 py-2",
                    "text-sm backdrop-blur-sm",
                  )}
                >
                  <span className="font-heading font-bold text-secondary">
                    {t(`stats.${stat}.value`)}
                  </span>
                  <span className="mx-2 text-text-muted">·</span>
                  <span className="text-text-secondary">
                    {t(`stats.${stat}.label`)}
                  </span>
                </div>
              </FadeIn>
            ),
          )}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENT_IDS.map((id, index) => (
            <FadeIn key={id} delay={0.08 + index * 0.05}>
              <article
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden",
                  "rounded-[16px] border border-border/80 bg-card/90 p-6",
                  "card-hover backdrop-blur-sm",
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl",
                    "bg-gradient-to-br opacity-0 transition-opacity duration-500",
                    "group-hover:opacity-100",
                    CLIENT_GRADIENTS[id],
                  )}
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      "brand-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                      "text-sm font-bold shadow-subtle transition-transform duration-300",
                      "group-hover:scale-105",
                    )}
                  >
                    {t(`items.${id}.initials`)}
                  </div>
                  <span
                    className={cn(
                      "rounded-full border border-border/60 bg-surface/80",
                      "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
                      "text-text-muted",
                    )}
                  >
                    {t(`items.${id}.sector`)}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3 className="font-heading text-base font-bold tracking-tight text-text-primary">
                    {t(`items.${id}.name`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {t(`items.${id}.engagement`)}
                  </p>
                </div>

                <div
                  className={cn(
                    "relative mt-5 flex items-center gap-2 border-t border-border/60 pt-4",
                    "text-xs font-medium text-text-muted",
                  )}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {t(`items.${id}.region`)}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
