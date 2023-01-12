import Hero from '@/ui/Hero';
import Partners from '@/ui/Partners';
import Info from './Info';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import Faqs from '@/ui/Faqs';
import Photos from '@/ui/Photos';
import CitiesSection from '@/ui/CitiesSection';

export default function StorageSolutions() {
  return (
    <>
      <Hero image="/storage-services-main.jpg" title="Moving and Storage" />
      <Partners />
      <Info />
      <CTA />
      <Faqs />
      <CitiesSection />
      <Photos />
      <CallToAction />
    </>
  );
}
