import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function Contact() {
    return (
        <div className="bg-[#020b0d] min-h-screen text-white overflow-hidden font-sans pt-24">
            {/* Hero Section */}
            <section className="relative py-24 flex items-center justify-center border-b border-white/5 bg-[#041416]">
                <div className="container-custom relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-white"
                    >
                        Connect with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]">Investment Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto"
                    >
                        Reach out to our experts for comprehensive support, strategic guidance, and inquiries regarding investment opportunities in Oman.
                    </motion.p>
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
                                <motion.div variants={fadeInUp} className="flex items-start gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                                    <div className="w-14 h-14 rounded-full bg-[#00c2b5]/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-[#00c2b5]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Office Address</h3>
                                        <div className="text-white/70 space-y-1 leading-relaxed">
                                            <p>Shomoukh International Investment LLC</p>
                                            <p>Postal Office Box: 1756</p>
                                            <p>Postal Code: 111</p>
                                            <p>Airport Heights, Muscat</p>
                                            <p>Sultanate of Oman</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeInUp} className="flex items-start gap-6 bg-white/5 p-8 rounded-3xl border border-white/10">
                                    <div className="w-14 h-14 rounded-full bg-[#00c2b5]/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-[#00c2b5]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Email Us</h3>
                                        <p className="text-white/70 leading-relaxed mb-4">
                                            For general inquiries and investment proposals.
                                        </p>
                                        <a href="mailto:info@shomoukh.om" className="text-2xl font-bold text-[#00c2b5] hover:text-[#009288] transition-colors break-all">
                                            info@shomoukh.om
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Map Placeholder */}
                            <motion.div variants={fadeInUp} className="w-full h-80 rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.856002196652!2d58.3377!3d23.5755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzMxLjgiTiA1OMKwMjAnMTUuNyJF!5e0!3m2!1sen!2som!4v1680000000000!5m2!1sen!2som"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }}
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
                            <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-[2rem] p-10 lg:p-14">
                                <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label className="text-sm text-white/60 font-medium uppercase tracking-wider ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00c2b5]/50 focus:ring-1 focus:ring-[#00c2b5]/50 transition-all font-medium"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-white/60 font-medium uppercase tracking-wider ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00c2b5]/50 focus:ring-1 focus:ring-[#00c2b5]/50 transition-all font-medium"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-white/60 font-medium uppercase tracking-wider ml-2">Company Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00c2b5]/50 focus:ring-1 focus:ring-[#00c2b5]/50 transition-all font-medium"
                                            placeholder="Your Company LLC"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-white/60 font-medium uppercase tracking-wider ml-2">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00c2b5]/50 focus:ring-1 focus:ring-[#00c2b5]/50 transition-all font-medium resize-none custom-scrollbar"
                                            placeholder="How can we assist you with your investment?"
                                        />
                                    </div>

                                    <button className="w-full py-5 bg-[#00c2b5] hover:bg-[#00a89d] text-[#111] font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(0,194,181,0.2)]">
                                        Send Inquiry <Send className="w-5 h-5" />
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
