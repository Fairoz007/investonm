import { ShieldCheck, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const ResearchDataCTA = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden relative bg-transparent border-t border-white/[0.03]">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-6">
        <ScrollReveal>
          <div className="glass-card-premium rounded-[48px] p-8 md:p-16 relative overflow-hidden group">
            {/* Dynamic Interactive Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full -mr-48 -mt-48 pointer-events-none blur-[120px] opacity-30 group-hover:opacity-60 transition-opacity [transition-duration:3s]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full -ml-48 -mb-48 pointer-events-none blur-[120px] opacity-30 group-hover:opacity-60 transition-opacity [transition-duration:3s]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-left">
              <div className="max-w-xl text-white space-y-8">
                <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-400 uppercase">
                  Custom Research
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tighter">
                  Need specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">data</span> for your sector?
                </h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed opacity-90">
                  Our research team can provide custom reports tailored to your unique investment requirements in Oman.
                </p>
                <button className="group inline-flex min-h-[60px] items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-10 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_15px_35px_rgba(59,130,246,0.4)] border border-[#60A5FA]/30">
                  Request Custom Report
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
                <div className="p-8 bg-white/[0.02] rounded-[32px] border border-white/[0.05] text-white group/item hover:bg-white/[0.05] hover:border-blue-500/30 transition-all backdrop-blur-xl hover:translate-y-[-5px] duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover/item:bg-blue-600/20 group-hover/item:border-blue-500/40 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <Globe className="w-8 h-8 text-blue-400 group-hover/item:text-blue-300 transition-transform duration-700 group-hover/item:rotate-12" />
                  </div>
                  <h4 className="font-black text-2xl mb-3 tracking-tight">Global Data</h4>
                  <p className="text-[15px] text-slate-400 leading-relaxed font-bold opacity-80">Access worldwide market trends and benchmarks for your investment.</p>
                </div>

                <div className="p-8 bg-white/[0.02] rounded-[32px] border border-white/[0.05] text-white group/item hover:bg-white/[0.05] hover:border-purple-500/30 transition-all backdrop-blur-xl hover:translate-y-[-5px] duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover/item:bg-purple-600/20 group-hover/item:border-purple-500/40 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <ShieldCheck className="w-8 h-8 text-purple-400 group-hover/item:text-purple-300 transition-transform duration-700" />
                  </div>
                  <h4 className="font-black text-2xl mb-3 tracking-tight">Trusted Source</h4>
                  <p className="text-[15px] text-slate-400 leading-relaxed font-bold opacity-80">Verified government and institutional data you can rely on.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
