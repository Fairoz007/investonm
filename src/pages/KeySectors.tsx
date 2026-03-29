import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Wind, 
  Palmtree, 
  Cpu, 
  Factory, 
  Sprout, 
  Fish, 
  Gem, 
  Hospital, 
  Trophy, 
  Building2, 
  Truck
} from 'lucide-react';

export default function KeySectors() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const sectors = [
    { icon: <GraduationCap size={40} />, title: t('services.items.education') },
    { icon: <Wind size={40} />, title: t('services.items.renewableEnergy') },
    { icon: <Palmtree size={40} />, title: t('services.items.tourism') },
    { icon: <Cpu size={40} />, title: t('services.items.ict') },
    { icon: <Factory size={40} />, title: t('services.items.manufacturing') },
    { icon: <Sprout size={40} />, title: t('services.items.agriculture') },
    { icon: <Fish size={40} />, title: t('services.items.fisheries') },
    { icon: <Gem size={40} />, title: t('services.items.mining') },
    { icon: <Hospital size={40} />, title: t('services.items.healthcare') },
    { icon: <Trophy size={40} />, title: t('services.items.sport') },
    { icon: <Building2 size={40} />, title: 'Real Estate' },
    { icon: <Truck size={40} />, title: 'Logistics' },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero */}
      <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <div className="as-subtitle-2 mb-8 border-primary/20 text-primary">{t('keySectors.heroSubtitle')}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight whitespace-pre-line">
              <span className="gradient-text">{t('keySectors.heroTitle')}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed mb-8">
              {t('keySectors.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-20">
        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-dark-card border border-white/5 rounded-[40px] p-6 lg:p-8 transition-all hover:border-primary/50 group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 overflow-hidden relative">
                <div className="text-primary group-hover:text-dark transition-colors">
                  {sector.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 uppercase leading-tight">{sector.title}</h3>
              <div className="w-8 h-1 bg-primary/20 group-hover:bg-primary group-hover:w-16 transition-all rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-24 p-6 md:p-8 lg:p-10 bg-dark-card border border-white/5 rounded-[60px] relative overflow-hidden text-center group">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-8">Looking for Strategic Partnership?</h2>
            <Link to={`/${currentLang}/contact`} className="px-12 py-5 bg-primary text-dark rounded-full font-display font-bold hover:bg-white transition-all inline-block">
               Connect with Our Sector Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
