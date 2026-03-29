import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(18), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-padding bg-background text-foreground overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="text-primary font-bold tracking-widest text-xs uppercase mb-4 lg:mb-0">Why Oman?</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-4xl">
             Positioned as a premier global investment hub, the Sultanate combines connectivity, diversity, and exceptional quality of life.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1.25fr] gap-5 lg:gap-6">
          {/* Left Column */}
          <div className="glass-card-premium flex flex-col justify-between min-h-[220px] lg:min-h-[240px]">
            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10 flex items-end gap-4">
                <div className="text-5xl lg:text-7xl font-bold text-white/20 flex items-baseline">
                  <span className="text-white">
                    <Odometer value={count} format="d" />
                  </span>
                  <span className="text-white/20">+</span>
                </div>
                <p className="text-base font-medium mb-1">Years of<br />Excellence</p>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Shomoukh International Investment has been a trusted partner in Oman's growth since 2006, delivering strategic value across key sectors.
              </p>
            </div>
            <div className="h-24 rounded-2xl overflow-hidden mt-6">
              <iframe 
                src="https://www.youtube.com/embed/A24LlTZ0EvE?autoplay=1&mute=1&loop=1&playlist=A24LlTZ0EvE&controls=0&modestbranding=1&id=ytplayer&enablejsapi=1"
                title="Vision Video" 
                className="w-full h-full object-cover scale-[2] pointer-events-none"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-5 lg:space-y-6">
            <div className="glass-card-premium relative overflow-hidden group min-h-[220px] lg:min-h-[240px] flex flex-col justify-between p-0">
              <img 
                src="/images/oman_harbor_1.jpg" 
                alt="" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-between h-full">
                <p className="text-lg lg:text-xl font-medium max-w-[300px] text-white">
                  We identify and develop high-value opportunities in the Sultanate of Oman.
                </p>
                <div className="flex items-end justify-between">
                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} fill="currentColor" className="text-primary" />)}
                  </div>
                  <span className="text-4xl lg:text-5xl font-bold text-white">5.0/5</span>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-xl p-1 grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-4 items-center">
              <div className="space-y-px overflow-hidden rounded-lg">
                {[
                  { label: 'Investment', value: '100%' },
                  { label: 'Strategy', value: '95%' },
                  { label: 'Development', value: '88%' },
                  { label: 'Growth', value: '92%' },
                ].map((item, i) => (
                  <div key={i} className={cn(
                    "h-12 flex items-center justify-between px-6 font-medium",
                    i === 0 ? "bg-white/5" : i === 1 ? "bg-white/10" : i === 2 ? "bg-black" : "bg-white/20"
                  )}>
                    {item.label} <span>{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-black/40 rounded-lg p-6 text-center space-y-4">
                <div className="w-14 h-14 bg-dark-card rounded-full flex items-center justify-center mx-auto text-primary">
                  <PhoneCall size={24} />
                </div>
                <h4 className="text-2xl font-display font-semibold">24/7</h4>
                <p className="text-sm text-text-p1 uppercase tracking-widest">Investor Support</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="glass-card-premium relative overflow-hidden group min-h-[220px] lg:min-h-[240px] flex flex-col justify-between p-0">
            <img 
              src="/images/oman_cliffs_1.jpg" 
              alt="" 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-background/50 group-hover:bg-background/40 transition-colors" />
            <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-between h-full">
              <h3 className="text-2xl lg:text-3xl font-bold max-w-[200px] text-white">
                Strategic Partnerships
              </h3>
              <p className="text-right text-white/80 font-medium max-w-[310px] ml-auto text-sm lg:text-base">
                Shomoukh collaborates with global leaders to drive sustainable growth in Oman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneCall({ size, className }: { size?: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
