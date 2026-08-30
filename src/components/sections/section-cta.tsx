import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import type { SectionCtaVariant } from "@/lib/constants";

const CTA_LINKS: Record<
  SectionCtaVariant,
  { primary: string; secondary: string }
> = {
  services: { primary: "/#contact", secondary: "/services" },
  caseStudies: { primary: "/#contact", secondary: "/#expertise" },
  architecture: { primary: "/#contact", secondary: "/services/payment-audit" },
};

export async function SectionCta({ variant }: { variant: SectionCtaVariant }) {
  const t = await getTranslations(`sectionCta.${variant}`);
  const links = CTA_LINKS[variant];

  return (
    <section className="relative py-10 lg:py-12">
      <Container>
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/[0.06] via-card to-card px-6 py-8 sm:flex-row sm:items-center sm:px-8 lg:py-9">
            <div className="max-w-xl">
              <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary sm:text-xl">
                {t("title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t("description")}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center">
              <Button href={links.primary} variant="secondary" size="md" showArrow>
                {t("primary")}
              </Button>
              <Link
                href={links.secondary}
                className="text-center text-sm font-medium text-secondary transition-colors hover:text-secondary/80 sm:px-2"
              >
                {t("secondary")} →
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
