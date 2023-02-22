import dayjs from 'dayjs';

// dayOfWeek :  1 to 7 (1 : Monday, 7: Sunday)
export const getDayONextfWeekTimestamp = (dayOfWeek: number) => {
  const today = dayjs();
  const nextWeek = today.add(1, 'week');
  const nextDayOfWeek = nextWeek.day(dayOfWeek).startOf('day');
  const daysToAdd = nextDayOfWeek.isBefore(today) ? 7 : 0;
  const nextDayOfWeekNextWeek = nextDayOfWeek.add(daysToAdd, 'day');
  return nextDayOfWeekNextWeek.unix();
};
