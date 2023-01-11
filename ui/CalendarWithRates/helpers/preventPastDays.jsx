export function preventPastDays(calendarDay, movingDate, isDelivery) {
  const now = new Date();
  const pickedMovingDate = new Date(movingDate);
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
  );
  const moveDate = new Date(
    pickedMovingDate.getFullYear(),
    pickedMovingDate.getMonth(),
    pickedMovingDate.getDate(),
    0,
    0,
    0
  );
  const isValid = isDelivery
    ? calendarDay.getTime() >= moveDate.getTime()
    : calendarDay.getTime() >= today.getTime();
  return isValid;
}
