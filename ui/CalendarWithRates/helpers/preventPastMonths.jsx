export const preventPastMonths = (date) => {
  const currentDate = new Date();
  const selectedDate = new Date(date);

  return selectedDate < currentDate;
};
