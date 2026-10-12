"use client";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useRef, useState } from "react";
import { copy, type Locale } from "@/lib/site";
import { contactSchema } from "@/lib/contact";
export function ContactForm({
  locale,
  available,
}: {
  locale: Locale;
  available: boolean;
}) {
  const t = copy[locale];
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "invalid"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const summary = useRef<HTMLDivElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const input = {
      ...Object.fromEntries(data),
      privacy: data.get("privacy") === "on",
      locale,
    };
    const parsed = contactSchema.safeParse(input);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues)
        next[String(issue.path[0])] =
          locale === "de"
            ? "Bitte prüfen Sie Ihre Eingabe."
            : "Please check your entry.";
      setErrors(next);
      setStatus("invalid");
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <p className="form-required">{t.required}</p>
      {!available && <p className="form-notice">{t.unavailable}</p>}
      <div
        ref={summary}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={`form-status ${status}`}
      >
        {status === "success" && (
          <>
            <CheckCircle2 size={20} />
            {t.success}
          </>
        )}
        {status === "error" && t.error}
        {status === "invalid" && (
          <>
            <p>{t.invalid}</p>
            <ul>
              {Object.keys(errors).map((key) => (
                <li key={key}>
                  <a href={`#field-${key}`}>
                    {
                      (
                        {
                          name: t.name,
                          email: t.email,
                          company: t.company,
                          message: t.message,
                          privacy: t.privacyLink,
                        } as Record<string, string>
                      )[key]
                    }
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="form-row">
        {(["name", "email"] as const).map((key) => (
          <div className="field" key={key}>
            <label htmlFor={`field-${key}`}>{t[key]} *</label>
            <input
              id={`field-${key}`}
              name={key}
              type={key === "email" ? "email" : "text"}
              autoComplete={key}
              required
              maxLength={key === "email" ? 254 : 100}
              placeholder={t[`${key}Placeholder`]}
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `error-${key}` : undefined}
            />
            {errors[key] && (
              <small id={`error-${key}`} className="field-error">
                {errors[key]}
              </small>
            )}
          </div>
        ))}
      </div>
      <div className="field">
        <label htmlFor="field-company">
          {t.company} <span>({t.optional})</span>
        </label>
        <input
          id="field-company"
          name="company"
          autoComplete="organization"
          maxLength={150}
          placeholder={t.companyPlaceholder}
        />
      </div>
      <div className="field">
        <label htmlFor="field-message">{t.message} *</label>
        <textarea
          id="field-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
          placeholder={t.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
        />
        {errors.message && (
          <small id="error-message" className="field-error">
            {locale === "de"
              ? "Bitte geben Sie eine Nachricht mit 10 bis 5.000 Zeichen ein."
              : "Please enter a message of 10–5,000 characters."}
          </small>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="privacy-check">
        <input
          id="field-privacy"
          name="privacy"
          type="checkbox"
          required
          aria-invalid={!!errors.privacy}
          aria-describedby={errors.privacy ? "error-privacy" : undefined}
        />
        <span>
          {t.privacyBefore}
          <Link href={`/${locale}/datenschutz`}>{t.privacyLink}</Link>
          {t.privacyAfter} *
        </span>
      </label>
      {errors.privacy && (
        <small className="field-error" id="error-privacy">
          {errors.privacy}
        </small>
      )}
      <button
        className="button"
        type="submit"
        disabled={!available || status === "sending"}
      >
        {status === "sending" ? t.sending : t.send}
        {status === "sending" ? (
          <LoaderCircle className="spin" size={18} />
        ) : (
          <ArrowUpRight size={18} />
        )}
      </button>
    </form>
  );
}
