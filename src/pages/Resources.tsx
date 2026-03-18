import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { BookOpen, Calculator, FileText, Download, ArrowRight, BarChart3, Globe, ShieldCheck } from 'lucide-react';
import { useTranslation } from "react-i18next";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Resources() {
    const { t } = useTranslation();

    return (
    <div className="bg-[#020617] min-h-screen text-white/90 overflow-hidden font-sans pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-20 grayscale-[50%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617]" />
        </div>
        <div className="container-custom relative z-10 text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-start gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary-light)] mb-6"
          >
            <span className="opacity-50 text-white">Home</span>
            <span className="opacity-20 text-white">/</span>
            <span>{t('resources.text.2')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tighter text-white font-sans"
          >
            {t('resources.text.2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-sans font-light"
          >
            {t('resources.text.3')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block px-6 py-2.5 rounded-full bg-[var(--primary)]/20 backdrop-blur-xl border border-[var(--primary)]/30 text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--primary-light)] mt-10"
          >
            {t('resources.text.1')}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-32 bg-gradient-to-b from-[#020617] to-[#0F172A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Resource Card Factory */}
            {[
              { id: 'guide', icon: BookOpen, title: 'resources.guide.title', desc: 'resources.guide.desc', action: 'Download PDF', actionIcon: Download },
              { id: 'simulator', icon: Calculator, title: 'resources.simulator.title', desc: 'resources.simulator.desc', action: 'Open Simulator', actionIcon: ArrowRight },
              { id: 'licenses', icon: FileText, title: 'resources.licenses.title', desc: 'resources.licenses.desc', action: 'Start Inquiry', actionIcon: ArrowRight },
              { id: 'reports', icon: BarChart3, title: 'resources.reports.title', desc: 'resources.reports.desc', action: 'View Library', actionIcon: ArrowRight }
            ].map((res) => (
              <motion.div
                key={res.id}
                id={res.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-2xl border border-white/10 hover:border-[var(--primary)]/50 transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-10 group-hover:bg-[var(--primary)] transition-all duration-500 shadow-lg">
                  <res.icon className="w-10 h-10 text-[var(--primary-light)] group-hover:text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-white font-sans leading-tight">
                  {t(res.title)}
                </h3>
                <p className="text-xl text-white/50 mb-10 leading-relaxed font-sans font-light">
                  {t(res.desc)}
                </p>
                <button className="flex items-center gap-3 text-[var(--primary-light)] font-bold uppercase tracking-[0.2em] text-xs group">
                  {res.action} <res.actionIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Desk Section */}
      <section className="py-32 bg-[#020617]">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#010307] rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px] -mr-48 -mt-48 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-left">
              <div className="max-w-xl text-white space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-sans">
                  Need specific <span className="text-[var(--primary)]">data</span> for your sector?
                </h2>
                <p className="text-xl text-white/60 font-sans font-light leading-relaxed">
                  Our research team can provide custom reports tailored to your unique investment requirements.
                </p>
                <button className="px-10 py-5 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-full font-bold font-sans transition-all transform hover:scale-105 shadow-2xl uppercase text-xs tracking-[0.2em]">
                  Request Custom Report
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
                <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white transition-all hover:bg-white/10 group">
                  <Globe className="w-12 h-12 mb-8 text-[var(--primary-light)] group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-bold text-2xl mb-4 font-sans text-white">Global Data</h4>
                  <p className="text-sm text-white/50 font-sans font-light">Access worldwide market trends and benchmarks.</p>
                </div>
                <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white transition-all hover:bg-white/10 group">
                  <ShieldCheck className="w-12 h-12 mb-8 text-[var(--primary-light)] group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-bold text-2xl mb-4 font-sans text-white">Trusted Source</h4>
                  <p className="text-sm text-white/50 font-sans font-light">Verified government and institutional data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}
