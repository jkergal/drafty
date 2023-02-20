import { getChannels } from '@/cache/getChannels';
import { SCHEDULED_MESSAGE } from '@/constants/DRAFTY';
import { getCronParams } from '@/helpers/getCronParams';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const startCronMessage = async (client: Client) => {
  console.info('Cron message job started.');

  const { enrollmentsChannel } = getChannels(client);

  let job = new CronJob(getCronParams(), async () => {
    enrollmentsChannel?.send({ content: SCHEDULED_MESSAGE }).then(async (sentMessage) => {
      console.info('Message sent');
    });
  });

  job.start();
};
