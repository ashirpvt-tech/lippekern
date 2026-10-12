"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const en = usePathname().startsWith("/en");
  return (
    <main id="main" className="not-found">
      <p>404</p>
      <h1>{en ? "A new direction?" : "Eine neue Richtung?"}</h1>
      <p>
        {en
          ? "This page could not be found."
          : "Diese Seite konnten wir nicht finden."}
      </p>
      <Link className="button" href={en ? "/en" : "/de"}>
        {en ? "Back to home" : "Zur Startseite"}
      </Link>
    </main>
  );
}
