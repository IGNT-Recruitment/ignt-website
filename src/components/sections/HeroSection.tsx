'use client';

import Link from 'next/link';
import { PrimaryButton } from '@/components/brand/PrimaryButton';
import { SecondaryButton } from '@/components/brand/SecondaryButton';
import { VonkSparkle } from '@/components/brand/VonkSparkle';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg-primary pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background gradient animation (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-magenta/5 pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-gradient-feature rounded-full mix-blend-screen opacity-5 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Spark badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-magenta/10 border border-accent-magenta/30 backdrop-blur-sm">
            <VonkSparkle />
            <span className="text-sm font-medium text-accent-magenta">
              Recruitment reimagined
            </span>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-text-primary">MSP-recruitment die echt werkt</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Niet meer ruis. Wel inhoud, context, en partnership.
              <span className="block text-text-tertiary mt-2 text-lg">Of je werkgever of kandidaat bent.</span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/voor-werkgevers" className="w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto">
                Ik ben werkgever
              </PrimaryButton>
            </Link>
            <Link href="/voor-kandidaten" className="w-full sm:w-auto">
              <SecondaryButton className="w-full sm:w-auto">
                Ik ben kandidaat
              </SecondaryButton>
            </Link>
          </div>

          {/* Trust signal - Testimonial snippet */}
          <div className="pt-8 border-t border-border-subtle max-w-2xl mx-auto">
            <p className="text-text-secondary italic text-sm">
              "Eindelijk iemand die mijn wereld snapt"
            </p>
            <p className="text-text-tertiary text-xs mt-2">— Timon, Proxsys</p>
          </div>

          {/* Trust signals - Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4 max-w-2xl mx-auto text-center">
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-accent-magenta">48h</p>
              <p className="text-text-tertiary text-sm">Eerste match</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-accent-magenta">85%</p>
              <p className="text-text-tertiary text-sm">Match rate</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-accent-magenta">MSP</p>
              <p className="text-text-tertiary text-sm">Specialist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements (visual interest) */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent-purple rounded-full opacity-20 animate-bounce-soft" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-accent-magenta rounded-full opacity-30 animate-bounce-soft" style={{ animationDelay: '0.2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent-purple rounded-full opacity-15 animate-bounce-soft" style={{ animationDelay: '0.4s' }} />
    </section>
  );
}
