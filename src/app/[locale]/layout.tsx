import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { V2Footer } from "@/components/v2/footer";
import { V2Navbar } from "@/components/v2/navbar";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-v2-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-v2-mono",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "v2.meta" });

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t("title"),
      template: `%s | ${SITE.name}`,
    },
    description: t("description"),
    alternates: {
      canonical: locale === "fr" ? SITE.url : `${SITE.url}/en`,
      languages: {
        fr: SITE.url,
        en: `${SITE.url}/en`,
        "x-default": SITE.url,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: SITE.name,
      url: locale === "fr" ? SITE.url : `${SITE.url}/en`,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.name,
      description: t("description"),
    },
    manifest: "/manifest.json",
  };
}

export const viewport: Viewport = {
  themeColor: "#0B1426",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("common");

  return (
    <html
      lang={locale}
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="v2-root min-h-full" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <JsonLd locale={locale} />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#2F6BFF] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
          >
            {t("skipToContent")}
          </a>
          <V2Navbar />
          {children}
          <V2Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
