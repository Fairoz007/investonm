import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, ChevronDown, FileText, ShieldCheck, ArrowRight, Download, Building2, Landmark, Globe2, Leaf } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const legalAreas = [
  {
    icon: <Building2 size={22} />,
    title: 'Foreign Investment Law',
    summary: 'Royal Decree No. 50/2019 — Oman\'s primary legislation governing foreign direct investment, ownership rights, and business establishment.',
    highlights: [
      '100% foreign ownership permitted in most sectors',
      'Streamlined licensing through Invest Easy platform',
      'Dispute resolution through recognized international arbitration',
      'Protected repatriation of profits and capital',
    ],
    tag: 'Core Legislation',
  },
  {
    icon: <Landmark size={22} />,
    title: 'Free Zone Regulations',
    summary: 'Special economic zones including Duqm SEZ, Sohar Freezone, and Salalah Freezone offer unique regulatory environments.',
    highlights: [
      'Corporate tax exemption up to 30 years',
      'Full customs duty exemption on goods',
      '100% foreign ownership without local sponsor',
      'Streamlined work visa and permit procedures',
    ],
    tag: 'Investment Zones',
  },
  {
    icon: <Globe2 size={22} />,
    title: 'Corporate & Commercial Law',
    summary: 'Commercial Companies Law (Royal Decree 18/2019) governs the formation, operation, and dissolution of business entities in Oman.',
    highlights: [
      'LLC, SAOG, SAOC, and Branch Office structures available',
      'Minimum capital requirements by entity type',
      'Mandatory Omanisation ratios (Oman labor participation)',
      'Annual financial reporting requirements',
    ],
    tag: 'Business Formation',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Tax & Fiscal Framework',
    summary: 'Oman offers one of the most competitive tax environments in the GCC, with no personal income tax and a corporate tax rate of 15%.',
    highlights: [
      '0% personal income tax',
      '15% corporate income tax (5% for SMEs)',
      'Double tax treaties with 35+ countries',
      'VAT at 5% — lowest rates in the region',
    ],
    tag: 'Taxation',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Environmental & Sustainability Regulations',
    summary: 'Oman\'s environmental laws align with Vision 2040\'s sustainability pillars, requiring ESG compliance for major investments.',
    highlights: [
      'Environmental Impact Assessment (EIA) mandatory for large projects',
      'Green building codes and LEED compliance incentives',
      'Carbon neutrality targets by 2050',
      'Renewable energy purchase obligation for industrial zones',
    ],
    tag: 'ESG Compliance',
  },
  {
    icon: <FileText size={22} />,
    title: 'Intellectual Property Law',
    summary: 'Royal Decree 67/2008 and subsequent amendments protect patents, trademarks, copyrights, and trade secrets in Oman.',
    highlights: [
      'WIPO member state — international IP protection',
      'Patent protection for 20 years',
      'Trademark registration through MOCIIP',
      'Copyright protection for 70 years post-mortem',
    ],
    tag: 'IP Protection',
  },
];

export default function Laws() {
  const { lang } = useParams();
  const currentLang = lang || 'en';
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/8 via-transparent to-cyan-600/8 pointer-events-none" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="as-subtitle-2 mb-8 border-primary/20 text-primary uppercase tracking-widest">
              Legal Framework
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight">
              Laws &{' '}
              <span className="gradient-text">Regulations</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed">
              Navigate Oman's investor-friendly legal landscape — built to protect, incentivize, and accelerate international business.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-24">
        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { stat: '0%', label: 'Personal Income Tax' },
            { stat: '15%', label: 'Corporate Tax Rate' },
            { stat: '35+', label: 'Tax Treaty Countries' },
            { stat: '100%', label: 'Foreign Ownership (most sectors)' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-dark-card border border-white/5 rounded-3xl p-6 text-center group hover:border-primary/30 transition-all"
            >
              <p className="text-3xl font-display font-black text-primary mb-2">{item.stat}</p>
              <p className="text-xs text-white/40 leading-snug">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Legal Areas Accordion */}
        <div className="space-y-3 mb-20">
          {legalAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="bg-dark-card border border-white/5 rounded-3xl overflow-hidden hover:border-primary/20 transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center gap-5 p-6 lg:p-8 text-left group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${openIdx === idx ? 'bg-primary text-dark' : 'bg-white/5 text-primary'}`}>
                  {area.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-display font-bold">{area.title}</h3>
                    <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">{area.tag}</span>
                  </div>
                  <p className="text-xs text-white/40 hidden sm:block">{area.summary}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-white/30 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-white/5">
                      <p className="text-sm text-white/50 mt-5 mb-5 sm:hidden">{area.summary}</p>
                      <ul className="space-y-2.5">
                        {area.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-sm text-white/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-widest">
                        Download Full Text <Download size={13} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 lg:p-12 bg-primary rounded-[60px] text-dark flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">Need Legal Consultation?</h2>
            <p className="opacity-70 text-sm max-w-lg">Our team can connect you with Oman's leading investment law firms and regulatory advisors to guide your legal setup.</p>
          </div>
          <Link
            to={`/${currentLang}/contact`}
            className="flex-shrink-0 px-10 py-5 bg-dark text-white rounded-full font-display font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-xl"
          >
            Speak to Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
