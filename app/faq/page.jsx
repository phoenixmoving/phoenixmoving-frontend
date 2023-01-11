import Hero from '@/ui/Hero';
import FAQS from './FAQS';

export default async function FaqPage() {
  return (
    <>
      <Hero image="/prices.jpg" title="Questions? Answers." />
      <FAQS />
    </>
  );
}
