'use client';

import { PrimaryButton } from '@/components/brand/PrimaryButton';
import { BrandCard } from '@/components/brand/BrandCard';
import { GradientText } from '@/components/brand/GradientText';

export default function OverIGNTPage() {
  return (
    <main className="bg-bg-primary">
      {/* Hero - Personal Story Intro */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-magenta/5 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <p className="text-accent-magenta font-semibold uppercase tracking-wide text-sm md:text-base">
              Over IGNT
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-2">
              <span className="block text-text-primary">Dit begon met frustratie.</span>
              <span className="block">
                <GradientText>En veel koffie.</GradientText>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              15+ jaar in IT-recruitment. Zag steeds hetzelfde patroon terugkeren. Wist het beter kon. Dus bouwde ik het.
            </p>
          </div>
        </div>
      </section>

      {/* The Frustration - What Was Wrong */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De klassieke <GradientText>recruitment waanzin</GradientText>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Wat ik dagelijks zag in het landschap (en wat ik verafschuwde):
            </p>
          </div>

          {/* NIET Column - What's Wrong */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                  <p className="text-red-400 font-semibold">NIET</p>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Wat ik zag</h3>
              </div>

              <div className="space-y-4">
                {[
                  "Recruitment bureaus stuurden spam. 50 CVs, nul matches.",
                  "Kandidaten krijgen dezelfde generieke rollen 100x per week.",
                  "Werkgevers wachten maanden op eerste serieuze candidate.",
                  "Nobody checks culture fit. Het is volume, altijd volume.",
                  "IT-professionals voelen zich als slotjes, niet als mensen.",
                  "Bureaus verdienen meer dan professionals die huren.",
                ].map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">❌</span>
                    <p className="text-text-secondary">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
                  <p className="text-green-400 font-semibold">WEL</p>
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Wat IGNT doet</h3>
              </div>

              <div className="space-y-4">
                {[
                  "We send 3-5 matches. Echt passend, niet volume.",
                  "Kandidaten krijgen rollen die hun carière vormen.",
                  "Werkgevers zien kandidaten in 48 uur, niet maanden.",
                  "We diepen in: culture, growth, techniek, alles.",
                  "IT-professionals worden gezien als talent, niet als commodity.",
                  "Onze win is als jij lang en gelukkig blijft.",
                ].map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">✓</span>
                    <p className="text-text-secondary">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal reflection */}
          <BrandCard className="border-l-4 border-l-accent-magenta">
            <p className="text-lg text-text-secondary italic">
              "Ik kon niet meer aanzien hoe goeie Menschen, goeie Bedrijven, en Goeie Rollen langs elkaar liepen. Terwijl een paar bureaus alles kapot maakten met spam. Dus: IGNT."
            </p>
            <p className="text-text-tertiary text-sm mt-4">— Ramon, Founder IGNT</p>
          </BrandCard>
        </div>
      </section>

      {/* How IGNT Works - Principles */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hoe wij werken
            </h2>
            <p className="text-text-secondary text-lg md:text-xl">
              Drie principes. Eén doel: voelbare, langdurige matches.
            </p>
          </div>

          {/* Three Principles */}
          <div className="space-y-12">
            {/* Principle 1: Deep Understanding */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Deep Understanding
                </h3>
                <p className="text-text-secondary">
                  We dingen NIET zomaar matchen. We vragen alles. Context, cultuur, groei, frustraties.
                </p>
              </div>
              <div className="md:col-span-2">
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-text-secondary mb-2">
                    <span className="font-semibold">Voor werkgevers:</span> We vragen diep naar je tech, je team, je groeipath. Niet "hoeveel engineers?", maar "wat wil JE opbouwen?"
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-semibold">Voor kandidaten:</span> We vragen waar je heen wil, niet zomaar "wat is je huidige salaris?" Carière, niet commodity.
                  </p>
                </BrandCard>
              </div>
            </div>

            {/* Principle 2: Selective Quality */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Selective, niet Spam
                </h3>
                <p className="text-text-secondary">
                  We filteren hard. 3-5 echte matches, niet 50 misses. Onze AI werkt met human judgment.
                </p>
              </div>
              <div className="md:col-span-2">
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-text-secondary mb-2">
                    <span className="font-semibold">Wat ik weiger:</span> Volume-based recruitment, spam mails, "ik hoop dat het past"
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-semibold">Wat ik doe:</span> AI + human = 85% match rate. Kandidaten voelen het. Werkgevers zien het.
                  </p>
                </BrandCard>
              </div>
            </div>

            {/* Principle 3: Speed + Respect */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Speed + Respect
                </h3>
                <p className="text-text-secondary">
                  48h tot candidates. Niet omdat we snel-snel zijn, maar omdat dit MOET happen snel.
                </p>
              </div>
              <div className="md:col-span-2">
                <BrandCard className="border-l-4 border-l-accent-magenta">
                  <p className="text-text-secondary mb-2">
                    <span className="font-semibold">De realiteit:</span> Best candidates zijn weg in 1 week. Top rollen zijn filled in 2 weeks.
                  </p>
                  <p className="text-text-secondary">
                    <span className="font-semibold">Onze respons:</span> 48h matching, niet weken. Jij krijgt prioriteit, niet een queue-ticket.
                  </p>
                </BrandCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases - Proof */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Het werkt
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Niet mijn woorden. Resultaten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Case 1 */}
            <BrandCard className="border-l-4 border-l-accent-magenta">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  MSP + Cloud Transformation
                </h3>
                <p className="text-text-secondary text-sm">
                  Urgent behoefte aan cloud architects. Traditioneel recruitment: 3 maanden, alles generiek. IGNT: 48h, 2 perfect matches. Beide nog steeds werken, 18+ maanden later.
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold">€150K+ ARR secured</p>
                </div>
              </div>
            </BrandCard>

            {/* Case 2 */}
            <BrandCard className="border-l-4 border-l-accent-magenta">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Support Team Scaling
                </h3>
                <p className="text-text-secondary text-sm">
                  Nodig: 5 support engineers snel. Vonden: 3 goede matches, 48h turnaround. 2 jaar later: allebei nog in team, promoties gekregen.
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold">Team scaled 2x, CSAT +42%</p>
                </div>
              </div>
            </BrandCard>

            {/* Case 3 */}
            <BrandCard className="border-l-4 border-l-accent-magenta">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Sales Engineering Ramp
                </h3>
                <p className="text-text-secondary text-sm">
                  Eerste Sales Engineer in 2 weken (niet 3 maanden). 48h matching + warm intro. Zij sloten €500K deal eerste quarter.
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold">€500K pipeline closed</p>
                </div>
              </div>
            </BrandCard>

            {/* Case 4 */}
            <BrandCard className="border-l-4 border-l-accent-magenta">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Management Layer Growth
                </h3>
                <p className="text-text-secondary text-sm">
                  Zochten tech lead die ook kon leaden. Niemand vond dit. IGNT: 48h, 1 perfect match. Dat persoon leidt nu 2 lagen, culture transformed.
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold">2 teams led, culture shift</p>
                </div>
              </div>
            </BrandCard>

            {/* Case 5 */}
            <BrandCard className="border-l-4 border-l-accent-magenta md:col-span-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  Candidate Success - Architectuur Growth Path
                </h3>
                <p className="text-text-secondary text-sm">
                  Candidate zocht growth in architectuur. IGNT vond role waar dat echt kon. 2 jaar later: promoted to Lead, 2x salary, team opbouwen. Dat is de win.
                </p>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-xs text-accent-magenta font-semibold">Growth trajectory: Junior Arch → Lead Arch → Mentor</p>
                </div>
              </div>
            </BrandCard>
          </div>
        </div>
      </section>

      {/* Why MSP Specifically */}
      <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Waarom MSP?
            </h2>
          </div>

          <BrandCard className="border-l-4 border-l-accent-magenta mb-8">
            <p className="text-lg text-text-secondary italic mb-4">
              "MSP-recruiters haten dit: volumes, generieke kandidaten, maanden wachten. IT-professionals in MSP haten dit: spam, roles die niet passen, geen groei path."
            </p>
            <p className="text-text-secondary mb-4">
              Dit is mijn wereld. Ik ken de frustration op beide zijden. De complexiteit van infrastructure, cloud, security matching. De urgentie van SMB growth.
            </p>
            <p className="text-text-secondary">
              IGNT is NOT een generieke recruiter. Dit is gespecialiseerd work voor een gespecialiseerde market. Wij spreken je taal omdat het onze taal is.
            </p>
          </BrandCard>

          <div className="text-center">
            <p className="text-text-tertiary text-sm max-w-2xl mx-auto">
              Generieke recruitment? Er zijn anderen. IGNT is voor bedrijven en professionals die iets beter willen. En bereid zijn daar voor het geduld voor op te brengen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Sparring CTA */}
      <section className="relative bg-bg-secondary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-magenta/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Direct sparren?
          </h2>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Je kan me bereiken voor vragen, voor strategische sparring, of gewoon voor feedback. Open line.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:ramon@ignt.nl">
              <PrimaryButton className="px-8">
                E-mail Ramon
              </PrimaryButton>
            </a>
            <p className="text-text-tertiary">
              of bel <a href="tel:+31619942283" className="text-accent-magenta hover:text-accent-purple transition-colors">
                06 1994 2283
              </a>
            </p>
          </div>

          <div className="mt-12 p-6 rounded-lg bg-accent-purple/5 border border-accent-purple/20">
            <p className="text-text-secondary text-sm">
              Geen pitch. Geen hypes. Echt gesprek met iemand die 15+ jaar in dit veld staat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
