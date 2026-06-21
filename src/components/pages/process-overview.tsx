import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { PROCESS_STEP_IDS, PROCESS_STEP_NUMBERS } from "@/lib/constants";

export async function ProcessOverview() {
  const tc = await getTranslations("pages.common");
  const t = await getTranslations("process");

  return (
    <section className="section-padding border-y border-border/60 bg-background">
      <Container>
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {tc("ourProcess")}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-text-secondary">
          {t("description")}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEP_IDS.map((id, index) => (
            <div
              key={id}
              className="rounded-card border border-border/80 bg-card p-6"
            >
              <span className="font-heading text-sm font-bold text-secondary">
                {PROCESS_STEP_NUMBERS[index]}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-text-primary">
                {t(`steps.${id}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t(`steps.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
