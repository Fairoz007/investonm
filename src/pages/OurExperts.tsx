import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, BookOpen, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface Expert {
  name: string;
  role: string;
  image: string;
  messageTitle?: string;
  message: string;
  bio?: string;
  isChairman?: boolean;
}

export default function OurExperts() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';
  
  // State for expanded messages (inline)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // State for biography modal
  const [selectedBioExpert, setSelectedBioExpert] = useState<Expert | null>(null);

  const chairman: Expert = {
    name: t('ourExperts.chairman.name', 'The Honorable Sheikh Salim Hamood Said Al Hashmi'),
    role: t('ourExperts.chairman.role', 'CHAIRMAN'),
    image: '/images/chairman.jpg',
    messageTitle: t('ourExperts.chairman.messageTitle', "Chairman's Message"),
    message: t('ourExperts.chairman.message'),
    isChairman: true,
  };

  const leaders: Expert[] = [
    {
      name: t('ourExperts.ceo.name', 'Sheikha Janat Salim Hamood Al Hashmi'),
      role: t('ourExperts.ceo.role', 'CO-FOUNDER – CHIEF EXECUTIVE OFFICER'),
      image: 'https://ges.om/assets/img/members/Jannat.jpg',
      messageTitle: t('ourExperts.ceo.messageTitle', 'Message from the Chief Executive Officer'),
      message: t('ourExperts.ceo.message'),
      bio: t('ourExperts.ceo.bio'),
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

  const toggleExpand = (i: number) =>
    setExpandedIndex(prev => (prev === i ? null : i));

  // Handle modal scroll lock
  React.useEffect(() => {
    if (selectedBioExpert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedBioExpert]);

  return (
    <div className="bg-transparent text-foreground">
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

      {/* Experts List */}
      <section className="pb-16 lg:pb-24 pt-0">
        <div className="container-custom">
          <div className="space-y-16 lg:space-y-24">
            {allExperts.map((expert, i) => {
              const isExpanded = expandedIndex === i;
              const messageParagraphs = expert.message.split('\n\n');
              const previewParas = messageParagraphs.slice(0, 2);
              const remainingParas = messageParagraphs.slice(2);
              const hasMore = messageParagraphs.length > 2;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <div
                    className={`flex flex-col lg:flex-row ${
                      i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    } gap-8 sm:gap-10 lg:gap-20 items-start`}
                  >
                    {/* Image */}
                    <div className="w-48 sm:w-64 lg:w-80 mx-auto lg:mx-0 flex-shrink-0 sticky top-32">
                      <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:flex-1 space-y-6">
                      {/* Name & Role */}
                      <div className="space-y-3">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold leading-tight">
                          <span className="gradient-text">{expert.name}</span>
                        </h2>
                        <div className="flex items-center gap-4">
                          <div className="h-px w-8 bg-primary/50" />
                          <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-primary uppercase">
                            {expert.role}
                          </p>
                        </div>
                      </div>

                      {/* Message Section */}
                      <div className="space-y-4">
                        {expert.messageTitle && (
                          <p className="text-white/40 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase italic">
                            {expert.messageTitle}
                          </p>
                        )}
                        
                        <div className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-light">
                          {/* Seamless Expansion: Both preview and rest are in the same flow */}
                          <div className="space-y-4">
                            {previewParas.map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))}
                            
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden space-y-4"
                                >
                                  {remainingParas.map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                  ))}
                                  
                                  {/* Biography Link (in popup) - Not for chairman */}
                                  {!expert.isChairman && expert.bio && (
                                    <div className="pt-6">
                                      <button
                                        onClick={() => setSelectedBioExpert(expert)}
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group"
                                      >
                                        <BookOpen size={16} className="text-primary group-hover:scale-110 transition-transform" />
                                        <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                                          {t('ourExperts.viewBiography', 'Read Full Biography')}
                                        </span>
                                      </button>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Toggle Button */}
                          {hasMore && (
                            <button
                              onClick={() => toggleExpand(i)}
                              className="mt-6 flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:gap-3 transition-all"
                            >
                              <span>{isExpanded ? t('common.readLess', 'Read Less') : t('common.readMore', 'Read More')}</span>
                              <ChevronDown size={14} className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Biography Modal */}
      <AnimatePresence>
        {selectedBioExpert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBioExpert(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-10 border-b border-white/5 flex items-start justify-between bg-white/[0.01]">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                      <img src={selectedBioExpert.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                        {selectedBioExpert.name}
                      </h3>
                      <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
                        {selectedBioExpert.role}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBioExpert(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                >
                  <X className="w-6 h-6 text-white/50 group-hover:text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h4 className="text-sm font-bold tracking-[0.2em] text-white/40 uppercase">
                      {t('ourExperts.biography', 'Biography')}
                    </h4>
                  </div>
                  
                  <div className="space-y-6 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                    {selectedBioExpert.bio?.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
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
