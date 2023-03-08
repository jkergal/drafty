import { getChannels } from '@/cache/getChannels';
import { CRON_PARAMS } from '@/constants/CRON_PARAMS';
import { formatCronParams } from '@/helpers/format/formatCronParams';
import { formatEnrollmentMessage } from '@/helpers/format/formatEnrollmentMessage';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const startEnrollmentMessage = async (client: Client) => {
  const { enrollmentsChannel } = getChannels(client);

  const scheduledMessage = formatEnrollmentMessage(client);

  let job = new CronJob(formatCronParams(CRON_PARAMS.ENROLLMENT_MESSAGE), async () => {
    console.info('Cron message job started.');

    enrollmentsChannel?.send({ content: scheduledMessage }).then(async (sentMessage) => {
      console.info('Message sent');
    });
  });

  job.start();
};
