import {
  getDraftyConfigCron,
  getDraftyConfigDetails,
} from '@/core/data/drafty-configurations/repository';
import { sendTextMessage } from '@/core/discord/actions/send-text-message';
import { getChannels } from '@/core/discord/cache/get-channel';
import { supabaseAdmin } from '@/database/supabase-admin';
import { CronJob } from 'cron';
import { Client } from 'discord.js';
import { hydrateEnrollmentMessage } from './_helpers/hydrate-enrollment-message';

export const startEnrollmentMessageJob = async (client: Client) => {
  const { cron } = await getDraftyConfigCron(supabaseAdmin);

  const job = new CronJob(cron, async () => {
    console.info('Cron message job started.');

    const { enrollmentsChannel, checkinAsyncChannel, checkinChannel1 } =
      getChannels(client);

    const {
      enrollmentMessageContent,
      currentMtgFormat,
      maxPodEntries,
      registrationPeriodInDays,
    } = await getDraftyConfigDetails(supabaseAdmin);

    const hydratedMessage = hydrateEnrollmentMessage({
      baseMessage: enrollmentMessageContent,
      client,
      currentMtgFormat,
    });

    sendTextMessage(
      enrollmentsChannel,
      hydratedMessage,
      {
        maxPodEntries,
        registrationPeriodInDays,
      },
      () => console.info('Message sent'),
    );
  });

  job.start();
};
