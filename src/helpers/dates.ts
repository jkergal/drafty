import dayjs from 'dayjs';

// dayOfWeek :  1 to 7 (1 : Monday, 7: Sunday)
export const getNextDayOfWeekTimestamp = (dayOfWeek: number) => {
  const today = dayjs();
  const daysUntilNextDayOfWeek = (dayOfWeek + today.day() + 7) % 7;
  const nextDayOfWeek = today.add(daysUntilNextDayOfWeek, 'day').startOf('day');
  return nextDayOfWeek;
};
