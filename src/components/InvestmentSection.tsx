import { Check, Sparkles } from 'lucide-react';

const InvestmentSection = () => {
  return (
    <section className='px-6 py-10'>
      {/* Section Heading - Friendly */}
      <h2 className='font-heading text-xl tracking-wide text-center mb-8 animate-bounce-in-up stagger-5'>
        Pilih Paketmu 📸
      </h2>

      <div className='space-y-4'>
        {/* Basic Card */}
        <div className='group bg-card border border-border rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 animate-bounce-in-up stagger-5 cursor-pointer'>
          <h3 className='font-heading text-lg tracking-wide mb-1 group-hover:text-primary transition-colors'>
            Basic Session
          </h3>
          <p className='text-primary text-sm font-medium mb-4'>Mulai Rp 350k</p>
          <ul className='space-y-2'>
            {[
              '1 jam sesi foto',
              '15 foto edit',
              'Soft file via Google Drive',
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center text-sm text-muted-foreground'
              >
                <Check className='w-4 h-4 mr-3 text-primary flex-shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Graduation Special Card - Featured */}
        <div className='relative group bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(var(--primary),0.3)] animate-bounce-in-up stagger-6 cursor-pointer '>
          {/* Badge */}
          <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-lg group-hover:scale-110 transition-transform'>
            <Sparkles className='w-3 h-3' />
            Best Seller
          </div>

          <h3 className='font-heading text-lg tracking-wide mb-1 mt-2'>
            Graduation Special
          </h3>
          <p className='text-accent text-sm font-medium mb-4'>Mulai Rp 550k</p>

          <ul className='space-y-2'>
            {[
              '2 jam sesi foto',
              '30 foto edit',
              'Semua raw file',
              '1 video teaser 30 detik',
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center text-sm text-primary-foreground/90'
              >
                <Check className='w-4 h-4 mr-3 text-accent flex-shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Card */}
        <div className='group bg-card border border-border rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 animate-bounce-in-up stagger-6 cursor-pointer'>
          <h3 className='font-heading text-lg tracking-wide mb-1 group-hover:text-primary transition-colors'>
            Premium Package
          </h3>
          <p className='text-primary text-sm font-medium mb-4'>Mulai Rp 750k</p>
          <ul className='space-y-2'>
            {[
              '3 jam sesi foto',
              'Semua foto edit + raw',
              'Album fisik 20 halaman',
              'Video cinematic 1 menit',
            ].map((item, i) => (
              <li
                key={i}
                className='flex items-center text-sm text-muted-foreground'
              >
                <Check className='w-4 h-4 mr-3 text-primary flex-shrink-0' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
