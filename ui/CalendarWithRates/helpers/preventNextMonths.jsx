export const preventNextMonths = (date) => {
  const currentDate = new Date();
  const selectedDate = new Date(date);

  const sixMonthsAhead = new Date();
  sixMonthsAhead.setMonth(currentDate.getMonth() + 5);

  return selectedDate > sixMonthsAhead;
};
