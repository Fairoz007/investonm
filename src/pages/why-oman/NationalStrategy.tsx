import { ArrowRight, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

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
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Why Oman</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">National Strategy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Oman Vision 2040
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Oman's ambitious roadmap for economic diversification, social transformation, 
                and global engagement, creating unprecedented opportunities for investors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              The Three Pillars of Oman Vision 2040
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Oman Vision 2040 is built on three fundamental pillars that guide all development efforts 
              and create opportunities across sectors.
            </p>
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
              Giga Projects
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Transformational projects that are reshaping the economic landscape 
              and creating new investment opportunities.
            </p>
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
              Economic Transformation Targets
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Measurable goals that demonstrate the Sultanate's commitment to economic diversification.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {economicTargets.map((target, index) => (
              <ScrollReveal key={target.label} delay={index * 0.1}>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">{target.label}</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-white/50 mb-1">Current</div>
                      <div className="text-2xl font-bold text-white/70">{target.current}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary flex-1" />
                    <div className="text-center">
                      <div className="text-sm text-white/50 mb-1">Target 2030</div>
                      <div className="text-2xl font-bold text-primary">{target.target}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Be Part of the Transformation
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of investors who are already capitalizing on the opportunities 
                created by Oman Vision 2040.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Explore Opportunities</button>
                <button className="btn-secondary">Download Oman Vision 2040 Report</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
