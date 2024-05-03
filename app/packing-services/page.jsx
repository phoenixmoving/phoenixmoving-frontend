import CallToAction from '@/ui/CallToAction';
import Faqs from '@/ui/Faqs';
import Hero from '@/ui/Hero';
import Photos from '@/ui/Photos';
import PackingItems from '@/ui/PackingItems';
import Info from './Info';
import Packages from './Packages';
import Partners from '@/ui/Partners';
import bgImage from '@/images/mover-packing-kitchen.jpg';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/packing-services`;
const title = 'Packing Services - Phoenix Moving Boston (Free Estimate)';
const description =
  'A professional packing and moving services company. Our experienced team is dedicated to providing the best quality service and customer satisfaction.';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: 'Phoenix Moving Boston',
    images: [
      {
        url: bgImage.src,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@phoenix_moving',
    domain: URL,
    title,
    description,
    images: [BASE_URL + bgImage],
  },
};

export default function PackingServices() {
  return (
    <>
      <Hero image={bgImage} title="Packing Services & Supplies" />
      <Partners />
      <Info />
      <PackingItems />
      <Packages />
      <Photos />
      <CallToAction />
      <Faqs />
    </>
  );
}
