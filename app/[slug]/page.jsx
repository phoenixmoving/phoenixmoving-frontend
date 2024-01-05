import { notFound } from 'next/navigation';
import Hero from '@/ui/Hero';
import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';
import Info from './Info';
import InterstateInfo from './InterstateInfo';
import Faqs from '@/ui/Faqs';
import Stats from './Stats';
import Conclusion from './Conclusion';
import Services from './Services';
import WhyBook from './WhyBook';
import Advantages from './Advantages';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';
import Divider from '@/ui/Divider';
import CitiesSection from '@/ui/CitiesSection';
import bgImage from '@/images/mover-pushing-dolly.jpg';

export const dynamicParams = true;

export async function generateStaticParams() {
  let localCities = cities.map((city) => ({
    slug: city.slug,
  }));

  let arr = [];

  states.map((s) => {
    if (s.slug) {
      let gg = { slug: s.slug };
      arr.push(gg);
    }
    if (s.cities) {
      s.cities.map((c) => {
        let gg = { slug: c.slug };
        arr.push(gg);
      });
    }
  });

  const allSlugs = localCities.concat(arr);
  return allSlugs;
}

async function getCity(slug) {
  let arr = [];

  states.map((s) => {
    if (s.slug) {
      arr.push(s);
    }
    if (s.cities) {
      s.cities.map((c) => {
        arr.push(c);
      });
    }
  });

  const allSlugs = cities.concat(arr);
  return allSlugs.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }) {
  const city = await getCity(params.slug);

  const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/${city?.slug}`;

  const title =
    city && city?.interstate
      ? `Movers from Boston to ${city?.name} - Phoenix Moving (Free Estimate)`
      : `${city?.fullName} - Phoenix Moving ${city?.name} (Free Estimate)`;

  const description =
    city && city?.interstate
      ? `Reliable Movers from Boston to ${city.name}. The Most Trusted Boston to ${city.name} Moving Company, Get a Free Quote Online (NO Registration Required).`
      : `${city?.name} Movers, Professional Moving Company in ${city?.name}, ${city?.state}. The most reliable moving company near ${city?.name}. Free Quote Online (NO Registration Required).`;

  const keywords = [
    `Movers near ${city?.name} MA`,
    `${city?.name} Movers`,
    `${city?.name} Moving Company`,
    'Phoenix Moving is a professional Boston local and long distance moving company with a great reputation and affordable rates',
    `${city?.name} Movers serving ${city?.name} MA and beyond`,
    'Best moving prices',
    'Best moving rates with 100% satisfaction guaranteed',
  ];

  return {
    title: city ? title : 'Not Found',
    description,
    keywords: city && city?.interstate ? [] : keywords,
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
      images: [bgImage.src],
    },
  };
}

const stats = [
  { label: 'Transactions every 24 hours', value: '44 million' },
  { label: 'Assets under holding', value: '$119 trillion' },
  { label: 'New users annually', value: '46,000' },
];

export default async function CityPage({ params }) {
  const { slug } = params;
  const city = await getCity(slug);

  const heroTitle = city?.interstate
    ? `Movers from Boston to ${city?.name}`
    : `${city?.fullName}`;

  if (!city) {
    notFound();
  }

  const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/${city?.slug}`;

  const title =
    city && city?.interstate
      ? `Movers from Boston to ${city?.name} - Phoenix Moving (Free Estimate)`
      : `${city?.fullName} - Phoenix Moving ${city?.name} (Free Estimate)`;

  const description =
    city && city?.interstate
      ? `Reliable Movers from Boston to ${city.name}. The Most Trusted Boston to ${city.name} Moving Company, Get a Free Quote Online (NO Registration Required).`
      : `${city?.name} Movers, Professional Moving Company in ${city?.name}, ${city?.state}. The most reliable moving company near ${city?.name}. Free Quote Online (NO Registration Required).`;

  const icon =
    city && city.interstate
      ? `${process.env.NEXT_PUBLIC_MAIN_URL}/logos/logo.png`
      : `${process.env.NEXT_PUBLIC_MAIN_URL + city?.icon}`;

  const schema1 = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': URL,
    name: title,
    url: URL,
    logo: icon,
    image: [icon],
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
      {city?.state ? (
        <Hero
          image={
            require(`/images/cities/${city.name
              .replace(/\s/g, '')
              .toLocaleLowerCase()}-ma.jpeg`) ?? bgImage
          }
          title={heroTitle}
        />
      ) : (
        <Hero image={bgImage} title={heroTitle} />
      )}
      <Partners />
      {city?.state && <Info city={city} />}
      {city?.interstate && <InterstateInfo city={city} />}
      {city?.state && <WhyBook city={city} />}
      <Stats />
      {city?.state && <Advantages city={city} />}
      <Photos />
      <Services city={city} />
      <Faqs />
      {city?.state && <Divider />}
      {city?.state && <Conclusion city={city} />}
      <CitiesSection />
    </>
  );
}
