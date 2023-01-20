import { notFound } from 'next/navigation';
import Hero from '@/ui/Hero';
import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';
import Info from './Info';
import Faqs from '@/ui/Faqs';
import Stats from './Stats';
import Services from './Services';
import CTA from '@/ui/CTA';
import Advantages from './Advantages';
import Partners from '@/ui/Partners';
import Photos from '@/ui/Photos';
import Contact from '@/ui/Contact';

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

export default async function CityPage({ params }) {
  const { slug } = params;
  const city = await getCity(slug);

  const heroTitle = city?.interstate
    ? `${city?.fullName}`
    : `Top-rated ${city?.fullName}`;

  if (!city) {
    notFound();
  }

  return (
    <>
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
