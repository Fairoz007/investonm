import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Linkedin, Mail, Quote, Sparkles, ShieldCheck, Globe, Zap, ArrowRight, Award, BookOpen, Binary, BarChart, Map, GraduationCap, Star, TrendingUp } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

const experts = [
  {
    id: 'chairman',
    name: 'The Honorable Sheikh Salim Hamood Said Al Hashmi',
    role: 'Chairman',
    image: 'https://ges.om/assets/img/chirman.png',
    messageTitle: "Chairman’s Message",
    content: `For centuries, the Sultanate of Oman has stood as a bridge between civilizations. From its shores, merchants, scholars, and travelers connected the great regions of Asia, Africa, Europe, and the Americas, shaping a legacy of openness, dialogue, and peaceful exchange.\n\nIt is within this enduring spirit that Shomoukh International Investment was founded. Our purpose has always been guided by the belief that investment should contribute not only to economic progress, but also to the development of vibrant communities and sustainable opportunities for future generations.\n\nToday, under the visionary leadership of His Majesty Sultan Haitham bin Tarik Al Said, the Sultanate continues to advance a forward-looking agenda that strengthens economic diversification, innovation, and global partnership. Oman occupies a unique position in the world—geographically, historically, and culturally. Located at the crossroads of global trade routes, the country continues to strengthen its role as a center for cooperation, investment, and responsible development.\n\nThrough our investments and strategic partnerships, we seek to support this national journey by developing ventures that foster innovation, strengthen industries, and contribute to long-term prosperity. We remain committed to building partnerships across borders and investing in opportunities that reflect the values of cooperation, progress, and shared prosperity.\n\nAs we look to the future, our ambition remains clear: to contribute to a world where opportunity is expanded, communities thrive, and Oman continues to stand as a place where cultures, ideas, and markets meet.`,
    isLeadership: true,
    tags: ['Global Strategy', 'Diplomacy', 'Economic Vision'],
    education: 'Visionary Statesman',
    impact: [
      { icon: Globe, label: 'Cross-Border', val: 'Global Trade' },
      { icon: ShieldCheck, label: 'Integrity', val: 'Legacy Built' },
      { icon: Star, label: 'Leadership', val: '20+ Years' }
    ]
  },
  {
    id: 'ceo',
    name: 'Sheikha Janat Salim Hamood Al Hashmi',
    role: 'Co-Founder – Chief Executive Officer',
    image: 'https://ges.om/assets/img/members/Jannat.jpg',
    messageTitle: "Message from the Chief Executive Officer",
    content: `Our ambition is to develop strategic investment platforms that contribute to long-term economic growth and sustainable development. Today, our investment activities span more than 10 strategic sectors, including education, energy, manufacturing, natural resources, and international markets.\n\nWorking with global partners and institutions, we continue to expand our investment footprint across regional and international markets, supporting ventures that strengthen innovation, economic diversification, and sustainable industries.\n\nUnder the visionary leadership of His Majesty Sultan Haitham bin Tarik Al Said and guided by the aspirations of Oman Vision 2040, Oman is emerging as a competitive destination for international investment.\n\nOur long-term ambition is to build investment platforms that connect global capital with high-impact opportunities, positioning Oman as a gateway to regional markets and a hub for responsible and future-focused investment.`,
    bio: `Sheikha Janat Al Hashmi is an Omani entrepreneur and strategic leader with experience spanning the energy, education, and investment sectors. She holds a Bachelor of Science in Geosciences with honors and a minor in Astronomy and Astrophysics from Pennsylvania State University. She began her professional career as a Geophysicist with Occidental Petroleum Corporation, where she developed expertise in energy exploration and resource management.\n\nAs Co-Founder and Chief Executive Officer of Shomoukh International Investment, she oversees strategic investment clusters across education, energy, manufacturing, mining and natural resources, international markets, and circular economy initiatives. Through these platforms, she leads ventures that support economic diversification, innovation, and sustainable development in alignment with Oman’s national priorities.`,
    isLeadership: true,
    tags: ['Energy Sector', 'Geosciences', 'Innovation'],
    education: 'Pennsylvania State University',
    impact: [
      { icon: Zap, label: 'Energy', val: 'Exploration' },
      { icon: BookOpen, label: 'Clusters', val: '10+ Sectors' },
      { icon: Award, label: 'Excellence', val: 'B.S. Honors' }
    ]
  },
  {
    id: 'vp',
    name: 'Sheikh Julanda Salim Hamood Al Hashmi',
    role: 'Co-Founder – Vice President',
    image: 'https://ges.om/assets/img/members/julanda.jpg',
    messageTitle: "Message from the Vice President",
    content: `Strategic investment plays a critical role in shaping the future of economies. At Shomoukh International Investment, we focus on developing partnerships that facilitate foreign direct investment and connect international capital with opportunities in the Sultanate of Oman. Our investment activities extend across multiple industries including energy, logistics, tourism, technology, manufacturing, agriculture, real estate, and private equity, supporting ventures designed to strengthen long-term economic diversification.\n\nThrough our global partnerships and investment platforms, we aim to expand access to regional and international markets, enabling investors to participate in emerging sectors and high-growth industries.\n\nOur objective is to contribute to the development of investment ecosystems that encourage innovation, sustainable growth, and long-term economic resilience.`,
    bio: `Sheikh Julanda bin Salim Hamood Al Hashmi is an Omani investor and public policy advisor engaged in strategic investment and national economic development.\nAs Co-Founder of Shomoukh International Investment he works with international partners, institutions, and investors to advance strategic ventures and facilitate foreign direct investment into the Sultanate of Oman.\n\nHe oversees several strategic investment clusters across sectors including energy, real estate, logistics, tourism, information technology, manufacturing, agriculture and fisheries, strategic private equity investments, and circular economy and sustainable ventures. Through these platforms, he supports initiatives that strengthen economic diversification, investment development, and long-term sustainable growth.\n\nSheikh Julanda holds a Bachelor’s degree in International Affairs from The George Washington University and a Master’s degree in Government and Public Policy from Harvard University.`,
    isLeadership: true,
    tags: ['Public Policy', 'Private Equity', 'Global Trade'],
    education: 'GWU & Harvard University',
    impact: [
      { icon: Binary, label: 'Policy', val: 'Advocate' },
      { icon: Map, label: 'FDI', val: 'Facilitator' },
      { icon: GraduationCap, label: 'Masters', val: 'Harvard' }
    ]
  },
  {
    id: 'md',
    name: 'Sheikha Jinan Salim Hamood Al Hashmi',
    role: 'Co-Founder – Manging Director',
    image: 'https://ges.om/assets/img/members/jinan.jpg',
    messageTitle: "Message from the Managing Director",
    content: `Our focus is to ensure that our investments generate meaningful long-term impact. Through our strategic investment platforms, we oversee initiatives designed to support sustainable development across sectors including energy, tourism, real estate, education, and responsible investment initiatives.\n\nOur approach emphasizes sustainable growth, innovation, and responsible capital deployment. By integrating sustainability principles across our investment strategy, we aim to support industries that contribute to economic development while creating lasting value for communities.\n\nAs Oman continues to strengthen its position within global markets under Oman Vision 2040, our goal is to support ventures that align with these national ambitions and expand the reach of Omani investment platforms into regional and international markets.`,
    bio: `Sheikha Jinan Salim Hamood Al Hashmi is an Omani education leader and entrepreneur dedicated to advancing international education and strategic investment initiatives. She is the Co-Founder of Shomoukh International Investment and plays an active role in guiding its long-term investment strategy. She holds a Bachelor of Arts with honors in International Development and a minor in Business Administration from The George Washington University’s Elliott School of International Affairs, as well as an MBA in Global Management.\n\nHer professional experience includes work with the Embassy of Oman in Washington, the Ministry of Foreign Affairs, and investment promotion initiatives supporting Oman’s Vision 2040. She oversees strategic investment clusters focused on sustainability across sectors including energy, tourism, real estate, and education, ensuring long-term impact and responsible development.`,
    isLeadership: true,
    tags: ['Sustainability', 'Education', 'Real Estate'],
    education: 'GWU & MBA Global Mgmt',
    impact: [
      { icon: TrendingUp, label: 'Impact', val: 'ESG Focused' },
      { icon: BookOpen, label: 'Education', val: 'Reform Leader' },
      { icon: BarChart, label: 'Strategy', val: 'MBA Global' }
    ]
  }
];

export default function OurExperts() {
  const [selectedExpert, setSelectedExpert] = useState<typeof experts[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24">
      <PageHeader 
        title="Visionary Leadership"
        subtitle="Our leadership team brings together decades of global expertise, strategic foresight, and an unwavering commitment to Oman's economic legacy."
        breadcrumb={[{ label: "Our Experts" }]}
      />

      <div className="container-custom relative z-10 pt-12">
        {/* Chairman's Featured Section */}
        <div className="mb-32">
          {experts.filter(e => e.id === 'chairman').map((chairman) => (
            <motion.div 
              key={chairman.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 relative overflow-hidden group"
            >
              {/* Chairman Photo Section */}
              <div className="lg:w-[35%] shrink-0 flex flex-col items-center">
                <div className="relative mb-8 w-full aspect-[4/5] max-w-[400px]">
                  <div className="absolute inset-6 bg-blue-500/10 rounded-3xl blur-2xl" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                    <img 
                      src={chairman.image} 
                      alt={chairman.name} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-white/[0.03] border border-white/10 hover:bg-blue-600 rounded-2xl transition-all">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="p-4 bg-white/[0.03] border border-white/10 hover:bg-blue-600 rounded-2xl transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Chairman Message Section */}
              <div className="lg:w-[65%] flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="w-12 h-[2px] bg-blue-500" />
                  <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">Strategic Governance</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
                  {chairman.messageTitle}
                </h2>
                
                <div className="relative pl-10 mb-12 border-l-2 border-blue-500/20">
                  <Quote className="absolute -left-4 -top-4 w-12 h-12 text-blue-500 opacity-10" />
                  <p className="text-[#94A3B8] text-xl italic leading-relaxed font-light">
                    {chairman.content.split('\n\n')[0]}
                  </p>
                </div>
                
                <button 
                  onClick={() => setSelectedExpert(chairman)}
                  className="btn-premium w-full sm:w-fit py-4 px-10 group"
                >
                  Read Full Perspective
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Pillars Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Global Perspective', desc: 'Bridging international capital with local high-impact opportunities.' },
              { icon: ShieldCheck, title: 'Institutional Trust', desc: 'Operating with transparency and excellence at every strategic level.' },
              { icon: Zap, title: 'Dynamic Innovation', desc: 'Pioneering future-focused sectors and circular economy initiatives.' }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 group hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                  <pillar.icon className="w-8 h-8 text-blue-400 group-hover:text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{pillar.title}</h4>
                <p className="text-[#94A3B8] leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board Header */}
        <div id="leadership-grid" className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 border-b border-white/5 pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-blue-500" />
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">Strategic Governance</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">The Board of Directors</h2>
            <p className="text-xl text-[#94A3B8] font-light">Guided by a legacy of trust and driven by a future-focused investment philosophy.</p>
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {experts.filter(e => e.id !== 'chairman').map((expert, idx) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 group cursor-pointer flex flex-col items-center text-center hover:bg-white/[0.04] transition-all duration-500"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="relative mb-10 w-56 h-56 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all duration-700">
                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Star className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{expert.name}</h3>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">{expert.role}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {expert.tags?.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full text-[10px] text-[#94A3B8] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-8 bg-white/[0.03] px-5 py-2 rounded-full border border-white/5">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span className="truncate max-w-[180px]">{expert.education}</span>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3.5 bg-white/[0.03] rounded-2xl hover:bg-blue-600 transition-all border border-white/10 group/btn">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="p-3.5 bg-white/[0.03] rounded-2xl hover:bg-blue-600 transition-all border border-white/10 group/btn">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Excellence CTA  */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-transparent border border-white/10 p-12 lg:p-24 text-center overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-16 h-16 text-blue-500 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">Strategic Advisory Inquiries</h2>
            <p className="text-xl text-[#94A3B8] mb-12 font-light leading-relaxed">Connect with our leadership team for institutional partnerships, strategic investments, and market entry consultation.</p>
            <button className="btn-premium px-12 py-5 text-lg group">
              Connect with Our Team
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {selectedExpert && (
          <Dialog open={!!selectedExpert} onOpenChange={(open) => !open && setSelectedExpert(null)}>
            <DialogContent className="max-w-6xl w-[95vw] lg:w-full p-0 border-none bg-transparent shadow-none">
              <div className="relative w-full h-full lg:h-[85vh] flex flex-col lg:flex-row bg-[#080B16] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedExpert(null)} 
                  className="absolute top-8 right-8 z-50 p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all group"
                >
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>

                {/* LEFT PANEL - Identity */}
                <div className="w-full lg:w-[40%] p-12 lg:p-20 flex flex-col items-center justify-center text-center relative shrink-0 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="relative mb-12">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-150 animate-pulse" />
                    <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full p-2 border-2 border-blue-500/30 overflow-hidden shadow-2xl">
                      <img 
                        src={selectedExpert.image} 
                        alt={selectedExpert.name} 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-[0.4em] font-black mb-8">
                      Executive Member
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                      {selectedExpert.name}
                    </h2>
                    <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[11px] mb-12">
                      {selectedExpert.role}
                    </p>
                    
                    <div className="flex gap-4 justify-center">
                      <a href="#" className="p-4 bg-white/[0.03] hover:bg-blue-600 rounded-2xl border border-white/10 transition-all text-white flex items-center gap-4 group/social">
                        <Linkedin className="w-6 h-6" />
                        <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT PANEL - Content */}
                <div className="w-full lg:w-[60%] p-12 lg:p-24 overflow-y-auto custom-scrollbar">
                  <div className="max-w-3xl mx-auto space-y-20">
                    {/* Message section */}
                    <div className="relative">
                      <Quote className="absolute -top-10 -left-10 w-24 h-24 text-blue-500/5" />
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12 leading-tight tracking-tight border-b border-white/5 pb-10">
                        {selectedExpert.messageTitle}
                      </h3>
                      
                      <div className="space-y-10 text-[#94A3B8] leading-relaxed text-xl font-light italic">
                        {selectedExpert.content.split('\n\n').map((p, i) => (
                          <p key={i} className={i === 0 ? "first-letter:text-6xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-4 first-letter:float-left first-letter:leading-none" : ""}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Strategic Impact Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-16 border-y border-white/5">
                      {selectedExpert.impact?.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl mb-6 flex items-center justify-center">
                            <item.icon className="w-7 h-7 text-blue-400" />
                          </div>
                          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">{item.label}</p>
                          <p className="text-xl font-bold text-white tracking-tight">{item.val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bio section */}
                    {selectedExpert.bio && (
                      <div className="space-y-10">
                        <div className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">
                          Executive Profile
                        </div>
                        
                        <div className="space-y-8 text-[#94A3B8] leading-relaxed text-lg font-light">
                          {selectedExpert.bio.split('\n\n').map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

