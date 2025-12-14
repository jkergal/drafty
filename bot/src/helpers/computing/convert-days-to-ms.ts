import {
  HOURS_IN_DAY,
  MILLISECONDS_IN_SECOND,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTES,
} from '@/constants/time';

export const convertDaysToMs = (days: number): number =>
  days * MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTES * MINUTES_IN_HOUR * HOURS_IN_DAY;
