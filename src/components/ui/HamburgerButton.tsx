import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative z-[1101] flex h-12 w-12 flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl transition-all hover:bg-white/10 active:scale-95 group"
      aria-label="Toggle Menu"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative flex h-5 w-6 flex-col justify-between">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] w-full origin-left rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="h-[2px] w-3/4 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] w-full origin-left rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        />
      </div>
    </button>
  );
};
