import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Briefcase, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
 hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
 visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease:"easeOut" } }
};

const staggerContainer: Variants = {
 hidden: { opacity: 0 },
 visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function Contact() {
 const { t } = useTranslation();

 return (
 <div className="min-h-screen text-slate-300 overflow-hidden pt-20">
 {/* Hero Section */}
 <section className="relative h-[350px] flex items-center overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-20 grayscale" />
 <div className="absolute inset-0 ]" />
 </div>
 <div className="container-custom relative z-10 text-left w-full text-white">
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="flex items-center justify-start gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6"
>
 <span>Home</span>
 <span className="opacity-40">/</span>
 <span>{t('contact.text.1')}</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white"
>
 {t('contact.text.1')}
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-xl text-slate-400 max-w-2xl"
>
 {t('contact.text.2')}
 </motion.p>
 </div>
 </section>

 {/* How Can We Help Section */}
 <section className="py-16 md:py-24 relative overflow-hidden">
 <div className="container-custom">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <motion.h2
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="text-4xl md:text-5xl font-bold text-white mb-6"
>
 {t('contact.help.title')}
 </motion.h2>
 <motion.p
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={fadeInUp}
 className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
>
 {t('contact.help.subtitle')}
 </motion.p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: Briefcase, title:"contact.help.1.title", desc:"contact.help.1.desc" },
 { icon: MapPin, title:"contact.help.2.title", desc:"contact.help.2.desc" },
 { icon: ShieldCheck, title:"contact.help.3.title", desc:"contact.help.3.desc" },
 { icon: Zap, title:"contact.help.4.title", desc:"contact.help.4.desc" }
 ].map((item, idx) => (
 <motion.div
 key={idx}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={fadeInUp}
 className="bg-card border border-border rounded-lg shadow-sm p-10 flex flex-col items-center text-center group"
>
 <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 mb-8 shadow-inner">
 <item.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
 </div>
 <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
 {t(item.title)}
 </h3>
 <p className="text-sm text-slate-400 leading-relaxed font-light">
 {t(item.desc)}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Get in Touch Form Section */}
 <section className="py-16 md:py-24 border-t border-white/5 relative bg-[#0b0f19]/30">
 <div className="container-custom">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
 <div className="lg:col-span-4 space-y-12">
 <div>
 <h2 className="text-4xl font-bold text-white mb-6">
 {t('contact.form.getInTouch')}
 </h2>
 <p className="text-slate-400 text-lg leading-relaxed font-light">
 {t('contact.form.subtitle')}
 </p>
 </div>

 <div className="space-y-8">
 <div className="flex gap-6 items-center group">
 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-all border border-white/10 group-hover:border-blue-500/50">
 <Mail className="w-6 h-6 text-blue-500" />
 </div>
 <div>
 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Inquiries</p>
 <a href="mailto:info@shomoukh.om" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">info@shomoukh.om</a>
 </div>
 </div>

 <div className="flex gap-6 items-center group">
 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-all border border-white/10 group-hover:border-blue-500/50">
 <Phone className="w-6 h-6 text-blue-500" />
 </div>
 <div>
 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Direct Line</p>
 <a href="tel:+96880000777" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">+968 80000777</a>
 </div>
 </div>

 <div className="flex gap-6 items-center group">
 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-all border border-white/10 group-hover:border-blue-500/50">
 <MapPin className="w-6 h-6 text-blue-500" />
 </div>
 <div>
 <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Location</p>
 <p className="text-lg font-bold text-white leading-tight">Airport Heights, Area One<br/>Muscat, Sultanate of Oman</p>
 </div>
 </div>
 </div>
 </div>

 <div className="lg:col-span-8">
 <motion.form
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true }}
 variants={staggerContainer}
 className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-10 bg-card border border-border rounded-lg shadow-sm-alt"
 onSubmit={(e) => e.preventDefault()}
>
 <motion.div variants={fadeInUp} className="md:col-span-2">
 <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">Inquiry Subject</label>
 <input
 type="text"
 placeholder={t('contact.form.subject')}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-white placeholder:text-slate-600"
 />
 </motion.div>

 <motion.div variants={fadeInUp}>
 <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">First Name</label>
 <input
 type="text"
 placeholder={t('contact.form.firstName')}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-white placeholder:text-slate-600"
 />
 </motion.div>
 <motion.div variants={fadeInUp}>
 <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">Last Name</label>
 <input
 type="text"
 placeholder={t('contact.form.lastName')}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-white placeholder:text-slate-600"
 />
 </motion.div>

 <motion.div variants={fadeInUp}>
 <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">Company Name</label>
 <input
 type="text"
 placeholder={t('contact.form.companyName')}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-white placeholder:text-slate-600"
 />
 </motion.div>
 <motion.div variants={fadeInUp}>
 <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">Email Address</label>
 <input
 type="email"
 placeholder={t('contact.form.email')}
 className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-white placeholder:text-slate-600"
 />
 </motion.div>

 <motion.div variants={fadeInUp} className="md:col-span-2">
 <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">Detailed Message</label>
 <textarea
 rows={6}
 placeholder={t('contact.form.message')}
 className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-white placeholder:text-slate-600 resize-none"
 />
 </motion.div>

 <motion.div variants={fadeInUp} className="md:col-span-2 pt-4">
 <button className="btn-premium w-full text-sm uppercase tracking-widest py-5">
 {t('contact.form.submit')}
 <Zap className="w-4 h-4 fill-white" />
 </button>
 </motion.div>
 </motion.form>
 </div>
 </div>
 </div>
 </section>

 {/* Map Section */}
 <section className="py-16 md:py-24 border-t border-white/5">
 <div className="container-custom">
 <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 relative grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000">
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
 </section>

 <ResearchDataCTA />
 </div>
 );
}
