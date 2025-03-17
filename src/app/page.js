import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import FeaturesTwo from '@/components/FeaturesTwo';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <FeaturesTwo />
      <FAQ />
      <CallToAction />
    </>
  );
}
