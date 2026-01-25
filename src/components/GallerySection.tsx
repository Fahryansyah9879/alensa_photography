import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const GallerySection = () => {
  return (
    <section className="px-6 pb-10 opacity-0 animate-fade-in-up animation-delay-200">
      {/* Asymmetric Masonry Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Large Vertical Image */}
        <div className="row-span-2 overflow-hidden rounded-sm">
          <img
            src={gallery1}
            alt="Portrait Photography"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Top Small Square */}
        <div className="aspect-square overflow-hidden rounded-sm">
          <img
            src={gallery2}
            alt="Wedding Photography"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Bottom Small Square */}
        <div className="aspect-square overflow-hidden rounded-sm">
          <img
            src={gallery3}
            alt="Detail Photography"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* View Portfolio Link */}
      <div className="flex items-center justify-center mt-6 group cursor-pointer">
        <span className="text-xs tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          View Portfolio
        </span>
        <ArrowRight className="w-3 h-3 ml-2 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </section>
  );
};

export default GallerySection;
