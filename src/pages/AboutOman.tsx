import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building, ShieldCheck, Globe, Banknote, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AboutOman() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const advantages = [
    { icon: <MapPin className="text-primary" />, title: t('trust.pillars.connectivity.title'), description: t('trust.pillars.connectivity.desc') },
    { icon: <Building className="text-primary" />, title: t('aboutOman.advantages.infrastructureTitle', 'Infrastructure Advantage'), description: t('aboutOman.advantages.infrastructureDesc', 'International airports, deep-water ports, and modern highway networks.') },
    { icon: <ShieldCheck className="text-primary" />, title: t('aboutOman.advantages.legislationTitle', 'Progressive Legislation'), description: t('aboutOman.advantages.legislationDesc', 'Simplified licensing and full foreign ownership in many sectors.') },
    { icon: <Globe className="text-primary" />, title: t('aboutOman.advantages.ecosystemTitle', 'Dynamic Ecosystem'), description: t('aboutOman.advantages.ecosystemDesc', 'Industrial zones, free zones, and technology hubs support business growth.') },
    { icon: <Banknote className="text-primary" />, title: t('trust.pillars.business.title'), description: t('trust.pillars.business.desc') },
    { icon: <Briefcase className="text-primary" />, title: t('aboutOman.advantages.visionTitle', 'Vision 2040'), description: t('aboutOman.advantages.visionDesc', 'National priorities focus on economic diversification and innovation.') },
  ];

  return (
    <div className="bg-transparent text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/oman_harbor_1.jpg" 
            alt="Muscat, Oman" 
            className="w-full h-full object-cover scale-105 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
        </div>
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="text-primary font-bold tracking-widest text-xs uppercase mb-6">{t('aboutOman.heroSubtitle')}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              <span className="gradient-text">{t('aboutOman.heroTitle')}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              {t('aboutOman.heroDesc')}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a href="#advantages" className="as-pr-btn-2 group">
                <span className="icon">
                  <ArrowRight size={20} className="transition-transform group-hover:-rotate-45 rtl:group-hover:rotate-45" />
                </span>
                <span className="text">{t('aboutOman.exploreAdvantages')}</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative mask */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent z-10" />
      </section>

      {/* Intro Stats */}
      <section className="py-12 lg:py-20 border-y border-white/5 bg-transparent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { label: t('aboutOman.stats.location'), value: '3 Continents' },
              { label: t('aboutOman.stats.vision'), value: '2040' },
              { label: t('aboutOman.stats.freeZones'), value: '3 Major' },
              { label: t('aboutOman.stats.market'), value: 'Global' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary text-4xl lg:text-5xl font-display font-bold mb-3">{stat.value}</div>
                <div className="text-sm text-text-p1 uppercase tracking-widest font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Grid */}
      <section id="advantages" className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              <span className="gradient-text">{t('aboutOman.whyInvest.title')}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{t('aboutOman.whyInvest.desc')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card-premium group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 group-hover:rotate-[15deg]">
                  {adv.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{adv.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg font-light">{adv.description}</p>
                
                {/* Decorative glow */}
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives Section - Premium Redesign */}
      <section className="py-12 lg:py-20">
        <div className="container-custom">
          <div className="bg-primary p-6 md:p-8 lg:p-10 rounded-3xl relative overflow-hidden text-primary-foreground shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-20 -mt-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    <span className="gradient-text">{t('aboutOman.incentives.title', 'Incentives for \n Future Success.')}</span>
                  </h2>
                  <p className="text-lg lg:text-xl font-medium opacity-80 max-w-md">{t('aboutOman.incentives.desc', 'Comprehensive benefits tailored to support international investors and strategic growth.')}</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    t('aboutOman.incentives.item1', 'Competitive Tax Environment with exemptions'),
                    t('aboutOman.incentives.item2', 'Strategic Free Zones (Duqm, Sohar, Salalah)'),
                    t('aboutOman.incentives.item3', '100% Foreign Ownership in many sectors'),
                    t('aboutOman.incentives.item4', 'FCIL protection for international capital'),
                    t('aboutOman.incentives.item5', 'World-class logistics and connectivity hub'),
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-dark/5 p-4 rounded-2xl border border-dark/10">
                      <div className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-lg font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="px-12 py-5 bg-dark text-white rounded-full font-display font-bold hover:scale-105 transition-all shadow-xl shadow-dark/20">
                  {t('aboutOman.incentives.button', 'Investor Prospectus')}
                </button>
              </div>
              
              <div className="relative group lg:mt-0 mt-12">
                <div className="aspect-[4/5] rounded-[48px] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-1000 border-8 border-dark/5">
                  <img 
                    src="/images/oman_investment_hub_modern_png_1774501821641.png" 
                    alt="Success" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Float Badge */}
                <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[32px] shadow-2xl z-20">
                   <div className="text-3xl font-display font-bold mb-1 tracking-tighter text-primary">{t('aboutOman.incentives.badgeValue', '100%')}</div>
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/60">{t('aboutOman.incentives.badgeLabel', 'Ownership Possibility')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Stat - Premium */}
      <section className="py-16 lg:py-24 bg-transparent">
        <div className="as-container-2">
          <div className="text-center max-w-3xl mx-auto mb-20 px-4">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">{t('aboutOman.connectivity.title', 'Unmatched Connectivity')}</h2>
             <p className="text-lg text-white/40 font-light">{t('aboutOman.connectivity.desc', "Oman serves as a primary hub for global trade, offering rapid access to the world\'s most populous regions.")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-16 bg-dark-card border border-white/5 rounded-[60px] text-center group"
            >
              <span className="text-9xl md:text-[140px] font-display font-black text-white/10 group-hover:text-primary/20 transition-colors mb-4 block leading-none">8H</span>
              <p className="text-2xl md:text-3xl font-display font-semibold text-white/80">{t('trust.pillars.connectivity.stat1')}</p>
              <div className="w-12 h-1 bg-primary/20 mx-auto mt-10 rounded-full" />
            </motion.div>
            
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-16 bg-dark-card border border-white/5 rounded-[60px] text-center group"
            >
              <span className="text-9xl md:text-[140px] font-display font-black text-white/10 group-hover:text-primary/20 transition-colors mb-4 block leading-none">105+</span>
              <p className="text-2xl md:text-3xl font-display font-semibold text-white/80">{t('trust.pillars.connectivity.stat2')}</p>
              <div className="w-12 h-1 bg-primary/20 mx-auto mt-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Call to Action */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-transparent">
        <div className="as-container-2 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-10 px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight whitespace-pre-line">
              {t('aboutOman.cta.title', 'Invest in your \n Global Future.')}
            </h2>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <Link to={`/${currentLang}/contact`} className="as-pr-btn-2 bg-white text-dark hover:bg-primary hover:text-white transition-all group px-14">
                <span className="icon bg-dark text-white">
                   <ArrowRight size={20} className="rtl:rotate-180" />
                </span>
                <span className="text text-xl">{t('aboutOman.cta.button', 'Start Your Journey')}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[200px] -z-10" />
      </section>
    </div>
  );
}
