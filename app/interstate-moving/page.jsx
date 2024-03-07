import bgImage from '@/images/interstate.jpeg';
import CallToAction from '@/ui/CallToAction';
import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';
import InterstatePrices from '../pricing/InterstatePrices';
import InterstateSection from './InterstateSection';
import Locations from './Locations';
import WhyChooseUs from './WhyChooseUs';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/interstate-moving`;
const title =
  'Long Distance Moving Services - Phoenix Moving Boston (Free Estimate)';
const description =
  'We offer reliable and affordable interstate moving services. Our experienced team will make sure your belongings are safely and securely transported to your destination.';

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

export default function InterstateMoving() {
  return (
    <>
      <Hero image={bgImage} title="Long Distance Moving Services" />
      <Partners />
      <InterstateSection />
      <Divider />
      <WhyChooseUs />
      <Photos />
      <CallToAction />
      <InterstatePrices />
      <Divider />
      <Locations />
    </>
  );
}
