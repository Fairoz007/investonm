import React from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="as-container-2 relative z-10 w-full flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl"
        >
          <div className="bg-dark-card border border-white/5 rounded-[48px] p-10 md:p-16 backdrop-blur-sm relative overflow-hidden group">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl font-display font-bold mb-4">{t('signIn.title')}</h1>
              <p className="text-white/40">{t('signIn.desc')}</p>
            </div>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{t('signIn.email')}</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 focus:border-primary focus:outline-none transition-colors"
                    placeholder="investor@shomoukh.om"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">{t('signIn.password')}</label>
                  <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">
                    {t('signIn.forgot')}
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                  <input 
                    type="password" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 py-5 focus:border-primary focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button className="w-full as-pr-btn-2 justify-center py-6 group">
                <span className="text text-lg">{t('signIn.button')}</span>
                <span className="icon">
                  <ArrowRight size={20} className="rtl:rotate-180" />
                </span>
              </button>
            </form>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-white/5 text-center px-4">
              <p className="text-white/40 text-sm">
                {t('signIn.noAccount')} <a href="#" className="text-primary font-bold hover:underline"> {t('signIn.contactSupport')}</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
