import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Stethoscope, GraduationCap, Plane, Zap, Factory, Building2, ShoppingCart } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const sectors = [
  {
    icon: Cpu,
    name: 'Information Technology',
    description: 'Oman is rapidly becoming a regional tech hub with significant investments in digital infrastructure, AI, and cloud computing.',
    opportunities: ['Data centers', 'Cybersecurity', 'AI & Machine Learning', 'Fintech'],
    growth: '+25%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare & Life Sciences',
    description: 'Massive healthcare transformation creating opportunities in medical services, pharmaceuticals, and biotechnology.',
    opportunities: ['Hospital management', 'Pharmaceuticals', 'Medical devices', 'Telemedicine'],
    growth: '+18%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: GraduationCap,
    name: 'Education & Training',
    description: 'Growing demand for quality education and vocational training to support economic diversification.',
    opportunities: ['Private schools', 'Vocational training', 'EdTech', 'Higher education'],
    growth: '+15%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: Plane,
    name: 'Tourism & Entertainment',
    description: 'Oman Vision 2040 aims to make Oman a top global tourism destination with massive investments in infrastructure.',
    opportunities: ['Hospitality', 'Entertainment venues', 'Tourism services', 'Cultural experiences'],
    growth: '+30%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    description: 'Transition to renewable energy while maintaining leadership in oil and gas creates diverse opportunities.',
    opportunities: ['Renewable energy', 'Oil & gas services', 'Water treatment', 'Smart grids'],
    growth: '+12%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Strategic localization initiatives are creating opportunities across various manufacturing sectors.',
    opportunities: ['Automotive', 'Aerospace', 'Consumer goods', 'Industrial equipment'],
    growth: '+14%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: Building2,
    name: 'Real Estate & Construction',
    description: 'Massive urban development and giga projects driving demand across the real estate value chain.',
    opportunities: ['Residential development', 'Commercial real estate', 'Infrastructure', 'Smart cities'],
    growth: '+16%',
    growthLabel: 'Annual Growth',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & Consumer Goods',
    description: 'Growing population and rising disposable incomes are driving retail sector expansion.',
    opportunities: ['E-commerce', 'Luxury retail', 'Food & beverage', 'Consumer electronics'],
    growth: '+20%',
    growthLabel: 'Annual Growth',
  },
];

export default function KeySectors() {
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
                <span className="text-sm text-white/60">Key Sectors</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Key Investment Sectors
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Explore diverse investment opportunities across Oman's fastest-growing 
                sectors, each offering unique advantages and strong growth potential.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <ScrollReveal key={sector.name} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 bg-primary/20 rounded-2xl">
                      <sector.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{sector.growth}</div>
                      <div className="text-xs text-white/50">{sector.growthLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{sector.name}</h3>
                  <p className="text-white/60 mb-6">{sector.description}</p>

                  <div>
                    <div className="text-sm text-white/50 mb-2">Key Opportunities:</div>
                    <div className="flex flex-wrap gap-2">
                      {sector.opportunities.map((opp) => (
                        <span
                          key={opp}
                          className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full"
                        >
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Find Your Investment Opportunity
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Our team can help you identify the best opportunities aligned with your 
                business goals and investment strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Schedule a Consultation</button>
                <button className="btn-secondary">Download Sector Reports</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
