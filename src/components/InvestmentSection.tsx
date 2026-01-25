import { Check } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section className="px-6 py-10 opacity-0 animate-fade-in-up animation-delay-400">
      {/* Section Heading */}
      <h2 className="font-serif text-xl tracking-wide text-center mb-8">
        INVESTMENT
      </h2>

      <div className="space-y-4">
        {/* Essential Card */}
        <div className="bg-card border border-border rounded-sm p-6 hover-lift">
          <h3 className="font-serif text-lg tracking-wide mb-1">
            ESSENTIAL SESSION
          </h3>
          <p className="text-gold text-sm mb-4">From Rp 850k</p>
          
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-3 h-3 mr-3 text-gold flex-shrink-0" />
              <span>2 hours session</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-3 h-3 mr-3 text-gold flex-shrink-0" />
              <span>20 edited photographs</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-3 h-3 mr-3 text-gold flex-shrink-0" />
              <span>Digital gallery access</span>
            </li>
          </ul>
        </div>

        {/* Signature Card - Premium Dark */}
        <div className="bg-primary text-primary-foreground rounded-sm p-6 hover-lift">
          <h3 className="font-serif text-lg tracking-wide mb-1">
            SIGNATURE STORY
          </h3>
          <p className="text-gold text-sm mb-4">From Rp 1.5M</p>
          
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-primary-foreground/80">
              <Check className="w-3 h-3 mr-3 text-gold flex-shrink-0" />
              <span>4 hours coverage</span>
            </li>
            <li className="flex items-center text-sm text-primary-foreground/80">
              <Check className="w-3 h-3 mr-3 text-gold flex-shrink-0" />
              <span>All edited files included</span>
            </li>
            <li className="flex items-center text-sm text-primary-foreground/80">
              <Check className="w-3 h-3 mr-3 text-gold flex-shrink-0" />
              <span>Premium photo album</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
