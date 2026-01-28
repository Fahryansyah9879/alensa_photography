import { useRef } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const ParallaxImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-[20px] parallax-container group relative w-full ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
      />
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className='px-6 pb-10'>
      <div className='grid grid-cols-2 gap-3 animate-bounce-in-up stagger-4'>
        {/* BAGIAN ATAS: Besar Kiri, 2 Kecil Kanan */}
        {/* h-full digunakan agar gambar ini mengisi penuh tinggi 2 baris di sampingnya */}
        <ParallaxImage
          src={gallery1}
          alt='Gallery 1'
          className='row-span-2 h-full min-h-[250px]'
        />
        <ParallaxImage
          src={gallery2}
          alt='Gallery 2'
          className='aspect-square'
        />
        <ParallaxImage
          src={gallery3}
          alt='Gallery 3'
          className='aspect-square'
        />

        {/* BAGIAN BAWAH: 2 Kecil Kiri, Besar Kanan */}
        <ParallaxImage
          src={gallery4}
          alt='Gallery 5'
          className='aspect-square'
        />
        <ParallaxImage
          src={gallery5}
          alt='Gallery 6'
          className='row-span-2 h-full min-h-[250px]'
        />
        {/* Gambar ke-7 untuk menutup gap di bawah gallery 5 */}
        <ParallaxImage
          src={gallery6}
          alt='Gallery 7'
          className='aspect-square'
        />
      </div>
    </section>
  );
};
export default GallerySection;
