import { motion } from 'framer-motion';
import { ArrowRight, Scale, FileText, Download, BookOpen, Gavel } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const lawCategories = [
 {
 icon: Scale,
 name: 'Investment Laws',
 description: 'Regulations governing foreign investment and business operations.',
 documents: [
 { title: 'Foreign Investment Law', type: 'Law' },
 { title: 'Commercial Agencies Law', type: 'Law' },
 { title: 'Companies Law', type: 'Law' },
 { title: 'Competition Law', type: 'Law' },
 ],
 },
 {
 icon: Gavel,
 name: 'Commercial Regulations',
 description: 'Rules and regulations for commercial activities and trade.',
 documents: [
 { title: 'Commercial Register Regulations', type: 'Regulation' },
 { title: 'Trademark Law', type: 'Law' },
 { title: 'Commercial Data Law', type: 'Law' },
 { title: 'E-Commerce Law', type: 'Law' },
 ],
 },
 {
 icon: BookOpen,
 name: 'Labor Laws',
 description: 'Employment regulations and labor rights protection.',
 documents: [
 { title: 'Labor Law', type: 'Law' },
 { title: 'Social Insurance Law', type: 'Law' },
 { title: 'Work Environment Law', type: 'Law' },
 { title: 'Omanzation Guidelines', type: 'Guideline' },
 ],
 },
 {
 icon: FileText,
 name: 'Tax Regulations',
 description: 'Tax laws and regulations applicable to businesses.',
 documents: [
 { title: 'Income Tax Law', type: 'Law' },
 { title: 'VAT Law', type: 'Law' },
 { title: 'Zakat Regulations', type: 'Regulation' },
 { title: 'Transfer Pricing Guidelines', type: 'Guideline' },
 ],
 },
];

const recentUpdates = [
 {
 title: 'Amendment to Foreign Investment Law',
 date: 'October 2025',
 description: 'Updated provisions for 100% foreign ownership in additional sectors.',
 },
 {
 title: 'New Data Protection Regulations',
 date: 'September 2025',
 description: 'Comprehensive data protection framework for businesses operating in Oman.',
 },
 {
 title: 'Updated Omanzation Requirements',
 date: 'August 2025',
 description: 'Revised quotas and requirements for Oman national employment.',
 },
 {
 title: 'E-Commerce Law Amendments',
 date: 'July 2025',
 description: 'New provisions for online businesses and digital transactions.',
 },
];

export default function Laws() {
 const { t } = useTranslation();
 return (
 <div className="min-h-screen bg-dark pt-24">
 {/* Hero Section */}
 <section className="relative py-20 overflow-hidden">
 <div className="absolute inset-0" />
 <div className="container-custom relative z-10">
 <ScrollReveal>
 <div className="max-w-3xl">
 <div className="flex items-center gap-2 text-primary mb-4">
 <span className="text-sm font-medium"> {t('laws.text.1')} </span>
 <ArrowRight className="w-4 h-4" />
 <span className="text-sm text-white/60"> {t('laws.text.2')} </span>
 </div>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
 {t('laws.text.3')} </h1>
 <p className="text-xl text-white/70 leading-relaxed">
 {t('laws.text.4')} </p>
 </div>
 </ScrollReveal>
 </div>
 </section>

 {/* Recent Updates */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('laws.text.5')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 gap-6">
 {recentUpdates.map((update, index) => (
 <ScrollReveal key={update.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -4 }}
 className="bg-card border border-border rounded-lg p-6 shadow-sm p-6"
>
 <div className="flex items-center gap-2 mb-3">
 <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
 {update.date}
 </span>
 </div>
 <h3 className="text-lg font-bold text-white mb-2">{update.title}</h3>
 <p className="text-white/60 text-sm">{update.description}</p>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Law Categories */}
 <section className="section-padding bg-dark-light/30">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('laws.text.6')} </h2>
 </ScrollReveal>

 <div className="space-y-8">
 {lawCategories.map((category, index) => (
 <ScrollReveal key={category.name} delay={index * 0.1}>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-8">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-primary/20 rounded-xl">
 <category.icon className="w-6 h-6 text-primary" />
 </div>
 <div>
 <h3 className="text-xl font-bold text-white">{category.name}</h3>
 <p className="text-white/60 text-sm">{category.description}</p>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-4">
 {category.documents.map((doc) => (
 <div
 key={doc.title}
 className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
>
 <div className="flex items-center gap-3">
 <FileText className="w-5 h-5 text-primary" />
 <div>
 <div className="text-white text-sm">{doc.title}</div>
 <div className="text-white/50 text-xs">{doc.type}</div>
 </div>
 </div>
 <Download className="w-4 h-4 text-white/50" />
 </div>
 ))}
 </div>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>
 );
}
