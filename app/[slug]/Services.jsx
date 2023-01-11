import { CheckIcon } from '@heroicons/react/24/outline';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const features = [
  {
    name: 'Online and On-Site Free Estimate',
  },
  {
    name: 'Fully Licensed and Insured',
  },
  {
    name: 'Floors Padding and Wrapping of Furniture',
  },
  {
    name: 'Protection of your Home from Damage',
  },
  {
    name: 'Professional Team',
  },
  {
    name: 'Disassembling/Assembling Furniture',
  },
];

export default function Services({ city }) {
  return (
    <Section
      label="phoneix-moving-included-services"
      className="bg-palette-background"
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-12 items-center">
        <div>
          <p className="md:text-lg font-semibold leading-8 tracking-tight text-palette-primary-500">
            Everything you need
          </p>
          <div className="mx-auto max-w-3xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Moving services.
            </h2>
            <p className="mt-2 text-sm font-light text-gray-900">
              Among all of {city?.name}
              {city.state && `, ${city?.state}`} moving companies there is good
              reputable movers and shall we say. Phoenix Moving is fully
              Licensed and Insured moving company with great reputation and
              affordable rates. So if you are planning to move in {city?.name}{' '}
              you can consider Phoenix Moving as your{' '}
              <strong className="font-medium">{city?.name} Movers</strong>.
            </p>
          </div>
          {/* <SectionHeader
            title="Moving Services"
            subtitle={
              <>
                Among all of {city?.name}, {city?.state} moving companies
                there is good reputable movers and shall we say. Phoenix Moving
                is fully Licensed and Insured moving company with great
                reputation and affordable rates. So if you are planning to move
                in {city?.name} you can consider Phoenix Moving as your{' '}
                {city?.name} Movers.
              </>
            }
            start
          /> */}
          {/* <p className="mt-2 text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
            Moving Services
          </p>
          <p className="mt-6  leading-7 text-gray-600">
            Among all of {city?.name}, {city?.state} moving companies there
            is good reputable movers and shall we say. Phoenix Moving is fully
            Licensed and Insured moving company with great reputation and
            affordable rates. So if you are planning to move in {city?.name}{' '}
            you can consider Phoenix Moving as your {city?.name} Movers.
          </p> */}
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <dl className="grid grid-cols-1 gap-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9  font-semibold leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
