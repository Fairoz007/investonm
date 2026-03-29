import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const slides = [
    {
      title: t('hero.slide1.title'),
      image: "/images/hero-energy.jpg",
      description: t('hero.slide1.description')
    },
    {
      title: t('hero.slide2.title'),
      image: "/images/hero-engineers.jpg",
      description: t('hero.slide2.description')
    },
    {
      title: t('hero.slide3.title', "Innovation & Science"),
      image: "/images/hero-scientist.jpg",
      description: t('hero.slide3.description', "Advancing research and technology for a better tomorrow.")
    },
    {
      title: t('hero.slide4.title', "Industrial Excellence"),
      image: "/images/hero-manufacturing.jpg",
      description: t('hero.slide4.description', "Building the foundations of a strong and diversified economy.")
    }
  ];


  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://themexriver.com/wp/avista/wp-content/uploads/2025/11/h2-masking-img-bg.webp" 
          alt="" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop
          className="h-[85vh] lg:h-[90vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative h-full flex items-center px-4 md:px-20">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={slide.image} 
                      alt="" 
                      referrerPolicy="no-referrer" 
                      className="w-full h-full object-cover grayscale opacity-60" 
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-black/20" />
                  </div>
                  
                  <div className="relative z-10 max-w-[800px] mt-20">
                    <div className="overflow-hidden mb-8">
                        <motion.h2 
                        initial={{ y: '100%', opacity: 0 }}
                        animate={isActive ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight text-white mb-8"
                      >
                        {slide.title}
                      </motion.h2>
                    </div>

                    <motion.p 
                      initial={{ y: 30, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="flex flex-wrap gap-4 md:gap-6"
                    >
                      <Link to={`/${currentLang}/signin`} className="as-pr-btn-2 group scale-90 md:scale-100 origin-left">
                        <span className="icon">
                          <ArrowRight size={20} className={i18n.dir() === 'rtl' ? "transition-transform group-hover:rotate-[135deg] rotate-180" : "transition-transform group-hover:-rotate-45"} />
                        </span>
                        <span className="text">{t('hero.cta.startInvesting')}</span>
                      </Link>
                      <Link to={`/${currentLang}/key-sectors`} className="px-6 md:px-10 py-3 md:py-5 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-dark transition-all text-sm md:text-base">
                        {t('hero.cta.explore')}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-10 right-4 md:right-20 z-20 max-w-[280px] md:max-w-[342px] p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hidden lg:block rtl:right-auto rtl:left-4 md:rtl:left-20">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <iframe 
            src="https://www.youtube.com/embed/A24LlTZ0EvE?autoplay=1&mute=1&loop=1&playlist=A24LlTZ0EvE&controls=0&modestbranding=1&id=ytplayer&enablejsapi=1"
            title="Vision Video"
            className="w-full h-full object-cover scale-[1.5] pointer-events-none"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
        <div className="flex items-center justify-between text-white group cursor-default">
          <span className="text-lg md:text-xl font-display font-semibold group-hover:text-primary transition-colors">{t('hero.vision')}</span>
          <div className={i18n.dir() === 'rtl' ? "w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-white transition-all rotate-135 group-hover:rotate-180 flex-shrink-0" : "w-8 h-8 rounded-full bg-white flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-white transition-all -rotate-45 group-hover:rotate-0 flex-shrink-0"}>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}

