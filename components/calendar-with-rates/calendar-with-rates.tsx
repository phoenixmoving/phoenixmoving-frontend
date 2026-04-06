"use client";

import { addMonths, format } from "date-fns";
import React, { memo, type ReactElement, useCallback, useMemo } from "react";
import { type DayButtonProps, DayPicker } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import { MemoizedCalendarDayButton } from "./calendar-day-button";
import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "@/api";

const DATE_FORMAT = "MM/dd/yyyy";

type CalendarWithRatesProps = React.ComponentProps<typeof DayPicker> & {
  onSelect: (date: Date) => void;
  className?: string;
  showFooter?: boolean;
};

export function CalendarWithRates({
  ...calendarProps
}: CalendarWithRatesProps) {
  return <MemoizedMyCalendar {...calendarProps} />;
}

export type Rate = {
  id: number;
  date: string;
  rate_type: "discounted" | "regular" | "pick" | "disabled" | "high_pick";
  rates: number[];
};

function MyCalendar({
  className,
  showFooter,
  onSelect,
  ...calendarProps
}: CalendarWithRatesProps) {
  const { data: rates, isLoading } = useQuery<Rate[]>({
    queryKey: ["rates"],
    queryFn: fetchRates,
  });

  //Transform array to object {1: Rate, 2: Rate, 3: Rate}
  const calendarRates = useMemo(() => {
    if (!rates) return {};
    return rates.reduce(
      (acc, rate) => {
        acc[rate.date] = rate;
        return acc;
      },
      {} as Record<string, Rate>,
    );
  }, [rates]);

  const handleDayClick = useCallback(
    (date: Date) => {
      onSelect(date);
    },
    [onSelect],
  );

  const dayButtonComponent = useCallback(
    (props: DayButtonProps): ReactElement => {
      const date = props.day.date;
      const formattedDate = format(date, DATE_FORMAT);
      const rate = calendarRates[formattedDate];

      return (
        <MemoizedCalendarDayButton
          rate={rate}
          isLoading={isLoading}
          handleDayClick={(date) => {
            handleDayClick(date);
          }}
          {...props}
        />
      );
    },
    [calendarRates, handleDayClick],
  );

  return (
    <Calendar
      mode="single"
      showOutsideDays={false}
      className={className}
      components={{
        DayButton: dayButtonComponent,
      }}
      endMonth={addMonths(new Date(), 6)}
      footer={showFooter && <div>Footer</div>}
      {...calendarProps}
    />
  );
}

export const MemoizedMyCalendar = memo(MyCalendar);
