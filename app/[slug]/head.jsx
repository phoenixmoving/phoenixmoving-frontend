import { cities } from '@/lib/citiesData';
import { states } from '@/lib/statesData';

export async function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}

export async function getCityState(slug) {
  // const filterdStates = states.filter((s) => s.cities && s.cities.length > 0);
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
  let city = {};

  if (slug.includes('boston-')) {
    city = await getCityState(slug);
  } else {
    city = await getCity(slug);
  }

  const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/${city?.slug}`;
  const title =
    city && city.interstate
      ? `Movers from Boston to ${city?.name} - Phoenix Moving (Free Estimate)`
      : `${city?.fullName} - Phoenix Moving ${city?.name} (Free Estimate)`;

  const description =
    city && city.interstate
      ? `Reliable Movers from Boston to ${city.name}. The Most Trusted Boston to ${city.name} Moving Company, Get a Free Quote Online (NO Registration Required).`
      : `Professional Moving Company in ${city?.name} ${city?.state}. The most Reliable ${city?.name} Movers, Get a Free Quote Online (NO Registration Required).`;

  const keywords = `${city?.name} Moving Company, long-distance, commercial, residential moves, stress-free, hassle-free experience, highly-trained and experienced movers, packing and unpacking, loading and unloading, furniture assembly, storage solutions, competitive rates, flexible payment options`;
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
    </>
  );
}
