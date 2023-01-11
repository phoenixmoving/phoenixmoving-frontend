import SectionHeader from '@/ui/SectionHeader';
import Section from '@/ui/Section';
import clsx from 'clsx';

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/prices`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function PricingTable() {
  const prices = await getData();

  const tiers = ['Discounted Rates', 'Regular Rates', 'Peak Rates'];
  const data = [
    {
      crew: '2 Movers & truck',
      //   prices: [123, 345, 567],
      prices: prices[0].two_men || ['', '', ''],
    },
    {
      crew: '3 Movers & truck',
      prices: prices[0].three_men || ['', '', ''],
    },
    {
      crew: '4 Movers & truck',
      prices: prices[0].four_men || ['', '', ''],
    },
    {
      crew: 'Additional mover',
      prices: prices[0].add_men || ['', '', ''],
    },
    {
      crew: 'Additional truck',
      prices: prices[0].add_truck || ['', '', ''],
    },
  ];

  return (
    <Section
      label="phoenix-moving-pricing-table"
      className="bg-palette-background"
    >
      <SectionHeader
        title="Affordable moving rates."
        subtitle={
          <>
            Our local moving and packing rates are hourly based with 15 minutes
            increment and a <b>2 hours minimum</b> charge policy, in case your
            move takes less then 2 hours.
          </>
        }
      />
      <div className="space-y-12 lg:hidden">
        {tiers.map((tier, tierIndex) => (
          <section key={tier}>
            <div className="mb-8 px-4">
              <h2
                className={clsx('text-lg leading-6 font-medium', {
                  'text-palette-cyan': tierIndex === 0,
                  'text-palette-blue': tierIndex === 1,
                  'text-palette-pink': tierIndex === 2,
                })}
              >
                {tier}
              </h2>
            </div>
            <table className="w-full bg-white">
              <tbody className="divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-left text-sm font-normal text-gray-700"
                      scope="row"
                    >
                      {row.crew}
                    </th>
                    <td className="py-5 pr-4">
                      <span className="block text-right text-xl font-semibold text-gray-900">
                        ${row.prices[tierIndex]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>

      {/* lg+ */}
      <div className="hidden lg:block">
        <table className="h-px w-full table-fixed">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th
                className="px-6 pb-4 text-left text-sm text-gray-900"
                scope="col"
              >
                <span className="sr-only">Prices</span>
              </th>
              {tiers.map((tier, i) => (
                <th
                  key={tier}
                  className={clsx(
                    'w-1/4 px-6 pb-4 text-center text-lg leading-6 font-medium',
                    {
                      'text-palette-cyan': i === 0,
                      'text-palette-blue': i === 1,
                      'text-palette-pink': i === 2,
                    },
                  )}
                  scope="col"
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border-t border-gray-200">
            {data.map((row) => {
              return (
                <tr key={row.crew}>
                  <th
                    className="py-8 px-6 text-left align-top text-lg font-semibold text-gray-900"
                    scope="row"
                  >
                    {row.crew}
                  </th>
                  {row.prices?.map((price, i) => (
                    <td
                      key={i}
                      className="h-full py-8 px-6 align-top text-center"
                    >
                      <p className="text-2xl tracking-tight text-gray-900">
                        ${price}
                      </p>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4 justify-between items-baseline flex-col lg:flex-row mt-10">
        <p className="w-full lg:max-w-[550px] text-sm font-light text-gray-900">
          <b className="font-semibold">Up to 1 hour Travel Time</b> is applied
          to all jobs in Metro Boston area. (approx 30 min for our movers to get
          to you address from our office plus approx 30 min to get back when the
          move is finished).
        </p>
        <p className="w-full lg:max-w-[550px] text-sm font-light text-gray-900">
          We have a <b className="font-semibold">2 hours minimum Labour Time</b>
          , plus fixed Travel Time, charge policy. After first 2 hours of labor,
          the move time is prorated every 15 min.
        </p>
      </div>
    </Section>
  );
}
