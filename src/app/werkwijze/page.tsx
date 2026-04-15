'use client';

import Link from 'next/link';
import { PrimaryButton } from '@/components/brand/PrimaryButton';
import { BrandCard } from '@/components/brand/BrandCard';
import { GradientText } from '@/components/brand/GradientText';

export default function WerkwijzePage() {
  return (
    <main className="bg-bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-magenta/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <p className="text-accent-magenta font-semibold uppercase tracking-wide text-sm md:text-base">
              Werkwijze
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2">
              Hoe IGNT werkt
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Transparant. Snel. Effectief. Twee paden, één filosofie: kwaliteit boven volume.
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Path */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="flex items-center justify-center gap-3 mb-4">
                <span>🔍</span>
                <span>Voor kandidaten</span>
              </span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Career Fit Scan. Van inschrijving tot eerste match in 48 uur.
            </p>
          </div>

          {/* Candidate Steps */}
          <div className="space-y-6 max-w-3xl mx-auto mb-16">
            {[
              {
                number: '01',
                duration: '5 min',
                title: 'Career Fit Scan',
                description: 'Je beantwoordt 7 vragen over jezelf. Wat zoek je? Waar ben je goed in? Waar wil je groeien?',
                details: [
                  'Voelt als gesprek, niet als formulier',
                  'Vraag alles wat ertoe doet',
                  'Je antwoorden blijven privé',
                ],
              },
              {
                number: '02',
                duration: '24h',
                title: 'Wij analyseren',
                description: 'Onze AI & experts matchen jou met rollen in ons netwerk. Niet zomaar vacatures. Passen-die-echt.',
                details: [
                  'AI analyseert jouw profile',
                  'Experts checken cultural fit',
                  'We filteren hard op kwaliteit',
                ],
              },
              {
                number: '03',
                duration: '48h',
                title: 'Je ontvangt matches',
                description: '3-5 perfect passende vacatures rechtstreeks in je inbox. Niet meer, niet minder.',
                details: [
                  'Elke role heeft matching score',
                  'Je ziet waarom we ze voorstellen',
                  'Direct contact info meegestuurd',
                ],
              },
              {
                number: '04',
                duration: 'Jij bepaalt',
                title: 'Jij beslist',
                description: 'Klik je aan? We brengen je in warm contact. Niet? Nul druk. Geen vervolgmail.',
                details: [
                  'Jij bepaalt wie je ontmoet',
                  'Directe intro met recruiter/hiring lead',
                  'Wij volgen niet. Jij stuurt aan.',
                ],
              },
            ].map((step) => (
              <BrandCard key={step.number} className="border-l-4 border-l-accent-magenta">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                      <span className="text-xs font-medium text-accent-magenta px-2 py-1 rounded bg-accent-magenta/10">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-text-tertiary text-sm flex items-start gap-2">
                          <span className="text-accent-magenta flex-shrink-0 mt-0.5">→</span>
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
          <div className="text-center p-8 rounded-lg bg-bg-primary border border-border-subtle">
            <p className="text-text-secondary mb-4">
              <span className="font-semibold text-text-primary">Total time:</span> Inschrijving tot eerste matches: <span className="font-bold text-accent-magenta">48 uur</span>
            </p>
            <p className="text-text-tertiary text-sm">
              Niet 4 weken. Niet 2 weken. 48 uur. Dan heb je keuze.
            </p>
          </div>
        </div>
      </section>

      {/* Employer Path */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="flex items-center justify-center gap-3 mb-4">
                <span>💼</span>
                <span>Voor werkgevers</span>
              </span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Recruitment Scan. Van rol omschrijving tot candidate previews in 48 uur.
            </p>
          </div>

          {/* Employer Steps */}
          <div className="space-y-6 max-w-3xl mx-auto mb-16">
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
          <div className="text-center p-8 rounded-lg bg-bg-secondary border border-border-subtle">
            <p className="text-text-secondary mb-4">
              <span className="font-semibold text-text-primary">Total time:</span> Rol omschrijven tot candidate previews: <span className="font-bold text-accent-magenta">48 uur</span>
            </p>
            <p className="text-text-tertiary text-sm">
              Normaal: 4-6 weken. IGNT: 48 uur tot kandidaten.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Different */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wat maakt ons <GradientText>anders</GradientText>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🤖',
                title: 'AI + Human',
                description: 'Niet zomaar AI. Niet zomaar humans. Beide. Algoritme snapt matching patterns, humans checken de nuance.',
              },
              {
                icon: '🔍',
                title: 'MSP-focus',
                description: 'Dit is alles wat we doen. Niet IT als één van 50 dingen. Infrastructure, cloud, security, expertise.',
              },
              {
                icon: '⚡',
                title: '48h guarantee',
                description: 'Niet "meestal", niet "hopelijk". Altijd 48h. Dat is onze belofte.',
              },
              {
                icon: '✓',
                title: '85% match rate',
                description: 'Niet 30% match, niet "hopelijk". 85% real match. Onze data, niet onze hype.',
              },
              {
                icon: '🚫',
                title: 'Geen spam',
                description: 'Volume recruitment haten we. 3-5 matches. Niet 50 CVs waar je door moet scrollen.',
              },
              {
                icon: '🤝',
                title: 'Skin in game',
                description: 'Wij winnen als jij lang en gelukkig bent. Not just making the hire, making it stick.',
              },
            ].map((item) => (
              <BrandCard key={item.title} className="hover:border-accent-magenta/50 transition-all">
                <div className="space-y-4 text-center">
                  <div className="text-5xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              </BrandCard>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations & Realness Section */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real expectations
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Geen hypes. Wat je werkelijk kan verwachten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Candidate Reality */}
            <BrandCard className="border-l-4 border-l-accent-magenta">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Als je kandidaat bent</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">48h tot candidates (echt)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">3-5 matches, niet 50</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">Geen spam follow-up</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">Rollen die echt passen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">⚠</span>
                    <span className="text-text-secondary">Niet populair. Exclusief. Limited.</span>
                  </li>
                </ul>
              </div>
            </BrandCard>

            {/* Employer Reality */}
            <BrandCard className="border-l-4 border-l-accent-magenta">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">Als je werkgever bent</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">48h tot candidates (echt)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">3-5 shortlist, niet 50</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">Kandidaten die willen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">✓</span>
                    <span className="text-text-secondary">Matching scores & notes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent-magenta flex-shrink-0">⚠</span>
                    <span className="text-text-secondary">Niet goedkoop. Specialist work. Premium.</span>
                  </li>
                </ul>
              </div>
            </BrandCard>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-accent-purple/5 border border-accent-purple/20">
            <p className="text-center text-text-secondary italic">
              "Volume recruitment is goedkoop. Quality recruitment is specialist work. Dit is quality."
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar?
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Kies je pad. Beide zijn kort, beide zijn voelbaar.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/voor-werkgevers#scan">
              <div className="p-6 rounded-lg border-2 border-accent-magenta bg-accent-magenta/5 hover:bg-accent-magenta/10 transition-colors cursor-pointer">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Ik ben werkgever
                </h3>
                <p className="text-text-secondary text-sm">
                  10 minuten scan. 48h tot kandidaten.
                </p>
                <div className="mt-4">
                  <PrimaryButton className="w-full">Start Recruitment Scan</PrimaryButton>
                </div>
              </div>
            </Link>

            <Link href="/voor-kandidaten#scan">
              <div className="p-6 rounded-lg border-2 border-accent-magenta bg-accent-magenta/5 hover:bg-accent-magenta/10 transition-colors cursor-pointer">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Ik ben kandidaat
                </h3>
                <p className="text-text-secondary text-sm">
                  5 minuten scan. 48h tot matches.
                </p>
                <div className="mt-4">
                  <PrimaryButton className="w-full">Start Career Fit Scan</PrimaryButton>
                </div>
              </div>
            </Link>
          </div>

          <p className="text-text-tertiary text-sm">
            Vragen? <a href="mailto:ramon@ignt.nl" className="text-accent-magenta hover:text-accent-purple transition-colors">
              ramon@ignt.nl
            </a>{' '}
            of{' '}
            <a href="tel:+31619942283" className="text-accent-magenta hover:text-accent-purple transition-colors">
              06 1994 2283
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
