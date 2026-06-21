import { Calendar, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/sections/contact-form";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function CTASection() {
  const t = await getTranslations("cta");
  const tc = await getTranslations("common");
  const hasCalendly = Boolean(SITE.calendlyUrl);

  const contactCardClass = cn(
    "group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300",
    "border border-border bg-card shadow-subtle",
    "hover:border-secondary/25 hover:shadow-elevated",
    "dark:border-white/8 dark:bg-white/5 dark:shadow-none",
    "dark:hover:border-white/15 dark:hover:bg-white/8",
  );

  const contactIconClass = cn(
    "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
    "bg-secondary/10 text-secondary",
    "group-hover:bg-secondary/15",
    "dark:bg-white/10 dark:text-white/80",
    "dark:group-hover:bg-secondary/20 dark:group-hover:text-white",
  );

  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
      <div className="cta-surface noise-overlay absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30 dark:opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[100px] dark:bg-secondary/15" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-accent/8 blur-[80px] dark:bg-accent/10" />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div>
              <Badge
                className={cn(
                  "border-secondary/20 bg-secondary/5 text-secondary",
                  "dark:border-white/15 dark:bg-white/10 dark:text-white/80",
                )}
              >
                {t("badge")}
              </Badge>
              <h2
                className={cn(
                  "mt-5 font-heading text-3xl font-bold tracking-[-0.02em]",
                  "text-text-primary sm:text-4xl lg:text-[3.25rem] lg:leading-[1.1]",
                  "dark:text-white",
                )}
              >
                {t("title")}{" "}
                <span className="text-gradient">{t("titleHighlight")}</span>
              </h2>
              <p
                className={cn(
                  "mt-5 max-w-md text-base leading-relaxed lg:text-lg",
                  "text-text-secondary dark:text-white/75",
                )}
              >
                {t("description")}
              </p>

              <div className="mt-10 space-y-3">
                <a href={`mailto:${SITE.email}`} className={contactCardClass}>
                  <span className={contactIconClass}>
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-text-muted dark:text-white/55">
                      {tc("email")}
                    </p>
                    <p className="text-sm font-medium text-text-primary dark:text-white">
                      {SITE.email}
                    </p>
                  </div>
                </a>

                {hasCalendly && (
                  <a
                    href={SITE.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={contactCardClass}
                  >
                    <span className={contactIconClass}>
                      <Calendar className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-text-muted dark:text-white/55">
                        {tc("scheduling")}
                      </p>
                      <p className="text-sm font-medium text-text-primary dark:text-white">
                        {tc("bookOnCalendly")}
                      </p>
                    </div>
                  </a>
                )}
              </div>

              {hasCalendly && (
                <div className="mt-8 hidden lg:block">
                  <Button
                    href={SITE.calendlyUrl!}
                    variant="outline"
                    size="lg"
                    className={cn(
                      "border-border text-text-primary hover:border-secondary/30",
                      "dark:border-white/20 dark:bg-transparent dark:text-white",
                      "dark:hover:border-white/35 dark:hover:bg-white/8",
                    )}
                  >
                    {tc("scheduleCall")}
                  </Button>
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
