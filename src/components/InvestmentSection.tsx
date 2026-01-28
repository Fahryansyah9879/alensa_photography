import {
  Heart,
  Camera,
  GraduationCap,
  Users,
  CalendarDays,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const ServiceSection = () => {
  const phoneNumber = '6285133332806';

  const handleServiceClick = (serviceTitle: string) => {
    const message = `Halo Alensa Photography! Saya lihat di website dan tertarik untuk konsultasi layanan "${serviceTitle}". Boleh tanya detail paket dan harganya?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };
  const WhatsAppIcon = () => (
    // Ganti ArrowRight dengan WhatsAppIcon (SVG yang sudah kamu punya)
    <div className='bg-muted p-2 rounded-full group-hover:bg-primary/10 transition-colors'>
      <svg
        className='w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors'
        viewBox='0 0 24 24'
        fill='currentColor'
      >
        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
      </svg>
    </div>
  );

  const services = [
    {
      title: 'Wedding',
      icon: <Heart className='w-5 h-5' />,
      description:
        'Abadikan momen sakral sekali seumur hidup dengan sentuhan elegan.',
    },
    {
      title: 'Prewedding',
      icon: <Camera className='w-5 h-5' />,
      description:
        'Ciptakan memori manis bersama pasangan dengan konsep *cinematic*.',
    },
    {
      title: 'Engagement',
      icon: <Sparkles className='w-5 h-5' />,
      description:
        'Dokumentasikan langkah awal menuju *kebahagiaan* selamanya.',
    },
    {
      title: 'Graduation',
      icon: <GraduationCap className='w-5 h-5' />,
      description:
        'Rayakan keberhasilan studimu dengan foto *portrait* terbaik.',
    },

    {
      title: 'Lainnya',
      icon: <CalendarDays className='w-5 h-5' />,
      description:
        'Butuh jasa foto untuk event lainnya? Yuk, diskusikan sekarang.',
    },
  ];

  return (
    <section className='px-6 py-10'>
      <div className='flex flex-col items-center mb-8'>
        <h2 className='font-heading text-xl tracking-wide text-center uppercase'>
          Professional Services
        </h2>
        <div className='h-[2px] w-10 bg-primary mt-2'></div>
      </div>

      <div className='grid grid-cols-1 gap-3'>
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleServiceClick(service.title)}
            className='group bg-card border border-border rounded-[20px] p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-md active:scale-[0.97] cursor-pointer'
          >
            <div className='flex items-center gap-4'>
              <div className='w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500'>
                {service.icon}
              </div>
              <div className='flex-1'>
                <h3 className='font-heading text-[15px] tracking-wide'>
                  {service.title}
                </h3>
                <p className='text-xs text-muted-foreground line-clamp-1'>
                  {/* Gunakan fungsi formatBoldText di sini jika perlu */}
                  {service.description}
                </p>
              </div>
              <div className='bg-muted p-1.5 rounded-full group-hover:bg-primary/10 transition-colors'>
                <WhatsAppIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
