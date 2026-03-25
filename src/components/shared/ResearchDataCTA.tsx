import { ShieldCheck, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const ResearchDataCTA = () => {
 return (
   <section className="py-20 bg-[#050816] overflow-hidden relative">
     <div className="pointer-events-none absolute inset-0 z-0">
       <div className="absolute top-[30%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[150px]" />
       <div className="absolute bottom-[-10%] right-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
     </div>

     <div className="container-custom relative z-10 mx-auto max-w-[1400px]">
       <ScrollReveal>
         <div className="rounded-[32px] p-8 md:p-16 relative overflow-hidden bg-white/5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl">
           {/* Inner glows */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -mr-48 -mt-48 pointer-events-none blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full -ml-48 -mb-48 pointer-events-none blur-[100px]" />
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-left">
             <div className="max-w-xl text-white space-y-8">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-sans tracking-tight">
                 Need specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#8B5CF6]">data</span> for your sector?
               </h2>
               <p className="text-lg md:text-[20px] text-[#A7B0C3] font-sans font-medium leading-relaxed">
                 Our research team can provide custom reports tailored to your unique investment requirements in Oman.
               </p>
               <button className="group inline-flex min-h-[56px] items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-8 py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-[#60A5FA]/30 z-20">
                 Request Custom Report
               </button>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
               <div className="p-8 bg-[#0B1020]/50 rounded-[28px] border border-white/10 text-white group hover:bg-white/10 hover:border-blue-500/30 transition-all backdrop-blur-md">
                 <div className="w-14 h-14 rounded-2xl bg-[#050816] border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                   <Globe className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-transform duration-500 group-hover:rotate-12" />
                 </div>
                 <h4 className="font-bold text-2xl mb-3 font-sans tracking-tight">Global Data</h4>
                 <p className="text-[15px] text-[#A7B0C3] leading-relaxed font-sans font-medium">Access worldwide market trends and benchmarks for your investment.</p>
               </div>
               <div className="p-8 bg-[#0B1020]/50 rounded-[28px] border border-white/10 text-white group hover:bg-white/10 hover:border-purple-500/30 transition-all backdrop-blur-md">
                 <div className="w-14 h-14 rounded-2xl bg-[#050816] border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-600/20 group-hover:border-purple-500/40 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                   <ShieldCheck className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-transform duration-500" />
                 </div>
                 <h4 className="font-bold text-2xl mb-3 font-sans tracking-tight">Trusted Source</h4>
                 <p className="text-[15px] text-[#A7B0C3] leading-relaxed font-sans font-medium">Verified government and institutional data you can rely on.</p>
               </div>
             </div>
           </div>
         </div>
       </ScrollReveal>
     </div>
   </section>
 );
};
