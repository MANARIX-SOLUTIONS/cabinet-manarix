import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";

export async function V2Services() {
  const t = await getTranslations("v2.services");
  const offer1Tags = t.raw("offer1Tags") as string[];
  const offer2Tags = t.raw("offer2Tags") as string[];

  return (
    <section id="services" className="v2-section bg-[#F5F7FA]">
      <div className="v2-container">
        <FadeIn>
          <div className="max-w-[760px]">
            <p className="v2-eyebrow">{t("eyebrow")}</p>
            <h2 className="v2-h2">{t("title")}</h2>
            <p className="v2-lead">{t("description")}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-14 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]">
            <ServiceCard
              index="01"
              eyebrow={t("offer1Eyebrow")}
              title={t("offer1Title")}
              lead={t("offer1Lead")}
              body={t("offer1Body")}
              tags={offer1Tags}
              href="/services#engineering"
            />
            <ServiceCard
              index="02"
              eyebrow={t("offer2Eyebrow")}
              title={t("offer2Title")}
              lead={t("offer2Lead")}
              body={t("offer2Body")}
              tags={offer2Tags}
              href="/services#advisory"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServiceCard({
  index,
  eyebrow,
  title,
  lead,
  body,
  tags,
  href,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  tags: string[];
  href: "/services#engineering" | "/services#advisory";
}) {
  return (
    <Link
      href={href}
      className="v2-card relative overflow-hidden rounded-[18px] p-[clamp(28px,4vw,48px)] hover:shadow-[0_24px_48px_-24px_rgba(11,20,38,.22)]"
    >
      <div
        aria-hidden="true"
        className="absolute top-4 right-7 text-[clamp(80px,9vw,120px)] leading-none font-extrabold tracking-[-0.05em]"
        style={{
          color: "color-mix(in oklab, var(--v2-accent) 14%, white)",
        }}
      >
        {index}
      </div>
      <p className="relative text-xs font-bold tracking-[0.2em] text-[color:var(--v2-accent)] uppercase">
        {eyebrow}
      </p>
      <h3 className="relative mt-3.5 text-[clamp(26px,2.6vw,32px)] font-extrabold tracking-[-0.025em] text-[#0B1426]">
        {title}
      </h3>
      <p className="relative mt-4 max-w-[440px] text-lg leading-[1.5] font-semibold text-[#0B1426]">
        {lead}
      </p>
      <p className="mt-3.5 text-base leading-[1.7] text-pretty text-[#4A5568]">
        {body}
      </p>
      <div className="mt-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="v2-chip">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
