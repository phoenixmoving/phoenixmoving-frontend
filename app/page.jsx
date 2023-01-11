import { Suspense } from 'react';
// import Script from 'next/script';
import HeroWithBooking from '@/ui/HeroWithBooking';
import Pricing from './Pricing';
import CTA from '@/ui/CTA';
import Services from './Services';
// import Test from './Test';
import Divider from '@/ui/Divider';
import Faqs from '@/ui/Faqs';
// import Features from '@/ui/Features';
import Reviews from '@/ui/Reviews';
// import CallToAction from '@/ui/CallToAction';
import Contact from '@/ui/Contact';
import CitiesSection from '@/ui/CitiesSection';
import WhyBookSection from '@/ui/WhyBookSection';
import Partners from '@/ui/Partners';
// import InstagramFeeds from '@/ui/InstagramFeed';
import Photos from '@/ui/Photos';

const URL = process.env.NEXT_PUBLIC_MAIN_URL;

const schema1 = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': URL,
  name: 'Phoenix Moving | Boston - Chicago from $2950&lrm;. Boston to Chicago Movers',
  url: URL,
  logo: `${URL}/_next/image?url=%2Flogos%2Flogo.png&w=384&q=75`,
  image: [`${URL}/_next/image?url=%2Fmover-pushing-dolly.png&w=2048&q=75`],
  telephone: '(508) 315-9458',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 8am-8pm',
  description:
    'Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states.',
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
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL}/#webpage`,
      url: URL,
      name: 'Phoenix Moving | Boston - Chicago from $2950&lrm;. Boston to Chicago Movers',
      isPartOf: { '@id': `${URL}/#website` },
      datePublished: '2022-11-26T10:23:12+00:00',
      dateModified: '2022-11-26T12:13:32+00:00',
      description:
        'Fully Licensed and Insured Reliable Boston Moving Company. Phoenix Movers are professionals and ready to move across MA and other states.',
      inLanguage: 'en-US',
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: [`${URL}`],
        },
      ],
    },
  ],
};

const schema2 = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  name: 'Phonix Moving Boston',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Landing Page',
      item: 'https://www.gophoenixmoving.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Moving & Packing Services',
      item: 'https://www.gophoenixmoving.com/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Phoenix Moving Boston - 🚚 Make Moving Chill (Free Estimate)',
      item: 'https://www.gophoenixmoving.com/#',
    },
  ],
};

const schema3 = {
  '@context': 'http://schema.org',
  '@type': 'Product',
  name: 'Boston to Chicago IL Movers',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.98',
    ratingCount: '143',
  },
};

const p1 =
  "Welcome to Joe's Moving Company, a premier moving company that provides high-quality service to customers throughout the United States. We specialize in long-distance, commercial, and residential moves, providing a stress-free and hassle-free experience. Our team of highly-trained and experienced movers will ensure that your possessions are packed and moved securely and safely. We take great pride in offering top-notch customer service and a wide range of moving services. Our services include packing and unpacking, loading and unloading, and furniture assembly. We also offer storage solutions for those who need extra space for their belongings. With our competitive rates and flexible payment options, you can rest assured that you're getting the best value for your money. Contact us today to learn more about our services and to get a free quote.";

export default function Home() {
  return (
    <>
      {/* <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
      /> */}
      <HeroWithBooking
        image={'/mover-pushing-dolly.jpg'}
        title="Boston Moving Company"
      />
      <Partners />
      <Services />
      <Photos />
      <Pricing />
      <WhyBookSection />
      {/* <Test /> */}
      {/* <Features /> */}
      <CTA />
      <Suspense fallback="loading...">
        <Reviews />
      </Suspense>
      {/* <Suspense fallback="loading...">
        <InstagramFeeds />
      </Suspense> */}
      {/* <Divider /> */}
      <Faqs />
      <Divider />
      <CitiesSection />
      {/* <CallToAction /> */}
      <Contact />
    </>
  );
}
