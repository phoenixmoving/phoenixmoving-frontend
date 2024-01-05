import Hero from '@/ui/Hero';
import Info from './Info';
import bgImage from '@/images/prices.jpg';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/terms`;
const title = 'Privacy Policy - Phoenix Moving Boston (Free Estimate)';
const description = 'Privacy Policy for Phoenix Moving & Storage';

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

export default async function PrivacyPage() {
  return (
    <>
      <Hero image={bgImage} title="Privacy Policy" />
      <Info />
    </>
  );
}
