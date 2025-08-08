// import Script from 'next/script';
import Hero from "@/ui/Hero";
import FAQS from "./FAQS";
import bgImage from "@/images/truck-and-condos-opt.jpg";

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/faq`;
const title = "FAQS - Phoenix Moving Boston (Free Estimate)";
const description =
  "Welcome to the FAQ page for Phoenix Moving Company. Here, you'll find answers to our most frequently asked questions about our services, pricing, and more.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
  // openGraph: {
  //   title,
  //   description,
  //   url: URL,
  //   siteName: 'Phoenix Moving Boston',
  //   images: [
  //     {
  //       url: bgImage.src,
  //     },
  //   ],
  //   locale: 'en-US',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@phoenix_moving',
  //   domain: URL,
  //   title,
  //   description,
  //   images: [BASE_URL + bgImage],
  // },
};

// const schema1 = {
//   '@context': 'https://schema.org',
//   '@type': 'MovingCompany',
//   '@id': URL,
//   name: title,
//   url: URL,
//   logo: BASE_URL + '/logos/logo.png',
//   image: [BASE_URL + bgImage],
//   telephone: '(508) 315-9458',
//   openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 8am-8pm',
//   description: description,
//   address: {
//     '@type': 'PostalAddress',
//     streetAddress: '18 Lakeview Gardens',
//     addressLocality: 'Natick',
//     addressRegion: 'MA',
//     postalCode: '01760',
//   },
//   geo: {
//     '@type': 'GeoCoordinates',
//     latitude: '42.28343',
//     longitude: '-71.3495',
//   },
//   contactPoint: {
//     '@type': 'ContactPoint',
//     telephone: '+1-508-315-9458',
//     contactType: 'customer service',
//   },
//   review: {
//     '@type': 'Review',
//     reviewBody:
//       'Excellent crew. Den and Alex were amazing. Very efficient work , professional approach to workflow. Highly recommend it, I will tell all my friends about this company. Thank you Phoenix Moving.',
//     reviewRating: { '@type': 'Rating', ratingValue: 5 },
//     author: { '@type': 'Person', name: 'A. Jacob' },
//   },
//   areaServed: [
//     {
//       '@type': 'City',
//       name: 'Boston',
//       '@id': 'https://en.wikipedia.org/wiki/Boston',
//     },
//     {
//       '@type': 'City',
//       name: 'Natick',
//       '@id': 'https://en.wikipedia.org/wiki/Natick,_Massachusetts',
//     },
//     {
//       '@type': 'State',
//       name: 'Massachusetts',
//       '@id': 'https://en.wikipedia.org/wiki/Massachusetts',
//     },
//   ],
// };

// const schema2 = {
//   '@context': 'http://schema.org',
//   '@type': 'Product',
//   name: title,
//   aggregateRating: {
//     '@type': 'AggregateRating',
//     ratingValue: '4.98',
//     ratingCount: '143',
//   },
// };

export default async function FaqPage() {
  return (
    <>
      {/* <script
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
      /> */}
      <Hero image={bgImage} title="Questions? Answers." />
      <FAQS />
    </>
  );
}
