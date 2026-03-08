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
    <section className="relative">
      <HeroSlider>
        <div className="container-custom h-full flex flex-col justify-end pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left max-w-[800px]"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-wide"
            >
              Invest in Oman
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/90 mb-10 max-w-[600px] leading-relaxed"
            >
              Driven by world class opportunities, powered by talent, and designed
              for limitless scale, Oman is redefining what nations can build.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center gap-4"
            >
              {/* Search Bar */}
              <div className="w-full lg:w-[400px]">
                <SearchBar placeholder="I am looking for..." />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition-all font-medium text-xs tracking-wider">
                  Explore Sectors
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition-all font-medium text-xs tracking-wider">
                  E-Services
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition-all font-medium text-xs tracking-wider">
                  Contact Us
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>

                <div className="flex items-center gap-2 ml-2">
                  <button className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all">
                    <Pause className="w-4 h-4 fill-current" />
                  </button>
                  <button className="p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll to Explore CTA */}
        <div className="absolute bottom-12 right-12 z-20">
          <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-white cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="text-[11px] font-bold text-white text-center leading-[1.1] tracking-wider">
              Scroll to<br />Explore
            </span>
            {/* Outline spinning circle if any */}
            <svg className="absolute inset-[-8px] w-[calc(100%+16px)] h-[calc(100%+16px)] animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/30 stroke-white/30" />
            </svg>
          </div>
        </div>
      </HeroSlider>
    </section>
  );
};
