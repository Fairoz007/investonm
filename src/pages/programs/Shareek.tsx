import { motion } from 'framer-motion';
import { ArrowRight, HandshakeIcon, Building2, TrendingUp, Target } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const programFeatures = [
  {
    icon: HandshakeIcon,
    title: 'Strategic Partnership',
    description: 'Direct partnership with the Saudi government for large-scale projects.',
  },
  {
    icon: Building2,
    title: 'Co-Investment',
    description: 'Government co-investment to share risks and accelerate project delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Contracts',
    description: 'Secure long-term offtake agreements and revenue streams.',
  },
  {
    icon: Target,
    title: 'Strategic Alignment',
    description: 'Projects aligned with Vision 2030 national priorities.',
  },
];

const targetAreas = [
  {
    name: 'Energy & Utilities',
    description: 'Power generation, water desalination, and renewable energy projects.',
    examples: ['Solar power plants', 'Water desalination', 'Smart grids'],
  },
  {
    name: 'Transport & Logistics',
    description: 'Infrastructure projects supporting economic connectivity.',
    examples: ['Rail networks', 'Port expansion', 'Logistics hubs'],
  },
  {
    name: 'Healthcare & Education',
    description: 'Social infrastructure to support population growth.',
    examples: ['Hospital construction', 'Schools & universities', 'Research centers'],
  },
  {
    name: 'Digital Infrastructure',
    description: 'Technology infrastructure for the digital economy.',
    examples: ['Data centers', '5G networks', 'Cloud infrastructure'],
  },
  {
    name: 'Industrial Zones',
    description: 'Manufacturing and industrial facilities.',
    examples: ['Industrial cities', 'Manufacturing plants', 'Technology parks'],
  },
  {
    name: 'Tourism & Entertainment',
    description: 'Projects supporting the tourism and entertainment sectors.',
    examples: ['Hotels & resorts', 'Entertainment venues', 'Cultural attractions'],
  },
];

const partnershipProcess = [
  {
    step: '1',
    title: 'Project Proposal',
    description: 'Submit your project proposal for evaluation and alignment assessment.',
  },
  {
    step: '2',
    title: 'Feasibility Study',
    description: 'Joint feasibility study to assess project viability and structure.',
  },
  {
    step: '3',
    title: 'Partnership Agreement',
    description: 'Negotiate and sign the partnership agreement with the government.',
  },
  {
    step: '4',
    title: 'Project Execution',
    description: 'Execute the project with ongoing government support and oversight.',
  },
];

export default function Shareek() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Programs & Incentives</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Shareek</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Shareek Program
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                A strategic partnership program that brings together the government and private sector 
                to deliver large-scale projects that drive economic growth and diversification.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Program Features
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Unique partnership model designed for large-scale strategic investments.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 text-center h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Areas */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Target Investment Areas
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Priority sectors for Shareek partnerships aligned with national development goals.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAreas.map((area, index) => (
              <ScrollReveal key={area.name} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-bold text-white mb-2">{area.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.examples.map((example) => (
                      <span
                        key={example}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Partnership Process
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              A structured approach to forming strategic partnerships.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {partnershipProcess.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    {index < partnershipProcess.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Partner with the Government
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Explore strategic partnership opportunities and join forces with the Saudi government 
                to deliver transformational projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Submit Project Proposal</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
