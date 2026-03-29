import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { WHY_INVEST_CARDS } from '@/lib/constants';

export const WhyInvestSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const totalCards = WHY_INVEST_CARDS.length;

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalCards);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, totalCards]);

  // Sync scroll position when activeIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('[data-card]')?.clientWidth || 0;
      const gap = 32; // md:gap-8 = 32px
      
      container.scrollTo({
        left: activeIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const nextCard = () => setActiveIndex((current) => (current + 1) % totalCards);
  const prevCard = () => setActiveIndex((current) => (current - 1 + totalCards) % totalCards);

  return (
    <section id="why-invest" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background Enhancements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400/90 uppercase mb-4 sm:mb-6 backdrop-blur-sm"
              >
                Sultanate of Oman
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[1] text-balance"
              >
                Why Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">Oman</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-slate-400 font-medium leading-relaxed opacity-80"
              >
                Discover the unique advantages and world-class opportunities that make the Sultanate a premier destination for global capital.
              </motion.p>
            </ScrollReveal>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prevCard}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={nextCard}
              className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300 backdrop-blur-md group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-10 sm:pb-12"
          >
            {WHY_INVEST_CARDS.map((card, index) => (
              <div 
                key={card.id}
                data-card
                className="flex-shrink-0 w-[85vw] sm:w-[calc(70%-10px)] md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] snap-start h-full"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -12 }}
                  className="group/card relative h-full flex flex-col rounded-[2.5rem] bg-[#0A0F1E]/40 border border-white/5 backdrop-blur-2xl overflow-hidden cursor-pointer p-1"
                >
                  {/* Premium Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full bg-[#0A0F1E]/80 rounded-[2.4rem] overflow-hidden min-h-[500px]">
                    {/* Top Visual Area */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 group-hover/card:opacity-80 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-300 backdrop-blur-md">
                          {card.stat}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-8 pt-2 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover/card:text-blue-300 transition-colors duration-300 line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 opacity-80 group-hover/card:opacity-100 transition-opacity duration-300 flex-1">
                        {card.description}
                      </p>

                      {/* Footer / CTA */}
                      <div className="mt-auto flex items-center justify-between group/cta">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-400 group-hover/card:text-blue-200 transition-colors duration-300">
                          Explore Opportunity
                        </span>
                        <div className="w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center group-hover/card:bg-blue-500/10 group-hover/card:border-blue-400/30 transition-all duration-300">
                          <ArrowRight className="w-5 h-5 text-blue-400 group-hover/card:translate-x-1.5 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Inner Glow / Ambient Lighting */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {WHY_INVEST_CARDS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === idx ? 'w-12 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]' : 'w-3 bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
