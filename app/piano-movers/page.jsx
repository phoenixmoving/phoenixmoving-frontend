import Hero from '@/ui/Hero';
import Info from './Info';
import CallToAction from '@/ui/CallToAction';
import Photos from '@/ui/Photos';
import WhyBookSection from '@/ui/WhyBookSection';
import CitiesSection from '@/ui/CitiesSection';
import Faqs from '@/ui/Faqs';
import bgImage from '@/images/piano-movers.jpg';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/piano-movers`;
const title = 'Piano Movers - Phoenix Moving Boston (Free Estimate)';
const description =
  'We provide experienced and reliable piano moving services, ensuring your piano is safe and secure during transport. Contact us today for a free quote!';

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

export default function page() {
  return (
    <>
      <Hero image={bgImage} title="Piano Movers" />
      <Info />
      <WhyBookSection />
      <Photos />
      <CallToAction />
      <Faqs />
      <CitiesSection />
    </>
  );
}
