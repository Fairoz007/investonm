import React from 'react';
import { motion } from 'motion/react';
import { Globe, TrendingUp, Briefcase, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Trust() {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t('trust.pillars.connectivity.title'),
      desc: t('trust.pillars.connectivity.desc'),
      image: "/images/why-oman/connectivity.png",
      stats: [
        { label: t('trust.pillars.connectivity.stat1'), value: "60%" },
        { label: t('trust.pillars.connectivity.stat2'), value: "105" }
      ],
      icon: Globe
    },
    {
      title: t('trust.pillars.economy.title'),
      desc: t('trust.pillars.economy.desc'),
      image: "/images/why-oman/economy.png",
      stats: [
        { label: t('trust.pillars.economy.stat1'), value: "BBB+" },
        { label: t('trust.pillars.economy.stat2'), value: "$50B+" }
      ],
      icon: TrendingUp
    },
    {
      title: t('trust.pillars.business.title'),
      desc: t('trust.pillars.business.desc'),
      image: "/images/why-oman/business.png",
      stats: [
        { label: t('trust.pillars.business.stat1'), value: "Top 10" },
        { label: t('trust.pillars.business.stat2'), value: "0% Tax" }
      ],
      icon: Briefcase
    },
    {
      title: t('trust.pillars.lifestyle.title'),
      desc: t('trust.pillars.lifestyle.desc'),
      image: "/images/why-oman/lifestyle.png",
      stats: [
        { label: t('trust.pillars.lifestyle.stat1'), value: "Top 3" },
        { label: t('trust.pillars.lifestyle.stat2'), value: "1st" }
      ],
      icon: Shield
    }
  ];

  return (
    <section className="section-padding bg-background text-foreground overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="text-primary font-bold tracking-widest text-xs uppercase mb-4 lg:mb-0">{t('trust.subtitle')}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl">
             {t('trust.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 relative">
          <div className="space-y-12 lg:space-y-16 pt-12">
            {pillars.slice(0, 2).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="glass-card-premium relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-semibold mb-2">{item.title}</h4>
                      <p className="text-text-p1 leading-relaxed text-lg italic">
                        "{item.desc}"
                      </p>
                    </div>
                  </div>
                  <div className="w-24 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  {item.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] text-text-p2 uppercase tracking-[0.2em] leading-tight font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-12 lg:space-y-16">
            {pillars.slice(2, 4).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 2) * 0.2 }}
                className="glass-card-premium relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-semibold mb-2">{item.title}</h4>
                      <p className="text-text-p1 leading-relaxed text-lg italic">
                        "{item.desc}"
                      </p>
                    </div>
                  </div>
                  <div className="w-24 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  {item.stats.map((stat, j) => (
                    <div key={j}>
                      <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] text-text-p2 uppercase tracking-[0.2em] leading-tight font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[230px] font-bold text-white/5 pointer-events-none select-none leading-none hidden xl:block uppercase">
            {t('common.oman', 'Oman')}
          </div>
        </div>
      </div>
    </section>
  );
}
