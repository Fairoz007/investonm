import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, Eye, Briefcase, BarChart3, Users2, Building, Ship } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WhoWeAre() {
    const { t } = useTranslation();
    const { lang } = useParams();
    const displayLang = lang || 'en';

    return (
        <div className="bg-[#020b0d] min-h-screen text-white overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center border-b border-white/5 bg-[#041416]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020b0d] to-[#041416] opacity-80" />
                <div className="absolute inset-0 opacity-20 bg-[url('/images/oman_hero.png')] bg-cover bg-center" />
                <div className="container-custom relative z-10 text-center max-w-4xl">
                    <div className="w-20 h-20 rounded-full bg-[#00c2b5]/10 border border-[#00c2b5]/30 flex items-center justify-center mx-auto mb-8">
                        <Building className="w-10 h-10 text-[#00c2b5]" />
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        {t('whoweare.text.1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]"> {t('whoweare.text.2')} </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 leading-relaxed"
                    >
                        {t('whoweare.text.3')} </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-16 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00c2b5]/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />
                            <Target className="w-16 h-16 text-[#00c2b5] mb-8 relative z-10" />
                            <h2 className="text-3xl font-bold mb-6 relative z-10" id="mission"> {t('whoweare.text.4')} </h2>
                            <p className="text-lg text-white/70 leading-relaxed relative z-10">
                                {t('whoweare.text.5')} </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-16 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00c2b5]/5 rounded-full blur-[80px] -ml-32 -mt-32 transition-transform duration-1000 group-hover:scale-150" />
                            <Eye className="w-16 h-16 text-[#00c2b5] mb-8 relative z-10" />
                            <h2 className="text-3xl font-bold mb-6 relative z-10" id="vision"> {t('whoweare.text.6')} </h2>
                            <p className="text-lg text-white/70 leading-relaxed relative z-10">
                                {t('whoweare.text.7')} </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-[#041416] border-t border-white/5" id="services">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6"> {t('whoweare.text.8')} </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-white/70">
                            {t('whoweare.text.9')} </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {[
                            { icon: Briefcase, title: "whoweare.service.title.1", desc: "whoweare.service.desc.1" },
                            { icon: BarChart3, title: "whoweare.service.title.2", desc: "whoweare.service.desc.2" },
                            { icon: Users2, title: "whoweare.service.title.3", desc: "whoweare.service.desc.3" },
                            { icon: Building, title: "whoweare.service.title.4", desc: "whoweare.service.desc.4" },
                            { icon: Ship, title: "whoweare.service.title.5", desc: "whoweare.service.desc.5" }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={popIn}
                                className="bg-white/5 border border-white/10 hover:border-[#00c2b5]/30 rounded-3xl p-8 flex flex-col items-center text-center group transition-colors"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6 group-hover:bg-[#00c2b5]/20 group-hover:scale-110 transition-all duration-300 transform">
                                    <service.icon className="w-8 h-8 text-[#00c2b5]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{t(service.title)}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {t(service.desc)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
