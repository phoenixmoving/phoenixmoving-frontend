import { Suspense } from 'react';

import HeroWithBooking from '@/ui/HeroWithBooking';
import Faqs from '@/ui/Faqs';
import Reviews from '@/ui/Reviews';
import CitiesSection from '@/ui/CitiesSection';
import WhyBookSection from '@/ui/WhyBookSection';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';
import bgImage from '@/images/mover-pushing-dolly.jpg';

const URL = process.env.NEXT_PUBLIC_MAIN_URL;
const title = 'Phoenix Moving - 🚚 Boston Moving Compnay (Free Estimate)';
const description =
  'Professional moving company serving the Boston area. We provide fast, reliable, and affordable moving services for residential and commercial customers.';

const keywords = [
  'Movers near Boston MA',
  ' Boston Movers',
  ' Boston Moving Company',
  ' Phoenix Moving is a professional Boston local and long distance moving company with a great reputation and affordable rates',
  ' Boston Movers serving Boston MA and beyond',
  ' Best moving prices',
  ' Best moving rates with 100% satisfaction guaranteed',
];

export const metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: 'Phoenix Moving Boston',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@phoenix_moving',
    domain: URL,
    title,
    description,
  },
};

const schema1 = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': URL,
  name: title,
  url: URL,
  logo: URL + '/logos/logo.png',
  image: bgImage.src,
  telephone: '(508) 315-9458',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 8am-8pm',
  description: description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '18 Lakeview Gardens',
    addressLocality: 'Natick',
    addressRegion: 'MA',
    postalCode: '01760',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '42.28343',
    longitude: '-71.3495',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-508-315-9458',
    contactType: 'customer service',
  },
  review: {
    '@type': 'Review',
    reviewBody:
      'Excellent crew. Den and Alex were amazing. Very efficient work , professional approach to workflow. Highly recommend it, I will tell all my friends about this company. Thank you Phoenix Moving.',
    reviewRating: { '@type': 'Rating', ratingValue: 5 },
    author: { '@type': 'Person', name: 'A. Jacob' },
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Boston',
      '@id': 'https://en.wikipedia.org/wiki/Boston',
    },
    {
      '@type': 'City',
      name: 'Natick',
      '@id': 'https://en.wikipedia.org/wiki/Natick,_Massachusetts',
    },
    {
      '@type': 'State',
      name: 'Massachusetts',
      '@id': 'https://en.wikipedia.org/wiki/Massachusetts',
    },
  ],
};

const schema2 = {
  '@context': 'http://schema.org',
  '@type': 'Product',
  name: title,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.98',
    ratingCount: '143',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema1, null, '\t'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema2, null, '\t'),
        }}
      />
      <HeroWithBooking image={bgImage} title="Boston Moving Company" />
      <Partners />
      <Services />
      <Photos />
      <Pricing />
      <WhyBookSection />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      <Faqs />
      <CitiesSection />
    </>
  );
}
