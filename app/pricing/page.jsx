import Hero from '@/ui/Hero';
import InterstatePrices from './InterstatePrices';
import PackingItems from '@/ui/PackingItems';
import Pricing from '@/components/Pricing';
import bgImage from '@/images/prices.jpg';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/pricing`;
const title = 'Moving Prices & Rates - Phoenix Moving Boston (Free Estimate)';
const description =
  'We offer competitive prices on our moving services. Get a free quote today and start planning your move with our reliable team of professionals.';

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

export default async function PricingPage() {
  return (
    <>
      <Hero image={bgImage} title="Moving Prices & Rates" />
      <Pricing />
      <InterstatePrices />
      <PackingItems />
    </>
  );
}
