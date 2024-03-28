import Hero from '@/ui/Hero';
import Info from './Info';
import Included from './Included';
import CallToAction from '@/ui/CallToAction';
import CitiesSection from '@/ui/CitiesSection';
import Photos from '@/ui/Photos';
import bgImage from '@/images/truck-and-building-opt.jpg';
import ServicesSection from './ServicesSection';
import Divider from '@/ui/Divider';
import WhyChooseUs from './WhyChooseUs';

const BASE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
const URL = `${BASE_URL}/local-moving`;
const title = 'Local Moving Services - Phoenix Moving Boston (Free Estimate)';
const description =
  'We are your local moving experts! Our experienced movers can help you pack, load, and relocate your belongings quickly and safely. Call us today to get started!';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: 'Phoenix Moving Boston',
    images: [
      {
        url: bgImage.src,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@phoenix_moving',
    domain: URL,
    title,
    description,
    images: [BASE_URL + bgImage],
  },
};

export default function LocalMoving() {
  return (
    <>
      <Hero image={bgImage} title="Local Moving Services" />
      <Included />
      <Info />
      <Divider />
      <ServicesSection />
      <Divider />
      <WhyChooseUs />
      <Photos />
      <CallToAction />
      <CitiesSection />
    </>
  );
}
