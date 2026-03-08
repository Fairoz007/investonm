import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Zap, Diamond, Globe2, MapPin, BookOpen, Anchor, Building2, TrendingUp, Target, Briefcase } from 'lucide-react';

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
        overview: 'Oman is rapidly transitioning to long-term energy sustainability, combining its strong oil and gas foundation with a massive focus on renewable energy.',
        potential: 'Limitless potential in solar and wind farms, green hydrogen production, and energy storage solutions.',
        future: 'Targeting zero carbon emissions by 2050 and becoming one of the world’s largest green hydrogen exporters.',
        img: '/images/hero-energy.jpg'
    },
    {
        id: 'luxury',
        name: 'Luxury',
        icon: Diamond,
        overview: 'High-end tourism, exclusive lifestyle projects, and premium lifestyle developments are reshaping Oman’s luxury sector.',
        potential: 'Developing ultra-luxury resorts, exclusive mixed-use communities, and premium retail destinations.',
        future: 'Attracting high-net-worth individuals and establishing Oman as the premier luxury destination in the region.',
        img: '/images/hero-scientist.jpg' // Placeholder, imagine luxury imagery
    },
    {
        id: 'trade',
        name: 'Trade',
        icon: Globe2,
        overview: 'Oman is a historic maritime powerhouse, now functioning as a modern regional trade hub with exceptional free zones.',
        potential: 'Incentivized free zones (Sohar, Salalah, Duqm) providing 100% foreign ownership and zero customs duties.',
        future: 'Expanding multi-modal connectivity to cement Oman’s position as the primary gateway linking Asia, Africa, and the MENA region.',
        img: '/images/oman_tech.png'
    },
    {
        id: 'investments',
        name: 'Investments',
        icon: Briefcase,
        overview: 'Oman’s robust financial services sector supports large-scale development projects and corporate growth.',
        potential: 'Opportunities in wealth management, fintech, venture capital, and sovereign-backed infrastructure projects.',
        future: 'A modernized, digitized financial ecosystem driving cross-border investments and massive sovereign wealth allocation.',
        img: '/images/hero-engineers.jpg'
    },
    {
        id: 'tourism',
        name: 'Tourism & Hospitality',
        icon: MapPin,
        overview: 'From diverse landscapes to deeply rooted heritage, Oman offers authentic and sustainable tourism experiences.',
        potential: 'Developing eco-resorts, adventure tourism, heritage sites, and premium coastal developments.',
        future: 'Vision 2040 aims for tourism to contribute significantly to the GDP, drawing millions of international visitors annually.',
        img: '/images/oman_hero.png'
    },
    {
        id: 'education',
        name: 'Education',
        icon: BookOpen,
        overview: 'Building a knowledge-based economy requires top-tier educational institutions and vocational training centers.',
        potential: 'Establishing international universities, specialized research centers, and future-ready vocational programs.',
        future: 'A highly skilled, innovative local workforce driving Oman’s global competitiveness and knowledge export.',
        img: '/images/oman_industry.png'
    },
    {
        id: 'logistics',
        name: 'Logistics',
        icon: Anchor,
        overview: 'Oman’s world-class ports and seamless shipping routes form the backbone of the nation’s logistics advantage.',
        potential: 'Investing in port expansion, cold chain logistics, rail networks, and integrated warehousing facilities.',
        future: 'Transforming into a top 10 global logistics hub, providing uninterrupted global supply chain connectivity.',
        img: '/images/hero-manufacturing.jpg'
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        icon: Building2,
        overview: 'An expanding population and an influx of international investors are driving robust commercial and residential demand.',
        potential: 'Commercial centers, sustainable residential communities, and futuristic smart-city developments (like Sultan Haitham City).',
        future: 'A thriving, sustainable urban landscape meeting global standards of living and commercial operational excellence.',
        img: '/images/oman_landscape.png'
    }
];

export default function KeySectors() {
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
                        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]">Investment Sectors</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto"
                    >
                        Explore diverse high-growth sectors targeted for rapid expansion under Oman Vision 2040.
                    </motion.p>
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
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                            >
                                <div className="lg:w-1/2 w-full space-y-6">
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center">
                                            <sector.icon className="w-7 h-7 text-[#00c2b5]" />
                                        </div>
                                        <h2 className="text-3xl lg:text-5xl font-bold">{sector.name}</h2>
                                    </div>

                                    <div className="space-y-6 text-lg">
                                        <div>
                                            <h4 className="text-[#00c2b5] font-semibold uppercase tracking-wider text-sm mb-2">Overview</h4>
                                            <p className="text-white/80 leading-relaxed">{sector.overview}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-[#00c2b5] font-semibold uppercase tracking-wider text-sm mb-2">Investment Potential</h4>
                                            <p className="text-white/80 leading-relaxed flex items-start gap-2">
                                                <TrendingUp className="w-5 h-5 text-white/50 shrink-0 mt-1" />
                                                {sector.potential}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-[#00c2b5] font-semibold uppercase tracking-wider text-sm mb-2">Future Opportunities</h4>
                                            <p className="text-white/80 leading-relaxed flex items-start gap-2">
                                                <Target className="w-5 h-5 text-white/50 shrink-0 mt-1" />
                                                {sector.future}
                                            </p>
                                        </div>
                                    </div>

                                    <button className="mt-8 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full font-medium flex items-center gap-2 transition-colors">
                                        Explore {sector.name} Projects <TrendingUp className="w-4 h-4 text-[#00c2b5]" />
                                    </button>
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
