import { ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

export const ResearchDataCTA = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <section className="py-20 lg:py-24 overflow-hidden relative bg-transparent border-t border-white/[0.03]">
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="glass-card-premium rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 lg:p-16 relative overflow-hidden group">
            {/* Dynamic Interactive Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full -mr-48 -mt-48 pointer-events-none blur-[120px] opacity-30 group-hover:opacity-60 transition-opacity [transition-duration:3s]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full -ml-48 -mb-48 pointer-events-none blur-[120px] opacity-30 group-hover:opacity-60 transition-opacity [transition-duration:3s]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 text-left">
              <div className="max-w-xl text-white space-y-6 sm:space-y-8">
                <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase">
                  {t("contactCTA.badge")}
                </span>
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter"
                  dangerouslySetInnerHTML={{ __html: t("contactCTA.title") }}
                />
                <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-medium leading-relaxed opacity-90">
                  {t("contactCTA.description")}
                </p>
                <Link 
                  to={`/${displayLang}/contact`}
                  className="group inline-flex w-full sm:w-auto min-h-[56px] items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-8 sm:px-10 py-4 text-sm sm:text-base font-bold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_15px_35px_rgba(59,130,246,0.4)] border border-[#60A5FA]/30 touch-target"
                >
                  {t("contactCTA.button")}
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full lg:w-auto">
                <div className="p-6 sm:p-8 bg-white/[0.02] rounded-[24px] sm:rounded-[32px] border border-white/[0.05] text-white group/item hover:bg-white/[0.05] hover:border-blue-500/30 transition-all backdrop-blur-xl hover:translate-y-[-5px] duration-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover/item:bg-blue-600/20 group-hover/item:border-blue-500/40 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover/item:text-blue-300 transition-transform duration-700 group-hover/item:rotate-12" />
                  </div>
                  <h4 className="font-black text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">{t("contactCTA.card1.title")}</h4>
                  <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed font-bold opacity-80">{t("contactCTA.card1.description")}</p>
                </div>

                <div className="p-6 sm:p-8 bg-white/[0.02] rounded-[24px] sm:rounded-[32px] border border-white/[0.05] text-white group/item hover:bg-white/[0.05] hover:border-purple-500/30 transition-all backdrop-blur-xl hover:translate-y-[-5px] duration-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover/item:bg-purple-600/20 group-hover/item:border-purple-500/40 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover/item:text-purple-300 transition-transform duration-700" />
                  </div>
                  <h4 className="font-black text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">{t("contactCTA.card2.title")}</h4>
                  <p className="text-sm sm:text-[15px] text-slate-400 leading-relaxed font-bold opacity-80">{t("contactCTA.card2.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
