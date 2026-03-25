import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, History, Target, Users } from 'lucide-react';

export const AboutCompanySection = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <section className="relative overflow-hidden py-20 bg-[#050812] border-t border-white/5">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px]">
        <div className="mx-auto rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10 relative overflow-hidden">
          {/* Subtle noise inside the box */}
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

          <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
          
            {/* Left side: Image/Visual */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
                <img 
                  src="/images/about-shomoukh.png" 
                  alt="Shomoukh Story" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/90 via-[#050812]/20 to-transparent mix-blend-multiply" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0B1020]/80 p-5 text-white backdrop-blur-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-[#0B1020] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <History className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold leading-none text-white tracking-tight">18+ Years</h4>
                      <p className="mt-1 text-sm font-medium text-[#A7B0C3]">Investment Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-400 uppercase shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                  {t('footer.text.11')}
                </span>
                
                <h2 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-[52px] tracking-tight">
                  Defining the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">Strategic Investment</span> in Oman
                </h2>
                
                <p className="mb-10 text-lg leading-relaxed text-[#A7B0C3]">
                  Shomoukh International Investment is a privately held investment company established in
                  the Sultanate of Oman in 2006 by the Al Hashmi family. The firm operates as both an
                  investment company and a strategic development platform focused on identifying and
                  developing high-value opportunities.
                </p>

                <div className="mb-10 flex flex-col gap-6">
                  {/* Mission */}
                  <div className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04] hover:border-white/10">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1020] border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:border-blue-500/40 transition-colors">
                      <Target className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold text-white tracking-tight">Our Mission</h4>
                      <p className="text-[#A7B0C3] leading-relaxed">{t('whoweare.text.5')}</p>
                    </div>
                  </div>
                  
                  {/* Leadership */}
                  <div className="group flex items-start gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04] hover:border-white/10">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B1020] border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:border-purple-500/40 transition-colors">
                      <Users className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold text-white tracking-tight">Our Leadership</h4>
                      <p className="text-[#A7B0C3] leading-relaxed">Led by the Al Hashmi family and world-class experts.</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/${displayLang}/who-we-are`}
                  className="group inline-flex min-h-[56px] items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-[#60A5FA]/30"
                >
                  Learn Our Story <ArrowRight className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

