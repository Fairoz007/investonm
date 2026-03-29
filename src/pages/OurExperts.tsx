import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, BookOpen, ArrowUpRight } from 'lucide-react';
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

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedBioExpert, setSelectedBioExpert] = useState<Expert | null>(null);

  const chairman: Expert = {
    name: t('ourExperts.chairman.name', 'Honorable Sheikh Salim Hamood Said Al Hashmi'),
    role: t('ourExperts.chairman.role', 'Chairman'),
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

  const toggleExpand = (i: number) =>
    setExpandedIndex(prev => (prev === i ? null : i));

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

      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6 bg-primary/60" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-primary uppercase">
                {t('ourExperts.heroSubtitle')}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[0.95] tracking-tight">
              <span className="gradient-text">{t('ourExperts.heroTitle')}</span>
            </h1>
            <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-xl">
              {t('ourExperts.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Leaders Showcase ─────────────────────────────────────────── */}
      <section className="pb-20 lg:pb-32 pt-4">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="space-y-24 lg:space-y-40">
            {[chairman, ...leaders].map((expert, i) => {
              const isExpanded = expandedIndex === i;
              const isReversed = i % 2 === 1;
              
              const messageParagraphs = expert.message?.split('\n\n') || [];
              const previewParas = messageParagraphs.slice(0, 2);
              const remainingParas = messageParagraphs.slice(2);
              const hasMore = messageParagraphs.length > 2;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''
                      } gap-12 lg:gap-20 xl:gap-32 items-center lg:items-start`}
                  >
                    {/* Image Column */}
                    <div className="w-full lg:w-[40%] flex-shrink-0">
                      <div className="relative group max-w-md mx-auto lg:mx-0">
                        {/* outer glow ring */}
                        <div className="absolute inset-0 rounded-[2.5rem] blur-[30px] bg-blue-500/10 scale-110 pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />
                        
                        {/* image frame */}
                        <div
                          className="aspect-[4/5] relative rounded-[2.5rem] overflow-hidden"
                          style={{
                            boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px -10px rgba(0,0,0,0.7)',
                          }}
                        >
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* floating role badge */}
                        <div
                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-6 py-3 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                          }}
                        >
                          <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-primary uppercase">
                            {expert.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`w-full lg:flex-1 space-y-8 py-6 ${isReversed ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                      {/* Name Header */}
                      <div className="space-y-4">
                        {expert.isChairman ? (
                          <h2
                            className="font-bold leading-tight tracking-tight text-white"
                            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                          >
                            The Honorable<br />
                            <span className="gradient-text">Sheikh Salim Hamood</span><br />
                            Said Al Hashmi
                          </h2>
                        ) : (
                          <h2
                            className="font-bold leading-tight text-white"
                            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
                          >
                            {expert.name}
                          </h2>
                        )}
                        
                        {!expert.isChairman && (
                          <div className={`flex items-center gap-3 justify-center ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}`}>
                            <div className="h-px w-8 bg-primary/50 flex-shrink-0" />
                            <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-primary uppercase">
                              {expert.role}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Bio Message (Only for non-chairman) */}
                      {!expert.isChairman && (
                        <>
                          {expert.messageTitle && (
                            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/30 uppercase italic">
                              {expert.messageTitle}
                            </p>
                          )}

                          <div className="text-sm sm:text-base text-white/70 leading-[1.85] font-light space-y-4">
                            {previewParas.map((para, idx2) => (
                              <p key={idx2}>{para}</p>
                            ))}

                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden space-y-4"
                                >
                                  {remainingParas.map((para, idx3) => (
                                    <p key={idx3}>{para}</p>
                                  ))}

                                  {expert.bio && (
                                    <div className="pt-4">
                                      <button
                                        onClick={() => setSelectedBioExpert(expert)}
                                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 group"
                                        style={{
                                          background: 'rgba(255,255,255,0.04)',
                                          border: '1px solid rgba(255,255,255,0.08)',
                                        }}
                                      >
                                        <BookOpen size={14} className="text-primary" />
                                        <span className="text-white/80">
                                          {t('ourExperts.viewBiography', 'Read Full Biography')}
                                        </span>
                                      </button>
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Read More / Less toggle */}
                          {hasMore && (
                            <button
                              onClick={() => toggleExpand(i)}
                              className={`mt-4 flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:gap-3 transition-all duration-300 group mx-auto ${isReversed ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}
                            >
                              <span>
                                {isExpanded ? t('common.readLess', 'Read Less') : t('common.readMore', 'Read More')}
                              </span>
                              <ChevronDown
                                size={13}
                                className={`transition-transform duration-400 ${isExpanded ? 'rotate-180' : ''}`}
                              />
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Biography Modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {selectedBioExpert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBioExpert(null)}
              className="absolute inset-0"
              style={{ background: 'rgba(2,4,18,0.7)', backdropFilter: 'blur(12px)' }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-2xl rounded-[3rem] flex flex-col overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 25, 45, 0.95) 0%, rgba(10, 15, 35, 0.98) 100%)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(40px)',
                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)',
                maxHeight: '85vh',
              }}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Modal Header */}
              <div
                className="p-8 sm:p-10 flex items-center justify-between flex-shrink-0 relative z-10"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 relative"
                    style={{ 
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 10px 30px -5px rgba(0,0,0,0.5)',
                    }}
                  >
                    <img src={selectedBioExpert.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight mb-1">
                      {selectedBioExpert.name}
                    </h3>
                    <p className="text-[10px] font-bold text-primary tracking-[0.25em] uppercase">
                      {selectedBioExpert.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBioExpert(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)' 
                  }}
                >
                  <X className="w-5 h-5 text-white/50 group-hover:text-white group-hover:scale-110 transition-all" />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-10 relative z-10 custom-scrollbar">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-primary/50" />
                  <h4 className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">
                    {t('ourExperts.biography', 'Biography')}
                  </h4>
                </div>

                <div className="space-y-6 text-sm sm:text-base text-white/80 leading-[1.9] font-light">
                  {selectedBioExpert.bio?.split('\n\n').map((para, idx) => (
                    <p key={idx} className="hover:text-white/95 transition-colors duration-300">{para}</p>
                  ))}
                </div>
              </div>

              {/* Modal Footer (Optional but adds polish) */}
              <div className="p-6 sm:px-10 flex justify-end flex-shrink-0 relative z-10" style={{ background: 'rgba(0,0,0,0.1)' }}>
                <button
                  onClick={() => setSelectedBioExpert(null)}
                  className="px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


