import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook that auto-scrolls a container to the bottom when content grows,
 * but pauses when the user scrolls up to read older content.
 *
 * Resumes auto-scroll when the user scrolls back to within `threshold` pixels of the bottom.
 */
export function useAutoScroll(dependency: unknown, threshold: number = 100) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldAutoScroll = useRef(true);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    // Consider "near bottom" if within threshold pixels of the bottom
    shouldAutoScroll.current = scrollHeight - scrollTop - clientHeight < threshold;
  }, [threshold]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (shouldAutoScroll.current) {
      const el = containerRef.current;
      if (el) {
        el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
      }
    }
  }, [dependency]);

  return containerRef;
}
