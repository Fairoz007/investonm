import { ArrowRight, BarChart3, Check, Globe2, Heart } from 'lucide-react';
import type { ComponentType } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface CardMetric {
  value: string;
  description: string;
}

interface WhyOmanCard {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  metrics: [CardMetric, CardMetric];
  glowClass: string;
}

export const WhyOmanSection = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  const cards: WhyOmanCard[] = [
    {
      id: 'connectivity',
      icon: Globe2,
      title: t('trust.pillars.connectivity.title'),
      description: t('trust.pillars.connectivity.desc'),
      metrics: [
        { value: '60%', description: t('trust.pillars.connectivity.stat1') },
        { value: '105', description: t('trust.pillars.connectivity.stat2') },
      ],
      glowClass: 'before:from-cyan-500/35 before:to-sky-500/10',
    },
    {
      id: 'economy',
      icon: BarChart3,
      title: t('trust.pillars.economy.title'),
      description: t('trust.pillars.economy.desc'),
      metrics: [
        { value: 'BBB+', description: t('trust.pillars.economy.stat1') },
        { value: '$50B+', description: t('trust.pillars.economy.stat2') },
      ],
      glowClass: 'before:from-violet-400/35 before:to-fuchsia-400/10',
    },
    {
      id: 'business',
      icon: Check,
      title: t('trust.pillars.business.title'),
      description: t('trust.pillars.business.desc'),
      metrics: [
        { value: 'Top 10', description: t('trust.pillars.business.stat1') },
        { value: '0% Tax', description: t('trust.pillars.business.stat2') },
      ],
      glowClass: 'before:from-blue-400/35 before:to-cyan-300/10',
    },
    {
      id: 'quality',
      icon: Heart,
      title: t('trust.pillars.lifestyle.title'),
      description: t('trust.pillars.lifestyle.desc'),
      metrics: [
        { value: 'Top 3', description: t('trust.pillars.lifestyle.stat1') },
        { value: '1st', description: t('trust.pillars.lifestyle.stat2') },
      ],
      glowClass: 'before:from-rose-400/35 before:to-orange-300/10',
    },
  ];

  return (
    <section id="why-oman" className="relative overflow-hidden py-24 md:py-28">

      <div className="container-custom relative z-10 max-w-[1200px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-[52px]">
              {t('trust.subtitle')}
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed text-muted-foreground/95 md:text-xl">
            {t('trust.title')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 shadow-[0_20px_44px_rgba(2,6,23,0.3)] backdrop-blur-md before:absolute before:inset-x-8 before:bottom-0 before:h-[2px] before:bg-gradient-to-r ${card.glowClass}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_92%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(236,72,153,0.06),transparent_35%)]" />
                <div className="flex items-start gap-3">
                  <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/45 bg-primary/12 text-primary shadow-[0_0_18px_rgba(56,189,248,0.35)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold leading-tight text-foreground">{card.title}</h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">{card.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/12 pt-5">
                  {card.metrics.map((metric, idx) => (
                    <div key={idx} className={idx === 0 ? 'pr-4' : 'border-l border-white/12 pl-4'}>
                      <p className="text-4xl font-semibold leading-none text-foreground">{metric.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to={`/${displayLang}/about-oman`}
            className="inline-flex min-h-[56px] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-xl font-medium text-foreground shadow-[0_16px_40px_rgba(37,99,235,0.2)] backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-white/10"
          >
            {t('aboutOman.exploreAdvantages')} <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
