import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Globe2, 
  History, 
  Target, 
  Users2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';

export default function LearnOurStory() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const milestones = [
    { year: '2006', title: 'The Vision Established', desc: 'Shomoukh International Investment was founded by the Al Hashmi family in Muscat.' },
    { year: '2012', title: 'Expanding Sectors', desc: 'Diversified into renewable energy and technology initiatives across Oman.' },
    { year: '2018', title: 'Global Gateway', desc: 'Successfully connected major international institutions with Oman Vision 2040 opportunities.' },
    { year: '2024', title: 'Shaping the Future', desc: 'Integrating sustainable ventures and circular economy models into our core portfolio.' },
  ];

  return (
    <div className="bg-dark text-white">
      {/* Story Hero */}
      <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex flex-col justify-center relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="as-subtitle-2 mb-8 border-primary/20 text-primary uppercase tracking-widest">{t('ourStory.subtitle')}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight whitespace-pre-line">
                Legacy of <br />
                <span className="gradient-text italic">Innovation.</span>
              </h1>
              <div className="space-y-6 text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed font-light">
                <p>
                  {t('ourStory.intro1')}
                </p>
                <p>
                  {t('ourStory.intro2')}
                </p>
              </div>
              
              <div className="flex gap-8 mt-10 py-6 border-t border-white/5">
                <div className="space-y-2">
                  <div className="text-3xl font-display font-bold">18+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="space-y-2">
                  <div className="text-3xl font-display font-bold">12+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Strategic Sectors</div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-1000 border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Muscat Architecture" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                />
              </div>
              {/* Background blur */}
              <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 group-hover:bg-primary/20 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-20">
        {/* Timeline */}
        <section className="py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto mb-20 px-4">
             <div className="as-subtitle-2 border-primary/20 text-primary mb-6">{t('common.milestones', 'Milestones')}</div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">Guided by History</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-dark-card border border-white/5 rounded-[40px] hover:border-primary/40 transition-all group relative overflow-hidden"
              >
                <div className="text-primary text-4xl font-display font-black mb-8 group-hover:scale-125 transition-transform origin-left">{m.year}</div>
                <h3 className="text-2xl font-display font-bold mb-4 uppercase leading-tight">{m.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{m.desc}</p>
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Award size={80} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy - Premium Section */}
        <div className="my-16 lg:my-24 p-6 md:p-10 lg:p-12 bg-dark-card border border-white/5 rounded-[60px] relative overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight">Investment <br /> Philosophy.</h2>
                    <p className="text-xl text-white/50 font-light italic">
                      "We believe in creating enduring values that transcend transactional success, ensuring every project contributes to the progressive vision of our nation."
                    </p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                       { icon: <ShieldCheck className="text-primary" />, title: 'Ethical Growth' },
                       { icon: <TrendingUp className="text-primary" />, title: 'Long-term Value' },
                       { icon: <Users2 className="text-primary" />, title: 'Human Capital' },
                       { icon: <Target className="text-primary" />, title: 'Vision Alignment' },
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">{item.icon}</div>
                          <span className="font-display font-bold uppercase tracking-widest text-xs">{item.title}</span>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="hidden lg:block relative">
                 <div className="aspect-square bg-white shadow-2xl rounded-[40px] p-2 rotate-3 overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop" 
                       className="w-full h-full object-cover rounded-[32px] grayscale"
                       alt="Oman Heritage"
                    />
                 </div>
              </div>
           </div>
        </div>

        {/* Global Network */}
        <div className="text-center py-20 px-4">
           <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-10 leading-tight">A Member of the <br /> <span className="gradient-text">Global Elite.</span></h2>
           <Link to={`/${currentLang}/contact`} className="as-pr-btn-2 bg-white text-dark hover:bg-primary hover:text-white transition-all inline-block group">
              <span className="text text-xl">Join the Network</span>
              <span className="icon">
                 <ArrowRight />
              </span>
           </Link>
        </div>
      </div>
    </div>
  );
}
