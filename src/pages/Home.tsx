import { motion } from 'framer-motion';
import { Search, Volume2, Pause, Maximize, ArrowUpRight } from 'lucide-react';

const CARDS_DATA = [
  {
    id: 1,
    title: 'Transformational Vision, Young Nation',
    text: '70% of Saudi Population under 35 (2023)',
    bgColor: 'from-[#0d4a40] to-[#062922]', 
  },
  {
    id: 2,
    title: 'A Trusted and Stable Destination',
    text: 'Recognized as #1 FDI Destination in MENA',
    bgColor: 'from-[#0a3a60] to-[#052037]', 
  },
  {
    id: 3,
    title: 'World Class Services and Infrastructure',
    text: 'Global State-of-the-Art Healthcare, Education, Transport and Renewables Infrastructure',
    bgColor: 'from-[#0d4554] to-[#06242c]', 
  },
  {
    id: 4,
    title: 'State-of-the-Art Digital Infrastructure',
    text: 'Ranked Globally #2 in Digital Government Maturity Index (2025)',
    bgColor: 'from-[#133752] to-[#081e2e]', 
  },
  {
    id: 5,
    title: 'Large Scale Transformational Investments',
    text: 'USD 2T+ in investable opportunities',
    bgColor: 'from-[#2a1b4d] to-[#150d29]', 
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061819] via-[#041416] to-[#020b0d] pt-24 pb-32">
      {/* Background ambient glowing gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#08453f] rounded-full blur-[160px] opacity-30 mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-[#093539] rounded-full blur-[140px] opacity-20 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-[#061e38] rounded-full blur-[180px] opacity-30 mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10 mx-auto px-6 max-w-[1400px]">
        {/* Search & Actions Bar Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full mt-32 mb-16"
        >
          {/* Using flex layout to match the image where search is on left and buttons on right visually connected by a line */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6 relative">
            
            {/* Search Input */}
            <motion.div variants={itemVariants} className="w-full xl:w-[400px]">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="I am looking for..."
                  className="w-full py-2.5 px-6 bg-transparent border border-white/20 rounded-full text-white text-xs placeholder:text-white/60 focus:outline-none focus:border-[#00D0D4]/50 focus:bg-white/5 transition-all duration-300"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-[#00D0D4] transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Connecting lines for aesthetics like in layout */}
            <div className="hidden xl:block h-[1px] bg-white/20 flex-1 mx-6 relative" />

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-3">
              {['Explore Sectors', 'E-Services', 'Contact Us'].map((btn) => (
                <button 
                  key={btn} 
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-transparent hover:border-white/40 transition-all font-medium text-[11px] text-white/90 tracking-wider"
                >
                  {btn}
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </button>
              ))}

              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 border border-white/20 rounded-full bg-transparent text-white/80 hover:text-white hover:border-white/40 transition-colors">
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
                <button className="p-2 border border-white/20 rounded-full bg-transparent text-white/80 hover:text-white hover:border-white/40 transition-colors">
                  <Pause className="w-3.5 h-3.5 fill-current border border-white/80" />
                </button>
                <button className="p-2 border border-white/20 rounded-full bg-transparent text-white/80 hover:text-white hover:border-white/40 transition-colors">
                  <Maximize className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Invest Section */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
           className="mt-20 pt-16 border-t border-white/10"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex items-center gap-6 mb-2">
              <h2 className="text-[26px] font-bold text-white tracking-wide">
                Why Invest in Saudi Arabia
              </h2>
              <div className="h-[1px] flex-1 max-w-[400px] bg-white/20 hidden sm:block"></div>
            </div>
            <p className="text-white/80 text-[13px] font-medium tracking-wide">Top 5 Reasons to Invest</p>
          </motion.div>

          {/* 5 Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {CARDS_DATA.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className={`flex flex-col items-center justify-center text-center p-6 rounded-[20px] bg-gradient-to-br ${card.bgColor} border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md cursor-pointer relative overflow-hidden group min-h-[220px]`}
              >
                {/* Subtle outer glow on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Number Badge mimicking the design, could just be text, but let's keep it simple */}
                <h3 className="text-[13px] font-bold text-white mb-5 leading-relaxed tracking-wide mt-2">
                  {card.title}
                </h3>
                
                <p className="text-[11px] text-white/80 leading-relaxed font-medium group-hover:text-white transition-colors">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bold Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-32 mb-16 max-w-2xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            A Nation with a Bold Vision
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-white/70 text-lg"
          >
            Unlocking game-changing opportunities for the world
          </motion.p>
        </motion.div>
      </div>
      
      {/* Scroll indicator - Bottom right (from the design visual) */}
      <div className="fixed bottom-10 right-10 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
            <span className="text-[9px] font-bold text-white text-center uppercase tracking-widest px-2">Scroll To Explore</span>
            <svg className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/30 stroke-[#00D0D4]/40" />
            </svg>
        </div>
      </div>
    </div>
  );
}
