import { getChannels } from '@/cache/getChannels';
import { CRON_PARAMS } from '@/constants/CRON_PARAMS';
import { SCHEDULED_MESSAGE_TAG_REGEX } from '@/constants/validations';
import { supabaseAdmin } from '@/database/supabase-admin';
import { formatCronParams } from '@/helpers/format/formatCronParams';
import { sendTextMessage } from '@/helpers/sendTextMessage';
import { getScheduledMessageBase } from '@/models/drafty-configurations/repository';
import { TDraftyConfigurations } from '@database/types/__generated__/main.types';
import { CronJob } from 'cron';
import { Client } from 'discord.js';

export const formatScheduledMessage = (scheduledMessageBase: TDraftyConfigurations['scheduled_message']) => {
  return scheduledMessageBase.replace(SCHEDULED_MESSAGE_TAG_REGEX, 'prout')
}

export const startEnrollmentMessage = async (client: Client) => {
  const { enrollmentsChannel } = getChannels(client);

  // const scheduledMessage = formatEnrollmentMessage(client);

  const scheduledMessageBase = await getScheduledMessageBase(supabaseAdmin);
  const formattedScheduledMessage = formatScheduledMessage(scheduledMessageBase.scheduledMessage)

  console.log({formattedScheduledMessage})
  
  const job = new CronJob(formatCronParams(CRON_PARAMS.ENROLLMENT_MESSAGE), () => {
    console.info('Cron message job started.');

    sendTextMessage(enrollmentsChannel, formattedScheduledMessage, () => console.info('Message sent'));
  });

  job.start();
};
