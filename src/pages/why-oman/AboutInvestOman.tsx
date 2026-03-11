import { motion } from 'framer-motion';
import { Target, Users, Globe, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const services = [
  {
    icon: Target,
    title: 'Investment Facilitation',
    description: 'Streamlined processes to help investors establish and grow their businesses in Oman.',
  },
  {
    icon: Users,
    title: 'Investor Support',
    description: 'Dedicated support teams providing guidance throughout your investment journey.',
  },
  {
    icon: Globe,
    title: 'Global Outreach',
    description: 'International offices and partnerships to connect investors with opportunities.',
  },
  {
    icon: Award,
    title: 'Incentive Programs',
    description: 'Access to various incentives and benefits for qualifying investments.',
  },
];

const milestones = [
  { year: '2000', event: 'SAGIA established as the investment authority' },
  { year: '2015', event: 'Launch of Oman Vision 2040 transformation plan' },
  { year: '2020', event: 'Rebranded as Ministry of Investment of Oman (Invest Oman)' },
  { year: '2021', event: 'Introduction of new investor services and digital platforms' },
  { year: '2023', event: 'Record-breaking FDI inflows achieved' },
  { year: '2024', event: 'Launch of MIZA integrated support platform' },
];

const stats = [
  { value: '24/7', label: 'Investor Support' },
  { value: '30+', label: 'Global Offices' },
  { value: '100%', label: 'Digital Services' },
  { value: '<24h', label: 'Response Time' },
];

export default function AboutInvestOman() {
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
              <span>{t('nationalstrategy.text.2')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
            >
              {t('nationalstrategy.text.3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
            >
              {t('nationalstrategy.text.4')}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('aboutinvestoman.text.5')} </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  {t('aboutinvestoman.text.6')} </p>
                <p>
                  {t('aboutinvestoman.text.7')} </p>
                <p>
                  {t('aboutinvestoman.text.8')} </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6"> {t('aboutinvestoman.text.9')} </h3>
                <div className="space-y-6">
                  {services.map((service) => (
                    <div key={service.title} className="flex gap-4">
                      <div className="p-3 bg-primary/20 rounded-xl h-fit">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                        <p className="text-white/60 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {t('aboutinvestoman.text.10')} </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{milestone.year}</span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-white/80">{milestone.event}</p>
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
