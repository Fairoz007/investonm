import { motion } from 'framer-motion';
import { Target, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const pillars = [
  {
    icon: Lightbulb,
    title: 'A Vibrant Society',
    description: 'Building a society that embraces modern values while preserving cultural heritage and Islamic principles.',
    goals: ['Promote cultural and entertainment opportunities', 'Improve quality of life for all citizens', 'Preserve cultural heritage'],
  },
  {
    icon: TrendingUp,
    title: 'A Thriving Economy',
    description: 'Diversifying the economy and creating a sustainable, knowledge-based economic model.',
    goals: ['Increase private sector contribution to GDP', 'Develop non-oil exports', 'Attract foreign direct investment'],
  },
  {
    icon: Target,
    title: 'An Ambitious Nation',
    description: 'Building an effective, transparent, and accountable government that enables citizens and businesses.',
    goals: ['Increase non-profit sector contribution', 'Promote volunteerism', 'Enhance government effectiveness'],
  },
];

const keyInitiatives = [
  {
    title: 'NEOM',
    description: 'A $500 billion futuristic city project that will serve as a model for sustainable living and innovation.',
    stat: '$500B',
  },
  {
    title: 'Red Sea Project',
    description: 'A luxury tourism destination spanning 28,000 km² with 50 hotels and 1,300 residential properties.',
    stat: '28K km²',
  },
  {
    title: 'Qiddiya',
    description: 'The entertainment, sports, and arts capital of Oman, located near Riyadh.',
    stat: '334 km²',
  },
  {
    title: 'Diriyah Gate',
    description: 'A cultural and heritage destination celebrating the birthplace of the Oman nation.',
    stat: '7 km²',
  },
  {
    title: 'Amaala',
    description: 'An ultra-luxury wellness and tourism destination on the Red Sea coast.',
    stat: '3,800 km²',
  },
  {
    title: 'Green Oman Initiative',
    description: 'A comprehensive plan to combat climate change and protect the environment.',
    stat: '10B Trees',
  },
];

const economicTargets = [
  { label: 'Non-Oil Government Revenue', current: '9%', target: '70%' },
  { label: 'Private Sector Contribution to GDP', current: '40%', target: '65%' },
  { label: 'SME Contribution to GDP', current: '20%', target: '35%' },
  { label: 'FDI as % of GDP', current: '3.8%', target: '5.7%' },
];

export default function NationalStrategy() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-[var(--text-paragraph)] pt-24">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/oman_hero.png')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="container-custom relative z-10 text-left w-full text-white">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-start gap-2 text-[12px] font-medium uppercase tracking-wider opacity-70 mb-[10px]"
            >
              <span>Home</span>
              <span className="opacity-40">/</span>
              <span>{t('nationalstrategy.text.2')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
            >
              {t('nationalstrategy.text.3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
            >
              {t('nationalstrategy.text.4')}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('nationalstrategy.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('nationalstrategy.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.1}>
                <div className="glass-card p-8 h-full">
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-white/60 mb-6">{pillar.description}</p>
                  <ul className="space-y-3">
                    {pillar.goals.map((goal) => (
                      <li key={goal} className="flex items-start gap-3 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Giga Projects */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('nationalstrategy.text.7')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('nationalstrategy.text.8')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyInitiatives.map((initiative, index) => (
              <ScrollReveal key={initiative.title} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <div className="text-3xl font-bold text-primary mb-3">{initiative.stat}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{initiative.title}</h3>
                  <p className="text-white/60 text-sm">{initiative.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Targets */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('nationalstrategy.text.9')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('nationalstrategy.text.10')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {economicTargets.map((target, index) => (
              <ScrollReveal key={target.label} delay={index * 0.1}>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{target.label}</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-white/50 mb-1"> {t('nationalstrategy.text.11')} </div>
                      <div className="text-2xl font-bold text-white/70">{target.current}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary flex-1" />
                    <div className="text-center">
                      <div className="text-sm text-white/50 mb-1"> {t('nationalstrategy.text.12')} </div>
                      <div className="text-2xl font-bold text-primary">{target.target}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research CTA section */}
      <ResearchDataCTA />
    </div>
  );
}
