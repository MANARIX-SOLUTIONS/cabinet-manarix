import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border/60 px-4 py-6">
        <Container>
          <Link
            href="/"
            className="font-heading text-lg font-bold text-text-primary"
            aria-label={SITE.name}
          >
            {SITE.name}
          </Link>
        </Container>
      </header>

      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-4 py-24"
      >
        <Container className="max-w-lg text-center">
          <p className="font-heading text-7xl font-bold tracking-tight text-secondary/20">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text-primary">
            {t("title")}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            {t("description")}
          </p>
          <Link
            href="/"
            className={cn(
              "mt-8 inline-flex items-center justify-center rounded-2xl",
              "bg-secondary px-7 py-3.5 text-sm font-semibold text-white",
              "shadow-subtle transition-all duration-300 hover:bg-[#1d4ed8]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-secondary/40 focus-visible:ring-offset-2",
            )}
          >
            {t("backHome")}
          </Link>
        </Container>
      </main>
    </div>
  );
}
