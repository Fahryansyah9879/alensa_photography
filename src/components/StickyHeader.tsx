import { useEffect, useState } from "react";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-header animate-slide-down">
      <div className="max-w-md mx-auto px-6 py-3 flex items-center justify-center">
        <h1 className="font-heading text-sm tracking-wide text-foreground">
          Potobae Studio
        </h1>
        <span className="mx-3 w-[1px] h-3 bg-primary opacity-50" />
        <span className="text-xs tracking-wide text-muted-foreground">
          📸 Photographer
        </span>
      </div>
    </div>
  );
};

export default StickyHeader;
