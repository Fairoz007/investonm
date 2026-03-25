import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, PieChart, Globe, Users, DollarSign, Activity, Zap } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { PageHeader } from '@/components/shared/PageHeader';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const dashboards = [
  {
    icon: TrendingUp,
    name: 'Economic Indicators',
    description: 'Real-time data on GDP growth, inflation, employment, and other key economic metrics.',
    metrics: ['GDP Growth', 'Inflation Rate', 'Unemployment', 'FDI Inflows'],
    color: 'blue'
  },
  {
    icon: DollarSign,
    name: 'Investment Tracker',
    description: 'Track investment flows, sector performance, and regional distribution of investments.',
    metrics: ['FDI by Sector', 'Investment by Region', 'License Issuance', 'Project Pipeline'],
    color: 'emerald'
  },
  {
    icon: Users,
    name: 'Labor Market Dashboard',
    description: 'Comprehensive view of employment trends, workforce composition, and labor market dynamics.',
    metrics: ['Employment Growth', 'Sectoral Distribution', 'Omanization Rates', 'Wage Trends'],
    color: 'amber'
  },
  {
    icon: Globe,
    name: 'Trade Statistics',
    description: 'Monitor import, export, and trade balance data with detailed commodity breakdowns.',
    metrics: ['Total Exports', 'Total Imports', 'Trade Balance', 'Top Trading Partners'],
    color: 'indigo'
  },
  {
    icon: PieChart,
    name: 'Sector Performance',
    description: 'Analyze performance across key economic sectors and track growth trends.',
    metrics: ['Sectoral GDP', 'Growth Rates', 'Market Size', 'Competitive Index'],
    color: 'purple'
  },
  {
    icon: BarChart3,
    name: 'Business Environment',
    description: 'Indicators measuring the ease of doing business and investment climate.',
    metrics: ['Business Registration', 'Permit Approvals', 'Regulatory Changes', 'Competitiveness Rank'],
    color: 'rose'
  },
];

const featuredMetrics = [
  { label: 'GDP Growth Q4 2025', value: '5.2%', trend: '+0.4%', icon: Activity },
  { label: 'Total FDI Assets', value: '$32.8B', trend: '+12%', icon: DollarSign },
  { label: 'New Industrial Licenses', value: '1,420', trend: '+8%', icon: Zap },
  { label: 'Export Volume', value: '$18.4B', trend: '+15%', icon: Globe },
];

export default function Dashboards() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24 font-sans">
      <PageHeader 
        title={t('dashboards.text.3')}
        subtitle={t('dashboards.text.4')}
        breadcrumb={[{ label: t('knowledgehub.title') }, { label: t('dashboards.text.2') }]}
      />

      {/* Real-time Metrics Bar */}
      <section className="py-12 border-b border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.05] transition-all"
              >
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">{metric.label}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                    <span className="text-xs text-emerald-400 font-medium">{metric.trend}</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-600 transition-colors">
                  <metric.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboards Grid */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-4xl font-bold text-white tracking-tight mb-6">{t('dashboards.text.5')}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6" />
            <p className="text-lg text-[#94A3B8] font-light leading-relaxed">
              {t('dashboards.text.8')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboards.map((dashboard, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-8 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500">
                  <dashboard.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {dashboard.name}
                </h3>

                <p className="text-base text-[#94A3B8] leading-relaxed font-light mb-8 flex-grow">
                  {dashboard.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {dashboard.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-3 py-1 bg-white/[0.05] text-white/50 text-[11px] rounded-full border border-white/5"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] group/btn pt-2 cursor-pointer hover:text-white transition-colors">
                    Access Dashboard
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="rounded-[3rem] bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 border border-white/10 p-12 md:p-20 relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
             <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Professional Data Access & <span className="text-blue-500">Custom Intelligence</span>
                </h2>
                <p className="text-xl text-[#94A3B8] font-light leading-relaxed">
                  Institutional investors and partners can access our high-resolution data feeds and custom reporting tools through the Investment Intelligence API.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                  <button className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group">
                    Request API Access
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="h-14 px-8 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10 flex items-center gap-2 group">
                    View Documentation
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <ResearchDataCTA />
      </div>
    </div>
  );
}
