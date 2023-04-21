import Hero from '@/ui/Hero';
import Info from './Info';
import Included from './Included';
import CallToAction from '@/ui/CallToAction';
import CTA from '@/ui/CTA';
import CitiesSection from '@/ui/CitiesSection';
import Photos from '@/ui/Photos';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${BASE_URL}/local-moving`;
const title = 'Local Moving Services - Phoenix Moving Boston (Free Estimate)';
const description =
  'We are your local moving experts! Our experienced movers can help you pack, load, and relocate your belongings quickly and safely. Call us today to get started!';

const bgImage = '/two-movers-and-dolly.jpg';

const VERCEL_URL = BASE_URL + bgImage;

export const metadata = {
  metadataBase: VERCEL_URL,
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

export default function LocalMoving() {
  return (
    <>
      <Hero image={bgImage} title="Local Moving Services" />
      <Included />
      <Info />
      <CTA />
      <CitiesSection />
      <Photos />
      <CallToAction />
    </>
  );
}
