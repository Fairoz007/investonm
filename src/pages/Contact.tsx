import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useTranslation } from "react-i18next";

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
        <div className="bg-[#F5F5F5] min-h-screen text-[#222222] overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative py-24 flex items-center justify-center border-b border-[#4F3C8C]/5 hero-gradient">
                <div className="container-custom relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        {t('contact.text.1')} <span className="text-white/90"> {t('contact.text.2')} </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto"
                    >
                        {t('contact.text.3')} </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Contact Details & Map */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="lg:w-1/2 space-y-12"
                        >
                            <div className="space-y-8">
                                <motion.div variants={fadeInUp} className="flex items-start gap-6 bg-white p-8 rounded-3xl border border-[#4F3C8C]/10 shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-[#8A6BCB]/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-[#8A6BCB]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-[#222222]"> {t('contact.text.4')} </h3>
                                        <div className="text-[#666666] space-y-1 leading-relaxed">
                                            <p> {t('contact.text.5')} </p>
                                            <p> {t('contact.text.6')} </p>
                                            <p> {t('contact.text.7')} </p>
                                            <p> {t('contact.text.8')} </p>
                                            <p> {t('contact.text.9')} </p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-start gap-6 bg-white p-8 rounded-3xl border border-[#4F3C8C]/10 shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-[#8A6BCB]/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-[#8A6BCB]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 text-[#222222]"> {t('contact.text.10')} </h3>
                                        <p className="text-[#666666] leading-relaxed mb-4">
                                            {t('contact.text.11')} </p>
                                        <a href="mailto:info@shomoukh.om" className="text-2xl font-bold text-[#8A6BCB] hover:text-[#7A5BC0] transition-colors break-all">
                                            {t('contact.text.12')} </a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Map Placeholder */}
                            <motion.div variants={fadeInUp} className="w-full h-80 rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.856002196652!2d58.3377!3d23.5755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzMxLjgiTiA1OMKwMjAnMTUuNyJF!5e0!3m2!1sen!2som!4v1680000000000!5m2!1sen!2som"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'contrast(100%)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Muscat Map"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerContainer}
                            className="lg:w-1/2"
                        >
                            <motion.div variants={fadeInUp} className="bg-white border border-[#4F3C8C]/10 rounded-[2rem] p-10 lg:p-14 shadow-xl">
                                <h3 className="text-3xl font-bold mb-8 text-[#222222]"> {t('contact.text.13')} </h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label className="text-sm text-[#666666] font-medium uppercase tracking-wider ml-2"> {t('contact.text.14')} </label>
                                        <input
                                            type="text"
                                            className="w-full bg-[#F5F5F5] border border-[#4F3C8C]/10 rounded-2xl px-6 py-4 text-[#222222] placeholder:text-[#666666]/30 focus:outline-none focus:border-[#8A6BCB]/50 focus:ring-1 focus:ring-[#8A6BCB]/50 transition-all font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-[#666666] font-medium uppercase tracking-wider ml-2"> {t('contact.text.15')} </label>
                                        <input
                                            type="email"
                                            className="w-full bg-[#F5F5F5] border border-[#4F3C8C]/10 rounded-2xl px-6 py-4 text-[#222222] placeholder:text-[#666666]/30 focus:outline-none focus:border-[#8A6BCB]/50 focus:ring-1 focus:ring-[#8A6BCB]/50 transition-all font-medium"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-[#666666] font-medium uppercase tracking-wider ml-2"> {t('contact.text.16')} </label>
                                        <input
                                            type="text"
                                            className="w-full bg-[#F5F5F5] border border-[#4F3C8C]/10 rounded-2xl px-6 py-4 text-[#222222] placeholder:text-[#666666]/30 focus:outline-none focus:border-[#8A6BCB]/50 focus:ring-1 focus:ring-[#8A6BCB]/50 transition-all font-medium"
                                            placeholder="Your Company LLC"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-[#666666] font-medium uppercase tracking-wider ml-2"> {t('contact.text.17')} </label>
                                        <textarea
                                            rows={5}
                                            className="w-full bg-[#F5F5F5] border border-[#4F3C8C]/10 rounded-2xl px-6 py-4 text-[#222222] placeholder:text-[#666666]/30 focus:outline-none focus:border-[#8A6BCB]/50 focus:ring-1 focus:ring-[#8A6BCB]/50 transition-all font-medium resize-none custom-scrollbar"
                                            placeholder="How can we assist you with your investment?"
                                        />
                                    </div>

                                    <button className="w-full py-5 bg-[#8A6BCB] hover:bg-[#7A5BC0] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                                        {t('contact.text.18')} <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
