const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
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

const fileSizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

export const checkFormData = (dateForm: string, weight: string) => {
  if (dateForm.length && dateForm.length < 8) {
    throw new Error(
      `${dateForm} is an invalid date, please adjust it according to the form instructions before saving.`,
    );
  } else if (!dateForm || !weight) {
    throw new Error(
      'Date and weight are required fields, please fill in the form before saving.',
    );
  }
};

export const checkUsedDates = (dateForm: string, usedDates: number[]) => {
  const [month, day, year] = dateForm.split('/');
  const targetDay = parseInt(day, 10);
  const targetMonth = parseInt(month, 10) - 1;
  const targetYear = parseInt(year, 10) + 2000;
  if (
    usedDates.find((timestamp) => {
      const date = new Date(timestamp);
      return (
        date.getDate() === targetDay &&
        date.getMonth() === targetMonth &&
        date.getFullYear() === targetYear
      );
    })
  ) {
    throw new Error(
      `You have already created a measurement on ${dateForm}, please insert another date.`,
    );
  }
};

export const formatDateForm = (date: string): string => {
  const rawDate = date
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

export const formatWeightForm = (weight: string): string => {
  let rawWeight = weight
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

export const getFileSizeString = (bytes: number | undefined): string => {
  if (bytes === undefined) {
    return 'Unknown file size';
  }
  if (bytes < 2) {
    return `${bytes} Byte`;
  }
  const k = 1000;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${fileSizes[i]}`;
};

export const getNameFromUri = (uri: string | undefined): string => {
  const name = uri?.split('/').pop();
  return name || 'Unknown file name';
};
