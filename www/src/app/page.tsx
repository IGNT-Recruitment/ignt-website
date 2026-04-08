import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesRow } from '@/components/sections/FeaturesRow';
import { WerkgeverTeaser } from '@/components/sections/WerkgeverTeaser';
import { KandidaatTeaser } from '@/components/sections/KandidaatTeaser';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesRow />
      <WerkgeverTeaser />
      <KandidaatTeaser />
    </>
  );
}
