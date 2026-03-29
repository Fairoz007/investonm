import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Raisi",
      bio: "CEO, Global Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      comment: "Shomoukh has been instrumental in our successful entry into the Omani market. Their strategic insights and local expertise are unparalleled."
    },
    {
      name: "Sarah Thompson",
      bio: "Investment Director, EuroCap",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
      comment: "A visionary partner committed to Oman's growth. Their professionalism and dedication to sustainable development are truly inspiring."
    },
    {
      name: "Khalid Al-Hashmi",
      bio: "Founder, Oman Vision 2040",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
      comment: "Shomoukh represents the best of Omani entrepreneurship, driving innovation and strategic value across the Sultanate."
    },
    {
      name: "Elena Rodriguez",
      bio: "Managing Director, TechBridge",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      comment: "Their collaborative approach and deep understanding of the local landscape make them an ideal partner for international investors."
    }
  ];

  return (
    <section className="py-28 bg-dark text-white overflow-hidden relative">
      <div className="as-container-2">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="as-subtitle-2">Testimonials</div>
          <h2 className="as-sec-title-2 max-w-[870px]">
            Investor success stories that inspire trust and growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          <div className="space-y-40 pt-20">
            {testimonials.slice(0, 2).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-dark-card p-10 rounded-2xl outline outline-8 outline-dark-card border border-black shadow-2xl relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <h4 className="text-xl font-display font-semibold">{item.name}</h4>
                    <p className="text-text-p2 text-sm">{item.bio}</p>
                  </div>
                  <div className="w-24 h-28 rounded-lg overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <Quote size={60} className="text-white/20 mb-6" />
                <p className="text-xl font-light leading-relaxed italic">
                  "{item.comment}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-40">
            {testimonials.slice(2, 4).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 2) * 0.2 }}
                className="bg-dark-card p-10 rounded-2xl outline outline-8 outline-dark-card border border-black shadow-2xl relative"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-1">
                    <h4 className="text-xl font-display font-semibold">{item.name}</h4>
                    <p className="text-text-p2 text-sm">{item.bio}</p>
                  </div>
                  <div className="w-24 h-28 rounded-lg overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <Quote size={60} className="text-white/20 mb-6" />
                <p className="text-xl font-light leading-relaxed italic">
                  "{item.comment}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[230px] font-bold text-white/5 pointer-events-none select-none leading-none hidden xl:block uppercase">
            Shomoukh
          </div>
        </div>
      </div>
    </section>
  );
}
