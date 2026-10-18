import { getTranslations } from "next-intl/server";
import { CountUp } from "@/components/v2/count-up";
import { V2HeroOrbit } from "@/components/v2/hero-orbit";

export async function V2Hero() {
  const t = await getTranslations("v2.hero");

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B1426] pt-[clamp(112px,14vh,140px)] pb-[clamp(56px,8vh,88px)] text-white"
    >
      <div
        aria-hidden="true"
        className="v2-grid-mask pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[260px] -right-[300px] h-[900px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--v2-accent) 22%, transparent), transparent 65%)",
        }}
      />
      <div className="v2-container relative grid items-center gap-[clamp(48px,6vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,480px),1fr))]">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/3 px-3.5 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "var(--v2-accent)",
                boxShadow:
                  "0 0 0 4px color-mix(in oklab, var(--v2-accent) 25%, transparent)",
              }}
            />
            <span className="text-[11.5px] font-semibold tracking-[0.14em] text-white/82 uppercase">
              {t("eyebrow")}
            </span>
          </div>
          <h1 className="mt-7 text-[clamp(40px,5.6vw,72px)] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance text-white">
            {t("headline")}
          </h1>
          <p className="mt-6 max-w-[540px] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-pretty text-white/72">
            {t("subheadline")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projets" className="v2-btn-accent">
              {t("ctaPrimary")}
            </a>
            <a href="#a-propos" className="v2-btn-ghost">
              {t("ctaSecondary")}
            </a>
          </div>
          <div className="mt-[clamp(40px,6vh,64px)] grid max-w-[560px] grid-cols-3 gap-[clamp(12px,3vw,40px)] border-t border-white/10 pt-7">
            <HeroStat
              value={Number(t("stat1Value"))}
              suffix={t("stat1Suffix")}
              label={t("stat1Label")}
            />
            <HeroStat
              value={Number(t("stat2Value"))}
              suffix={t("stat2Suffix")}
              label={t("stat2Label")}
            />
            <HeroStat
              value={Number(t("stat3Value"))}
              suffix={t("stat3Suffix")}
              label={t("stat3Label")}
            />
          </div>
        </div>
        <V2HeroOrbit />
      </div>
    </section>
  );
}

function HeroStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div>
      <div className="text-[clamp(28px,3.6vw,44px)] leading-none font-extrabold tracking-[-0.03em] text-white">
        <CountUp value={value} />
        <span className="text-[color:var(--v2-accent)]">{suffix}</span>
      </div>
      <div className="mt-2 text-[clamp(12px,1vw,14px)] text-white/62">
        {label}
      </div>
    </div>
  );
}
