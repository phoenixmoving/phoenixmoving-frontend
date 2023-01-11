import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const data = [
  {
    apt: 'Studio apt',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '1 Bedroom apt',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '2 Bedroom apt',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '3 Bedroom apt',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '3+ Bedroom apt',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '2 Bedroom house',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '3 Bedroom house',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
  {
    apt: '4 Bedroom house',
    total: 123,
    items: {
      'Small boxes': 1,
      'Medium boxes': 1,
      'Large boxes': 2,
      'Dish boxes': 2,
      'Packing paper': 3,
      Tape: 1,
    },
  },
];

const Card = ({ houseSize }) => {
  return (
    <li
      className="shadow-lg shadow-gray-900/5 sm:shadow-none overflow-hidden mx-4 sm:mx-0 rounded-2xl bg-white border border-gray-200 flex flex-col min-w-[240px] sm:col-span-1"
      // className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center border border-gray-200"
    >
      <table className="divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="pl-4 py-4 text-left text-xs font-semibold text-gray-900"
            >
              {houseSize.apt}
            </th>
            <th
              scope="col"
              className="pr-4 py-4 text-right text-xs font-semibold text-gray-900"
            >
              Qty
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(houseSize.items).map((material, i) => {
            return (
              <tr
                key={`${material[0]}-${i}`}
                className="border-b border-gray-200"
              >
                <td className="text-xs text-left pl-4 py-2 font-medium text-gray-900">
                  {material[0]}
                </td>
                <td className="text-right text-gray-500 pr-4 py-2">
                  {material[1]}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              className="pl-4 py-4 text-left sm:text-right text-sm font-normal text-gray-500 table-cell md:pl-0"
            >
              Total
            </th>
            <td className="pr-4 py-4 text-right text-sm text-gray-500">
              ${houseSize.total}.00
            </td>
          </tr>
        </tfoot>
      </table>
    </li>
  );
};

export default function Packages() {
  return (
    <Section id="packages">
      <SectionHeader title="Packages." />
      <ul
        className="flex overflow-x-scroll w-full scrollbar pb-6  sm:grid sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        // className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data.map((houseSize, i) => (
          <Card key={i} houseSize={houseSize} />
        ))}
      </ul>
    </Section>
  );
}
