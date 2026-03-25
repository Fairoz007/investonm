import { motion } from 'framer-motion';
import { Ship, Globe2, Landmark, ShieldCheck, Building2, Zap, ArrowRight } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { PageHeader } from '@/components/shared/PageHeader';

const SECTIONS = [
  {
    id: 'location',
    icon: Globe2,
    title: 'aboutoman.location.title',
    desc: 'aboutoman.location.desc',
    img: '/images/oman_hero.png'
  },
  {
    id: 'infrastructure',
    icon: Ship,
    title: 'aboutoman.infra.title',
    desc: 'aboutoman.infra.desc',
    img: '/images/hero-energy.jpg'
  },
  {
    id: 'legislation',
    icon: ShieldCheck,
    title: 'aboutoman.legislation.title',
    desc: 'aboutoman.legislation.desc',
    img: '/images/hero-engineers.jpg'
  },
  {
    id: 'ecosystem',
    icon: Building2,
    title: 'aboutoman.ecosystem.title',
    desc: 'aboutoman.ecosystem.desc',
    img: '/images/hero-manufacturing.jpg'
  },
  {
    id: 'hub',
    icon: Zap,
    title: 'aboutoman.hub.title',
    desc: 'aboutoman.hub.desc',
    img: '/images/hero-scientist.jpg'
  },
  {
    id: 'incentives',
    icon: Landmark,
    title: 'aboutoman.incentives.title',
    desc: 'aboutoman.incentives.desc',
    img: '/images/hero-energy.jpg'
  }
];

export default function AboutOman() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24">
      <PageHeader 
        title={t('aboutoman.text.1')}
        subtitle={t('aboutoman.text.2')}
        breadcrumb={[{ label: t('aboutoman.text.1') }]}
      />

      {/* Main Introduction */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              {t('aboutoman.text.3')}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-12" />
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="space-y-32">
        {SECTIONS.map((section, idx) => (
          <div key={section.id} className="relative">
            <div className="container-custom">
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>
                <div className="lg:w-1/2 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center gap-4 text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">
                       <div className="p-3 bg-blue-500/10 rounded-xl">
                         <section.icon className="w-6 h-6" />
                       </div>
                       <span className="h-px w-8 bg-blue-500/30" />
                       Strategic Advantage
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                      {t(section.title)}
                    </h3>

                    <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-light whitespace-pre-wrap">
                      {t(section.desc)}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group">
                        Explore Opportunities
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative aspect-[1.5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700">
                      <img 
                        src={section.img} 
                        alt={t(section.title)}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent opacity-60" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="mt-32">
        <ResearchDataCTA />
      </div>
    </div>
  );
}

