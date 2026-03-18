import { motion } from 'framer-motion';
import { ArrowUpRight, Volume2, Pause, Maximize } from 'lucide-react';
import { HeroSlider } from '@/components/shared/HeroSlider';
import { SearchBar } from '@/components/shared/SearchBar';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <HeroSlider>
        <div className="container-custom h-full flex flex-col justify-end pb-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left max-w-[850px]"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-sans"
            >
              Invest in <span className="text-[var(--primary)]">Oman</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl text-white/80 mb-10 max-w-[700px] leading-relaxed font-sans font-light"
            >
              Driven by world class opportunities, powered by talent, and designed
              for limitless scale, Oman is redefining what nations can build.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-6 w-full lg:flex-row"
            >
              {/* Search Bar */}
              <div className="w-full lg:w-[450px]">
                <SearchBar placeholder="I am looking for..." />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full lg:w-auto">
                <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all font-bold font-sans text-xs tracking-[0.1em] uppercase shadow-2xl w-full sm:w-auto min-h-[44px]">
                  Explore Sectors
                  <ArrowUpRight className="w-4 h-4 opacity-70 ml-2" />
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all font-bold font-sans text-xs tracking-[0.1em] uppercase shadow-2xl w-full sm:w-auto min-h-[44px]">
                  E-Services
                  <ArrowUpRight className="w-4 h-4 opacity-70 ml-2" />
                </button>
              </div>

              {/* Media Controls */}
              <div className="flex items-center gap-3 w-full justify-center lg:justify-start mt-4 lg:mt-0 pb-4">
                <button className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Volume2 className="w-4 h-4" />
                </button>
                <button className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Pause className="w-4 h-4 fill-current" />
                </button>
                <button className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Explore CTA */}
        <div className="absolute bottom-16 right-16 z-20 hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative w-24 h-24 flex items-center justify-center rounded-full border border-white/20 cursor-pointer hover:scale-110 transition-transform duration-500 backdrop-blur-sm group"
          >
            <span className="text-[10px] font-bold text-white text-center leading-[1.2] tracking-[0.2em] font-sans uppercase">
              Scroll<br />Explore
            </span>
            {/* Spinning circle decoration */}
            <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--primary)] opacity-40 group-hover:opacity-100 transition-opacity" strokeDasharray="10 10" />
            </svg>
          </motion.div>
        </div>
      </HeroSlider>
    </section>

  );
};
