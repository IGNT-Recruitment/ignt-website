'use client';

import { BrandCard } from '@/components/brand/BrandCard';
import { GradientText } from '@/components/brand/GradientText';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

const candidateProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Quick Scan',
    description: 'Beantwoord 7 vragen. Voelt als een chat met iemand die je wereld snapt.',
    duration: '5 min',
    icon: '💭',
  },
  {
    number: '02',
    title: 'We analyseren',
    description: 'Onze AI en experts zoeken waar jij echt wilt werken. Niet zomaar vacatures.',
    duration: '24h',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Je ontvangt matches',
    description: '3-5 rollen die echt passen. Niet meer, niet minder. Rechtstreeks in je mailbox.',
    duration: '48h',
    icon: '📧',
  },
  {
    number: '04',
    title: 'Jij beslist',
    description: 'Klik je aan? We regelen de warme intro. Niet? Nul druk. Jij bepaalt.',
    duration: 'Jij bepaalt',
    icon: '✨',
  },
];

const employerProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Beschrijf je rol',
    description: 'Vertel ons wat je nodig hebt. Tech stack, team vibe, waar je naar zoekt.',
    duration: '10 min',
    icon: '📝',
  },
  {
    number: '02',
    title: 'We selecteren',
    description: 'We filteren onze netwerk op kwaliteit, niet kwantiteit. Alleen de beste matches.',
    duration: '24h',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Preview',
    description: 'Je ziet kandidaten met matching score. Je weet precies waarom we ze voorstellen.',
    duration: '48h',
    icon: '👥',
  },
  {
    number: '04',
    title: 'Direct contact',
    description: 'Warme intro. Kandidaten die willen. Geen gering aantal. Echt passend.',
    duration: 'Meteen',
    icon: '🤝',
  },
];

export function ProcessSection() {
  return (
    <section className="relative bg-gradient-to-b from-bg-primary to-bg-secondary py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-transparent to-accent-magenta/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hoe werkt <GradientText>IGNT</GradientText>?
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Eenvoudig, snel, en voelbaar. Van inscrijving tot eerste match.
          </p>
        </div>

        {/* Two-column layout: Candidate + Employer */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Candidate process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-3xl">🔍</span>
              Voor kandidaten
            </h3>

            <div className="space-y-4">
              {candidateProcess.map((step, index) => (
                <div
                  key={step.number}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BrandCard className="border-l-4 border-l-accent-magenta hover:border-l-accent-magenta group-hover:scale-102">
                    <div className="flex gap-4">
                      {/* Step indicator */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-lg font-semibold text-text-primary">
                            {step.title}
                          </h4>
                          <span className="text-xs font-medium text-accent-magenta px-2 py-1 rounded bg-accent-magenta/10">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </BrandCard>

                  {/* Connector line */}
                  {index < candidateProcess.length - 1 && (
                    <div className="h-4 w-1 bg-gradient-to-b from-accent-magenta to-transparent mx-6 my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Employer process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              <span className="text-3xl">💼</span>
              Voor werkgevers
            </h3>

            <div className="space-y-4">
              {employerProcess.map((step, index) => (
                <div
                  key={step.number}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <BrandCard className="border-l-4 border-l-accent-purple hover:border-l-accent-purple group-hover:scale-102">
                    <div className="flex gap-4">
                      {/* Step indicator */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-magenta flex items-center justify-center text-white font-bold text-lg">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-lg font-semibold text-text-primary">
                            {step.title}
                          </h4>
                          <span className="text-xs font-medium text-accent-purple px-2 py-1 rounded bg-accent-purple/10">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </BrandCard>

                  {/* Connector line */}
                  {index < employerProcess.length - 1 && (
                    <div className="h-4 w-1 bg-gradient-to-b from-accent-purple to-transparent mx-6 my-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-16 pt-12 border-t border-border-subtle text-center">
          <p className="text-text-secondary max-w-2xl mx-auto">
            <span className="font-semibold text-text-primary">Transparant proces.</span> Je ziet precies wat er gebeurt en waarom we iemand voorstellen.
          </p>
        </div>
      </div>
    </section>
  );
}
