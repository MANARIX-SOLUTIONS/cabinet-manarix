import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { CASE_STUDY_IDS, SHOW_XAALIS } from "@/lib/constants";
import { workPath } from "@/lib/paths";

export async function CaseStudies() {
  const t = await getTranslations("caseStudies");
  const tp = await getTranslations("proofs");

  return (
    <section id="work" className="section-padding relative">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {CASE_STUDY_IDS.map((id, index) => {
            const technologies = t.raw(`items.${id}.technologies`) as string[];

            return (
              <FadeIn key={id} delay={index * 0.08}>
                <article className="card-accent-top premium-card flex h-full flex-col p-7 lg:p-8">
                  <p className="index-mark">0{index + 1}</p>
                  <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-text-primary">
                    {t(`items.${id}.title`)}
                  </h3>

                  <div className="mt-6 space-y-5">
                    <CaseStudyBlock
                      label={t("challengeLabel")}
                      content={t(`items.${id}.challenge`)}
                    />
                    <CaseStudyBlock
                      label={t("approachLabel")}
                      content={t(`items.${id}.approach`)}
                    />
                    <CaseStudyBlock
                      label={t("outcomeLabel")}
                      content={t(`items.${id}.outcome`)}
                      emphasized
                    />
                  </div>

                  <div className="mt-auto border-t border-border/60 pt-5">
                    <p className="text-[11px] font-medium tracking-[0.16em] text-text-muted uppercase">
                      {t("technologiesLabel")}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-[11px] font-medium text-text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {SHOW_XAALIS && (
          <FadeIn delay={0.16}>
            <article className="card-accent-top premium-card mt-5 flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between lg:p-8">
              <div>
                <p className="text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
                  {tp("xaalis.label")}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary">
                  {tp("xaalis.title")}
                </h3>
                <p className="mt-1 max-w-xl text-sm text-text-secondary">
                  {tp("xaalis.subtitle")}
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                  {tp("xaalis.description")}
                </p>
              </div>
              <Link
                href={workPath("xaalis")}
                className="shrink-0 text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
              >
                {tp("xaalis.cta")} →
              </Link>
            </article>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}

function CaseStudyBlock({
  label,
  content,
  emphasized = false,
}: {
  label: string;
  content: string;
  emphasized?: boolean;
}) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.16em] text-text-muted uppercase">
        {label}
      </p>
      <p
        className={
          emphasized
            ? "mt-2 text-sm leading-relaxed text-text-primary"
            : "mt-2 text-sm leading-relaxed text-text-secondary"
        }
      >
        {content}
      </p>
    </div>
  );
}
