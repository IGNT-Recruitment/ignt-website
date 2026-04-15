'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PrimaryButton } from '@/components/brand/PrimaryButton';
import { BrandCard } from '@/components/brand/BrandCard';
import { GradientText } from '@/components/brand/GradientText';

export default function KandidatenPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="bg-bg-primary">
      {/* Hero Section - Pain Point for Candidates */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-magenta/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Eyebrow */}
            <p className="text-accent-magenta font-semibold uppercase tracking-wide text-sm md:text-base">
              Voor IT-professionals
            </p>

            {/* Headline - Pain Point */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2">
              <span className="block text-text-primary">Je voelt het:</span>
              <span className="block">
                <GradientText>Dit kan beter</GradientText>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Spam mails van recruiters. Generieke vacatures. Rollen die "almost" passen.
              <span className="block text-text-tertiary mt-2 text-lg">Jij bent beter dan dit.</span>
            </p>

            {/* Primary CTA */}
            <div className="pt-8">
              <Link href="/voor-kandidaten#scan">
                <PrimaryButton className="px-8">
                  Start je Career Fit Scan
                </PrimaryButton>
              </Link>
            </div>

            {/* Trust signal */}
            <div className="pt-8 border-t border-border-subtle max-w-2xl mx-auto">
              <p className="text-text-secondary italic text-sm">
                "IGNT voelt als iemand die mijn carière voelt, niet zomaar een recruiter. De matches pasten echt."
              </p>
              <p className="text-text-tertiary text-xs mt-2">— Christiaan, Senior Cloud Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection - Interactive Sections */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wat spreekt jou aan?
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Klik je richting. We laten zien wat past.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveCategory(activeCategory === 'tech' ? null : 'tech')}
              className={`flex-1 p-4 rounded-lg border transition-all duration-300 ${
                activeCategory === 'tech'
                  ? 'border-accent-magenta bg-accent-magenta/10'
                  : 'border-border-subtle hover:border-accent-magenta/50'
              }`}
            >
              <div className="text-2xl mb-2">⚙️</div>
              <p className="font-semibold text-text-primary">Ik werk in de techniek</p>
              <p className="text-xs text-text-tertiary mt-1">Infrastructure, Cloud, Ops</p>
            </button>

            <button
              onClick={() => setActiveCategory(activeCategory === 'commercial' ? null : 'commercial')}
              className={`flex-1 p-4 rounded-lg border transition-all duration-300 ${
                activeCategory === 'commercial'
                  ? 'border-accent-magenta bg-accent-magenta/10'
                  : 'border-border-subtle hover:border-accent-magenta/50'
              }`}
            >
              <div className="text-2xl mb-2">💼</div>
              <p className="font-semibold text-text-primary">Commerciële kant</p>
              <p className="text-xs text-text-tertiary mt-1">Sales, Pre-sales, Account</p>
            </button>

            <button
              onClick={() => setActiveCategory(activeCategory === 'delivery' ? null : 'delivery')}
              className={`flex-1 p-4 rounded-lg border transition-all duration-300 ${
                activeCategory === 'delivery'
                  ? 'border-accent-magenta bg-accent-magenta/10'
                  : 'border-border-subtle hover:border-accent-magenta/50'
              }`}
            >
              <div className="text-2xl mb-2">📦</div>
              <p className="font-semibold text-text-primary">Teams & Delivery</p>
              <p className="text-xs text-text-tertiary mt-1">Product, Scrum, Project</p>
            </button>
          </div>

          {/* Tech Section */}
          {activeCategory === 'tech' && (
            <div className="space-y-6 mb-12 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-text-primary mb-3">
                  Je bent een tech-professional. We snappen dat.
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Niet zomaar "IT-functions". Real tech growth. Architects, cloud engineers, specialists.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "IGNT begreep mijn tech stack en waar ik heen wou. Niet zomaar een role, een groei-trajectory."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Christiaan</p>
                    <p className="text-sm text-text-tertiary">Senior Cloud Architect</p>
                  </div>
                </BrandCard>
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "Eindelijk rollen die mijn expertise werkelijk nodig hadden. Niet overqualified, precies goed."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Twan</p>
                    <p className="text-sm text-text-tertiary">DevOps Engineer</p>
                  </div>
                </BrandCard>
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "Matches pasten. Teams snapten mijn niveau. Dit is hoe recruiter HOORT te werken."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Joeri</p>
                    <p className="text-sm text-text-tertiary">Infrastructure Specialist</p>
                  </div>
                </BrandCard>
              </div>
            </div>
          )}

          {/* Commercial Section */}
          {activeCategory === 'commercial' && (
            <div className="space-y-6 mb-12 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-text-primary mb-3">
                  Sales, pre-sales, account management. De klantenkant.
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Rollen waar je momentum bouwt. Waar je impact voelt. Waar groei real is.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "Bart-Jan is een top sales engineer. IGNT vond hem. En hij voelt zich thuis. Dat is waar het om gaat."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Bart-Jan</p>
                    <p className="text-sm text-text-tertiary">Sales Engineer</p>
                  </div>
                </BrandCard>
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "Account management rollen die echt growth-focused zijn. IGNT koos voor mij en het bedrijf."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Tomas</p>
                    <p className="text-sm text-text-tertiary">Account Manager</p>
                  </div>
                </BrandCard>
              </div>
            </div>
          )}

          {/* Delivery Section */}
          {activeCategory === 'delivery' && (
            <div className="space-y-6 mb-12 animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-text-primary mb-3">
                  Product, delivery, teams. Wie het echt trekken.
                </h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Rollen waar je cultuur bouwt. Waar je teams groeien. Waar je legacy maakt.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "Peter is delivery-first. IGNT snapte dat. Vond hem rol bij bedrijf dat dat ook snapt."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Peter</p>
                    <p className="text-sm text-text-tertiary">Delivery Manager</p>
                  </div>
                </BrandCard>
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-lg text-text-secondary italic mb-4">
                    "Scrum master die echt teams wil groeien. IGNT koos team waar dat kan. Perfect match."
                  </p>
                  <div className="space-y-1">
                    <p className="font-semibold text-text-primary">Jochem</p>
                    <p className="text-sm text-text-tertiary">Scrum Master</p>
                  </div>
                </BrandCard>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Universal "Wat je zoekt" Section */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ongeacht je richting: wat je zoekt
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Dit herkennen alle professionals waar IGNT voor werkt:
            </p>
          </div>

          {/* Universal values */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: '📈',
                title: 'Groei is echt',
                description: 'Niet in woorden, maar in daden. Salary growth, level growth, skill growth.',
              },
              {
                icon: '🎯',
                title: 'Context-driven werk',
                description: 'Rollen waar je environment snapt wat je kan. Geen "overqualified" discussion.',
              },
              {
                icon: '🤝',
                title: 'Teams die jou willen',
                description: 'Niet zomaar slotjes vullen. Teams actief interest hebben in JOU.',
              },
              {
                icon: '⚡',
                title: 'Speed matters',
                description: 'Geen maanden wachten. Matching in 48h. Intakes direct. Move snel.',
              },
            ].map((value) => (
              <BrandCard key={value.title} className="hover:border-accent-magenta/50 transition-all">
                <div className="space-y-4">
                  <div className="text-4xl">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary">{value.title}</h3>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </div>
              </BrandCard>
            ))}
          </div>

          {/* Yvo Testimonial */}
          <BrandCard className="border-l-4 border-l-accent-magenta">
            <div className="space-y-4">
              <p className="text-lg text-text-secondary italic">
                "IGNT snapt dat IT-professionals meer willen dan just een salary bump. Groei, context, respect. Zij deliverden dat."
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-text-primary">Yvo</p>
                <p className="text-sm text-text-tertiary">Architect (5+ roles via IGNT)</p>
              </div>
            </div>
          </BrandCard>
        </div>
      </section>

      {/* How It Works for Candidates */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hoe het werkt
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Van scan tot match. Snel, eerlijk, voelbaar.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            {[
              {
                number: '01',
                title: 'Career Fit Scan',
                description: '5 minuten. Beantwoord vragen over jezelf. Voelt als gesprek met iemand die je wereld snapt.',
                duration: '5 min',
              },
              {
                number: '02',
                title: 'We analyseren',
                description: 'Onze AI & experts zoeken rollen die echt passen. Niet zomaar vacatures, echte fits.',
                duration: '24h',
              },
              {
                number: '03',
                title: 'Je ontvangt matches',
                description: '3-5 rollen rechtstreeks in je mailbox. Niet meer, niet minder. Kwaliteit over kwantiteit.',
                duration: '48h',
              },
              {
                number: '04',
                title: 'Jij beslist',
                description: 'Klik je aan? Warme intro. Niet? Nul druk. Jij bepaalt je trajectory.',
                duration: 'Jij bepaalt',
              },
            ].map((step) => (
              <BrandCard key={step.number} className="border-l-4 border-l-accent-magenta">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-text-primary">{step.title}</h4>
                      <span className="text-xs font-medium text-accent-magenta px-2 py-1 rounded bg-accent-magenta/10">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm">{step.description}</p>
                  </div>
                </div>
              </BrandCard>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De flow in detail
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Career Fit Scan. Van inschrijving tot eerste match in 48 uur.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
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
                      <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
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
          <div className="text-center mt-12 p-8 rounded-lg bg-bg-secondary border border-border-subtle">
            <p className="text-text-secondary mb-4">
              <span className="font-semibold text-text-primary">Total time:</span> Inschrijving tot eerste matches: <span className="font-bold text-accent-magenta">48 uur</span>
            </p>
            <p className="text-text-tertiary text-sm">
              Niet 4 weken. Niet 2 weken. 48 uur. Dan heb je keuze.
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
            Voelt goed?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            5 minuten scan. 48 uur tot eerste match. Echt, niet spam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/career-fit-scan">
              <PrimaryButton className="px-8">
                Start je Career Fit Scan
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
              <span>5 min scan</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="text-lg">⚡</span>
              <span>48h matches</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
