import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { LeadershipSection } from '@/components/sections/LeadershipSection';

const fadeInUp: Variants = {
 hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
 visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease:"easeOut" } }
};

const popIn: Variants = {
 hidden: { opacity: 0, scale: 0.8 },
 visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease:"easeOut" } }
};

export default function WhoWeAre() {
 const { t } = useTranslation();

 return (
 <div className="min-h-screen text-slate-300 overflow-hidden pt-24">
 {/* Hero Section */}
 <section id="story" className="relative h-[350px] flex items-center overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/images/oman_hero.png')] bg-cover bg-center opacity-20 grayscale-[50%]" />
 <div className="absolute inset-0 ]" />
 </div>
 <div className="container-custom relative z-10 text-left w-full">
 <motion.div
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex items-center justify-start gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4"
>
 <span className="opacity-50 text-white">Home</span>
 <span className="opacity-20 text-white">/</span>
 <span>{t('whoweare.text.1')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, ease:"easeOut" }}
 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tighter text-white"
>
 {t('whoweare.text.1')} <span className="text-blue-500"> {t('whoweare.text.2')} </span>
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease:"easeOut" }}
 className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl font-light"
>
 {t('whoweare.text.3')}
 </motion.p>
 </div>
 </section>

 {/* Mission & Vision */}
 <section id="what-we-do" className="py-20 relative overflow-hidden border-t border-white/5">
 <div className="container-custom relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={fadeInUp}
 className="bg-card border border-border rounded-lg shadow-sm p-10 lg:p-16 group"
>
 <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors">
 <Target className="w-10 h-10 text-blue-400 group-hover:text-white" />
 </div>
 <h2 className="text-4xl font-bold mb-8 text-white" id="mission"> {t('whoweare.text.4')} </h2>
 <p className="text-xl text-slate-400 leading-relaxed font-light">
 {t('whoweare.text.5')}
 </p>
 </motion.div>

 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={fadeInUp}
 className="bg-card border border-border rounded-lg shadow-sm p-10 lg:p-16 group"
>
 <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors">
 <Eye className="w-10 h-10 text-blue-400 group-hover:text-white" />
 </div>
 <h2 className="text-4xl font-bold mb-8 text-white" id="vision"> {t('whoweare.text.6')} </h2>
 <p className="text-xl text-slate-400 leading-relaxed font-light">
 {t('whoweare.text.7')}
 </p>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Core Values Section */}
 <section className="py-20 border-t border-white/5 relative">
 <div className="container-custom text-center relative z-10">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="max-w-4xl mx-auto mb-16 space-y-6"
>
 <h2 className="text-4xl md:text-6xl font-bold text-white">{t('whoweare.values.title')}</h2>
 <p className="text-xl text-slate-400 font-light">{t('whoweare.values.subtitle')}</p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
 {[
 { icon: ShieldCheck, title:"whoweare.values.1.title", desc:"whoweare.values.1.desc" },
 { icon: Heart, title:"whoweare.values.2.title", desc:"whoweare.values.2.desc" },
 { icon: Award, title:"whoweare.values.3.title", desc:"whoweare.values.3.desc" }
 ].map((value, idx) => (
 <motion.div
 key={idx}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={popIn}
 className="bg-card border border-border rounded-lg shadow-sm-alt p-12 text-center flex flex-col items-center group hover:bg-white/5 transition-all"
>
 <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors">
 <value.icon className="w-10 h-10 text-blue-400 group-hover:text-white" />
 </div>
 <h3 className="text-2xl font-bold mb-6 text-white">{t(value.title)}</h3>
 <p className="text-sm text-slate-500 leading-relaxed font-light">{t(value.desc)}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Investor Success Stories */}
 <section id="success" className="py-20 border-t border-white/5 relative overflow-hidden">
 <div className="container-custom relative z-10">
 <div className="flex flex-col lg:flex-row gap-20 items-center">
 <div className="lg:w-1/2 space-y-12">
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="space-y-6"
>
 <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">{t('whoweare.success.title')}</h2>
 <p className="text-xl text-slate-400 font-light">{t('whoweare.success.subtitle')}</p>
 </motion.div>

 <div className="space-y-8">
 {[
 { title:"whoweare.success.1.title", desc:"whoweare.success.1.desc" },
 { title:"whoweare.success.2.title", desc:"whoweare.success.2.desc" }
 ].map((story, idx) => (
 <motion.div
 key={idx}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="flex gap-6 p-10 bg-card border border-border rounded-lg shadow-sm items-start group transition-all"
>
 <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600 transition-colors">
 <CheckCircle2 className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
 </div>
 <div className="space-y-3">
 <h4 className="text-2xl font-bold text-white">{t(story.title)}</h4>
 <p className="text-base text-slate-500 leading-relaxed font-light">{t(story.desc)}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 <div className="lg:w-1/2">
 <motion.div
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 1.2, ease:"easeOut" }}
 className="aspect-square rounded-[4rem] overflow-hidden relative border border-white/10"
>
 <img src="/images/oman_landscape.png" alt="Success in Oman" className="object-cover w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-1000" />
 <div className="absolute inset-0 ]" />
 </motion.div>
 </div>
 </div>
 </div>
 </section>

 {/* Leadership Section */}
 <LeadershipSection />

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>

 );
}
