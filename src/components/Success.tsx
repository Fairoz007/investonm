import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Success() {
  const { t } = useTranslation();

  const stats = [
    { id: 1, title: t('success.stats.visitors.title'), value: "1.1", unit: "bn", sub: t('success.stats.visitors.sub') },
    { id: 2, title: t('success.stats.employment.title'), value: "192", unit: "k", sub: t('success.stats.employment.sub') },
    { id: 3, title: t('success.stats.gdp.title'), value: "7.6", unit: "%", sub: t('success.stats.gdp.sub') },
    { id: 4, title: t('success.stats.investment.title'), value: "2.8", unit: "bn", sub: t('success.stats.investment.sub') }
  ];

  return (
    <section className="section-padding bg-background text-foreground">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="max-w-[480px]">
            <div className="text-primary font-bold tracking-widest text-xs uppercase mb-4">{t('success.subtitle')}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t('success.title')}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 max-w-[650px]">
            <div className="space-y-6">
              <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
                {t('success.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat) => (
            <div key={stat.id} className="glass-card-premium group">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl lg:text-4xl font-bold text-white transition-colors group-hover:text-primary">{stat.value}</span>
                <span className="text-lg lg:text-xl font-bold text-primary">{stat.unit}</span>
              </div>
              <h4 className="text-base lg:text-lg font-bold mb-1 group-hover:text-primary transition-colors">{stat.title}</h4>
              <p className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
