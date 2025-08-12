import FeatureSection from '@/components/FeatureSection';
import FeatureSection2 from '@/components/FeatureSection2';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
import ModuleSection from '@/components/ModuleSection';
import Navbar from '@/components/Navbar';
import Problems from '@/components/ProblemSection';
import SuccessStory from '@/components/SuccessStory';
import WhyAdology from '@/components/WhyAdology';
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Problems />
      <SuccessStory />
      <ModuleSection />
      <FeatureSection />
      <FeatureSection2 />
      <WhyAdology />
      <Footer />
    </>
  );
}
