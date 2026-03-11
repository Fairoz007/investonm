import { motion } from 'framer-motion';
import { Percent, Building2, Users, Zap, Briefcase, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const incentiveCategories = [
  {
    icon: Percent,
    title: 'Tax Incentives',
    description: 'Competitive tax framework designed to maximize investor returns.',
    benefits: [
      '0% personal income tax',
      '20% corporate tax rate',
      'Tax holidays for qualifying projects',
      'No withholding tax on dividends',
    ],
  },
  {
    icon: Building2,
    title: 'Real Estate Support',
    description: 'Comprehensive support for land acquisition and facility development.',
    benefits: [
      'Land allocation at competitive rates',
      'Ready-built facility options',
      'Industrial zone access',
      'Infrastructure support',
    ],
  },
  {
    icon: Users,
    title: 'Visa & Immigration',
    description: 'Streamlined processes for bringing talent to Oman.',
    benefits: [
      'Investor visa facilitation',
      'Work permit support',
      'Premium Residency options',
      'Family visa sponsorship',
    ],
  },
  {
    icon: Zap,
    title: 'Energy Subsidies',
    description: 'Competitive energy pricing for industrial and manufacturing operations.',
    benefits: [
      'Subsidized electricity rates',
      'Natural gas at competitive prices',
      'Renewable energy incentives',
      'Energy efficiency support',
    ],
  },
  {
    icon: Briefcase,
    title: 'Financial Support',
    description: 'Access to financing and funding programs for qualifying investments.',
    benefits: [
      'Soft loans for eligible projects',
      'Export financing support',
      'SME funding programs',
      'Venture capital access',
    ],
  },
];

const specialPrograms = [
  {
    name: 'Regional Headquarters Program',
    description: 'Incentives for multinational companies establishing their regional headquarters in Oman.',
    benefits: ['10-year tax incentives', 'Visa facilitation', 'Regulatory support', 'Invest Oman partnership'],
  },
  {
    name: 'Shareek Program',
    description: 'Strategic partnerships between the government and private sector for large-scale projects.',
    benefits: ['Co-investment opportunities', 'Risk sharing', 'Government support', 'Long-term contracts'],
  },
  {
    name: 'Global Supply Chain Resilience Initiative',
    description: 'Support for companies establishing manufacturing and supply chain operations in the Sultanate.',
    benefits: ['Financial incentives', 'Land allocation', 'Regulatory support', 'Market access'],
  },
  {
    name: 'Startup Oman',
    description: 'Comprehensive support ecosystem for entrepreneurs and startups.',
    benefits: ['Funding access', 'Mentorship programs', 'Incubator support', 'Networking opportunities'],
  },
];

const eligibilityCriteria = [
  'Alignment with Oman Vision 2040 objectives',
  'Minimum investment thresholds',
  'Job creation commitments',
  'Technology transfer requirements',
  'Local content development',
  'Environmental compliance',
];

export default function Incentives() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-[var(--text-paragraph)] pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/oman_hero.png')] bg-cover bg-center opacity-10" />
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
              <span>{t('incentives.text.2')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
            >
              {t('incentives.text.3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
            >
              {t('incentives.text.4')}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Incentive Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('incentives.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('incentives.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incentiveCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('incentives.text.7')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('incentives.text.8')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {specialPrograms.map((program, index) => (
              <ScrollReveal key={program.name} delay={index * 0.1}>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{program.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {t('incentives.text.9')} </h2>
              <p className="text-white/60 text-center mb-8">
                {t('incentives.text.10')} </p>
              <div className="grid md:grid-cols-2 gap-4">
                {eligibilityCriteria.map((criterion) => (
                  <div key={criterion} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/80">{criterion}</span>
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
