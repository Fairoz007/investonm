import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, useSpring } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Linkedin, Mail, ExternalLink, Quote, Sparkles, ShieldCheck, Globe, Zap, ArrowRight, Award, BookOpen, Binary, BarChart, Map, GraduationCap, Star, TrendingUp } from 'lucide-react';

const experts = [
 {
 id: 'chairman',
 name: 'The Honorable Sheikh Salim Hamood Said Al Hashmi',
 role: 'Chairman',
 image: 'https://ges.om/assets/img/chirman.png',
 messageTitle:"Chairman’s Message",
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
 messageTitle:"Message from the Chief Executive Officer",
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
 messageTitle:"Message from the Vice President",
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
 messageTitle:"Message from the Managing Director",
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
 const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

 useEffect(() => {
 const handleMouse = (e: MouseEvent) => {
 setMousePos({ x: e.clientX, y: e.clientY });
 };
 window.addEventListener('mousemove', handleMouse);
 return () => window.removeEventListener('mousemove', handleMouse);
 }, []);

 const xParallax = useSpring((mousePos.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 50, { stiffness: 100, damping: 30 });
 const yParallax = useSpring((mousePos.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 50, { stiffness: 100, damping: 30 });

 return (
 <div className="min-h-screen pt-24 md:pt-40 pb-16 md:pb-32 relative overflow-hidden">
 {/* Decorative Parallax Shapes */}
 <motion.div 
 style={{ x: xParallax, y: yParallax }}
 className="absolute top-20 right-[10%] w-64 h-64 border border-blue-500/10 rounded-full pointer-events-none opacity-20"
 />
 <motion.div 
 style={{ x: useTransform(xParallax, (v) => -v * 1.5), y: useTransform(yParallax, (v) => -v * 1.5) }}
 className="absolute bottom-40 left-[5%] w-96 h-96 border border-blue-400/5 rounded-[4rem] rotate-12 pointer-events-none opacity-20"
 />

 <div className="container-custom relative z-10">
 {/* Hero Header Section */}
 <div className="flex flex-col items-center text-center mb-16 md:mb-32 max-w-4xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="flex items-center gap-3 mb-6"
>
 <div className="h-[1px] w-8 bg-blue-500" />
 <p className="text-blue-400 text-[11px] font-black tracking-[0.4em] uppercase">
 Shomoukh Intelligence
 </p>
 <div className="h-[1px] w-8 bg-blue-500" />
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
>
 Visionary <span className="text-blue-500 relative">
 Leadership
 <motion.div 
 initial={{ width: 0 }}
 animate={{ width: '100%' }}
 transition={{ delay: 1, duration: 1 }}
 className="absolute -bottom-2 left-0 h-1 bg-blue-500/30 rounded-full"
 />
 </span>
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="text-lg md:text-xl text-slate-400 max-w-2xl font-light"
>
 Our leadership team brings together decades of global expertise, strategic foresight, and an unwavering commitment to Oman's economic legacy.
 </motion.p>
 
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center"
>
 <button 
 onClick={() => {
 const element = document.getElementById('leadership-grid');
 element?.scrollIntoView({ behavior: 'smooth' });
 }}
 className="btn-premium px-8 w-full sm:w-auto"
>
 Meet the Board
 </button>
 <button 
 onClick={() => {
 const element = document.getElementById('contact-cta');
 element?.scrollIntoView({ behavior: 'smooth' });
 }}
 className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
>
 Investor Inquiry
 </button>
 </motion.div>
 </div>

 {/* Chairman's Featured Section */}
 <div className="mb-20">
 {experts.filter(e => e.id === 'chairman').map((chairman) => (
 <motion.div 
 key={chairman.id}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="bg-card border border-border rounded-lg shadow-sm p-8 lg:p-12 flex flex-col lg:row gap-12 relative overflow-hidden group"
>
 {/* Chairman Photo Section */}
 <div className="lg:w-[30%] flex flex-col items-center">
 <div className="relative mb-8 w-full aspect-square max-w-[300px]">
 <div className="absolute inset-4 bg-blue-500/10 rounded-2xl" />
 <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#374151]">
 <img 
 src={chairman.image} 
 alt={chairman.name} 
 className="w-full h-full object-cover transition-transform duration-[2s] group-" 
 />
 </div>
 </div>
 
 <div className="flex gap-4">
 <a href="#" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all">
 <Linkedin className="w-5 h-5 text-white" />
 </a>
 <a href="#" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all">
 <Mail className="w-5 h-5 text-white" />
 </a>
 </div>
 </div>

 {/* Chairman Message Section */}
 <div className="lg:w-[70%] flex flex-col justify-center">
 <div className="inline-flex items-center gap-2 mb-6">
 <span className="w-8 h-[2px] bg-blue-500" />
 <span className="text-blue-500 font-bold uppercase tracking-[0.25em] text-[10px]">Leadership Message</span>
 </div>
 
 <h2 className="text-3xl md:text-4xl font-bold mb-8">
 {chairman.messageTitle}
 </h2>
 
 <div className="relative pl-8 mb-12 border-l-2 border-blue-500/30">
 <Quote className="absolute -left-3 -top-2 w-6 h-6 text-blue-500 opacity-20" />
 <p className="text-slate-300 text-lg italic leading-relaxed">
 {chairman.content.split('\n\n')[0]}
 </p>
 </div>
 
 <button 
 onClick={() => setSelectedExpert(chairman)}
 className="btn-premium w-full sm:w-fit"
>
 Read Full Perspective
 <ArrowRight className="w-5 h-5 ml-2" />
 </button>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Strategic Pillars Section */}
 <div className="mb-40">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Pillars</h2>
 <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full" />
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {[
 { icon: Globe, title: 'Global Perspective', desc: 'Bridging international capital with local high-impact opportunities.' },
 { icon: ShieldCheck, title: 'Institutional Trust', desc: 'Operating with transparency and excellence at every strategic level.' },
 { icon: Zap, title: 'Dynamic Innovation', desc: 'Pioneering future-focused sectors and circular economy initiatives.' }
 ].map((pillar, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 transition={{ delay: i * 0.1 }}
 className="bg-card border border-border rounded-lg shadow-sm p-10 group"
>
 <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
 <pillar.icon className="w-7 h-7 text-blue-500 group-hover:text-white" />
 </div>
 <h4 className="text-xl font-bold mb-4">{pillar.title}</h4>
 <p className="text-slate-400 text-sm">{pillar.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>

 {/* leadership board Header */}
 <div id="leadership-grid" className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 pt-20">
 <div className="max-w-2xl">
 <div className="flex items-center gap-2 mb-4">
 <span className="w-10 h-[1px] bg-blue-500" />
 <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">Strategic Governance</span>
 </div>
 <h2 className="text-3xl md:text-5xl font-bold mb-4">The Board of Directors</h2>
 <p className="text-slate-400 text-lg">Guided by a legacy of trust and driven by a future-focused investment philosophy.</p>
 </div>
 <div className="h-[1px] flex-grow bg-white/5 mx-8 hidden lg:block" />
 </div>

 {/* Experts Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-40">
 {experts.filter(e => e.id !== 'chairman').map((expert, idx) => (
 <motion.div
 key={expert.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1, duration: 0.6 }}
 className="bg-card border border-border rounded-lg shadow-sm p-8 group cursor-pointer flex flex-col items-center text-center"
 onClick={() => setSelectedExpert(expert)}
>
 <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden border-4 border-[#374151] group-hover:border-blue-500/50 transition-all duration-500">
 <img src={expert.image} alt={expert.name} className="w-full h-full object-cover group-hover:translate-x-1 transition-transform duration-700" />
 <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
 <ExternalLink className="w-8 h-8 text-white" />
 </div>
 </div>

 <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{expert.name}</h3>
 <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4">{expert.role}</p>

 {/* Enhanced Info for Grid */}
 <div className="flex flex-wrap justify-center gap-2 mb-6">
 {expert.tags?.map((tag, i) => (
 <span key={i} className="px-2 py-0.5 bg-blue-500/5 border border-blue-500/10 rounded-md text-[9px] text-blue-300 uppercase tracking-tighter">
 {tag}
 </span>
 ))}
 </div>

 <div className="flex items-center gap-2 text-[10px] text-slate-500 mb-6 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">
 <GraduationCap className="w-3 h-3 text-blue-400" />
 <span className="truncate max-w-[150px]">{expert.education}</span>
 </div>
 
 <div className="flex gap-4">
 <div className="p-2.5 bg-slate-800/80 rounded-xl hover:bg-blue-600 transition-all border border-white/5"><Linkedin className="w-4 h-4 text-white" /></div>
 <div className="p-2.5 bg-slate-800/80 rounded-xl hover:bg-blue-600 transition-all border border-white/5"><Mail className="w-4 h-4 text-white" /></div>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Global Impact Highlights */}
 <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 className="bg-card border border-border rounded-lg shadow-sm p-12 border-blue-500/10"
>
 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
 <ShieldCheck className="w-8 h-8 text-blue-500" />
 Institutional Excellence
 </h3>
 <p className="text-slate-400 leading-relaxed">
 Our leadership maintains a rigorous focus on governance, ethics, and strategic alignment with national priorities. By combining local wisdom with global standards, we create an environment where institutional trust thrives.
 </p>
 </motion.div>
 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 className="bg-card border border-border rounded-lg shadow-sm p-12 border-blue-500/10"
>
 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
 <Globe className="w-8 h-8 text-blue-500" />
 Global Network
 </h3>
 <p className="text-slate-400 leading-relaxed">
 Operating at the nexus of international trade routes, our team leverages a vast network of institutional partners, allowing us to bridge capital and opportunity across four continents.
 </p>
 </motion.div>
 </div>

 {/* CTA Section */}
 <motion.div 
 id="contact-cta"
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="relative rounded-3xl bg-blue-900/10 border border-blue-500/10 p-12 lg:p-24 text-center overflow-hidden mb-32"
>
 <div className="absolute inset-0 pointer-events-none" />
 <div className="relative z-10 max-w-3xl mx-auto">
 <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-8 animate-pulse" />
 <h2 className="text-4xl md:text-5xl font-bold mb-8">Strategic Advisory Inquiries</h2>
 <p className="text-slate-400 text-lg mb-12">Connect with our leadership team for institutional partnerships, strategic investments, and market entry consultation.</p>
 <button className="btn-premium w-full sm:w-auto justify-center px-12 py-4 text-lg min-h-[44px]">
 Connect with Our Team
 <ArrowRight className="w-6 h-6 ml-2" />
 </button>
 </div>
 </motion.div>

 {/* Modal for Details */}
 <AnimatePresence>
 {selectedExpert && (
 <Dialog open={!!selectedExpert} onOpenChange={(open) => !open && setSelectedExpert(null)}>
 <DialogContent className="max-w-6xl w-[95vw] lg:w-full p-0 border-none bg-transparent shadow-none">
 <div className="relative w-full h-full lg:h-[80vh] flex flex-col lg:flex-row bg-background border border-border rounded-lg shadow-md overflow-hidden">
 {/* Close button */}
 <button 
 onClick={() => setSelectedExpert(null)} 
 className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all group"
>
 <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
 </button>

 {/* LEFT PANEL - Identity */}
 <div className="w-full lg:w-[45% p-12 flex flex-col items-center justify-center text-center relative shrink-0">
 <div className="relative mb-10">
 <div className="absolute inset-0 bg-blue-500/20 rounded-full scale-125" />
 <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full p-2 border-2 border-white/10 overflow-hidden">
 <img 
 src={selectedExpert.image} 
 alt={selectedExpert.name} 
 className="w-full h-full object-cover rounded-full" 
 />
 </div>
 </div>

 <div className="relative z-10">
 <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6">
 Executive Member
 </span>
 <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
 {selectedExpert.name}
 </h2>
 <p className="text-blue-300/70 font-bold uppercase tracking-widest text-xs mb-10">
 {selectedExpert.role}
 </p>
 
 <div className="flex gap-4 justify-center">
 <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all text-white flex items-center gap-3">
 <Linkedin className="w-5 h-5" />
 <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
 </a>
 <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all text-white flex items-center gap-3">
 <Mail className="w-5 h-5" />
 <span className="text-[10px] font-black uppercase tracking-widest">Contact</span>
 </a>
 </div>
 </div>
 </div>

 {/* RIGHT PANEL - Content */}
 <div className="w-full lg:w-[60%] bg-white p-12 lg:p-20 overflow-y-auto">
 <div className="max-w-3xl mx-auto space-y-16">
 {/* Message section with Editorial styling */}
 <div className="relative">
 <Quote className="absolute -top-6 -left-6 w-12 h-12 text-blue-500/10" />
 
 <h3 className="text-3xl lg:text-4xl font-bold text-[#0b0f19] mb-12 leading-tight tracking-tight">
 {selectedExpert.messageTitle}
 </h3>
 
 <div className="space-y-8 text-[#0b0f19]/80 leading-relaxed text-lg lg:text-xl font-light">
 {selectedExpert.content.split('\n\n').map((p, i) => (
 <p key={i} className={i === 0 ?"first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left first-letter:leading-none" :""}>
 {p}
 </p>
 ))}
 </div>
 </div>

 {/* Strategic Impact Stats */}
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-12 border-y border-slate-100">
 {selectedExpert.impact?.map((item, i) => (
 <div key={i} className="flex flex-col items-center text-center">
 <div className="p-3 bg-blue-50 rounded-2xl mb-4">
 <item.icon className="w-6 h-6 text-blue-600" />
 </div>
 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
 <p className="text-lg font-bold text-slate-900">{item.val}</p>
 </div>
 ))}
 </div>

 {/* Bio section */}
 {selectedExpert.bio && (
 <div className="pt-16">
 <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-[0.25em] mb-10">
 Executive Profile
 </div>
 
 <div className="space-y-6 text-[#0b0f19]/60 leading-relaxed text-base">
 {selectedExpert.bio.split('\n\n').map((p, i) => (
 <p key={i}>{p}</p>
 ))}
 </div>
 </div>
 )}

 {/* Signature / Footer */}
 <div className="pt-20 flex flex-col items-center justify-center text-center opacity-80">
 <div className="mb-4">
 <p className="text-4xl lg:text-5xl font-['Dancing_Script'] text-blue-900 leading-none">
 {selectedExpert.name.split(' ').slice(-3).join(' ')}
 </p>
 </div>
 <div className="w-32 h-[1px] bg-slate-200 mb-6" />
 <p className="text-[#0b0f19] font-bold text-lg mb-1">{selectedExpert.name}</p>
 <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">{selectedExpert.role}</p>
 </div>
 </div>
 </div>
 </div>
 </DialogContent>
 </Dialog>
 )}
 </AnimatePresence>
 </div>
 </div>
 );
}
