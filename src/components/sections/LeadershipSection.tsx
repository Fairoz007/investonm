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
        <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
            <div className="container-custom relative z-10 px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    {/* Chairman Image & Badge */}
                    <motion.div variants={fadeInUp} className="w-full lg:w-[35%] flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Reflection Glow */}
                            <div className="absolute -inset-8 bg-blue-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative w-[300px] md:w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-white/[0.15]">
                                {chairman.photo ? (
                                    <img
                                        src={chairman.photo}
                                        alt={chairman.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover brightness-[1.05] contrast-[1.05] transition-transform [transition-duration:2s] ease-out group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/[0.03] flex items-center justify-center text-white/20">
                                        <User className="w-24 h-24 opacity-30" />
                                    </div>
                                )}

                                {/* Cinematic Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                
                                {/* Info Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 text-white z-10 transition-transform duration-700 group-hover:translate-y-[-5px]">
                                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{chairman.name}</h3>
                                    <p className="text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase">{chairman.position}</p>
                                </div>
                            </div>

                            {/* Decorative Quote Icon */}
                            <div className="absolute -top-4 -right-4 w-14 h-14 bg-white/[0.05] border border-white/[0.1] backdrop-blur-xl rounded-2xl flex items-center justify-center transform rotate-12 transition-all duration-700 group-hover:rotate-0 group-hover:bg-blue-600/20 group-hover:border-blue-400/30">
                                <Quote className="w-6 h-6 text-blue-400 fill-blue-400/20" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Message Content */}
                    <motion.div variants={fadeInUp} className="w-full lg:w-[65%] text-left">
                        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase mb-6">
                            Chairman's Message
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight leading-[1.15]">
                            {t("leadership.chairman.message_title")}
                        </h2>

                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-medium opacity-90">
                            {t("leadership.chairman.message_text").split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6">
                            <div className="w-12 h-px bg-blue-500/30" />
                            <div>
                                <p className="font-bold text-xl text-white tracking-tight">{chairman.name}</p>
                                <p className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mt-1">{chairman.position}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>

    );
};
