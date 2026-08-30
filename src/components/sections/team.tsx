import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { LinkedInIcon } from "@/components/ui/social-icons";
import { TEAM_MEMBER_IDS, TEAM_PHOTOS } from "@/lib/constants";

export async function Team() {
  const t = await getTranslations("team");

  return (
    <section className="section-padding relative border-b border-border/60">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="max-w-3xl"
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {TEAM_MEMBER_IDS.map((id, index) => {
            const expertise = t.raw(`members.${id}.expertise`) as string[];
            const linkedin = t(`members.${id}.linkedin`);
            const photo = TEAM_PHOTOS[id];

            return (
              <FadeIn key={id} delay={index * 0.08}>
                <article className="card-accent-top premium-card p-7">
                  <div className="flex items-center gap-4">
                    {photo ? (
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={photo}
                          alt={t(`members.${id}.name`)}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-hero font-heading text-sm font-semibold text-white">
                        {t(`members.${id}.initials`)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-text-primary">
                        {t(`members.${id}.name`)}
                      </h3>
                      <p className="mt-0.5 text-sm text-text-muted">
                        {t(`members.${id}.role`)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                    {t(`members.${id}.bio`)}
                  </p>

                  {expertise.length > 0 && (
                    <p className="mt-4 text-sm text-text-muted">
                      {expertise.join(" · ")}
                    </p>
                  )}

                  <div className="mt-5 flex items-center justify-between border-t border-border/80 pt-4">
                    <p className="text-xs text-text-muted">
                      {t(`members.${id}.location`)}
                    </p>
                    {linkedin ? (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("linkedinLabel", {
                          name: t(`members.${id}.name`),
                        })}
                        className="text-text-muted transition-colors hover:text-text-primary"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
