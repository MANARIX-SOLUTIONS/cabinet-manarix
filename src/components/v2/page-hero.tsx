import {
  V2Breadcrumbs,
  type V2BreadcrumbItem,
} from "@/components/v2/breadcrumbs";

export function V2PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
}: {
  breadcrumbs: V2BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0B1426] pt-[128px] pb-[72px] text-white">
      <div
        aria-hidden="true"
        className="v2-grid-mask pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[220px] -right-[240px] h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--v2-accent) 22%, transparent), transparent 65%)",
        }}
      />
      <div className="v2-container relative max-w-[880px]">
        <V2Breadcrumbs items={breadcrumbs} />
        {eyebrow ? <p className="v2-eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-4 text-[clamp(36px,5vw,60px)] leading-[1.06] font-extrabold tracking-[-0.035em] text-balance text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-[640px] text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-pretty text-white/72">
          {description}
        </p>
      </div>
    </section>
  );
}
