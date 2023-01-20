import { Suspense } from 'react';
import HeroWithBooking from '@/ui/HeroWithBooking';
import Pricing from './Pricing';
import CTA from '@/ui/CTA';
import Services from './Services';
import Divider from '@/ui/Divider';
import Faqs from '@/ui/Faqs';
import Reviews from '@/ui/Reviews';
import Contact from '@/ui/Contact';
import CitiesSection from '@/ui/CitiesSection';
import WhyBookSection from '@/ui/WhyBookSection';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';

export default function Home() {
  return (
    <>
      <HeroWithBooking
        image={'/mover-pushing-dolly.jpg'}
        title="Boston Moving Company"
      />
      <Partners />
      <Services />
      <Photos />
      <Pricing />
      <WhyBookSection />
      <CTA />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      <Faqs />
      <Divider />
      <CitiesSection />
      <Contact />
    </>
  );
}
