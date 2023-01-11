import clsx from 'clsx';
import { isSameMonth, format, isToday, isEqual } from 'date-fns';
import { preventPastDays } from '../helpers/preventPastDays';

const Day = ({
  day,
  hanldeChange,
  startDay,
  pickedDay,
  movingDate,
  isDelivery,
  rate,
}) => {
  const isSameMonthDate = isSameMonth(day, startDay);
  const formatted = format(day, 'd');
  const isTodayDay = isToday(day);
  const isValid = preventPastDays(day, movingDate, isDelivery) ? false : true;
  const selected = isEqual(new Date(day), new Date(pickedDay));

  if (!isSameMonthDate) {
    return <div key={day}></div>;
  }

  return (
    <button
      key={day}
      type="button"
      disabled={isValid || rate?.rate_type === 'disabled'}
      onClick={() => hanldeChange(day)}
      className={clsx('text-xs font-medium rounded-lg w-full h-full p-2', {
        'text-blue-600': isTodayDay && !selected,
        'text-gray-300': isValid || rate?.rate_type === 'disabled',
        // 'hover:bg-gray-100': !selected,
        'bg-palette-cyan/20 text-palette-cyan':
          rate?.rate_type === 'discounted' && !isValid,
        'bg-palette-blue/20 text-palette-blue':
          rate?.rate_type === 'regular' && !isValid,
        'bg-palette-pink/20 text-palette-pink':
          rate?.rate_type === 'pick' && !isValid,
      })}
    >
      {formatted}
    </button>
  );
};

export default Day;
