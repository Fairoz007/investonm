import { motion } from 'framer-motion';
import { ArrowRight, FileText, Download, TrendingUp, BarChart3, Globe, Search } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { PageHeader } from '@/components/shared/PageHeader';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const reportCategories = [
  {
    icon: TrendingUp,
    name: 'Economic Reports',
    description: 'Comprehensive analysis of Oman\'s economic performance and outlook.',
    reports: [
      { title: 'Quarterly Economic Review Q3 2025', date: 'October 2025', size: '2.4 MB' },
      { title: 'Annual Economic Report 2024', date: 'January 2025', size: '5.1 MB' },
      { title: 'FDI Trends and Analysis', date: 'September 2025', size: '1.8 MB' },
      { title: 'Non-Oil GDP Growth Analysis', date: 'August 2025', size: '3.2 MB' },
    ],
  },
  {
    icon: BarChart3,
    name: 'Sector Reports',
    description: 'In-depth analysis of key investment sectors and emerging opportunities.',
    reports: [
      { title: 'Technology Sector Outlook 2025', date: 'November 2025', size: '2.1 MB' },
      { title: 'Tourism & Hospitality Report', date: 'October 2025', size: '4.5 MB' },
      { title: 'Manufacturing Sector Analysis', date: 'September 2025', size: '3.7 MB' },
      { title: 'Real Estate Market Review', date: 'August 2025', size: '2.9 MB' },
    ],
  },
  {
    icon: Globe,
    name: 'Investment Guides',
    description: 'Practical guides for investors considering Oman.',
    reports: [
      { title: 'Investor Guide 2025', date: 'January 2025', size: '6.8 MB' },
      { title: 'Doing Business in Oman', date: 'December 2024', size: '3.5 MB' },
      { title: 'Regional Investment Guide', date: 'November 2024', size: '2.2 MB' },
      { title: 'Sector-Specific Investment Guides', date: 'October 2024', size: '4.1 MB' },
    ],
  },
];

const featuredReports = [
  {
    title: 'Oman Investment Report 2025',
    description: 'Comprehensive overview of investment opportunities, economic trends, and regulatory updates for 2025.',
    type: 'Annual Report',
    date: 'January 2025',
    image: '/images/hero-energy.jpg'
  },
  {
    title: 'Oman Vision 2040 Progress Report',
    description: 'Detailed analysis of Oman Vision 2040 achievements and upcoming opportunities across all sectors.',
    type: 'Strategic Report',
    date: 'December 2024',
    image: '/images/hero-engineers.jpg'
  },
];

export default function Reports() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24 font-sans">
      <PageHeader 
        title={t('reports.text.3')}
        subtitle={t('reports.text.4')}
        breadcrumb={[{ label: t('knowledgehub.title') }, { label: t('reports.text.2') }]}
      />

      {/* Search Bar */}
      <section className="py-12 border-b border-white/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400 opacity-50 group-focus-within:opacity-100 transition-opacity" />
            <input 
              type="text" 
              placeholder={t('reports.search_placeholder')}
              className="w-full h-16 bg-white/[0.03] border border-white/10 rounded-full pl-16 pr-8 text-white focus:outline-none focus:border-blue-500/50 transition-all font-light"
            />
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-24">
        <div className="container-custom">
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white tracking-tight">{t('reports.text.5')}</h2>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredReports.map((report, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10"
                >
                   <img src={report.image} alt={report.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-[#050812]/40 to-transparent" />
                   
                   <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full w-fit border border-blue-500/30">
                        {report.type}
                      </span>
                      <h3 className="text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                        {report.title}
                      </h3>
                      <p className="text-[#94A3B8] font-light text-base leading-relaxed max-w-md">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-6 pt-4">
                        <button className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.2em] group/btn">
                          <Download className="w-4 h-4 text-blue-400" />
                          Download PDF
                        </button>
                        <span className="text-white/30 text-[10px] font-mono">{report.date}</span>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Library Categories */}
      <section className="py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="space-y-16">
            {reportCategories.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-6">
                   <div className="p-4 bg-blue-500/10 rounded-2xl">
                      <category.icon className="w-6 h-6 text-blue-400" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{category.name}</h3>
                      <p className="text-[#94A3B8] font-light">{category.description}</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {category.reports.map((report, rIdx) => (
                     <motion.div
                       key={rIdx}
                       whileHover={{ x: 10 }}
                       className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all flex items-center justify-between group cursor-pointer"
                     >
                       <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                             <FileText className="w-5 h-5 text-white/40 group-hover:text-white" />
                          </div>
                          <div>
                             <h4 className="text-sm font-medium text-white mb-1 group-hover:text-blue-400 transition-colors">{report.title}</h4>
                             <div className="flex items-center gap-3">
                                <span className="text-[10px] text-white/30 font-mono uppercase">{report.date}</span>
                                <span className="w-1 h-1 bg-white/10 rounded-full" />
                                <span className="text-[10px] text-white/30 font-mono italic">{report.size}</span>
                             </div>
                          </div>
                       </div>
                       <Download className="w-5 h-5 text-white/20 group-hover:text-blue-400 transition-all" />
                     </motion.div>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12">
        <ResearchDataCTA />
      </div>
    </div>
  );
}
