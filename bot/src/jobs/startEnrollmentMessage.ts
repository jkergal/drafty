import { getChannels } from '@/cache/getChannels';
import { CRON_PARAMS } from '@/constants/CRON_PARAMS';
import { formatCronParams } from '@/helpers/format/formatCronParams';
import { formatEnrollmentMessage } from '@/helpers/format/formatEnrollmentMessage';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const startEnrollmentMessage = async (client: Client) => {
  const { enrollmentsChannel } = getChannels(client);

  const scheduledMessage = formatEnrollmentMessage(client);

  const job = new CronJob(formatCronParams(CRON_PARAMS.ENROLLMENT_MESSAGE), () => {
    console.info('Cron message job started.');

    enrollmentsChannel?.send({ content: scheduledMessage }).then(async () => {
      console.info('Message sent');
    });
  });

  job.start();
};
