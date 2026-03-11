import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Ship, Globe2, Landmark, ShieldCheck, Building2, Zap } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
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
                        <span>{t('aboutoman.text.1')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
                    >
                        {t('aboutoman.text.1')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
                    >
                        {t('aboutoman.text.2')}
                    </motion.p>
                </div>
            </section>

            {/* Main Introduction */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-2xl md:text-3xl font-medium text-[#444444] leading-snug"
                        >
                            {t('aboutoman.text.3')}
                        </motion.p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100px" }}
                            viewport={{ once: true }}
                            className="h-1 bg-accent mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Detailed Sections Loop */}
            <section className="pb-24">
                <div className="container-custom">
                    <div className="space-y-40">
                        {SECTIONS.map((section, idx) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInUp}
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
                            >
                                <div className="lg:w-1/2 space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                                            <section.icon className="w-10 h-10 text-accent" />
                                        </div>
                                        <div className="h-px flex-1 bg-black/5" />
                                    </div>

                                    <h2 className="text-4xl md:text-6xl font-black text-[#222222] leading-none uppercase tracking-tighter">
                                        {t(section.title)}
                                    </h2>

                                    <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
                                        {t(section.desc)}
                                    </p>

                                    <div className="flex gap-4 pt-4">
                                        <button className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-bold text-sm hover:bg-[var(--primary-dark)] transition-all">
                                            Detailed Analysis
                                        </button>
                                        <button className="px-8 py-4 border border-black/10 rounded-full font-bold text-sm hover:bg-black/5 transition-all">
                                            Watch Video
                                        </button>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] relative group">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-110"
                                            style={{ backgroundImage: `url(${section.img})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent mix-blend-overlay" />
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
