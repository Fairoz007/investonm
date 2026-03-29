import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, History, Target, Users } from 'lucide-react';

export const AboutCompanySection = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-[1120px] rounded-[24px] border border-white/5 bg-white/[0.01] p-6 shadow-[0_18px_50px_rgba(2,6,23,0.3)] backdrop-blur-xl md:p-9">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-14">
          
          {/* Left side: Image/Visual */}
          <div className="w-full lg:w-[44%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/12 bg-card/40 shadow-[0_16px_38px_rgba(2,6,23,0.55)]">
              <img 
                src="/images/about-shomoukh-new.png" 
                alt={t('ourStory.subtitle')} 
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Stats */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-slate-900/75 p-4 text-foreground backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-primary/15 shadow-[0_0_18px_rgba(56,189,248,0.4)]">
                    <History className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold leading-none text-foreground">{t('ourStory.years')}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{t('ourStory.excellence')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Content */}
          <div className="w-full lg:w-[56%]">
            <div>
              <span className="mb-4 block text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                {t('ourStory.label')}
              </span>
              <h2 className="mb-6 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl">
                {t('ourStory.title')}
              </h2>
              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {t('ourStory.intro1')} {t('ourStory.intro2')}
              </p>

              <div className="mb-8 flex flex-col gap-4">
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/50 bg-primary/12">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-foreground">{t('ourStory.missionTitle')}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{t('ourStory.missionDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/50 bg-primary/12">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-foreground">{t('ourStory.leadershipTitle')}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{t('ourStory.leadershipDesc')}</p>
                  </div>
                </div>
              </div>

              <Link 
                to={`/${displayLang}/who-we-are`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-primary/60 bg-primary/90 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
              >
                {t('ourStory.cta')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
