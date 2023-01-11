import { CheckIcon } from '@heroicons/react/20/solid';
import Section from '@/ui/Section';
import Button from '@/ui/Button';
import SectionHeader from '@/ui/SectionHeader';

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/prices`, {
    cache: 'no-store',
  });
  return res.json();
}

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

// const tiers = [
//   {
//     name: '2 Movers',
//     href: '#',
//     priceMonthly: 109,
//     description: 'Starting at',
//     includedFeatures: [
//       '2 Professional Movers.',
//       'Clean, fully stocked moving trucks.',
//       'Delicate handling of your stuff.',
//       'All taxes included in the price.',
//     ],
//   },
//   {
//     name: '3 Movers',
//     href: '#',
//     priceMonthly: 149,
//     description: 'Starting at',
//     includedFeatures: [
//       '3 Professional Movers.',
//       'Clean, fully stocked moving trucks.',
//       'Delicate handling of your stuff.',
//       'All taxes included in the price.',
//     ],
//   },
//   {
//     name: '4 Movers',
//     href: '#',
//     priceMonthly: 189,
//     description: 'Starting at',
//     includedFeatures: [
//       '4 Professional Movers.',
//       'Clean, fully stocked moving trucks.',
//       'Delicate handling of your stuff.',
//       'All taxes included in the price.',
//     ],
//   },
// ];

export default async function Pricing() {
  const prices = await getData();

  const tiers = [
    {
      name: '2 Movers',
      href: '#',
      priceMonthly: prices[0].two_men[0],
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
      href: '#',
      priceMonthly: prices[0].three_men[0],
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
      href: '#',
      priceMonthly: prices[0].four_men[0],
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
      {/* <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
          <span className="relative whitespace-nowrap">
            <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-palette-primary-500" />
            <span className="relative">Best prices,</span>
          </span>{' '}
          for everyone.
        </h2>
        <p className="mt-2 sm:text-lg text-gray-700">
          Affordable rates on professional moving services tailored to your
          needs.
        </p>
      </div> */}
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
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  ${tier.priceMonthly}
                </span>{' '}
                <span className="text-sm text-gray-500">per hour</span>
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
                What's included
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
