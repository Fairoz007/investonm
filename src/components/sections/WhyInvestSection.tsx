import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';
import { WHY_INVEST_CARDS } from '@/lib/constants';

export const WhyInvestSection = () => {
 return (
 <section id="why-invest" className="py-24  relative overflow-hidden">
 <div className="container-custom relative z-10">
 {/* Section Header */}
 <ScrollReveal delay={0} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
 Why Invest in <span className="text-[var(--primary)]">Oman</span>
 </h2>
 <p className="text-white/60 text-lg font-sans">Top 5 Reasons to Invest</p>
 </ScrollReveal>

 {/* Horizontal Scrolling Cards */}
 <div className="relative">
 <StaggerContainer
 className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
 staggerDelay={0.1}
>
 {WHY_INVEST_CARDS.map((card) => (
 <StaggerItem key={card.id}>
 <motion.div
 whileHover={{ y: -10, scale: 1.02 }}
 transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
 className={`flex-shrink-0 w-[300px] md:w-[340px] h-[340px] rounded-[2.5rem] p-8 
 border border-white/10
 relative overflow-hidden cursor-pointer group snap-start `}
>
 {/* Background Decoration */}
 <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)]/20 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
 
 {/* Content */}
 <div className="relative z-10 h-full flex flex-col">
 {/* Stat Badge */}
 {card.stat && (
 <div className="mb-6">
 <span className="inline-block px-4 py-1.5 bg-[var(--primary)] text-white text-xs font-bold rounded-full font-sans uppercase tracking-[0.1em]">
 {card.stat}
 </span>
 </div>
 )}

 {/* Title */}
 <h3 className="text-2xl font-bold text-white mb-4 leading-tight font-sans">
 {card.title}
 </h3>

 {/* Description */}
 <p className="text-white/60 text-base leading-relaxed flex-1 font-sans">
 {card.description}
 </p>

 {/* Arrow Link */}
 <div className="mt-6 flex items-center gap-2 text-[var(--primary-light)] group-hover:text-[var(--primary)] transition-colors">
 <span className="text-sm font-bold font-sans uppercase tracking-widest">Learn more</span>
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </div>
 </div>
 </motion.div>
 </StaggerItem>
 ))}
 </StaggerContainer>

 {/* Gradient Fade Edges */}
 <div className="absolute left-0 top-0 bottom-4 w-12 pointer-events-none md:hidden" />
 <div className="absolute right-0 top-0 bottom-4 w-12 pointer-events-none md:hidden" />
 </div>
 </div>
 </section>

 );
};
