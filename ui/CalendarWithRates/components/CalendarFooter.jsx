import { InformationCircleIcon } from '@heroicons/react/24/outline';

const CalendarFooter = () => {
  return (
    <div className="border-t flex items-center justify-around px-4 py-2 text-xs bg-palette-background rounded-b-2xl">
      <p className="rounded-lg bg-palette-cyan/20 text-palette-cyan px-2 py-1 flex items-center gap-1">
        Discount
        <InformationCircleIcon className="w-4 h-4" />
      </p>
      <p className="rounded-lg bg-palette-blue/20 text-palette-blue px-2 py-1 flex items-center gap-1">
        Regular
        <InformationCircleIcon className="w-4 h-4" />
      </p>
      <p className="rounded-lg bg-palette-pink/20 text-palette-pink px-2 py-1 flex items-center gap-1">
        Peak
        <InformationCircleIcon className="w-4 h-4" />
      </p>
    </div>
  );
};

export default CalendarFooter;
