// import Link from 'next/link';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Map from './Map';

const stats = [
  { label: 'Reliable', value: '100%' },
  { label: 'Satisfaction', value: '24/7' },
  { label: 'Guaranteed Price', value: '100%' },
  { label: 'Legit', value: '100%' },
];

const p1 =
  "Interstate moving services provide a convenient way to move long distances. Whether you're relocating across the state or across the country, these services can help reduce the stress of a move. They can provide packing and loading services, as well as transport your belongings in a safe and secure manner. Many of these services also offer additional services such as storage, packing supplies, and more. With the help of an interstate moving service, you can make your move easier and get to your destination quickly and safely.";

export default function Info() {
  return (
    <Section>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
            <div className="relative overflow-hidden rounded-2xl lg:pt-24">
              <Map />
            </div>
            <div className="pb-10 text-sm text-gray-500">
              <p className="flex items-center">
                <span className="h-[10px] w-[10px] bg-[#00d866] mr-2" />
                same/next day delivery
              </p>
              <p className="flex items-center">
                <span className="h-[10px] w-[10px] bg-[#cddc39] mr-2" />
                1-2 days delivery
              </p>
              <p className="flex items-center">
                <span className="h-[10px] w-[10px] bg-[#ffc107] mr-2" />
                2+ days delivery
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <SectionHeader title="Long distance Interstate moving." start />
          <div className="mt-6 space-y-6 text-gray-900 prose prose-blue ">
            <p>
              Moving across the state? Across the country? We'll get you there!
              Phoenix Moving here to help with a variety of long-distance
              services that can take the stress out of your next move. With our
              long-distance moves, you can expect a quick delivery time to your
              new home, often times with the same movers who moved the
              belongings out of your home.
            </p>
            <p>
              Unlike other long distance movers who cannot guarantee arrival
              times, we provide you with an exact date for arrival at your new
              location which means you can settle into your new home sooner,
              rather than later.
            </p>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="font-semibold text-gray-900">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-palette-primary-500">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 mb-2">
              <a
                href="/pricing"
                title="Moving Pricing Plans"
                className="inline-flex items-center rounded-xl border border-transparent px-4 py-3 font-medium leading-4 text-blue-600 hover:bg-indigo-50"
              >
                View Pricing Plans
                <span aria-hidden="true" className="ml-2">
                  {' '}
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
