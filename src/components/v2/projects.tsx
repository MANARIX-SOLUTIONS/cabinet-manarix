import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { V2_PROJECTS, v2ProjectPath, type V2ProjectItem } from "@/lib/v2";

export async function V2Projects() {
  const t = await getTranslations("v2.projects");
  const items = t.raw("items") as V2ProjectItem[];

  return (
    <section id="projets" className="v2-section bg-[#F5F7FA]">
      <div className="v2-container">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[680px]">
              <p className="v2-eyebrow">{t("eyebrow")}</p>
              <h2 className="v2-h2">{t("title")}</h2>
              <p className="v2-lead">{t("description")}</p>
            </div>
            <Link href="/work" className="v2-btn-accent">
              {t("seeAll")}
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-[52px] grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {V2_PROJECTS.map((project, index) => {
              const item = items[index];
              if (!item) return null;

              return (
                <Link
                  key={project.id}
                  href={v2ProjectPath(project.id)}
                  className="v2-project"
                >
                  <div className="v2-photo-placeholder flex aspect-[16/11] items-center justify-center p-5">
                    <span className="rounded-md bg-white px-2.5 py-1.5 text-center font-[family-name:var(--font-v2-mono)] text-xs text-[#5E6A7E]">
                      {t(project.photoKey)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-[26px] pt-[26px] pb-7">
                    <p className="text-[11.5px] font-bold tracking-[0.18em] text-[color:var(--v2-accent)] uppercase">
                      {item.sector}
                    </p>
                    <h3 className="mt-2.5 text-[21px] font-bold tracking-[-0.015em] text-[#0B1426]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-[#4A5568]">
                      {item.body}
                    </p>
                    <span className="mt-auto pt-5 text-sm font-bold text-[color:var(--v2-accent)]">
                      {t("view")}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
