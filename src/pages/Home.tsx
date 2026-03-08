import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Search, ArrowRight, ArrowUpRight, TrendingUp, Globe2, Landmark, Zap, Building2, MapPin, CheckCircle2, Factory, FileText, Anchor, Laptop, Quote } from 'lucide-react';
import { useRef } from 'react';

// Reusable Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 80, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  // Hero Parallax & Fade
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  // Regions Parallax
  const regionsRef = useRef(null);
  const { scrollYProgress: regionsScroll } = useScroll({ target: regionsRef, offset: ["start end", "end start"] });
  const regionsBgY = useTransform(regionsScroll, [0, 1], ["-20%", "20%"]);

  // Footer Parallax for CTA
  const ctaRef = useRef(null);
  const { scrollYProgress: ctaScroll } = useScroll({ target: ctaRef, offset: ["start end", "end start"] });
  const ctaBgY = useTransform(ctaScroll, [0, 1], ["-20%", "20%"]);

  return (
    <div className="bg-[#020b0d] min-h-screen text-white overflow-hidden font-sans">

      {/* SCROLL PROGRESS INDICATOR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00c2b5] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* SECTION 1 — HERO LANDING */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b0d] via-[#020b0d]/70 to-transparent opacity-90" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="container-custom relative z-10 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Shomoukh International <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2b5] to-[#009288]">Investment</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-6 leading-relaxed max-w-2xl font-semibold">
              Investing in Vision. Building for Generations.
            </p>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-3xl">
              Shomoukh International Investment supports investors and businesses seeking to participate in Oman’s evolving economic landscape. Guided by Oman Vision 2040, the Sultanate is building a diversified, sustainable, and globally connected economy that welcomes innovation, partnership, and long-term investment.
            </p>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full mb-10 flex items-center max-w-xl hidden">
              <Search className="w-6 h-6 text-white/50 ml-4 hidden sm:block" />
              <input
                type="text"
                placeholder="I am looking for..."
                className="bg-transparent border-none text-white focus:outline-none focus:ring-0 w-full px-4"
              />
              <button className="bg-[#00c2b5] hover:bg-[#00a89d] transition-colors text-white px-6 py-3 rounded-full font-medium whitespace-nowrap">
                Search
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 bg-[#00c2b5] hover:bg-[#00a89d] text-white rounded-full font-medium flex items-center gap-2 transition-colors">
                Explore Opportunities <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full font-medium flex items-center gap-2 transition-colors">
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2 — INVESTMENT ADVANTAGES */}
      <section className="py-24 md:py-32 relative bg-[#020b0d]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Why Invest in <span className="text-[#00c2b5]">Oman?</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="text-center mb-16 max-w-4xl mx-auto text-white/80 space-y-6 text-lg">
              <p>Oman is one of the most promising investment destinations in the Middle East. With strong leadership, a stable economic environment, and a strategic location connecting global markets, Oman provides investors with a platform for sustainable growth.</p>
              <p>Under the leadership of His Majesty Sultan Haitham bin Tarik, Oman continues to implement Vision 2040, a national strategy focused on economic diversification, private sector growth, and global competitiveness.</p>
              <div className="pt-8 mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">A Land of Stability and Opportunity</h3>
                <p>Oman offers investors a unique combination of stability, opportunity, and long-term growth potential.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
              {[
                { icon: Building2, title: "World-Class Infrastructure", desc: "Advanced ports, airports, logistics hubs, and industrial zones." },
                { icon: TrendingUp, title: "Skilled Multilingual Workforce", desc: "Access to a talented workforce with strong technical capabilities." },
                { icon: Globe2, title: "Strategic Global Location", desc: "Direct access to international markets and global trade routes." },
                { icon: Zap, title: "Natural Resource Potential", desc: "Opportunities across energy, mining, tourism, and manufacturing." },
                { icon: Landmark, title: "High Quality of Life", desc: "Stable social environment and modern infrastructure." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-col items-center text-center"
                >
                  <item.icon className="w-10 h-10 text-[#00c2b5] mb-6" />
                  <h3 className="text-lg font-semibold leading-snug mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — KEY INVESTMENT SECTORS */}
      <section className="py-24 md:py-32 bg-[#041416] border-t border-white/5">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Oman as a Global Investment Destination
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-center text-white/80 max-w-4xl mx-auto mb-16 text-lg">
              Oman is rapidly emerging as a leading destination for international investment. The country’s commitment to economic diversification and investor-friendly policies creates a strong foundation for long-term growth. Vision 2040 focuses on expanding these key sectors:
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
              {[
                { icon: Anchor, name: "Logistics" },
                { icon: MapPin, name: "Tourism" },
                { icon: Zap, name: "Renewable Energy" },
                { icon: Factory, name: "Manufacturing" },
                { icon: Laptop, name: "Technology" },
              ].map((sector, i) => (
                <motion.div
                  key={i}
                  variants={popIn}
                  whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
                >
                  <sector.icon className="w-10 h-10 text-[#00c2b5] mb-4" />
                  <h3 className="font-medium text-base md:text-lg">{sector.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — REGIONS OF OMAN -> Your Partner in Oman's Prosperity */}
      <section ref={regionsRef} className="relative py-32 overflow-hidden border-t border-white/5">
        <motion.div
          className="absolute inset-0 z-0 h-[140%] w-full -top-[20%]"
          style={{
            backgroundImage: 'url("/images/oman_landscape.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: regionsBgY,
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#020b0d] via-[#020b0d]/80 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h2 variants={slideLeft} className="text-4xl md:text-6xl font-bold mb-8">
              Your Partner in <span className="text-[#00c2b5]">Oman’s Prosperity</span>
            </motion.h2>
            <motion.div variants={slideLeft} className="text-xl text-white/80 mb-12 space-y-4">
              <p>Shomoukh International Investment acts as a strategic partner for investors looking to explore opportunities within Oman’s growing economy.</p>
              <p>We provide guidance, support services, and investment facilitation designed to help investors successfully establish and grow their businesses.</p>
              <p>Our mission is to help investors unlock the full potential of Oman’s dynamic and forward-looking economy.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: Globe2, name: 'Strategic Gateway' },
                { icon: TrendingUp, name: 'Competitive Investment Environment' },
                { icon: Zap, name: 'Economic Diversification' },
                { icon: Building2, name: 'Cultural Diversity and Innovation' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={slideLeft}
                  className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-[#00c2b5] flex-shrink-0" />
                  <span className="font-medium">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — INVESTMENT OPPORTUNITIES -> Our Excellence Beyond Expectations */}
      <section className="py-24 md:py-32 bg-[#020b0d] border-t border-white/5">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our Excellence Beyond Expectations
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-center text-white/80 max-w-4xl mx-auto mb-16 text-lg">
              Shomoukh International Investment recognizes Oman as a land of opportunity and growth. We work closely with investors to identify opportunities, develop partnerships, and create successful ventures. Whether you are an experienced investor or entering the market for the first time, our team provides the expertise and guidance needed to navigate Oman’s business environment.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Identify Opportunities", img: "/images/oman_industry.png" },
                { title: "Develop Partnerships", img: "/images/oman_tech.png" },
                { title: "Create Successful Ventures", img: "/images/oman_hero.png" },
                { title: "Navigate Business Environment", img: "/images/oman_landscape.png" },
              ].map((opp, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${opp.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b0d] via-[#020b0d]/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                    <h3 className="text-2xl md:text-3xl font-bold">{opp.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#00c2b5] group-hover:border-[#00c2b5] transition-colors">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — DIGITAL E-SERVICES -> Comprehensive Support for Your Success */}
      <section className="py-24 md:py-32 bg-[#041416] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c2b5] rounded-full blur-[200px] opacity-10 pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">
              Comprehensive Support for Your Success
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-xl text-white/70 max-w-3xl mx-auto mb-16 space-y-4">
              <p>Our services are designed to simplify the investment process and help businesses succeed in Oman.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Landmark, name: "Investment guidance and advisory" },
                { icon: TrendingUp, name: "Market insights and analysis" },
                { icon: Building2, name: "Business establishment support" },
                { icon: Globe2, name: "Strategic partnership facilitation" },
                { icon: FileText, name: "Confidential investor services" },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={popIn}
                  className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00c2b5]/50 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00c2b5]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00c2b5] transition-all duration-300 transform group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-[#00c2b5] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeInUp} className="mt-16 text-lg text-white/80 max-w-3xl mx-auto">
              We also support Omani companies seeking to expand into global export markets and international partnerships.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — SUCCESS STORIES -> Your Trusted Investment Partner */}
      <section className="py-24 md:py-32 bg-[#020b0d] border-t border-white/5 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8">
                Your Trusted <span className="text-[#00c2b5]">Investment Partner</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="text-xl text-white/70 mb-10 space-y-4">
                <p>At Shomoukh International Investment, we are committed to building long-term relationships with investors and businesses.</p>
                <p>Through collaboration, expertise, and strong partnerships, we help investors transform their ambitions into successful ventures.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-[#00c2b5]/20" />
                <p className="text-lg italic text-white/90 relative z-10 mb-6 mt-4">
                  "Our team works closely with both local and international partners to identify opportunities and provide tailored solutions that meet unique business needs."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00c2b5]/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#00c2b5]" />
                  </div>
                  <div>
                    <h4 className="font-bold">Shomoukh Team</h4>
                    <p className="text-sm text-white/60">Investment Experts</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="lg:w-1/2 w-full grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((item, i) => (
                <motion.div
                  key={i}
                  variants={slideLeft}
                  className="bg-white/5 border border-white/10 aspect-video rounded-2xl flex items-center justify-center p-6"
                >
                  <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/30 font-bold text-xl">PARTNER {item}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CALL TO ACTION */}
      <section ref={ctaRef} className="relative py-32 overflow-hidden border-t border-white/5">
        <motion.div
          className="absolute inset-0 z-0 h-[140%] w-full -top-[20%]"
          style={{
            backgroundImage: 'url("/images/oman_industry.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: ctaBgY,
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#00c2b5]/20 to-[#020b0d] mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-[#020b0d]/80" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8">
              Build Your Future in <span className="text-[#00c2b5]">Oman</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="text-xl text-white/80 max-w-3xl mx-auto space-y-4 mb-12">
              <p>Join us in shaping the future of investment and innovation in Oman.</p>
              <p>With the vision of Oman Vision 2040, the country continues to expand opportunities for businesses, entrepreneurs, and investors from around the world.</p>
              <p>Together, we can build sustainable growth, create new opportunities, and contribute to the future of Oman’s economy.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 mb-12 p-8 bg-white/5 border border-[#00c2b5]/30 rounded-2xl inline-block text-left backdrop-blur-md w-full max-w-md">
              <h3 className="text-2xl font-bold mb-6 text-[#00c2b5] flex items-center gap-2">
                <MapPin className="w-6 h-6" /> Contact Information
              </h3>
              <div className="space-y-2 text-white/90">
                <p className="font-bold text-lg">Shomoukh International Investment LLC</p>
                <p>Postal Office Box: 1756</p>
                <p>Postal Code: 111</p>
                <p>Airport Heights, Muscat</p>
                <p>Sultanate of Oman</p>
                <p className="pt-4 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-[#00c2b5]" />
                  Email: <a href="mailto:info@shomoukh.om" className="text-[#00c2b5] hover:underline font-medium">info@shomoukh.om</a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-6">
              <button className="px-8 py-4 bg-[#00c2b5] hover:bg-[#00a89d] text-white rounded-full font-bold flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,194,181,0.3)]">
                Contact Investment Experts <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
