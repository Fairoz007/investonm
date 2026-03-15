import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { LeadershipSection } from '@/components/sections/LeadershipSection';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WhoWeAre() {
    const { t } = useTranslation();

    return (
        <div className="bg-background min-h-screen text-[var(--text-paragraph)] overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/oman_hero.png')] bg-cover bg-center opacity-10" />
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
                        <span>{t('whoweare.text.1')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
                    >
                        {t('whoweare.text.1')} <span className="text-white/80"> {t('whoweare.text.2')} </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
                    >
                        {t('whoweare.text.3')}
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="bg-neutral-50 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden group border border-black/5"
                        >
                            <Target className="w-16 h-16 text-accent mb-8 relative z-10" />
                            <h2 className="text-3xl font-bold mb-6 relative z-10 text-[#222222]" id="mission"> {t('whoweare.text.4')} </h2>
                            <p className="text-lg text-[#666666] leading-relaxed relative z-10">
                                {t('whoweare.text.5')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInUp}
                            className="bg-neutral-50 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden group border border-black/5"
                        >
                            <Eye className="w-16 h-16 text-accent mb-8 relative z-10" />
                            <h2 className="text-3xl font-bold mb-6 relative z-10 text-[#222222]" id="vision"> {t('whoweare.text.6')} </h2>
                            <p className="text-lg text-[#666666] leading-relaxed relative z-10">
                                {t('whoweare.text.7')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="container-custom text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto mb-20 space-y-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#222222]">{t('whoweare.values.title')}</h2>
                        <p className="text-lg text-[#666666]">{t('whoweare.values.subtitle')}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "whoweare.values.1.title", desc: "whoweare.values.1.desc" },
                            { icon: Heart, title: "whoweare.values.2.title", desc: "whoweare.values.2.desc" },
                            { icon: Award, title: "whoweare.values.3.title", desc: "whoweare.values.3.desc" }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={popIn}
                                className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-black/5 text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                                    <value.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{t(value.title)}</h3>
                                <p className="text-sm text-[#666666] leading-relaxed">{t(value.desc)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investor Success Stories */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="space-y-4"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-[#222222]">{t('whoweare.success.title')}</h2>
                                <p className="text-lg text-[#666666]">{t('whoweare.success.subtitle')}</p>
                            </motion.div>

                            <div className="space-y-6">
                                {[
                                    { title: "whoweare.success.1.title", desc: "whoweare.success.1.desc" },
                                    { title: "whoweare.success.2.title", desc: "whoweare.success.2.desc" }
                                ].map((story, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        className="flex gap-4 p-8 bg-[#F8FAFC] rounded-3xl border border-black/5 items-start"
                                    >
                                        <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-[#222222]">{t(story.title)}</h4>
                                            <p className="text-sm text-[#666666] leading-relaxed">{t(story.desc)}</p>
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
                                transition={{ duration: 1 }}
                                className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl relative"
                            >
                                <img src="/images/oman_landscape.png" alt="Success in Oman" className="object-cover w-full h-full" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
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
