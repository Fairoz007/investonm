import { motion } from 'framer-motion';
import { Building2, Home, Briefcase, Hotel } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

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
              <span>{t('realestate.text.2')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
            >
              {t('realestate.text.3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
            >
              {t('realestate.text.4')}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-black/10 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-[32px] font-semibold text-[var(--primary)] mb-2">{stat.value}</div>
                  <div className="text-[var(--text-paragraph)] text-sm">{stat.label}</div>
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
            <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-4 text-center">
              {t('realestate.text.5')} </h2>
            <p className="text-[var(--text-paragraph)] text-center mb-12 max-w-2xl mx-auto">
              {t('realestate.text.6')} </p>
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
              {t('realestate.text.7')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('realestate.text.8')} </p>
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
                      <span className="text-white/40"> {t('realestate.text.9')} </span> {market.focus}
                    </div>
                    <div className="text-sm text-white/60">
                      <span className="text-white/40"> {t('realestate.text.10')} </span> {market.highlight}
                    </div>
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
