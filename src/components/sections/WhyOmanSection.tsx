import { Globe2, BarChart3, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyOmanSection = () => {
  const pillars = [
    {
      id: 'connectivity',
      icon: Globe2,
      title: 'Global Connectivity',
      subtitle: 'Strategic location bridging East and West with world-class infrastructure.',
      stats: [
        { value: '60%', label: 'of world population within 8h flight' },
        { value: '105', label: 'international trade agreements' }
      ],
      color: 'blue'
    },
    {
      id: 'economy',
      icon: BarChart3,
      title: 'Stable & Diversified Economy',
      subtitle: 'Strong, robust economy with multi-sector growth opportunities.',
      stats: [
        { value: 'BBB+', label: 'S&P Rating' },
        { value: '$50B+', label: 'Investment to diversify' }
      ],
      color: 'indigo'
    },
    {
      id: 'business',
      icon: Zap,
      title: 'Business-Friendly Environment',
      subtitle: 'Streamlined regulations and incentives designed to facilitate international operations.',
      stats: [
        { value: 'Top 10', label: 'most efficient ports worldwide' },
        { value: '0% Tax', label: 'on personal income' }
      ],
      color: 'blue-link'
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      title: 'High Quality of Life',
      subtitle: 'Safe, modern lifestyle with natural beauty and world-class amenities.',
      stats: [
        { value: 'Top 3', label: 'safest countries globally' },
        { value: '1st', label: 'Gulf quality of life index rank' }
      ],
      color: 'cyan'
    }
  ];

  return (
    <section id="why-oman" className="relative overflow-hidden py-24 md:py-32 bg-transparent">
      <div className="container-custom relative z-10 mx-auto w-full max-w-[1400px] px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-24">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
            Global Advantage
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[1.05]"
          >
            Why Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Oman?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl leading-relaxed max-w-2xl font-bold opacity-80"
          >
            A strategic gateway connecting global markets with long-term growth opportunities and exceptional quality of life.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col glass-card-premium p-10 rounded-[48px] h-full"
              >
                {/* Icon & Title */}
                <div className="mb-12">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/[0.05] text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white leading-tight mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-400 font-bold opacity-80 text-sm mb-12 flex-1">
                   {pillar.subtitle}
                </p>

                {/* Primary Stat */}
                <div className="mt-auto pt-8 border-t border-white/5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white tracking-tighter">
                        {pillar.stats[0].value}
                      </span>
                    </div>
                    <p className="mt-2 text-blue-400 text-xs font-black uppercase tracking-widest opacity-80">
                       {pillar.stats[0].label}
                    </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
