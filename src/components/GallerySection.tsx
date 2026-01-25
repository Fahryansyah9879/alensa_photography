import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { useParallax } from "@/hooks/useParallax";

const ParallaxImage = ({ 
  src, 
  alt, 
  className 
}: { 
  src: string; 
  alt: string; 
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const offset = useParallax(ref, 0.05);

  return (
    <div ref={ref} className={`overflow-hidden rounded-[20px] parallax-container ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        style={{ 
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="px-6 pb-10">
      {/* Asymmetric Masonry Grid with Rounded Corners */}
      <div className="grid grid-cols-2 gap-3 animate-bounce-in-up stagger-4">
        {/* Large Vertical Image */}
        <ParallaxImage 
          src={gallery1} 
          alt="Graduation Photography" 
          className="row-span-2"
        />

        {/* Top Small Square */}
        <ParallaxImage 
          src={gallery2} 
          alt="Portrait Photography" 
          className="aspect-square"
        />

        {/* Bottom Small Square */}
        <ParallaxImage 
          src={gallery3} 
          alt="Couple Photography" 
          className="aspect-square"
        />
      </div>

      {/* View Portfolio Link */}
      <div className="flex items-center justify-center mt-6 group cursor-pointer animate-bounce-in-up stagger-5">
        <span className="text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          View Portfolio
        </span>
        <ArrowRight className="w-4 h-4 ml-2 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </section>
  );
};

export default GallerySection;
