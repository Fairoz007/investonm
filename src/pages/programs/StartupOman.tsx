import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Lightbulb, Users, DollarSign, Building2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";

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
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium"> {t('startupoman.text.1')} </span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60"> {t('startupoman.text.2')} </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                 {t('startupoman.text.3')} </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                 {t('startupoman.text.4')} </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ecosystemStats.map((stat, index) => (
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

      {/* Support Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
               {t('startupoman.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
               {t('startupoman.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {supportAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-white/60 mb-6">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.features.map((feature) => (
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
                <div className="glass-card p-6 h-full">
                  <div className="text-sm text-primary mb-2">{story.sector}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{story.name}</h3>
                  <p className="text-white/60 text-sm">{story.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <div className="p-6 bg-primary/20 rounded-full w-fit mx-auto mb-6">
                <Rocket className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                 {t('startupoman.text.9')} </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                 {t('startupoman.text.10')} </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary"> {t('startupoman.text.11')} </button>
                <button className="btn-secondary"> {t('startupoman.text.12')} </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
