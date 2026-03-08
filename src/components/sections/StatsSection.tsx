// StatsSection component
import { motion } from 'framer-motion';
import { TrendingUp, Building2, Users, Award, Globe, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

const economicStats = [
  { value: '4.8%', label: 'Total GDP Q3 2025', icon: TrendingUp },
  { value: '7.5%', label: 'Total Unemployment Rate Q3 2025', icon: Users },
  { value: '33.7%', label: 'Female Participation in Labor Force Q3 2025', icon: Users },
];

const investmentStats = [
  { value: '24%', label: 'YoY FDI Inflows Growth in 2024', icon: TrendingUp },
  { value: '9%', label: 'YoY FDI Inflows Growth in 2024', icon: TrendingUp },
  { value: '3rd', label: 'Kearney FDI Confidence Index Among Emerging Economies (2025)', icon: Award },
];

const sovereignRatings = [
  { value: 'A+', label: 'Fitch (Stable) - March 2025', icon: Award },
  { value: 'A+', label: 'S&P (Stable) - July 2025', icon: Award },
  { value: 'A1', label: "Moody's (Stable) - November 2025", icon: Award },
];

const competitivenessStats = [
  { value: '1st', label: 'Out of 38 countries in IP Enforcement', icon: Globe },
  { value: '13th', label: 'Globally in Business Environment Competitiveness', icon: Building2 },
  { value: '700+', label: 'Multinational Companies Choose KSA as Established HQ', icon: Building2 },
];

const StatCard = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => (
  <StaggerItem>
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 h-full"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </motion.div>
  </StaggerItem>
);

export const StatsSection = () => {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-light to-dark" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oman: Where Vision Becomes Investment
          </h2>
          <p className="text-white/60 text-lg">
            The world's most trusted and future-ready investment destination
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="space-y-12">
          {/* Economic Resilience */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                Economic Resilience
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
              {economicStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-6 h-6" />}
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Investment Attractiveness */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="p-2 bg-accent-purple/20 rounded-lg">
                  <Award className="w-5 h-5 text-accent-purple" />
                </div>
                Investment Attractiveness
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
              {investmentStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-6 h-6" />}
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Sovereign Ratings */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="p-2 bg-accent-cyan/20 rounded-lg">
                  <Zap className="w-5 h-5 text-accent-cyan" />
                </div>
                Sovereign Ratings
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
              {sovereignRatings.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-6 h-6" />}
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Competitiveness */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                  <Globe className="w-5 h-5 text-teal-400" />
                </div>
                Competitiveness
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.1}>
              {competitivenessStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-6 h-6" />}
                />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
