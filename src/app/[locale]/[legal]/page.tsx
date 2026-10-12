import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { copy, isLocale } from "@/lib/site";
import { legalContent, legalFields } from "@/lib/legal";
type Props = { params: Promise<{ locale: string; legal: string }> };
export function generateStaticParams() {
  return ["de", "en"].flatMap((locale) =>
    ["impressum", "datenschutz"].map((legal) => ({ locale, legal })),
  );
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, legal } = await params;
  if (!isLocale(locale) || (legal !== "impressum" && legal !== "datenschutz"))
    notFound();
  return {
    title: legal === "impressum" ? copy[locale].imprint : copy[locale].privacy,
    robots: { index: false, follow: true },
    alternates: {
      canonical: `/${locale}/${legal}`,
      languages: { de: `/de/${legal}`, en: `/en/${legal}` },
    },
    openGraph: {
      url: `/${locale}/${legal}`,
      title:
        legal === "impressum" ? copy[locale].imprint : copy[locale].privacy,
    },
  };
}
export default async function LegalPage({ params }: Props) {
  const { locale, legal } = await params;
  if (!isLocale(locale) || (legal !== "impressum" && legal !== "datenschutz"))
    notFound();
  const t = copy[locale];
  const content = legalContent(locale, legal);
  return (
    <main id="main" className="legal">
      <Link className="text-link" href={`/${locale}`}>
        <ArrowLeft size={16} />
        {t.back}
      </Link>
      <h1>{legal === "impressum" ? t.imprint : t.privacy}</h1>
      <p className="legal-warning">{t.legalWarning}</p>
      <p>{content.intro}</p>
      {legal === "impressum" && (
        <dl>
          {legalFields(locale).map(([label, value]) => (
            <Fragment key={label}>
              <dt>{label}</dt>
              <dd className={value.startsWith("[") ? "placeholder" : ""}>
                {value}
              </dd>
            </Fragment>
          ))}
        </dl>
      )}
      {content.sections.map(([title, text]) => (
        <section key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
    </main>
  );
}
