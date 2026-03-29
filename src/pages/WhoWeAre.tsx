import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield, Lightbulb, TrendingUp, ChevronRight, Zap, Cpu, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function WhoWeAre() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const industries = [
    t('services.items.education'), t('services.items.renewableEnergy'), t('services.items.tourism'), t('services.items.ict'),
    t('services.items.manufacturing'), t('services.items.agriculture'), t('services.items.fisheries'), t('services.items.mining'),
    t('services.items.healthcare'), t('services.items.sport'), 'Real estate', 'Logistics'
  ];

  const values = [
    {
      icon: <Shield className="text-primary" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our investment activities and partnerships.'
    },
    {
      icon: <Lightbulb className="text-primary" />,
      title: 'Innovation',
      description: "We embrace forward-thinking strategies to drive Oman's economic transformation."
    },
    {
      icon: <TrendingUp className="text-primary" />,
      title: 'Excellence',
      description: 'We strive for superior performance and value creation in every sector we enter.'
    },
  ];

  const highlights = [
    {
      icon: <Zap size={24} className="text-primary" />,
      title: 'Energy Hub',
      description: 'Pioneering green hydrogen and renewable power.'
    },
    {
      icon: <Cpu size={24} className="text-primary" />,
      title: 'Tech Growth',
      description: 'Attracting global startups to Muscat.'
    }
  ];

  const stats = [
    { label: t('whoWeAre.stats.founded'), value: '2006' },
    { label: t('whoWeAre.stats.sectors'), value: '12+' },
    { label: t('whoWeAre.stats.portfolio'), value: 'Diverse' },
    { label: t('whoWeAre.stats.global'), value: 'Growing' },
  ];

  return (
    <div className="bg-transparent text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/oman_investment_hero_1774498622347.png"
            alt="Shomoukh International Investment"
            className="w-full h-full object-cover scale-110 opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark" />

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="as-subtitle-2 mb-8 border-primary/20 text-primary">{t('whoWeAre.heroSubtitle')}</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-[0.95] tracking-tight whitespace-pre-line">
                <span className="gradient-text">{t('whoWeAre.heroTitle')}</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0">
                {t('whoWeAre.heroDesc')}
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a href="#about" className="as-pr-btn-2 group">
                  <span className="icon">
                    <ArrowRight size={20} className="transition-transform group-hover:-rotate-45 rtl:group-hover:rotate-45" />
                  </span>
                  <span className="text">{t('whoWeAre.discoverMore')}</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="aspect-square w-full max-w-[500px] ml-auto rounded-[60px] overflow-hidden border border-white/10 p-4 bg-white/5 backdrop-blur-sm">
                <div className="w-full h-full rounded-[40px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop"
                    alt="Investment Strategy"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 sm:py-20 border-y border-white/5 bg-transparent">
        <div className="as-container-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-text-p1 uppercase tracking-widest font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section id="about" className="py-16 lg:py-24 bg-transparent">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 xl:gap-32 items-center">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="as-subtitle-2 border-primary/20 text-primary">{t('whoWeAre.aboutSubtitle')}</div>
                <h2 className="as-sec-title-2">{t('whoWeAre.aboutTitle')}</h2>
              </div>

              <div className="space-y-6 text-sm sm:text-base text-white/50 leading-relaxed font-light">
                <p>
                  {t('ourStory.intro1')}
                </p>
                <p>
                  {t('ourStory.intro2')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {['Strategic Gateway', 'Value Creation', 'Economic Growth', 'Global Network'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {industries.slice(0, 12).map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-all group backdrop-blur-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mb-2 sm:mb-3 group-hover:scale-150 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-white/60 group-hover:text-white transition-colors uppercase tracking-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - More stylized */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 lg:p-10 rounded-[40px] bg-dark-card border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} />
              </div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">{t('whoWeAre.mission.title')}</h3>
              <p className="text-lg text-white/50 leading-relaxed font-light">
                {t('whoWeAre.mission.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 lg:p-10 rounded-[40px] bg-dark-card border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye size={120} />
              </div>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">{t('whoWeAre.vision.title')}</h3>
              <p className="text-lg text-white/50 leading-relaxed font-light">
                {t('whoWeAre.vision.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-transparent">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="as-subtitle-2 border-primary/20 text-primary mb-6">Ethos</div>
            <h2 className="as-sec-title-2 mb-6">Our Core Values</h2>
            <p className="text-lg text-white/40">The fundamental principles that guide every decision we make and every partnership we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] border border-white/5 rounded-[32px] p-12 group hover:border-primary/50 transition-all duration-700 backdrop-blur-md"
              >
                <div className="w-16 h-16 mb-10 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-[360deg]">{v.icon}</div>
                <h4 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{v.title}</h4>
                <p className="text-white/40 leading-relaxed text-lg font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="bg-primary/90 backdrop-blur-xl p-6 md:p-10 lg:p-12 rounded-[60px] relative overflow-hidden text-dark">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-[100px] -mr-20 -mt-20" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">Investor Success & Transformation</h2>
                  <p className="text-lg font-medium opacity-80 max-w-md">How we're actively transforming the economic landscape through strategic vision.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {highlights.map((h, i) => (
                    <div key={i} className="space-y-6 bg-dark/5 p-8 rounded-3xl border border-dark/10">
                      <div className="w-14 h-14 bg-dark text-white rounded-2xl flex items-center justify-center">{h.icon}</div>
                      <div>
                        <h4 className="text-2xl font-bold font-display mb-3">{h.title}</h4>
                        <p className="text-base font-semibold opacity-70 leading-relaxed">{h.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden rotate-2 group-hover:rotate-0 transition-transform duration-1000">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                    alt="Success"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-dark/20 -m-4 rounded-[40px] pointer-events-none -rotate-2 group-hover:rotate-0 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chairman Showcase ─────────────────────────────────────── */}
      <section className="pb-20 sm:pb-28 lg:pb-32 pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* card container */}
            <div
              className="relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/[0.07]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 40px 100px -20px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              {/* top-right ambient glow inside card */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0 items-center">

                {/* ── Left: Image ──────────────────────────────── */}
                <div className="flex justify-center lg:justify-start p-8 sm:p-10 lg:p-12 xl:p-14">
                  <div className="relative">
                    {/* outer glow ring */}
                    <div className="absolute inset-0 rounded-[2rem] blur-[30px] bg-blue-500/15 scale-110 pointer-events-none" />
                    {/* image frame */}
                    <div
                      className="relative w-60 sm:w-72 lg:w-80 xl:w-[22rem] aspect-[4/5] rounded-[2rem] overflow-hidden"
                      style={{
                        boxShadow: '0 0 0 1.5px rgba(255,255,255,0.08), 0 30px 80px -10px rgba(0,0,0,0.7)',
                      }}
                    >
                      <img
                        src="/images/chairman.jpg"
                        alt="Chairman"
                        className="w-full h-full object-cover object-top"
                      />
                      {/* subtle gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                    {/* floating role badge */}
                    <div
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2.5 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      }}
                    >
                      <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                        {t('ourExperts.chairman.role', 'Chairman')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Right: Content ───────────────────────────── */}
                <div className="px-8 sm:px-10 lg:px-12 xl:px-14 pt-4 pb-10 sm:pb-12 lg:py-14 xl:py-16 space-y-7">

                  {/* message label */}
                  <div className="inline-flex items-center gap-2">
                    <div className="h-px w-5 bg-primary/50" />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/35 uppercase">
                      {t('ourExperts.chairman.messageTitle', "Chairman's Message")}
                    </span>
                  </div>

                  {/* name */}
                  <div>
                    <h2
                      className="font-bold leading-[1.1] tracking-tight text-white"
                      style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
                    >
                      The Honorable<br />
                      <span className="gradient-text">Sheikh Salim Hamood</span><br />
                      Said Al Hashmi
                    </h2>
                  </div>

                  {/* divider */}
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/[0.06]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                  </div>

                  {/* message */}
                  <div className="text-sm sm:text-base text-white/65 leading-[1.9] font-light space-y-4">
                    {t('ourExperts.chairman.message').split('\n\n').slice(0, 2).map((para: string, i: number) => (
                      <p key={i}>{para}</p>
                    ))}
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      style={{ overflow: 'hidden' }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-4"
                    >
                      {t('ourExperts.chairman.message').split('\n\n').slice(2).map((para: string, i: number) => (
                        <p key={i}>{para}</p>
                      ))}
                    </motion.div>

                    <div className="pt-4">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group inline-flex items-center gap-3 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300"
                        style={{
                          padding: '0.65rem 1.4rem',
                          background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1))',
                          border: '1px solid rgba(59,130,246,0.25)',
                          color: 'rgba(147,197,253,0.95)',
                          boxShadow: '0 0 20px -8px rgba(59,130,246,0.35)',
                        }}
                      >
                        <span>{isExpanded ? t('common.readLess', 'Read Less') : t('common.readMore', 'Read More')}</span>
                        <ChevronRight size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:rotate-12'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="text-center space-y-8 sm:space-y-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-[1.1]">
              Ready to Join Our <br />
              <span className="gradient-text italic">Success Story?</span>
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <Link to={`/${currentLang}/contact`} className="as-pr-btn-2 bg-white text-dark hover:bg-primary hover:text-white transition-all group">
                <span className="icon bg-dark text-white">
                  <ArrowRight size={20} />
                </span>
                <span className="text">Inquire Now</span>
              </Link>
              <Link to={`/${currentLang}/resources`} className="px-8 sm:px-12 py-5 rounded-full border border-white/10 hover:border-white/40 transition-all font-medium text-sm sm:text-base">
                Investor Resources
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      </section>
    </div>
  );
}

