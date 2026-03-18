import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Globe, Building2, Cpu, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const visionTabs = [
  {
    id: 'young-nation',
    label: 'Transformational Vision driven by Young Nation',
    icon: Users,
    content: [
      { icon: Users, text: '70% of Omans are under 35, digitally native, globally connected' },
      { icon: TrendingUp, text: 'Oman women participation in the labor market rising to 34% in Q3 2025 from 23% in 2016' },
    ],
  },
  {
    id: 'destination',
    label: 'Trusted and Stable Destination',
    icon: Globe,
    content: [
      { icon: Globe, text: 'The Traditional Gateway between Asia, Europe, and Africa has become a Global Technology, Tourism, and Logistics Hub' },
      { icon: Building2, text: 'Cultural Renaissance with UNESCO Sites and Entertainment Initiatives' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'World-Class Services and Infrastructure',
    icon: Building2,
    content: [
      { icon: Building2, text: 'World-class infrastructure spanning airports, roads, rail, and seaports' },
      { icon: Cpu, text: 'State-of-the-art healthcare and education facilities' },
    ],
  },
  {
    id: 'digital',
    label: 'State-of-the-Art Digital Infrastructure',
    icon: Cpu,
    content: [
      { icon: Cpu, text: 'Ranked Globally #2 in Digital Government Maturity Index (DGOI)' },
      { icon: TrendingUp, text: 'USD 40 billion committed to broadband connectivity' },
    ],
  },
  {
    id: 'investment',
    label: 'Delivering Scaled, Transformational Investment Opportunities',
    icon: TrendingUp,
    content: [
      { icon: TrendingUp, text: 'USD 3T+ in investable opportunities across sectors' },
      { icon: Building2, text: 'A Rapidly Diversifying Economy with an Expansion of Non-Oil Activities from 41% to 54% of GDP' },
    ],
  },
];

export const VisionSection = () => {
  const [activeTab, setActiveTab] = useState('young-nation');

  const activeContent = visionTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] to-[#0F172A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
              A Nation with a <span className="text-[var(--primary)]">Bold Vision</span>
            </h2>
            <p className="text-white/60 text-lg font-sans max-w-2xl mx-auto">
              Unlocking game-changing opportunities for the world through Oman Vision 2040.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Quote Card */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 h-full shadow-2xl flex flex-col justify-between">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-[var(--primary)] opacity-50 font-serif">"</span>
                </div>
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 font-sans font-light italic relative z-10">
                  "Our Vision is a strong, thriving, and stable Oman that provides
                  opportunity for all. Our Vision is a tolerant country with Islam as its
                  constitution and moderation as its method. We will welcome qualified
                  individuals from all over the world and will respect those who have come
                  to join our journey and our success."
                </blockquote>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white font-sans">HB</span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg font-sans">Haitham bin Tarik</div>
                  <div className="text-xs text-[var(--primary-light)] font-bold tracking-[0.1em] uppercase font-sans">
                    Sultan of Oman
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tabbed Content */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl h-full flex flex-col">
              {/* Tab Selector */}
              <div className="grid grid-cols-1 divide-y divide-white/5">
                {visionTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-8 py-5 flex items-center gap-4 transition-all duration-300 ${activeTab === tab.id
                        ? 'bg-white/10 text-white border-l-4 border-[var(--primary)]'
                        : 'text-white/40 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                      }`}
                  >
                    <tab.icon
                      className={`w-6 h-6 transition-colors ${activeTab === tab.id ? 'text-[var(--primary)]' : 'text-white/20'
                        }`}
                    />
                    <span className="text-sm font-bold tracking-wide font-sans">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="p-10 flex-1 flex flex-col justify-center bg-white/5">
                <AnimatePresence mode="wait">
                  {activeContent && (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      {activeContent.content.map((item, index) => (
                        <div key={index} className="flex items-start gap-5 group">
                          <div className="p-3 bg-[var(--primary)]/10 rounded-2xl group-hover:bg-[var(--primary)]/20 transition-colors">
                            <item.icon className="w-6 h-6 text-[var(--primary-light)]" />
                          </div>
                          <p className="text-white/80 text-lg leading-relaxed pt-1 font-sans">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

  );
};
