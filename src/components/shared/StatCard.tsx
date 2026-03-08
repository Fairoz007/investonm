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
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="glass-card p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </motion.div>
  );
};
