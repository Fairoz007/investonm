import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface SubMetric {
  label: string;
  value: string;
  description: string;
}

interface WhyOmanCard {
  id: string;
  title: string;
  description: string;
  image: string;
  metrics: SubMetric[];
}

export const WhyOmanSection = () => {
  const { lang } = useParams();
  const displayLang = lang || 'en';
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cards: WhyOmanCard[] = [
    {
      id: 'connectivity',
      title: 'Global Connectivity',
      description: 'Strategic location connecting East and West, making Oman a global business hub with world-class infrastructure.',
      image: '/images/global_connectivity.png',
      metrics: [
        { label: 'Proximity to Major Markets', value: '60%', description: 'Of the worlds population within 8h flight' },
        { label: 'Free Trade Agreements', value: '105', description: 'International agreements for global access' },
        { label: 'Logistics Rank', value: 'Top 10', description: 'Most efficient ports globally (Sohar & Salalah)' }
      ]
    },
    {
      id: 'economy',
      title: 'Stable & Diversified Economy',
      description: 'Robust economy with diverse sectors and strong government support for sustainable growth and development.',
      image: '/images/stable_economy.png',
      metrics: [
        { label: 'Credit Rating', value: 'BBB-', description: 'S&P Global Ratings raised showing fiscal health' },
        { label: 'Vision 2040', value: '$50B+', description: 'Investment to diversify the economy' },
        { label: 'Currency Stability', value: 'OMR', description: 'Omani Rial (OMR) pegged to the US dollar' }
      ]
    },
    {
      id: 'business',
      title: 'Business-Friendly Environment',
      description: 'Streamlined regulations and supportive policies designed to facilitate international business operations.',
      image: '/images/business_environment.png',
      metrics: [
        { label: 'Investment Appeal', value: '21st', description: 'Globally ranked for investment and business' },
        { label: 'Tax Incentives', value: '0%', description: 'Corporate tax for 10+ years in free zones' },
        { label: 'Digital Services', value: '95%', description: 'Government services integrated online' }
      ]
    },
    {
      id: 'quality',
      title: 'Unmatched Quality of Life',
      description: 'Safe, modern lifestyle with world-class infrastructure, cultural richness, and natural beauty.',
      image: '/images/quality_of_life.png',
      metrics: [
        { label: 'Safety Index', value: '5th', description: 'Ranked globally in Safety Index (2024)' },
        { label: 'Cultural Heritage', value: 'Vibrant', description: 'Blend of tradition and world-class modernity' },
        { label: 'Life Quality', value: 'Top', description: 'Pristine beaches, mountains, and desert' }
      ]
    }
  ];

  return (
    <section id="why-oman" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Why Oman?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 leading-relaxed"
            >
              Oman offers a dynamic and strategic environment for investors seeking growth and stability. Positioned as a hub of global trade and innovation, the Sultanate combines a forward-looking vision, business-friendly policies, and an unparalleled quality of life.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pb-2"
          >
            <Link 
              to={`/${displayLang}/about-oman`}
              className="btn-premium w-full sm:w-auto mt-4 md:mt-0"
            >
              Explore Why Invest in Oman
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Expandable Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 h-[1600px] lg:h-[400px]">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              layout
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[0.23,1,0.32,1] h-full border border-white/5 shadow-2xl
                ${activeCard === card.id ? 'flex-[4.5] border-blue-500/30' : 'flex-[1]'}
                ${activeCard !== null && activeCard !== card.id ? 'opacity-40 grayscale' : 'opacity-100'}
              `}
            >
              {/* Background Image */}
              <motion.div 
                layout
                className="absolute inset-0"
              >
                <img 
                  src={card.image} 
                  alt={card.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                />
                <div className={`absolute inset-0 transition-opacity duration-700
                  ${activeCard === card.id 
                    ? 'bg-[#0b0f19]/80 backdrop-blur-sm' 
                    : 'bg-[#0b0f19]/40 hover:bg-[#0b0f19]/20'}
                `} />
              </motion.div>

              {/* Content Integration */}
              <div className="relative z-10 h-full w-full">
                <AnimatePresence mode="wait">
                  {activeCard === card.id ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 p-12 flex flex-col justify-center"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <h3 className="text-4xl font-bold text-white mb-6">{card.title}</h3>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">{card.description}</p>
                        
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {card.metrics.map((metric, idx) => (
                            <div 
                              key={idx}
                              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col justify-center gap-1 shadow-2xl"
                            >
                              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{metric.label}</span>
                              <div className="text-3xl font-bold text-white">{metric.value}</div>
                              <p className="text-xs text-slate-500">{metric.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <h3 className={`text-xl font-bold text-white whitespace-nowrap transition-all duration-700
                        ${activeCard !== null ? 'opacity-0 scale-50' : 'rotate-[-90deg] lg:rotate-[-90deg]'}
                      `}>
                        {card.title}
                      </h3>
                    </motion.div>
                  ) }
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};
