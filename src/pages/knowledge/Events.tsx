import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const upcomingEvents = [
 {
 title: 'Future Investment Initiative (FII)',
 date: 'October 28-30, 2025',
 location: 'Riyadh',
 type: 'Conference',
 description: 'The world\'s premier investment conference bringing together global leaders, investors, and innovators.',
 },
 {
 title: 'LEAP Tech Conference',
 date: 'February 9-12, 2026',
 location: 'Riyadh',
 type: 'Technology',
 description: 'The most attended tech event in the world, showcasing the latest in technology and innovation.',
 },
 {
 title: 'Oman Infrastructure Summit',
 date: 'November 15-17, 2025',
 location: 'Jeddah',
 type: 'Infrastructure',
 description: 'Exploring infrastructure development opportunities and mega projects across the Sultanate.',
 },
 {
 title: 'Made in Oman Expo',
 date: 'December 10-14, 2025',
 location: 'Riyadh',
 type: 'Trade Show',
 description: 'Showcasing Oman manufacturing capabilities and export opportunities.',
 },
];

const recurringEvents = [
 {
 name: 'Investor Roadshows',
 description: 'Regular roadshows in key global markets to showcase investment opportunities.',
 frequency: 'Quarterly',
 },
 {
 name: 'Sector-Specific Forums',
 description: 'Focused forums for specific industries to discuss opportunities and challenges.',
 frequency: 'Monthly',
 },
 {
 name: 'Startup Pitch Events',
 description: 'Events connecting startups with investors and potential partners.',
 frequency: 'Monthly',
 },
 {
 name: 'Webinars & Virtual Events',
 description: 'Online events providing insights and updates on investment opportunities.',
 frequency: 'Weekly',
 },
];

const pastHighlights = [
 {
 title: 'FII 2024',
 attendees: '6,000+',
 deals: '$70B+',
 description: 'Record-breaking attendance and deal announcements.',
 },
 {
 title: 'LEAP 2025',
 attendees: '172,000+',
 deals: '$14B+',
 description: 'The most attended tech event globally.',
 },
 {
 title: 'Oman Green Initiative Forum',
 attendees: '2,000+',
 deals: 'N/A',
 description: 'Global leaders committed to sustainability goals.',
 },
];

export default function Events() {
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
 <span className="text-sm font-medium"> {t('events.text.1')} </span>
 <ArrowRight className="w-4 h-4" />
 <span className="text-sm text-white/60"> {t('events.text.2')} </span>
 </div>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
 {t('events.text.3')} </h1>
 <p className="text-xl text-white/70 leading-relaxed">
 {t('events.text.4')} </p>
 </div>
 </ScrollReveal>
 </div>
 </section>

 {/* Upcoming Events */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('events.text.5')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 gap-6">
 {upcomingEvents.map((event, index) => (
 <ScrollReveal key={event.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -4 }}
 className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 h-full"
>
 <div className="flex items-center gap-2 mb-4">
 <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
 {event.type}
 </span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
 <p className="text-white/60 text-sm mb-4">{event.description}</p>
 <div className="flex flex-wrap gap-4 text-sm text-white/50">
 <div className="flex items-center gap-1">
 <Calendar className="w-4 h-4" />
 {event.date}
 </div>
 <div className="flex items-center gap-1">
 <MapPin className="w-4 h-4" />
 {event.location}
 </div>
 </div>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Recurring Events */}
 <section className="section-padding bg-dark-light/30">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('events.text.6')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {recurringEvents.map((event, index) => (
 <ScrollReveal key={event.name} delay={index * 0.1}>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 h-full">
 <div className="flex items-center gap-2 mb-3">
 <Clock className="w-4 h-4 text-primary" />
 <span className="text-primary text-sm">{event.frequency}</span>
 </div>
 <h3 className="text-lg font-bold text-white mb-2">{event.name}</h3>
 <p className="text-white/60 text-sm">{event.description}</p>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Past Highlights */}
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-3xl font-bold text-white mb-8">
 {t('events.text.7')} </h2>
 </ScrollReveal>

 <div className="grid md:grid-cols-3 gap-6">
 {pastHighlights.map((event, index) => (
 <ScrollReveal key={event.title} delay={index * 0.1}>
 <div className="bg-card border border-border rounded-lg p-6 shadow-sm p-6 text-center">
 <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
 <div className="grid grid-cols-2 gap-4 mb-4">
 <div>
 <div className="text-2xl font-bold text-primary">{event.attendees}</div>
 <div className="text-white/50 text-xs"> {t('events.text.8')} </div>
 </div>
 <div>
 <div className="text-2xl font-bold text-primary">{event.deals}</div>
 <div className="text-white/50 text-xs"> {t('events.text.9')} </div>
 </div>
 </div>
 <p className="text-white/60 text-sm">{event.description}</p>
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
