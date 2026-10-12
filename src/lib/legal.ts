import { site, type Locale } from "./site";
export function legalContent(
  locale: Locale,
  kind: "impressum" | "datenschutz",
) {
  const de = locale === "de";
  if (kind === "impressum")
    return {
      intro: de
        ? "Lippekern Technologies ist ein Vorhaben in der Gründungsphase. Die geplante Firmierung lautet Lippekern Technologies UG (haftungsbeschränkt). Eine Eintragung im Handelsregister wird hier nicht behauptet."
        : "Lippekern Technologies is a venture in formation. The intended company name is Lippekern Technologies UG (haftungsbeschränkt). This website does not claim that commercial registration has been completed.",
      sections: de
        ? [
            [
              "Anbieterangaben nach § 5 DDG",
              "Die tatsächlich verantwortliche natürliche oder juristische Person muss vor dem öffentlichen Betrieb dieser Website als Anbieter benannt werden. Die geplante Gesellschaftsbezeichnung allein ersetzt diese Angabe nicht.",
            ],
            [
              "Kontakt",
              "Die bestätigte geschäftliche E-Mail-Adresse und ein geeigneter unmittelbarer Kontaktweg sind vor Veröffentlichung einzutragen. Lippstadt ist die Ortsangabe, keine ladungsfähige Anschrift.",
            ],
            [
              "Register und Umsatzsteuer",
              "Registergericht und Registernummer werden erst nach erfolgter Eintragung ergänzt. Eine Umsatzsteuer-Identifikationsnummer wird nur angegeben, sofern tatsächlich erteilt.",
            ],
            [
              "Inhaltliche Verantwortung",
              "Soweit journalistisch-redaktionelle Inhalte angeboten werden, ist die Verantwortlichkeit nach § 18 Abs. 2 MStV rechtlich zu prüfen und gegebenenfalls zu ergänzen.",
            ],
          ]
        : [
            [
              "Provider information under section 5 DDG",
              "The natural or legal person actually responsible for this website must be identified before public operation. The intended company name alone does not replace this information.",
            ],
            [
              "Contact",
              "Add a confirmed business email address and a suitable direct contact method before publication. Lippstadt describes the location; it is not an address for service.",
            ],
            [
              "Register and VAT",
              "The register court and registration number will be added only after registration. A VAT identification number will be listed only if one has been issued.",
            ],
            [
              "Editorial responsibility",
              "If journalistic or editorial content is provided, review whether a responsible person must be named under section 18(2) MStV.",
            ],
          ],
    };
  return {
    intro: de
      ? "Dieser Entwurf beschreibt die technische Umsetzung dieser Website. Er muss vor Veröffentlichung an den tatsächlichen Betreiber, die eingesetzten Dienstleister und die verbindlichen Löschfristen angepasst werden."
      : "This draft describes the technical implementation of this website. Before publication, it must be adapted to the actual operator, service providers and binding retention periods.",
    sections: de
      ? [
          [
            "1. Verantwortlicher",
            "[ZU ERGÄNZEN: Name bzw. vollständige Firmierung des tatsächlichen Betreibers, ladungsfähige Anschrift und Datenschutz-Kontakt.] Angaben zur geplanten Gesellschaft ersetzen nicht die Benennung des derzeit Verantwortlichen.",
          ],
          [
            "2. Bereitstellung und Hosting",
            "Die Bereitstellung über Vercel ist vorgesehen. Bei Seitenaufrufen können insbesondere IP-Adresse, Zeitpunkt, angeforderte URL sowie Browser- und Geräteinformationen zur Auslieferung und Absicherung verarbeitet werden. Als Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO anhand der tatsächlichen Umsetzung zu prüfen. [ZU ERGÄNZEN: Vertragspartner, Verarbeitungsorte, Speicherdauer der Protokolle, Auftragsverarbeitungsvertrag und gegebenenfalls Drittlandgarantien.]",
          ],
          [
            "3. Kontaktanfragen",
            "Das Formular erhebt Name, E-Mail-Adresse, optional Organisation und Nachricht. Es dient ausschließlich der Bearbeitung Ihrer Anfrage und der weiteren Kommunikation dazu. Je nach Inhalt kommen Art. 6 Abs. 1 lit. b oder lit. f DSGVO als Rechtsgrundlage in Betracht. Die Kenntnisnahme dieser Erklärung ist keine Einwilligung in Werbung. Der Versand ist erst nach Konfiguration aktiv; derzeit werden keine Nachrichten über das Formular entgegengenommen.",
          ],
          [
            "4. Versand und Missbrauchsschutz",
            "Technisch vorbereitet sind Resend für die E-Mail-Zustellung und Upstash Redis für die Begrenzung von Anfragen. Bei aktivierter Zustellung erhält Resend die Formularinhalte und E-Mail-Metadaten. Der Missbrauchsschutz speichert einen aus IP-Adresse und geheimem Wert abgeleiteten Schlüssel mit Zähler für zehn Minuten. Dieser Schlüssel ist pseudonym, nicht anonym. Der Anwendungscode protokolliert keine Nachrichteninhalte. [VOR AKTIVIERUNG ERGÄNZEN: tatsächliche Empfänger, Vertragspartner, Regionen, Auftragsverarbeitungsverträge, Rechtsgrundlagen und etwaige Drittlandübermittlungen.]",
          ],
          [
            "5. Speicherdauer",
            "[ZU ERGÄNZEN: konkrete Löschfristen für Anfragen, Postfächer und Dienstleisterprotokolle.] Anfragen sollen gelöscht werden, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten oder sonstigen rechtlichen Gründe entgegenstehen.",
          ],
          [
            "6. Cookies, Schriftarten und externe Links",
            "Diese Umsetzung setzt keine Analyse- oder Marketing-Cookies und enthält keine Tracking-Dienste. Die Sprache wird über den URL-Pfad gewählt; hierfür werden keine Cookies angelegt. Schriftarten und die Jobwelt-Vorschau werden lokal ausgeliefert. Erst beim Öffnen externer Links verlassen Sie diese Website; dort gelten die Datenschutzhinweise des jeweiligen Anbieters. Die Hosting-Konfiguration ist vor Veröffentlichung gesondert zu prüfen.",
          ],
          [
            "7. Ihre Rechte",
            "Unter den gesetzlichen Voraussetzungen bestehen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO können Sie aus Gründen Ihrer besonderen Situation Widerspruch einlegen. Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren, beispielsweise der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen. [ZU ERGÄNZEN: bestätigter Kontakt zur Ausübung Ihrer Rechte.]",
          ],
          [
            "8. Stand und Änderungen",
            "Entwurfsstand: 12. Oktober 2026. Vor Veröffentlichung sowie bei Änderungen an Diensten, Formularen oder Hosting ist diese Erklärung zu aktualisieren und rechtlich prüfen zu lassen.",
          ],
        ]
      : [
          [
            "1. Controller",
            "[TO COMPLETE: the actual operator’s name or full legal name, address for service and privacy contact.] The intended company name does not identify the current controller.",
          ],
          [
            "2. Hosting and website delivery",
            "Deployment on Vercel is planned. Page requests may involve IP addresses, timestamps, requested URLs, and browser and device information for delivery and security. Review Article 6(1)(f) GDPR as a legal basis against the actual implementation. [TO COMPLETE: contracting entity, processing locations, log retention, data processing agreement and any international transfer safeguards.]",
          ],
          [
            "3. Contact enquiries",
            "The form collects your name, email address, optional organisation and message to handle your enquiry and related communication. Depending on the enquiry, Article 6(1)(b) or (f) GDPR may apply. Acknowledging this notice is not consent to marketing. Delivery is activated only after configuration; the form is currently not accepting messages.",
          ],
          [
            "4. Email delivery and abuse prevention",
            "The code supports Resend for email delivery and Upstash Redis for request limiting. Once configured, Resend receives the form contents and email metadata. Abuse prevention stores a key derived from the IP address and a secret, with a request counter, for ten minutes. This key is pseudonymous, not anonymous. Application code does not log message contents. [COMPLETE BEFORE ACTIVATION: actual recipients, contracting entities, regions, data processing agreements, legal bases and any international transfers.]",
          ],
          [
            "5. Retention",
            "[TO COMPLETE: specific retention periods for enquiries, mailboxes and provider logs.] Enquiries should be deleted when no longer needed unless legal retention obligations or other lawful reasons require further storage.",
          ],
          [
            "6. Cookies, fonts and external links",
            "This implementation uses no analytics or marketing cookies and contains no tracking services. Language selection uses the URL path without cookies. Fonts and the Jobwelt preview are served locally. External sites are contacted only when you open their links, and their own privacy notices apply. Review the hosting configuration separately before publication.",
          ],
          [
            "7. Your rights",
            "Subject to the applicable legal conditions, you have rights of access, rectification, erasure, restriction and data portability. You may object to processing based on Article 6(1)(f) GDPR on grounds relating to your particular situation. You may complain to a supervisory authority, for example the State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia. [TO COMPLETE: confirmed contact for exercising these rights.]",
          ],
          [
            "8. Version and changes",
            "Draft dated 12 October 2026. Update and obtain legal review before publication and whenever service providers, forms or hosting change.",
          ],
        ],
  };
}
export function legalFields(locale: Locale) {
  const de = locale === "de";
  const empty = de ? "[Noch zu ergänzen]" : "[To be completed]";
  return [
    [
      de ? "Verantwortlicher Anbieter" : "Responsible provider",
      site.legal.operator || empty,
    ],
    [
      de ? "Ladungsfähige Anschrift" : "Address for service",
      site.legal.address || empty,
    ],
    [
      de ? "Vertretungsberechtigung" : "Authorised representative",
      site.legal.representative || empty,
    ],
    ["E-Mail", site.email || empty],
    [
      de ? "Registergericht" : "Register court",
      site.legal.registerCourt || empty,
    ],
    [
      de ? "Registernummer" : "Registration number",
      site.legal.registerNumber || empty,
    ],
    [
      de ? "USt-IdNr. (falls erteilt)" : "VAT ID (if issued)",
      site.legal.vatId || empty,
    ],
  ];
}
