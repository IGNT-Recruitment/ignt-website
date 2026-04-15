'use client';

import Link from 'next/link';
import { PrimaryButton } from '@/components/brand/PrimaryButton';
import { BrandCard } from '@/components/brand/BrandCard';
import { GradientText } from '@/components/brand/GradientText';

export default function WerkgeversPage() {
  return (
    <main className="bg-bg-primary">
      {/* Hero Section - Pain Point Focused */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-magenta/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Eyebrow */}
            <p className="text-accent-magenta font-semibold uppercase tracking-wide text-sm md:text-base">
              Voor IT-leiders en recruiters
            </p>

            {/* Headline - Pain Point */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2">
              <span className="block text-text-primary">Je weet het:</span>
              <span className="block">
                <GradientText>Deze hires gaan mis</GradientText>
              </span>
            </h1>

            {/* Subheadline - Emotional Connect */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Maanden zoeken. Tientallen CV's. Nul passende kandidaten.
              <span className="block text-text-tertiary mt-2 text-lg">Het klassieke IT-recruitment verhaal.</span>
            </p>

            {/* Primary CTA */}
            <div className="pt-8">
              <Link href="/voor-werkgevers#scan">
                <PrimaryButton className="px-8">
                  Laten we dit veranderen
                </PrimaryButton>
              </Link>
            </div>

            {/* Trust signal */}
            <div className="pt-8 border-t border-border-subtle max-w-2xl mx-auto">
              <p className="text-text-secondary italic text-sm">
                "Eindelijk iemand die snapt wat we nodig hebben. Niet zomaar CV's, maar echt passende talent."
              </p>
              <p className="text-text-tertiary text-xs mt-2">— Timon, IT-Manager bij Proxsys</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points - "Waar het misgaat" Section */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Waar het <GradientText>misgaat</GradientText>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              De klassieke IT-recruitment valkuilen. Ken je ze?
            </p>
          </div>

          {/* Pain Point Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pain 1: Volume */}
            <BrandCard className="group hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">📧</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Volume in plaats van kwaliteit
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  "Verzend veel CV's, dan slaat iets wel aan." Maanden scrollen, uiteindelijk nul matches.
                </p>
              </div>
            </BrandCard>

            {/* Pain 2: Timing */}
            <BrandCard className="group hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">⏳</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Maanden voordat je kan kiezen
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Eerste gesprek pas na 6 weken. Dan is je topkandidaat alweer weg.
                </p>
              </div>
            </BrandCard>

            {/* Pain 3: Misalignment */}
            <BrandCard className="group hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">❌</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  "Perfect op papier, nul in praktijk"
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  CV's zien er mooi uit, maar ze kennen je cultuur en tech stack niet.
                </p>
              </div>
            </BrandCard>

            {/* Pain 4: Cost */}
            <BrandCard className="group hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">💰</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Het kost bloed, zweet en tranen
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Bureaus. LinkedIn Recruiter. Tools. Interne uren. Alles telt op.
                </p>
              </div>
            </BrandCard>
          </div>
        </div>
      </section>

      {/* How IGNT Works - Solutions Section */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hoe <GradientText>IGNT</GradientText> werkt
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Vier principes. Eén resultaat: de juiste kandidaten. Snel.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Principle 1: Context */}
            <BrandCard className="border-l-4 border-l-accent-magenta group hover:border-accent-magenta/75 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">🎯</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Wij kennen je wereld
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Je tech stack. Je team. Je cultuur. Je groeiplannen. We vragen alles wat ertoe doet.
                </p>
                <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                  → Context-driven matching
                </p>
              </div>
            </BrandCard>

            {/* Principle 2: Quality */}
            <BrandCard className="border-l-4 border-l-accent-magenta group hover:border-accent-magenta/75 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">🔎</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  We filteren op kwaliteit
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Niet 50 CV's. 3-5 echt passende kandidaten. Onze AI & experts werken samen.
                </p>
                <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                  → 85% match rate
                </p>
              </div>
            </BrandCard>

            {/* Principle 3: Speed */}
            <BrandCard className="border-l-4 border-l-accent-magenta group hover:border-accent-magenta/75 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Je ziet kandidaten in 48 uur
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Niet in 6 weken. In 48 uur hebben we gematcht, geselecteerd, en preview gegeven.
                </p>
                <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                  → 48h guarantee
                </p>
              </div>
            </BrandCard>

            {/* Principle 4: Partnership */}
            <BrandCard className="border-l-4 border-l-accent-magenta group hover:border-accent-magenta/75 transition-all duration-300">
              <div className="space-y-4">
                <div className="text-4xl">🤝</div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Wij hebben skin in the game
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Dit is wat we doen. Niet één van twintig dingen. Jouw succes is ons succes.
                </p>
                <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                  → Real partnership
                </p>
              </div>
            </BrandCard>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dit is voor jou als...
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Herken jezelf in deze punten? Dan ben je op de juiste plek.
            </p>
          </div>

          {/* Checklist items */}
          <div className="space-y-4">
            {[
              "Je zoekt 2-5+ IT-professionals per kwartaal",
              "Je bent moe van generieke bureaus die spam versturen",
              "Je hebt MSP-specifieke talent nodig (infrastructure, cloud, security)",
              "Timing is kritisch - je hebt kandidaten nu nodig, niet over 2 maanden",
              "Je geeft om culturele fit en langetermijngroei, niet zomaar een CV-match",
              "Je wilt met een echt persoon werken, niet met een algoritme",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 p-4 rounded-lg bg-bg-primary border border-border-subtle">
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>

          {/* If not match */}
          <div className="mt-12 p-6 rounded-lg bg-accent-purple/5 border border-accent-purple/20">
            <p className="text-center text-text-secondary">
              Als dit niet naar jou voelt? Geen probleem. Dit is gespecialiseerd werk. Wij zijn hier voor wie het echt nodig heeft.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dit zeggen anderen
            </h2>
          </div>

          {/* Testimonial 1 - Timon (Primary) */}
          <BrandCard className="border-l-4 border-l-accent-magenta mb-6">
            <div className="space-y-4">
              <p className="text-lg text-text-secondary italic">
                "Eindelijk iemand die mijn wereld snapt. Niet zomaar CV's in je inbox, maar echt begripvolle matching. IGNT voelt als sparringpartner, niet als leverancier."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-text-primary">Timon</p>
                <p className="text-sm text-text-tertiary">IT-Manager bij Proxsys</p>
              </div>
            </div>
          </BrandCard>

          {/* Testimonial 2 - Christiaan */}
          <BrandCard className="border-l-4 border-l-accent-purple">
            <div className="space-y-4">
              <p className="text-lg text-text-secondary italic">
                "48 uur van beschrijving tot kandidaten? Ik geloofde het niet totdat het gebeurde. IGNT trok beter talent dan onze interne recruiters in maanden konden vinden."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-text-primary">Christiaan</p>
                <p className="text-sm text-text-tertiary">Recruitment Lead bij CloudTech</p>
              </div>
            </div>
          </BrandCard>
        </div>
      </section>

      {/* Case Studies - Brief mention (full cases on /werkwijze) */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cases die werken
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Echte bedrijven, echte resultaten. Van pijn naar partnership.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Case 1: Cloud Transformation */}
            <BrandCard className="hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Case: Cloud-transformatie sprint
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  "Urgente behoefte aan cloud architects. Vonden 3 kandidaten in 48 uur. 2 van hen zijn nu part van ons team."
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                    2 matches → 2 hires → €150k+ ARR secured
                  </p>
                </div>
              </div>
            </BrandCard>

            {/* Case 2: Support Expansion */}
            <BrandCard className="hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Case: Support team verdubbeling
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  "5 support engineers nodig in 3 maanden. IGNT vond 4 passende kandidaten waarvan 3 nog steeds werken."
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                    3 hires → Team verdubbelscaling → Klantentevredenheid +42%
                  </p>
                </div>
              </div>
            </BrandCard>

            {/* Case 3: Sales Engineering */}
            <BrandCard className="hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Case: Sales engineering ramp-up
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  "Eerste SE in 2 weken. Volgde nog twee meer. Zij deden €500k+ deal closed this quarter."
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                    3 talent → €500k+ pipeline → Enterprise growth unlocked
                  </p>
                </div>
              </div>
            </BrandCard>

            {/* Case 4: Management Layer */}
            <BrandCard className="hover:border-accent-magenta/50 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Case: Management scaling
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  "Senior tech lead die leader kon worden. IGNT vond iemand met exact die combinatie."
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold uppercase tracking-wide">
                    1 hire → 2 layers led → Culture transformation
                  </p>
                </div>
              </div>
            </BrandCard>
          </div>

          {/* See more CTA */}
          <div className="text-center mt-12">
            <p className="text-text-tertiary mb-4">
              Meer cases? Check onze <Link href="/werkwijze" className="text-accent-magenta hover:text-accent-purple transition-colors">
                werkwijze-pagina
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Detailed Workflow */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hoe het werkt
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Van rol omschrijven tot kandidaten. Stap voor stap.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                number: '01',
                duration: '10 min',
                title: 'Beschrijf je rol',
                description: 'Vertel ons wat je nodig hebt. Tech stack, team, cultuur, waar je naar zoekt.',
                details: [
                  'Niet zomaar "Java developer"',
                  'Wat bouwt je team?',
                  'Wie is de team lead?',
                  'Wat maakt iemand succesvol?',
                ],
              },
              {
                number: '02',
                duration: '24h',
                title: 'Wij selecteren',
                description: 'Onze AI & experts zoeken de beste kandidaten uit ons netwerk.',
                details: [
                  'Niet: "verzend veel CVs"',
                  'Wel: "filter op kwaliteit"',
                  'Tech match + cultural match',
                  'Veel harder filteren dan je denkt',
                ],
              },
              {
                number: '03',
                duration: '48h',
                title: 'Preview kandidaten',
                description: 'Je ziet kandidaat profielen met matching scores. Je weet precies waarom we ze voorstellen.',
                details: [
                  'Shortlist van 3-5 kandidaten',
                  'Score per candidate per requirement',
                  'Notes waarom zij passen',
                  'Direct inzicht in experience level',
                ],
              },
              {
                number: '04',
                duration: 'Meteen',
                title: 'Direct contact',
                description: 'Warme introductie met kandidaten die echt passen. Geen "cold CVs".',
                details: [
                  'Wij maken de intro',
                  'Kandidaten zijn geïnteresseerd',
                  'Direct meeting setup',
                  'Wij ondersteunen het proces',
                ],
              },
            ].map((step) => (
              <BrandCard key={step.number} className="border-l-4 border-l-accent-purple">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-magenta flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                      <span className="text-xs font-medium text-accent-purple px-2 py-1 rounded bg-accent-purple/10">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-text-tertiary text-sm flex items-start gap-2">
                          <span className="text-accent-purple flex-shrink-0 mt-0.5">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BrandCard>
            ))}
          </div>

          {/* Timeline */}
          <div className="text-center mt-12 p-8 rounded-lg bg-bg-secondary border border-border-subtle">
            <p className="text-text-secondary mb-4">
              <span className="font-semibold text-text-primary">Total time:</span> Rol omschrijven tot candidate previews: <span className="font-bold text-accent-magenta">48 uur</span>
            </p>
            <p className="text-text-tertiary text-sm">
              Normaal: 4-6 weken. Hier: 48 uur tot kandidaten.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden" id="scan">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Klaar?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            10 minuten beschrijving. 48 uur tot kandidaten. Geen verplichtingen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/for-employers-scan">
              <PrimaryButton className="px-8">
                Start je recruitment scan
              </PrimaryButton>
            </Link>
            <p className="text-text-tertiary text-sm">
              of bel <a href="tel:+31619942283" className="text-accent-purple hover:text-accent-magenta transition-colors">
                06 1994 2283
              </a>
            </p>
          </div>

          {/* Trust final */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="text-lg">🔐</span>
              <span>100% privé</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="text-lg">✓</span>
              <span>Geen kosten scan</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="text-lg">⚡</span>
              <span>48h resultaat</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
