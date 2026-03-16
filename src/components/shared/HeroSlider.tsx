// HeroSlider component
import { motion, AnimatePresence } from 'framer-motion';
import { useSlider } from '@/hooks/useSlider';
import { HERO_SLIDES, ANIMATION } from '@/lib/constants';

interface HeroSliderProps {
  children?: React.ReactNode;
}

export const HeroSlider = ({ children }: HeroSliderProps) => {
  const { currentIndex, goTo, setIsPaused } = useSlider({
    slideCount: HERO_SLIDES.length,
    autoPlayInterval: ANIMATION.slider.interval,
    autoPlay: true,
  });

  return (
    <div
      className="relative w-full h-screen overflow-hidden will-change-transform gpu-accelerated"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: ANIMATION.slider.transitionDuration,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 will-change-transform gpu-accelerated"
        >
          <img
            src={HERO_SLIDES[currentIndex].image}
            alt={HERO_SLIDES[currentIndex].alt}
            className="w-full h-full object-cover will-change-transform gpu-accelerated"
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {children}
      </div>

      {/* Navigation and Controls */}
      <div className="absolute inset-x-0 bottom-12 z-20">
        <div className="container-custom flex justify-between items-end">
          
          {/* Progress Lines Pagination */}
          <div className="flex items-center gap-2 mb-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="group relative w-12 md:w-20 lg:w-28 h-6 flex items-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className="w-full h-[3px] bg-white/20 overflow-hidden transition-all duration-300 group-hover:bg-white/40"
                >
                  {index === currentIndex && (
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: ANIMATION.slider.interval / 1000,
                        ease: 'linear',
                      }}
                      key={currentIndex}
                    />
                  )}
                  {index < currentIndex && (
                    <div className="w-full h-full bg-white" />
                  )}
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
