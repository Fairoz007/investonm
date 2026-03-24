import { motion } from 'framer-motion';
import { HandshakeIcon, Building2, TrendingUp, Target } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const programFeatures = [
 {
 icon: HandshakeIcon,
 title: 'Strategic Partnership',
 description: 'Direct partnership with the Oman government for large-scale projects.',
 },
 {
 icon: Building2,
 title: 'Co-Investment',
 description: 'Government co-investment to share risks and accelerate project delivery.',
 },
 {
 icon: TrendingUp,
 title: 'Long-Term Contracts',
 description: 'Secure long-term offtake agreements and revenue streams.',
 },
 {
 icon: Target,
 title: 'Strategic Alignment',
 description: 'Projects aligned with Oman Vision 2040 national priorities.',
 },
];

const targetAreas = [
 {
 name: 'Energy & Utilities',
 description: 'Power generation, water desalination, and renewable energy projects.',
 examples: ['Solar power plants', 'Water desalination', 'Smart grids'],
 },
 {
 name: 'Transport & Logistics',
 description: 'Infrastructure projects supporting economic connectivity.',
 examples: ['Rail networks', 'Port expansion', 'Logistics hubs'],
 },
 {
 name: 'Healthcare & Education',
 description: 'Social infrastructure to support population growth.',
 examples: ['Hospital construction', 'Schools & universities', 'Research centers'],
 },
 {
 name: 'Digital Infrastructure',
 description: 'Technology infrastructure for the digital economy.',
 examples: ['Data centers', '5G networks', 'Cloud infrastructure'],
 },
 {
 name: 'Industrial Zones',
 description: 'Manufacturing and industrial facilities.',
 examples: ['Industrial cities', 'Manufacturing plants', 'Technology parks'],
 },
 {
 name: 'Tourism & Entertainment',
 description: 'Projects supporting the tourism and entertainment sectors.',
 examples: ['Hotels & resorts', 'Entertainment venues', 'Cultural attractions'],
 },
];

const partnershipProcess = [
 {
 step: '1',
 title: 'Project Proposal',
 description: 'Submit your project proposal for evaluation and alignment assessment.',
 },
 {
 step: '2',
 title: 'Feasibility Study',
 description: 'Joint feasibility study to assess project viability and structure.',
 },
 {
 step: '3',
 title: 'Partnership Agreement',
 description: 'Negotiate and sign the partnership agreement with the government.',
 },
 {
 step: '4',
 title: 'Project Execution',
 description: 'Execute the project with ongoing government support and oversight.',
 },
];

export default function Shareek() {
 const { t } = useTranslation();
 return (
 <div className="min-h-screen bg-background text-[var(--text-paragraph)] pt-24">
 {/* Hero Section */}
 <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-10" />
 <div className="absolute inset-0 hero-gradient opacity-90" />
 </div>
 <div className="container-custom relative z-10 text-left w-full text-white">
 <ScrollReveal>
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="flex items-center justify-start gap-2 text-[12px] font-medium uppercase tracking-wider opacity-70 mb-[10px]"
>
 <span>Home</span>
 <span className="opacity-40">/</span>
 <span>{t('startupoman.text.2')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
>
 {t('startupoman.text.3')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[18px] text-white leading-relaxed max-w-2xl"
>
 {t('startupoman.text.4')}
 </motion.p>
 </ScrollReveal>
 </div>
 </section>

 {/* Features */}
 <section className="section-padding bg-secondary text-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-white mb-4 text-left">
 {t('shareek.text.5')} </h2>
 <p className="text-white/70 text-left mb-12 max-w-2xl">
 {t('shareek.text.6')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {programFeatures.map((feature, index) => (
 <ScrollReveal key={feature.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -5 }}
 className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full transition-all duration-300 hover:bg-white/10 group text-left"
>
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6 transition-transform duration-300 group-">
 <feature.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
 <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Target Areas */}
 <section className="section-padding bg-background">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-4 text-left">
 {t('shareek.text.7')} </h2>
 <p className="text-[var(--text-paragraph)] text-left mb-12 max-w-2xl">
 {t('shareek.text.8')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {targetAreas.map((area, index) => (
 <ScrollReveal key={area.name} delay={index * 0.1}>
 <div className="bg-white border border-black/5 p-8 rounded-2xl shadow-sm transition-all duration-300 h-full">
 <h3 className="text-xl font-bold text-[var(--heading-main)] mb-3">{area.name}</h3>
 <p className="text-[var(--text-paragraph)] text-sm mb-6 leading-relaxed">{area.description}</p>
 <div className="flex flex-wrap gap-2">
 {area.examples.map((example) => (
 <span
 key={example}
 className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full"
>
 {example}
 </span>
 ))}
 </div>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Process */}
 <section className="section-padding bg-secondary text-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-white mb-4 text-left">
 {t('shareek.text.9')} </h2>
 <p className="text-white/70 text-left mb-12 max-w-2xl">
 {t('shareek.text.10')} </p>
 </ScrollReveal>

 <div className="max-w-4xl">
 {partnershipProcess.map((step, index) => (
 <ScrollReveal key={step.step} delay={index * 0.1}>
 <div className="flex gap-8 mb-12 last:mb-0 group">
 <div className="flex flex-col items-center">
 <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_color-mix(in_srgb,var(--primary),transparent_70%)] transition-transform duration-300 group-">
 <span className="text-white text-xl font-bold">{step.step}</span>
 </div>
 {index < partnershipProcess.length - 1 && (
 <div className="w-px h-full mt-4" />
 )}
 </div>
 <div className="pb-8">
 <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
 <p className="text-white/60 text-base leading-relaxed max-w-2xl">{step.description}</p>
 </div>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>
 );
}
