import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { PlatformMockup } from "@/components/visual/platform-mockup";
import { CASE_STUDY_IDS, CASE_STUDY_TYPES } from "@/lib/constants";
import { workPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

export async function CaseStudies() {
  const t = await getTranslations("caseStudies");
  const tc = await getTranslations("common");
  const tp = await getTranslations("pages.common");

  return (
    <section
      id="capabilities"
      className="section-padding relative section-glow"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </FadeIn>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {CASE_STUDY_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.08}>
              <Link
                href={workPath(id)}
                className={cn(
                  "premium-card group flex h-full flex-col overflow-hidden",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
                )}
              >
                <div className="border-b border-border/60 bg-surface/80 p-5 transition-colors group-hover:bg-surface">
                  <PlatformMockup type={CASE_STUDY_TYPES[id]} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text-primary">
                    {t(`items.${id}.title`)}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-secondary">
                    {t(`items.${id}.description`)}
                  </p>
                  <span
                    className={cn(
                      "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary",
                      "transition-all duration-300",
                      "opacity-70 group-hover:translate-y-0 group-hover:opacity-100",
                    )}
                  >
                    {tc("viewCapability")}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/work"
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              {tp("viewAllWork")} →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
