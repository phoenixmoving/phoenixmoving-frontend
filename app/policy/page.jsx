import Hero from '@/ui/Hero';
import Info from './Info';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/policy`;
const title = 'Company Policy - Phoenix Moving Boston (Free Estimate)';
const description =
  'Our moving company policy page outlines all the services we provide. Read our policies to learn more about how we work and what to expect when you hire us.';

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

export default async function PolicyPage() {
  return (
    <>
      <Hero image={bgImage} title="Company Policy" />
      <Info />
    </>
  );
}
