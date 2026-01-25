import { useEffect, useState, useCallback, RefObject } from "react";

export const useParallax = (ref: RefObject<HTMLElement>, intensity: number = 0.1) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const distanceFromCenter = elementCenter - windowHeight / 2;
    
    // Calculate parallax offset based on element position
    const parallaxOffset = distanceFromCenter * intensity;
    setOffset(parallaxOffset);
  }, [ref, intensity]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return offset;
};
