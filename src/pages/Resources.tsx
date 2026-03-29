import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Lock, ShieldCheck, ArrowRight, FileSignature, Presentation, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

export default function Resources() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const resources = [
    { 
      type: 'PDF', 
      title: 'Annual Investment Report 2023', 
      size: '4.2 MB', 
      icon: <BarChart3 size={24} className="text-primary" />,
      tag: 'Public' 
    },
    { 
      type: 'PDF', 
      title: 'Oman Vision 2040 Strategic Framework', 
      size: '5.8 MB', 
      icon: <Presentation size={24} className="text-primary" />,
      tag: 'National' 
    },
    { 
      type: 'DOC', 
      title: 'Strategic Partnership Guidelines', 
      size: '1.2 MB', 
      icon: <FileSignature size={24} className="text-primary" />,
      tag: 'Investor' 
    },
    { 
      type: 'PDF', 
      title: 'Sector Performance Overview Q3', 
      size: '3.5 MB', 
      icon: <FileText size={24} className="text-primary" />,
      tag: 'Confidential',
      locked: true 
    },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex flex-col justify-center relative z-20">
          <div className="max-w-3xl">
            <div className="as-subtitle-2 mb-8 border-primary/20 text-primary uppercase tracking-widest">{t('resources.heroSubtitle')}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight whitespace-pre-line">
              {t('resources.heroTitle')}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
              {t('resources.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-20">
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((res, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 md:p-8 lg:p-10 bg-dark-card border border-white/5 rounded-[40px] group hover:border-primary/30 transition-all ${res.locked ? 'opacity-80' : ''}`}
            >
              <div className="flex items-start justify-between mb-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  {res.locked ? <Lock className="text-white/20 group-hover:text-dark transition-colors" size={24} /> : res.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-3 py-1 bg-white/5 rounded-full">{res.type}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${res.locked ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'}`}>{res.tag}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <h3 className="text-2xl font-display font-bold leading-tight group-hover:text-primary transition-colors">{res.title}</h3>
                <p className="text-sm text-white/40">{res.size}</p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                {res.locked ? (
                  <Link to={`/${currentLang}/signin`} className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors font-display font-bold uppercase tracking-widest text-xs">
                    Login to Access <ArrowRight size={16} className="rtl:rotate-180" />
                  </Link>
                ) : (
                  <button className="flex items-center gap-3 text-primary hover:text-white transition-colors font-display font-bold uppercase tracking-widest text-xs">
                    Download Resource <Download size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 lg:mt-24 p-6 md:p-8 lg:p-10 bg-primary rounded-[60px] relative overflow-hidden text-dark">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 p-12 opacity-5">
              <ShieldCheck size={200} />
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div className="space-y-8">
                 <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight">Investor <br /> Support Portal</h2>
                    <p className="text-base sm:text-lg lg:text-xl font-medium opacity-80">Our dedicated support team is available to assist international investors with specialized data requests and documentation requirements.</p>
                 </div>
                 
                 <div className="flex flex-wrap gap-8">
                    <Link to={`/${currentLang}/contact`} className="px-10 py-5 bg-dark text-white rounded-full font-display font-bold hover:scale-105 transition-all shadow-xl shadow-dark/20 flex items-center gap-3">
                       Contact Support <ArrowRight size={18} className="rtl:rotate-180" />
                    </Link>
                 </div>
              </div>
              
              <div className="hidden lg:block">
                 <div className="aspect-video bg-dark/5 rounded-[40px] border-4 border-dark/10 p-8 flex flex-col justify-end">
                    <div className="space-y-4">
                       <div className="w-12 h-1 bg-dark/20 rounded-full" />
                       <div className="w-3/4 h-6 bg-dark/10 rounded-lg" />
                       <div className="w-1/2 h-6 bg-dark/10 rounded-lg" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
