import Hero from "@/ui/Hero";
import bgImage from "@/images/prices.jpg";
import dynamic from "next/dynamic";

const Pricing1 = dynamic(() =>
  import("@/blocks/pricing/pricing-1").then((m) => m.Pricing1),
);

const InterstatePrices = dynamic(() => import("./InterstatePrices"));

const PackingItems = dynamic(() => import("@/ui/PackingItems"));

// const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/pricing`;
const title = "Moving Prices & Rates - Phoenix Moving Boston (Free Estimate)";
const description =
  "We offer competitive prices on our moving services. Get a free quote today and start planning your move with our reliable team of professionals.";

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

export default async function PricingPage() {
  return (
    <>
      <Hero image={bgImage} title="Moving Prices & Rates" />
      <Pricing1 />
      <InterstatePrices />
      <PackingItems />
    </>
  );
}
