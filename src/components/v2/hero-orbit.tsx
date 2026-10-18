import { getTranslations } from "next-intl/server";
import { LogoMark } from "@/components/ui/logo-mark";

export async function V2HeroOrbit() {
  const t = await getTranslations("v2.hero");

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-3xl border border-white/9 bg-[#0E1A31]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--v2-accent) 30%, transparent), transparent 62%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
          backgroundSize: "9% 9%",
          backgroundPosition: "center",
          maskImage: "radial-gradient(circle,#000 30%,transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle,#000 30%,transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/7"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/14"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderColor: "color-mix(in oklab, var(--v2-accent) 50%, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-px w-[42%] origin-left -rotate-[38deg]"
        style={{
          background: "linear-gradient(90deg, var(--v2-accent), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-px w-[42%] origin-left rotate-[25deg]"
        style={{
          background: "linear-gradient(90deg, var(--v2-accent), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-px w-[42%] origin-left rotate-[145deg]"
        style={{
          background: "linear-gradient(90deg, var(--v2-accent), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-px w-[30%] origin-left rotate-[210deg]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,.5), transparent)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute top-[24%] left-[83%] h-2.5 w-2.5 rounded-full"
        style={{
          background: "var(--v2-accent)",
          boxShadow:
            "0 0 0 6px color-mix(in oklab, var(--v2-accent) 22%, transparent)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute top-[68%] left-[87%] h-2 w-2 rounded-full bg-white"
      />
      <span
        aria-hidden="true"
        className="absolute top-[72%] left-[14%] h-2.5 w-2.5 rounded-full"
        style={{
          background: "var(--v2-accent)",
          boxShadow:
            "0 0 0 6px color-mix(in oklab, var(--v2-accent) 22%, transparent)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute top-[38%] left-[24%] h-1.5 w-1.5 rounded-full bg-white/70"
      />
      <span
        aria-hidden="true"
        className="absolute top-[12%] left-[60%] h-1.5 w-1.5 rounded-full bg-white/50"
      />
      <div
        className="absolute top-1/2 left-1/2 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[20px]"
        style={{
          background: "var(--v2-accent)",
          boxShadow:
            "0 0 60px color-mix(in oklab, var(--v2-accent) 60%, transparent)",
        }}
      >
        <LogoMark variant="light" size={36} className="[&>rect]:hidden" />
      </div>
      <span className="absolute top-[18%] left-[62%] rounded-lg border border-white/12 bg-[#0E1A31]/80 px-3 py-2 font-[family-name:var(--font-v2-mono)] text-xs text-white backdrop-blur-[6px]">
        {t("orbitPayments")}
      </span>
      <span className="absolute top-[70%] left-[66%] rounded-lg border border-white/12 bg-[#0E1A31]/80 px-3 py-2 font-[family-name:var(--font-v2-mono)] text-xs text-white backdrop-blur-[6px]">
        {t("orbitLedger")}
      </span>
      <span className="absolute top-[30%] left-[8%] rounded-lg border border-white/12 bg-[#0E1A31]/80 px-3 py-2 font-[family-name:var(--font-v2-mono)] text-xs text-white backdrop-blur-[6px]">
        {t("orbitRails")}
      </span>
    </div>
  );
}
