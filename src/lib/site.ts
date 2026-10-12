export const site = {
  name: "Lippekern Technologies",
  proposedLegalName: "Lippekern Technologies UG (haftungsbeschränkt)",
  url: "https://lippekern.de",
  productUrl: "https://www.jobwelt.work/",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@lippekern.com",
  linkedIn: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  // Complete and legally review these details before publication.
  legal: {
    operator: "",
    address: "",
    representative: "",
    registerCourt: "",
    registerNumber: "",
    vatId: "",
  },
};
export type Locale = "de" | "en";
export function isLocale(value: string): value is Locale {
  return value === "de" || value === "en";
}
export const copy = {
  de: {
    nav: ["Über uns", "Produkte", "Technologie", "Kontakt"],
    contact: "Kontakt aufnehmen",
    skip: "Zum Inhalt",
    menu: "Menü öffnen",
    close: "Menü schließen",
    eyebrow: "AUS LIPPSTADT. FÜR DAS, WAS KOMMT.",
    hero: ["Gute Ideen.", "Intelligent", "entwickelt."],
    heroText:
      "Wir entwickeln digitale Produkte, die neue Möglichkeiten eröffnen. Mit klarem Blick auf das Wesentliche – und Technologie im Kern.",
    explore: "Unsere Produkte entdecken",
    heroContact: "Ins Gespräch kommen",
    heroNote: "Unabhängig gedacht. Mit Weitblick entwickelt.",
    coreLabel: "INNOVATION BEGINNT IM KERN",
    coreCaption: "Ideen verbinden. Möglichkeiten schaffen.",
    pillars: [
      "Intelligente Produkte",
      "Durchdachte Technologie",
      "Neue Perspektiven",
    ],
    aboutLabel: "01 / DAS IST LIPPEKERN",
    aboutTitle: "Regional verwurzelt.\nOffen für neue Ideen.",
    aboutLead:
      "Wir glauben, dass gute Technologie vor allem eines tun sollte: einen echten Unterschied machen.",
    aboutText:
      "Lippekern Technologies ist ein Technologie-Startup mit Sitz in Lippstadt. Wir verbinden Softwareentwicklung, künstliche Intelligenz und unternehmerisches Denken, um aus Ideen nützliche digitale Produkte zu machen.",
    aboutText2:
      "Wir denken nicht in Branchengrenzen, sondern in Möglichkeiten. Unser Fokus liegt auf praktischen Lösungen, einer soliden technischen Basis und Produkten, die mit ihren Aufgaben wachsen.",
    location: "Lippstadt, Nordrhein-Westfalen",
    locationSub: "Unser Ausgangspunkt. Nicht unsere Grenze.",
    productLabel: "02 / UNSERE PRODUKTE",
    productTitle: "Aus Ideen werden\nneue Möglichkeiten.",
    productIntro:
      "Eigene Produkte. Reale Herausforderungen. Den Anfang macht Jobwelt.",
    live: "LIVE ENTDECKEN",
    productTag: "UNSER ERSTES PRODUKT",
    jobTitle: "Der nächste Schritt\nin der Wissenschaft.",
    jobText:
      "Jobwelt bündelt Karrierechancen an deutschen Hochschulen. Damit die Suche nach der passenden Möglichkeit einfacher wird – von der ersten HiWi-Stelle bis zur Promotion.",
    features: [
      "Promotion & wissenschaftliche Stellen",
      "HiWi-Jobs, Masterarbeiten & Praktika",
      "Suche nach Hochschule und Standort",
      "Interaktive Karte · Deutsch & Englisch",
    ],
    jobCta: "Jobwelt entdecken",
    screenshot: "Originalansicht von jobwelt.work · Oktober 2026",
    future: "Die nächste Idee ist schon im Kern.",
    futureText:
      "Weitere digitale Produkte und neue Perspektiven sind in Planung.",
    futureBadge: "MEHR IN ENTWICKLUNG",
    techLabel: "03 / TECHNOLOGIE & LÖSUNGEN",
    techTitle: "Vielseitig im Denken.\nPräzise in der Umsetzung.",
    techIntro:
      "Unsere technologischen Schwerpunkte – für eigene Produkte und zukünftige Lösungen.",
    capabilities: [
      [
        "KI & intelligente Automatisierung",
        "Intelligente Assistenten und KI-gestützte Workflows, die Routine vereinfachen und Raum für neue Aufgaben schaffen.",
        "INTELLIGENZ MIT NUTZEN",
      ],
      [
        "Softwareentwicklung",
        "Moderne Websites, Webanwendungen und Plattformen. Verständlich gestaltet, solide entwickelt und auf Wachstum vorbereitet.",
        "VON DER IDEE ZUR ANWENDUNG",
      ],
      [
        "Data Engineering & Integration",
        "Daten sinnvoll verbinden: mit strukturierten Pipelines, durchdachten Schnittstellen und zugänglichen Informationsplattformen.",
        "VERBINDUNGEN SCHAFFEN",
      ],
      [
        "Cloud & digitale Infrastruktur",
        "Cloudbasierte Systeme und Datenbankarchitekturen als verlässliche Grundlage für skalierbare Anwendungen.",
        "DAS FUNDAMENT FÜR MORGEN",
      ],
      [
        "Digitale Produktinnovation",
        "Aus relevanten Problemen werden konkrete Konzepte – und daraus digitale Produkte, die im Alltag einen Nutzen haben.",
        "FORTSCHRITT BEGINNT MIT EINER FRAGE",
      ],
    ],
    approachLabel: "04 / UNSER ANSATZ",
    approachTitle: "Klarer Prozess.\nRaum für Neues.",
    approachIntro:
      "Von der ersten Frage bis zum nächsten Entwicklungsschritt: Wir verbinden Neugier mit konsequenter Umsetzung.",
    steps: [
      [
        "Verstehen",
        "Wir hören zu, hinterfragen Annahmen und finden heraus, welches Problem es wirklich zu lösen gilt.",
      ],
      [
        "Gestalten",
        "Wir machen Ideen greifbar. Mit klaren Konzepten, durchdachtem Design und dem Blick auf die Menschen, die sie nutzen.",
      ],
      [
        "Entwickeln",
        "Wir entwickeln iterativ, testen früh und setzen auf eine wartbare, belastbare technische Basis.",
      ],
      [
        "Weiterdenken",
        "Wir lernen aus der Nutzung, verbessern gezielt und schaffen die Grundlage für nachhaltiges Wachstum.",
      ],
    ],
    contactLabel: "05 / LASSEN SIE UNS SPRECHEN",
    contactTitle: "Was möchten Sie\nin Bewegung bringen?",
    contactText:
      "Eine Idee, eine Frage oder Interesse an einem Austausch? Wir freuen uns auf Ihre Nachricht.",
    emailPending: "Unsere geschäftliche E-Mail-Adresse wird in Kürze ergänzt.",
    name: "Name",
    email: "E-Mail-Adresse",
    company: "Unternehmen / Organisation",
    optional: "optional",
    message: "Ihre Nachricht",
    namePlaceholder: "Ihr vollständiger Name",
    emailPlaceholder: "name@unternehmen.de",
    companyPlaceholder: "Wo arbeiten oder forschen Sie?",
    messagePlaceholder: "Erzählen Sie uns von Ihrer Idee …",
    privacyBefore: "Ich habe die ",
    privacyLink: "Datenschutzerklärung",
    privacyAfter: " zur Kenntnis genommen.",
    send: "Nachricht senden",
    sending: "Wird gesendet …",
    success: "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
    error:
      "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    invalid: "Bitte prüfen Sie die markierten Felder.",
    unavailable:
      "Das Kontaktformular wird derzeit eingerichtet. Nachrichten können noch nicht übermittelt werden.",
    required: "Pflichtfelder sind mit * markiert.",
    footerText:
      "Intelligente Produkte. Durchdachte Technologie. Aus Lippstadt.",
    footerCompany: "Unternehmen",
    footerMore: "Mehr erfahren",
    imprint: "Impressum",
    privacy: "Datenschutzerklärung",
    linkedinPending: "LinkedIn · bald verfügbar",
    rights: "Mit Technologie im Kern.",
    back: "Zur Startseite",
    legalWarning:
      "Entwurf – Angaben müssen vor Veröffentlichung ergänzt und rechtlich geprüft werden.",
  },
  en: {
    nav: ["About us", "Products", "Technology", "Contact"],
    contact: "Get in touch",
    skip: "Skip to content",
    menu: "Open menu",
    close: "Close menu",
    eyebrow: "ROOTED IN LIPPSTADT. BUILT FOR WHAT’S NEXT.",
    hero: ["Good ideas.", "Intelligently", "engineered."],
    heroText:
      "We build digital products that open up new possibilities. With a clear focus on what matters – and technology at the core.",
    explore: "Explore our products",
    heroContact: "Start a conversation",
    heroNote: "Independent thinking. Long-term vision.",
    coreLabel: "INNOVATION STARTS AT THE CORE",
    coreCaption: "Connecting ideas. Creating possibilities.",
    pillars: [
      "Intelligent products",
      "Thoughtful technology",
      "New perspectives",
    ],
    aboutLabel: "01 / THIS IS LIPPEKERN",
    aboutTitle: "Local roots.\nOpen horizons.",
    aboutLead:
      "We believe good technology should do one thing above all: make a meaningful difference.",
    aboutText:
      "Lippekern Technologies is a technology startup based in Lippstadt, Germany. We bring together software engineering, artificial intelligence and entrepreneurial thinking to turn ideas into useful digital products.",
    aboutText2:
      "We see possibilities beyond industry boundaries. Our focus is on practical solutions, strong technical foundations and products that grow with the challenges they address.",
    location: "Lippstadt, North Rhine-Westphalia",
    locationSub: "Our starting point. Not our limit.",
    productLabel: "02 / OUR PRODUCTS",
    productTitle: "Turning ideas into\nnew possibilities.",
    productIntro: "Our own products. Real challenges. Starting with Jobwelt.",
    live: "EXPLORE LIVE",
    productTag: "OUR FIRST PRODUCT",
    jobTitle: "The next step\nin your academic career.",
    jobText:
      "Jobwelt brings together career opportunities at German universities. Making it easier to find your next step – from your first student assistant role to a doctorate.",
    features: [
      "PhD & research positions",
      "Student jobs, master’s theses & internships",
      "Search by university and location",
      "Interactive map · English & German",
    ],
    jobCta: "Discover Jobwelt",
    screenshot: "Original view of jobwelt.work · October 2026",
    future: "The next idea is already taking shape.",
    futureText:
      "More digital products and new perspectives are on the horizon.",
    futureBadge: "MORE IN DEVELOPMENT",
    techLabel: "03 / TECHNOLOGY & SOLUTIONS",
    techTitle: "Broad in perspective.\nPrecise in execution.",
    techIntro:
      "Our technology focus areas – for our own products and future solutions.",
    capabilities: [
      [
        "AI & intelligent automation",
        "Intelligent assistants and AI-powered workflows that simplify routine tasks and make room for new possibilities.",
        "INTELLIGENCE WITH PURPOSE",
      ],
      [
        "Software development",
        "Modern websites, web applications and platforms. Thoughtfully designed, carefully engineered and ready to grow.",
        "FROM IDEA TO APPLICATION",
      ],
      [
        "Data engineering & integration",
        "Connecting data through structured pipelines, thoughtful APIs and accessible information platforms.",
        "MAKING CONNECTIONS",
      ],
      [
        "Cloud & digital infrastructure",
        "Cloud-based systems and database architectures that provide a reliable foundation for scalable applications.",
        "FOUNDATIONS FOR TOMORROW",
      ],
      [
        "Digital product innovation",
        "Turning meaningful problems into concrete concepts – and concepts into digital products that are useful in everyday life.",
        "PROGRESS STARTS WITH A QUESTION",
      ],
    ],
    approachLabel: "04 / OUR APPROACH",
    approachTitle: "A clear process.\nSpace for new ideas.",
    approachIntro:
      "From the first question to the next iteration: we combine curiosity with purposeful execution.",
    steps: [
      [
        "Discover",
        "We listen, challenge assumptions and identify the problem that really needs solving.",
      ],
      [
        "Design",
        "We make ideas tangible through clear concepts, thoughtful design and a focus on the people who will use them.",
      ],
      [
        "Develop",
        "We build iteratively, test early and create a maintainable, resilient technical foundation.",
      ],
      [
        "Scale",
        "We learn from real use, improve with purpose and lay the groundwork for sustainable growth.",
      ],
    ],
    contactLabel: "05 / LET’S TALK",
    contactTitle: "What would you\nlike to set in motion?",
    contactText:
      "An idea, a question or a conversation worth having? We look forward to hearing from you.",
    emailPending: "Our business email address will be added shortly.",
    name: "Name",
    email: "Email address",
    company: "Company / organisation",
    optional: "optional",
    message: "Your message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "name@company.com",
    companyPlaceholder: "Where do you work or research?",
    messagePlaceholder: "Tell us about your idea …",
    privacyBefore: "I have read the ",
    privacyLink: "privacy notice",
    privacyAfter: ".",
    send: "Send message",
    sending: "Sending …",
    success: "Thank you. Your message was sent successfully.",
    error: "Your message could not be sent. Please try again later.",
    invalid: "Please check the highlighted fields.",
    unavailable:
      "We are setting up this contact form. Messages cannot be sent yet.",
    required: "Required fields are marked with *.",
    footerText: "Intelligent products. Thoughtful technology. From Lippstadt.",
    footerCompany: "Company",
    footerMore: "Learn more",
    imprint: "Legal notice",
    privacy: "Privacy notice",
    linkedinPending: "LinkedIn · coming soon",
    rights: "Technology at the core.",
    back: "Back to home",
    legalWarning:
      "Draft – complete and obtain legal review before publication.",
  },
} as const;
