import { HeroSection } from '@/components/sections/HeroSection';
import { WhyOmanSection } from '@/components/sections/WhyOmanSection';
import { AboutCompanySection } from '@/components/sections/AboutCompanySection';
import { ThrivingSectors } from '@/components/sections/ThrivingSectors';
import { VisionSection } from '@/components/sections/VisionSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { WhyInvestSection } from '@/components/sections/WhyInvestSection';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

export default function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden font-sans bg-transparent">
      {/* 
        The background is handled by CosmicBackground in App.tsx 
        Each section is redesigned with glass-card-premium and transparent backgrounds.
      */}
      
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section - Quick overview of Oman's strength */}
      <StatsSection />

      {/* Why Invest Section - Key high-level reasons */}
      <WhyInvestSection />

      {/* Why Oman Section - Detailed pillars */}
      <WhyOmanSection />

      {/* Vision Section - Oman Vision 2040 */}
      <VisionSection />

      {/* About Company Section - Who is Shomoukh Investment */}
      <AboutCompanySection />

      {/* Thriving Sectors - Investment targets */}
      <ThrivingSectors />

      {/* Leadership Section - Message from Chairman */}
      <LeadershipSection />

      {/* Research CTA section - Final call to action */}
      <ResearchDataCTA />
    </div>
  );
}
