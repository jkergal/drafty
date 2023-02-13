import { CRON } from '@/constants/CRON';

export const getCronParams = () => {
  return `${CRON.SECOND} ${CRON.MINUTE} ${CRON.HOUR} ${CRON.DAY_OF_MONTH} ${CRON.MONTH} ${CRON.DAY_OF_WEEK} `;
};
