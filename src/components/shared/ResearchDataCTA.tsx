import { ShieldCheck, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const ResearchDataCTA = () => {
    return (
    <section className="py-24 bg-[#020617] overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#0F172A] to-[#010307] rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[150px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -ml-48 -mb-48 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-left">
              <div className="max-w-xl text-white space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-sans">
                  Need specific <span className="text-[var(--primary)]">data</span> for your sector?
                </h2>
                <p className="text-lg md:text-xl text-white/60 font-sans font-light leading-relaxed">
                  Our research team can provide custom reports tailored to your unique investment requirements in Oman.
                </p>
                <button className="px-10 py-5 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-full font-bold font-sans transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(30,58,138,0.4)] uppercase text-xs tracking-[0.2em]">
                  Request Custom Report
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
                <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white group hover:bg-white/10 hover:border-[var(--primary)]/50 transition-all shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] transition-colors">
                    <Globe className="w-8 h-8 text-[var(--primary-light)] group-hover:text-white transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <h4 className="font-bold text-2xl mb-4 font-sans">Global Data</h4>
                  <p className="text-sm text-white/50 leading-relaxed font-sans">Access worldwide market trends and benchmarks for your investment.</p>
                </div>
                <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 text-white group hover:bg-white/10 hover:border-[var(--primary)]/50 transition-all shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] transition-colors">
                    <ShieldCheck className="w-8 h-8 text-[var(--primary-light)] group-hover:text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="font-bold text-2xl mb-4 font-sans">Trusted Source</h4>
                  <p className="text-sm text-white/50 leading-relaxed font-sans">Verified government and institutional data you can rely on.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    );
};
