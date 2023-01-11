'use client';
import { useState, useEffect, useRef } from 'react';
import generateDays from './helpers/generate-days';
import MonthSelect from './components/MonthSelect';
import Day from './components/Day';
import CalendarFooter from './components/CalendarFooter';
import { format } from 'date-fns';

const WEEK_DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export default function CalendarWithRates(props) {
  const {
    close,
    hanldeChange,
    pickedDay,
    movingDate,
    isDelivery,
    rates,
    error,
  } = props;

  const [month, setMonth] = useState(new Date());
  const [startDay, days] = generateDays(month);
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   if (pickedDay) {
  //     setMonth(new Date(pickedDay));
  //   }
  //   if (isDelivery && movingDate) {
  //     setMonth(new Date(movingDate));
  //   }
  // }, [pickedDay]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleNextMonth = (mo) => {
    setMonth(mo);
  };

  const handlePrevMonth = (mo) => {
    setMonth(mo);
  };

  // if (error) return 'An error has occurred.';
  // if (!rates) return 'Loading...';
  
  return (
    <div
      ref={wrapperRef}
      className="absolute top-48 left-12 sm:top-28 sm:left-72 lg:top-16 lg:left-20 bg-white rounded-xl shadow-3xl w-[300px] h-[350px] z-10"
    >
      <MonthSelect
        month={month}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <div className="grid grid-cols-7 gap-2 px-4 py-2 capitalize text-center">
        {WEEK_DAYS.map((weekDay) => {
          return (
            <span key={weekDay} className="text-xs text-gray-400">
              {weekDay}
            </span>
          );
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-6 items-center gap-1 px-4 py-2 text-center">
        {days.map((day) => {
          const rate = rates?.find((r) => r.date === format(day, 'MM/dd/yyyy'));
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
      <CalendarFooter />
    </div>
  );
}
