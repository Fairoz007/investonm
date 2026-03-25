import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, Phone, Briefcase, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { PageHeader } from '@/components/shared/PageHeader';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  const { t } = useTranslation();

  const contactPillars = [
    { icon: Briefcase, title: "contact.help.1.title", desc: "contact.help.1.desc" },
    { icon: MapPin, title: "contact.help.2.title", desc: "contact.help.2.desc" },
    { icon: ShieldCheck, title: "contact.help.3.title", desc: "contact.help.3.desc" },
    { icon: Zap, title: "contact.help.4.title", desc: "contact.help.4.desc" }
  ];

  const directChannels = [
    { icon: Mail, label: "Inquiries", value: "info@shomoukh.om", href: "mailto:info@shomoukh.om" },
    { icon: Phone, label: "Direct Line", value: "+968 71770077", href: "tel:+96871770077" },
    { icon: MapPin, label: "Location", value: "Airport Heights, Muscat, Oman", subValue: "PO Box: 1756 | PC: 111" }
  ];

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24">
      <PageHeader 
        title={t('contact.text.1')}
        subtitle={t('contact.text.4')}
        breadcrumb={[{ label: t('contact.text.1') }]}
      />

      {/* Contact Pillars */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactPillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xs font-black text-blue-400 uppercase tracking-[0.2em] mb-4">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                  {t(item.desc)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-white tracking-tight">Direct Channels</h2>
                <div className="w-16 h-1 bg-blue-600 rounded-full" />
                <p className="text-[#94A3B8] text-lg font-light leading-relaxed">
                  Connect with our investment specialists for personalized advisory and strategic partnership opportunities.
                </p>
              </motion.div>

              <div className="space-y-4">
                {directChannels.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex gap-6 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <item.icon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-bold text-white hover:text-blue-400 transition-colors tracking-tight">{item.value}</a>
                      ) : (
                        <div>
                          <p className="text-lg font-bold text-white tracking-tight leading-tight">{item.value}</p>
                          {item.subValue && <p className="text-xs text-[#94A3B8] mt-1 font-light">{item.subValue}</p>}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden"
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em] ml-2">Subject</label>
                    <input
                      type="text"
                      placeholder={t('contact.form.subject')}
                      className="w-full bg-[#0B1020] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-[#94A3B8]/30 font-light"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em] ml-2">First Name</label>
                    <input
                      type="text"
                      placeholder={t('contact.form.firstName')}
                      className="w-full bg-[#0B1020] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-[#94A3B8]/30 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em] ml-2">Last Name</label>
                    <input
                      type="text"
                      placeholder={t('contact.form.lastName')}
                      className="w-full bg-[#0B1020] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-[#94A3B8]/30 font-light"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em] ml-2">Company</label>
                    <input
                      type="text"
                      placeholder={t('contact.form.companyName')}
                      className="w-full bg-[#0B1020] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-[#94A3B8]/30 font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em] ml-2">Email</label>
                    <input
                      type="email"
                      placeholder={t('contact.form.email')}
                      className="w-full bg-[#0B1020] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-[#94A3B8]/30 font-light"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <label className="text-[11px] font-bold text-blue-400 uppercase tracking-[0.3em] ml-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder={t('contact.form.message')}
                      className="w-full bg-[#0B1020] border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-blue-500 transition-all text-white placeholder:text-[#94A3B8]/30 font-light resize-none"
                    />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <button className="h-16 w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group shadow-xl shadow-blue-900/20">
                      {t('contact.form.submit')}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-1000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.856002196652!2d58.3377!3d23.5755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzMxLjgiTiA1OMKwMjAnMTUuNyJF!5e0!3m2!1sen!2som!4v1680000000000!5m2!1sen!2som"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[3rem]" />
          </motion.div>
        </div>
      </section>

      <ResearchDataCTA />
    </div>
  );
}

