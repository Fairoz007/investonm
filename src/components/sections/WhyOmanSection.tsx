import { ArrowRight, Globe2, BarChart3, Zap, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export const WhyOmanSection = () => {
  const { lang } = useParams();
  const displayLang = lang || 'en';

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
    <section id="why-oman" className="relative overflow-hidden py-20 bg-[#050812]">
      {/* Background Dots/Grid */}
      <div className="absolute inset-0 z-0 opacity-40 bg-grid-overlay pointer-events-none" />
      
      <div className="container-custom relative z-10 mx-auto w-full max-w-[1240px] px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold tracking-tight text-white md:text-[64px] mb-6"
          >
            Why Oman?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94A3B8] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Oman offers a dynamic and strategic environment for investors seeking growth and stability. 
            Positioned as a premier global investment hub, the Sultanate combines connectivity, diversity, 
            and exceptional quality of life.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-white/5 bg-[#0A0D18]/90 p-8 md:p-10 transition-all duration-500 hover:border-white/10"
              >
                {/* Header Content */}
                <div className="flex gap-4 items-start mb-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-[28px] font-bold text-white mb-2 leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-[#94A3B8] text-base leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 mb-8" />

                {/* Stats Container */}
                <div className="grid grid-cols-2 gap-8 relative">
                  {/* Vertical Divider line */}
                  <div className="absolute left-1/2 top-2 bottom-2 w-px bg-white/5 hidden sm:block" />
                  
                  {pillar.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-3xl md:text-[38px] font-bold text-white mb-2">
                        {stat.value}
                      </span>
                      <span className="text-[#94A3B8] text-sm leading-tight max-w-[160px]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to={`/${displayLang}/about-oman`}
            className="group flex min-h-[52px] items-center justify-center rounded-xl bg-white/5 border border-white/10 px-10 text-lg font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shadow-xl backdrop-blur-sm"
          >
            Explore Investment in Oman
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

