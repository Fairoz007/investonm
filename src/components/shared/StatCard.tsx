import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StatCardProps {
 value: string;
 label: string;
 icon?: ReactNode;
 delay?: number;
}

export const StatCard = ({ value, label, icon, delay = 0 }: StatCardProps) => {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-50px' }}
 transition={{
 duration: 0.6,
 delay,
 ease: [0.16, 1, 0.3, 1], // Custom smooth easing
 }}
 className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-start"
>
 {/* Dynamic Background Glow on Hover */}
 <div className="absolute -inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
 
 {/* Icon Wrapper with subtle accent */}
 {icon && (
 <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/5 text-blue-400 group- group-hover:text-blue-300 transition-transform duration-500">
 {icon}
 </div>
 )}
 
 <div className="relative z-10 w-full">
 {/* Value with gradient text */}
 <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text mb-3 tracking-tight font-sans drop-shadow-sm group-hover: transition-colors duration-500">
 {value}
 </div>
 
 {/* Subtitle with premium styling */}
 <div className="text-sm font-medium text-white/50 uppercase tracking-widest leading-relaxed group-hover:text-white/70 transition-colors duration-300">
 {label}
 </div>
 </div>

 {/* Subtle bottom border glow accent */}
 <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
 </motion.div>
 );
};
