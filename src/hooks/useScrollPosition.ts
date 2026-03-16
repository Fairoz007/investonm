import { useState, useEffect, useRef } from 'react';

export const useScrollPosition = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      tickingRef.current = false;
      setIsScrolled(window.scrollY > threshold);
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateScrollState);
      }
    };

    // Check initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      tickingRef.current = false;
    };
  }, [threshold]);

  return isScrolled;
};
