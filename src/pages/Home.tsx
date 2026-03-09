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
    <div className="bg-[#F5F5F5] min-h-screen text-[#222222] overflow-hidden font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#8A6BCB] z-[1001] origin-left"
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
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="container-custom relative z-10 w-full mt-12">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-4xl">
            <h1 className="text-mobile-h1 mb-6 text-white text-balance">
              {t('home.text.1')} <br className="hidden md:block" />
              <span className="text-white/90"> {t('home.text.2')} </span>
            </h1>
            <p className="text-mobile-body text-white/90 mb-10 leading-relaxed max-w-3xl">
              {t('home.text.3')} </p>

            <div className="btn-mobile-stack">
              <Link to={`/${displayLang}/key-sectors`} className="btn-full-mobile px-8 py-4 bg-[#8A6BCB] hover:bg-[#7A5BC0] text-white rounded-full font-bold flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-lg">
                {t('home.text.4')} <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link to={`/${displayLang}/contact`} className="btn-full-mobile px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md rounded-full font-bold text-white flex items-center gap-2 transition-all">
                {t('home.text.5')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION DIVIDER GRADIENT */}
      <div className="h-4 divider-gradient w-full" />

      {/* WHY INVEST IN OMAN */}
      <section className="py-24 md:py-32 relative bg-[#F5F5F5] text-[#222222]">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-mobile-h2 mb-10 md:mb-16 text-center text-balance px-4">
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
                <motion.div key={i} variants={fadeInUp} className="bg-white border border-[#4F3C8C]/10 rounded-3xl p-8 hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 rounded-full bg-[#8A6BCB]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-[#8A6BCB]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#222222]">{t(item.title)}</h3>
                  <p className="text-[#666666] leading-relaxed">{t(item.desc)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT OPPORTUNITIES */}
      <section className="py-24 md:py-32 bg-white border-t border-[#4F3C8C]/5 text-[#222222]">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex justify-between items-end mb-16 flex-wrap gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#222222]"> {t('home.text.8')} </h2>
                <p className="text-lg text-[#666666] max-w-2xl">
                  {t('home.text.9')} </p>
              </div>
              <Link to={`/${displayLang}/key-sectors`} className="px-6 py-3 border border-[#8A6BCB] text-[#8A6BCB] hover:bg-[#8A6BCB] hover:text-white rounded-full font-bold transition-all whitespace-nowrap">
                {t('home.text.10')} </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { icon: Zap, name: "home.sectors.energy" },
                { icon: MapPin, name: "home.sectors.tourism" },
                { icon: Truck, name: "home.sectors.logistics" },
                { icon: Factory, name: "home.sectors.manufacturing" },
                { icon: Laptop, name: "home.sectors.technology" },
                { icon: Building2, name: "home.sectors.realestate" },
              ].map((sector, i) => (
                <motion.div key={i} variants={popIn} whileHover={{ y: -8, backgroundColor: "#F9F9F9" }} className="bg-white border border-[#4F3C8C]/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all shadow-sm group">
                  <sector.icon className="w-10 h-10 md:w-12 md:h-12 text-[#8A6BCB] mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-base md:text-lg text-[#222222]">{t(sector.name)}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION 2040 */}
      <section className="relative py-32 overflow-hidden border-t border-[#4F3C8C]/10 bg-[#F5F5F5] text-[#222222]">
        <div className="absolute inset-0 z-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 z-0 bg-white/40" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer} className="lg:w-1/2">
              <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold mb-8 text-[#222222]">
                {t('home.text.11')} <span className="text-[#8A6BCB]">2040</span>
              </motion.h2>
              <motion.div variants={slideLeft} className="text-xl text-[#666666] mb-12 space-y-4 leading-relaxed">
                <p> {t('home.text.12')} </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { text: 'home.vision.1', icon: TrendingUp },
                  { text: 'home.vision.2', icon: Building2 },
                  { text: 'home.vision.3', icon: Laptop },
                  { text: 'home.vision.4', icon: Globe2 }
                ].map((item, i) => (
                  <motion.div key={i} variants={slideLeft} className="flex items-center gap-4 p-5 bg-white border border-[#8A6BCB]/20 rounded-2xl shadow-sm">
                    <item.icon className="w-8 h-8 text-[#8A6BCB] flex-shrink-0" />
                    <span className="font-bold text-[#222222]">{t(item.text)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2 flex justify-center">
              <img src="/images/Oman_Vision_2040_Logo.png" alt="Vision 2040" className="w-full max-w-sm opacity-90" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INVESTOR SUPPORT */}
      <section className="py-24 md:py-32 bg-[#F5F5F5] border-t border-[#4F3C8C]/5 relative overflow-hidden text-[#222222]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8A6BCB] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-[#222222]">
              {t('home.text.13')} </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#666666] max-w-3xl mx-auto mb-16 leading-relaxed">
              {t('home.text.14')} </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, name: "home.support.title.1", desc: "home.support.desc.1" },
                { icon: Target, name: "home.support.title.2", desc: "home.support.desc.2" },
                { icon: Building2, name: "home.support.title.3", desc: "home.support.desc.3" },
                { icon: Landmark, name: "home.support.title.4", desc: "home.support.desc.4" },
              ].map((service, i) => (
                <motion.div key={i} variants={popIn} className="bg-white border border-[#4F3C8C]/10 rounded-[2rem] p-8 text-left hover:border-[#8A6BCB]/50 hover:shadow-lg transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-[#8A6BCB]/10 flex items-center justify-center mb-6 group-hover:bg-[#8A6BCB] transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(138,107,203,0.2)]">
                    <service.icon className="w-8 h-8 text-[#8A6BCB] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#222222]">{t(service.name)}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{t(service.desc)}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-20">
              <Link to={`/${displayLang}/who-we-are`} className="px-10 py-5 bg-[#8A6BCB] hover:bg-[#7A5BC0] text-white rounded-full font-bold inline-flex items-center gap-2 transition-transform duration-300 hover:scale-[1.05] shadow-lg">
                {t('home.text.15')} <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
