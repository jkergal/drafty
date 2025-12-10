import {
  getDraftyConfigCron,
  getDraftyConfigDetails,
} from '@/core/data/drafty-configurations/repository';
import { getChannels } from '@/core/discord/cache/get-channel';
import { CronJob } from 'cron';
import { ChannelType, Client } from 'discord.js';
import { hydrateEnrollmentMessage } from './_helpers/hydrate-enrollment-message';
import { getGuild } from '@/core/discord/cache/get-guilds';
import { initEnrollmentReactions } from '@/core/discord/actions/init-enrollment-reactions';
import { AUTO_REACT_ALL, IS_DEV_ENV } from '@/env';
import { createSupabaseClient } from '@/database/supabase';
import { openPodsRegistrationService, sendEnrollmentMessageService } from './service';

export const startEnrollmentMessageJob = async (client: Client) => {
  if (IS_DEV_ENV) return enroll(client);

  const supabase = await createSupabaseClient();

  const { cron } = await getDraftyConfigCron(supabase);
  const job = new CronJob(cron, () => enroll(client));

  job.start();
};

const enroll = async (client: Client) => {
  const { enrollmentsChannel, checkinChannel1, checkinChannel2 } = getChannels(client);

  const guild = getGuild(client);

  const supabase = await createSupabaseClient();

  const {
    enrollmentMessageContent,
    currentMtgFormat,
    maxPodEntries,
    registrationPeriodInDays,
  } = await getDraftyConfigDetails(supabase);

  const hydratedMessage = hydrateEnrollmentMessage({
    baseMessage: enrollmentMessageContent,
    client,
    currentMtgFormat,
  });

  const sentMessage = await sendEnrollmentMessageService(supabase, {
    enrollmentsChannel,
    enrollmentMessageContent: hydratedMessage,
    currentMtgFormat,
    client,
  });

  if (sentMessage === null || guild === undefined) return;

  const reactions = await initEnrollmentReactions(sentMessage, guild);

  if (reactions === null) return;

  if (
    IS_DEV_ENV &&
    AUTO_REACT_ALL &&
    enrollmentsChannel?.type === ChannelType.GuildText
  ) {
    // @NOTE: external dev bot called "soldiers.js" reacts to the message with this command
    await enrollmentsChannel.send({ content: '!reactall' });
  }

  await openPodsRegistrationService(supabase, {
    reactions,
    sentMessage: sentMessage,
    checkinChannel1,
    checkinChannel2,
    maxPodEntries,
    registrationPeriodInDays,
  });
};
