import { getCronParams } from '@/helpers/getCronParams';
import { CronJob } from 'cron';

export const startCronMessage = () => {
  let job = new CronJob(getCronParams(), () => {
    console.log('prout');
  });

  job.start();
};
