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
 { value: 'A1', label:"Moody's (Stable) - November 2025", icon: Award },
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
 className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 h-full"
>
 <div className="mb-4 text-primary">{icon}</div>
 <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans">{value}</div>
 <div className="text-sm text-white/60">{label}</div>
 </motion.div>
 </StaggerItem>
);

export const StatsSection = () => {
 return (
 <section className="py-24  relative overflow-hidden">
 {/* Background Decor */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 pointer-events-none" />

 <div className="container-custom relative z-10">
 {/* Section Header */}
 <ScrollReveal delay={0} className="text-center mb-16">
 <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
 Oman: Where <span className="text-[var(--primary)]">Vision</span> Becomes Investment
 </h2>
 <p className="text-white/60 text-lg font-sans max-w-2xl mx-auto">
 The Sultanate of Oman is a trusted and future-ready investment destination with a clear strategic roadmap.
 </p>
 </ScrollReveal>

 {/* Stats Grid */}
 <div className="space-y-16">
 {/* Economic Resilience */}
 <div>
 <ScrollReveal delay={0.1}>
 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-sans">
 <div className="p-2.5 bg-[var(--primary)]/10 rounded-xl">
 <TrendingUp className="w-6 h-6 text-[var(--primary-light)]" />
 </div>
 Economic Resilience
 </h3>
 </ScrollReveal>
 <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
 {economicStats.map((stat, index) => (
 <StatCard
 key={index}
 value={stat.value}
 label={stat.label}
 icon={<stat.icon className="w-6 h-6 text-[var(--primary-light)]" />}
 />
 ))}
 </StaggerContainer>
 </div>

 {/* Investment Attractiveness */}
 <div>
 <ScrollReveal delay={0.1}>
 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-sans">
 <div className="p-2.5 bg-blue-500/10 rounded-xl">
 <Award className="w-6 h-6 text-blue-400" />
 </div>
 Investment Attractiveness
 </h3>
 </ScrollReveal>
 <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
 {investmentStats.map((stat, index) => (
 <StatCard
 key={index}
 value={stat.value}
 label={stat.label}
 icon={<stat.icon className="w-6 h-6 text-blue-400" />}
 />
 ))}
 </StaggerContainer>
 </div>

 {/* Sovereign Ratings */}
 <div>
 <ScrollReveal delay={0.1}>
 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-sans">
 <div className="p-2.5 bg-cyan-500/10 rounded-xl">
 <Zap className="w-6 h-6 text-cyan-400" />
 </div>
 Sovereign Ratings (2024 Upgrades)
 </h3>
 </ScrollReveal>
 <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
 {sovereignRatings.map((stat, index) => (
 <StatCard
 key={index}
 value={stat.value}
 label={stat.label}
 icon={<stat.icon className="w-6 h-6 text-cyan-400" />}
 />
 ))}
 </StaggerContainer>
 </div>

 {/* Competitiveness */}
 <div>
 <ScrollReveal delay={0.1}>
 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-sans">
 <div className="p-2.5 bg-teal-500/10 rounded-xl">
 <Globe className="w-6 h-6 text-teal-400" />
 </div>
 Global Competitiveness
 </h3>
 </ScrollReveal>
 <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
 {competitivenessStats.map((stat, index) => (
 <StatCard
 key={index}
 value={stat.value}
 label={stat.label.replace('KSA', 'Oman')}
 icon={<stat.icon className="w-6 h-6 text-teal-400" />}
 />
 ))}
 </StaggerContainer>
 </div>
 </div>
 </div>
 </section>

 );
};
