import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import Section from '@/ui/Section';
import Image from 'next/image';
import SectionHeader from '@/ui/SectionHeader';

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
      'Phoenix Moving is Fully Licensed and Insured with the Massachusetts Department of Public Utilities.',
  },
];

export default function WhyBook({ city }) {
  return (
    <Section>
      <SectionHeader
        start
        title={`Why book with Phoenix Moving ${city.name}.`}
      />
      <div className="max-w-3xl">
        <p className="mt-4 text-gray-900">
          At Phoenix Moving Company in {city.name}, we pride ourselves on our
          commitment to excellence. We are fully licensed and insured, and we go
          above and beyond to ensure that your belongings are safe and secure
          throughout the entire moving process. Our team of movers is highly
          trained and experienced, and we use the latest equipment and
          techniques to ensure a smooth and efficient move. We also offer
          competitive pricing and exceptional customer service, so you can rest
          assured that you are getting the best value for your money.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
        {incentives.map((incentive, i) => (
          <div key={incentive.name} className="flex flex-col text-left">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                {typeof incentive.imageSrc === 'string' ? (
                  <Image
                    className="h-16 w-16"
                    width={64}
                    height={64}
                    src={incentive.imageSrc}
                    alt={incentive.name}
                    title={incentive.name}
                  />
                ) : (
                  <incentive.imageSrc className="h-16 w-16 stroke-[0.7px]" />
                )}
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
              <h3 className="text-xl font-semibold text-gray-900">
                {incentive.name}
              </h3>
              <p
                className="mt-2 text-sm text-gray-900 prose prose-blue"
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
