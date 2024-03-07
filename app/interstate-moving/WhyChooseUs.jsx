import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const features = [
  {
    name: 'Experienced Long-Distance Movers',
    description:
      'Our team consists of seasoned professionals with extensive experience in long-distance relocations. We understand the unique challenges of moving over long distances and are equipped to handle all aspects of your move.',
  },
  {
    name: 'Safety and Security',
    description:
      'Your belongings are our top priority. We use high-quality packing materials and industry-best practices to ensure the safe and secure transportation of your items, regardless of distance.',
  },
  {
    name: 'Flat Rate Pricing',
    description:
      "At Phoenix Moving, we believe in transparency and simplicity. That's why we offer flat-rate pricing for interstate moving, so you'll know exactly how much your move will cost upfront with no surprises.",
  },
  {
    name: 'Flexible Moving Options',
    description:
      'We offer flexible moving options to suit your specific needs and budget. Whether you require full-service packing and unpacking or just transportation of your belongings, we have you covered.',
  },
  {
    name: 'Licensed and Insured',
    description:
      'As a fully licensed and insured moving company, you can have peace of mind knowing that your move is in capable hands, no matter the distance.',
  },
  {
    name: '100% On-Time Guarantee',
    description:
      'We guarantee that we will be at the needed place on time, as specified in our agreement. Be sure that we got you covered.',
  },
];

export default function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader title="Why Choose Us As Your Long-Distance Movers?" />
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt className="text-lg font-semibold leading-7 text-slate-900">
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-slate-900">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
