import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import Section from '@/ui/Section';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const incentives = [
  {
    name: 'Efficient and Proficient',
    imageSrc: '/icon-shipping-simple.svg',
    description:
      'Your local Boston Movers are polite, fast and of course caring with your belongings.',
  },
  {
    name: '100% On-Time Guarantee',
    imageSrc: '/icon-warranty-simple.svg',
    description:
      'We guarantee that we will be at the needed place on time, as specified in our agreement. Be sure that we got you covered.',
  },
  {
    name: 'Licensed, Bonded and Insured',
    imageSrc: ClipboardDocumentCheckIcon,
    description:
      'Phoenix Moving is Fully Licensed and Insured and carries a <a href="#" title="United States Department of Transportation" class="mt-2 text-sm text-blue-600 hover:underline">United States Department of Transportation</a>.',
  },
];

export default function WhyBookSection() {
  return (
    <Section>
      <SectionHeader title="Why book with Phoenix Moving Boston." />
      <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
        {incentives.map((incentive, i) => (
          <div
            key={incentive.name}
            className={
              i === 1
                ? 'text-center sm:flex sm:text-left lg:block lg:text-center lg:relative bottom-[4px]'
                : 'text-center sm:flex sm:text-left lg:block lg:text-center'
            }
          >
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                {typeof incentive.imageSrc === 'string' ? (
                  <Image
                    className="mx-auto h-16 w-16"
                    width={64}
                    height={64}
                    src={incentive.imageSrc}
                    alt={incentive.name}
                    title={incentive.name}
                  />
                ) : (
                  <incentive.imageSrc className="mx-auto h-16 w-16 stroke-[0.7px]" />
                )}
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
              <h3 className="text-xl font-semibold text-gray-900">
                {incentive.name}
              </h3>
              <p
                className="mt-2 text-sm text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: incentive.description,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
