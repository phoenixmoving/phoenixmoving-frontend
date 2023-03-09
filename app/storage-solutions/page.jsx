import Hero from '@/ui/Hero';
import Partners from '@/ui/Partners';
import Info from './Info';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import Faqs from '@/ui/Faqs';
import Photos from '@/ui/Photos';
import CitiesSection from '@/ui/CitiesSection';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/storage-solutions`;
const title = 'Moving and Storage - Phoenix Moving Boston (Free Estimate)';
const description =
  'Phoenix Moving offers reliable and secure storage services for your moving needs. We provide flexible storage solutions to accommodate your unique requirements.';

const bgImage = '/storage-services-main.jpg';

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
        url: BASE_URL + bgImage,
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

export default function StorageSolutions() {
  return (
    <>
      <Hero image={bgImage} title="Moving and Storage" />
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
