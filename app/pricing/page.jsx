import Divider from '@/ui/Divider';
import Hero from '@/ui/Hero';
// import CallToAction from '@/ui/CallToAction';
import InterstatePrices from './InterstatePrices';
// import PricingTable from './PricingTable';
import PackingItems from '@/ui/PackingItems';
import CTA from '@/ui/CTA';
import Contact from '@/ui/Contact';
import Pricing from '../Pricing';

export default async function PricingPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Moving Prices & Rates" />
      <Pricing />
      <Divider />
      <InterstatePrices />
      <PackingItems />
      <CTA />
      <Contact />
    </>
  );
}
