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
    <div className="flex mb-4 items-center justify-between text-sm rounded-t-xl">
      <button
        type="button"
        disabled={disablePrevMonth}
        onClick={prev}
        className={clsx('p-1.5 border rounded-full', {
          'opacity-30 hover:cursor-not-allowed': disablePrevMonth,
          'hover:bg-slate-100': !disablePrevMonth,
        })}
      >
        <ChevronLeftIcon className="w-4 h-4 stroke-2" />
      </button>
      <p className="font-semibold">{format(month, 'MMMM yyyy')}</p>
      <button
        type="button"
        disabled={disableNextMonth}
        onClick={next}
        className={clsx('p-1.5 border rounded-full', {
          'opacity-30 hover:cursor-not-allowed': disableNextMonth,
          'hover:bg-slate-100': !disableNextMonth,
        })}
      >
        <ChevronRightIcon className="w-4 h-4 stroke-2" />
      </button>
    </div>
  );
};

export default MonthSelect;
