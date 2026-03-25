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
  { value: '700+', label: 'Multinational Companies Choose Oman as Established HQ', icon: Building2 },
];

const StatCard = ({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) => (
  <StaggerItem>
    <div className="glass-card-premium rounded-[32px] p-8 h-full group hover:translate-y-[-5px] transition-all duration-500">
      <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-blue-400 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">
        {value}
      </div>
      <div className="text-[15px] text-slate-400 font-bold leading-relaxed opacity-80 uppercase tracking-widest">
        {label}
      </div>
    </div>
  </StaggerItem>
);

export const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-24">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
            Growth & Indicators
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white mb-8 tracking-tighter leading-[1.05]">
            Oman: Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Vision</span> Becomes Investment
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            The Sultanate of Oman is a trusted and future-ready investment destination with a clear strategic roadmap.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="space-y-24">
          {/* Economic Resilience */}
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4 tracking-tight">
                <div className="w-2 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                Economic Resilience
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {economicStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-8 h-8" />}
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Investment Attractiveness */}
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4 tracking-tight">
                <div className="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                Investment Attractiveness
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {investmentStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-8 h-8" />}
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Sovereign Ratings */}
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4 tracking-tight">
                <div className="w-2 h-8 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                Sovereign Ratings (2024 Upgrades)
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {sovereignRatings.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-8 h-8" />}
                />
              ))}
            </StaggerContainer>
          </div>

          {/* Competitiveness */}
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4 tracking-tight">
                <div className="w-2 h-8 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                Global Competitiveness
              </h3>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {competitivenessStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={<stat.icon className="w-8 h-8" />}
                />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
