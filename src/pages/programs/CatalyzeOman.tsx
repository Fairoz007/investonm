import { motion } from 'framer-motion';
import { Lightbulb, Users, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const programBenefits = [
  {
    icon: Lightbulb,
    title: 'Innovation Support',
    description: 'Access to cutting-edge research facilities and innovation centers.',
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: 'Connect with industry experts, mentors, and potential partners.',
  },
  {
    icon: Rocket,
    title: 'Fast-Track Growth',
    description: 'Accelerated pathways to scale your business and enter new markets.',
  },
  {
    icon: Sparkles,
    title: 'Recognition',
    description: 'Gain visibility and recognition in the Oman business ecosystem.',
  },
];

const focusAreas = [
  {
    name: 'Emerging Technologies',
    description: 'AI, blockchain, IoT, and other cutting-edge technologies.',
    examples: ['Artificial Intelligence', 'Blockchain', 'Internet of Things', 'Quantum Computing'],
  },
  {
    name: 'Sustainability Solutions',
    description: 'Technologies and solutions for environmental sustainability.',
    examples: ['Clean Energy', 'Circular Economy', 'Carbon Capture', 'Water Tech'],
  },
  {
    name: 'Health & Biotech',
    description: 'Innovations in healthcare, pharmaceuticals, and biotechnology.',
    examples: ['Digital Health', 'Genomics', 'Medical Devices', 'Drug Discovery'],
  },
  {
    name: 'Advanced Manufacturing',
    description: 'Next-generation manufacturing technologies and processes.',
    examples: ['3D Printing', 'Robotics', 'Automation', 'Smart Factories'],
  },
  {
    name: 'Fintech & Insurtech',
    description: 'Financial and insurance technology innovations.',
    examples: ['Digital Payments', 'WealthTech', 'RegTech', 'InsurTech'],
  },
  {
    name: 'EdTech & Future Skills',
    description: 'Education technology and workforce development solutions.',
    examples: ['E-Learning', 'Skills Training', 'VR/AR Education', 'Edutainment'],
  },
];

const eligibilityCriteria = [
  'Innovative product or service with market potential',
  'Scalable business model',
  'Strong founding team',
  'Alignment with Oman market needs',
  'Commitment to establish operations in Oman',
  'Willingness to collaborate with local partners',
];

export default function CatalyzeOman() {
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
              className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
            >
              {t('gscri.text.4')}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('catalyzeoman.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('catalyzeoman.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programBenefits.map((benefit, index) => (
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

      {/* Focus Areas */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('catalyzeoman.text.7')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('catalyzeoman.text.8')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <ScrollReveal key={area.name} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-bold text-white mb-2">{area.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.examples.map((example) => (
                      <span
                        key={example}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {example}
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
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                {t('catalyzeoman.text.9')} </h2>
              <p className="text-white/60 text-center mb-8">
                {t('catalyzeoman.text.10')} </p>
              <div className="space-y-4">
                {eligibilityCriteria.map((criterion) => (
                  <div key={criterion} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
