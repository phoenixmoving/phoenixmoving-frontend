import Hero from '@/ui/Hero';
import Info from './Info';
import Included from './Included';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import CitiesSection from '@/ui/CitiesSection';
import Photos from '@/ui/Photos';

export default function LocalMoving() {
  return (
    <>
      <Hero image="/two-movers-and-dolly.jpg" title="Boston Local Movers" />
      <Included />
      <Info />
      <CTA />
      <CitiesSection />
      <Photos />
      <CallToAction />
    </>
  );
}
