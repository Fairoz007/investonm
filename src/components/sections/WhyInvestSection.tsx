import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { WHY_INVEST_CARDS } from '@/lib/constants';

export const WhyInvestSection = () => {
  return (
    <section id="why-invest" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
            Key Advantages
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white mb-8 tracking-tighter leading-[1.05]">
            Why Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Oman</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            Discover the unique advantages that make the Sultanate a premier global investment destination.
          </p>
        </ScrollReveal>

        {/* Horizontal Scrolling Cards */}
        <div className="relative group/scroll">
          <StaggerContainer
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth"
            staggerDelay={0.1}
          >
            {WHY_INVEST_CARDS.map((card) => (
              <StaggerItem key={card.id}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 w-[320px] md:w-[380px] h-[440px] glass-card-premium rounded-[48px] p-10 
                             relative overflow-hidden cursor-pointer group/card snap-start select-none"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Stat Badge */}
                    {card.stat && (
                      <div className="mb-8">
                        <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[11px] font-black rounded-full uppercase tracking-[0.2em] shadow-[0_5px_15px_rgba(37,99,235,0.3)]">
                          {card.stat}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-3xl font-black text-white mb-6 leading-tight tracking-tight group-hover/card:text-blue-400 transition-colors duration-500">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-slate-400 leading-relaxed flex-1 font-bold opacity-80 group-hover/card:opacity-100 transition-opacity duration-500">
                      {card.description}
                    </p>

                    {/* Action */}
                    <div className="mt-8 flex items-center gap-3 text-blue-400 group-hover/card:text-blue-300 transition-all duration-300">
                      <span className="text-sm font-black uppercase tracking-[0.2em]">Learn more</span>
                      <div className="w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center group-hover/card:translate-x-2 group-hover/card:bg-blue-500/10 transition-all duration-500">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Indicators for scroll */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
             <div className="h-1 w-8 rounded-full bg-blue-500/40" />
             <div className="h-1 w-4 rounded-full bg-white/10" />
             <div className="h-1 w-4 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};
