import { InformationCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const InfoBox = ({ color, rates, idx, type }) => {
  // const idx = type === "discount" ? 0 : type === "regular" ? 1 : 2;
  return (
    <div className="group relative inline-block cursor-pointer transition-all duration-150 ease-in">
      <InformationCircleIcon className="h-4 w-4" />

      <div className="shadow-3xl invisible absolute -right-12 bottom-6 z-10 w-[200px] scale-0 rounded-xl bg-slate-50 p-3 text-slate-700 transition-all group-hover:visible group-hover:scale-100">
        <div className="mb-2 flex items-center justify-between font-semibold">
          <p>2 Movers & Truck</p>
          <p>
            $
            <span className={clsx("text-sm", color)}>
              {rates?.two_men[idx] || 0}
            </span>
            /h
          </p>
        </div>

        <div className="mb-2 flex items-center justify-between font-semibold">
          <p>3 Movers & Truck</p>
          <p>
            $
            <span className={clsx("text-sm", color)}>
              {rates?.three_men[idx] || 0}
            </span>
            /h
          </p>
        </div>

        <div className="flex items-center justify-between font-semibold">
          <p>4 Movers & Truck</p>
          <p>
            $
            <span className={clsx("text-sm", color)}>
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
    <div className="rounded-b-xl border-t border-slate-900/5 pt-4 text-xs font-semibold">
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <div className="relative flex w-fit items-center gap-2 self-end rounded-lg bg-green-600/20 p-1.5 text-green-600">
          Discount
          <InfoBox
            color="text-green-600"
            rates={rates}
            idx={0}
            type="discount"
          />
        </div>
        <div className="relative flex w-fit items-center gap-1 rounded-lg bg-blue-600/20 p-1.5 text-blue-600">
          Regular
          <InfoBox color="text-blue-600" rates={rates} idx={1} type="regular" />
        </div>
        <div className="relative flex w-fit items-center gap-1 rounded-lg bg-pink-600/20 p-1.5 text-pink-600">
          Peak
          <InfoBox color="text-pink-600" rates={rates} idx={2} type="peak" />
        </div>
        <div className="relative flex w-fit items-center gap-1 rounded-lg bg-purple-600/20 p-1.5 text-purple-600">
          High Peak
          <InfoBox
            color="text-purple-600"
            rates={rates}
            idx={3}
            type="high_pick"
          />
        </div>
      </div>
    </div>
  );
}
