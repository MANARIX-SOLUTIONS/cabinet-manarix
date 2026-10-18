"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";
import { v2TechInitials, type V2TechColumn } from "@/lib/v2";

export function V2Technologies() {
  const t = useTranslations("v2.tech");
  const columns = t.raw("columns") as V2TechColumn[];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="technologies" className="v2-section bg-[#F5F7FA]">
      <div className="v2-container">
        <FadeIn>
          <div className="max-w-[720px]">
            <p className="v2-eyebrow">{t("eyebrow")}</p>
            <h2 className="v2-h2">{t("title")}</h2>
            <p className="v2-lead">{t("description")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-[52px] hidden gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))] min-[1100px]:grid">
            {columns.map((column) => (
              <TechColumn key={column.title} column={column} />
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 flex flex-col gap-2.5 min-[1100px]:hidden">
          {columns.map((column, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={column.title}
                className="overflow-hidden rounded-[14px] border border-[#E1E6EE] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-14 w-full items-center justify-between gap-3 px-5 text-left"
                >
                  <span className="text-base font-bold text-[#0B1426]">
                    {column.title}
                  </span>
                  <span className="text-[22px] leading-none font-normal text-[color:var(--v2-accent)]">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="flex flex-wrap gap-2 px-5 pb-5">
                    {column.items.map((item) => (
                      <TechChip key={item} name={item} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/services" className="v2-text-link">
            {t("seeAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function TechColumn({ column }: { column: V2TechColumn }) {
  return (
    <div className="rounded-2xl border border-[#E1E6EE] bg-white p-[26px]">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="m-0 text-base font-bold text-[#0B1426]">{column.title}</h3>
        <span className="font-[family-name:var(--font-v2-mono)] text-xs text-[#7A8599]">
          {String(column.items.length).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {column.items.map((item) => (
          <TechChip key={item} name={item} />
        ))}
      </div>
    </div>
  );
}

function TechChip({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2 rounded-lg border border-[#E1E6EE] bg-white py-1.5 pr-[11px] pl-1.5 text-[13.5px] font-medium text-[#1E2A3F] transition-colors hover:border-[color:var(--v2-accent)]">
      <span
        className="flex h-5 w-5 items-center justify-center rounded-[5px] text-[10px] font-extrabold text-[color:var(--v2-accent)]"
        style={{
          background: "color-mix(in oklab, var(--v2-accent) 12%, white)",
        }}
      >
        {v2TechInitials(name)}
      </span>
      {name}
    </span>
  );
}
