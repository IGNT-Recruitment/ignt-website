import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="bg-bg-primary">
      {/* Hero section - Main value proposition */}
      <HeroSection />

      {/* Features section - Why choose IGNT */}
      <FeaturesSection />

      {/* Process section - How it works */}
      <ProcessSection />

      {/* Final CTA section - Convert */}
      <CTASection />
    </main>
  );
}
