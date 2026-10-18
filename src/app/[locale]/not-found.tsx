import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main
      id="main-content"
      className="flex min-h-[70vh] items-center justify-center bg-[#F5F7FA] px-4 py-24"
    >
      <div className="v2-container max-w-lg text-center">
        <p className="text-7xl font-extrabold tracking-tight text-[color:var(--v2-accent)]/25">
          404
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1426]">
          {t("title")}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#4A5568]">
          {t("description")}
        </p>
        <Link href="/" className="v2-btn-accent mt-8">
          {t("backHome")}
        </Link>
      </div>
    </main>
  );
}
