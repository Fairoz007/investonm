import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, PieChart, Globe, Users, DollarSign } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const dashboards = [
  {
    icon: TrendingUp,
    name: 'Economic Indicators',
    description: 'Real-time data on GDP growth, inflation, employment, and other key economic metrics.',
    metrics: ['GDP Growth', 'Inflation Rate', 'Unemployment', 'FDI Inflows'],
  },
  {
    icon: DollarSign,
    name: 'Investment Tracker',
    description: 'Track investment flows, sector performance, and regional distribution of investments.',
    metrics: ['FDI by Sector', 'Investment by Region', 'License Issuance', 'Project Pipeline'],
  },
  {
    icon: Users,
    name: 'Labor Market Dashboard',
    description: 'Comprehensive view of employment trends, workforce composition, and labor market dynamics.',
    metrics: ['Employment Growth', 'Sectoral Distribution', 'Omanzation Rates', 'Wage Trends'],
  },
  {
    icon: Globe,
    name: 'Trade Statistics',
    description: 'Monitor import, export, and trade balance data with detailed commodity breakdowns.',
    metrics: ['Total Exports', 'Total Imports', 'Trade Balance', 'Top Trading Partners'],
  },
  {
    icon: PieChart,
    name: 'Sector Performance',
    description: 'Analyze performance across key economic sectors and track growth trends.',
    metrics: ['Sectoral GDP', 'Growth Rates', 'Market Size', 'Competitive Index'],
  },
  {
    icon: BarChart3,
    name: 'Business Environment',
    description: 'Indicators measuring the ease of doing business and investment climate.',
    metrics: ['Business Registration', 'Permit Approvals', 'Regulatory Changes', 'Competitiveness Rank'],
  },
];

const featuredMetrics = [
  { label: 'GDP Growth Q3 2025', value: '4.8%', trend: 'up' },
  { label: 'FDI Inflows 2024', value: '$28.5B', trend: 'up' },
  { label: 'New Licenses Q3 2025', value: '2,847', trend: 'up' },
  { label: 'Unemployment Rate', value: '7.5%', trend: 'down' },
];

export default function Dashboards() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Knowledge</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Dashboards</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                The Dashboards
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Access real-time data and analytics on Oman's economy, investment trends, 
                and business environment through our comprehensive dashboards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Metrics */}
      <section className="py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredMetrics.map((metric, index) => (
              <ScrollReveal key={metric.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-white/60 text-sm">{metric.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Available Dashboards
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Explore our interactive dashboards for comprehensive insights into Oman's economy.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.map((dashboard, index) => (
              <ScrollReveal key={dashboard.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <dashboard.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{dashboard.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{dashboard.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dashboard.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* API Access */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Data API Access
                  </h2>
                  <p className="text-white/70 mb-6">
                    Integrate our economic and investment data directly into your applications 
                    and analytics platforms through our comprehensive API.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Real-time data feeds',
                      'Historical data access',
                      'Custom data exports',
                      'Automated reporting',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary">Request API Access</button>
                </div>
                <div className="glass-card p-6">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Custom Reports</h3>
                    <p className="text-white/60 text-sm mb-4">
                      Request customized reports and analysis tailored to your specific needs.
                    </p>
                    <button className="btn-secondary">Request Custom Report</button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
