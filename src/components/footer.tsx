import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { copy, site, type Locale } from "@/lib/site";
export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href={`/${locale}`} aria-label="Lippekern Technologies">
              <Logo />
            </Link>
            <p>{t.footerText}</p>
          </div>
          <div>
            <h3>{t.footerCompany}</h3>
            <Link href={`/${locale}#about`}>{t.nav[0]}</Link>
            <Link href={`/${locale}#technology`}>{t.nav[2]}</Link>
            <Link href={`/${locale}#contact`}>{t.nav[3]}</Link>
          </div>
          <div>
            <h3>{t.nav[1]}</h3>
            <a href={site.productUrl} target="_blank" rel="noopener noreferrer">
              Jobwelt <ArrowUpRight size={14} />
            </a>
            <span>
              {locale === "de"
                ? "Weitere Produkte folgen"
                : "More products to come"}
            </span>
          </div>
          <div>
            <h3>{t.footerMore}</h3>
            <Link href={`/${locale}/impressum`}>{t.imprint}</Link>
            <Link href={`/${locale}/datenschutz`}>{t.privacy}</Link>
            {site.linkedIn ? (
              <a href={site.linkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            ) : (
              <span>{t.linkedinPending}</span>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Lippekern Technologies</span>
          <span>
            {t.rights}
            <span className="footer-small-mark">✳</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
