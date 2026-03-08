import { motion } from 'framer-motion';
import { ArrowRight, Building2, Home, Briefcase, Hotel } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const segments = [
  {
    icon: Home,
    name: 'Residential',
    description: 'Growing demand for quality housing driven by population growth and urbanization.',
    opportunities: ['Luxury villas', 'Apartment complexes', 'Gated communities', 'Affordable housing'],
  },
  {
    icon: Briefcase,
    name: 'Commercial',
    description: 'Expanding business sector creating demand for offices, retail, and mixed-use developments.',
    opportunities: ['Office buildings', 'Retail centers', 'Mixed-use developments', 'Co-working spaces'],
  },
  {
    icon: Hotel,
    name: 'Hospitality',
    description: 'Tourism growth driving demand for hotels, resorts, and serviced apartments.',
    opportunities: ['Luxury hotels', 'Resorts', 'Serviced apartments', 'Boutique properties'],
  },
  {
    icon: Building2,
    name: 'Industrial',
    description: 'Manufacturing and logistics growth creating demand for warehouses and industrial facilities.',
    opportunities: ['Warehouses', 'Manufacturing facilities', 'Logistics parks', 'Cold storage'],
  },
];

const keyMarkets = [
  {
    city: 'Riyadh',
    focus: 'Commercial & Residential',
    growth: '+15%',
    highlight: 'King Abdullah Financial District',
  },
  {
    city: 'Jeddah',
    focus: 'Hospitality & Mixed-Use',
    growth: '+12%',
    highlight: 'Jeddah Economic City',
  },
  {
    city: 'NEOM',
    focus: 'Sustainable Development',
    growth: 'New',
    highlight: 'THE LINE',
  },
  {
    city: 'Red Sea Coast',
    focus: 'Tourism & Hospitality',
    growth: '+20%',
    highlight: 'Red Sea Project',
  },
];

const marketStats = [
  { value: '$1T', label: 'Projected Market Value by 2030' },
  { value: '1.5M', label: 'New Housing Units Needed' },
  { value: '100K+', label: 'Hotel Rooms Required' },
  { value: '70%', label: 'Homeownership Target' },
];

export default function RealEstate() {
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
                <span className="text-sm text-white/60">Real Estate</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Real Estate Investment
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                One of the world's most dynamic real estate markets, driven by Oman Vision 2040 
                mega-projects and rapid urban development.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
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

      {/* Market Segments */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Market Segments
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Diverse opportunities across residential, commercial, hospitality, and industrial real estate.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {segments.map((segment, index) => (
              <ScrollReveal key={segment.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <segment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{segment.name}</h3>
                  <p className="text-white/60 mb-6">{segment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {segment.opportunities.map((opp) => (
                      <span
                        key={opp}
                        className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full"
                      >
                        {opp}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Markets */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Key Real Estate Markets
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Prime locations offering the strongest growth potential and investment returns.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMarkets.map((market, index) => (
              <ScrollReveal key={market.city} delay={index * 0.1}>
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{market.city}</h3>
                    <span className="text-primary font-semibold">{market.growth}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-white/60">
                      <span className="text-white/40">Focus:</span> {market.focus}
                    </div>
                    <div className="text-sm text-white/60">
                      <span className="text-white/40">Highlight:</span> {market.highlight}
                    </div>
                  </div>
                </div>
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
                Invest in Oman Real Estate
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Connect with our real estate investment specialists to explore 
                opportunities tailored to your investment goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Speak to a Specialist</button>
                <button className="btn-secondary">Download Market Report</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
