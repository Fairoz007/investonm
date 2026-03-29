import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileSignature, Presentation, BarChart3, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

export default function Resources() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-4xl w-full text-center space-y-12 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-[0.2em] text-xs font-bold mb-8"
        >
          <Clock size={16} className="animate-pulse" />
          {t('common.comingSoon')}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-8 tracking-tighter whitespace-pre-line">
            {t('resources.heroTitle')}
          </h1>
          <p className="text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            {t('resources.heroDesc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-30 grayscale pointer-events-none select-none">
            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 aspect-square flex flex-col justify-between items-start text-left">
              <BarChart3 size={32} />
              <div className="space-y-2 mt-auto">
                <div className="h-4 w-24 bg-white/20 rounded-full" />
                <div className="h-3 w-16 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 aspect-square flex flex-col justify-between items-start text-left">
              <Presentation size={32} />
              <div className="space-y-2 mt-auto">
                <div className="h-4 w-32 bg-white/20 rounded-full" />
                <div className="h-3 w-20 bg-white/10 rounded-full" />
              </div>
            </div>
            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 aspect-square flex flex-col justify-between items-start text-left">
              <FileSignature size={32} />
              <div className="space-y-2 mt-auto">
                <div className="h-4 w-28 bg-white/20 rounded-full" />
                <div className="h-3 w-12 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-12"
        >
          <Link
            to={`/${currentLang}/contact`}
            className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-dark rounded-full font-display font-bold hover:scale-105 transition-all text-lg shadow-2xl shadow-primary/20"
          >
            {t('common.contact')}
            <ArrowRight size={20} className="rtl:rotate-180" />
          </Link>
        </motion.div>
      </div>

      {/* Decorative background blur */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
