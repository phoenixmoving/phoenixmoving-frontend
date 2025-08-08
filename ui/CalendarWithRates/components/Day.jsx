import clsx from "clsx";
import { isSameMonth, format, isToday, isEqual } from "date-fns";
import { preventPastDays } from "../helpers/preventPastDays";
import { motion } from "framer-motion";

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
  const formatted = format(day, "d");
  const isTodayDay = isToday(day);
  const isValid = preventPastDays(day, movingDate, isDelivery) ? true : false;
  const selected = isEqual(new Date(day), new Date(pickedDay));
  const isDiscount = rate?.rate_type === "discounted" && isValid;
  const isRegular = rate?.rate_type === "regular" && isValid;
  const isPeak = rate?.rate_type === "pick" && isValid;
  const isHighPeak = rate?.rate_type === "high_pick" && isValid;

  const isDisabled = rate?.rate_type === "disabled";

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
      disabled={!isValid || rate?.rate_type === "disabled"}
      onClick={() => hanldeChange(day)}
      className={clsx(
        "h-full w-full rounded-lg px-1 py-1.5 text-xs font-medium transition-all",
        {
          "cursor-not-allowed text-slate-400": !isValid || isDisabled,
          "text-blue-600": isTodayDay && !selected,
          "bg-slate-500/20": isDisabled,
          "hover:scale-125": !isDisabled && isValid,
          // 'hover:bg-slate-100': !selected,
          "bg-green-600/20 text-green-600": isDiscount,
          "bg-blue-600/20 text-blue-600": isRegular,
          "bg-pink-600/20 text-pink-600": isPeak,
          "bg-purple-600/20 text-purple-600": isHighPeak,
        },
      )}
    >
      {formatted}
    </button>
  );
};

export default Day;
