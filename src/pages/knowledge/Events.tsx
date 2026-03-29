import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, MapPin, ArrowRight, Clock, Users, Globe2, Mic2, Building2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const filters = ['All', 'Conference', 'Forum', 'Webinar', 'Roadshow'];

const events = [
  {
    title: 'Oman Investment Forum 2026',
    type: 'Forum',
    date: { day: '14', month: 'MAY', year: '2026' },
    time: '09:00 – 18:00 GST',
    location: 'Oman Convention & Exhibition Centre, Muscat',
    attendees: '1,200+',
    description: 'The flagship annual gathering of international investors, government officials, and industry leaders shaping Oman\'s investment future.',
    icon: <Building2 size={22} />,
    featured: true,
  },
  {
    title: 'Sustainable Energy Investment Summit',
    type: 'Conference',
    date: { day: '22', month: 'JUN', year: '2026' },
    time: '10:00 – 17:00 GST',
    location: 'Kempinski Hotel, Muscat',
    attendees: '400+',
    description: 'Focusing on green hydrogen, renewables, and sustainable financing opportunities across the GCC and Oman.',
    icon: <Globe2 size={22} />,
    featured: false,
  },
  {
    title: 'Vision 2040 Progress Roundtable',
    type: 'Forum',
    date: { day: '08', month: 'JUL', year: '2026' },
    time: '09:30 – 13:00 GST',
    location: 'Shomoukh HQ, Airport Heights, Muscat',
    attendees: '80',
    description: 'An exclusive closed-door roundtable for institutional partners reviewing mid-cycle progress of Oman\'s national strategy.',
    icon: <Mic2 size={22} />,
    featured: false,
  },
  {
    title: 'Shomoukh Investor Webinar Series — Q3',
    type: 'Webinar',
    date: { day: '15', month: 'JUL', year: '2026' },
    time: '15:00 GST | 12:00 BST | 07:00 EST',
    location: 'Virtual — Zoom Webinar',
    attendees: '500+',
    description: 'Quarterly briefing for Shomoukh investors covering portfolio updates, macroeconomic outlook, and upcoming opportunities.',
    icon: <Users size={22} />,
    featured: false,
  },
  {
    title: 'London Oman Investment Roadshow',
    type: 'Roadshow',
    date: { day: '10', month: 'SEP', year: '2026' },
    time: 'Multiple sessions over 2 days',
    location: 'London, United Kingdom',
    attendees: '200+',
    description: 'Targeted investor outreach to UK and European family offices and institutional capital seeking GCC exposure.',
    icon: <Globe2 size={22} />,
    featured: false,
  },
  {
    title: 'Tourism & Hospitality Investment Expo',
    type: 'Conference',
    date: { day: '03', month: 'NOV', year: '2026' },
    time: '09:00 – 17:00 GST',
    location: 'Al Bustan Palace, Muscat',
    attendees: '600+',
    description: 'Showcasing Oman\'s world-class tourism infrastructure, pipeline projects, and incentive packages for hospitality investors.',
    icon: <Building2 size={22} />,
    featured: false,
  },
];

export default function Events() {
  const { lang } = useParams();
  const currentLang = lang || 'en';
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? events : events.filter((e) => e.type === activeFilter);

  return (
    <div className="bg-dark text-white min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-pink-600/10 pointer-events-none" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="as-subtitle-2 mb-8 border-primary/20 text-primary uppercase tracking-widest">
              Calendar 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[0.95] tracking-tight">
              Events &{' '}
              <span className="gradient-text">Conferences</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed">
              Join Shomoukh's global network at forums, roundtables, and investor summits across Oman and international markets.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pb-24">
        {/* Filter pills */}
        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === f
                  ? 'bg-primary text-dark'
                  : 'bg-dark-card border border-white/10 text-white/50 hover:border-primary/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Event List */}
        <div className="space-y-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((event, idx) => (
              <motion.div
                key={event.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ delay: idx * 0.07 }}
                className={`bg-dark-card border rounded-[32px] p-6 lg:p-8 group transition-all flex flex-col lg:flex-row gap-6 lg:gap-10 hover:border-primary/30 ${
                  event.featured ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-transparent' : 'border-white/5'
                }`}
              >
                {/* Date badge */}
                <div className="flex-shrink-0 flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-0 lg:w-20">
                  <div className="bg-primary/10 border border-primary/20 rounded-2xl px-4 py-3 text-center">
                    <span className="block text-2xl font-display font-black text-primary leading-none">{event.date.day}</span>
                    <span className="block text-[10px] font-bold tracking-widest text-primary/70 uppercase">{event.date.month}</span>
                    <span className="block text-[10px] text-white/30">{event.date.year}</span>
                  </div>
                  {event.featured && (
                    <span className="lg:mt-3 text-[10px] font-bold uppercase tracking-widest bg-primary text-dark px-3 py-1 rounded-full">Featured</span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/40 px-3 py-1 rounded-full">{event.type}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/30">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {event.location}</span>
                    <span className="flex items-center gap-1.5"><Users size={12} /> {event.attendees} attendees</span>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-end justify-end gap-3">
                  <Link
                    to={`/${currentLang}/contact`}
                    className="px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-dark transition-all flex items-center gap-2"
                  >
                    Register <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 lg:p-12 bg-dark-card border border-white/5 rounded-[60px] flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-primary/20 transition-all">
          <div>
            <h2 className="text-2xl font-display font-bold mb-2">Want to Partner on an Event?</h2>
            <p className="text-sm text-white/40 max-w-lg">Shomoukh collaborates with government bodies, chambers of commerce, and global institutions to host world-class investment events.</p>
          </div>
          <Link
            to={`/${currentLang}/contact`}
            className="flex-shrink-0 px-8 py-4 bg-primary text-dark rounded-full font-display font-bold hover:bg-white transition-all flex items-center gap-3"
          >
            Become a Partner <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
