import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function Contact() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  return (
    <div className="bg-transparent text-white">
      <section className="relative min-h-screen flex items-start pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="as-subtitle-2 mb-6 sm:mb-8 border-primary/20 text-primary">{t('contact.heroSubtitle')}</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 leading-[0.95] tracking-tight">
                {t('contact.heroTitle')}
              </h1>
              <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
                {t('contact.heroDesc')}
              </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <MapPin className="text-primary group-hover:text-dark transition-colors" size={28} />
                </div>
                <div>
                  <h3 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-3">{t('contact.info.address')}</h3>
                  <p className="text-2xl font-display font-bold">{t('contact.info.muscat')}</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <Phone className="text-primary group-hover:text-dark transition-colors" size={28} />
                </div>
                <div>
                  <h3 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-3">{t('contact.info.phone')}</h3>
                  <p className="text-2xl font-display font-bold">+968 2449 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                  <Mail className="text-primary group-hover:text-dark transition-colors" size={28} />
                </div>
                <div>
                   <h3 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-3">{t('contact.info.email')}</h3>
                   <p className="text-2xl font-display font-bold">info@shomoukh.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.01] border border-white/5 p-5 sm:p-8 lg:p-10 rounded-[32px] sm:rounded-[40px] relative overflow-hidden group backdrop-blur-xl shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-primary/10" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-12">{t('contact.form.title')}</h2>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('contact.form.firstName')}</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('contact.form.lastName')}</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('contact.form.company')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Company Name"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('contact.form.message')}</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button className="w-full as-pr-btn-2 justify-center py-6">
                  <span className="text text-lg">{t('contact.form.submit')}</span>
                  <span className="icon">
                    <Send size={20} className="rtl:-rotate-90" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
  );
}
