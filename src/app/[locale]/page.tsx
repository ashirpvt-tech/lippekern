import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Cloud,
  Cpu,
  Database,
  Lightbulb,
  MapPin,
  Sparkles,
} from "lucide-react";
import { copy, isLocale, site } from "@/lib/site";
import { notFound } from "next/navigation";
import { HeroArt } from "@/components/hero-art";
import { Reveal } from "@/components/reveal";
import { CoreMark } from "@/components/logo";
import { ContactForm } from "@/components/contact-form";
import { contactReady } from "@/lib/contact";
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const icons = [Cpu, Braces, Database, Cloud, Lightbulb];
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: `${site.url}/brand/logo-dark.svg`,
            location: { "@type": "Place", name: "Lippstadt, Germany" },
            description:
              locale === "de"
                ? "Technologie-Startup in Lippstadt."
                : "Technology startup based in Lippstadt, Germany.",
          }),
        }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {t.eyebrow}
            </p>
            <h1>
              {t.hero[0]}
              <br />
              {t.hero[1]}
              <br />
              <span>{t.hero[2]}</span>
            </h1>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-buttons">
              <a className="button" href="#products">
                {t.explore}
                <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#contact">
                {t.heroContact}
                <ArrowRight size={17} />
              </a>
            </div>
            <p className="hero-note">
              <span />
              {t.heroNote}
            </p>
          </div>
          <HeroArt label={t.coreLabel} caption={t.coreCaption} />
        </div>
        <div className="container hero-baseline">
          <span>LIPPEKERN TECHNOLOGIES</span>
          <a href="#about" aria-label={t.nav[0]}>
            <ArrowDown size={18} />
          </a>
          <span>51°40′ N &nbsp; 8°20′ E</span>
        </div>
      </section>
      <div className="pillars">
        <div className="container">
          {t.pillars.map((p, i) => (
            <span key={p}>
              {i === 0 ? <Cpu /> : i === 1 ? <Braces /> : <Sparkles />}
              {p}
            </span>
          ))}
          <span className="pillar-origin">
            {locale === "de"
              ? "ENTWICKELT MIT WEITBLICK"
              : "ENGINEERED WITH VISION"}
          </span>
        </div>
      </div>
      <section id="about" className="section about">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{t.aboutLabel}</p>
            <div className="about-grid">
              <div>
                <h2>{t.aboutTitle}</h2>
                <div className="location-card">
                  <div className="location-symbol">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <strong>{t.location}</strong>
                    <p>{t.locationSub}</p>
                  </div>
                </div>
              </div>
              <div className="about-body">
                <p className="lead">{t.aboutLead}</p>
                <p>{t.aboutText}</p>
                <p>{t.aboutText2}</p>
                <div className="about-signature">
                  <CoreMark />
                  <span>
                    {locale === "de"
                      ? "Technologie im Kern."
                      : "Technology at the core."}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="products" className="section products">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t.productLabel}</p>
                <h2>{t.productTitle}</h2>
              </div>
              <p>{t.productIntro}</p>
            </div>
          </Reveal>
          <Reveal className="product-card">
            <div className="product-copy">
              <div className="product-top">
                <span className="jobwelt-wordmark">
                  <Image
                    src="/images/jobwelt-icon.svg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  job<span>welt</span>
                </span>
                <span className="product-badge">
                  <span className="status-dot" />
                  {t.live}
                </span>
              </div>
              <p className="eyebrow product-eyebrow">{t.productTag}</p>
              <h3>{t.jobTitle}</h3>
              <p>{t.jobText}</p>
              <ul className="feature-list">
                {t.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="button"
                href={site.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.jobCta}
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="product-visual">
              <div className="browser-window">
                <div className="browser-bar">
                  <span className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>jobwelt.work</span>
                  <ArrowUpRight size={13} />
                </div>
                <a
                  href={site.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.jobCta}
                >
                  <Image
                    src="/images/jobwelt-preview.webp"
                    alt={
                      locale === "de"
                        ? "Originalansicht der Jobwelt-Website mit Hochschuljobs und interaktiver Deutschlandkarte"
                        : "Original Jobwelt website showing university opportunities and an interactive map of Germany"
                    }
                    width={1440}
                    height={1050}
                    sizes="(max-width: 800px) 90vw, 55vw"
                  />
                </a>
              </div>
              <p className="screenshot-caption">{t.screenshot}</p>
              <div className="product-visual-caption">
                <span>
                  {locale === "de" ? (
                    <>
                      CHANCEN IN DER WISSENSCHAFT.
                      <br />
                      VERNETZT.
                    </>
                  ) : (
                    <>
                      ACADEMIC OPPORTUNITIES,
                      <br />
                      CONNECTED.
                    </>
                  )}
                </span>
                <ArrowUpRight size={31} />
              </div>
            </div>
          </Reveal>
          <Reveal className="future-product">
            <div className="future-icon">
              <Sparkles size={24} />
            </div>
            <div>
              <h3>{t.future}</h3>
              <p>{t.futureText}</p>
            </div>
            <span className="eyebrow">
              {t.futureBadge}
              <span className="tiny-dots">•••</span>
            </span>
          </Reveal>
        </div>
      </section>
      <section id="technology" className="section technology">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t.techLabel}</p>
                <h2>{t.techTitle}</h2>
              </div>
              <p>{t.techIntro}</p>
            </div>
          </Reveal>
          <div className="capabilities">
            {t.capabilities.map(([title, description, tag], i) => {
              const Icon = icons[i];
              return (
                <Reveal key={title} className={`capability capability-${i}`}>
                  <div className="capability-top">
                    <Icon size={27} strokeWidth={1.4} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="capability-tag">{tag}</span>
                </Reveal>
              );
            })}
            <Reveal className="capability capability-vision">
              <CoreMark />
              <p>
                {locale === "de"
                  ? "Technologie verändert sich. Unsere Neugier bleibt."
                  : "Technology evolves. Our curiosity stays."}
              </p>
              <span>LIPPEKERN TECHNOLOGIES</span>
            </Reveal>
          </div>
        </div>
      </section>
      <section id="approach" className="section approach">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t.approachLabel}</p>
                <h2>{t.approachTitle}</h2>
              </div>
              <p>{t.approachIntro}</p>
            </div>
          </Reveal>
          <div className="steps">
            {t.steps.map(([title, description], i) => (
              <Reveal key={title} className="step">
                <div className="step-track">
                  <span>0{i + 1}</span>
                  <ArrowRight size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <Reveal>
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p className="contact-description">{t.contactText}</p>
            <div className="contact-details">
              <p>
                <MapPin size={19} />
                {locale === "de"
                  ? "Lippstadt, Deutschland"
                  : "Lippstadt, Germany"}
              </p>
              {site.email ? (
                <a className="text-link" href={`mailto:${site.email}`}>
                  {site.email}
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <p className="email-pending">{t.emailPending}</p>
              )}
            </div>
            <CoreMark className="contact-core" />
          </Reveal>
          <Reveal>
            <ContactForm locale={locale} available={contactReady()} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
