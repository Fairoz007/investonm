import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Ship, Globe2, Landmark, ShieldCheck, Building2, Zap } from 'lucide-react';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
 hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
 visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease:"easeOut" } }
};

const SECTIONS = [
 {
 id: 'infrastructure',
 icon: Ship,
 title: 'aboutoman.infra.title',
 desc: 'aboutoman.infra.desc',
 img: '/images/hero-energy.jpg'
 },
 {
 id: 'legislation',
 icon: ShieldCheck,
 title: 'aboutoman.legislation.title',
 desc: 'aboutoman.legislation.desc',
 img: '/images/hero-engineers.jpg'
 },
 {
 id: 'ecosystem',
 icon: Building2,
 title: 'aboutoman.ecosystem.title',
 desc: 'aboutoman.ecosystem.desc',
 img: '/images/hero-manufacturing.jpg'
 },
 {
 id: 'location',
 icon: Globe2,
 title: 'aboutoman.location.title',
 desc: 'aboutoman.location.desc',
 img: '/images/oman_hero.png'
 },
 {
 id: 'hub',
 icon: Zap,
 title: 'aboutoman.hub.title',
 desc: 'aboutoman.hub.desc',
 img: '/images/hero-scientist.jpg'
 },
 {
 id: 'incentives',
 icon: Landmark,
 title: 'aboutoman.incentives.title',
 desc: 'aboutoman.incentives.desc',
 img: '/images/hero-energy.jpg'
 }
];

export default function AboutOman() {
 const { t } = useTranslation();

 return (
 <div className="min-h-screen text-slate-300 overflow-hidden pt-20">
 {/* Hero Section */}
 <section className="relative h-[400px] flex items-center overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-20 grayscale-[50%]" />
 <div className="absolute inset-0 ]" />
 </div>
 <div className="container-custom relative z-10 text-left w-full">
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex items-center justify-start gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-6"
>
 <span className="opacity-50">Home</span>
 <span className="opacity-20 text-white">/</span>
 <span>{t('aboutoman.text.1')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, ease:"easeOut" }}
 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tighter text-white"
>
 {t('aboutoman.text.1')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease:"easeOut" }}
 className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-light"
>
 {t('aboutoman.text.2')}
 </motion.p>
 </div>
 </section>

 {/* Main Introduction */}
 <section className="py-20 relative overflow-hidden border-t border-white/5">
 <div className="container-custom relative z-10">
 <div className="max-w-5xl mx-auto text-center space-y-10">
 <motion.p
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
>
 {t('aboutoman.text.3')}
 </motion.p>
 <motion.div
 initial={{ width: 0, opacity: 0 }}
 whileInView={{ width:"120px", opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 1, delay: 0.5 }}
 className="h-2 bg-blue-600 mx-auto rounded-full"
 />
 </div>
 </div>
 </section>

 {/* Detailed Sections Loop */}
 <section className="pb-20 border-t border-white/5">
 <div className="container-custom">
 <div className="space-y-16 md:space-y-24">
 {SECTIONS.map((section, idx) => (
 <motion.div
 key={section.id}
 id={section.id}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={fadeInUp}
 className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-16 lg:gap-20 items-center`}
>
 <div className="lg:w-1/2 space-y-6">
 <div className="flex items-center gap-6">
 <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-white/10 group transition-all hover:bg-blue-600">
 <section.icon className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors" />
 </div>
 <div className="h-px flex-1 bg-white/10" />
 </div>

 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
 {t(section.title)}
 </h2>

 <p className="text-xl text-slate-400 leading-relaxed font-light">
 {t(section.desc)}
 </p>

 <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 pt-6 w-full">
 <button className="btn-premium w-full sm:w-auto">
 Detailed Analysis
 </button>
 <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all w-full sm:w-auto min-h-[44px] flex items-center justify-center">
 Watch Video
 </button>
 </div>
 </div>

 <div className="lg:w-1/2 w-full">
 <div className="aspect-[1.6] rounded-3xl overflow-hidden border border-white/10 relative group">
 <div
 className="absolute inset-0 bg-cover bg-center transition-transform duration-[4000ms] group- grayscale-[20%] group-hover:grayscale-0"
 style={{ backgroundImage: `url(${section.img})` }}
 />
 <div className="absolute inset-0" />
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <ResearchDataCTA />
 </div>
 );
}
