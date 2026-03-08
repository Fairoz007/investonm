import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, TrendingUp, Building2, Landmark, Target } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function AboutOman() {
    return (
        <div className="bg-[#020b0d] min-h-screen text-white overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020b0d] via-transparent to-[#020b0d]" />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        Why Oman is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]">Global Investment Destination</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto"
                    >
                        Discover the advantages of investing in a politically stable, strategically located, and rapidly growing economy.
                    </motion.p>
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
                                <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6">
                                    <MapPin className="w-8 h-8 text-[#00c2b5]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Oman’s Strategic Location</h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Situated exactly at the crossroads of Asia, Africa, and the Middle East, Oman holds a prime geographical advantage. With deep-water ports facing the Arabian Sea and Indian Ocean, bypass the Strait of Hormuz completely, offering safe, fast, and direct access to global trade routes.
                                </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative">
                                <img src="/images/oman_industry.png" alt="Strategic Location" className="object-cover w-full h-full opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#00c2b5]/20 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Economic Stability */}
                        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6">
                                    <TrendingUp className="w-8 h-8 text-[#00c2b5]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Economic Stability</h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Oman embraces a long-standing tradition of political and economic stability, characterized by peaceful foreign policies and solid structural reforms. It offers foreign investors a secure environment, backed by robust fiscal policies, low inflation rates, and a reliable regulatory framework.
                                </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative bg-white/5 border border-white/10 flex items-center justify-center">
                                <span className="text-white/30 text-2xl font-bold">Stable Economy</span>
                            </div>
                        </motion.div>

                        {/* Infrastructure Development */}
                        <motion.div id="infrastructure" variants={fadeInUp} className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6">
                                    <Building2 className="w-8 h-8 text-[#00c2b5]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Infrastructure Development</h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Oman has invested heavily in creating world-class infrastructure. This includes smart cities, ultra-modern airports, massive logistics networks, deep-water ports (such as Sohar, Salalah, and Duqm), and specialized free and industrial zones that cater precisely to varied investment needs.
                                </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative">
                                <img src="/images/hero-energy.jpg" alt="Infrastructure" className="object-cover w-full h-full opacity-70" />
                            </div>
                        </motion.div>

                        {/* Quality of Life */}
                        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6">
                                    <Landmark className="w-8 h-8 text-[#00c2b5]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality of Life</h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    Consistently ranked among the safest countries globally, Oman offers an exceptional quality of life. An inviting mix of rich cultural heritage, breathtaking natural landscapes, premium healthcare, top-tier international schools, and a welcoming society ensures a perfect environment for expatriates and families.
                                </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative">
                                <img src="/images/oman_landscape.png" alt="Quality of Life" className="object-cover w-full h-full opacity-70" />
                            </div>
                        </motion.div>

                        {/* Vision 2040 */}
                        <motion.div id="vision2040" variants={fadeInUp} className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-[#00c2b5]" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vision 2040</h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    The long-term national development strategy, Oman Vision 2040, is the catalyst for economic diversification. It aims to reduce reliance on oil, energize the private sector, foster innovation, and cultivate global competitiveness, positioning Oman as a major player in the global economy of tomorrow.
                                </p>
                            </div>
                            <div className="md:w-1/2 aspect-video rounded-3xl overflow-hidden relative bg-white/5 border border-white/10 flex items-center justify-center">
                                <img src="/images/Oman_Vision_2040_Logo.png" alt="Vision 2040" className="opacity-50 invert h-32" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}
