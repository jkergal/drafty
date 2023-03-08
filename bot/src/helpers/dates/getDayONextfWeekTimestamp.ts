import dayjs from 'dayjs';

// dayOfWeek :  1 to 7 (1 : Monday, 7: Sunday)
export const getDayONextfWeekTimestamp = (dayOfWeek: number) => {
  const nextDayOfWeek = dayjs().add(1, 'week').day(dayOfWeek).startOf('day');
  const daysToAdd = nextDayOfWeek.isBefore(dayjs()) ? 7 : 0;
  return nextDayOfWeek.add(daysToAdd, 'day').unix();
};
