import { ShieldCheck, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const ResearchDataCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="bg-[var(--primary)] rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-left">
                            <div className="max-w-xl text-white space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Need specific data for your sector?</h2>
                                <p className="text-lg text-white/90">Our research team can provide custom reports tailored to your unique investment requirements.</p>
                                <button className="px-8 py-4 bg-accent hover:bg-accent/80 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                                    Request Custom Report
                                </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
                                <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 text-white group hover:bg-white/20 transition-all">
                                    <Globe className="w-10 h-10 mb-6 text-white group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-xl mb-3">Global Data</h4>
                                    <p className="text-sm text-white/80 leading-relaxed">Access worldwide market trends and benchmarks.</p>
                                </div>
                                <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 text-white group hover:bg-white/20 transition-all">
                                    <ShieldCheck className="w-10 h-10 mb-6 text-white group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-xl mb-3">Trusted Source</h4>
                                    <p className="text-sm text-white/80 leading-relaxed">Verified government and institutional data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
