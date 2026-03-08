import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { WHY_INVEST_CARDS } from '@/lib/constants';

export const WhyInvestSection = () => {
  return (
    <section id="why-saudi" className="section-padding bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Invest in Saudi Arabia
          </h2>
          <p className="text-white/60 text-lg">Top 5 Reasons to Invest</p>
        </ScrollReveal>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <StaggerContainer 
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            staggerDelay={0.1}
          >
            {WHY_INVEST_CARDS.map((card) => (
              <StaggerItem key={card.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className={`flex-shrink-0 w-[280px] md:w-[320px] h-[280px] rounded-2xl p-6 
                              bg-gradient-to-br ${card.gradient} 
                              relative overflow-hidden cursor-pointer group snap-start`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Stat Badge */}
                    {card.stat && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                          {card.stat}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed flex-1">
                      {card.description}
                    </p>

                    {/* Arrow Link */}
                    <div className="mt-4 flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-dark to-transparent pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-dark to-transparent pointer-events-none md:hidden" />
        </div>
      </div>
    </section>
  );
};
