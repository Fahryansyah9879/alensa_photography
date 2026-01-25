import ProfileHeader from "@/components/ProfileHeader";
import GallerySection from "@/components/GallerySection";
import InvestmentSection from "@/components/InvestmentSection";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto pb-8">
        <ProfileHeader />
        <GallerySection />
        <InvestmentSection />
        <CTAButton />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
