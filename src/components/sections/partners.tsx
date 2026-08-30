import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { PARTNER_CHANNEL_IDS, PARTNER_RULE_IDS } from "@/lib/constants";
import { partnerInquiryPath } from "@/lib/paths";

export async function Partners() {
  const t = await getTranslations("partners");
  const tc = await getTranslations("common");

  return (
    <section
      id="partners"
      className="section-padding relative border-y border-border/60 bg-surface"
    >
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="max-w-3xl"
          />
        </FadeIn>

        <ol className="mt-14 grid gap-5 lg:grid-cols-3">
          {PARTNER_CHANNEL_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.06}>
              <li className="premium-card flex h-full flex-col p-7">
                <span className="index-mark">0{index + 1}</span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-text-primary">
                  {t(`channels.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {t(`channels.${id}.description`)}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.16}>
          <div className="premium-card mt-8 p-8 lg:p-10">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              {t("rulesTitle")}
            </h3>
            <ul className="mt-8 grid gap-8 md:grid-cols-2">
              {PARTNER_RULE_IDS.map((id, index) => (
                <li key={id} className="flex gap-4">
                  <span className="index-mark mt-0.5 shrink-0">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-text-primary">
                      {t(`rules.${id}.title`)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                      {t(`rules.${id}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={partnerInquiryPath()}
              variant="primary"
              size="lg"
              showArrow
            >
              {tc("proposePartnership")}
            </Button>
            <p className="text-sm leading-relaxed text-text-muted sm:max-w-md">
              {t("ctaNote")}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
