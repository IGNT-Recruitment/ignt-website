export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-text-primary">
        Privacyverklaring
      </h1>
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            1. Inleiding
          </h2>
          <p>
            IGNT (Ignite) respecteert uw privacy. Deze privacyverklaring beschrijft hoe we persoonsgegevens verzamelen, gebruiken en beschermen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            2. Gegevensverzameling
          </h2>
          <p>
            We verzamelen alleen de gegevens die u vrijwillig indient via onze formulieren: naam, e-mail, telefoonnummer en CV (optioneel).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            3. Gegevensgebruik
          </h2>
          <p>
            Uw gegevens worden gebruikt om u in contact te brengen met relevante vacatures of kandidaten, en om onze diensten te verbeteren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            4. Gegevensbeveiliging
          </h2>
          <p>
            We gebruiken Supabase met versleuteling en RLS (Row Level Security) om uw gegevens te beschermen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            5. Uw rechten
          </h2>
          <p>
            U hebt het recht om uw gegevens in te zien, aan te passen of te laten verwijderen. Neem hiervoor contact op met us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            6. Contact
          </h2>
          <p>
            Vragen over privacy? Neem contact op met Ramon van Rossen:
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              Email:{' '}
              <a
                href="mailto:ramon@ignt.nl"
                className="text-accent-purple hover:text-accent-magenta"
              >
                ramon@ignt.nl
              </a>
            </li>
            <li>
              Telefoon:{' '}
              <a
                href="tel:+31619942283"
                className="text-accent-purple hover:text-accent-magenta"
              >
                06 1994 2283
              </a>
            </li>
          </ul>
        </section>

        <section className="pt-4 border-t border-purple-400/10">
          <p className="text-sm text-text-tertiary">
            Laatst bijgewerkt: 2026
          </p>
        </section>
      </div>
    </div>
  );
}
