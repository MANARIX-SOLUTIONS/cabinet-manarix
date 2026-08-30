import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { CommitmentIcon } from "@/components/sections/commitment-icon";
import { TRANSPARENCY_COMMITMENT_IDS } from "@/lib/constants";

export async function Transparency() {
  const t = await getTranslations("transparency");

  return (
    <section
      id="transparency"
      className="section-padding relative border-y border-border/70 bg-surface/40"
    >
      <Container className="relative">
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("intro")}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <FadeIn delay={0.08}>
            <article className="card-accent-top premium-card h-full p-8">
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-muted uppercase">
                {t("costsTitle")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {t("costs")}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.12}>
            <article className="card-accent-top premium-card h-full p-8">
              <p className="text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
                {t("gainsTitle")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-primary">
                {t("gains")}
              </p>
            </article>
          </FadeIn>
        </div>

        <FadeIn delay={0.16}>
          <h3 className="mt-14 font-heading text-xl font-semibold text-text-primary">
            {t("commitmentsTitle")}
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {TRANSPARENCY_COMMITMENT_IDS.map((id) => (
              <li key={id} className="card-accent-top premium-card p-6">
                <CommitmentIcon id={id} />
                <p className="mt-3 font-heading text-base font-semibold text-text-primary">
                  {t(`commitments.${id}.title`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`commitments.${id}.description`)}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
