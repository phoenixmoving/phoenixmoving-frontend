"use client";
import { useState, useEffect, useRef } from "react";
import generateDays from "./helpers/generate-days";
import MonthSelect from "./components/MonthSelect";
import Day from "./components/Day";
import CalendarFooter from "./components/CalendarFooter";
import { format } from "date-fns";
import clsx from "clsx";

const WEEK_DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default function CalendarWithRates(props) {
  const {
    close,
    hanldeChange,
    pickedDay,
    movingDate,
    isDelivery,
    rates,
    prices,
  } = props;

  const [month, setMonth] = useState(new Date());
  const [startDay, days] = generateDays(month);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleNextMonth = (mo) => {
    setMonth(mo);
  };

  const handlePrevMonth = (mo) => {
    setMonth(mo);
  };

  return (
    <div
      ref={wrapperRef}
      // className="fixed p-4 h-auto flex flex-col justify-between left-1/2 -translate-y-1/2 -translate-x-1/2 sm:left-[unset] sm:right-[unset] sm:translate-y-1 sm:translate-x-[unset] bg-white rounded-2xl shadow-3xl w-[300px] z-50"
      className={clsx(
        "fixed left-1/2 z-50 flex h-auto w-[300px] -translate-x-1/2 flex-col justify-between rounded-2xl border bg-white p-4 shadow-lg sm:absolute sm:right-[unset] sm:left-[unset] sm:translate-x-[unset] sm:translate-y-1",
        {
          "-translate-y-[120%]": isDelivery,
          "-translate-y-[80%]": !isDelivery,
        },
      )}
    >
      <MonthSelect
        month={month}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <div className="grid grid-cols-7 gap-2 border-t border-slate-900/5 pt-4 text-center capitalize">
        {WEEK_DAYS.map((weekDay) => {
          return (
            <span key={weekDay} className="text-xs text-slate-400">
              {weekDay}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-6 items-center gap-2 py-4 text-center">
        {days.map((day) => {
          const rate = rates?.find((r) => r.date === format(day, "MM/dd/yyyy"));
          return (
            <Day
              key={day}
              day={day}
              hanldeChange={hanldeChange}
              startDay={startDay}
              pickedDay={pickedDay}
              movingDate={movingDate}
              isDelivery={isDelivery}
              rate={rate}
            />
          );
        })}
      </div>
      <CalendarFooter prices={prices} />
    </div>
  );
}
