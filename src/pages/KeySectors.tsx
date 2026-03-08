import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Zap, Diamond, Globe2, MapPin, BookOpen, Anchor, Building2, TrendingUp, Target, Briefcase } from 'lucide-react';
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

const SECTORS = [
    {
        id: 'energy',
        name: 'Energy',
        icon: Zap,
        overview: 'keysectors.energy.overview',
        potential: 'keysectors.energy.potential',
        future: 'keysectors.energy.future',
        img: '/images/hero-energy.jpg'
    },
    {
        id: 'luxury',
        name: 'Luxury',
        icon: Diamond,
        overview: 'keysectors.luxury.overview',
        potential: 'keysectors.luxury.potential',
        future: 'keysectors.luxury.future',
        img: '/images/luxury-oman.png'
    },

    {
        id: 'trade',
        name: 'Trade',
        icon: Globe2,
        overview: 'keysectors.trade.overview',
        potential: 'keysectors.trade.potential',
        future: 'keysectors.trade.future',
        img: '/images/oman_tech.png'
    },
    {
        id: 'investments',
        name: 'Investments',
        icon: Briefcase,
        overview: 'keysectors.investments.overview',
        potential: 'keysectors.investments.potential',
        future: 'keysectors.investments.future',
        img: '/images/hero-engineers.jpg'
    },
    {
        id: 'tourism',
        name: 'Tourism & Hospitality',
        icon: MapPin,
        overview: 'keysectors.tourism.overview',
        potential: 'keysectors.tourism.potential',
        future: 'keysectors.tourism.future',
        img: '/images/oman_hero.png'
    },
    {
        id: 'education',
        name: 'Education',
        icon: BookOpen,
        overview: 'keysectors.education.overview',
        potential: 'keysectors.education.potential',
        future: 'keysectors.education.future',
        img: '/images/oman_industry.png'
    },
    {
        id: 'logistics',
        name: 'Logistics',
        icon: Anchor,
        overview: 'keysectors.logistics.overview',
        potential: 'keysectors.logistics.potential',
        future: 'keysectors.logistics.future',
        img: '/images/hero-manufacturing.jpg'
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        icon: Building2,
        overview: 'keysectors.realestate.overview',
        potential: 'keysectors.realestate.potential',
        future: 'keysectors.realestate.future',
        img: '/images/oman_landscape.png'
    }
];

export default function KeySectors() {
    const { t } = useTranslation();
    const { lang } = useParams();
    const displayLang = lang || 'en';

    return (
        <div className="bg-[#020b0d] min-h-screen text-white overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center border-b border-white/5 bg-[#041416]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00c2b5]/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        {t('keysectors.text.1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]"> {t('keysectors.text.2')} </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto"
                    >
                        {t('keysectors.text.3')} </motion.p>
                </div>
            </section>

            {/* Sectors List */}
            <section className="py-24">
                <div className="container-custom">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        variants={staggerContainer}
                        className="space-y-16 lg:space-y-24"
                    >
                        {SECTORS.map((sector, index) => (
                            <motion.div
                                key={sector.id}
                                id={sector.id}
                                variants={fadeInUp}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center scroll-mt-32`}
                            >

                                <div className="lg:w-1/2 w-full space-y-6">
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center">
                                            <sector.icon className="w-7 h-7 text-[#00c2b5]" />
                                        </div>
                                        <h2 className="text-3xl lg:text-5xl font-bold">{t(sector.name)}</h2>
                                    </div>

                                    <div className="space-y-6 text-lg">
                                        <div>
                                            <h4 className="text-[#00c2b5] font-semibold uppercase tracking-wider text-sm mb-2"> {t('keysectors.text.4')} </h4>
                                            <p className="text-white/80 leading-relaxed">{t(sector.overview)}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[#00c2b5] font-semibold uppercase tracking-wider text-sm mb-2"> {t('keysectors.text.5')} </h4>
                                            <p className="text-white/80 leading-relaxed flex items-start gap-2">
                                                <TrendingUp className="w-5 h-5 text-white/50 shrink-0 mt-1" />
                                                {t(sector.potential)}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[#00c2b5] font-semibold uppercase tracking-wider text-sm mb-2"> {t('keysectors.text.6')} </h4>
                                            <p className="text-white/80 leading-relaxed flex items-start gap-2">
                                                <Target className="w-5 h-5 text-white/50 shrink-0 mt-1" />
                                                {t(sector.future)}
                                            </p>
                                        </div>
                                    </div>

                                    <Link to={`/${displayLang}/contact`} className="mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full font-medium inline-flex items-center gap-2 transition-colors">
                                        {t('keysectors.text.7')} {t(sector.name)}  {t('keysectors.text.8')} <TrendingUp className="w-4 h-4 text-[#00c2b5]" />
                                    </Link>
                                </div>

                                <div className="lg:w-1/2 w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${sector.img})` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b0d] via-transparent to-transparent opacity-60" />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
