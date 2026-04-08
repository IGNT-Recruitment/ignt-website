import * as React from 'react';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton, GradientText, VonkSparkle } from '@/components/brand';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <VonkSparkle />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <GradientText>Steek de vonk aan</GradientText>
            <br /> — Vind je perfecte match
          </h1>
          <p className="text-xl text-text-secondary">
            Of je nu werkgever of kandidaat bent, IGNT verbindt je met de juiste talenten in het MSP-landschap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <PrimaryButton asChild size="lg">
              <Link href="/werkgever">Ik ben werkgever</Link>
            </PrimaryButton>
            <SecondaryButton asChild size="lg">
              <Link href="/kandidaat">Ik ben kandidaat</Link>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
