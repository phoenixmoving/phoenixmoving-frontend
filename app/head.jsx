import Script from 'next/script';

const URL = process.env.NEXT_PUBLIC_MAIN_URL;

const title = 'Phoenix Moving - 🚚 Boston Moving Compnay (Free Estimate)';
const description =
  'Professional moving company serving the Boston area. We provide fast, reliable, and affordable moving services for residential and commercial customers.';

const keywords =
  'boston to ny moving company, from boston to new york moving, Boston movers, Boston moving company, Boston moving services, moving company in boston, boston moving storage company, Boston relocation company, Boston relocation service, Boston office relocation, ma relocation, massachusets relocation, massachusets relocation company, Massachusetts storage, boston storage company, massachusets moving, massachusets moving company, moving boston storage, moving companies in boston, commercial boston movers, moving packing supplies, student moving discounts, affordable moving company';

const schema1 = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': URL,
  name: 'Phoenix Moving | Boston - Chicago from $2950. Boston to Chicago Movers',
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
      name: 'Phoenix Moving | Boston - Chicago from $2950. Boston to Chicago Movers',
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

export default function Head() {
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
      <Script
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      />
      <Script
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }}
      />
      <Script
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }}
      />
    </>
  );
}
