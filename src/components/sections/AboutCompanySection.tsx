import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, History, Target, Users } from 'lucide-react';

export const AboutCompanySection = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-transparent border-t border-white/[0.03]">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="glass-card-premium mx-auto rounded-[40px] p-8 md:p-16 relative overflow-hidden group">
          {/* Subtle Dynamic Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full -mr-48 -mt-48 pointer-events-none blur-[120px] opacity-50 group-hover:opacity-100 transition-opacity [transition-duration:3s]" />
          
          <div className="relative z-10 flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
          
            {/* Left side: Image/Visual */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02] shadow-2xl group/image">
                <img 
                  src="/images/about-shomoukh.png" 
                  alt="Shomoukh Story" 
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[1.1] transition-transform [transition-duration:2s] ease-out group-hover/image:scale-105"
                />
                
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-2xl p-6 text-white shadow-2xl transition-transform duration-700 group-hover/image:translate-y-[-5px]">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <History className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold leading-none text-white tracking-tight">18+ Years</h4>
                      <p className="mt-1.5 text-sm font-semibold text-blue-400/80 uppercase tracking-widest">Investment Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2 text-left">
              <div>
                <span className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase">
                  {t('footer.text.11')}
                </span>
                
                <h2 className="mb-8 text-4xl font-extrabold leading-[1.15] text-white md:text-[56px] tracking-tight">
                  Defining the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Strategic Investment</span> in Oman
                </h2>
                
                <p className="mb-12 text-lg leading-relaxed text-slate-400 font-medium opacity-90">
                  Shomoukh International Investment is a privately held investment company established in
                  the Sultanate of Oman in 2006 by the Al Hashmi family. The firm operates as both an
                  investment company and a strategic development platform focused on identifying and
                  developing high-value opportunities.
                </p>

                <div className="mb-12 flex flex-col gap-6">
                  {/* Mission */}
                  <div className="group/item flex items-start gap-6 rounded-3xl border border-white/[0.05] bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-white/[0.1] hover:translate-x-1 duration-500">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover/item:border-blue-500/40 transition-colors">
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-white tracking-tight">Our Mission</h4>
                      <p className="text-slate-400 leading-relaxed font-medium text-[15px]">{t('whoweare.text.5')}</p>
                    </div>
                  </div>
                  
                  {/* Leadership */}
                  <div className="group/item flex items-start gap-6 rounded-3xl border border-white/[0.05] bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-white/[0.1] hover:translate-x-1 duration-500">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover/item:border-purple-500/40 transition-colors">
                      <Users className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-bold text-white tracking-tight">Our Leadership</h4>
                      <p className="text-slate-400 leading-relaxed font-medium text-[15px]">Led by the Al Hashmi family and world-class experts.</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/${displayLang}/who-we-are`}
                  className="group inline-flex min-h-[60px] items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-10 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_0_30px_rgba(59,130,246,0.4)] border border-[#60A5FA]/30"
                >
                  Learn Our Story <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

