import { ArrowRight, BarChart3, Check, Globe2, Heart } from 'lucide-react';
import type { ComponentType } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  const { lang } = useParams();
  const displayLang = lang || 'en';

  const cards: WhyOmanCard[] = [
    {
      id: 'connectivity',
      icon: Globe2,
      title: 'Global Connectivity',
      description: 'Strategic location bridging East and West with world-class infrastructure.',
      metrics: [
        { value: '60%', description: 'of world population within 8h flight' },
        { value: '105', description: 'international trade agreements' },
      ],
      glowClass: 'before:from-cyan-500/35 before:to-sky-500/10',
    },
    {
      id: 'economy',
      icon: BarChart3,
      title: 'Stable & Diversified Economy',
      description: 'Strong, robust economy with multi-sector growth opportunities.',
      metrics: [
        { value: 'BBB+', description: 'S&P Rating' },
        { value: '$50B+', description: 'Investment to diversify' },
      ],
      glowClass: 'before:from-violet-400/35 before:to-fuchsia-400/10',
    },
    {
      id: 'business',
      icon: Check,
      title: 'Business-Friendly Environment',
      description: 'Streamlined regulations and incentives designed to facilitate international operations.',
      metrics: [
        { value: 'Top 10', description: 'most efficient ports worldwide' },
        { value: '0% Tax', description: 'on personal income' },
      ],
      glowClass: 'before:from-blue-400/35 before:to-cyan-300/10',
    },
    {
      id: 'quality',
      icon: Heart,
      title: 'High Quality of Life',
      description: 'Safe, modern lifestyle with natural beauty and world-class amenities.',
      metrics: [
        { value: 'Top 3', description: 'safest countries globally' },
        { value: '1st', description: 'Gulf quality of life index rank' },
      ],
      glowClass: 'before:from-rose-400/35 before:to-orange-300/10',
    },
  ];

  return (
    <section id="why-oman" className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(244,114,182,0.10),transparent_42%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.10),transparent_40%)]" />
        <div className="absolute left-[14%] top-10 h-64 w-64 rounded-full bg-primary/15 blur-[130px]" />
        <div className="absolute right-[16%] top-[28%] h-60 w-60 rounded-full bg-violet-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[130px]" />
      </div>

      <div className="container-custom relative z-10 max-w-[1200px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-[52px]">
              Why Oman?
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed text-muted-foreground/95 md:text-xl">
            Oman offers a dynamic and strategic environment for investors seeking growth and stability.
            Positioned as a premier global investment hub, the Sultanate combines connectivity, diversity,
            and exceptional quality of life.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/80 p-8 shadow-[0_20px_44px_rgba(2,6,23,0.55)] backdrop-blur-md before:absolute before:inset-x-8 before:bottom-0 before:h-[2px] before:bg-gradient-to-r ${card.glowClass}`}
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
            className="inline-flex min-h-[56px] items-center justify-center rounded-xl border border-white/15 bg-[#10172a]/85 px-10 py-3 text-xl font-medium text-foreground shadow-[0_16px_40px_rgba(37,99,235,0.35)] backdrop-blur-md transition-colors hover:border-primary/60 hover:bg-[#14203a]"
          >
            Explore Investment in Oman <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
