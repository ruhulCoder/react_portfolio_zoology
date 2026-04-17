import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a boolean `isVisible`.
 * Once the element enters the viewport (threshold 15%), isVisible becomes true.
 * The animation is only triggered once (no re-trigger on scroll-back).
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Returns an array of { ref, isVisible } tuples for staggered child animations.
 * Each element has its own observer so they can cascade.
 */
export function useStaggerAnimation(count: number, threshold = 0.1) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSet(prev => new Set(prev).add(i));
            observer.unobserve(el);
          }
        },
        { threshold }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [count, threshold]);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    refs.current[i] = el;
  };

  return { setRef, visibleSet };
}
