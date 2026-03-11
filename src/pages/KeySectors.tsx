import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Target, TrendingUp, Zap, MapPin, Truck, Factory, Laptop, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
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
                        <span>{t('keysectors.text.1')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
                    >
                        {t('keysectors.text.1')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
                    >
                        {t('keysectors.text.3')}
                    </motion.p>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="space-y-32">
                        {SECTORS.map((sector, idx) => (
                            <motion.div
                                key={sector.id}
                                id={sector.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInUp}
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="mb-[6px]">
                                        <div className="text-[#E2E2E2] font-semibold text-[48px] leading-none select-none">
                                            0.{idx + 1}
                                        </div>
                                    </div>

                                    <h2 className="text-[36px] font-bold text-[#1A1A1A] leading-tight mb-[18px]">
                                        {sector.title}
                                    </h2>

                                    <div className="space-y-[24px]">
                                        <div className="p-8 bg-neutral-50 rounded-[2.5rem] border border-black/5">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Overview</h3>
                                            <p className="text-lg text-[#666666] leading-relaxed">
                                                {t(`keysectors.${sector.key}.overview`)}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <TrendingUp className="w-5 h-5 text-accent" />
                                                    <h4 className="font-bold text-[#222222]">Potential</h4>
                                                </div>
                                                <p className="text-sm text-[#888888] leading-relaxed">
                                                    {t(`keysectors.${sector.key}.potential`)}
                                                </p>
                                            </div>
                                            <div className="p-6 bg-white rounded-3xl border border-black/5 shadow-sm">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Target className="w-5 h-5 text-accent" />
                                                    <h4 className="font-bold text-[#222222]">Future</h4>
                                                </div>
                                                <p className="text-sm text-[#888888] leading-relaxed">
                                                    {t(`keysectors.${sector.key}.future`)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Strategic Goal Section if available */}
                                        {t(`keysectors.${sector.key}.goal`) !== `keysectors.${sector.key}.goal` && (
                                            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl border border-accent/10">
                                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                                <span className="text-sm font-bold text-accent/70">Goal: {t(`keysectors.${sector.key}.goal`)}</span>
                                            </div>
                                        )}
                                    </div>

                                    <button className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm group">
                                        Exploration Guide <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>

                                <div className="lg:w-1/2 w-full">
                                    <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl relative group">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
                                            style={{ backgroundImage: `url(${sector.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
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
