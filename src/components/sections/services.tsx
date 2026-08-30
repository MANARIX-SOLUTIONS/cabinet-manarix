import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { HOME_FEATURED_OFFERS } from "@/lib/constants";
import { quotePath, servicePath } from "@/lib/paths";

const OFFER_CTA_KEYS = {
  "payment-audit": "exploreAudit",
  "add-rail": "exploreSprint",
  "spring-modernization": "exploreModernization",
  "multi-rail": "exploreGreenfield",
} as const;

export async function Services() {
  const t = await getTranslations("services");
  const tc = await getTranslations("common");

  return (
    <section id="offers" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {HOME_FEATURED_OFFERS.map((id, index) => {
            const features = t.raw(`items.${id}.features`) as string[];
            const ctaKey = OFFER_CTA_KEYS[id];

            return (
              <FadeIn key={id} delay={index * 0.06}>
                <article className="card-accent-top premium-card flex h-full flex-col p-7 lg:p-8">
                  <p className="index-mark">0{index + 1}</p>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-text-primary">
                    {t(`items.${id}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {t(`items.${id}.description`)}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {features.slice(0, 5).map((feature) => (
                      <li
                        key={feature}
                        className="text-sm leading-relaxed text-text-secondary before:mr-2 before:text-text-muted before:content-['—']"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    <Button href={servicePath(id)} variant="primary" size="sm">
                      {tc(ctaKey)}
                    </Button>
                    <Link
                      href={quotePath(id)}
                      className="text-sm font-medium text-secondary hover:text-secondary/80"
                    >
                      {tc("bookDiscovery")}
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-sm font-medium text-text-primary">
            {tc("quotePromise")}
          </p>
          <div className="mt-4 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              {t("eyebrow")} →
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
