import { motion } from 'framer-motion';
import { CheckCircle2, Percent, Users, Globe, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const benefits = [
 {
 icon: Percent,
 title: 'Tax Incentives',
 description: '10-year exemption from corporate income tax and withholding tax on approved activities.',
 },
 {
 icon: Users,
 title: 'Visa Facilitation',
 description: 'Expedited visa processing for employees and their families.',
 },
 {
 icon: Globe,
 title: 'Regulatory Support',
 description: 'Dedicated support for navigating Oman regulations and compliance.',
 },
 {
 icon: Clock,
 title: 'Fast-Track Setup',
 description: 'Streamlined processes for rapid establishment of your headquarters.',
 },
];

const eligibilityCriteria = [
 'Multinational company with operations in at least two countries',
 'Commitment to establish regional headquarters in Riyadh',
 'Minimum number of employees at the RHQ',
 'Strategic decision-making functions at the RHQ',
 'Compliance with Omanzation requirements',
];

const approvedActivities = [
 'Strategic direction and management',
 'Financial management and budgeting',
 'Marketing and brand management',
 'Human resources management',
 'Legal and compliance oversight',
 'Research and development coordination',
 'Supply chain management',
 'Technical support and quality control',
];

export default function RHQ() {
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
 <span>{t('rhq.text.2')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
>
 {t('rhq.text.3')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[18px] text-white leading-relaxed max-w-2xl"
>
 {t('rhq.text.4')}
 </motion.p>
 </ScrollReveal>
 </div>
 </section>

 {/* Benefits */}
 <section className="section-padding bg-secondary text-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-white mb-4 text-left">
 {t('rhq.text.5')} </h2>
 <p className="text-white/70 text-left mb-12 max-w-2xl">
 {t('rhq.text.6')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {benefits.map((benefit, index) => (
 <ScrollReveal key={benefit.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -5 }}
 className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full transition-all duration-300 hover:bg-white/10 group text-left"
>
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6 transition-transform duration-300 group-">
 <benefit.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
 <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Eligibility */}
 <section className="section-padding bg-background">
 <div className="container-custom">
 <div className="grid lg:grid-cols-2 gap-16">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-6">
 {t('rhq.text.7')} </h2>
 <p className="text-[var(--text-paragraph)] mb-8 text-lg">
 {t('rhq.text.8')} </p>
 <div className="space-y-4">
 {eligibilityCriteria.map((criterion) => (
 <div key={criterion} className="flex items-start gap-4 group">
 <div className="p-1 bg-primary/10 rounded-full mt-1 group-hover:bg-primary/20 transition-colors">
 <CheckCircle2 className="w-4 h-4 text-primary" />
 </div>
 <span className="text-[var(--text-paragraph)] text-base">{criterion}</span>
 </div>
 ))}
 </div>
 </ScrollReveal>

 <ScrollReveal delay={0.2}>
 <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-6">
 {t('rhq.text.9')} </h2>
 <p className="text-[var(--text-paragraph)] mb-8 text-lg">
 {t('rhq.text.10')} </p>
 <div className="grid sm:grid-cols-2 gap-4">
 {approvedActivities.map((activity) => (
 <div key={activity} className="flex items-center gap-3 p-4 bg-white border border-black/5 rounded-xl hover:border-primary/20 transition-colors shadow-sm">
 <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]" />
 <span className="text-[var(--text-paragraph)] text-sm font-medium">{activity}</span>
 </div>
 ))}
 </div>
 </ScrollReveal>
 </div>
 </div>
 </section>

 {/* Why Riyadh */}
 <section className="section-padding bg-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-4 text-center">
 {t('rhq.text.11')} </h2>
 <p className="text-[var(--text-paragraph)] text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
 {t('rhq.text.12')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-3 gap-8">
 <ScrollReveal delay={0}>
 <div className="p-8 text-center bg-primary/5 rounded-3xl border border-primary/10 hover:bg-primary/10 transition-colors">
 <div className="text-5xl font-bold text-primary mb-3 tracking-tighter"> {t('rhq.text.13')} </div>
 <div className="text-[var(--text-paragraph)] font-medium uppercase tracking-widest text-xs opacity-60"> {t('rhq.text.14')} </div>
 </div>
 </ScrollReveal>
 <ScrollReveal delay={0.1}>
 <div className="p-8 text-center bg-primary/5 rounded-3xl border border-primary/10 hover:bg-primary/10 transition-colors">
 <div className="text-5xl font-bold text-primary mb-3 tracking-tighter"> {t('rhq.text.15')} </div>
 <div className="text-[var(--text-paragraph)] font-medium uppercase tracking-widest text-xs opacity-60"> {t('rhq.text.16')} </div>
 </div>
 </ScrollReveal>
 <ScrollReveal delay={0.2}>
 <div className="p-8 text-center bg-primary/5 rounded-3xl border border-primary/10 hover:bg-primary/10 transition-colors">
 <div className="text-5xl font-bold text-primary mb-3 tracking-tighter"> {t('rhq.text.17')} </div>
 <div className="text-[var(--text-paragraph)] font-medium uppercase tracking-widest text-xs opacity-60"> {t('rhq.text.18')} </div>
 </div>
 </ScrollReveal>
 </div>
 </div>
 </section>

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>
 );
}
