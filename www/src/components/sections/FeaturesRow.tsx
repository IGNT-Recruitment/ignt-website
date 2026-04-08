import * as React from 'react';
import { BrandCard } from '@/components/brand/BrandCard';

const features = [
  {
    title: 'Gerichte matching',
    description: 'Algoritme speciaal gemaakt voor MSP-specialisten',
  },
  {
    title: 'Snelle doorlooptijd',
    description: 'Gemiddeld 14 dagen van match tot aanbieding',
  },
  {
    title: 'MSP-experts',
    description: 'Team dat jouw sector binnenuit kent',
  },
  {
    title: 'Persoonlijke aanpak',
    description: 'Ramon is je Business Cupido — de vonk achter elke match',
  },
];

const FeaturesRow: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Waarom IGNT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <BrandCard key={index}>
              <h3 className="text-xl font-semibold mb-2 text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-secondary">{feature.description}</p>
            </BrandCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeaturesRow };
