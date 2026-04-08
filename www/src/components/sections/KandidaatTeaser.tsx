import * as React from 'react';
import Link from 'next/link';
import { BrandCard } from '@/components/brand/BrandCard';
import { PrimaryButton } from '@/components/brand/PrimaryButton';

const KandidaatTeaser: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrandCard className="bg-gradient-to-br from-accent-magenta/10 to-accent-purple/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
            Voor kandidaten
          </h3>
          <p className="text-text-secondary mb-6">
            Zoek je een passende rol in het MSP-universum? Wij helpen je om het juiste bedrijf te vinden waar je echt kan groeien.
          </p>
          <PrimaryButton asChild>
            <Link href="/kandidaat">Bekijk vacatures →</Link>
          </PrimaryButton>
        </BrandCard>
      </div>
    </section>
  );
};

export { KandidaatTeaser };
