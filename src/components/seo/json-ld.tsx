import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/site";

interface JsonLdProps {
  locale: string;
}

export async function JsonLd({ locale }: JsonLdProps) {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const seo = await getTranslations({ locale, namespace: "seo" });

  const serviceTypes = seo.raw("serviceTypes") as string[];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: t("description"),
    url: locale === "fr" ? `${SITE.url}/fr` : SITE.url,
    email: SITE.email,
    slogan: t("tagline"),
    inLanguage: locale === "fr" ? "fr" : "en",
    areaServed: {
      "@type": "Continent",
      name: "Africa",
    },
    serviceType: serviceTypes,
    sameAs: [SITE.social.linkedin, SITE.social.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
