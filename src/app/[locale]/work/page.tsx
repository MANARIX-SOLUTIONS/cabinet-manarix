import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { V2Cta } from "@/components/v2/cta";
import { V2PageHero } from "@/components/v2/page-hero";
import { PROOF_PUBLICATION_IDS } from "@/lib/constants";
import { SITE } from "@/lib/site";
import {
  V2_PROJECTS,
  v2ProjectPath,
  type V2ProjectItem,
} from "@/lib/v2";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2.pages.work" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function V2WorkPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("v2.pages.work");
  const tc = await getTranslations("v2.pages.common");
  const tp = await getTranslations("v2.projects");
  const tproofs = await getTranslations("proofs");
  const items = tp.raw("items") as V2ProjectItem[];

  return (
    <main id="main-content">
      <V2PageHero
        breadcrumbs={[
          { label: tc("home"), href: "/" },
          { label: tc("work") },
        ]}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <section className="v2-section bg-[#F5F7FA]">
        <div className="v2-container">
          <FadeIn>
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
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
                        {tp(project.photoKey)}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-[26px] pt-[26px] pb-7">
                      <p className="text-[11.5px] font-bold tracking-[0.18em] text-[color:var(--v2-accent)] uppercase">
                        {item.sector}
                      </p>
                      <h2 className="mt-2.5 text-[21px] font-bold tracking-[-0.015em] text-[#0B1426]">
                        {item.title}
                      </h2>
                      <p className="mt-2.5 text-[15px] leading-[1.6] text-[#4A5568]">
                        {item.body}
                      </p>
                      <span className="mt-auto pt-5 text-sm font-bold text-[color:var(--v2-accent)]">
                        {tp("view")}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="v2-section bg-white">
        <div className="v2-container">
          <FadeIn>
            <div className="max-w-[720px]">
              <p className="v2-eyebrow">{tproofs("eyebrow")}</p>
              <h2 className="v2-h2">{tproofs("title")}</h2>
              <p className="v2-lead">{tproofs("description")}</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <FadeIn delay={0.08}>
              <article className="v2-card flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-[#0B1426]">
                    {tproofs("opensource.title")}
                  </h3>
                  <span className="v2-chip">{tproofs("opensource.status")}</span>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-[1.65] text-[#4A5568]">
                  {tproofs("opensource.description")}
                </p>
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-text-link mt-6 self-start"
                >
                  GitHub →
                </a>
              </article>
            </FadeIn>
            <FadeIn delay={0.12}>
              <article className="v2-card flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-[#0B1426]">
                    {tproofs("publications.title")}
                  </h3>
                  <span className="v2-chip">
                    {tproofs("publications.status")}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-[1.65] text-[#4A5568]">
                  {tproofs("publications.description")}
                </p>
                <ol className="mt-6 space-y-3">
                  {PROOF_PUBLICATION_IDS.slice(0, 3).map((id, index) => (
                    <li key={id} className="flex gap-3">
                      <span className="font-[family-name:var(--font-v2-mono)] text-[13px] text-[color:var(--v2-accent)]">
                        0{index + 1}
                      </span>
                      <p className="text-[15px] leading-[1.55] text-[#1E2A3F]">
                        {tproofs(`publications.items.${id}`)}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <V2Cta />
    </main>
  );
}
