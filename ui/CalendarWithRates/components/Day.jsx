import clsx from 'clsx';
import { isSameMonth, format, isToday, isEqual } from 'date-fns';
import { preventPastDays } from '../helpers/preventPastDays';
import { motion } from 'framer-motion';

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
  const isValid = preventPastDays(day, movingDate, isDelivery) ? true : false;
  const selected = isEqual(new Date(day), new Date(pickedDay));
  const isDiscount = rate?.rate_type === 'discounted' && isValid;
  const isRegular = rate?.rate_type === 'regular' && isValid;
  const isPeak = rate?.rate_type === 'pick' && isValid;

  const isDisabled = rate?.rate_type === 'disabled';

  if (!isSameMonthDate) {
    return <div key={day}></div>;
  }

  return (
    <button
      // transition={{ duration: 0.2 }}
      key={day}
      // whileHover={{
      //   scale: !isValid || rate?.rate_type === 'disabled' ? 1 : 1.2,
      // }}
      // whileTap={{
      //   scale: !isValid || rate?.rate_type === 'disabled' ? 1 : 0.9,
      // }}
      type="button"
      disabled={!isValid || rate?.rate_type === 'disabled'}
      onClick={() => hanldeChange(day)}
      className={clsx(
        'text-xs font-medium rounded-lg w-full h-full py-1.5 px-1 transition-all',
        {
          'text-slate-400 cursor-not-allowed': !isValid || isDisabled,
          'text-blue-600': isTodayDay && !selected,
          'bg-slate-500/20': isDisabled,
          'hover:scale-125': !isDisabled && isValid,
          // 'hover:bg-slate-100': !selected,
          'bg-palette-cyan/20 text-palette-cyan': isDiscount,
          'bg-palette-blue/20 text-palette-blue': isRegular,
          'bg-palette-pink/20 text-palette-pink': isPeak,
        },
      )}
    >
      {formatted}
    </button>
  );
};

export default Day;
