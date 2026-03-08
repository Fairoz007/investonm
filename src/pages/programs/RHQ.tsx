import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Percent, Users, Globe, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";

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
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium"> {t('rhq.text.1')} </span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60"> {t('rhq.text.2')} </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                 {t('rhq.text.3')} </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                 {t('rhq.text.4')} </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
               {t('rhq.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
               {t('rhq.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 text-center h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm">{benefit.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">
                 {t('rhq.text.7')} </h2>
              <p className="text-white/60 mb-8">
                 {t('rhq.text.8')} </p>
              <div className="space-y-4">
                {eligibilityCriteria.map((criterion) => (
                  <div key={criterion} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{criterion}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-bold text-white mb-6">
                 {t('rhq.text.9')} </h2>
              <p className="text-white/60 mb-8">
                 {t('rhq.text.10')} </p>
              <div className="space-y-4">
                {approvedActivities.map((activity) => (
                  <div key={activity} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{activity}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Riyadh */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
               {t('rhq.text.11')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
               {t('rhq.text.12')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2"> {t('rhq.text.13')} </div>
                <div className="text-white/60"> {t('rhq.text.14')} </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2"> {t('rhq.text.15')} </div>
                <div className="text-white/60"> {t('rhq.text.16')} </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2"> {t('rhq.text.17')} </div>
                <div className="text-white/60"> {t('rhq.text.18')} </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                 {t('rhq.text.19')} </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                 {t('rhq.text.20')} </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary"> {t('rhq.text.21')} </button>
                <button className="btn-secondary"> {t('rhq.text.22')} </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
