import { motion } from 'framer-motion';
import { Factory, Globe, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const objectives = [
 {
 icon: Factory,
 title: 'Localize Manufacturing',
 description: 'Build local manufacturing capabilities to reduce dependency on imports.',
 },
 {
 icon: Globe,
 title: 'Strengthen Supply Chains',
 description: 'Create resilient supply chains that can withstand global disruptions.',
 },
 {
 icon: TrendingUp,
 title: 'Enable Exports',
 description: 'Position Oman as a global export hub for key industries.',
 },
 {
 icon: Shield,
 title: 'Ensure Security',
 description: 'Secure critical supply chains for essential goods and services.',
 },
];

const targetSectors = [
 {
 name: 'Pharmaceuticals & Medical Devices',
 opportunities: ['Drug manufacturing', 'Medical equipment', 'Vaccine production', 'R&D centers'],
 },
 {
 name: 'Automotive & Aerospace',
 opportunities: ['Vehicle assembly', 'Aerospace components', 'EV manufacturing', 'Parts production'],
 },
 {
 name: 'Food & Agriculture',
 opportunities: ['Food processing', 'Agricultural technology', 'Aquaculture', 'Dairy production'],
 },
 {
 name: 'Building Materials',
 opportunities: ['Steel production', 'Cement manufacturing', 'Construction materials', 'Prefab solutions'],
 },
 {
 name: 'Chemicals & Plastics',
 opportunities: ['Petrochemicals', 'Specialty chemicals', 'Plastic products', 'Fertilizers'],
 },
 {
 name: 'Electronics & Technology',
 opportunities: ['Semiconductor assembly', 'Consumer electronics', 'Telecom equipment', 'Data centers'],
 },
];

const incentives = [
 'Financial support for capital investments',
 'Subsidized land and utilities',
 'Tax incentives and exemptions',
 'Fast-track regulatory approvals',
 'Local content certification benefits',
 'Export financing support',
 'R&D funding and support',
 'Training and workforce development',
];

export default function GSCRI() {
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
 <span>{t('gscri.text.2')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
>
 {t('gscri.text.3')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[18px] text-white leading-relaxed max-w-2xl"
>
 {t('gscri.text.4')}
 </motion.p>
 </ScrollReveal>
 </div>
 </section>

 {/* Objectives */}
 <section className="section-padding bg-secondary text-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-white mb-4 text-left">
 {t('gscri.text.5')} </h2>
 <p className="text-white/70 text-left mb-12 max-w-2xl">
 {t('gscri.text.6')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {objectives.map((objective, index) => (
 <ScrollReveal key={objective.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -5 }}
 className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full transition-all duration-300 hover:bg-white/10 group text-left"
>
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6 transition-transform duration-300 group-">
 <objective.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-lg font-bold text-white mb-3">{objective.title}</h3>
 <p className="text-white/60 text-sm leading-relaxed">{objective.description}</p>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Target Sectors */}
 <section className="section-padding bg-background">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-4 text-left">
 {t('gscri.text.7')} </h2>
 <p className="text-[var(--text-paragraph)] text-left mb-12 max-w-2xl">
 {t('gscri.text.8')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {targetSectors.map((sector, index) => (
 <ScrollReveal key={sector.name} delay={index * 0.1}>
 <div className="bg-white border border-black/5 p-8 rounded-2xl shadow-sm transition-all duration-300 h-full">
 <h3 className="text-xl font-bold text-[var(--heading-main)] mb-4">{sector.name}</h3>
 <div className="flex flex-wrap gap-2">
 {sector.opportunities.map((opp) => (
 <span
 key={opp}
 className="px-3 py-1.5 bg-primary/5 text-primary text-xs font-medium rounded-full"
>
 {opp}
 </span>
 ))}
 </div>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Incentives */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-8 max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-white mb-6 text-center">
 {t('gscri.text.9')} </h2>
 <p className="text-white/60 text-center mb-8">
 {t('gscri.text.10')} </p>
 <div className="grid md:grid-cols-2 gap-4">
 {incentives.map((incentive) => (
 <div key={incentive} className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
 <span className="text-white/80">{incentive}</span>
 </div>
 ))}
 </div>
 </div>
 </ScrollReveal>
 </div>
 </section>

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>
 );
}
