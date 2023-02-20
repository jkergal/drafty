import { getChannels } from '@/cache/getChannels';
import { formatCronParams } from '@/helpers/format';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const startCronMessage = async (client: Client) => {
  console.info('Cron message job started.');

  const { enrollmentsChannel } = getChannels(client);

  let job = new CronJob(formatCronParams(), async () => {
    enrollmentsChannel?.send({ content: 'test' }).then(async (sentMessage) => {
      console.info('Message sent');
    });
  });

  job.start();
};
