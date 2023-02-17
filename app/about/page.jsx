import Hero from '@/ui/Hero';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import CitiesSection from '@/ui/CitiesSection';
import Photos from '@/ui/Photos';
import Info from './Info';
import Faqs from '@/ui/Faqs';

export default function AboutUs() {
  return (
    <>
      <Hero image="/about.jpg" title="About Us" />
      <Info />
      <CTA />
      <CitiesSection />
      <Faqs />
      <Photos />
      <CallToAction />
    </>
  );
}
