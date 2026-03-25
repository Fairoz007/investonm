import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { ThrivingSectors } from '@/components/sections/ThrivingSectors';
import { WhyOmanSection } from '@/components/sections/WhyOmanSection';
import { AboutCompanySection } from '@/components/sections/AboutCompanySection';

export default function Home() {
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <div className="min-h-screen text-white bg-[#050812] flex flex-col relative overflow-hidden font-sans">
      {/* Optimized Background - Lean and Performant */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#050812]">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full pt-28 pb-12 md:pt-32 md:pb-16 flex items-center min-h-[85vh]">
        <div className="container-custom relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
              
              {/* Left Column: Text & CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[650px] z-20"
              >
                <h1 className="text-balance text-[50px] leading-[1.1] font-extrabold text-white sm:text-6xl md:text-[72px] tracking-tight">
                  Investing in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500">
                    What's Next
                  </span>
                </h1>
                <p className="mt-5 max-w-[480px] text-lg md:text-[19px] leading-relaxed text-muted-foreground font-medium">
                  Private investment and strategic development across Oman and global markets.
                </p>

                <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <Link
                    to={`/${displayLang}/key-sectors`}
                    className="group inline-flex h-[52px] items-center justify-center rounded-full bg-primary px-8 text-[15px] font-semibold text-white transition-all hover:bg-primary/90 hover:scale-[1.02] shadow-lg shadow-primary/20 active:scale-[0.98]"
                  >
                    Start Investing 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to={`/${displayLang}/contact`}
                    className="group inline-flex h-[52px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-[15px] font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98]"
                  >
                    Explore Opportunities
                    <ArrowRight className="ml-2 h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Visual Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-[750px] lg:ml-auto select-none mt-8 lg:mt-0" 
              >
                {/* Floating Card - Optimized */}
                <div 
                  className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                >
                  <img
                    src="/images/oman_hero.png"
                    alt="Muscat skyline"
                    className="h-[400px] w-full object-cover md:h-[550px] brightness-110"
                  />
                  {/* Subtle overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Badge - Simplified */}
                <div 
                  className="absolute bottom-6 -right-4 sm:-right-8 rounded-2xl border border-white/10 bg-[#0B1020]/90 px-6 py-4 backdrop-blur-xl shadow-xl z-30 font-sans"
                >
                  <p className="text-[42px] font-bold leading-none text-white tracking-tighter">2040</p>
                  <p className="mt-2 text-[12px] font-semibold text-muted-foreground tracking-widest uppercase flex items-center gap-2">
                    Vision Target
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </p>
                </div>
              </motion.div>
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

