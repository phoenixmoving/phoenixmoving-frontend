import bgImage from '@/images/storage-services-main.jpg';
import CallToAction from '@/ui/CallToAction';
import CitiesSection from '@/ui/CitiesSection';
import Divider from '@/ui/Divider';
import Faqs from '@/ui/Faqs';
import Hero from '@/ui/Hero';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';
import StorageSection from './StorageSection';
import WhyChooseUs from './WhyChooseUs';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/storage-solutions`;
const title = 'Moving and Storage - Phoenix Moving Boston (Free Estimate)';
const description =
  'Phoenix Moving offers reliable and secure storage services for your moving needs. We provide flexible storage solutions to accommodate your unique requirements.';

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

export default function StorageSolutions() {
  return (
    <>
      <Hero image={bgImage} title="Moving and Storage" />
      <Partners />
      <StorageSection />
      <Divider />
      <WhyChooseUs />
      <Photos />
      <CallToAction />
      <Faqs />
      <CitiesSection />
    </>
  );
}
