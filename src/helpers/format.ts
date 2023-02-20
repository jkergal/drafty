import { CRON_PARAMS } from '@/constants/CRON_PARAMS';

export const formatCronParams = () => {
  return `${CRON_PARAMS.SECOND} ${CRON_PARAMS.MINUTE} ${CRON_PARAMS.HOUR} ${CRON_PARAMS.DAY_OF_MONTH} ${CRON_PARAMS.MONTH} ${CRON_PARAMS.DAY_OF_WEEK}`;
};

export const formatDiscordTimestamp = (unixTimestamp: number, options?: { shorten?: boolean }) => {
  if (options?.shorten) return '<t:' + unixTimestamp + ':d>';

  return '<t:' + unixTimestamp + ':D>';
};
