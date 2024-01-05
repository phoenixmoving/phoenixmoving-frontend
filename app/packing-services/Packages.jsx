import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const prices = [4, 6, 8, 30, 4.5];
// const prices = {
//   0: 4,
//   1: 6,
//   l: 8,
//   p25: 30,
//   t: 4.5,
// };

const getTotal = (items) => {
  let total = 0;

  Object.entries(items).map((item, i) => {
    let price = prices[i];

    if (item[0] === 'Packing paper 10lb') {
      price = prices[i] / 2;
    }

    total += item[1] * price;
  });

  return total;
};

const data = [
  {
    apt: 'Studio apt.',
    total: 123,
    items: {
      'Small boxes': 10,
      'Medium boxes': 5,
      'Large boxes': 3,
      'Packing paper 10lb': 1,
      Tape: 2,
    },
  },
  {
    apt: '1 Bedroom apt.',
    total: 123,
    items: {
      'Small boxes': 13,
      'Medium boxes': 10,
      'Large boxes': 5,
      'Packing paper 10lb': 2,
      Tape: 2,
    },
  },
  {
    apt: '2 Bedroom apt.',
    total: 123,
    items: {
      'Small boxes': 17,
      'Medium boxes': 13,
      'Large boxes': 8,
      'Packing paper 25lb': 2,
      Tape: 3,
    },
  },
  {
    apt: '3 Bedroom apt.',
    total: 123,
    items: {
      'Small boxes': 25,
      'Medium boxes': 16,
      'Large boxes': 12,
      'Packing paper 25lb': 2,
      Tape: 4,
    },
  },
  {
    apt: '3+ Bedroom apt.',
    total: 123,
    items: {
      'Small boxes': 30,
      'Medium boxes': 20,
      'Large boxes': 15,
      'Packing paper 25lb': 3,
      Tape: 6,
    },
  },
  {
    apt: '2 Bedroom house',
    total: 123,
    items: {
      'Small boxes': 40,
      'Medium boxes': 30,
      'Large boxes': 20,
      'Packing paper 25lb': 2,
      Tape: 8,
    },
  },
  {
    apt: '3 Bedroom house',
    total: 123,
    items: {
      'Small boxes': 50,
      'Medium boxes': 40,
      'Large boxes': 20,
      'Packing paper 25lb': 3,
      Tape: 10,
    },
  },
  {
    apt: '4 Bedroom house',
    total: 123,
    items: {
      'Small boxes': 60,
      'Medium boxes': 50,
      'Large boxes': 30,
      'Packing paper 25lb': 4,
      Tape: 12,
    },
  },
];

const Card = ({ houseSize }) => {
  return (
    <li className="shadow-lg shadow-slate-900/5 sm:shadow-none overflow-hidden mx-4 sm:mx-0 rounded-2xl bg-white border border-slate-200 flex flex-col min-w-[240px] sm:col-span-1">
      <table className="divide-y divide-slate-300">
        <thead>
          <tr className="bg-slate-100">
            <th
              scope="col"
              className="pl-4 py-2 text-left text-sm font-bold text-slate-900"
            >
              {houseSize.apt}
            </th>
            <th
              scope="col"
              className="pr-4 py-2 text-right text-xs font-semibold text-slate-900"
            >
              Qty
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(houseSize.items).map((material, i) => {
            // getTotal(houseSize.items);
            return (
              <tr
                key={`${material[0]}-${i}`}
                className="border-b border-slate-200"
              >
                <td className="text-xs text-left pl-4 py-2 font-medium text-slate-900">
                  {material[0]}
                </td>
                <td className="text-right text-slate-500 pr-4 py-2">
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
              className="pl-4 py-4 text-left sm:text-right text-sm font-normal text-slate-500 table-cell md:pl-0"
            >
              Total price
            </th>
            <td className="pr-4 py-4 text-right text-sm text-slate-500">
              {/* ${houseSize.total}.00 */}$
              {getTotal(houseSize.items).toFixed(2)}
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
