import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { ThrivingSectors } from '@/components/sections/ThrivingSectors';
import { WhyOmanSection } from '@/components/sections/WhyOmanSection';
import { AboutCompanySection } from '@/components/sections/AboutCompanySection';

export default function Home() {
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <div className="min-h-screen text-foreground bg-transparent flex flex-col pt-24 md:pt-32 relative overflow-hidden">
      {/* Global Starry Background & Light Beam for Home Page */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#050312]">
        {/* CSS stars */}
        <div 
          className="absolute inset-0 opacity-50 mix-blend-screen" 
          style={{ 
             backgroundImage: 'radial-gradient(1px 1px at 10% 10%, white 100%, transparent), radial-gradient(1.5px 1.5px at 20% 40%, rgba(255,255,255,0.8) 100%, transparent), radial-gradient(2px 2px at 30% 80%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(1px 1px at 40% 20%, white 100%, transparent), radial-gradient(1.5px 1.5px at 50% 60%, rgba(255,255,255,0.9) 100%, transparent), radial-gradient(2px 2px at 60% 10%, rgba(255,255,255,0.8) 100%, transparent), radial-gradient(1px 1px at 70% 50%, white 100%, transparent), radial-gradient(1.5px 1.5px at 80% 90%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(2px 2px at 90% 30%, rgba(255,255,255,0.9) 100%, transparent), radial-gradient(1px 1px at 95% 70%, white 100%, transparent)',
             backgroundSize: '200px 200px'
          }} 
        />
        {/* Horizontal light beam */}
        <div className="absolute top-[85px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5A9CF8] to-transparent shadow-[0_0_25px_10px_rgba(90,156,248,0.3)] opacity-70" />
        <div className="absolute top-[85px] left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]" />
        <div className="absolute top-[85px] left-[35%] right-[35%] h-[1px] bg-white shadow-[0_0_30px_15px_rgba(183,115,255,0.3)]" />
        
        {/* Colorful space glows */}
        <div className="absolute left-[15%] top-[25%] h-[400px] w-[600px] rounded-full bg-[#12224A]/40 blur-[130px]" />
        <div className="absolute right-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#201538]/50 blur-[140px]" />
        <div className="absolute -bottom-[10%] left-[30%] h-[400px] w-[500px] rounded-full bg-[#0E153D]/60 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full py-16 md:py-20 flex-1 flex items-center">
        <div className="container-custom relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-[600px] z-20">
                <h1 className="text-balance text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl md:text-[76px] tracking-tight">
                  Investing in
                  <br />
                  <span className="text-[#89C5E0] font-normal tracking-tight">
                    What's Next
                  </span>
                </h1>
                <p className="mt-6 max-w-[420px] text-lg md:text-xl leading-relaxed text-[#A0A3B5]">
                  Private investment and strategic development across Oman and global markets.
                </p>

                <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Link
                    to={`/${displayLang}/key-sectors`}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-3xl bg-gradient-to-r from-[#175CC0] to-[#2684FF] px-8 py-3.5 text-lg font-medium text-white transition-all hover:brightness-110 shadow-[0_0_20px_rgba(38,132,255,0.4)] border border-blue-400/30"
                  >
                    Start Investing <ArrowRight className="ml-2 h-5 w-5 opacity-90" />
                  </Link>
                  <Link
                    to={`/${displayLang}/contact`}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-3xl border border-white/20 bg-white/5 px-8 py-3.5 text-lg font-medium text-[#D1D5DB] transition-all hover:bg-white/10 backdrop-blur-md"
                  >
                    Explore <ArrowRight className="ml-2 h-5 w-5 opacity-90" />
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto select-none mt-10 md:mt-0" style={{ perspective: '1200px' }}>
                <div 
                  className="relative overflow-hidden rounded-[24px] shadow-[0_0_50px_rgba(38,132,255,0.25)] border border-white/20 transition-transform duration-700 hover:rotate-y-0"
                  style={{ 
                    transform: 'rotateY(-15deg) rotateX(5deg) translateZ(0)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src="/images/oman_hero.png"
                    alt="Muscat skyline and waterfront"
                    className="h-[380px] w-full object-cover md:h-[480px] scale-[1.05]"
                  />
                  {/* Internal top glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                  
                  {/* Subtle noise/glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent mix-blend-overlay" />
                </div>

                {/* 2040 Vision Target Card */}
                <div 
                  className="absolute bottom-6 right-6 rounded-2xl border border-white/20 bg-black/40 px-6 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <p className="text-[40px] font-semibold leading-none text-white tracking-tight">2040</p>
                  <p className="mt-2 text-[15px] font-medium text-white/70 tracking-wide">Vision Target</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* WHY OMAN */}
      <WhyOmanSection />

      {/* ABOUT COMPANY */}
      <AboutCompanySection />

      {/* THRIVING SECTORS */}
      <ThrivingSectors />

      {/* Research CTA section */}
      <ResearchDataCTA />
    </div>
  );
}
