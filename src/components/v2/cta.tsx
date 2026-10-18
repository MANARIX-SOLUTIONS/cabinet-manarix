import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/ui/fade-in";

export async function V2Cta() {
  const t = await getTranslations("v2.cta");
  const tl = await getTranslations("logo");

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1426] py-[clamp(96px,13vw,160px)] text-center text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 100%, #000, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 100%, #000, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-520px] left-1/2 h-[800px] w-[1000px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--v2-accent) 30%, transparent), transparent 62%)",
        }}
      />
      <FadeIn>
        <div className="relative mx-auto flex max-w-[760px] flex-col items-center px-[clamp(20px,4vw,40px)]">
          <div className="flex flex-col items-center gap-1.5 leading-none">
            <span className="text-[18px] font-extrabold text-white">
              {tl("manarix")}
            </span>
            <span className="text-[10.5px] font-semibold tracking-[0.26em] text-white/60 uppercase">
              {t("kicker")}
            </span>
          </div>
          <h2 className="mt-9 text-[clamp(36px,5vw,64px)] leading-[1.06] font-extrabold tracking-[-0.035em] text-balance text-white">
            {t("title")}
          </h2>
          <p className="mt-5 text-[clamp(16px,1.5vw,19px)] leading-[1.6] text-white/72">
            {t("description")}
          </p>
          <Link
            href="/contact"
            className="v2-btn-accent mt-9 px-7 py-4 text-base"
          >
            {t("button")}
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
