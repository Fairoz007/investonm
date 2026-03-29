import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, History, Target, Users } from 'lucide-react';

export const AboutCompanySection = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_40%,rgba(14,165,233,0.14),transparent_48%),radial-gradient(circle_at_76%_24%,rgba(56,189,248,0.10),transparent_42%)]" />
      </div>
      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-[1120px] rounded-[24px] border border-white/10 bg-[#070d1f]/85 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.6)] backdrop-blur-xl md:p-9">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-14">
          
          {/* Left side: Image/Visual */}
          <div className="w-full lg:w-[44%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/12 bg-card/40 shadow-[0_16px_38px_rgba(2,6,23,0.55)]">
              <img 
                src="/images/about-shomoukh-new.png" 
                alt="Shomoukh Story" 
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
                    <h4 className="text-base font-semibold leading-none text-foreground">18+ Years</h4>
                    <p className="mt-1 text-xs text-muted-foreground">Investment Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Content */}
          <div className="w-full lg:w-[56%]">
            <div>
              <span className="mb-4 block text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                {t('footer.text.11')}
              </span>
              <h2 className="mb-6 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl">
                Defining the Future of <span className="text-primary">Strategic Investment</span> in Oman
              </h2>
              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                Shomoukh International Investment is a privately held investment company established in
                the Sultanate of Oman in 2006 by the Al Hashmi family. The firm operates as both an
                investment company and a strategic development platform focused on identifying and
                developing high-value opportunities across strategic sectors. Through its diversified
                portfolio and international partnerships, Shomoukh connects capital, expertise, and
                opportunities across Oman and global markets.
              </p>

              <div className="mb-8 flex flex-col gap-4">
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/50 bg-primary/12">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-foreground">Our Mission</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{t('whoweare.text.5')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-primary/50 bg-primary/12">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-semibold text-foreground">Our Leadership</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">Led by the Al Hashmi family and world-class experts.</p>
                  </div>
                </div>
              </div>

              <Link 
                to={`/${displayLang}/who-we-are`}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-primary/60 bg-primary/90 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
              >
                Learn Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
