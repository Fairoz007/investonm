import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Globe2, Landmark, ShieldCheck, Factory, Truck, MapPin, Zap, Building2, Laptop, ArrowRight, Anchor, Target, Briefcase } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useTranslation } from "react-i18next";

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
    <div className="bg-[#020b0d] min-h-screen text-white overflow-hidden font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00c2b5] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[100vh] flex items-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b0d] via-[#020b0d]/80 to-transparent opacity-90" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container-custom relative z-10 w-full mt-12">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              {t('home.text.1')} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]"> {t('home.text.2')} </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-3xl">
              {t('home.text.3')} </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to={`/${displayLang}/key-sectors`} className="px-8 py-4 bg-[#00c2b5] hover:bg-[#00a89d] text-[#111] rounded-full font-bold flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,194,181,0.2)]">
                {t('home.text.4')} <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link to={`/${displayLang}/contact`} className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full font-bold flex items-center gap-2 transition-all">
                {t('home.text.5')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY INVEST IN OMAN */}
      <section className="py-24 md:py-32 relative bg-[#020b0d]">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-center">
              {t('home.text.6')} <span className="text-[#00c2b5]"> {t('home.text.7')} </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "home.why.title.1", desc: "home.why.desc.1" },
                { icon: Globe2, title: "home.why.title.2", desc: "home.why.desc.2" },
                { icon: Anchor, title: "home.why.title.3", desc: "home.why.desc.3" },
                { icon: Building2, title: "home.why.title.4", desc: "home.why.desc.4" },
                { icon: Landmark, title: "home.why.title.5", desc: "home.why.desc.5" },
                { icon: Truck, title: "home.why.title.6", desc: "home.why.desc.6" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                  <div className="w-16 h-16 rounded-full bg-[#00c2b5]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-[#00c2b5]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t(item.title)}</h3>
                  <p className="text-white/60 leading-relaxed">{t(item.desc)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT OPPORTUNITIES */}
      <section className="py-24 md:py-32 bg-[#041416] border-t border-white/5">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex justify-between items-end mb-16 flex-wrap gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6"> {t('home.text.8')} </h2>
                <p className="text-lg text-white/70 max-w-2xl">
                  {t('home.text.9')} </p>
              </div>
              <Link to={`/${displayLang}/key-sectors`} className="px-6 py-3 border border-[#00c2b5] text-[#00c2b5] hover:bg-[#00c2b5] hover:text-[#111] rounded-full font-bold transition-all whitespace-nowrap">
                {t('home.text.10')} </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
              {[
                { icon: Zap, name: "home.sectors.energy" },
                { icon: MapPin, name: "home.sectors.tourism" },
                { icon: Truck, name: "home.sectors.logistics" },
                { icon: Factory, name: "home.sectors.manufacturing" },
                { icon: Laptop, name: "home.sectors.technology" },
                { icon: Building2, name: "home.sectors.realestate" },
              ].map((sector, i) => (
                <motion.div key={i} variants={popIn} whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.1)" }} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-colors group">
                  <sector.icon className="w-12 h-12 text-[#00c2b5] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg">{t(sector.name)}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION 2040 */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#020b0d] via-[#020b0d]/90 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="lg:w-1/2">
              <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold mb-8">
                {t('home.text.11')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]">2040</span>
              </motion.h2>
              <motion.div variants={slideLeft} className="text-xl text-white/80 mb-12 space-y-4 leading-relaxed">
                <p> {t('home.text.12')} </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { text: 'home.vision.1', icon: TrendingUp },
                  { text: 'home.vision.2', icon: Building2 },
                  { text: 'home.vision.3', icon: Laptop },
                  { text: 'home.vision.4', icon: Globe2 }
                ].map((item, i) => (
                  <motion.div key={i} variants={slideLeft} className="flex items-center gap-4 p-5 bg-white/5 border border-[#00c2b5]/20 rounded-2xl backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-[#00c2b5] flex-shrink-0" />
                    <span className="font-bold">{t(item.text)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2 flex justify-center">
              <img src="/images/Oman_Vision_2040_Logo.png" alt="Vision 2040" className="w-full max-w-sm invert opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INVESTOR SUPPORT */}
      <section className="py-24 md:py-32 bg-[#020b0d] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00c2b5] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">
              {t('home.text.13')} </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed">
              {t('home.text.14')} </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, name: "home.support.title.1", desc: "home.support.desc.1" },
                { icon: Target, name: "home.support.title.2", desc: "home.support.desc.2" },
                { icon: Building2, name: "home.support.title.3", desc: "home.support.desc.3" },
                { icon: Landmark, name: "home.support.title.4", desc: "home.support.desc.4" },
              ].map((service, i) => (
                <motion.div key={i} variants={popIn} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2rem] p-8 text-left hover:border-[#00c2b5]/50 transition-colors group">
                  <div className="w-16 h-16 rounded-2xl bg-[#00c2b5]/10 flex items-center justify-center mb-6 group-hover:bg-[#00c2b5] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(0,194,181,0.2)]">
                    <service.icon className="w-8 h-8 text-[#00c2b5] group-hover:text-[#111] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(service.name)}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{t(service.desc)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-20">
              <Link to={`/${displayLang}/who-we-are`} className="px-10 py-5 bg-[#00c2b5] hover:bg-[#00a89d] text-[#111] rounded-full font-bold inline-flex items-center gap-2 transition-transform duration-300 hover:scale-[1.05] shadow-[0_0_30px_rgba(0,194,181,0.2)]">
                {t('home.text.15')} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
