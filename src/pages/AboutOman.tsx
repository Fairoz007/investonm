import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, TrendingUp, Building2, Landmark, Target } from 'lucide-react';
import { useTranslation } from "react-i18next";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function AboutOman() {
    const { t } = useTranslation();
    return (
        <div className="bg-[#F5F5F5] min-h-screen text-[#222222] overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center hero-gradient">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-10" />
                    <div className="absolute inset-0 bg-white/10" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        {t('aboutoman.text.1')} <span className="text-white/90"> {t('aboutoman.text.2')} </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
                    >
                        {t('aboutoman.text.3')} </motion.p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="space-y-24"
                    >

                        {/* Oman’s Strategic Location */}
                        <motion.div id="location" variants={fadeInUp} className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#8A6BCB]/10 flex items-center justify-center mb-6">
                                    <MapPin className="w-8 h-8 text-[#8A6BCB]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#222222]"> {t('aboutoman.text.4')} </h2>
                                <p className="text-lg text-[#666666] leading-relaxed">
                                    {t('aboutoman.text.5')} </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative">
                                <img src="/images/oman_industry.png" alt="Strategic Location" className="object-cover w-full h-full opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00c2b5]/20 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Economic Stability */}
                        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#8A6BCB]/10 flex items-center justify-center mb-6">
                                    <TrendingUp className="w-8 h-8 text-[#8A6BCB]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#222222]"> {t('aboutoman.text.6')} </h2>
                                <p className="text-lg text-[#666666] leading-relaxed">
                                    {t('aboutoman.text.7')} </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-white/30 text-2xl font-bold"> {t('aboutoman.text.8')} </span>
                            </div>
                        </motion.div>

                        {/* Infrastructure Development */}
                        <motion.div id="infrastructure" variants={fadeInUp} className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#8A6BCB]/10 flex items-center justify-center mb-6">
                                    <Building2 className="w-8 h-8 text-[#8A6BCB]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#222222]"> {t('aboutoman.text.9')} </h2>
                                <p className="text-lg text-[#666666] leading-relaxed">
                                    {t('aboutoman.text.10')} </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative">
                                <img src="/images/hero-energy.jpg" alt="Infrastructure" className="object-cover w-full h-full opacity-70" />
                            </div>
                        </motion.div>

                        {/* Quality of Life */}
                        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#8A6BCB]/10 flex items-center justify-center mb-6">
                                    <Landmark className="w-8 h-8 text-[#8A6BCB]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#222222]"> {t('aboutoman.text.11')} </h2>
                                <p className="text-lg text-[#666666] leading-relaxed">
                                    {t('aboutoman.text.12')} </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative">
                                <img src="/images/oman_landscape.png" alt="Quality of Life" className="object-cover w-full h-full opacity-70" />
                            </div>
                        </motion.div>

                        {/* Vision 2040 */}
                        <motion.div id="vision2040" variants={fadeInUp} className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#8A6BCB]/10 flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-[#8A6BCB]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#222222]"> {t('aboutoman.text.13')} </h2>
                                <p className="text-lg text-[#666666] leading-relaxed">
                                    {t('aboutoman.text.14')} </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative bg-white border border-[#4F3C8C]/10 flex items-center justify-center">
                                <img src="/images/Oman_Vision_2040_Logo.png" alt="Vision 2040" className="opacity-90 h-32" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}
