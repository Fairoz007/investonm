import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const services = [
    { id: '01', title: t('services.items.healthcare'), slug: 'healthcare', image: 'https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=2070&auto=format&fit=crop' },
    { id: '02', title: t('services.items.tourism'), slug: 'tourism', image: 'https://images.unsplash.com/photo-1512100356956-c1227c3317bb?q=80&w=2070&auto=format&fit=crop' },
    { id: '03', title: t('services.items.ict'), slug: 'technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
    { id: '04', title: t('services.items.mining'), slug: 'mining', image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=2070&auto=format&fit=crop' },
    { id: '05', title: t('services.items.manufacturing'), slug: 'manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
    { id: '06', title: t('services.items.renewableEnergy'), slug: 'renewable-energy', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop' },
    { id: '07', title: t('services.items.agriculture'), slug: 'agriculture', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop' },
    { id: '08', title: t('services.items.fisheries'), slug: 'fisheries', image: 'https://images.unsplash.com/photo-1535813548-6601f694839a?q=80&w=2070&auto=format&fit=crop' },
    { id: '09', title: t('services.items.education'), slug: 'education', image: 'https://images.unsplash.com/photo-1523424296211-133ad7899538?q=80&w=2070&auto=format&fit=crop' },
    { id: '10', title: t('services.items.sport'), slug: 'sport', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop' },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="section-padding bg-background overflow-hidden relative" onMouseMove={handleMouseMove}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-12 mb-12">
          <div className="max-w-[800px]">
            <div className="text-primary font-bold tracking-widest text-xs uppercase mb-4">{t('services.labels.thriving')}</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight uppercase mb-6">
              {t('services.labels.incentives')}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
              {t('services.labels.description')}
            </p>
          </div>
          <div className="pb-8">
            <Link to={`/${currentLang}/key-sectors`} className="as-pr-btn-2 bg-dark-card hover:bg-primary transition-all">
              <span className="icon">
                <ArrowRight size={20} />
              </span>
              <span className="text">{t('services.labels.exploreAll')}</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <Link 
              key={service.id}
              to={`/${currentLang}/key-sectors#${service.slug}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex items-center gap-8 md:gap-12 py-6 lg:py-8 border-b border-white/5 transition-opacity duration-300 hover:opacity-100 opacity-40 relative z-10"
            >
              <span className="text-lg font-bold text-primary/50 group-hover:text-primary transition-colors">{service.id}</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500">
                {service.title}
              </h3>
            </Link>
          ))}

          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                style={{
                  position: 'fixed',
                  left: mousePos.x,
                  top: mousePos.y,
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
                className="w-[268px] h-[318px] rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 hidden lg:block"
              >
                <img 
                  src={services[hoveredIndex].image} 
                  alt="" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-1/2 left-[-50px] rtl:left-auto rtl:right-[-50px] -translate-y-1/2 text-[234px] font-bold text-white/5 pointer-events-none select-none hidden xl:block" style={{ writingMode: 'vertical-rl' }}>
        {t('nav.sectors').toUpperCase()}
      </div>
    </section>
  );
}
