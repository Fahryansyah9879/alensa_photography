import { Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg 
    className="w-5 h-5" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="px-6 py-10 opacity-0 animate-fade-in-up animation-delay-600">
      {/* Thin Separator */}
      <div className="w-12 h-[1px] bg-border mx-auto mb-8" />
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-gold transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-gold transition-colors duration-300"
          aria-label="TikTok"
        >
          <TikTokIcon />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-[10px] tracking-wide text-muted-foreground/60">
        Handcrafted for Professional Creators
      </p>
    </footer>
  );
};

export default Footer;
