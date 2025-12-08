import {
  getDraftyConfigCron,
  getDraftyConfigDetails,
} from '@/core/data/drafty-configurations/repository';
import { sendTextMessage } from '@/core/discord/actions/send-text-message';
import { getChannels } from '@/core/discord/cache/get-channel';
import { supabaseAdmin } from '@/database/supabase-admin';
import { CronJob } from 'cron';
import { ChannelType, Client } from 'discord.js';
import { hydrateEnrollmentMessage } from './_helpers/hydrate-enrollment-message';
import { entryReactionsCollectorListener } from '@/core/discord/listeners/entry-reactions-collector';
import { getGuild } from '@/core/discord/cache/get-guilds';
import { initEnrollmentReactions } from '@/core/discord/actions/init-enrollment-reactions';
import { POD_DAYS, POD_HOUR } from '@/constants/drafty';
import { AUTO_REACT_ALL, IS_DEV_ENV } from '@/constants/env';

export const startEnrollmentMessageJob = async (client: Client) => {
  if (IS_DEV_ENV) return enroll(client);

  const { cron } = await getDraftyConfigCron(supabaseAdmin);
  const job = new CronJob(cron, () => enroll(client));

  job.start();
};

const enroll = async (client: Client) => {
  const { enrollmentsChannel, checkinChannel1, checkinChannel2 } = getChannels(client);

  const guild = getGuild(client);

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

  const sentMessage = await sendTextMessage(enrollmentsChannel, hydratedMessage, () =>
    console.info('Message sent'),
  );

  if (sentMessage === undefined || guild === undefined) return;

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

  Object.entries(reactions).forEach(([key, value], index) => {
    entryReactionsCollectorListener(sentMessage, {
      channel1: checkinChannel1,
      channel2: checkinChannel2,
      emojiName: value.emoji.name,
      maxPodEntries,
      registrationPeriodInDays,
      dayOfTheWeek: POD_DAYS[key as keyof typeof POD_DAYS].number,
      hour: POD_HOUR,
      podDay: POD_DAYS[key as keyof typeof POD_DAYS].name,
      podDiscordTimestamp: sentMessage.createdAt.toISOString(),
      podNumber: index + 1,
    });
  });
};
