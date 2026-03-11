import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, MessageSquare, Briefcase, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div className="bg-background min-h-screen text-[var(--text-paragraph)] overflow-hidden font-sans pt-20">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-20" />
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
                        <span>{t('contact.text.1')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
                    >
                        {t('contact.text.1')}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[14px] font-medium mt-[20px]"
                    >
                        {t('contact.text.2')}
                    </motion.div>
                </div>
            </section>

            {/* How Can We Help Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-[32px] font-semibold text-[var(--heading-main)] mb-4"
                        >
                            {t('contact.help.title')}
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-[16px] text-[var(--text-paragraph)] max-w-2xl mx-auto"
                        >
                            {t('contact.help.subtitle')}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Briefcase, title: "contact.help.1.title", desc: "contact.help.1.desc" },
                            { icon: MapPin, title: "contact.help.2.title", desc: "contact.help.2.desc" },
                            { icon: ShieldCheck, title: "contact.help.3.title", desc: "contact.help.3.desc" },
                            { icon: Zap, title: "contact.help.4.title", desc: "contact.help.4.desc" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInUp}
                                className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 flex flex-col items-center text-center group hover:shadow-[0_20px_40px_color-mix(in_srgb,var(--accent),transparent_92%)] hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-6">
                                    <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-[18px] font-semibold text-[var(--heading-main)] mb-3">
                                    {t(item.title)}
                                </h3>
                                <p className="text-[16px] text-[var(--text-paragraph)] leading-relaxed">
                                    {t(item.desc)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get in Touch Form Section */}
            <section className="py-20 bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-[32px] font-semibold text-[var(--primary)] mb-4"
                        >
                            {t('contact.form.getInTouch')}
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-[16px] text-[var(--text-paragraph)] max-w-2xl mx-auto"
                        >
                            {t('contact.form.subtitle')}
                        </motion.p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-8"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            {/* Subject Field */}
                            <motion.div variants={fadeInUp} className="w-full">
                                <input
                                    type="text"
                                    placeholder={t('contact.form.subject')}
                                    className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                />
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.firstName')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.lastName')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.companyName')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.designation')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.companyWebsite')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <select
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium text-[#94A3B8] appearance-none"
                                    >
                                        <option value="">{t('contact.form.country')}</option>
                                        <option value="OM">Oman</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="AE">United Arab Emirates</option>
                                        {/* Add more countries as needed */}
                                    </select>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="email"
                                        placeholder={t('contact.form.email')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                                <motion.div variants={fadeInUp}>
                                    <input
                                        type="tel"
                                        placeholder={t('contact.form.contactNumber')}
                                        className="w-full bg-[#F8FAFC] border border-black/5 rounded-full px-10 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8]"
                                    />
                                </motion.div>
                            </div>

                            <motion.div variants={fadeInUp} className="w-full">
                                <textarea
                                    rows={6}
                                    placeholder={t('contact.form.message')}
                                    className="w-full bg-[#F8FAFC] border border-black/5 rounded-[2rem] px-10 py-8 text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium placeholder:text-[#94A3B8] resize-none"
                                />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex justify-center pt-8">
                                <button className="px-16 py-5 bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all duration-300 rounded-full shadow-xl shadow-primary/10">
                                    {t('contact.form.submit')}
                                </button>
                            </motion.div>
                        </motion.form>
                    </div>
                </div>
            </section>

            {/* Existing Info Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8">
                                <MessageSquare className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-[22px] font-semibold mb-4 text-[var(--heading-main)]">{t('contact.text.30')}</h3>
                            <p className="text-[var(--text-paragraph)] mb-8 leading-relaxed text-[16px]">
                                {t('contact.text.31')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span className="font-bold text-[#222222] transition-colors hover:text-primary cursor-pointer">+968 2450 0000</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span className="font-bold text-[#222222] transition-colors hover:text-primary cursor-pointer">miza@shomoukh.om</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8">
                                <Globe className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-[18px] font-semibold mb-4 text-[var(--heading-main)]">{t('contact.text.14')}</h3>
                            <p className="text-[var(--text-paragraph)] leading-relaxed text-[16px]">
                                Our global network ensures that no matter where you are, Shomoukh is ready to assist your entry into the Omani market.
                            </p>
                            <div className="pt-8 grid grid-cols-2 gap-y-4 gap-x-2">
                                <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest border-l-2 border-primary/20 pl-3">London, UK</div>
                                <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest border-l-2 border-primary/20 pl-3">Singapore</div>
                                <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest border-l-2 border-primary/20 pl-3">Dubai, UAE</div>
                                <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest border-l-2 border-primary/20 pl-3">Riyadh, KSA</div>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-[18px] font-semibold mb-4 text-[var(--heading-main)]">Location</h3>
                            <div className="text-[var(--text-paragraph)] space-y-1 mb-6 leading-relaxed text-[16px]">
                                <p>Airport Heights, Area One</p>
                                <p>Muscat, Sultanate of Oman</p>
                            </div>
                            <div className="w-full h-44 rounded-2xl overflow-hidden grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.856002196652!2d58.3377!3d23.5755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzMxLjgiTiA1OMKwMjAnMTUuNyJF!5e0!3m2!1sen!2som!4v1680000000000!5m2!1sen!2som"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research CTA section */}
            <ResearchDataCTA />
        </div>
    );
}
