'use client';

import Link from 'next/link';
import { SecondaryButton } from '@/components/brand/SecondaryButton';
import { GradientText } from '@/components/brand/GradientText';

export function CTASection() {
  return (
    <section className="relative bg-bg-primary py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-magenta/10 pointer-events-none" />

      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main CTA Container */}
        <div className="text-center space-y-8">
          {/* Eyebrow */}
          <p className="text-accent-magenta font-semibold uppercase tracking-wide text-sm md:text-base">
            Het voelt anders. Omdat het anders is.
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-text-primary mb-3">Je weet dat dit kan werken</span>
            <GradientText>48 uur tot je eerste match</GradientText>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Geen weken van wachten. Geen spam in je inbox. Geen giswerk. Alleen matches die echt passen.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            {/* Employer CTA */}
            <Link href="/werkgever">
              <div className="space-y-2">
                <SecondaryButton className="w-full sm:w-auto px-12">
                  Voor werkgevers
                </SecondaryButton>
                <p className="text-xs text-text-tertiary text-center">
                  5 min inschrijving
                </p>
              </div>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-border-subtle" />

            {/* Candidate CTA */}
            <Link href="/kandidaat">
              <div className="space-y-2">
                <SecondaryButton className="w-full sm:w-auto px-12">
                  Voor kandidaten
                </SecondaryButton>
                <p className="text-xs text-text-tertiary text-center">
                  Eerste match snel
                </p>
              </div>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 space-y-4">
            <p className="text-text-tertiary text-sm">
              Wat je krijgt
            </p>

            {/* Badge row */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <span className="text-lg">🔐</span>
                <span>Volledige privacy</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <span className="text-lg">⚡</span>
                <span>48h resultaat</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <span className="text-lg">🎯</span>
                <span>Echt passend</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message - reassurance */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <p className="text-center text-text-tertiary text-sm max-w-2xl mx-auto">
            Liever direct praten? Geen formulieren, geen robots. E-mail{' '}
            <a href="mailto:ramon@ignt.nl" className="text-accent-purple hover:text-accent-magenta transition-colors">
              ramon@ignt.nl
            </a>{' '}
            of bel direct{' '}
            <a href="tel:+31619942283" className="text-accent-purple hover:text-accent-magenta transition-colors">
              06 1994 2283
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
