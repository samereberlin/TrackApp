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

export const formatDateForm = (text: string): string => {
  const rawDate = text
    .replace(/\//g, '')
    .replace(/\.|,|-|\s/g, '')
    .substring(0, 6);

  if (rawDate.length && /\D/.test(rawDate)) {
    throw new Error('Please insert numbers only.');
  } else if (rawDate.length > 1 && parseInt(rawDate.substring(0, 2), 10) > 12) {
    throw new Error(
      `${rawDate.substring(
        0,
        2,
      )} is an invalid month, please insert another date.`,
    );
  } else if (rawDate.length > 3 && parseInt(rawDate.substring(2, 4), 10) > 31) {
    throw new Error(
      `${rawDate.substring(
        2,
        4,
      )} is an invalid day, please insert another date.`,
    );
  }

  return rawDate.replace(/(\d\d)(\d)/, '$1/$2').replace(/(\d\d)(\d)/, '$1/$2');
};

export const formatDateString = (milliseconds: number): string => {
  const d = new Date(milliseconds);
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
};

export const formatWeightForm = (text: string): string => {
  let rawWeight = text
    .replace(/,/g, '.')
    .replace(/^\./, '')
    .replace(/-|\s/g, '');

  if ((rawWeight.match(/\./g) || []).length > 1) {
    rawWeight = rawWeight.replace(/\.$/, '');
  }

  if (rawWeight.length && !/^\d*\.?\d*$/.test(rawWeight)) {
    throw new Error(
      `${rawWeight} is an invalid weight, please insert numbers only.`,
    );
  }

  return rawWeight;
};

export const isDateFormAvailable = (
  dateForm: string,
  usedDates: number[],
): boolean => {
  const [month, day, year] = dateForm.split('/');
  const targetDay = parseInt(day, 10);
  const targetMonth = parseInt(month, 10) - 1;
  const targetYear = parseInt(year, 10) + 2000;
  return usedDates.find((timestamp) => {
    const date = new Date(timestamp);
    return (
      date.getDate() === targetDay &&
      date.getMonth() === targetMonth &&
      date.getFullYear() === targetYear
    );
  })
    ? false
    : true;
};
