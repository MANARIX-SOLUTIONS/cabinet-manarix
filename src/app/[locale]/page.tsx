import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { V2Hero } from "@/components/v2/hero";
import { V2RailsMarquee } from "@/components/v2/rails-marquee";
import { V2About } from "@/components/v2/about";
import { V2Services } from "@/components/v2/services";
import { V2Method } from "@/components/v2/method";
import { V2Projects } from "@/components/v2/projects";
import { V2Domains } from "@/components/v2/domains";
import { V2Technologies } from "@/components/v2/technologies";
import { V2Cta } from "@/components/v2/cta";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2.meta" });

  return {
    title: { absolute: t("title") },
    description: t("description"),
  };
}

export default async function V2Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content">
      <V2Hero />
      <V2RailsMarquee />
      <V2About />
      <V2Services />
      <V2Method />
      <V2Projects />
      <V2Domains />
      <V2Technologies />
      <V2Cta />
    </main>
  );
}
