import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { BookOpen, Calculator, FileText, Download, ArrowRight, BarChart3, Globe, ShieldCheck } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { PageHeader } from '@/components/shared/PageHeader';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Resources() {
  const { t } = useTranslation();

  const resources = [
    { id: 'guide', icon: BookOpen, title: 'resources.guide.title', desc: 'resources.guide.desc', action: 'Download PDF', actionIcon: Download },
    { id: 'simulator', icon: Calculator, title: 'resources.simulator.title', desc: 'resources.simulator.desc', action: 'Open Simulator', actionIcon: ArrowRight },
    { id: 'licenses', icon: FileText, title: 'resources.licenses.title', desc: 'resources.licenses.desc', action: 'Start Inquiry', actionIcon: ArrowRight },
    { id: 'reports', icon: BarChart3, title: 'resources.reports.title', desc: 'resources.reports.desc', action: 'View Library', actionIcon: ArrowRight }
  ];

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24">
      <PageHeader 
        title={t('resources.text.2')}
        subtitle={t('resources.text.3')}
        breadcrumb={[{ label: t('resources.text.2') }]}
      />

      {/* Resources Introduction */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
               Intelligence & Tools for <span className="text-blue-500">Global Investors</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-12" />
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {resources.map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-10 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <res.icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                  {t(res.title)}
                </h3>

                <p className="text-lg text-[#94A3B8] leading-relaxed font-light mb-12 flex-grow">
                  {t(res.desc)}
                </p>

                <div className="pt-8 border-t border-white/5">
                  <button className="flex items-center gap-3 group/btn text-blue-400 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors">
                    {res.action}
                    <res.actionIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1 space-y-6">
                 <h2 className="text-3xl font-bold text-white">Why Use Our Resources?</h2>
                 <p className="text-[#94A3B8] font-light leading-relaxed">
                   Leverage official data and advanced tools designed to help you navigate Oman's investment landscape with precision.
                 </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <h4 className="text-xl font-bold text-white">Global Standards</h4>
                  <p className="text-sm text-[#94A3B8] font-light">Reports and data formatted for international institutional requirements.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                  <ShieldCheck className="w-8 h-8 text-blue-400" />
                  <h4 className="text-xl font-bold text-white">Verified Data</h4>
                  <p className="text-sm text-[#94A3B8] font-light">All intelligence is sourced directly from government and verified entities.</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      <div className="mt-24">
        <ResearchDataCTA />
      </div>
    </div>
  );
}
