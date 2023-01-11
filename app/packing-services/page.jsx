import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import Faqs from '@/ui/Faqs';
import Hero from '@/ui/Hero';
import Photos from '@/ui/Photos';
import PackingItems from '@/ui/PackingItems';
import Info from './Info';
import Packages from './Packages';
import Partners from '@/ui/Partners';

export default function PackingServices() {
  return (
    <>
      <Hero image="/services.jpeg" title="Packing Services & Supplies" />
      <Partners />
      <Info />
      <PackingItems />
      <Packages />
      <CTA />
      <Faqs />
      <Photos />
      <CallToAction />
    </>
  );
}
