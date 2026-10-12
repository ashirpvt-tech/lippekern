import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/manrope";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { copy, isLocale, site } from "@/lib/site";
export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const title =
    locale === "de"
      ? "Lippekern Technologies – Digitale Produkte & Innovation"
      : "Lippekern Technologies – Digital Products & Innovation";
  const description =
    locale === "de"
      ? "Technologie im Kern. Lippekern Technologies aus Lippstadt entwickelt digitale Produkte, KI-Anwendungen und Softwareplattformen. Entdecken Sie Jobwelt."
      : "Technology at the core. Lippekern Technologies in Lippstadt develops digital products, AI applications and software platforms. Discover Jobwelt.";
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: "%s | Lippekern Technologies" },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { de: "/de", en: "/en", "x-default": "/de" },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: site.name,
      locale: locale === "de" ? "de_DE" : "en_GB",
      type: "website",
      images: [
        {
          url:
            locale === "de"
              ? "/brand/social-card.png"
              : "/brand/social-card-en.png",
          width: 1200,
          height: 630,
          alt: "Lippekern Technologies",
        },
      ],
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/icon.svg" },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
        <a className="skip-link" href="#main">
          {copy[locale].skip}
        </a>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
