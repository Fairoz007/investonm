import { motion } from 'framer-motion';
import { ArrowRight, FileText, Download, TrendingUp, BarChart3, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const reportCategories = [
 {
 icon: TrendingUp,
 name: 'Economic Reports',
 description: 'Comprehensive analysis of Oman\'s economic performance and outlook.',
 reports: [
 { title: 'Quarterly Economic Review Q3 2025', date: 'October 2025' },
 { title: 'Annual Economic Report 2024', date: 'January 2025' },
 { title: 'FDI Trends and Analysis', date: 'September 2025' },
 { title: 'Non-Oil GDP Growth Analysis', date: 'August 2025' },
 ],
 },
 {
 icon: BarChart3,
 name: 'Sector Reports',
 description: 'In-depth analysis of key investment sectors and emerging opportunities.',
 reports: [
 { title: 'Technology Sector Outlook 2025', date: 'November 2025' },
 { title: 'Tourism & Hospitality Report', date: 'October 2025' },
 { title: 'Manufacturing Sector Analysis', date: 'September 2025' },
 { title: 'Real Estate Market Review', date: 'August 2025' },
 ],
 },
 {
 icon: Globe,
 name: 'Investment Guides',
 description: 'Practical guides for investors considering Oman.',
 reports: [
 { title: 'Investor Guide 2025', date: 'January 2025' },
 { title: 'Doing Business in Oman', date: 'December 2024' },
 { title: 'Regional Investment Guide', date: 'November 2024' },
 { title: 'Sector-Specific Investment Guides', date: 'October 2024' },
 ],
 },
];

const featuredReports = [
 {
 title: 'Oman Investment Report 2025',
 description: 'Comprehensive overview of investment opportunities, economic trends, and regulatory updates for 2025.',
 type: 'Annual Report',
 date: 'January 2025',
 },
 {
 title: 'Oman Vision 2040 Progress Report',
 description: 'Detailed analysis of Oman Vision 2040 achievements and upcoming opportunities across all sectors.',
 type: 'Strategic Report',
 date: 'December 2024',
 },
 {
 title: 'FDI Confidence Index 2025',
 description: 'Global investor sentiment and confidence in Oman as an investment destination.',
 type: 'Market Research',
 date: 'November 2024',
 },
];

export default function Reports() {
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
 <span className="text-sm font-medium"> {t('reports.text.1')} </span>
 <ArrowRight className="w-4 h-4" />
 <span className="text-sm text-white/60"> {t('reports.text.2')} </span>
 </div>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
 {t('reports.text.3')} </h1>
 <p className="text-xl text-white/70 leading-relaxed">
 {t('reports.text.4')} </p>
 </div>
 </ScrollReveal>
 </div>
 </section>

 {/* Featured Reports */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('reports.text.5')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-3 gap-6">
 {featuredReports.map((report, index) => (
 <ScrollReveal key={report.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -4 }}
 className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 h-full"
>
 <div className="flex items-center gap-2 mb-4">
 <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
 {report.type}
 </span>
 <span className="text-white/50 text-xs">{report.date}</span>
 </div>
 <h3 className="text-lg font-bold text-white mb-3">{report.title}</h3>
 <p className="text-white/60 text-sm mb-6">{report.description}</p>
 <button className="flex items-center gap-2 text-primary text-sm hover:underline">
 <Download className="w-4 h-4" />
 {t('reports.text.6')} </button>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Report Categories */}
 <section className="section-padding bg-dark-light/30">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('reports.text.7')} </h2>
 </ScrollReveal>

 <div className="space-y-8">
 {reportCategories.map((category, index) => (
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
 {category.reports.map((report) => (
 <div
 key={report.title}
 className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
>
 <div className="flex items-center gap-3">
 <FileText className="w-5 h-5 text-primary" />
 <div>
 <div className="text-white text-sm">{report.title}</div>
 <div className="text-white/50 text-xs">{report.date}</div>
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
