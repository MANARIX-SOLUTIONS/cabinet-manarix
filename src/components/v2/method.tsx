import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import type { V2MethodItem } from "@/lib/v2";

export async function V2Method() {
  const t = await getTranslations("v2.method");
  const items = t.raw("items") as V2MethodItem[];

  return (
    <section id="methode" className="v2-section bg-white">
      <div className="v2-container grid items-start gap-[clamp(40px,6vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]">
        <FadeIn>
          <div className="lg:sticky lg:top-[120px]">
            <p className="v2-eyebrow">{t("eyebrow")}</p>
            <h2 className="v2-h2">{t("title")}</h2>
            <p className="mt-6 max-w-[480px] text-[17px] leading-[1.7] text-pretty text-[#4A5568]">
              {t("description")}
            </p>
            <div className="mt-8">
              <Link href="/contact" className="v2-btn-outline">
                {t("cta")}
              </Link>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {items.map((item, index) => (
              <article key={item.title} className="v2-card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[color:var(--v2-accent)] text-[17px] font-extrabold text-[color:var(--v2-accent)]">
                  {index + 1}
                </div>
                <p className="mt-6 text-[11.5px] font-bold tracking-[0.18em] text-[#7A8599] uppercase">
                  {item.kicker}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-[-0.015em] text-[#0B1426]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.6] text-[#4A5568]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
