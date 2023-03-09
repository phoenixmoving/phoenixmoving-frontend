import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
// import CallToAction from '@/ui/CallToAction';
import InterstatePrices from './InterstatePrices';
// import PricingTable from './PricingTable';
import PackingItems from '@/ui/PackingItems';
import CTA from '@/ui/CTA';
import Contact from '@/ui/Contact';
import Pricing from '../Pricing';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/pricing`;
const title = 'Moving Prices & Rates - Phoenix Moving Boston (Free Estimate)';
const description =
  'We offer competitive prices on our moving services. Get a free quote today and start planning your move with our reliable team of professionals.';

const bgImage = '/prices.jpg';

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

export default async function PricingPage() {
  return (
    <>
      <Hero image={bgImage} title="Moving Prices & Rates" />
      <Pricing />
      <Divider />
      <InterstatePrices />
      <PackingItems />
      <CTA />
      <Contact />
    </>
  );
}
