import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Lock, ArrowRight, Search, BookOpen, TrendingUp, Globe2, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const categories = ['All', 'Economy', 'Sectors', 'FDI', 'Sustainability'];

const reports = [
  {
    title: 'Oman Investment Climate Report 2025',
    category: 'Economy',
    date: 'March 2025',
    pages: 68,
    summary: 'A comprehensive analysis of Oman\'s macro-economic indicators, reform agenda, and investor outlook for 2025.',
    icon: <Globe2 size={22} />,
    locked: false,
    tag: 'Featured',
  },
  {
    title: 'Vision 2040 Progress Update',
    category: 'Economy',
    date: 'January 2025',
    pages: 44,
    summary: 'Mid-cycle review of Oman\'s national diversification strategy with sector-by-sector progress metrics.',
    icon: <TrendingUp size={22} />,
    locked: false,
    tag: 'National',
  },
  {
    title: 'Tourism Sector Deep Dive Q4 2024',
    category: 'Sectors',
    date: 'December 2024',
    pages: 32,
    summary: 'Visitor revenue, hotel occupancy, infrastructure investment, and 2025 growth forecast for Oman tourism.',
    icon: <BookOpen size={22} />,
    locked: false,
    tag: 'Public',
  },
  {
    title: 'Renewable Energy Investment Landscape',
    category: 'Sustainability',
    date: 'November 2024',
    pages: 56,
    summary: 'Solar, wind, and green hydrogen opportunities across Oman with regulatory framework and incentive analysis.',
    icon: <Zap size={22} />,
    locked: false,
    tag: 'Public',
  },
  {
    title: 'FDI Inflows — Annual Summary 2024',
    category: 'FDI',
    date: 'October 2024',
    pages: 40,
    summary: 'Foreign direct investment data by sector, origin country, and project type for the full calendar year 2024.',
    icon: <FileText size={22} />,
    locked: true,
    tag: 'Investor',
  },
  {
    title: 'Logistics & Port Competitiveness Study',
    category: 'Sectors',
    date: 'September 2024',
    pages: 50,
    summary: 'Oman\'s position in global trade rankings, port efficiency benchmarks, and Duqm/Salalah development outlook.',
    icon: <Globe2 size={22} />,
    locked: true,
    tag: 'Investor',
  },
];

export default function Reports() {
  const { lang } = useParams();
  const currentLang = lang || 'en';
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = reports.filter((r) => {
    const matchCat = activeCategory === 'All' || r.category === activeCategory;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/8 via-transparent to-orange-600/8 pointer-events-none" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="as-subtitle-2 mb-8 border-primary/20 text-primary uppercase tracking-widest">
              Knowledge Hub
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight">
              Market{' '}
              <span className="gradient-text">Reports</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed">
              In-depth research and analysis on Oman's economy, investment sectors, and global market positioning.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-24">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reports..."
              className="w-full bg-dark-card border border-white/10 rounded-full py-3 pl-10 pr-5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/40 transition-colors"
            />
          </div>
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-dark'
                    : 'bg-dark-card border border-white/10 text-white/50 hover:border-primary/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Report Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((report, idx) => (
              <motion.div
                key={report.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.06 }}
                className="bg-dark-card border border-white/5 rounded-[32px] p-6 lg:p-8 group hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                    {report.locked ? <Lock size={20} className="text-white/30 group-hover:text-dark" /> : report.icon}
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-white/30">{report.category}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${report.locked ? 'bg-red-500/10 text-red-400' : 'bg-primary/10 text-primary'}`}>{report.tag}</span>
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold mb-3 leading-tight group-hover:text-primary transition-colors flex-1">
                  {report.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{report.summary}</p>

                <div className="flex items-center justify-between text-xs text-white/30 mb-5">
                  <span>{report.date}</span>
                  <span>{report.pages} pages</span>
                </div>

                <div className="pt-5 border-t border-white/5">
                  {report.locked ? (
                    <Link to={`/${currentLang}/signin`} className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-widest">
                      Login to Access <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <button className="flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-widest">
                      Download PDF <Download size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-white/30">
            <FileText size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg font-display font-bold">No reports match your search.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 p-8 lg:p-12 bg-dark-card border border-white/5 rounded-[60px] text-center group hover:border-primary/20 transition-all relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Need a Custom Research Report?</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8 text-sm">Our investment intelligence team can produce tailored market studies for institutional investors and corporate partners.</p>
            <Link to={`/${currentLang}/contact`} className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-dark rounded-full font-display font-bold hover:bg-white transition-all">
              Request Custom Report <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
