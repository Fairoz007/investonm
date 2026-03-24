import { useState, useEffect, useCallback } from 'react';
import { ANIMATION } from '@/lib/constants';

interface UseSliderOptions {
 slideCount: number;
 autoPlayInterval?: number;
 autoPlay?: boolean;
}

export const useSlider = ({
 slideCount,
 autoPlayInterval = ANIMATION.slider.interval,
 autoPlay = true,
}: UseSliderOptions) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isPaused, setIsPaused] = useState(false);
 const [direction, setDirection] = useState<'next' | 'prev'>('next');

 const goTo = useCallback((index: number) => {
 setDirection(index> currentIndex ? 'next' : 'prev');
 setCurrentIndex(index);
 }, [currentIndex]);

 const next = useCallback(() => {
 setDirection('next');
 setCurrentIndex((prev) => (prev + 1) % slideCount);
 }, [slideCount]);

 const prev = useCallback(() => {
 setDirection('prev');
 setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
 }, [slideCount]);

 useEffect(() => {
 if (!autoPlay || isPaused) return;

 const interval = setInterval(() => {
 next();
 }, autoPlayInterval);

 return () => clearInterval(interval);
 }, [autoPlay, autoPlayInterval, isPaused, next]);

 return {
 currentIndex,
 direction,
 goTo,
 next,
 prev,
 setIsPaused,
 };
};
