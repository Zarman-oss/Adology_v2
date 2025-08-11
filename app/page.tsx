import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/Hero';
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
      <FeatureSection />
      <WhyAdology />
      <Footer />
    </>
  );
}
