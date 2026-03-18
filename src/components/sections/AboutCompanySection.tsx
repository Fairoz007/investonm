import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, History, Target, Users } from 'lucide-react';

export const AboutCompanySection = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const displayLang = lang || 'en';

    return (
        <section className="py-24 relative overflow-hidden border-t border-white/5">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left side: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                            <img 
                                src="/images/about-shomoukh.png" 
                                alt="Shomoukh Story" 
                                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/90 via-transparent to-transparent" />
                            
                            {/* Floating Stats or Info */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-10 left-10 right-10 p-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                                        <History className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold">18+ Years</h4>
                                        <p className="text-white/70 text-sm tracking-wide font-medium">Investment Excellence</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side: Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                                {t('footer.text.11')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Defining the Future of <span className="text-blue-500">Strategic Investment</span> in Oman
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8 font-light">
                                {t('home.text.3')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                                        <Target className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Our Mission</h4>
                                        <p className="text-sm text-slate-500 font-light">{t('whoweare.text.5')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Our Leadership</h4>
                                        <p className="text-sm text-slate-500 font-light">Led by the Al Hashmi family and world-class experts.</p>
                                    </div>
                                </div>
                            </div>

                            <Link 
                                to={`/${displayLang}/who-we-are`}
                                className="btn-premium w-full sm:w-fit px-12"
                            >
                                Learn Our Story <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    );
};
