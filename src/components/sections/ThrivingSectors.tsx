import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, HardHat, Beaker, Fish, Zap, Factory, Laptop, Trees, GraduationCap, Heart, Trophy, Palmtree, Recycle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface Stat {
  label: string;
  value: string;
  subValue: string;
  year?: string;
}

interface Sector {
  id: string;
  title: string;
  image: string;
  description: string;
  stats: Stat[];
  icon: any;
}

const SECTORS: Sector[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    image: '/images/hero-scientist.jpg',
    description: "Oman's healthcare sector stands as a cornerstone of the nation's socio-economic development, reflecting the government's commitment to providing high-quality medical services to its citizens and residents. Aligned with Oman Vision 2040, the sector emphasizes decentralization and international standards, aiming to enhance healthcare accessibility and quality across the Sultanate.",
    stats: [
      { label: 'Capacity', value: '7.6 k', subValue: 'Hospital beds', year: '2023' },
      { label: 'Surgeries performed', value: '87 k', subValue: '-', year: '2023' },
      { label: 'Allocation of', value: '55 m', subValue: 'To four major medical projects', year: '2024' },
      { label: 'Increase', value: '24.6 %', subValue: 'In healthcare spending', year: '2023' },
    ]
  },
  {
    id: 'tourism',
    title: 'Tourism',
    icon: Palmtree,
    image: '/images/luxury-oman.png',
    description: "Oman's tourism sector is a key driver of economic diversification, offering world-class experiences from luxury coastal resorts to ancient heritage sites. The Sultanate is positioning itself as a premier destination for high-end, sustainable tourism in the region.",
    stats: [
      { label: 'Visitors Revenue', value: '1.1 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
      { label: 'Employment', value: '192 k', subValue: 'Jobs in tourism', year: '2023' },
      { label: 'GDP Contribution', value: '7.6 %', subValue: "Of Oman's Total GDP", year: '2023' },
      { label: 'Total Investment', value: '2.8 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
    ]
  },
  {
    id: 'ict',
    title: 'ICT',
    icon: Laptop,
    image: '/images/oman_tech.png',
    description: "The Information and Communications Technology (ICT) sector is the backbone of Oman's digital transformation. With massive investments in 5G, data centers, and AI infrastructure, Oman is building an agile digital economy to compete globally.",
    stats: [
      { label: 'Employment', value: '45 k+', subValue: 'In ICT sector', year: '2023' },
      { label: 'Exports', value: '367 m', subValue: 'American Dollar (USD)', year: '2023' },
      { label: 'Internet Pen.', value: '95.2 %', subValue: 'National rate', year: '2023' },
      { label: 'Users', value: '5.3 m', subValue: 'Active internet users', year: '2023' },
    ]
  },
  {
    id: 'mining',
    title: 'Mining',
    icon: HardHat,
    image: '/images/hero-engineers.jpg',
    description: "Oman's mining industry is a strategic pillar of Vision 2040, aiming to increase the sector's GDP contribution significantly. The country hosts world-class deposits of copper, gold, chromite, and industrial minerals like limestone and gypsum.",
    stats: [
      { label: 'Ranked', value: '5 th', subValue: 'globally in gypsum production', year: '2023' },
      { label: 'GDP Contribution', value: '629 m', subValue: "American Dollar (USD)", year: '2021' },
      { label: 'Exports', value: '202 bn', subValue: 'American Dollar (USD) Of Mineral products', year: '2023' },
      { label: 'Copper Reserves', value: '2.78 m', subValue: 'Tones Across major mines', year: '2023' },
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    image: '/images/hero-manufacturing.jpg',
    description: "The manufacturing sector is a cornerstone of economic diversification, focusing on high-value industrial production and export. Oman's strategic industrial ports and free zones provide a competitive edge for global manufacturers.",
    stats: [
      { label: 'Ranked', value: '4 th', subValue: 'Regionally by UNIDO', year: '2023' },
      { label: 'Employment', value: '250 k', subValue: 'Active industrial jobs', year: '2023' },
      { label: 'GDP Contribution', value: '10 %', subValue: "National target", year: 'Vision' },
      { label: 'Total Revenue', value: '2.19 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
    ]
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    icon: Zap,
    image: '/images/hero-energy.jpg',
    description: "Oman is rapidly transitioning to a green economy by leveraging its vast solar and wind resources. As a global frontrunner in green hydrogen, the Sultanate offers a unique ecosystem for clean energy investments.",
    stats: [
      { label: 'Investment', value: '10 bn', subValue: 'American Dollar (USD)', year: '2024' },
      { label: 'Env. Rank', value: '54 th', subValue: 'Environmental Performance Index', year: '2023' },
      { label: 'Energy Cont.', value: '10 %', subValue: 'Target by 2025', year: 'Goal' },
      { label: 'Projects', value: 'Active', subValue: 'Multi-GW solar & wind', year: '2024' },
    ]
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    icon: Trees,
    image: '/images/oman_landscape.png',
    description: "Modern agriculture in Oman focuses on food security and sustainable farming practices. Leveraging technology like hydroponics and smart irrigation, the sector is increasing domestic production and export potential.",
    stats: [
      { label: 'Fodder Yield', value: '123 k', subValue: 'Tons produced', year: '2023' },
      { label: 'Employment', value: '6 %', subValue: 'Of national workforce', year: '2023' },
      { label: 'GDP Contribution', value: '2.3 %', subValue: 'Direct contribution', year: '2023' },
      { label: 'Total Value', value: '966 m', subValue: 'Riyal Omani (RO)', year: '2023' },
    ]
  },
  {
    id: 'petrochemical',
    title: 'Petrochemical',
    icon: Beaker,
    image: '/images/hero-manufacturing.jpg',
    description: "Oman's petrochemical sector transforms hydrocarbon resources into high-value products. Mega-projects like Duqm Refinery drive value-added industrialization and global competitiveness.",
    stats: [
      { label: 'Export Revenue', value: '2 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
      { label: 'Employment', value: '60 k', subValue: 'Jobs', year: '2023' },
      { label: 'GDP Contribution', value: '11 %', subValue: "Total national GDP", year: '2023' },
      { label: 'Total Project Value', value: '4.5 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
    ]
  },
  {
    id: 'circular-economy',
    title: 'Circular Economy',
    icon: Recycle,
    image: '/images/oman_industry.png',
    description: "Oman is pioneering circular economy practices to ensure sustainable development. This involves waste-to-energy projects, advanced recycling facilities, and sustainable resource management.",
    stats: [
      { label: 'Recycling Rate', value: '31 %', subValue: 'National target', year: 'Vision' },
      { label: 'Waste/Capita', value: '1.2 kg', subValue: 'Average daily generation', year: '2023' },
      { label: 'Active Projects', value: '1.5 bn', subValue: 'American Dollar (USD)', year: '2024' },
      { label: 'Facilities', value: '67', subValue: 'Operating recycling centers', year: '2023' },
    ]
  },
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    image: '/images/oman_hero.png',
    description: "Investing in human capital is a national priority. Oman's education sector is modernizing through private sector partnerships, research initiatives, and international institutional collaborations.",
    stats: [
      { label: 'Private Market', value: '1.7 bn', subValue: 'American Dollar (USD)', year: '2023' },
      { label: 'Govt Expenditure', value: '6 %', subValue: 'Total budget allocation', year: '2024' },
      { label: 'GDP Share', value: '5 %', subValue: 'Sector share', year: '2023' },
      { label: 'Total Output', value: '2 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
    ]
  },
  {
    id: 'sport',
    title: 'Sport',
    icon: Trophy,
    image: '/images/hero-engineers.jpg',
    description: "Oman is developing a vibrant sports ecosystem, aiming to host international events and promote a healthy lifestyle. This includes investments in world-class stadiums, sports academies, and high-performance training centers.",
    stats: [
      { label: 'Investment', value: 'Growing', subValue: 'Sports infrastructure', year: '2024' },
      { label: 'Events', value: '50+', subValue: 'International sports events', year: '2023' },
      { label: 'Academies', value: 'New', subValue: 'Under development', year: '2024' },
      { label: 'Participation', value: 'High', subValue: 'National youth focus', year: '2024' },
    ]
  },
  {
    id: 'fisheries',
    title: 'Fisheries',
    icon: Fish,
    image: '/images/hero-scientist.jpg',
    description: "With a coastline over 3,000 km, Oman's fisheries sector is vital for food security and exports. Sustainable fishing and advanced aquaculture are the key pillars of growth.",
    stats: [
      { label: 'Production', value: '800 k', subValue: 'Tons per year', year: '2023' },
      { label: 'Growth', value: '12 %', subValue: 'Annual sector growth', year: '2023' },
      { label: 'Fleet', value: '25 k+', subValue: 'Boats and vessels', year: '2023' },
      { label: 'Exports', value: '60+', subValue: 'Countries served', year: '2023' },
    ]
  }
];

export const ThrivingSectors = () => {
  const { lang } = useParams();
  const displayLang = lang || 'en';
  const [activeIdx, setActiveIdx] = useState(0);

  const activeSector = SECTORS[activeIdx];

  const handleNext = () => setActiveIdx((prev) => (prev + 1) % SECTORS.length);
  // const handlePrev = () => setActiveIdx((prev) => (prev - 1 + SECTORS.length) % SECTORS.length);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [activeIdx]); // Reset timer when activeIdx changes manually (if applicable)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0F172A] to-[#020617] overflow-hidden relative">
      <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-sans">
              Thriving Sectors with <span className="text-[var(--primary)]">Exciting Incentives</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl font-sans">
              Explore the vibrant investment opportunities in Oman, spanning essential sectors like technology, renewable energy, logistics, and manufacturing.
            </p>
          </div>
          <Link 
            to={`/${displayLang}/key-sectors`}
            className="group px-7 py-3.5 bg-[var(--primary)] text-white rounded-full font-bold font-sans flex items-center justify-center gap-2 hover:bg-[var(--primary-dark)] transition-all shadow-xl w-full sm:w-auto min-h-[44px]"
          >
            Explore All Sectors <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-2" />
          </Link>
        </div>

        {/* Carousel Section */}
        <div className="relative mb-24 h-[480px] flex items-center justify-center">
          <div className="relative w-full max-w-5xl flex items-center justify-center h-full">
            <AnimatePresence mode="popLayout">
              {SECTORS.map((sector, idx) => {
                let offset = idx - activeIdx;
                if (offset < -SECTORS.length / 2) offset += SECTORS.length;
                if (offset > SECTORS.length / 2) offset -= SECTORS.length;

                const isCenter = offset === 0;
                const absOffset = Math.abs(offset);
                
                if (absOffset > 3) return null;

                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1 - absOffset * 0.25,
                      scale: isCenter ? 1.25 : 1 - absOffset * 0.1,
                      x: offset * 180,
                      zIndex: 10 - absOffset,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 150, 
                      damping: 25,
                      mass: 0.8
                    }}
                    className="absolute cursor-pointer group"
                    onClick={() => setActiveIdx(idx)}
                  >
                    <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 border border-white/10 ${isCenter ? 'w-[480px] h-[320px] shadow-[0_0_50px_rgba(30,58,138,0.3)]' : 'w-[350px] h-[240px]'}`}>
                      <img src={sector.image} alt={sector.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/30 to-transparent" />
                      
                      <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                        <h3 className={`font-extrabold text-white mb-4 font-sans ${isCenter ? 'text-2xl' : 'text-lg'}`}>
                          {sector.title}
                        </h3>
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-6 py-2 bg-[var(--primary)] text-white rounded-full text-sm font-bold flex items-center gap-2 mx-auto hover:bg-[var(--primary-dark)] transition-colors"
                          >
                            Explore Sector <ArrowRight className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Detailed Info Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-14 text-center">
              <h3 className="text-3xl font-bold text-white mb-6 font-sans">{activeSector.title}</h3>
              <p className="text-white/70 leading-relaxed text-lg font-sans max-w-4xl mx-auto">
                {activeSector.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {activeSector.stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-9 border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 group">
                  <p className="text-[10px] text-[var(--primary-light)] font-bold mb-4 uppercase tracking-[0.2em] font-sans">{stat.label}</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-white group-hover:text-[var(--primary-light)] transition-colors font-sans">{stat.value.split(' ')[0]}</span>
                    <span className="text-xl font-bold text-white/70 font-sans">{stat.value.split(' ').slice(1).join(' ')}</span>
                  </div>
                  <p className="text-sm text-white/50 leading-snug font-sans mb-6">{stat.subValue}</p>
                  {stat.year && (
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[10px] text-white/30 font-bold tracking-[0.2em] font-sans">{stat.year}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center pb-8">
              <Link 
                to={`/${displayLang}/sectors/${activeSector.id}`}
                className="px-12 py-4 md:py-5 bg-white/5 border border-white/20 text-white rounded-full font-bold font-sans flex items-center justify-center gap-3 hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all shadow-2xl group w-full sm:w-auto min-h-[44px]"
              >
                Explore Opportunities <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ml-2" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>

  );
};
