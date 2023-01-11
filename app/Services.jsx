import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';

const services = [
  {
    name: 'Local Moving.',
    href: 'local-moving',
    description:
      'Phoenix Moving is a perfect soultion for your Boston and surrounding area move.',
  },
  {
    name: 'Interstate Moving.',
    href: 'interstate-moving',
    description:
      'Moving across United States with Fully Licensed and Insured Moving Company.',
  },
  {
    name: 'Packing Services.',
    href: 'packing-services',
    description:
      'Moving Packing Solutions. Phoenix Moving Company provides all kind of boxes and carefully pack your stuff.',
  },
  {
    name: 'Storage Solutions.',
    href: 'storage-solutions',
    description:
      'All types of storages for your move with Phoenix Moving Company. Short and Long terms available.',
  },
];

export default function Services() {
  return (
    <Section>
      <SectionHeader
        title="Moving services."
        subtitle="Phoenix Moving Boston is a premier moving company that provides high-quality service to customers throughout the United States. We specialize in long-distance, commercial, and residential moves, providing a stress-free and hassle-free experience."
      />
      <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-6 lg:max-w-none lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.name}>
            <a
              href={service.href}
              className="rounded-2xl border border-gray-200 p-8 flex flex-col h-full hover:shadow-lg hover:shadow-gray-900/5 transition-all duration-150 ease-in"
              title={service.name}
            >
              <p className="font-semibold text-gray-900 text-lg flex justify-between items-center">
                {service.name}
                <ChevronRightIcon className="w-4 h-4" />
              </p>

              <p className="mt-2 font-normal text-gray-900">
                {service.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
