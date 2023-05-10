import Hero from '@/ui/Hero';
import natick from '../../public/mover-pushing-dolly.jpg';
import Partners from '@/ui/Partners';
import Info from './Info';
import Advantages from './Advantages';
import Stats from './Stats';
import Faqs from '@/ui/Faqs';
import Benefits from './Benefits';
import Divider from '@/ui/Divider';
import CTA from '@/ui/CTA';
import Contact from '@/ui/Contact';
import WhyBook from './WhyBook';
import CitiesSection from '@/ui/CitiesSection';

const URL = process.env.NEXT_PUBLIC_MAIN_URL + '/natick-movers';
const title = 'Natick Movers - Phoenix Moving Natick (Free Estimate)';
const description =
  'Natick movers, Movers Near Natick MA, Professional Moving Company in Natick, MA. The most reliable moving company near Natick MA. Free Quote Online (NO HIDDEN FEES).';

const keywords = [
  'Movers near Natick MA',
  'Natick Movers',
  'Natick Moving Company',
  'Phoenix Moving is a professional Boston local and long distance moving company with a great reputation and affordable rates',
  'Natick Movers serving Natick MA and beyond',
  'Best moving prices',
  'Best moving rates with 100% satisfaction guaranteed',
];

export const metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: 'Natick Movers',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@phoenix_moving',
    domain: URL,
    title,
    description,
  },
};

export default function NatickMoversPage() {
  return (
    <div>
      <Hero image={natick} title="Natick Movers" />
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
      <CTA />
      <Contact />
    </div>
  );
}
