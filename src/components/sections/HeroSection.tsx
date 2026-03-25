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
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-screen">
      <HeroSlider>
        <div className="container-custom h-full flex flex-col justify-end pb-48 relative z-20 mx-auto max-w-[1400px] px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left max-w-[900px]"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex rounded-full border border-white/[0.15] bg-white/[0.05] backdrop-blur-md px-5 py-2 text-sm font-black tracking-[0.3em] text-white uppercase shadow-2xl">
                Oman Vision 2040
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-black text-white mb-10 leading-[0.9] tracking-tighter"
            >
              Invest in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#8B5CF6] to-pink-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse-slow">
                Oman
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-3xl text-slate-300 mb-14 max-w-[800px] leading-tight font-medium opacity-90 tracking-tight"
            >
              Driven by <span className="text-white font-bold underline decoration-blue-500/50 decoration-2 underline-offset-4">world class</span> opportunities, <br className="hidden md:block" /> powered by talent, and designed for limitless scale.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-8 w-full lg:flex-row"
            >
              {/* Search Bar - Premium Glass styling via wrapper if needed or inside component */}
              <div className="w-full lg:w-[480px]">
                <SearchBar placeholder="I am looking for..." />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-6 w-full lg:w-auto">
                <motion.button 
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/10 bg-white/[0.05] text-white hover:bg-blue-600 transition-all duration-500 font-black text-xs tracking-[0.2em] uppercase w-full sm:w-auto min-h-[56px] cursor-pointer backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] group"
                >
                  Explore Sectors
                  <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
                <motion.button 
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/10 bg-white/[0.05] text-white hover:bg-[#8B5CF6] transition-all duration-500 font-black text-xs tracking-[0.2em] uppercase w-full sm:w-auto min-h-[56px] cursor-pointer backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] group"
                >
                  E-Services
                  <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>

              {/* Media Controls */}
              <div className="flex items-center gap-4 w-full justify-center lg:justify-start mt-6 lg:mt-0 lg:ml-auto">
                <button className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-500 flex items-center justify-center cursor-pointer backdrop-blur-lg group">
                  <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-500 flex items-center justify-center cursor-pointer backdrop-blur-lg group">
                  <Pause className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all duration-500 flex items-center justify-center cursor-pointer backdrop-blur-lg group">
                  <Maximize className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Explore CTA */}
        <div className="absolute bottom-20 right-20 z-30 hidden xl:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="relative w-32 h-32 flex items-center justify-center rounded-full border border-white/10 cursor-pointer transition-transform duration-700 hover:scale-110 group"
          >
            <span className="text-[11px] font-black text-white text-center leading-[1.3] tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              Scroll<br />Explore
            </span>
            {/* Spinning circle decoration */}
            <svg className="absolute inset-[-12px] w-[calc(100%+24px)] h-[calc(100%+24px)] animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500 opacity-20 group-hover:opacity-60 transition-opacity" strokeDasharray="8 12" />
            </svg>
            <svg className="absolute inset-[-18px] w-[calc(100%+36px)] h-[calc(100%+36px)] animate-[spin_30s_linear_infinite_reverse]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500 opacity-10 group-hover:opacity-40 transition-opacity" strokeDasharray="4 20" />
            </svg>
          </motion.div>
        </div>
      </HeroSlider>

      {/* Cinematic horizontal light streak near the top */}
      <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent z-10" />
      <div className="absolute top-[15.2%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
    </section>
  );
};
