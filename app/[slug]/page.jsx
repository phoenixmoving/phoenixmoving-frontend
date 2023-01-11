import { notFound } from 'next/navigation';
// import Script from 'next/script';
import Hero from '@/ui/Hero';
import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';
import Info from './Info';
import Faqs from '@/ui/Faqs';
import Stats from './Stats';
import Services from './Services';
import CTA from '@/ui/CTA';
import Advantages from './Advantages';
// import Divider from '@/ui/Divider';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';
import Contact from '@/ui/Contact';

export const dynamicParams = true;

export async function generateStaticParams() {
  let localCities = cities.map((city) => ({
    slug: city.slug,
  }));

  // const filterdStates = states.filter((s) => s.cities);

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
  // let localCities = cities.map((city) => ({
  //   slug: city.slug,
  // }));

  // const filterdStates = states.filter((s) => s.cities);

  let arr = [];

  states.map((s) => {
    // s.cities.map((c) => {
    //   arr.push(c);
    // });
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
  // return allSlugs;
  return allSlugs.find((c) => c.slug === slug);
}

// async function getCityState(slug) {
//   const filterdStates = states.filter((s) => s.cities && s.cities.length > 0);
//   let interstateCity = null;
//   filterdStates.map((s) => {
//     s.cities.find((c) => {
//       if (c.slug === slug) {
//         interstateCity = c;
//       }
//     });
//   });
//   return interstateCity;
// }

export default async function CityPage({ params }) {
  const { slug } = params;
  const city = await getCity(slug);

  // console.log(city);

  // if (slug.includes('boston-')) {
  //   city = await getCityState(slug);
  // } else {
  //   city = await getCity(slug);
  // }

  const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/${city?.slug}`;
  const title = city?.interstate
    ? `Movers from Boston to ${city?.name} - Phoenix Moving (Free Estimate)`
    : `${city?.fullName} - Phoenix Moving ${city?.name} (Free Estimate)`;

  // const title = `${city?.fullName} - Phoenix Moving ${city?.name} (Free Estimate)`;

  const description = city?.interstate
    ? `Reliable Movers from Boston to ${city.name}. The Most Trusted Boston to ${city.name} Moving Company, Get a Free Quote Online (NO Registration Required).`
    : `Professional Moving Company in ${city?.name} ${city?.state}. The most Reliable ${city?.name} Movers, Get a Free Quote Online (NO Registration Required).`;

  // const description = `Professional Moving Company in ${city?.name} ${city?.state}. The most Reliable ${city?.name} Movers, Get a Free Quote Online (NO Registration Required).`;

  const heroTitle = city?.interstate
    ? `${city?.fullName}`
    : `Top-rated ${city?.fullName}`;

  // const schema1 = {
  //   '@context': 'https://schema.org',
  //   '@type': 'MovingCompany',
  //   '@id': URL,
  //   name: title,
  //   url: URL,
  //   logo: `${process.env.NEXT_PUBLIC_MAIN_URL}/_next/image?url=%2Flogos%2Flogo.png&w=384&q=75`,
  //   image: [
  //     `${process.env.NEXT_PUBLIC_MAIN_URL}/_next/image?url=%2Fmover-pushing-dolly.jpg&w=3840&q=75`,
  //   ],
  //   telephone: '(508) 315-9458',
  //   openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 8am-8pm',
  //   aggregateRating: {
  //     '@type': 'AggregateRating',
  //     ratingValue: '4.98',
  //     reviewCount: '132',
  //   },
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
  //   '@graph': [
  //     {
  //       '@type': 'WebPage',
  //       '@id': `${URL}#webpage`,
  //       url: URL,
  //       name: title,
  //       isPartOf: { '@id': `${URL}#website` },
  //       datePublished: '2022-11-26T10:23:12+00:00',
  //       dateModified: '2022-11-26T12:13:32+00:00',
  //       description: description,
  //       inLanguage: 'en-US',
  //       potentialAction: [
  //         {
  //           '@type': 'ReadAction',
  //           target: [`${URL}`],
  //         },
  //       ],
  //     },
  //   ],
  // };

  if (!city) {
    notFound();
  }

  return (
    <>
      {/* <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
      /> */}
      <Hero image={'/mover-pushing-dolly.jpg'} title={heroTitle} />
      <Partners />
      {city.state && <Info city={city} />}
      <Stats />
      {city.state && <Advantages city={city} />}
      <Photos />
      <Services city={city} />
      <Faqs />
      <CTA />
      <Contact />
    </>
  );
}

// {/* <>
//   {city?.interstate ? (
//     <>
//       <Script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
//       />
//       <Hero
//         image={'/mover-pushing-dolly.jpg'}
//         title={`Movers from Boston to ${city.name}`}
//       />
//       {/* <Info city={city} /> */}
//       <Stats />
//       {/* <Services city={city} /> */}
//       {/* <Divider /> */}
//       {/* <Advantages city={city} /> */}
//       <Faqs />
//       <CTA />
//     </>
//   ) : (
//     <>
//       <Script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }}
//       />
//       <Hero
//         image={'/mover-pushing-dolly.jpg'}
//         title={`${city.fullName} - Professional Moving Services`}
//       />
//       <Partners />
//       <Info city={city} />
//       <Stats />
//       <Advantages city={city} />
//       <Photos />
//       <Services city={city} />
//       <Faqs />
//       <CTA />
//       <Contact />
//     </>
//   )}
// </>; */}
