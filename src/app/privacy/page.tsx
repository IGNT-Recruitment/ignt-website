export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-text-primary">
        Privacyverklaring
      </h1>
      <div className="space-y-6 text-text-secondary">
        <h2 className="text-2xl font-semibold text-text-primary">1. Inleiding</h2>
        <p>
          IGNT (Ignite) respecteert uw privacy. Deze privacyverklaring beschrijft
          hoe we persoonsgegevens verzamelen, gebruiken en beschermen.
        </p>

        <h2 className="text-2xl font-semibold text-text-primary">2. Gegevensverzameling</h2>
        <p>
          We verzamelen alleen de gegevens die u vrijwillig indient via onze
          formulieren: naam, e-mail, telefoonnummer en CV (optioneel).
        </p>

        <h2 className="text-2xl font-semibold text-text-primary">3. Gegevensgebruik</h2>
        <p>
          Uw gegevens worden gebruikt om u in contact te brengen met relevante
          vacatures of kandidaten, en om onze diensten te verbeteren.
        </p>

        <h2 className="text-2xl font-semibold text-text-primary">4. Gegevensbeveiliging</h2>
        <p>
          We gebruiken Supabase met versleuteling en RLS (Row Level Security)
          om uw gegevens te beschermen.
        </p>

        <h2 className="text-2xl font-semibold text-text-primary">5. Contact</h2>
        <p>
          Vragen over privacy? Neem contact op met Ramon van Rossen:
          ramon@ignt.nl
        </p>
      </div>
    </div>
  );
}
