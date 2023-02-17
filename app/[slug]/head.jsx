import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';
import Script from 'next/script';

export async function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}

export async function getCityState(slug) {
  let interstateCity = null;
  states.map((s) => {
    if (s.slug && s.slug === slug) {
      interstateCity = s;
    }

    if (s.cities) {
      s.cities.find((c) => {
        if (c.slug === slug) {
          interstateCity = c;
        }
      });
    }
  });
  return interstateCity;
}

export default async function Head({ params }) {
  const { slug } = params;
  let city = await getCity(slug);

  if (!city) {
    city = await getCityState(slug);
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

  const keywords = `${city?.name} Moving Company, long-distance, commercial, residential moves, stress-free, hassle-free experience, highly-trained and experienced movers, packing and unpacking, loading and unloading, furniture assembly, storage solutions, competitive rates, flexible payment options`;

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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      reviewCount: '143',
    },
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

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#fff" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG Card */}
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/twittercard.png" />
      {/* End OG Card */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@phoenix_moving" />
      <meta property="twitter:domain" content={URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/twittercard.png" />
      {/* End Twitter Card */}

      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={URL} precedence="default" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      /> */}
      <Script
        id="app-ld-json"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema1, null, '\t'),
        }}
      />
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      /> */}
    </>
  );
}
