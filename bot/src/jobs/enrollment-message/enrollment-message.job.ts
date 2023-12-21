import { getChannels } from '@/cache/getChannels';
import { CRON_PARAMS } from '@/constants/cron-params';
import { SCHEDULED_MESSAGE_TAGS_REGEX } from '@/constants/validations';
import { getScheduledMessageBase } from '@/core/drafty-configurations/repository';
import { supabaseAdmin } from '@/database/supabase-admin';
import { formatCronParams } from '@/helpers/format/format-cron-params';
import { sendTextMessage } from '@/helpers/sendTextMessage';
import { TDraftyConfigurations } from '@database/types/__generated__/main.types';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const formatScheduledMessage = (scheduledMessageBase: TDraftyConfigurations['scheduled_message']) => {
  return scheduledMessageBase.replace(SCHEDULED_MESSAGE_TAGS_REGEX, 'prout');
};

export const startEnrollmentMessageJob = async (client: Client) => {
  const { enrollmentsChannel } = getChannels(client);

  // const scheduledMessage = formatEnrollmentMessage(client);

  const scheduledMessageBase = await getScheduledMessageBase(supabaseAdmin);
  const formattedScheduledMessage = formatScheduledMessage(scheduledMessageBase.scheduledMessage);

  console.log({ formattedScheduledMessage });

  const job = new CronJob(formatCronParams(CRON_PARAMS.ENROLLMENT_MESSAGE), () => {
    console.info('Cron message job started.');

    sendTextMessage(enrollmentsChannel, formattedScheduledMessage, () => console.info('Message sent'));
  });

  job.start();
};
