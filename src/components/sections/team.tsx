import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { LinkedInIcon } from "@/components/ui/social-icons";
import { TEAM_GRADIENTS, TEAM_MEMBER_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export async function Team() {
  const t = await getTranslations("team");

  return (
    <section className="section-padding relative overflow-hidden border-b border-border/60 bg-surface dark:bg-surface/50">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {TEAM_MEMBER_IDS.map((id, index) => {
            const isLeadership = id === "ceo" || id === "cto";

            return (
              <FadeIn
                key={id}
                delay={index * 0.08}
                className={cn(isLeadership && "sm:col-span-1 xl:col-span-1")}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden",
                    "rounded-[16px] border border-border/80 bg-card",
                    "card-hover",
                    isLeadership && "xl:min-h-[320px]",
                  )}
                >
                  <div
                    className={cn(
                      "relative flex items-end gap-5 overflow-hidden p-6 pb-0",
                      isLeadership ? "min-h-[140px]" : "min-h-[120px]",
                    )}
                  >
                    <div
                      className="team-card-header pointer-events-none absolute inset-0"
                      aria-hidden="true"
                    />
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-50",
                        TEAM_GRADIENTS[id],
                      )}
                      aria-hidden="true"
                    />
                    <div
                      className={cn(
                        "relative flex shrink-0 items-center justify-center rounded-2xl",
                        "border border-white/20 bg-white/10 font-heading font-bold text-white",
                        "shadow-premium backdrop-blur-sm",
                        isLeadership
                          ? "h-20 w-20 text-2xl"
                          : "h-16 w-16 text-xl",
                      )}
                    >
                      {t(`members.${id}.initials`)}
                    </div>
                    <div className="relative pb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                        {t(`members.${id}.role`)}
                      </p>
                      <h3
                        className={cn(
                          "mt-1 font-heading font-bold tracking-tight text-white",
                          isLeadership ? "text-xl" : "text-lg",
                        )}
                      >
                        {t(`members.${id}.name`)}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-5">
                    <p className="flex-1 text-sm leading-[1.75] text-text-secondary">
                      {t(`members.${id}.bio`)}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {(t.raw(`members.${id}.expertise`) as string[]).map(
                        (skill) => (
                          <span
                            key={skill}
                            className={cn(
                              "rounded-lg border border-border/60 bg-surface/80",
                              "px-2.5 py-1 text-[11px] font-medium text-text-muted",
                            )}
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>

                    <footer className="mt-6 flex items-center justify-between border-t border-border/70 pt-5">
                      <p className="text-xs text-text-muted">
                        {t(`members.${id}.location`)}
                      </p>
                      <a
                        href={t(`members.${id}.linkedin`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("linkedinLabel", {
                          name: t(`members.${id}.name`),
                        })}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-xl",
                          "border border-border/60 bg-surface/80 text-text-muted",
                          "transition-all duration-300 hover:border-secondary/30",
                          "hover:text-secondary hover:shadow-subtle",
                        )}
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                    </footer>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div
            className={cn(
              "mt-12 rounded-[16px] border border-border/80 bg-card/80 p-8",
              "text-center backdrop-blur-sm md:p-10",
            )}
          >
            <p className="font-heading text-lg font-bold text-text-primary md:text-xl">
              {t("culture.title")}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
              {t("culture.description")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
