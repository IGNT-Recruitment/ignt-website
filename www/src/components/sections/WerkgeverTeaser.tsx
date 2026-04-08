import * as React from 'react';
import Link from 'next/link';
import { BrandCard } from '@/components/brand/BrandCard';
import { PrimaryButton } from '@/components/brand/PrimaryButton';

const WerkgeverTeaser: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrandCard className="bg-gradient-to-br from-accent-purple/10 to-accent-magenta/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
            Voor werkgevers
          </h3>
          <p className="text-text-secondary mb-6">
            Vind snel de juiste IT-specialisten voor je MSP. Onze gerichte benadering zorgt ervoor dat je kandidaten tegenkomt die echt passen.
          </p>
          <PrimaryButton asChild>
            <Link href="/werkgever">Start je scan →</Link>
          </PrimaryButton>
        </BrandCard>
      </div>
    </section>
  );
};

export { WerkgeverTeaser };
