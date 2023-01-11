import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Licensed and insured movers',
  },
  {
    name: 'Assembling/Reassembling furniture',
  },
  {
    name: 'Professional team',
  },
  {
    name: 'We care about your stuff',
  },
  {
    name: 'Clean, fully stocked moving trucks',
  },
  {
    name: 'Protection of your home from damage',
  },
  {
    name: 'Floor protection',
  },
  {
    name: 'No Additional Fees',
  },
];

export default function Features() {
  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            A Better Way to Move
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Ensuring that we deliver the best services to our clients is crucial
            for us. Let us help you prepare for a smooth and successful move.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
