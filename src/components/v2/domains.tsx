import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";
import { V2_DOMAIN_SHAPES, type V2DomainItem } from "@/lib/v2";

export async function V2Domains() {
  const t = await getTranslations("v2.domains");
  const items = t.raw("items") as V2DomainItem[];

  return (
    <section id="domaines" className="v2-section bg-white">
      <div className="v2-container">
        <FadeIn>
          <div className="max-w-[720px]">
            <p className="v2-eyebrow">{t("eyebrow")}</p>
            <h2 className="v2-h2">{t("title")}</h2>
            <p className="v2-lead">{t("description")}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-[52px] grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {items.map((item, index) => {
              const shape = V2_DOMAIN_SHAPES[index] ?? V2_DOMAIN_SHAPES[0];
              return (
                <article key={item.title} className="v2-card p-[30px]">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "color-mix(in oklab, var(--v2-accent) 10%, white)",
                    }}
                  >
                    <span
                      className="h-4 w-4 bg-[color:var(--v2-accent)]"
                      style={{
                        borderRadius: shape.radius,
                        transform: shape.rotate,
                      }}
                    />
                  </div>
                  <h3 className="mt-[22px] text-[19px] font-bold tracking-[-0.015em] text-[#0B1426]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.6] text-[#4A5568]">
                    {item.desc}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-[#EEF1F5] pt-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-[14.5px] text-[#1E2A3F]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--v2-accent)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
