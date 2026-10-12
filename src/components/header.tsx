"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { copy, type Locale } from "@/lib/site";
export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const ids = ["about", "products", "technology", "contact"];
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  const languageUrl = (lang: Locale) =>
    path.replace(/^\/(de|en)(?=\/|$)/, `/${lang}`);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          href={`/${locale}`}
          aria-label="Lippekern Technologies"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>
        <nav
          className="desktop-nav"
          aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}
        >
          {t.nav.slice(0, 3).map((name, i) => (
            <Link key={name} href={`/${locale}#${ids[i]}`}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div
            className="language-switch"
            aria-label={locale === "de" ? "Sprache wählen" : "Choose language"}
          >
            {(["de", "en"] as const).map((lang) => (
              <Link
                key={lang}
                href={languageUrl(lang)}
                hrefLang={lang}
                lang={lang}
                aria-current={locale === lang ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {lang.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}#contact`} className="button header-cta">
            {t.contact}
            <ArrowUpRight size={16} />
          </Link>
          <button
            ref={button}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label={locale === "de" ? "Mobile Navigation" : "Mobile navigation"}
      >
        {t.nav.map((name, i) => (
          <Link
            key={name}
            href={`/${locale}#${ids[i]}`}
            onClick={() => setOpen(false)}
          >
            {name}
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
