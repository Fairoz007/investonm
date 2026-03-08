import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Lightbulb, Users, Rocket, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

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
    description: 'Gain visibility and recognition in the Saudi business ecosystem.',
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
  'Alignment with Saudi market needs',
  'Commitment to establish operations in Saudi Arabia',
  'Willingness to collaborate with local partners',
];

export default function CatalyzeSaudi() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Programs & Incentives</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Catalyze Saudi</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Catalyze Saudi
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                An accelerator program designed to fast-track innovative companies and help them 
                scale their operations in Saudi Arabia and beyond.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Program Benefits
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive support to accelerate your growth in the Saudi market.
            </p>
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
              Focus Areas
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Priority sectors for innovation and acceleration support.
            </p>
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
                Eligibility Criteria
              </h2>
              <p className="text-white/60 text-center mb-8">
                Companies must meet the following requirements to join the Catalyze Saudi program:
              </p>
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

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <div className="p-6 bg-primary/20 rounded-full w-fit mx-auto mb-6">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Accelerate Your Growth
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join Catalyze Saudi and fast-track your company's growth in one of the world's 
                most dynamic and rapidly evolving markets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Apply to Catalyze Saudi</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
