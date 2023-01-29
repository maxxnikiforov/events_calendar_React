export const monthes = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const days = [
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
  'Su'
];

let years: number[] = [];

for (let i = 2023; i < 2055; i++) {
  years.push(i);
}

export { years };

const daysInWeek = 7;

const getDaysInMonth = (date: Date) => {
  const nextMonth = date.getMonth() + 1;
  date.setMonth(nextMonth);
  date.setDate(0);
  
  return date.getDate();
};

const getStartWeeksDay = (date: Date) => {
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0) {
    return 6;
  }

  return dayOfWeek - 1;
};

export const getMonthData = (year: number, month: number) => {
  let monthData: (Date | undefined)[][] = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const startWeeksDay = getStartWeeksDay(date);
  let day = 1;

  for (let i = 0; i < ((daysInMonth + startWeeksDay) / daysInWeek); i++) {
    monthData[i] = [];

    for (let j = 0; j < daysInWeek; j++) {
      if ((i = 0 && j < startWeeksDay) || day > daysInMonth) {
        monthData[i][j] = undefined;
      } else {
        monthData[i][j] = new Date(year, month, day++);
      }
    }
  }

  return monthData;
}
