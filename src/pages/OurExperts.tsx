import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

interface Expert {
  name: string;
  role: string;
  image: string;
  messageTitle?: string;
  message: string;
  bio?: string;
}

export default function OurExperts() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  const chairman: Expert = {
    name: t('ourExperts.chairman.name', 'Sheikh Salim Hamood Said Al Hashmi'),
    role: t('ourExperts.chairman.role', 'CHAIRMAN'),
    image: 'https://ges.om/assets/img/chirman.png',
    messageTitle: t('ourExperts.chairman.messageTitle', "Chairman's Message"),
    message: t('ourExperts.chairman.message'),
  };

  const leaders: Expert[] = [
    {
      name: t('ourExperts.ceo.name', 'Sheikha Janat Salim Hamood Al Hashmi'),
      role: t('ourExperts.ceo.role', 'CO-FOUNDER – CHIEF EXECUTIVE OFFICER'),
      image: 'https://ges.om/assets/img/members/Jannat.jpg',
      messageTitle: t('ourExperts.ceo.messageTitle', 'Message from the Chief Executive Officer'),
      message: t('ourExperts.ceo.message'),
      bio: t('ourExperts.ceo.bio')
    },
    {
      name: t('ourExperts.vp.name', 'Sheikh Julanda Salim Hamood Al Hashmi'),
      role: t('ourExperts.vp.role', 'CO-FOUNDER – VICE PRESIDENT'),
      image: 'https://ges.om/assets/img/members/julanda.jpg',
      messageTitle: t('ourExperts.vp.messageTitle', 'Message from the Vice President'),
      message: t('ourExperts.vp.message'),
      bio: t('ourExperts.vp.bio'),
    },
    {
      name: t('ourExperts.md.name', 'Sheikha Jinan Salim Hamood Al Hashmi'),
      role: t('ourExperts.md.role', 'CO-FOUNDER – MANAGING DIRECTOR'),
      image: 'https://ges.om/assets/img/members/jinan.jpg',
      messageTitle: t('ourExperts.md.messageTitle', 'Message from the Managing Director'),
      message: t('ourExperts.md.message'),
      bio: t('ourExperts.md.bio'),
    },
  ];

  const allExperts: Expert[] = [chairman, ...leaders];

  // Effect to handle scroll when modal opens
  React.useEffect(() => {
    if (selectedExpert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedExpert]);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl">
            <div className="as-subtitle-2">{t('ourExperts.heroSubtitle')}</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 sm:mb-6 leading-[0.95] tracking-tight">
              <span className="gradient-text">{t('ourExperts.heroTitle')}</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8">
              {t('ourExperts.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Experts List - Alternating Layout */}
      <section className="pb-10 sm:pb-12 lg:pb-16 pt-0">
        <div className="container-custom">
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {allExperts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-6 sm:gap-8 lg:gap-16 items-center`}
              >
                {/* Image side */}
                <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto lg:mx-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl group cursor-pointer"
                    onClick={() => setSelectedExpert(expert)}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </motion.div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-display font-bold leading-tight">
                      <span className="gradient-text">{expert.name}</span>
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <p className="text-sm sm:text-base lg:text-lg font-bold tracking-widest text-primary uppercase">
                        {expert.role}
                      </p>
                      <div className="w-16 h-1 bg-primary/50 rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm lg:text-base text-white/80 leading-relaxed">
                    {(expert.bio || expert.message).split('\n\n').slice(0, 2).map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                    <button
                      onClick={() => setSelectedExpert(expert)}
                      className="flex items-center gap-2 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm pt-4 group touch-target"
                    >
                      <span className="gradient-text">{t('common.readMore', 'Read More')}</span>
                      <ChevronRight size={18} className="text-primary group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedExpert && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExpert(null)}
              className="absolute inset-0 bg-background/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full sm:max-w-4xl bg-card/95 border border-white/10 rounded-t-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl flex flex-col backdrop-blur-xl max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 sm:p-8 border-b border-white/5">
                <div className="space-y-1 pr-4">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight">
                    <span className="gradient-text">{selectedExpert.name}</span>
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-[0.2em]">{selectedExpert.role}</p>
                </div>
                <button
                  onClick={() => setSelectedExpert(null)}
                  className="p-3 hover:bg-white/10 rounded-full transition-colors group flex-shrink-0 touch-target"
                >
                  <X className="w-6 h-6 text-white/50 group-hover:text-white" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 sm:gap-12">
                  {/* Small Profile Image */}
                  <div className="w-full md:w-1/3 shrink-0">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl max-w-[240px] mx-auto md:max-w-none md:mx-0">
                      <img
                        src={selectedExpert.image}
                        alt={selectedExpert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-6 sm:space-y-8">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed space-y-4 sm:space-y-6">
                        {((selectedExpert.bio || selectedExpert.message) || '').split('\n\n').map((para, idx) => (
                          <p key={idx} className="relative">
                            {idx === 0 && <Quote className="absolute -left-6 sm:-left-10 -top-4 w-6 sm:w-8 h-6 sm:h-8 text-primary/20" />}
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
