import { getChannels } from '@/cache/getChannels';
import { getScheduledMessage } from '@/helpers/getScheduledMessage';
import { formatCronParams } from '@/helpers/format';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const startCronMessage = async (client: Client) => {
  const { enrollmentsChannel } = getChannels(client);

  const scheduledMessage = getScheduledMessage(client);

  let job = new CronJob(formatCronParams(), async () => {
    console.info('Cron message job started.');

    enrollmentsChannel?.send({ content: scheduledMessage }).then(async (sentMessage) => {
      console.info('Message sent');
    });
  });

  job.start();
};
