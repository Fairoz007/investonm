import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { User, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export const LeadershipSection = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'en';

    const chairman = {
        name: t("leadership.chairman.name"),
        position: t("leadership.chairman.title"),
        photo: "/images/chairman.jpg",
    };

    const leaders = [
        {
            name: t('ourExperts.ceo.name'),
            role: t('ourExperts.ceo.role'),
            image: "https://ges.om/assets/img/members/Jannat.jpg",
        },
        {
            name: t('ourExperts.vp.name'),
            role: t('ourExperts.vp.role'),
            image: "https://ges.om/assets/img/members/julanda.jpg",
        },
        {
            name: t('ourExperts.md.name'),
            role: t('ourExperts.md.role'),
            image: "https://ges.om/assets/img/members/jinan.jpg",
        }
    ];

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-transparent">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Chairman Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 items-start mb-24"
                >
                    {/* Left Side: Content */}
                    <motion.div variants={fadeInUp} className="lg:col-span-7 xl:col-span-8 flex flex-col order-last lg:order-first">
                        <header className="mb-8">
                            <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-balance">
                                {t("leadership.chairman.message_title")}
                            </h2>
                            <p className="gradient-text text-sm sm:text-base lg:text-lg font-black tracking-[0.3em] uppercase mb-8 opacity-60">
                                {t("ourStory.label")}
                            </p>
                        </header>

                        <div className="space-y-6 text-base sm:text-lg lg:text-xl text-slate-300/90 leading-relaxed font-normal">
                            {t("leadership.chairman.message_text").split('\n\n').map((paragraph: string, idx: number) => (
                                <p key={idx} className="relative">
                                    {idx === 0 && (
                                        <span className={`text-4xl text-amber-500/20 absolute ${currentLang === 'ar' || currentLang === 'fa' ? '-right-8' : '-left-8'} -top-2 font-serif font-bold`}>"</span>
                                    )}
                                    {paragraph}
                                    {idx === t("leadership.chairman.message_text").split('\n\n').length - 1 && (
                                        <span className="inline-block ml-1 opacity-10 font-serif">"</span>
                                    )}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-white/80 font-bold mb-1 text-sm uppercase tracking-widest opacity-40 italic">{t("common.readMore")}</p>
                            <p className="text-white font-extrabold text-2xl tracking-tight">{chairman.name}</p>
                            <p className="text-blue-400 font-bold text-xs tracking-widest mt-2 uppercase">{chairman.position}</p>
                            <p className="text-white/30 text-[10px] font-bold tracking-widest mt-1 uppercase">Shomoukh International Investment</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div variants={fadeInUp} className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end lg:pt-12 order-first lg:order-last">
                        <div className="relative group w-48 sm:w-full max-w-[450px]">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/[0.15]">
                                {chairman.photo ? (
                                    <img
                                        src={chairman.photo}
                                        alt={chairman.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover brightness-[1.02] contrast-[1.02] transition-transform [transition-duration:2.5s] ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/[0.03] flex items-center justify-center text-white/20">
                                        <User className="w-24 h-24 opacity-30" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/5 rounded-[2.5rem] -z-10 group-hover:border-amber-500/20 transition-colors duration-1000" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Team Grid Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="border-t border-white/5 pt-20"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className={currentLang === 'ar' || currentLang === 'fa' ? 'text-right' : 'text-left'}>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">{t("ourExperts.leadership")}</h3>
                            <p className="text-slate-400 text-sm sm:text-base max-w-xl">{t("ourExperts.heroDesc")}</p>
                        </div>
                        <Link 
                            to={`/${currentLang}/our-experts`}
                            className="group flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase hover:gap-3 transition-all"
                        >
                            {t("ourExperts.viewProfile")} <ArrowRight className={`w-4 h-4 ${currentLang === 'ar' || currentLang === 'fa' ? 'rotate-180' : ''}`} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {leaders.map((leader, i) => (
                            <motion.div 
                                key={i}
                                variants={fadeInUp}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-700">
                                    <img 
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    
                                    <div className={`absolute bottom-6 ${currentLang === 'ar' || currentLang === 'fa' ? 'right-6' : 'left-6'} right-6`}>
                                        <p className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-1">{leader.role}</p>
                                        <h4 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">{leader.name}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
