export function preventPastMonths(month) {
  const today = new Date();
  const isValid = month.getMonth() <= today.getMonth();
  return isValid;
}
