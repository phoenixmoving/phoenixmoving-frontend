import Hero from '@/ui/Hero';
import Divider from '@/ui/Divider';
import Info from './Info';
import Locations from './Locations';
import CallToAction from '@/ui/CallToAction';
import Photos from '@/ui/Photos';
import Partners from '@/ui/Partners';
import InterstatePrices from '../pricing/InterstatePrices';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/interstate-moving`;
const title = 'Long Distance Movers - Phoenix Moving Boston (Free Estimate)';
const description =
  'We offer reliable and affordable interstate moving services. Our experienced team will make sure your belongings are safely and securely transported to your destination.';
const bgImage = '/interstate.jpeg';

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

export default function InterstateMoving() {
  return (
    <>
      <Hero image={bgImage} title="Long Distance Movers" />
      <Partners />
      <Info />
      {/* <Divider /> */}
      <Photos />
      <Locations />
      <Divider />
      <InterstatePrices />
      <CallToAction />
    </>
  );
}

// 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
