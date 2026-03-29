import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function OurStory() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  return (
    <section className="py-28 bg-dark text-white overflow-hidden">
      <div className="as-container-2">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="space-y-6">
            <div className="as-subtitle-2 border-primary/20 text-primary">{t('ourStory.subtitle')}</div>
            <div className="flex flex-col">
              <span className="text-6xl font-display font-bold text-white">{t('ourStory.years')}</span>
              <span className="text-primary uppercase tracking-[0.2em] font-bold text-sm">{t('ourStory.excellence')}</span>
            </div>
          </div>
          <div className="max-w-[800px]">
             <div className="text-white/30 font-bold tracking-[0.3em] text-xs mb-6 uppercase">{t('ourStory.label')}</div>
             <h2 className="as-sec-title-2">
               {t('ourStory.title')}
             </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">
          <div className="h-[600px] rounded-2xl overflow-hidden relative group">
            <img 
              src="/images/oman_villas_1.jpg" 
              alt="Shomoukh HQ" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          <div className="flex flex-col justify-between py-10">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-text-p1 text-xl leading-relaxed">
                  {t('ourStory.intro1')}
                </p>
                <p className="text-text-p1 text-lg leading-relaxed">
                  {t('ourStory.intro2')}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-display font-semibold mb-2">{t('ourStory.missionTitle')}</h4>
                  <p className="text-white/80">{t('ourStory.missionDesc')}</p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-display font-semibold mb-2">{t('ourStory.leadershipTitle')}</h4>
                  <p className="text-white/80">{t('ourStory.leadershipDesc')}</p>
                </div>
              </div>
              
              <Link to={`/${currentLang}/learn-our-story`} className="as-pr-btn-2 bg-white text-dark hover:bg-primary hover:text-white transition-all">
                <span className="icon bg-dark text-white">
                  <ArrowRight size={20} />
                </span>
                <span className="text">{t('ourStory.cta')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
