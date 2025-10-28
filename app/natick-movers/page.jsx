import Hero from "@/ui/Hero";
import img from "@/images/cities/natick-ma.jpeg";
import Partners from "@/ui/Partners";
import Info from "./Info";
import Advantages from "./Advantages";
import Stats from "./Stats";
import Faqs from "@/ui/Faqs";
import Benefits from "./Benefits";
import Divider from "@/ui/Divider";
import WhyBook from "./WhyBook";
import CitiesSection from "@/ui/CitiesSection";

const URL = process.env.NEXT_PUBLIC_MAIN_URL + "/natick-movers";
const title =
  "Professional Moving Services in Natick, MA | Phoenix Moving and Storage";
const description =
  "Your Trusted Natick, MA Movers | Local & Long-Distance Moves | Expert Service for Residential & Commercial Moves | Get a Free Quote Today!";

const keywords = [
  "Movers near Natick MA",
  "Natick Movers",
  "Natick Moving Company",
  "Phoenix Moving is a professional Boston local and long distance moving company with a great reputation and affordable rates",
  "Natick Movers serving Natick MA and beyond",
  "Best moving prices",
  "Best moving rates with 100% satisfaction guaranteed",
];

export const metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: URL,
  },
  // openGraph: {
  //   title,
  //   description,
  //   url: URL,
  //   siteName: 'Natick Movers',
  //   locale: 'en-US',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@phoenix_moving',
  //   domain: URL,
  //   title,
  //   description,
  // },
};

const schema1 = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Phoenix Moving and Storage",
  description: description,
  url: "https://www.gophoenixmoving.com/",
  telephone: "+1-508-315-9458",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Lakeview Gardens",
    addressLocality: "Natick",
    addressRegion: "MA",
    postalCode: "01760",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.2917",
    longitude: "-71.3607",
  },
  openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
  sameAs: [
    "https://www.facebook.com/phoenixmoving/",
    "https://twitter.com/phoenix_moving?ref_src=twsrc%5Etfw/",
    "https://www.instagram.com/phoenixmovingboston/",
  ],
};

const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "Rating",
  ratingValue: "4.98",
  bestRating: "5",
  worstRating: "4",
  ratingCount: "394",
  itemReviewed: {
    "@type": "Thing",
    name: "Phoenix Moving and Storage",
  },
  author: {
    "@type": "Person",
    name: "Josh M.",
  },
};

export default function NatickMoversPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema1, null, "\t"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ratingSchema, null, "\t"),
        }}
      />
      <Hero image={img} title="Professional Moving Services in Natick, MA" />
      <Partners />
      <Info />
      <Divider />
      <Benefits />
      {/* <Divider /> */}
      <Advantages />
      <WhyBook />
      {/* <Divider /> */}
      <CitiesSection />
      <Faqs />
      <Stats />
    </>
  );
}
