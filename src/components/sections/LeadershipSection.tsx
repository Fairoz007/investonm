import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { User, Quote } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
};

export const LeadershipSection = () => {
  const { t } = useTranslation();

  const chairman = {
    name: t("leadership.chairman.name"),
    position: t("leadership.chairman.title"),
    photo: "https://ges.om/assets/img/chirman.png",
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Chairman Image & Badge */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3 flex flex-col items-center lg:items-end">
            <div className="relative group">
              {/* Outer glow/border */}
              <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative w-[280px] md:w-[320px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5">
                {chairman.photo ? (
                  <img 
                    src={chairman.photo} 
                    alt={chairman.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-50 flex items-center justify-center text-neutral-300">
                    <User className="w-24 h-24 opacity-30" />
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Info Overlay (Mobile Only or extra detail) */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-bold mb-1">{chairman.name}</h3>
                  <p className="text-white/80 text-sm font-medium tracking-widest uppercase">{chairman.position}</p>
                </div>
              </div>

              {/* Decorative Quote Icon Badge */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Quote className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
              Executive Message
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1a1a] tracking-tight leading-tight">
              {t("leadership.chairman.message_title")}
            </h2>
            
            <div className="space-y-6 text-lg text-[#555] leading-relaxed font-light">
              {t("leadership.chairman.message_text").split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-black/5 flex items-center gap-6">
              <div className="w-16 h-px bg-accent/30" />
              <div>
                <p className="font-bold text-xl text-[#1a1a1a]">{chairman.name}</p>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">{chairman.position}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
