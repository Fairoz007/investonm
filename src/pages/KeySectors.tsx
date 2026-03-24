import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, TrendingUp, Zap, MapPin, Truck, Factory, Laptop, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
 hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
 visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease:"easeOut" } }
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
 <div className="bg-[#020617] min-h-screen text-white/90 overflow-hidden font-sans pt-24">
 {/* Hero Section */}
 <section className="relative h-[450px] flex items-center overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-20 grayscale-[50%]" />
 <div className="absolute inset-0 ]" />
 </div>
 <div className="container-custom relative z-10 text-left w-full">
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex items-center justify-start gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary-light)] mb-6"
>
 <span className="opacity-50 text-white">Home</span>
 <span className="opacity-20 text-white">/</span>
 <span>{t('keysectors.text.1')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, ease:"easeOut" }}
 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tighter text-white font-sans"
>
 {t('keysectors.text.1')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease:"easeOut" }}
 className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-sans font-light"
>
 {t('keysectors.text.3')}
 </motion.p>
 </div>
 </section>

 {/* Sectors Grid */}
 <section className="py-16 md:py-32  relative overflow-hidden">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 pointer-events-none" />
 <div className="container-custom relative z-10">
 <div className="flex flex-col gap-24 md:gap-48">
 {SECTORS.map((sector, idx) => (
 <motion.div
 key={sector.id}
 id={sector.id}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={fadeInUp}
 className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 lg:gap-32 items-center`}
>
 <div className="lg:w-1/2 space-y-10">
 <div className="mb-2">
 <div className="text-[var(--primary-light)]/20 font-bold text-8xl md:text-9xl leading-none select-none font-sans tracking-tighter">
 0{idx + 1}
 </div>
 </div>

 <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8 font-sans">
 {sector.title}
 </h2>

 <div className="space-y-8">
 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:border-[var(--primary)]/50 transition-all">
 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-light)] mb-6 font-sans">Strategic Overview</h3>
 <p className="text-xl text-white/50 leading-relaxed font-sans font-light">
 {t(`keysectors.${sector.key}.overview`)}
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-[var(--primary)]/10 rounded-xl">
 <TrendingUp className="w-6 h-6 text-[var(--primary-light)]" />
 </div>
 <h4 className="font-bold text-white font-sans">Potential</h4>
 </div>
 <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
 {t(`keysectors.${sector.key}.potential`)}
 </p>
 </div>
 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-[var(--primary)]/10 rounded-xl">
 <Target className="w-6 h-6 text-[var(--primary-light)]" />
 </div>
 <h4 className="font-bold text-white font-sans">Future</h4>
 </div>
 <p className="text-sm text-white/40 leading-relaxed font-sans font-light">
 {t(`keysectors.${sector.key}.future`)}
 </p>
 </div>
 </div>

 {/* Strategic Goal Section if available */}
 {t(`keysectors.${sector.key}.goal`) !== `keysectors.${sector.key}.goal` && (
 <div className="flex items-center gap-4 p-6 bg-[var(--primary)]/5 rounded-2xl border border-[var(--primary)]/20">
 <CheckCircle2 className="w-6 h-6 text-[var(--primary-light)]" />
 <span className="text-sm font-bold text-[var(--primary-light)]/80 font-sans tracking-wide">Goal: {t(`keysectors.${sector.key}.goal`)}</span>
 </div>
 )}
 </div>

 <button className="flex items-center justify-center sm:justify-start gap-3 text-[var(--primary-light)] font-bold uppercase tracking-[0.2em] text-xs group pt-4 w-full sm:w-auto min-h-[44px]">
 Sector Exploration Guide <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
 </button>
 </div>

 <div className="lg:w-1/2 w-full">
 <div className="aspect-[1.2] rounded-[4rem] overflow-hidden relative group border border-white/10">
 <div
 className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] group- grayscale-[30%] group-hover:grayscale-0"
 style={{ backgroundImage: `url(${sector.image})` }}
 />
 <div className="absolute inset-0" />
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>
 );
}
