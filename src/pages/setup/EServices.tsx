import { motion } from 'framer-motion';
import { FileText, CheckCircle2, Clock, Shield, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const eServices = [
 {
 icon: FileText,
 title: 'Investment License Application',
 description: 'Apply for and manage your investment license entirely online.',
 features: ['Online application', 'Document upload', 'Status tracking', 'Digital license issuance'],
 },
 {
 icon: CheckCircle2,
 title: 'License Renewal',
 description: 'Renew your investment license with a few simple clicks.',
 features: ['Automated reminders', 'One-click renewal', 'Payment integration', 'Instant confirmation'],
 },
 {
 icon: Globe,
 title: 'Visa Services',
 description: 'Apply for investor visas and work permits online.',
 features: ['Visa applications', 'Work permits', 'Family visas', 'Status tracking'],
 },
 {
 icon: Shield,
 title: 'Compliance Management',
 description: 'Manage regulatory compliance and submit required reports.',
 features: ['Compliance tracking', 'Report submission', 'Deadline alerts', 'Document management'],
 },
];

const benefits = [
 {
 icon: Clock,
 title: '24/7 Availability',
 description: 'Access services anytime, anywhere, without waiting for business hours.',
 },
 {
 icon: CheckCircle2,
 title: 'Faster Processing',
 description: 'Digital workflows reduce processing times significantly.',
 },
 {
 icon: Shield,
 title: 'Secure & Reliable',
 description: 'Bank-grade security ensures your data is always protected.',
 },
 {
 icon: Globe,
 title: 'Multi-Language Support',
 description: 'Services available in multiple languages for global accessibility.',
 },
];

const quickLinks = [
 { name: 'Apply for Investment License', description: 'Start your investment journey' },
 { name: 'Renew Your License', description: 'Keep your license up to date' },
 { name: 'Apply for Visa', description: 'Investor and work visa applications' },
 { name: 'Track Application Status', description: 'Check the status of your applications' },
 { name: 'Submit Compliance Reports', description: 'Meet regulatory requirements' },
 { name: 'Update Company Information', description: 'Keep your records current' },
];

export default function EServices() {
 const { t } = useTranslation();
 return (
 <div className="bg-background min-h-screen text-[var(--text-paragraph)] pt-24">
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
 <span>{t('eservices.text.2')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
>
 {t('eservices.text.3')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
>
 {t('eservices.text.4')}
 </motion.p>
 </ScrollReveal>
 </div>
 </section>

 {/* E-Services Grid */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-4 text-center">
 {t('eservices.text.5')} </h2>
 <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
 {t('eservices.text.6')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 gap-6">
 {eServices.map((service, index) => (
 <ScrollReveal key={service.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -4 }}
 className="bg-card border border-border rounded-lg p-6 shadow-sm p-8 h-full"
>
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
 <service.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
 <p className="text-white/60 mb-6">{service.description}</p>
 <div className="flex flex-wrap gap-2">
 {service.features.map((feature) => (
 <span
 key={feature}
 className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full"
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

 {/* Benefits */}
 <section className="section-padding bg-dark-light/30">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-4 text-center">
 {t('eservices.text.7')} </h2>
 <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
 {t('eservices.text.8')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {benefits.map((benefit, index) => (
 <ScrollReveal key={benefit.title} delay={index * 0.1}>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 text-center h-full">
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mx-auto mb-4">
 <benefit.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
 <p className="text-white/60 text-sm">{benefit.description}</p>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Quick Links */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-4 text-center">
 {t('eservices.text.9')} </h2>
 <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
 {t('eservices.text.10')} </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
 {quickLinks.map((link, index) => (
 <ScrollReveal key={link.name} delay={index * 0.05}>
 <motion.button
 whileHover={{ scale: 1.02 }}
 className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 w-full text-left hover:bg-white/10 transition-colors"
>
 <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
 <p className="text-white/50 text-sm">{link.description}</p>
 </motion.button>
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
