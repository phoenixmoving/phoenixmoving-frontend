export function preventNextMonths(month) {
  const now = new Date();
  var newDate = new Date(now.setMonth(now.getMonth() + 6));
  const sixMoAhead = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate(),
    0,
    0,
    0
  );

  const isValid = sixMoAhead.getTime() <= month.getTime();
  return isValid;
}
