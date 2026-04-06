import { memo } from "react";
import { type DayButtonProps } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Rate } from "./calendar-with-rates";

interface CalendarDayButtonProps extends Omit<DayButtonProps, "day"> {
  day: DayButtonProps["day"];
  rate: Rate;
  isLoading: boolean;
  handleDayClick: (date: Date) => void;
}

// Memoized DayButton component
function CalendarDayButton({
  day,
  rate,
  isLoading,
  handleDayClick,
  ...props
}: CalendarDayButtonProps) {
  const date = day.date;

  const isDiscount = rate?.rate_type === "discounted";
  const isRegular = rate?.rate_type === "regular";
  const isPeak = rate?.rate_type === "pick";
  const isHighPeak = rate?.rate_type === "high_pick";

  const isDisabled = rate?.rate_type === "disabled";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Call the original onClick if it exists
    props.onClick?.(e);

    // alert(JSON.stringify(rateInfo, null, 2));
    // Call our custom onSelectDate
    // handleDayClick(date, rateInfo);
    handleDayClick(date);
  };

  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant: "ghost", className: "rounded-md" }),
        "h-8 w-8 p-0 aria-selected:opacity-100",
        {
          "bg-green-600/20 text-green-600": isDiscount,
          "bg-blue-600/20 text-blue-600": isRegular,
          "bg-pink-600/20 text-pink-600": isPeak,
          "bg-purple-600/20 text-purple-600": isHighPeak,
          "cursor-not-allowed bg-slate-900/30": isDisabled,
        },
      )}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <time dateTime={date.toISOString()}>{date.getDate()}</time>
    </button>
  );
}

export const MemoizedCalendarDayButton = memo(CalendarDayButton);
