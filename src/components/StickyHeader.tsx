import { useEffect, useState } from "react";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show sticky header after scrolling past the main header (about 200px)
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-header animate-slide-down">
      <div className="max-w-md mx-auto px-6 py-3 flex items-center justify-center">
        <h1 className="font-serif text-sm tracking-wide text-foreground">
          AURORA CHEN
        </h1>
        <span className="mx-3 w-[1px] h-3 bg-gold opacity-50" />
        <span className="text-[8px] tracking-ultra-wide text-muted-foreground uppercase">
          Photographer
        </span>
      </div>
    </div>
  );
};

export default StickyHeader;
