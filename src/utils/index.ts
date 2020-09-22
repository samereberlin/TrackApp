const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (milliseconds: number): string => {
  const d = new Date(milliseconds);
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
};
