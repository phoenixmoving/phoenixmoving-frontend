import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { format, addMonths, subMonths } from 'date-fns';
import { preventPastMonths } from '../helpers/preventPastMonths';
import { preventNextMonths } from '../helpers/preventNextMonths';

const MonthSelect = (props) => {
  const { month, handleNextMonth, handlePrevMonth } = props;

  const disablePrevMonth = preventPastMonths(month);
  const disableNextMonth = preventNextMonths(month);

  const next = () => {
    const next = addMonths(month, 1);
    handleNextMonth(next);
  };

  const prev = () => {
    const prev = subMonths(month, 1);
    handlePrevMonth(prev);
  };

  return (
    <div className="flex gap-2 flex-col bg-palette-background rounded-t-2xl">
      <div className="flex items-center justify-between text-sm px-4 py-2">
        <button
          type="button"
          disabled={disablePrevMonth}
          onClick={prev}
          className={clsx('hover:bg-gray-200 p-2 rounded-lg', {
            'opacity-40': disablePrevMonth,
          })}
        >
          <ChevronLeftIcon className="w-4 h-4 stroke-2" />
        </button>
        <p className="font-semibold">{format(month, 'MMMM yyyy')}</p>
        <button
          type="button"
          disabled={disableNextMonth}
          onClick={next}
          className={clsx('hover:bg-gray-200 p-2 rounded-lg', {
            'opacity-40': disableNextMonth,
          })}
        >
          <ChevronRightIcon className="w-4 h-4 stroke-2" />
        </button>
      </div>
    </div>
  );
};

export default MonthSelect;
