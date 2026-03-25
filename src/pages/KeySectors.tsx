import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, TrendingUp, Zap, MapPin, Truck, Factory, Laptop, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { PageHeader } from '@/components/shared/PageHeader';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SECTORS = [
  {
    id: 'energy',
    icon: Zap,
    image: '/images/hero-energy.jpg',
    title: 'Energy',
    key: 'energy'
  },
  {
    id: 'technology',
    icon: Laptop,
    image: '/images/hero-scientist.jpg',
    title: 'Technology',
    key: 'technology'
  },
  {
    id: 'private-equity',
    icon: Briefcase,
    image: '/images/hero-manufacturing.jpg',
    title: 'Private Equity',
    key: 'privateequity'
  },
  {
    id: 'tourism',
    icon: MapPin,
    image: '/images/oman_landscape.png',
    title: 'Tourism',
    key: 'tourism'
  },
  {
    id: 'logistics',
    icon: Truck,
    image: '/images/hero-energy.jpg',
    title: 'Logistics',
    key: 'logistics'
  },
  {
    id: 'manufacturing',
    icon: Factory,
    image: '/images/hero-manufacturing.jpg',
    title: 'Manufacturing',
    key: 'manufacturing'
  }
];

export default function KeySectors() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24">
      <PageHeader 
        title={t('keysectors.text.1')}
        subtitle={t('keysectors.text.3')}
        breadcrumb={[{ label: t('keysectors.text.1') }]}
      />

      {/* Sectors Introduction */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Strategic Investment Opportunities
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-12" />
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="space-y-48">
        {SECTORS.map((sector, idx) => (
          <div key={sector.id} className="relative">
            <div className="container-custom">
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                <div className="lg:w-1/2 space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-7xl md:text-8xl font-black text-white/5 select-none tracking-tighter">
                        0{idx + 1}
                      </div>
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <sector.icon className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                      {sector.title}
                    </h3>

                    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500">
                      <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Strategic Overview</h4>
                      <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-light">
                        {t(`keysectors.${sector.key}.overview`)}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                        <div className="flex items-center gap-3 mb-4 text-blue-400">
                          <TrendingUp className="w-5 h-5" />
                          <span className="text-xs font-bold uppercase tracking-wider">Potential</span>
                        </div>
                        <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                          {t(`keysectors.${sector.key}.potential`)}
                        </p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all">
                        <div className="flex items-center gap-3 mb-4 text-blue-400">
                          <Target className="w-5 h-5" />
                          <span className="text-xs font-bold uppercase tracking-wider">Future</span>
                        </div>
                        <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
                          {t(`keysectors.${sector.key}.future`)}
                        </p>
                      </div>
                    </div>

                    {t(`keysectors.${sector.key}.goal`) !== `keysectors.${sector.key}.goal` && (
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        <span className="text-sm font-bold tracking-wide transition-all">Goal: {t(`keysectors.${sector.key}.goal`)}</span>
                      </div>
                    )}

                    <button className="flex items-center gap-3 group text-white font-bold uppercase tracking-widest text-[10px] pt-4 hover:text-blue-400 transition-colors">
                      Sector Exploration Guide
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-[3rem] border border-white/10"
                  >
                    <div className="aspect-[1.1] relative">
                      <img 
                        src={sector.image} 
                        alt={sector.title}
                        className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent opacity-80" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="mt-48">
        <ResearchDataCTA />
      </div>
    </div>
  );
}
