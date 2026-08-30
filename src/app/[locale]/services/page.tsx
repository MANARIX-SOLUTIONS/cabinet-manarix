import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { PageHero } from "@/components/pages/page-hero";
import { DetailCTA } from "@/components/pages/detail-cta";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  OUT_OF_SCOPE_IDS,
  SERVICE_FAMILY_IDS,
  SERVICE_FAMILY_OFFERS,
  type ServiceSlug,
} from "@/lib/constants";
import { quotePath, servicePath } from "@/lib/paths";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.servicesHub" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ServicesHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pages.servicesHub");
  const tc = await getTranslations("pages.common");
  const ts = await getTranslations("services");
  const tcommon = await getTranslations("common");

  return (
    <PageShell>
      <PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("services") },
        ]}
        title={t("title")}
        description={t("description")}
      />

      {SERVICE_FAMILY_IDS.map((family) => (
        <section
          key={family}
          id={family}
          className="section-padding border-b border-border/60"
        >
          <Container>
            <p className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-secondary/50" />
              {ts(`families.${family}.title`)}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold text-text-primary sm:text-3xl">
              {ts(`families.${family}.tagline`)}
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {SERVICE_FAMILY_OFFERS[family].map((id) => {
                const offer = id as ServiceSlug;
                const features = ts.raw(`items.${offer}.features`) as string[];
                const isEmergency = ts.has(`items.${offer}.cta`);
                const hasGuarantee = ts.has(`items.${offer}.guarantee`);

                return (
                  <article
                    key={offer}
                    className="premium-card flex h-full flex-col p-7"
                  >
                    <h3 className="font-heading text-xl font-semibold text-text-primary">
                      {ts(`items.${offer}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {ts(`items.${offer}.duration`)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {ts(`items.${offer}.description`)}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm leading-relaxed text-text-secondary before:mr-2 before:text-text-muted before:content-['—']"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {hasGuarantee && (
                      <p className="mt-5 text-sm leading-relaxed text-text-primary">
                        <span className="font-medium">
                          {ts("guaranteeLabel")} —{" "}
                        </span>
                        {ts(`items.${offer}.guarantee`)}
                      </p>
                    )}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Button
                        href={quotePath(offer)}
                        variant={isEmergency ? "primary" : "outline"}
                        size="sm"
                      >
                        {isEmergency
                          ? tcommon("contactEmergency")
                          : tcommon("requestQuote")}
                      </Button>
                      <Link
                        href={servicePath(offer)}
                        className="text-sm font-medium text-secondary hover:text-secondary/80"
                      >
                        {tc("deliverables")} →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ))}

      <section className="section-padding">
        <Container>
          <div className="premium-card p-8">
            <h2 className="font-heading text-2xl font-semibold text-text-primary">
              {ts("outOfScope.title")}
            </h2>
            <p className="mt-3 text-sm text-text-secondary">
              {ts("outOfScope.intro")}
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {OUT_OF_SCOPE_IDS.map((id) => (
                <li key={id} className="text-sm text-text-secondary">
                  — {ts(`outOfScope.items.${id}`)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <DetailCTA />
    </PageShell>
  );
}
