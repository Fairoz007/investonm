import { motion } from 'framer-motion';
import { TrendingUp, Users, Cpu, Building2, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const reasons = [
 {
 icon: Users,
 title: 'Transformational Vision, Young Nation',
 stat: '70%',
 description: 'of Oman Population under 35, digitally native, globally connected',
 gradient: ' ',
 },
 {
 icon: Award,
 title: 'A Trusted and Stable Destination',
 stat: '#1',
 description: 'Recognized as #1 in FDI Destination in MENA',
 gradient: '(--primary)] (--primary-light)]',
 },
 {
 icon: Building2,
 title: 'World Class Services and Infrastructure',
 stat: 'Top 10',
 description: 'Global Excellence in Maritime, Education, Healthcare, and Logistics',
 gradient: ' ',
 },
 {
 icon: Cpu,
 title: 'State-of-the-Art Digital Infrastructure',
 stat: '#2',
 description: 'Ranked Globally #2 in Digital Government Maturity Index (DGOI)',
 gradient: '(--primary)] (--primary-dark)]',
 },
 {
 icon: TrendingUp,
 title: 'Large Scale Transformational Investments',
 stat: '$3T+',
 description: 'USD 3T+ in investable opportunities across sectors',
 gradient: ' (--primary)]',
 },
];

const additionalBenefits = [
 {
 title: 'Strategic Location',
 description: 'Gateway between Asia, Europe, and Africa with access to 3 continents within 6 hours flight time.',
 },
 {
 title: 'Economic Stability',
 description: 'Strong sovereign ratings and a stable macroeconomic environment with low inflation.',
 },
 {
 title: 'Business-Friendly Environment',
 description: 'Streamlined regulations, 100% foreign ownership in most sectors, and competitive tax rates.',
 },
 {
 title: 'Talent Pool',
 description: 'Young, educated workforce with increasing female participation in the labor market.',
 },
 {
 title: 'Quality of Life',
 description: 'World-class healthcare, education, entertainment, and lifestyle amenities.',
 },
 {
 title: 'Government Support',
 description: 'Dedicated support through Invest Oman and other government entities to facilitate investment.',
 },
];

export default function WhyInvest() {
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
 <span>{t('whyinvest.text.2')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
>
 {t('whyinvest.text.3')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
>
 {t('whyinvest.text.4')}
 </motion.p>
 </ScrollReveal>
 </div>
 </section>

 {/* Top 5 Reasons */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-12 text-center">
 {t('whyinvest.text.5')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {reasons.map((reason, index) => (
 <ScrollReveal key={reason.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -8 }}
 className={`h-full p-8 rounded-2xl ${reason.gradient} relative overflow-hidden`}
>
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />

 <div className="relative z-10">
 <div className="text-5xl font-bold text-white mb-2">{reason.stat}</div>
 <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
 <p className="text-white/80">{reason.description}</p>
 </div>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Additional Benefits */}
 <section className="section-padding bg-dark-light/30">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-12 text-center">
 {t('whyinvest.text.6')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {additionalBenefits.map((benefit, index) => (
 <ScrollReveal key={benefit.title} delay={index * 0.1}>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 h-full">
 <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
 <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
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
