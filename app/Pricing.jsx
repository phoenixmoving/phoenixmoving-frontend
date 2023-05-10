import CheckIcon from '@heroicons/react/20/solid/CheckIcon';
import Section from '@/ui/Section';
import Button from '@/ui/Button';
import SectionHeader from '@/ui/SectionHeader';

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/prices`, {
    next: { revalidate: 180 },
  });
  return res.json();
}

export default async function Pricing() {
  const prices = await getData();

  const tiers = [
    {
      name: '2 Movers',
      href: '/',
      priceMonthly: prices[0].two_men[0],
      oldPrice: prices[0].two_men[0] + 30,
      description: 'Starting at',
      includedFeatures: [
        '2 Professional Movers.',
        'Clean, fully stocked moving trucks.',
        'Delicate handling of your stuff.',
        'All taxes included in the price.',
      ],
    },
    {
      name: '3 Movers',
      href: '/',
      priceMonthly: prices[0].three_men[0],
      oldPrice: prices[0].three_men[0] + 30,
      description: 'Starting at',
      includedFeatures: [
        '3 Professional Movers.',
        'Clean, fully stocked moving trucks.',
        'Delicate handling of your stuff.',
        'All taxes included in the price.',
      ],
    },
    {
      name: '4 Movers',
      href: '/',
      priceMonthly: prices[0].four_men[0],
      oldPrice: prices[0].four_men[0] + 30,
      description: 'Starting at',
      includedFeatures: [
        '4 Professional Movers.',
        'Clean, fully stocked moving trucks.',
        'Delicate handling of your stuff.',
        'All taxes included in the price.',
      ],
    },
  ];

  return (
    <Section className="bg-palette-background">
      <SectionHeader
        title="Best prices, for everyone."
        subtitle="Affordable rates on professional moving services tailored to your
          needs."
      />
      <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="divide-y divide-gray-200 rounded-2xl bg-white shadow-lg shadow-gray-900/5"
          >
            <div className="p-6">
              <p className="text-lg font-semibold leading-6 text-gray-900">
                {tier.name}
              </p>
              <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
              <p className="text-2xl font-semibold tracking-tight text-gray-500">
                <s>${tier.oldPrice}</s>
              </p>
              <p className="text-4xl font-semibold tracking-tight text-gray-900">
                ${tier.priceMonthly}
                <span className="text-sm text-gray-500 ml-1 font-normal tracking-normal">
                  per hour
                </span>
              </p>
              <Button
                href={tier.href}
                color="primary"
                className="mt-8 w-full"
                title="Get a Quote"
              >
                Get a Quote
              </Button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="text-sm font-semibold text-gray-900">
                What&apos;s included
              </p>
              <ul className="mt-6 space-y-4">
                {tier.includedFeatures.map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <CheckIcon
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-light text-gray-900">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4 sm:gap-6 justify-between">
          <div className="divide-y h-full divide-gray-200 rounded-2xl bg-white shadow-lg shadow-gray-900/5">
            <div className="p-6">
              <p className="text-lg font-semibold leading-6 text-gray-900">
                Additional mover
              </p>
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  ${prices[0].add_men[0]}
                </span>{' '}
                <span className="text-sm text-gray-500">per hour</span>
              </p>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="flex space-x-3">
                <CheckIcon
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-light text-gray9500">
                  Rate per hour per moving added to your quoted houry rate if
                  you request it.
                </span>
              </p>
            </div>
          </div>
          <div className="divide-y h-full divide-gray-200 rounded-2xl bg-white shadow-lg shadow-gray-900/5">
            <div className="p-6">
              <p className="text-lg font-semibold leading-6 text-gray-900">
                Additional truck
              </p>
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  ${prices[0].add_truck[0]}
                </span>{' '}
                <span className="text-sm text-gray-500">per hour</span>
              </p>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="flex space-x-3">
                <CheckIcon
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-light text-gray-900">
                  Rate per hour per truck added to your quoted houry rate if you
                  requested.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
