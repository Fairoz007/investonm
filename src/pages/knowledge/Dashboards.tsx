import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Globe2, Banknote, ArrowUpRight, Activity, PieChart, Lock, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const kpis = [
  { label: 'Total Portfolio Value', value: 'OMR 2.4B+', change: '+12.4%', icon: <Banknote size={22} />, up: true },
  { label: 'Active Investments', value: '38', change: '+3 this quarter', icon: <Activity size={22} />, up: true },
  { label: 'Sectors Covered', value: '10+', change: 'Across Oman', icon: <PieChart size={22} />, up: true },
  { label: 'Global Partners', value: '60+', change: '+8 YoY', icon: <Globe2 size={22} />, up: true },
];

const charts = [
  { title: 'Portfolio Growth (5-Year)', subtitle: 'Annual compounded returns across all sectors', locked: false },
  { title: 'Sector Allocation', subtitle: 'Distribution of capital by industry vertical', locked: false },
  { title: 'Regional Breakdown', subtitle: 'Investment presence across Oman and international markets', locked: true },
  { title: 'FDI Inflow Tracker', subtitle: 'Foreign direct investment flows — quarterly', locked: true },
];

export default function Dashboards() {
  const { lang } = useParams();
  const currentLang = lang || 'en';

  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10 pointer-events-none" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="as-subtitle-2 mb-8 border-primary/20 text-primary uppercase tracking-widest">
              Investor Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight">
              Investment{' '}
              <span className="gradient-text">Dashboards</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed">
              Real-time analytics and portfolio intelligence across Shomoukh's strategic investment clusters.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-24">
        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-dark-card border border-white/5 rounded-3xl p-6 group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {kpi.icon}
                </div>
                <TrendingUp size={14} className="text-emerald-400 opacity-70" />
              </div>
              <p className="text-2xl font-display font-bold mb-1">{kpi.value}</p>
              <p className="text-xs text-white/40 mb-1">{kpi.label}</p>
              <p className="text-xs text-emerald-400 font-semibold">{kpi.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {charts.map((chart, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-card border border-white/5 rounded-[40px] p-8 group hover:border-primary/20 transition-all relative overflow-hidden"
            >
              {chart.locked && (
                <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-[40px]">
                  <Lock size={32} className="text-white/20 mb-3" />
                  <p className="text-sm text-white/50 font-semibold mb-4">Investor Access Required</p>
                  <Link
                    to={`/${currentLang}/signin`}
                    className="px-6 py-3 bg-primary text-dark rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
                  >
                    Sign In <ArrowRight size={14} />
                  </Link>
                </div>
              )}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-display font-bold mb-1">{chart.title}</h3>
                  <p className="text-xs text-white/40">{chart.subtitle}</p>
                </div>
                <BarChart3 size={20} className="text-primary/60" />
              </div>
              {/* Chart placeholder */}
              <div className="h-40 flex items-end gap-2 px-2">
                {[55, 70, 45, 80, 65, 90, 72, 85, 60, 95, 78, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary/80 transition-all group-hover:from-primary/60 group-hover:to-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                <span className="text-xs text-white/30 font-mono">Last updated: Q1 2026</span>
                <button className="flex items-center gap-2 text-xs text-primary font-bold hover:text-white transition-colors">
                  Full Report <ArrowUpRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 lg:p-12 bg-primary rounded-[60px] text-dark flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">Access Full Analytics Suite</h2>
            <p className="text-sm opacity-70 max-w-lg">Sign in to your investor portal to unlock advanced dashboards, custom filters, and downloadable reports.</p>
          </div>
          <Link
            to={`/${currentLang}/signin`}
            className="flex-shrink-0 px-10 py-5 bg-dark text-white rounded-full font-display font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-xl"
          >
            Investor Login <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
