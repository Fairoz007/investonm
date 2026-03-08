import { motion } from 'framer-motion';
import { ArrowRight, FileText, Download, TrendingUp, BarChart3, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const reportCategories = [
  {
    icon: TrendingUp,
    name: 'Economic Reports',
    description: 'Comprehensive analysis of Saudi Arabia\'s economic performance and outlook.',
    reports: [
      { title: 'Quarterly Economic Review Q3 2025', date: 'October 2025' },
      { title: 'Annual Economic Report 2024', date: 'January 2025' },
      { title: 'FDI Trends and Analysis', date: 'September 2025' },
      { title: 'Non-Oil GDP Growth Analysis', date: 'August 2025' },
    ],
  },
  {
    icon: BarChart3,
    name: 'Sector Reports',
    description: 'In-depth analysis of key investment sectors and emerging opportunities.',
    reports: [
      { title: 'Technology Sector Outlook 2025', date: 'November 2025' },
      { title: 'Tourism & Hospitality Report', date: 'October 2025' },
      { title: 'Manufacturing Sector Analysis', date: 'September 2025' },
      { title: 'Real Estate Market Review', date: 'August 2025' },
    ],
  },
  {
    icon: Globe,
    name: 'Investment Guides',
    description: 'Practical guides for investors considering Saudi Arabia.',
    reports: [
      { title: 'Investor Guide 2025', date: 'January 2025' },
      { title: 'Doing Business in Saudi Arabia', date: 'December 2024' },
      { title: 'Regional Investment Guide', date: 'November 2024' },
      { title: 'Sector-Specific Investment Guides', date: 'October 2024' },
    ],
  },
];

const featuredReports = [
  {
    title: 'Saudi Arabia Investment Report 2025',
    description: 'Comprehensive overview of investment opportunities, economic trends, and regulatory updates for 2025.',
    type: 'Annual Report',
    date: 'January 2025',
  },
  {
    title: 'Vision 2030 Progress Report',
    description: 'Detailed analysis of Vision 2030 achievements and upcoming opportunities across all sectors.',
    type: 'Strategic Report',
    date: 'December 2024',
  },
  {
    title: 'FDI Confidence Index 2025',
    description: 'Global investor sentiment and confidence in Saudi Arabia as an investment destination.',
    type: 'Market Research',
    date: 'November 2024',
  },
];

export default function Reports() {
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
                <span className="text-sm text-white/60">Reports & Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Reports & Insights
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Access comprehensive reports, market analysis, and investment insights 
                to inform your investment decisions in Saudi Arabia.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-8">
              Featured Reports
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredReports.map((report, index) => (
              <ScrollReveal key={report.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {report.type}
                    </span>
                    <span className="text-white/50 text-xs">{report.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{report.title}</h3>
                  <p className="text-white/60 text-sm mb-6">{report.description}</p>
                  <button className="flex items-center gap-2 text-primary text-sm hover:underline">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Report Categories */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-8">
              Report Categories
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {reportCategories.map((category, index) => (
              <ScrollReveal key={category.name} delay={index * 0.1}>
                <div className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-white/60 text-sm">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {category.reports.map((report) => (
                      <div
                        key={report.title}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <div className="text-white text-sm">{report.title}</div>
                            <div className="text-white/50 text-xs">{report.date}</div>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-white/50" />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest reports, 
                market insights, and investment opportunities directly in your inbox.
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                />
                <button className="btn-primary">Subscribe</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
