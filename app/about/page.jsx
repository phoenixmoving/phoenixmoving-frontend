import Hero from '@/ui/Hero';
import CallToAction from '@/ui/CallToAction';
import CitiesSection from '@/ui/CitiesSection';
import Photos from '@/ui/Photos';
import Info from './Info';
import Faqs from '@/ui/Faqs';
import bgImage from '@/images/about.jpg';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/about`;
const title = 'About - Phoenix Moving Boston (Free Estimate)';
const description =
  'We are professional moving and storage company based in Boston, MA. We are dedicated to providing you with the highest quality service and value for your relocation needs.';

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

export default function AboutUs() {
  return (
    <>
      <Hero image={bgImage} title="About Us" />
      <Info />
      <Photos />
      <CallToAction />
      <CitiesSection />
      <Faqs />
    </>
  );
}
