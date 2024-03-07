import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const features = [
  {
    name: 'Climate-Controlled Facility',
    description:
      'Our storage facility is equipped with climate control technology to maintain stable temperature and humidity levels, ensuring optimal conditions for your stored items.',
  },
  {
    name: 'Secure Facilities',
    description:
      'Our storage facilities are equipped with state-of-the-art security features to ensure the safety of your belongings.',
  },
  {
    name: 'Flexible Options',
    description:
      'Whether you need storage for a month or a year, we offer flexible storage solutions tailored to your specific needs.',
  },
  {
    name: 'Affordable Pricing',
    description:
      'With competitive pricing and transparent pricing structures, we make storage accessible to all.',
  },
  {
    name: 'Exceptional Customer Service',
    description:
      'Our friendly and knowledgeable staff are here to assist you every step of the way, from choosing the right storage option to accessing your belongings.',
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
      <SectionHeader title="Why Choose Us." />
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
