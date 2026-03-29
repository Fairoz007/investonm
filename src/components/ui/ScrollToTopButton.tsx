import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-[100] p-4 rounded-full",
            "bg-primary/20 hover:bg-primary/40 text-primary hover:text-white",
            "backdrop-blur-xl border border-primary/30 outline-none",
            "shadow-[0_0_20px_rgba(30,144,255,0.3)] hover:shadow-[0_0_30px_rgba(30,144,255,0.5)]",
            "transition-all duration-300 group overflow-hidden"
          )}
          aria-label="Scroll to top"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <ArrowUp className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
