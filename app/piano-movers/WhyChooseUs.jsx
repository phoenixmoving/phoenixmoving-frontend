import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const features = [
  {
    name: 'Experienced Professionals',
    description:
      'Our team consists of experienced piano movers who understand the unique challenges of transporting delicate instruments.',
  },
  {
    name: 'Safe and Secure Transport',
    description:
      'We use specialized equipment and techniques to ensure that your piano is transported safely and securely, minimizing the risk of damage.',
  },
  {
    name: 'Flexible Scheduling',
    description:
      'We work around your schedule to provide convenient moving solutions that meet your needs.',
  },
  {
    name: 'Competitive Pricing',
    description:
      'Our pricing is competitive and transparent, with no hidden fees or surprises.',
  },
  {
    name: 'Fully Licensed and Insured',
    description:
      'You can have peace of mind knowing that your piano is in good hands with a fully licensed and insured moving company.',
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
      <SectionHeader title="Why Choose Us As Your Piano Movers?" />
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
