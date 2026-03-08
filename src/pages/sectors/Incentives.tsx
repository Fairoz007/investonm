import { motion } from 'framer-motion';
import { ArrowRight, Percent, Building2, Users, Zap, Briefcase, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

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
    description: 'Streamlined processes for bringing talent to Saudi Arabia.',
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
    description: 'Incentives for multinational companies establishing their regional headquarters in Saudi Arabia.',
    benefits: ['10-year tax incentives', 'Visa facilitation', 'Regulatory support', 'MISA partnership'],
  },
  {
    name: 'Shareek Program',
    description: 'Strategic partnerships between the government and private sector for large-scale projects.',
    benefits: ['Co-investment opportunities', 'Risk sharing', 'Government support', 'Long-term contracts'],
  },
  {
    name: 'Global Supply Chain Resilience Initiative',
    description: 'Support for companies establishing manufacturing and supply chain operations in the Kingdom.',
    benefits: ['Financial incentives', 'Land allocation', 'Regulatory support', 'Market access'],
  },
  {
    name: 'Startup Saudi',
    description: 'Comprehensive support ecosystem for entrepreneurs and startups.',
    benefits: ['Funding access', 'Mentorship programs', 'Incubator support', 'Networking opportunities'],
  },
];

const eligibilityCriteria = [
  'Alignment with Vision 2030 objectives',
  'Minimum investment thresholds',
  'Job creation commitments',
  'Technology transfer requirements',
  'Local content development',
  'Environmental compliance',
];

export default function Incentives() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Sectors & Opportunities</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Incentives</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Investment Incentives
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Comprehensive incentive packages designed to maximize returns and support 
                your business growth in Saudi Arabia.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Incentive Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Incentive Categories
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              A range of incentives tailored to support different aspects of your investment.
            </p>
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
              Special Programs
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Targeted incentive programs for specific investment types and sectors.
            </p>
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
                Eligibility Criteria
              </h2>
              <p className="text-white/60 text-center mb-8">
                Incentives are available to qualifying investments that meet the following criteria:
              </p>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Maximize Your Investment Returns
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Our incentive specialists can help you identify and access the incentives 
                that best match your investment profile.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Apply for Incentives</button>
                <button className="btn-secondary">Schedule a Consultation</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
