import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const InfoBox = ({ color, rates, type }) => {
  const idx = type === 'discount' ? 0 : type === 'regular' ? 1 : 2;
  return (
    <div className="transition-all duration-150 ease-in relative inline-block group cursor-pointer">
      <InformationCircleIcon className="w-4 h-4" />

      <div className="invisible group-hover:visible w-[200px] absolute -right-12 bottom-6 rounded-xl p-3 text-gray-700 bg-gray-50 z-10 shadow-3xl">
        <div className="flex justify-between mb-2">
          <p>2 Movers & Truck</p>
          <p>
            $
            <span className={clsx('font-semibold', color)}>
              {rates?.two_men[idx] || 0}
            </span>
            /h
          </p>
        </div>

        <div className="flex justify-between mb-2">
          <p>3 Movers & Truck</p>
          <p>
            $
            <span className={clsx('font-semibold', color)}>
              {rates?.three_men[idx] || 0}
            </span>
            /h
          </p>
        </div>

        <div className="flex justify-between">
          <p>4 Movers & Truck</p>
          <p>
            $
            <span className={clsx('font-semibold', color)}>
              {rates?.four_men[idx] || 0}
            </span>
            /h
          </p>
        </div>
      </div>
    </div>
  );
};

export default function CalendarFooter({ prices }) {
  const rates = prices[0];
  return (
    <div className="border-t flex items-center justify-around px-4 py-2 text-xs bg-palette-background rounded-b-2xl">
      <div className="rounded-lg bg-palette-cyan/20 text-palette-cyan px-2 py-1 flex items-center gap-1 relative">
        Discount
        <InfoBox color="text-palette-cyan" rates={rates} type="discount" />
      </div>
      <div className="rounded-lg bg-palette-blue/20 text-palette-blue px-2 py-1 flex items-center gap-1 relative">
        Regular
        <InfoBox color="text-palette-blue" rates={rates} type="regular" />
      </div>
      <div className="rounded-lg bg-palette-pink/20 text-palette-pink px-2 py-1 flex items-center gap-1 relative">
        Peak
        <InfoBox color="text-palette-pink" rates={rates} type="peak" />
      </div>
    </div>
  );
}
