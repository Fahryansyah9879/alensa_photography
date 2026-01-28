import ProfileHeader from '@/components/ProfileHeader';
import GallerySection from '@/components/GallerySection';
import InvestmentSection from '@/components/InvestmentSection';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';
import ServiceSection from '@/components/InvestmentSection';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <StickyHeader />
      <div className='max-w-md mx-auto pb-8'>
        <ProfileHeader />
        <GallerySection />
        <ServiceSection />
        <CTAButton />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
