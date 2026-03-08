import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Cpu, Building2, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const reasons = [
  {
    icon: Users,
    title: 'Transformational Vision, Young Nation',
    stat: '70%',
    description: 'of Saudi Population under 35, digitally native, globally connected',
    gradient: 'from-teal-500 to-teal-700',
  },
  {
    icon: Award,
    title: 'A Trusted and Stable Destination',
    stat: '#1',
    description: 'Recognized as #1 in FDI Destination in MENA',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Building2,
    title: 'World Class Services and Infrastructure',
    stat: 'Top 10',
    description: 'Global Excellence in Maritime, Education, Healthcare, and Logistics',
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: Cpu,
    title: 'State-of-the-Art Digital Infrastructure',
    stat: '#2',
    description: 'Ranked Globally #2 in Digital Government Maturity Index (DGOI)',
    gradient: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: TrendingUp,
    title: 'Large Scale Transformational Investments',
    stat: '$3T+',
    description: 'USD 3T+ in investable opportunities across sectors',
    gradient: 'from-purple-500 to-purple-700',
  },
];

const additionalBenefits = [
  {
    title: 'Strategic Location',
    description: 'Gateway between Asia, Europe, and Africa with access to 3 continents within 6 hours flight time.',
  },
  {
    title: 'Economic Stability',
    description: 'Strong sovereign ratings and a stable macroeconomic environment with low inflation.',
  },
  {
    title: 'Business-Friendly Environment',
    description: 'Streamlined regulations, 100% foreign ownership in most sectors, and competitive tax rates.',
  },
  {
    title: 'Talent Pool',
    description: 'Young, educated workforce with increasing female participation in the labor market.',
  },
  {
    title: 'Quality of Life',
    description: 'World-class healthcare, education, entertainment, and lifestyle amenities.',
  },
  {
    title: 'Government Support',
    description: 'Dedicated support through MISA and other government entities to facilitate investment.',
  },
];

export default function WhyInvest() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Why Saudi</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Why Invest</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Why Invest in Saudi Arabia
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Discover why Saudi Arabia is the world's most ambitious investment 
                destination, offering unparalleled opportunities for growth and success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Top 5 Reasons */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Top 5 Reasons to Invest
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`h-full p-8 rounded-2xl bg-gradient-to-br ${reason.gradient} relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-white mb-2">{reason.stat}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                    <p className="text-white/80">{reason.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Additional Benefits
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
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
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Connect with our team to learn more about investment opportunities 
                and how we can support your business in Saudi Arabia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Contact Us</button>
                <button className="btn-secondary">Explore Sectors</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
