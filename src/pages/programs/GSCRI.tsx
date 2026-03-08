import { motion } from 'framer-motion';
import { ArrowRight, Factory, Globe, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const objectives = [
  {
    icon: Factory,
    title: 'Localize Manufacturing',
    description: 'Build local manufacturing capabilities to reduce dependency on imports.',
  },
  {
    icon: Globe,
    title: 'Strengthen Supply Chains',
    description: 'Create resilient supply chains that can withstand global disruptions.',
  },
  {
    icon: TrendingUp,
    title: 'Enable Exports',
    description: 'Position Oman as a global export hub for key industries.',
  },
  {
    icon: Shield,
    title: 'Ensure Security',
    description: 'Secure critical supply chains for essential goods and services.',
  },
];

const targetSectors = [
  {
    name: 'Pharmaceuticals & Medical Devices',
    opportunities: ['Drug manufacturing', 'Medical equipment', 'Vaccine production', 'R&D centers'],
  },
  {
    name: 'Automotive & Aerospace',
    opportunities: ['Vehicle assembly', 'Aerospace components', 'EV manufacturing', 'Parts production'],
  },
  {
    name: 'Food & Agriculture',
    opportunities: ['Food processing', 'Agricultural technology', 'Aquaculture', 'Dairy production'],
  },
  {
    name: 'Building Materials',
    opportunities: ['Steel production', 'Cement manufacturing', 'Construction materials', 'Prefab solutions'],
  },
  {
    name: 'Chemicals & Plastics',
    opportunities: ['Petrochemicals', 'Specialty chemicals', 'Plastic products', 'Fertilizers'],
  },
  {
    name: 'Electronics & Technology',
    opportunities: ['Semiconductor assembly', 'Consumer electronics', 'Telecom equipment', 'Data centers'],
  },
];

const incentives = [
  'Financial support for capital investments',
  'Subsidized land and utilities',
  'Tax incentives and exemptions',
  'Fast-track regulatory approvals',
  'Local content certification benefits',
  'Export financing support',
  'R&D funding and support',
  'Training and workforce development',
];

export default function GSCRI() {
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
                <span className="text-sm text-white/60">GSCRI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Global Supply Chain Resilience Initiative
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Strengthen global supply chains by establishing Oman as a resilient 
                manufacturing and logistics hub for critical industries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Program Objectives
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Building a more resilient and diversified global supply chain ecosystem.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <ScrollReveal key={objective.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 text-center h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mx-auto mb-4">
                    <objective.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{objective.title}</h3>
                  <p className="text-white/60 text-sm">{objective.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Target Sectors
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Priority sectors for supply chain localization and resilience.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSectors.map((sector, index) => (
              <ScrollReveal key={sector.name} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-bold text-white mb-4">{sector.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {sector.opportunities.map((opp) => (
                      <span
                        key={opp}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Program Incentives
              </h2>
              <p className="text-white/60 text-center mb-8">
                Comprehensive support package for qualifying investments:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {incentives.map((incentive) => (
                  <div key={incentive} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{incentive}</span>
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Strengthen Your Supply Chain
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Partner with us to build resilient supply chains and access 
                the growing Middle East and African markets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Apply for GSCRI</button>
                <button className="btn-secondary">Download Program Details</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
