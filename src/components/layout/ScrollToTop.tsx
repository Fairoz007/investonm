import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handle auto-scrolling to top on route change
 */
export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Standard window scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [location]);

  return null;
};
