import { useState, useEffect } from 'react';
import { ArrowUpRight, HardHat, Beaker, Fish, Zap, Factory, Laptop, Trees, GraduationCap, Heart, Trophy, Palmtree, Recycle } from 'lucide-react';
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
 description:"Oman's healthcare sector stands as a cornerstone of the nation's socio-economic development, reflecting the government's commitment to providing high-quality medical services to its citizens and residents. Aligned with Oman Vision 2040, the sector emphasizes decentralization and international standards, aiming to enhance healthcare accessibility and quality across the Sultanate.",
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
 description:"Oman's tourism sector is a key driver of economic diversification, offering world-class experiences from luxury coastal resorts to ancient heritage sites. The Sultanate is positioning itself as a premier destination for high-end, sustainable tourism in the region.",
 stats: [
 { label: 'Visitors Revenue', value: '1.1 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
 { label: 'Employment', value: '192 k', subValue: 'Jobs in tourism', year: '2023' },
 { label: 'GDP Contribution', value: '7.6 %', subValue:"Of Oman's Total GDP", year: '2023' },
 { label: 'Total Investment', value: '2.8 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
 ]
 },
 {
 id: 'ict',
 title: 'ICT',
 icon: Laptop,
 image: '/images/oman_tech.png',
 description:"The Information and Communications Technology (ICT) sector is the backbone of Oman's digital transformation. With massive investments in 5G, data centers, and AI infrastructure, Oman is building an agile digital economy to compete globally.",
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
 description:"Oman's mining industry is a strategic pillar of Vision 2040, aiming to increase the sector's GDP contribution significantly. The country hosts world-class deposits of copper, gold, chromite, and industrial minerals like limestone and gypsum.",
 stats: [
 { label: 'Ranked', value: '5 th', subValue: 'globally in gypsum production', year: '2023' },
 { label: 'GDP Contribution', value: '629 m', subValue:"American Dollar (USD)", year: '2021' },
 { label: 'Exports', value: '202 bn', subValue: 'American Dollar (USD) Of Mineral products', year: '2023' },
 { label: 'Copper Reserves', value: '2.78 m', subValue: 'Tones Across major mines', year: '2023' },
 ]
 },
 {
 id: 'manufacturing',
 title: 'Manufacturing',
 icon: Factory,
 image: '/images/hero-manufacturing.jpg',
 description:"The manufacturing sector is a cornerstone of economic diversification, focusing on high-value industrial production and export. Oman's strategic industrial ports and free zones provide a competitive edge for global manufacturers.",
 stats: [
 { label: 'Ranked', value: '4 th', subValue: 'Regionally by UNIDO', year: '2023' },
 { label: 'Employment', value: '250 k', subValue: 'Active industrial jobs', year: '2023' },
 { label: 'GDP Contribution', value: '10 %', subValue:"National target", year: 'Vision' },
 { label: 'Total Revenue', value: '2.19 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
 ]
 },
 {
 id: 'renewable-energy',
 title: 'Renewable Energy',
 icon: Zap,
 image: '/images/hero-energy.jpg',
 description:"Oman is rapidly transitioning to a green economy by leveraging its vast solar and wind resources. As a global frontrunner in green hydrogen, the Sultanate offers a unique ecosystem for clean energy investments.",
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
 description:"Modern agriculture in Oman focuses on food security and sustainable farming practices. Leveraging technology like hydroponics and smart irrigation, the sector is increasing domestic production and export potential.",
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
 description:"Oman's petrochemical sector transforms hydrocarbon resources into high-value products. Mega-projects like Duqm Refinery drive value-added industrialization and global competitiveness.",
 stats: [
 { label: 'Export Revenue', value: '2 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
 { label: 'Employment', value: '60 k', subValue: 'Jobs', year: '2023' },
 { label: 'GDP Contribution', value: '11 %', subValue:"Total national GDP", year: '2023' },
 { label: 'Total Project Value', value: '4.5 bn', subValue: 'Riyal Omani (RO)', year: '2023' },
 ]
 },
 {
 id: 'circular-economy',
 title: 'Circular Economy',
 icon: Recycle,
 image: '/images/oman_industry.png',
 description:"Oman is pioneering circular economy practices to ensure sustainable development. This involves waste- projects, advanced recycling facilities, and sustainable resource management.",
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
 description:"Investing in human capital is a national priority. Oman's education sector is modernizing through private sector partnerships, research initiatives, and international institutional collaborations.",
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
 description:"Oman is developing a vibrant sports ecosystem, aiming to host international events and promote a healthy lifestyle. This includes investments in world-class stadiums, sports academies, and high-performance training centers.",
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
 description:"With a coastline over 3,000 km, Oman's fisheries sector is vital for food security and exports. Sustainable fishing and advanced aquaculture are the key pillars of growth.",
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
    <section className="py-20 overflow-hidden relative bg-[#050812] border-t border-white/5">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-[52px] font-bold text-white mb-5 leading-[1.1] font-sans tracking-tight">
              Thriving Sectors with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Exciting Incentives</span>
            </h2>
            <p className="text-lg text-[#A7B0C3] leading-relaxed max-w-2xl font-sans font-medium">
              Explore the vibrant investment opportunities in Oman, spanning essential sectors like technology, renewable energy, logistics, and manufacturing.
            </p>
          </div>
          <Link 
            to={`/${displayLang}/key-sectors`}
            className="group px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-semibold font-sans flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all w-full sm:w-auto min-h-[56px] whitespace-nowrap backdrop-blur-md"
          >
            Explore All Sectors <ArrowUpRight className="w-5 h-5 transition-transform ml-2 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Minimal Tab Navigation */}
        <div className="flex overflow-x-auto pb-6 gap-3 scrollbar-hide snap-x relative text-white">
          {SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 snap-start whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold transition-all border backdrop-blur-md flex items-center gap-2 ${
                  activeIdx === idx 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400/50 text-white shadow-[0_5px_15px_rgba(37,99,235,0.3)]' 
                    : 'bg-white/[0.03] text-[#A7B0C3] border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`h-4 w-4 ${activeIdx === idx ? 'opacity-100' : 'opacity-70'}`} />
                {sector.title}
              </button>
            );
          })}
        </div>

        {/* Detailed Info Section */}
        <div className="mt-8 bg-white/5 rounded-[32px] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row relative backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />
          
          {/* Image Side */}
          <div className="w-full lg:w-[45%] aspect-[4/3] lg:aspect-auto relative bg-[#0B1020] overflow-hidden group p-4 lg:p-6 lg:border-r border-white/5 flex-shrink-0">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
              <img 
                src={activeSector.image} 
                alt={activeSector.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/90 via-transparent to-transparent mix-blend-multiply border-b border-white/5 lg:border-none" />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
            </div>
          </div>
          
          {/* Content Side */}
          <div className="p-8 md:p-12 w-full lg:w-[55%] flex flex-col relative z-10">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B1020] border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <activeSector.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white font-sans tracking-tight leading-tight">{activeSector.title}</h3>
            </div>
            
            <p className="text-[#A7B0C3] leading-relaxed text-lg font-sans mb-12 max-w-2xl font-medium">
              {activeSector.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {activeSector.stats.slice(0, 4).map((stat, i) => (
                <div key={i} className="group relative">
                  <div className="absolute -inset-4 rounded-xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <p className="text-[11px] text-blue-400 font-bold mb-2 uppercase tracking-[0.2em] font-sans">{stat.label}</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[32px] font-black text-white font-sans drop-shadow-sm">{stat.value.split(' ')[0]}</span>
                      <span className="text-[16px] font-bold text-blue-400/80 font-sans">{stat.value.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <p className="text-[14px] text-[#A7B0C3] leading-snug font-sans font-medium">{stat.subValue}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <Link 
                to={`/${displayLang}/sectors/${activeSector.id}`}
                className="group inline-flex min-h-[52px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_10px_30px_rgba(37,99,235,0.3)] border border-blue-400/30 w-full sm:w-auto"
              >
                Explore Opportunities <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
