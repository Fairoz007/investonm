import { motion } from 'framer-motion';
import { ArrowRight, Scale, FileText, Download, BookOpen, Gavel, ShieldCheck, AlertCircle } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { PageHeader } from '@/components/shared/PageHeader';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const lawCategories = [
  {
    icon: Scale,
    name: 'Investment Laws',
    description: 'Regulations governing foreign investment and business operations.',
    documents: [
      { title: 'Foreign Investment Law', price: 'Law', size: '1.2 MB' },
      { title: 'Commercial Agencies Law', price: 'Law', size: '0.8 MB' },
      { title: 'Companies Law', price: 'Law', size: '2.4 MB' },
      { title: 'Competition Law', price: 'Law', size: '1.1 MB' },
    ],
  },
  {
    icon: Gavel,
    name: 'Commercial Regulations',
    description: 'Rules and regulations for commercial activities and trade.',
    documents: [
      { title: 'Commercial Register Regulations', price: 'Regulation', size: '0.9 MB' },
      { title: 'Trademark Law', price: 'Law', size: '1.5 MB' },
      { title: 'Commercial Data Law', price: 'Law', size: '1.2 MB' },
      { title: 'E-Commerce Law', price: 'Law', size: '0.7 MB' },
    ],
  },
  {
    icon: BookOpen,
    name: 'Labor Laws',
    description: 'Employment regulations and labor rights protection.',
    documents: [
      { title: 'Labor Law', price: 'Law', size: '1.8 MB' },
      { title: 'Social Insurance Law', price: 'Law', size: '1.4 MB' },
      { title: 'Work Environment Law', price: 'Law', size: '0.9 MB' },
      { title: 'Omanization Guidelines', price: 'Guideline', size: '2.1 MB' },
    ],
  },
  {
    icon: FileText,
    name: 'Tax Regulations',
    description: 'Tax laws and regulations applicable to businesses.',
    documents: [
      { title: 'Income Tax Law', price: 'Law', size: '1.6 MB' },
      { title: 'VAT Law', price: 'Law', size: '2.2 MB' },
      { title: 'Zakat Regulations', price: 'Regulation', size: '0.5 MB' },
      { title: 'Transfer Pricing Guidelines', price: 'Guideline', size: '1.3 MB' },
    ],
  },
];

const recentUpdates = [
  {
    title: 'Amendment to Foreign Investment Law',
    date: 'October 2025',
    description: 'Updated provisions for 100% foreign ownership in additional sectors across the Sultanate.',
    status: 'Active'
  },
  {
    title: 'New Data Protection Regulations',
    date: 'September 2025',
    description: 'Comprehensive data protection framework for businesses operating in Oman.',
    status: 'Implementation'
  },
];

export default function Laws() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24 font-sans">
      <PageHeader 
        title={t('laws.text.3')}
        subtitle={t('laws.text.4')}
        breadcrumb={[{ label: t('knowledgehub.title') }, { label: t('laws.text.2') }]}
      />

      {/* Compliance Overview */}
      <section className="py-24">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                 <h2 className="text-4xl font-bold text-white tracking-tight">{t('laws.text.5')}</h2>
                 <p className="text-lg text-[#94A3B8] font-light leading-relaxed">
                   Stay informed with the latest legislative changes and regulatory updates affecting the investment landscape in Oman.
                 </p>
                 <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 space-y-4">
                    <div className="flex items-center gap-3">
                       <ShieldCheck className="w-6 h-6 text-blue-400" />
                       <h3 className="text-xl font-bold text-white">Legal Advisory</h3>
                    </div>
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                      Access our legal support desk for professional guidance on local regulations and compliance requirements.
                    </p>
                    <button className="pt-4 flex items-center gap-2 text-blue-400 font-bold text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                       Contact Legal Team
                       <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                 </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                 {recentUpdates.map((update, idx) => (
                   <motion.div
                     key={idx}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group"
                   >
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{update.date}</span>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] text-white/40 uppercase tracking-widest">{update.status}</span>
                        </div>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{update.title}</h3>
                     <p className="text-[#94A3B8] font-light leading-relaxed mb-6">{update.description}</p>
                     <button className="flex items-center gap-2 text-white/60 font-medium text-xs hover:text-white transition-colors">
                        Read full document
                        <ArrowRight className="w-3.5 h-3.5" />
                     </button>
                   </motion.div>
                 ))}
                 
                 <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
                    <AlertCircle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                    <p className="text-xs text-amber-500/80 leading-relaxed italic">
                       Please note that translated documents are for informational purposes. The official Arabic versions published in the Royal Decree shall prevail in all legal matters.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-3xl font-bold text-white tracking-tight mb-4">{t('laws.text.6')}</h2>
             <p className="text-[#94A3B8] font-light italic">Access the full library of commercial and investment regulations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {lawCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-5">
                   <div className="p-4 bg-blue-500/10 rounded-2xl">
                      <category.icon className="w-6 h-6 text-blue-400" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{category.name}</h3>
                      <p className="text-sm text-[#94A3B8] font-light">{category.description}</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                   {category.documents.map((doc, dIdx) => (
                     <div
                       key={dIdx}
                       className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between group cursor-pointer"
                     >
                        <div className="flex items-center gap-4">
                           <FileText className="w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
                           <div>
                              <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{doc.title}</div>
                              <div className="flex items-center gap-2 mt-1">
                                 <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">{doc.price}</span>
                                 <span className="text-[10px] text-white/20">•</span>
                                 <span className="text-[10px] text-white/30 font-mono italic">{doc.size}</span>
                              </div>
                           </div>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-600 transition-colors">
                           <Download className="w-4 h-4 text-white/40 group-hover:text-white" />
                        </div>
                     </div>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12">
        <ResearchDataCTA />
      </div>
    </div>
  );
}
