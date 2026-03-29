import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { ThrivingSectors } from '@/components/sections/ThrivingSectors';
import { WhyOmanSection } from '@/components/sections/WhyOmanSection';
import { AboutCompanySection } from '@/components/sections/AboutCompanySection';

export default function Home() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const displayLang = lang || 'en';

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-transparent text-foreground">
      {/* Global Starry Background & Light Beam for Home Page */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#050312]">
        {/* CSS stars */}
        <div
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            backgroundImage:
              'radial-gradient(0.2px 0.2px at 10% 10%, white 100%, transparent), radial-gradient(0.5px 0.5px at 20% 40%, rgba(255,255,255,0.8) 100%, transparent), radial-gradient(0.8px 0.8px at 30% 80%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(0.2px 0.2px at 40% 20%, white 100%, transparent), radial-gradient(0.5px 0.5px at 50% 60%, rgba(255,255,255,0.9) 100%, transparent), radial-gradient(0.8px 0.8px at 60% 10%, rgba(255,255,255,0.8) 100%, transparent), radial-gradient(0.2px 0.2px at 70% 50%, white 100%, transparent), radial-gradient(0.5px 0.5px at 80% 90%, rgba(255,255,255,0.7) 100%, transparent), radial-gradient(0.8px 0.8px at 90% 30%, rgba(255,255,255,0.9) 100%, transparent), radial-gradient(0.2px 0.2px at 95% 70%, white 100%, transparent)',
            backgroundSize: '200px 200px',
          }}
        />

        {/* Colorful space glows */}
        <div className="absolute left-[15%] top-[25%] h-[400px] w-[600px] rounded-full bg-[#12224A]/40 blur-[130px]" />
        <div className="absolute right-[10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#201538]/50 blur-[140px]" />
        <div className="absolute -bottom-[10%] left-[30%] h-[400px] w-[500px] rounded-full bg-[#0E153D]/60 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative flex flex-1 items-center w-full py-16 md:py-20">
        <div className="container-custom relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <div className="z-20 max-w-[600px]">
              <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-[76px] whitespace-pre-line">
                {t('hero.slide1.title')}
              </h1>

              <p className="mt-6 max-w-[430px] text-lg leading-relaxed text-[#A0A3B5] md:text-xl">
                {t('hero.slide1.description')}
              </p>

              <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <Link
                  to={`/${displayLang}/key-sectors`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-3xl border border-blue-400/30 bg-gradient-to-r from-[#175CC0] to-[#2684FF] px-8 py-3.5 text-lg font-medium text-white shadow-[0_0_20px_rgba(38,132,255,0.4)] transition-all hover:brightness-110"
                >
                  {t('hero.cta.startInvesting')} <ArrowRight className="ml-2 h-5 w-5 opacity-90" />
                </Link>

                <Link
                  to={`/${displayLang}/contact`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-3xl border border-white/20 bg-white/5 px-8 py-3.5 text-lg font-medium text-[#D1D5DB] backdrop-blur-md transition-all hover:bg-white/10"
                >
                  {t('hero.cta.explore')} <ArrowRight className="ml-2 h-5 w-5 opacity-90" />
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative mx-auto mt-8 w-full max-w-[560px] lg:ml-auto lg:mt-10 select-none">
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(20,40,120,0.28)]">
                <img
                  src="/images/oman_hero.jpg"
                  alt="Muscat skyline and waterfront"
                  className="block h-[420px] w-full object-cover md:h-[500px]"
                />

                {/* Top edge highlight */}
                <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

                {/* Soft cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
              </div>

              {/* 2040 Vision Target Card */}
              <div className="absolute bottom-6 right-6 z-30 rounded-2xl border border-white/15 bg-[#1A1625]/75 px-6 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                <p className="text-[42px] font-semibold leading-none tracking-tight text-white">
                  2040
                </p>
                <p className="mt-2 text-[14px] font-medium tracking-[0.08em] text-white/70 uppercase">
                  {t('hero.vision')}
                </p>
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