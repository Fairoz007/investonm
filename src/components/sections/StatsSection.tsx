import { TrendingUp, Building2, Users, Award, Globe, ArrowUpRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/ScrollReveal';

const economicStats = [
  { value: '4.8%', label: 'Total GDP Q3 2025', icon: TrendingUp, trend: '+0.4%' },
  { value: '7.5%', label: 'Total Unemployment Rate Q3 2025', icon: Users, trend: '-0.2%' },
  { value: '33.7%', label: 'Female Participation in Labor Force Q3 2025', icon: Users, trend: '+1.5%' },
];

const investmentStats = [
  { value: '24%', label: 'YoY FDI Inflows Growth in 2024', icon: TrendingUp, trend: '+4.2%' },
  { value: '9%', label: 'YoY FDI Inflows Growth in 2024', icon: TrendingUp, trend: '+1.1%' },
  { value: '3rd', label: 'Kearney FDI Confidence Index Among Emerging Economies (2025)', icon: Award },
];

const sovereignRatings = [
  { value: 'A+', label: 'Fitch (Stable) - March 2025', icon: Award, highlight: true },
  { value: 'A+', label: 'S&P (Stable) - July 2025', icon: Award, highlight: true },
  { value: 'A1', label: "Moody's (Stable) - November 2025", icon: Award, highlight: true },
];

const competitivenessStats = [
  { value: '1st', label: 'Out of 38 countries in IP Enforcement', icon: Globe },
  { value: '13th', label: 'Globally in Business Environment Competitiveness', icon: Building2 },
  { value: '700+', label: 'Multinational Companies Choose Oman as Established HQ', icon: Building2 },
];

const MiniChart = ({ color = 'blue' }: { color?: string }) => (
  <svg className="w-16 h-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 100 30">
    <path
      d="M0 25 Q 10 20, 20 22 T 40 15 T 60 18 T 80 5 T 100 8"
      fill="none"
      stroke={color === 'purple' ? '#A85CF6' : color === 'emerald' ? '#10B981' : '#3B82F6'}
      strokeWidth="2"
      strokeLinecap="round"
      className="dash-offset-anim"
    />
  </svg>
);

const StatCard = ({ 
  value, 
  label, 
  icon: Icon, 
  trend, 
  color = 'blue' 
}: { 
  value: string; 
  label: string; 
  icon: any; 
  trend?: string;
  color?: 'blue' | 'purple' | 'emerald' | 'cyan';
}) => {
  const colorMap = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    emerald: 'text-emerald-400',
    cyan: 'text-cyan-400',
  };

  return (
    <StaggerItem>
      <div className="relative group h-full">
        <div className={`absolute -inset-[1px] bg-gradient-to-br transition-all duration-500 rounded-[28px] opacity-0 group-hover:opacity-100 blur-[2px] ${
          color === 'blue' ? 'from-blue-500/40 to-purple-500/40' : 
          color === 'purple' ? 'from-purple-500/40 to-pink-500/40' : 
          color === 'emerald' ? 'from-emerald-500/40 to-cyan-500/40' : 
          'from-cyan-500/40 to-blue-500/40'
        }`} />
        
        <div className="relative glass-card-premium rounded-[28px] p-6 h-full flex flex-col justify-between overflow-hidden bg-white/[0.01] border-white/5 hover:bg-white/[0.03] transition-all duration-500 group-hover:translate-y-[-4px]">
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700 blur-2xl ${
            color === 'blue' ? 'from-blue-400' : color === 'purple' ? 'from-purple-400' : color === 'emerald' ? 'from-emerald-400' : 'from-cyan-400'
          }`} />

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] transition-all duration-500 group-hover:scale-110 ${colorMap[color]}`}>
                <Icon className="w-5 h-5" />
              </div>
              {trend && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <ArrowUpRight className={trend.startsWith('-') ? "w-3 h-3 text-red-400 rotate-90" : "w-3 h-3 text-emerald-400"} />
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${trend.startsWith('-') ? "text-red-400" : "text-emerald-400"}`}>{trend}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-black text-white tracking-tighter group-hover:scale-[1.02] transition-transform duration-500 origin-left">
                {value}
              </div>
              <div className="text-[12px] text-slate-400 font-semibold leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500 max-w-[90%] uppercase tracking-widest min-h-[2.5rem] flex items-center">
                {label}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <MiniChart color={color} />
            <div className={`w-1 h-1 rounded-full animate-pulse blur-[1px] ${
              color === 'blue' ? 'bg-blue-400 shadow-[0_0_8px_#60A5FA]' : 
              color === 'purple' ? 'bg-purple-400 shadow-[0_0_8px_#A78BFA]' : 
              color === 'emerald' ? 'bg-emerald-400 shadow-[0_0_8px_#34D399]' : 
              'bg-cyan-400 shadow-[0_0_8px_#22D3EE]'
            }`} />
          </div>
        </div>
      </div>
    </StaggerItem>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="container-custom relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-4 sm:mb-6 backdrop-blur-md">
            Growth & Indicators
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tighter leading-[1] drop-shadow-xl">
            Oman: Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] animate-gradient">Vision</span> Becomes Investment
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-medium max-w-xl mx-auto leading-relaxed opacity-70">
            The Sultanate of Oman is a trusted and future-ready investment destination with a clear strategic roadmap for the coming decades.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          <div className="relative">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
                <h3 className="text-lg md:text-xl font-black text-white/90 tracking-widest uppercase">Economic Resilience</h3>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
              {economicStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  trend={stat.trend}
                  color="blue"
                />
              ))}
            </StaggerContainer>
          </div>

          <div className="relative">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full" />
                <h3 className="text-lg md:text-xl font-black text-white/90 tracking-widest uppercase">Investment Attractiveness</h3>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
              {investmentStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  trend={stat.trend}
                  color="purple"
                />
              ))}
            </StaggerContainer>
          </div>

          <div className="relative">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full" />
                <h3 className="text-lg md:text-xl font-black text-white/90 tracking-widest uppercase">Sovereign Ratings</h3>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
              {sovereignRatings.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  color="emerald"
                />
              ))}
            </StaggerContainer>
          </div>

          <div className="relative">
            <ScrollReveal className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full" />
                <h3 className="text-lg md:text-xl font-black text-white/90 tracking-widest uppercase">Global Competitiveness</h3>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
              {competitivenessStats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  color="cyan"
                />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

