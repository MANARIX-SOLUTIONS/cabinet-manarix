import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
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
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t("title"),
      template: `%s | ${SITE.name}`,
    },
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? SITE.url : `${SITE.url}/fr`,
      languages: {
        en: SITE.url,
        fr: `${SITE.url}/fr`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: SITE.name,
      url: locale === "en" ? SITE.url : `${SITE.url}/fr`,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.name,
      description: t("tagline"),
    },
    manifest: "/manifest.json",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#060b18" },
  ],
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
      className={`${inter.variable} ${interTight.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background font-sans text-text-primary transition-colors duration-300"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
            storageKey="manarix-theme"
          >
            <JsonLd locale={locale} />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
            >
              {t("skipToContent")}
            </a>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
