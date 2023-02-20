import { CRON_PARAMS } from '@/constants/CRON_PARAMS';

export const getCronParams = () => {
  return `${CRON_PARAMS.SECOND} ${CRON_PARAMS.MINUTE} ${CRON_PARAMS.HOUR} ${CRON_PARAMS.DAY_OF_MONTH} ${CRON_PARAMS.MONTH} ${CRON_PARAMS.DAY_OF_WEEK}`;
};
