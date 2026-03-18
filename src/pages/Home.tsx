import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Globe2, Landmark, Building2, Laptop, ArrowRight, Anchor, Target, Briefcase } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { ThrivingSectors } from '@/components/sections/ThrivingSectors';
import { WhyOmanSection } from '@/components/sections/WhyOmanSection';
import { AboutCompanySection } from '@/components/sections/AboutCompanySection';
import { WorldMap } from '@/components/ui/world-map';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: "easeOut" } }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 80, filter: 'blur(8px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen text-slate-300 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[1001] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[85vh] md:h-[100vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 h-full w-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center h-[110%] w-[110%] -top-[5%] -left-[5%]"
            style={{ backgroundImage: 'url("/images/oman_hero.png")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f19]/90 via-[#0b0f19]/80 to-transparent opacity-90" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container-custom relative z-10 w-full mt-12 text-left">
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-4xl mr-auto">
            <h1 className="text-white text-balance text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              {t('home.text.1')}
            </h1>
            <h2 className="text-white/80 text-balance text-lg md:text-xl font-medium mb-8 leading-relaxed">
              {t('home.text.2')}
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-3xl mr-auto">
              {t('home.text.3')} </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start w-full">
              <Link to={`/${displayLang}/key-sectors`} className="btn-premium w-full sm:w-auto">
                {t('home.text.4')} <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to={`/${displayLang}/contact`} className="w-full sm:w-auto px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all min-h-[44px]">
                {t('home.text.5')} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY OMAN */}
      <WhyOmanSection />

      {/* ABOUT COMPANY */}
      <AboutCompanySection />

      {/* LEADERSHIP TEAM */}
      <LeadershipSection />

      {/* GLOBAL REACH AND CONNECTIVITY */}
      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="lg:w-[50%] w-full">
              <motion.h2 variants={slideLeft} className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Global Network & <span className="text-blue-500">Connectivity</span>
              </motion.h2>
              <motion.div className="w-20 h-1.5 bg-blue-600 rounded-full mb-10" />
              <motion.p variants={slideLeft} className="text-lg text-slate-400 mb-12 max-w-xl leading-relaxed">
                Positioned at the crossroads of East and West, Oman provides unparalleled access to fast-growing global markets. Start your investment journey here to scale everywhere.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={popIn} className="card-premium p-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Globe2 className="w-7 h-7 text-blue-500 group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-4xl text-white mb-2">2.5B+</h4>
                  <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">Global Consumers Access</p>
                </motion.div>
                <motion.div variants={popIn} className="card-premium p-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Anchor className="w-7 h-7 text-blue-500 group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-4xl text-white mb-2">80+</h4>
                  <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">Global Ports & Connectivity</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:w-[45%] w-full relative"
            >
              <div className="rounded-3xl overflow-hidden border border-[#374151] shadow-2xl relative bg-[#0b0f19] flex items-center justify-center p-6 aspect-square sm:aspect-auto">
                <WorldMap dots={[
                  {
                    start: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
                    end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                  },
                  {
                    start: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
                    end: { lat: -15.7975, lng: -47.8919 }, // Brasília
                  },
                  {
                    start: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
                    end: { lat: 51.5074, lng: -0.1278 }, // London
                  },
                  {
                    start: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
                    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  },
                  {
                    start: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
                    end: { lat: 39.9042, lng: 116.4074 }, // Beijing
                  },
                  {
                    start: { lat: 23.5859, lng: 58.4059 }, // Muscat, Oman
                    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                  },
                ]} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THRIVING SECTORS - CAROUSEL */}
      <ThrivingSectors />

      {/* VISION 2040 */}
      <section className="relative py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="lg:w-1/2">
              <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {t('home.text.11')} <span className="text-blue-500">2040</span>
              </motion.h2>
              <motion.div variants={slideLeft} className="text-xl text-slate-400 mb-12 space-y-6 leading-relaxed">
                <p> {t('home.text.12')} </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { text: 'home.vision.1', icon: TrendingUp },
                  { text: 'home.vision.2', icon: Building2 },
                  { text: 'home.vision.3', icon: Laptop },
                  { text: 'home.vision.4', icon: Globe2 }
                ].map((item, i) => (
                  <motion.div key={i} variants={slideLeft} className="flex items-center gap-4 p-6 card-premium group">
                    <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600 transition-colors">
                      <item.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
                    </div>
                    <span className="font-bold text-white text-sm">{t(item.text)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2 flex justify-center">
              <div className="relative group p-12 card-premium-alt border border-white/10 shadow-2xl backdrop-blur-xl rounded-[3rem]">
                 <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <img src="/images/Oman_Vision_2040_Logo.png" alt="Vision 2040" className="w-full max-w-sm opacity-90 relative z-10 brightness-0 invert" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INVESTOR SUPPORT */}
      <section className="py-16 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">
              {t('home.text.13')} </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
              {t('home.text.14')} </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, name: "home.support.title.1", desc: "home.support.desc.1" },
                { icon: Target, name: "home.support.title.2", desc: "home.support.desc.2" },
                { icon: Building2, name: "home.support.title.3", desc: "home.support.desc.3" },
                { icon: Landmark, name: "home.support.title.4", desc: "home.support.desc.4" },
              ].map((service, i) => (
                <motion.div key={i} variants={popIn} className="card-premium p-10 text-left group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{t(service.name)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(service.desc)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 md:mt-20">
              <Link to={`/${displayLang}/who-we-are`} className="btn-premium mx-auto uppercase text-xs tracking-[0.2em] w-full sm:w-fit">
                {t('home.text.15')} <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Research CTA section */}
      <ResearchDataCTA />
    </div>
  );
}
