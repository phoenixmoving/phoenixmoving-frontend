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
      description: 'Starting from',
      sizes: 'Room/Studio',
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
      description: 'Starting from',
      sizes: '1-2 Bedroom Apt/House',
      includedFeatures: [
        '3 Professional Movers.',
        'Clean, fully stocked moving trucks.',
        'Delicate handling of your stuff.',
        'All taxes included in the price.',
      ],
      isPopular: true,
    },
    {
      name: '4 Movers',
      href: '/',
      priceMonthly: prices[0].four_men[0],
      oldPrice: prices[0].four_men[0] + 30,
      description: 'Starting from',
      sizes: '3-4 Bedroom Apt/House',
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
          <div className="relative" key={tier.name}>
            {tier.isPopular && (
              <div className="absolute -top-[12px] left-0 right-0 mx-auto w-fit rounded-full bg-palette-primary-500 px-4 py-1 text-center text-xs font-medium text-white">
                MOST POPULAR
              </div>
            )}
            <div className="divide-y divide-slate-200 rounded-3xl bg-white shadow-lg shadow-slate-900/5">
              <div className="p-6">
                <p className="text-lg font-semibold leading-6 text-slate-900">
                  {tier.name}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  {tier.description}
                </p>
                <p className="text-4xl font-semibold tracking-tight text-slate-900">
                  ${tier.priceMonthly}
                  <span className="text-sm text-slate-500 ml-1 font-normal tracking-normal">
                    per hour
                  </span>
                </p>
                <p className="font-semibold my-8">{tier.sizes}</p>
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
                <p className="text-sm font-semibold text-slate-900">
                  What&apos;s included
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-light text-slate-900">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4 sm:gap-6 justify-between">
          <div className="divide-y h-full divide-slate-200 rounded-3xl bg-white shadow-lg shadow-slate-900/5">
            <div className="p-6">
              <p className="text-lg font-semibold leading-6 text-slate-900">
                Additional mover
              </p>
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight text-slate-900">
                  ${prices[0].add_men[0]}
                </span>{' '}
                <span className="text-sm text-slate-500">per hour</span>
              </p>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="flex space-x-3">
                <CheckIcon
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-light text-slate9500">
                  Rate per hour per moving added to your quoted houry rate if
                  you request it.
                </span>
              </p>
            </div>
          </div>
          <div className="divide-y h-full divide-slate-200 rounded-3xl bg-white shadow-lg shadow-slate-900/5">
            <div className="p-6">
              <p className="text-lg font-semibold leading-6 text-slate-900">
                Additional truck
              </p>
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight text-slate-900">
                  ${prices[0].add_truck[0]}
                </span>{' '}
                <span className="text-sm text-slate-500">per hour</span>
              </p>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="flex space-x-3">
                <CheckIcon
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-light text-slate-900">
                  Rate per hour per truck added to your quoted houry rate if you
                  requested.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 rounded-3xl bg-palette-primary-500 shadow-lg p-6 text-white text-center flex flex-col">
        <h3 className="mb-2 text-2xl font-bold">Need a Custom Solution?</h3>
        <p className="mb-4 text-lg">
          Contact us for a personalized quote tailored to your specific moving
          needs.
        </p>
        <Button
          href="tel:(508)315-9458"
          variant="outline"
          className="border-0 self-center"
          title="Contact Sales"
        >
          Contact Sales
        </Button>
      </div>
    </Section>
  );
}
