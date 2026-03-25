import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, Users, Zap } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { PageHeader } from '@/components/shared/PageHeader';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const upcomingEvents = [
  {
    title: 'Future Investment Initiative (FII)',
    date: 'October 28-30, 2025',
    location: 'Riyadh',
    type: 'Conference',
    description: 'The world\'s premier investment conference bringing together global leaders, investors, and innovators.',
    image: '/images/hero-energy.jpg'
  },
  {
    title: 'LEAP Tech Conference',
    date: 'February 9-12, 2026',
    location: 'Riyadh',
    type: 'Technology',
    description: 'The most attended tech event in the world, showcasing the latest in technology and innovation.',
    image: '/images/hero-scientist.jpg'
  },
  {
    title: 'Oman Infrastructure Summit',
    date: 'November 15-17, 2025',
    location: 'Muscat',
    type: 'Infrastructure',
    description: 'Exploring infrastructure development opportunities and mega projects across the Sultanate.',
    image: '/images/hero-engineers.jpg'
  },
  {
    title: 'Made in Oman Expo',
    date: 'December 10-14, 2025',
    location: 'Muscat',
    type: 'Trade Show',
    description: 'Showcasing Oman manufacturing capabilities and export opportunities.',
    image: '/images/hero-manufacturing.jpg'
  },
];

const recurringEvents = [
  {
    name: 'Investor Roadshows',
    description: 'Regular roadshows in key global markets to showcase investment opportunities.',
    frequency: 'Quarterly',
    icon: Globe
  },
  {
    name: 'Sector-Specific Forums',
    description: 'Focused forums for specific industries to discuss opportunities and challenges.',
    frequency: 'Monthly',
    icon: Users
  },
  {
    name: 'Startup Pitch Events',
    description: 'Events connecting startups with investors and potential partners.',
    frequency: 'Monthly',
    icon: Zap
  },
  {
    name: 'Webinars & Virtual Events',
    description: 'Online events providing insights and updates on investment opportunities.',
    frequency: 'Weekly',
    icon: Clock
  },
];

export default function Events() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 pb-24 font-sans">
      <PageHeader 
        title={t('events.text.3')}
        subtitle={t('events.text.4')}
        breadcrumb={[{ label: t('knowledgehub.title') }, { label: t('events.text.2') }]}
      />

      {/* Featured Events Slider/Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">{t('events.text.5')}</h2>
            <div className="hidden md:flex gap-4">
               {/* Pagination or filter can go here */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[320px] rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-[#050812]/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/30">
                        {event.type}
                      </span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {event.title}
                   </h3>
                   <div className="flex flex-wrap gap-6 text-xs text-white/50 font-light">
                      <div className="flex items-center gap-2">
                         <Calendar className="w-4 h-4 text-blue-400" />
                         {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                         <MapPin className="w-4 h-4 text-blue-400" />
                         {event.location}
                      </div>
                   </div>
                </div>
                
                <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600">
                   <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Engagement */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Continuous Engagement</h2>
            <p className="text-[#94A3B8] font-light">Join our regular sessions designed to keep the investment community informed and connected.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recurringEvents.map((event, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col items-center text-center group"
              >
                 <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    {/* Fallback for Globe vs others */}
                    <event.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                 </div>
                 <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">{event.frequency}</div>
                 <h4 className="text-xl font-bold text-white mb-3">{event.name}</h4>
                 <p className="text-sm text-[#94A3B8] font-light leading-relaxed">{event.description}</p>
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

function Globe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
