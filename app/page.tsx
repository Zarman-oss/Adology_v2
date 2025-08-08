import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Problems from '@/components/ProblemSection';
import SuccessStory from '@/components/SuccessStory';
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Problems />
      <SuccessStory />
    </>
  );
}
