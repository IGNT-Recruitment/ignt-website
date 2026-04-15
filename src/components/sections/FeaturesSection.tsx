'use client';

import { BrandCard } from '@/components/brand/BrandCard';
import { GradientText } from '@/components/brand/GradientText';

interface Feature {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Je voelt de urgentie',
    description: 'Resultaat in 48 uur. Niet in weken. Niet in maanden. Echt in 48 uur.',
    highlight: '48 uur garantie',
  },
  {
    icon: '🎯',
    title: 'Geen ruis meer',
    description: 'Wij filteren. Jij krijgt alleen wat echt past. Geen spam, geen generieke matches.',
    highlight: '85% match rate',
  },
  {
    icon: '🔐',
    title: 'Jij blijft in controle',
    description: 'Volledige privacy. Volledige transparantie. Je ziet precies wat we doen en waarom.',
    highlight: '100% privé',
  },
  {
    icon: '🌟',
    title: 'Wij kennen je wereld',
    description: 'Dit is ons focus, niet een van twintig dingen. We spreken jouw taal.',
    highlight: 'MSP Specialist',
  },
];

export function FeaturesSection() {
  return (
    <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Waarom <GradientText>IGNT</GradientText>?
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            We doen recruitment anders. Slimmer, sneller, en écht gericht op jouw succes.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <BrandCard
                className="group hover:border-accent-magenta/50 transition-all duration-300 h-full"
              >
              <div className="space-y-4">
                {/* Icon */}
                <div className="text-4xl">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlight badge */}
                <div className="pt-2 border-t border-border-subtle">
                  <p className="text-xs font-semibold text-accent-magenta uppercase tracking-wide">
                    {feature.highlight}
                  </p>
                </div>
              </div>
            </BrandCard>
            </div>
          ))}
        </div>

        {/* Secondary message */}
        <div className="text-center pt-12 border-t border-border-subtle">
          <p className="text-text-secondary max-w-2xl mx-auto">
            <span className="font-semibold text-text-primary">Geen verborgen kosten.</span> Geen spam mails. Geen generieke matches. Alleen kwaliteit.
          </p>
        </div>
      </div>
    </section>
  );
}
