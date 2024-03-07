import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const features = [
  {
    name: 'Experienced Local Movers',
    description:
      "Our team comprises seasoned professionals with extensive experience in local relocations. We're equipped to handle moves of all sizes, from studio apartments to large corporate offices.",
  },
  {
    name: 'Safety and Security',
    description:
      'Your belongings are our top priority. We employ industry best practices and use high-quality packing materials to ensure the safe and secure transportation of your items.',
  },
  {
    name: 'Flexible Scheduling Options',
    description:
      "We understand that every move is unique. That's why we offer flexible scheduling options, including weekends and evenings, to accommodate your busy schedule.",
  },
  {
    name: 'Affordable Pricing',
    description:
      'We are transparent about pricing, providing detailed upfront estimates with no hidden fees.',
  },
  {
    name: 'Licensed and Insured',
    description:
      'As a fully licensed and insured moving company, you can have peace of mind knowing that your move is in capable hands.',
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
      <SectionHeader title="Why Choose Us As Your Local Movers?" />
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
