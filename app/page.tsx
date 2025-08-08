import { Gallery1 } from "@/blocks/image-gallery/gallery-1";
import { Pricing1 } from "@/blocks/pricing/pricing-1";
import { Services1 } from "@/blocks/services/services-1";
import type { Metadata } from "next";

import { Cities1 } from "@/blocks/cities/cities-1";
import { Feature1 } from "@/blocks/features/feature-1";
import { Partners2 } from "@/blocks/partners/partners-2";
import bgImage from "@/images/truck-and-house-opt.jpg";
import HeroWithBooking from "@/ui/HeroWithBooking";
import Reviews from "@/ui/Reviews";
import { Suspense } from "react";
import { Faq1 } from "@/blocks/faq/faq-1";

const pageUrl = process.env.NEXT_PUBLIC_MAIN_URL || "";
const title = "Phoenix Moving - 🚚 Boston Moving Compnay (Free Estimate)";
const description =
  "Professional moving company serving the Boston area. We provide fast, reliable, and affordable moving services for residential and commercial customers.";

const keywords = [
  "Movers near Boston MA",
  " Boston Movers",
  " Boston Moving Company",
  " Phoenix Moving is a professional Boston local and long distance moving company with a great reputation and affordable rates",
  " Boston Movers serving Boston MA and beyond",
  " Best moving prices",
  " Best moving rates with 100% satisfaction guaranteed",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    url: new URL(pageUrl),
    siteName: "Brave Movers",
    images: [
      {
        url: bgImage.src,
        width: 1200,
        height: 630,
        alt: "Brave Movers truck and team in front of a Boston home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [bgImage.src],
  },
  alternates: {
    canonical: new URL(pageUrl),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroWithBooking image={bgImage} title="Boston Moving Company" />
      <Partners2 />
      <Services1 />
      <Gallery1 />
      <Pricing1 />
      <Feature1 />
      <Suspense fallback="">
        <Reviews />
      </Suspense>
      <Cities1 />
      <Faq1 />
    </>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: title,
  image: pageUrl + "/logos/logo.png",
  url: pageUrl,
  telephone: "+1-508-315-9458",
  email: "info@phoenixmoving.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Lakeview Gardens",
    addressLocality: "Natick",
    addressRegion: "MA",
    postalCode: "01760",
    addressCountry: "USA",
  },
  description,
  sameAs: [
    "https://www.facebook.com/phoenixmoving",
    "https://www.twitter.com/phoenixmoving",
    "https://www.instagram.com/phoenixmoving",
  ],
  areaServed: {
    "@type": "Place",
    name: "Boston, MA",
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Moving Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Local Moving",
        description: "Affordable local moving services within the Boston area.",
        price: "500-1500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Long-Distance Moving",
        description:
          "Reliable long-distance moving solutions across the United States.",
        price: "2000-5000",
        priceCurrency: "USD",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.98",
    reviewCount: "143",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "A. Jacob",
      },
      datePublished: "2025-07-21",
      reviewBody:
        "Phoenix Moving made my move stress-free! The team was professional and careful with my belongings.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "John S.",
      },
      datePublished: "2025-07-15",
      reviewBody:
        "Phoenix Moving made my move stress-free! The team was professional and careful with my belongings.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
      },
    },
  ],
};
