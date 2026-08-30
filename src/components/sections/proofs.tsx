import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { PROOF_PUBLICATION_IDS } from "@/lib/constants";
import { SITE } from "@/lib/site";

export async function Proofs({ hideHeader = false }: { hideHeader?: boolean }) {
  const t = await getTranslations("proofs");

  return (
    <section id="insights" className="section-padding relative bg-surface/20">
      <Container>
        {hideHeader ? null : (
          <FadeIn>
            <SectionHeader
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              className="max-w-3xl"
            />
          </FadeIn>
        )}

        <div
          className={
            hideHeader ? "grid gap-5 lg:grid-cols-2" : "mt-14 grid gap-5 lg:grid-cols-2"
          }
        >
          <FadeIn delay={0.08}>
            <article className="card-accent-top premium-card flex h-full flex-col p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {t("opensource.title")}
                </h3>
                <Badge>{t("opensource.status")}</Badge>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                {t("opensource.description")}
              </p>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
              >
                GitHub →
              </a>
            </article>
          </FadeIn>

          <FadeIn delay={0.12}>
            <article className="card-accent-top premium-card flex h-full flex-col p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {t("publications.title")}
                </h3>
                <Badge>{t("publications.status")}</Badge>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t("publications.description")}
              </p>
              <ol className="mt-6 space-y-3">
                {PROOF_PUBLICATION_IDS.slice(0, 3).map((id, index) => (
                  <li key={id} className="flex gap-3">
                    <span className="index-mark mt-0.5 shrink-0">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {t(`publications.items.${id}`)}
                    </p>
                  </li>
                ))}
              </ol>
            </article>
          </FadeIn>
        </div>

        <FadeIn delay={0.16}>
          <article className="premium-card mt-5 p-8">
            <ol className="grid gap-4 md:grid-cols-2">
              {PROOF_PUBLICATION_IDS.slice(3).map((id, index) => (
                <li key={id} className="flex gap-4">
                  <span className="index-mark mt-0.5 shrink-0">
                    0{index + 4}
                  </span>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t(`publications.items.${id}`)}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
}
