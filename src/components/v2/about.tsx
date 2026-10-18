import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";

export async function V2About() {
  const t = await getTranslations("v2.about");

  return (
    <section id="a-propos" className="v2-section bg-white">
      <FadeIn>
        <div className="v2-container grid items-center gap-[clamp(48px,7vw,96px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,440px),1fr))]">
          <div>
            <p className="v2-eyebrow">{t("eyebrow")}</p>
            <h2 className="v2-h2">{t("title")}</h2>
            <p className="mt-7 text-[17px] leading-[1.7] text-pretty text-[#4A5568]">
              {t("p1")}
            </p>
            <p className="mt-[18px] text-[17px] leading-[1.7] text-pretty text-[#4A5568]">
              {t("p2")}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <Link href="/contact" className="v2-text-link">
                {t("ctaPrimary")}
              </Link>
              <Link href="/services" className="v2-text-link-muted">
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="v2-photo-placeholder flex aspect-[4/4.6] items-start justify-end rounded-[20px] p-5">
              <span className="rounded-md bg-white px-2.5 py-1.5 font-[family-name:var(--font-v2-mono)] text-xs text-[#5E6A7E]">
                {t("photoLabel")}
              </span>
            </div>
            <div className="absolute bottom-8 -left-4 flex w-[min(300px,82%)] flex-col gap-3.5 rounded-2xl bg-[#0B1426] p-6 text-white shadow-[0_30px_60px_-24px_rgba(11,20,38,.45)]">
              <div className="flex items-center gap-3.5">
                <span className="font-[family-name:var(--font-v2-mono)] text-[13px] text-[color:var(--v2-accent)]">
                  01
                </span>
                <span className="text-[17px] font-bold">{t("step1")}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-3.5">
                <span className="font-[family-name:var(--font-v2-mono)] text-[13px] text-[color:var(--v2-accent)]">
                  02
                </span>
                <span className="text-[17px] font-bold">{t("step2")}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center gap-3.5">
                <span className="font-[family-name:var(--font-v2-mono)] text-[13px] text-[color:var(--v2-accent)]">
                  03
                </span>
                <span className="text-[17px] font-bold">{t("step3")}</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
