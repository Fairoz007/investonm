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
        <div className="bg-background min-h-screen text-[var(--text-paragraph)] overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-10" />
                    <div className="absolute inset-0 hero-gradient opacity-90" />
                </div>
                <div className="container-custom relative z-10 text-left w-full text-white">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-start gap-2 text-[12px] font-medium uppercase tracking-wider opacity-70 mb-[10px]"
                    >
                        <span>Home</span>
                        <span className="opacity-40">/</span>
                        <span>{t('resources.text.2')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
                    >
                        {t('resources.text.2')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
                    >
                        {t('resources.text.3')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[14px] font-medium mt-[20px]"
                    >
                        {t('resources.text.1')}
                    </motion.div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Investor Guide */}
                        <motion.div
                            id="guide"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-black/5 hover:border-accent/50 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                                <BookOpen className="w-8 h-8 text-accent group-hover:text-white" />
                            </div>
                            <h3 className="text-[32px] font-semibold mb-4 leading-tight">{t('resources.guide.title')}</h3>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                {t('resources.guide.desc')}
                            </p>
                            <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm">
                                Download PDF <Download className="w-4 h-4" />
                            </button>
                        </motion.div>

                        {/* Business Simulator */}
                        <motion.div
                            id="simulator"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-black/5 hover:border-accent/50 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                                <Calculator className="w-8 h-8 text-accent group-hover:text-white" />
                            </div>
                            <h3 className="text-[32px] font-semibold text-[var(--heading-main)] mb-4 leading-tight">{t('resources.simulator.title')}</h3>
                            <p className="text-[var(--text-paragraph)] mb-8 leading-relaxed">
                                {t('resources.simulator.desc')}
                            </p>
                            <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm">
                                Open Simulator <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>

                        {/* Licenses Simulator */}
                        <motion.div
                            id="licenses"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-black/5 hover:border-accent/50 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                                <FileText className="w-8 h-8 text-accent group-hover:text-white" />
                            </div>
                            <h3 className="text-[32px] font-semibold mb-4 leading-tight">{t('resources.licenses.title')}</h3>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                {t('resources.licenses.desc')}
                            </p>
                            <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm">
                                Start Inquiry <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>

                        {/* Reports & Publications */}
                        <motion.div
                            id="reports"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-black/5 hover:border-accent/50 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-500">
                                <BarChart3 className="w-8 h-8 text-accent group-hover:text-white" />
                            </div>
                            <h3 className="text-[32px] font-semibold mb-4 leading-tight">{t('resources.reports.title')}</h3>
                            <p className="text-[#666666] mb-8 leading-relaxed">
                                {t('resources.reports.desc')}
                            </p>
                            <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm">
                                View Library <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Help Desk Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="bg-[var(--primary)] rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl text-white space-y-6 text-left">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Need specific data for your sector?</h2>
                                <p className="text-lg text-white/90">Our research team can provide custom reports tailored to your unique investment requirements.</p>
                                <button className="px-8 py-4 bg-accent hover:bg-accent/80 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                                    Request Custom Report
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
                                <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 text-white transition-all hover:bg-white/20">
                                    <Globe className="w-10 h-10 mb-6 text-white" />
                                    <h4 className="font-bold text-xl mb-3">Global Data</h4>
                                    <p className="text-sm text-white/80">Access worldwide market trends and benchmarks.</p>
                                </div>
                                <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 text-white transition-all hover:bg-white/20">
                                    <ShieldCheck className="w-10 h-10 mb-6 text-white" />
                                    <h4 className="font-bold text-xl mb-3">Trusted Source</h4>
                                    <p className="text-sm text-white/80">Verified government and institutional data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
