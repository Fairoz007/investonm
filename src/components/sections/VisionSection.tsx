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
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
              Our Vision
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white mb-8 tracking-tighter leading-[1.05]">
              A Nation with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Bold Vision</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
              Unlocking game-changing opportunities for the world through Oman Vision 2040.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Quote Card */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card-premium rounded-[48px] p-12 h-full flex flex-col justify-between group">
              <div className="relative">
                <div className="mb-10 w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <span className="text-4xl text-blue-400 opacity-80 font-serif">"</span>
                </div>
                <blockquote className="text-2xl md:text-3xl lg:text-[34px] text-white font-black leading-snug mb-12 tracking-tight">
                  "Our Vision is a strong, thriving, and stable Oman that provides
                  opportunity for all. Our Vision is a tolerant country with Islam as its
                  constitution and moderation as its method. We will welcome qualified
                  individuals from all over the world and will respect those who have come
                  to join our journey and our success."
                </blockquote>
              </div>

              <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_10px_25px_rgba(59,130,246,0.4)] border border-white/20">
                  <span className="text-xl font-black text-white">HB</span>
                </div>
                <div>
                  <div className="font-black text-white text-xl tracking-tight">Haitham bin Tarik</div>
                  <div className="text-xs text-blue-400 font-bold tracking-[0.2em] uppercase opacity-90">
                    Sultan of Oman
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Tabbed Content */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card-premium rounded-[48px] overflow-hidden h-full flex flex-col group">
              {/* Tab Selector */}
              <div className="flex flex-col border-b border-white/10">
                {visionTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-10 py-6 flex items-center gap-6 transition-all duration-500 border-l-4 ${activeTab === tab.id
                      ? 'bg-white/[0.05] text-white border-blue-500'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02] border-transparent'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl transition-colors duration-500 ${activeTab === tab.id ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-500'}`}>
                      <tab.icon className="w-6 h-6" />
                    </div>
                    <span className="text-base font-bold tracking-tight">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="p-12 flex-1 flex flex-col justify-center bg-white/[0.02]">
                <AnimatePresence mode="wait">
                  {activeContent && (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-10"
                    >
                      {activeContent.content.map((item, index) => (
                        <div key={index} className="flex items-start gap-6 group/item">
                          <div className="mt-1.5 p-3 bg-blue-500/10 rounded-2xl group-hover/item:bg-blue-500/20 transition-all duration-500 border border-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                            <item.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <p className="text-white text-xl leading-relaxed font-bold opacity-80 pt-1 tracking-tight">
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
