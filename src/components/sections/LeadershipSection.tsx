import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { User, Quote } from 'lucide-react';

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

    const chairman = {
        name: t("leadership.chairman.name"),
        position: t("leadership.chairman.title"),
        photo: "https://ges.om/assets/img/chirman.png",
    };

    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-transparent">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 items-start"
                >
                    {/* Left Side: Content */}
                    <motion.div variants={fadeInUp} className="lg:col-span-7 xl:col-span-8 flex flex-col order-last lg:order-first">
                        <header className="mb-8 sm:mb-10">
                            <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4">
                                {t("leadership.chairman.message_title")}
                            </h2>
                            <p className="gradient-text text-base sm:text-lg lg:text-xl font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8">
                                Strategic Investment Oman
                            </p>
                        </header>

                        <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed font-normal pl-4 sm:pl-0">
                            {t("leadership.chairman.message_text").split('\n\n').map((paragraph: string, idx: number) => (
                                <p key={idx} className="relative">
                                    {idx === 0 && (
                                        <span className="text-3xl sm:text-4xl text-amber-500/20 absolute -left-6 sm:-left-8 -top-2 font-serif font-bold">"</span>
                                    )}
                                    {paragraph}
                                    {idx === t("leadership.chairman.message_text").split('\n\n').length - 1 && (
                                        <span className="inline-block ml-1 opacity-10 font-serif">"</span>
                                    )}
                                </p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-white/80 font-bold mb-1 text-sm uppercase tracking-widest opacity-60 italic">Warm regards,</p>
                            <p className="text-white font-extrabold text-2xl tracking-tight">{chairman.name}</p>
                            <p className="text-blue-400 font-bold text-xs tracking-widest mt-2 uppercase">{chairman.position}</p>
                            <p className="text-white/30 text-[10px] font-bold tracking-widest mt-1 uppercase">Shomoukh International Investment</p>
                        </div>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div variants={fadeInUp} className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end lg:pt-12 order-first lg:order-last">
                        <div className="relative group w-full max-w-[450px]">
                            {/* Glass Card for Image */}
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/[0.15] group-hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.6)]">
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

                                {/* Subtle corner accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF7300]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />

                                {/* Floating Detail */}
                                <div className="absolute top-6 right-6 z-20">
                                    <div className="p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                                        <Quote className="w-5 h-5 text-[#FF7300]" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements behind image */}
                            <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/5 rounded-[2rem] -z-10 group-hover:border-amber-500/20 transition-colors duration-1000" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
