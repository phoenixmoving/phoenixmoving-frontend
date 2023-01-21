import Hero from '@/ui/Hero';
import Info from './Info';
import CallToAction from '@/ui/CallToAction';
import Photos from '@/ui/Photos';
import WhyBookSection from '@/ui/WhyBookSection';
import CitiesSection from '@/ui/CitiesSection';
import Faqs from '@/ui/Faqs';
import CTA from '@/ui/CTA';

export default function page() {
  return (
    <>
      <Hero image="/piano-movers.jpg" title="Piano Movers" />
      <Info />
      <WhyBookSection />
      <CTA />
      <Faqs />
      <CitiesSection />
      <Photos />
      <CallToAction />
    </>
  );
}
