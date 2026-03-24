import { motion } from 'framer-motion';
import { Lightbulb, Users, DollarSign, Building2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const supportAreas = [
 {
 icon: DollarSign,
 title: 'Funding Access',
 description: 'Connect with venture capital firms, angel investors, and government funding programs.',
 features: ['Venture capital matching', 'Government grants', 'Seed funding', 'Series A-B support'],
 },
 {
 icon: Building2,
 title: 'Incubators & Accelerators',
 description: 'Access world-class incubation and acceleration programs across the Sultanate.',
 features: ['Co-working spaces', 'Mentorship programs', 'Networking events', 'Demo days'],
 },
 {
 icon: Users,
 title: 'Talent & Hiring',
 description: 'Find and hire top talent from Oman and around the world.',
 features: ['Talent matching', 'Visa support', 'Training programs', 'University partnerships'],
 },
 {
 icon: Lightbulb,
 title: 'Business Development',
 description: 'Get support for growing your customer base and expanding your market reach.',
 features: ['Market access', 'B2B connections', 'Export support', 'Partnership facilitation'],
 },
];

const ecosystemStats = [
 { value: '1,700+', label: 'Active Startups' },
 { value: '$1.2B', label: 'VC Investment in 2024' },
 { value: '50+', label: 'Incubators & Accelerators' },
 { value: '15', label: 'Unicorns' },
];

const successStories = [
 {
 name: 'Tamara',
 sector: 'Fintech',
 description: 'Buy now, pay later platform that has revolutionized consumer financing in the region.',
 },
 {
 name: 'Jahez',
 sector: 'Food Delivery',
 description: 'Leading food delivery platform that went public with a successful IPO.',
 },
 {
 name: 'Sary',
 sector: 'B2B Marketplace',
 description: 'Digital marketplace transforming the grocery supply chain.',
 },
 {
 name: 'Stc Pay',
 sector: 'Fintech',
 description: 'Digital wallet that became the first fintech unicorn in Oman.',
 },
];

export default function StartupOman() {
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

 {/* Stats */}
 <section className="py-16 border-y border-black/5 bg-white/50">
 <div className="container-custom">
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
 {ecosystemStats.map((stat, index) => (
 <ScrollReveal key={stat.label} delay={index * 0.1}>
 <div className="text-left">
 <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
 <div className="text-[var(--text-paragraph)] text-sm font-medium uppercase tracking-wider opacity-60">{stat.label}</div>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Support Areas */}
 <section className="section-padding bg-secondary text-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-white mb-4 text-left">
 {t('startupoman.text.5')} </h2>
 <p className="text-white/70 text-left mb-12 max-w-2xl">
 {t('startupoman.text.6')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 gap-8">
 {supportAreas.map((area, index) => (
 <ScrollReveal key={area.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -5 }}
 className="bg-white/5 border border-white/10 p-10 rounded-2xl h-full transition-all duration-300 hover:bg-white/10 group text-left"
>
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-8 transition-transform duration-300 group-">
 <area.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
 <p className="text-white/60 text-base mb-8 leading-relaxed">{area.description}</p>
 <div className="flex flex-wrap gap-2">
 {area.features.map((feature) => (
 <span
 key={feature}
 className="px-4 py-1 bg-white/5 text-white/70 text-sm rounded-full border border-white/10"
>
 {feature}
 </span>
 ))}
 </div>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Success Stories */}
 <section className="section-padding bg-dark-light/30">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-4 text-center">
 {t('startupoman.text.7')} </h2>
 <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
 {t('startupoman.text.8')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {successStories.map((story, index) => (
 <ScrollReveal key={story.name} delay={index * 0.1}>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 h-full">
 <div className="text-sm text-primary mb-2">{story.sector}</div>
 <h3 className="text-xl font-bold text-white mb-3">{story.name}</h3>
 <p className="text-white/60 text-sm">{story.description}</p>
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
