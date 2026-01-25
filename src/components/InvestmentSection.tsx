import { Check, Sparkles } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section className="px-6 py-10">
      {/* Section Heading - Friendly */}
      <h2 className="font-heading text-xl tracking-wide text-center mb-8 animate-bounce-in-up stagger-5">
        Pilih Paketmu 📸
      </h2>

      <div className="space-y-4">
        {/* Basic Card */}
        <div className="bg-card border border-border rounded-[20px] p-6 hover-lift animate-bounce-in-up stagger-5">
          <h3 className="font-heading text-lg tracking-wide mb-1">
            Basic Session
          </h3>
          <p className="text-primary text-sm font-medium mb-4">Mulai Rp 350k</p>
          
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>1 jam sesi foto</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>15 foto edit</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>Soft file via Google Drive</span>
            </li>
          </ul>
        </div>

        {/* Graduation Special Card - Featured */}
        <div className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-[20px] p-6 hover-lift animate-bounce-in-up stagger-6">
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Best Seller
          </div>
          
          <h3 className="font-heading text-lg tracking-wide mb-1 mt-2">
            Graduation Special
          </h3>
          <p className="text-accent text-sm font-medium mb-4">Mulai Rp 550k</p>
          
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-primary-foreground/90">
              <Check className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
              <span>2 jam sesi foto</span>
            </li>
            <li className="flex items-center text-sm text-primary-foreground/90">
              <Check className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
              <span>30 foto edit</span>
            </li>
            <li className="flex items-center text-sm text-primary-foreground/90">
              <Check className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
              <span>Semua raw file</span>
            </li>
            <li className="flex items-center text-sm text-primary-foreground/90">
              <Check className="w-4 h-4 mr-3 text-accent flex-shrink-0" />
              <span>1 video teaser 30 detik</span>
            </li>
          </ul>
        </div>

        {/* Premium Card */}
        <div className="bg-card border border-border rounded-[20px] p-6 hover-lift animate-bounce-in-up stagger-6">
          <h3 className="font-heading text-lg tracking-wide mb-1">
            Premium Package
          </h3>
          <p className="text-primary text-sm font-medium mb-4">Mulai Rp 750k</p>
          
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>3 jam sesi foto</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>Semua foto edit + raw</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>Album fisik 20 halaman</span>
            </li>
            <li className="flex items-center text-sm text-muted-foreground">
              <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
              <span>Video cinematic 1 menit</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
