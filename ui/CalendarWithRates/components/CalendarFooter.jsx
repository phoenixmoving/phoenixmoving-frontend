import { InformationCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const InfoBox = ({ color, rates, type }) => {
  const idx = type === 'discount' ? 0 : type === 'regular' ? 1 : 2;
  return (
    <div className="transition-all duration-150 ease-in relative inline-block group cursor-pointer">
      <InformationCircleIcon className="w-4 h-4" />

      <div className="invisible group-hover:visible w-[200px] absolute -right-12 bottom-6 rounded-xl p-3 text-slate-700 bg-slate-50 z-10 shadow-3xl scale-0 transition-all group-hover:scale-100">
        <div className="flex justify-between items-center mb-2 font-semibold">
          <p>2 Movers & Truck</p>
          <p>
            $
            <span className={clsx('text-sm', color)}>
              {rates?.two_men[idx] || 0}
            </span>
            /h
          </p>
        </div>

        <div className="flex justify-between items-center mb-2 font-semibold">
          <p>3 Movers & Truck</p>
          <p>
            $
            <span className={clsx('text-sm', color)}>
              {rates?.three_men[idx] || 0}
            </span>
            /h
          </p>
        </div>

        <div className="flex justify-between items-center font-semibold">
          <p>4 Movers & Truck</p>
          <p>
            $
            <span className={clsx('text-sm', color)}>
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
    <div className="border-t border-slate-900/5 flex items-center justify-between pt-4 text-xs font-semibold rounded-b-xl">
      <div className="rounded-lg bg-palette-cyan/20 text-palette-cyan p-2 flex items-center gap-1 relative">
        Discount
        <InfoBox color="text-palette-cyan" rates={rates} type="discount" />
      </div>
      <div className="rounded-lg bg-palette-blue/20 text-palette-blue p-2 flex items-center gap-1 relative">
        Regular
        <InfoBox color="text-palette-blue" rates={rates} type="regular" />
      </div>
      <div className="rounded-lg bg-palette-pink/20 text-palette-pink p-2 flex items-center gap-1 relative">
        Peak
        <InfoBox color="text-palette-pink" rates={rates} type="peak" />
      </div>
    </div>
  );
}
