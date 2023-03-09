import CheckIcon from '@heroicons/react/24/outline/CheckIcon';
import Section from '@/ui/Section';

const features = [
  'Online and On-Site Free Estimate',
  'Fully Licensed and Insured',
  'Floors Padding and Wrapping of Furniture',
  'Protection of your Home from Damage',
  'Professional Team',
  'Disassembling/Assembling Furniture',
];

export default function Services({ city }) {
  return (
    <Section className="bg-palette-background">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-12 items-center">
        <div>
          <p className="md:text-lg font-semibold leading-8 tracking-tight text-palette-primary-500">
            Everything you need
          </p>
          <div className="mx-auto max-w-3xl mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Moving services.
            </h2>
            <p className="mt-2 text-sm prose text-gray-900">
              Among all of {city?.name}
              {city.state && `, ${city?.state}`} moving companies there is good
              reputable movers and shall we say. Phoenix Moving is fully
              Licensed and Insured moving company with great reputation and
              affordable rates. So if you are planning to move in {city?.name}{' '}
              you can consider Phoenix Moving as your{' '}
              <strong className="font-semibold">{city?.name} Movers</strong>.
            </p>
          </div>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-0">
          <div className="grid grid-cols-1 gap-10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
            {features.map((feature, i) => (
              <div key={i} className="relative">
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9  font-semibold leading-6 text-gray-900">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
