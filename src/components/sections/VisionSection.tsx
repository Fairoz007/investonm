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
      { icon: Users, text: '70% of Saudis are under 35, digitally native, globally connected' },
      { icon: TrendingUp, text: 'Saudi women participation in the labor market rising to 34% in Q3 2025 from 23% in 2016' },
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
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Nation with a Bold Vision
            </h2>
            <p className="text-white/60 text-lg">
              Unlocking game-changing opportunities for the world
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Quote Card */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full">
              <div className="flex flex-col h-full">
                <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 flex-1">
                  "Our Vision is a strong, thriving, and stable Saudi Arabia that provides
                  opportunity for all. Our Vision is a tolerant country with Islam as its
                  constitution and moderation as its method. We will welcome qualified
                  individuals from all over the world and will respect those who have come
                  to join our journey and our success."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Mohammed bin Salman</div>
                    <div className="text-sm text-white/60">
                      Crown Prince, Prime Minister, and Chairman of the Council of
                      Economic and Development Affairs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tabbed Content */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card overflow-hidden">
              {/* Tab Buttons */}
              <div className="border-b border-white/10">
                {visionTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white/5 text-white border-l-2 border-primary'
                        : 'text-white/60 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                    }`}
                  >
                    <tab.icon
                      className={`w-5 h-5 ${
                        activeTab === tab.id ? 'text-primary' : 'text-white/40'
                      }`}
                    />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 min-h-[200px]">
                <AnimatePresence mode="wait">
                  {activeContent && (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {activeContent.content.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed pt-1">
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
