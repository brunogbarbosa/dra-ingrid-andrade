'use client';

import { useEffect, useRef } from 'react';

/** Finite entrance, with visible content by default and reduced motion support. */
export function useCampaignMotion() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const hero = root.current;
    if (!hero) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let animations: Animation[] = [];
    const clear = () => { animations.forEach(animation => animation.cancel()); animations = []; };
    const configure = () => {
      clear();
      if (preference.matches) return;
      hero.querySelectorAll('[data-hero-motion="title"]').forEach((element, i) => {
        animations.push(element.animate([
          { opacity: 0, transform: 'translateY(105%)' }, { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 1250, delay: 100 + i * 140, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
      });
      hero.querySelectorAll('[data-hero-motion="fade"]').forEach((element, i) => {
        animations.push(element.animate([
          { opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 1100, delay: 250 + i * 160, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' }));
      });
    };
    configure();
    preference.addEventListener('change', configure);
    return () => { clear(); preference.removeEventListener('change', configure); };
  }, []);
  return root;
}
