import { Channel, Client } from 'discord.js';
import { createEnrollmentMessage, createPod } from './repository';
import { getDayOfNextfWeekDate } from '@/helpers/dates/get-day-of-next-week-timestamp';
import { sendTextMessage } from '@/core/discord/actions/send-text-message';
import { hydrateEnrollmentMessage } from './_helpers/hydrate-enrollment-message';
import { entryReactionsCollectorListener } from '@/core/discord/listeners/entry-reactions-collector';
import { SupabaseClient } from '@supabase/supabase-js';
import { POD_DAYS, POD_HOUR } from '@/constants/drafty';
import { initEnrollmentReactions } from '@/core/discord/actions/init-enrollment-reactions';

export type SentMessage = Awaited<ReturnType<typeof sendEnrollmentMessageService>>;

export const sendEnrollmentMessageService = async (
  supabase: SupabaseClient,
  {
    enrollmentsChannel,
    enrollmentMessageContent,
    currentMtgFormat,
    client,
  }: {
    enrollmentsChannel: Channel | undefined;
    enrollmentMessageContent: string;
    currentMtgFormat: string;
    client: Client;
  },
) => {
  const hydratedMessage = hydrateEnrollmentMessage({
    baseMessage: enrollmentMessageContent,
    client,
    currentMtgFormat,
  });

  const sentMessage = await sendTextMessage(enrollmentsChannel, hydratedMessage, () =>
    console.info('Enrollment message sent'),
  );

  if (sentMessage === undefined) return null;

  const enrollmentMessage = await createEnrollmentMessage(supabase, {
    discord_id: sentMessage.id,
  });

  return { ...enrollmentMessage, discord: sentMessage };
};

const linkPodToReactionService = async (
  supabase: SupabaseClient,
  {
    sentMessage,
    checkinChannel1,
    checkinChannel2,
    emojiName,
    podNumber,
    key,
    maxPodEntries,
    registrationPeriodInDays,
  }: {
    sentMessage: NonNullable<SentMessage>;
    checkinChannel1: Channel | undefined;
    checkinChannel2: Channel | undefined;
    emojiName: string;
    podNumber: number;
    key: string;
    maxPodEntries: number;
    registrationPeriodInDays: number;
  },
) => {
  const createdPod = await createPod(supabase, {
    enrollment_message_id: sentMessage.id,
    reaction_emoji_name: emojiName,
    pod_date: getDayOfNextfWeekDate(POD_DAYS[key as keyof typeof POD_DAYS].number),
  });

  await entryReactionsCollectorListener(sentMessage.discord, {
    podId: createdPod.id,
    channel1: checkinChannel1,
    channel2: checkinChannel2,
    emojiName,
    maxPodEntries,
    registrationPeriodInDays,
    dayOfTheWeek: POD_DAYS[key as keyof typeof POD_DAYS].number,
    hour: POD_HOUR,
    podDay: POD_DAYS[key as keyof typeof POD_DAYS].name,
    podDiscordTimestamp: sentMessage.discord.createdAt.toISOString(),
    podNumber,
  });
};

export const openPodsRegistrationService = async (
  supabase: SupabaseClient,
  {
    reactions,
    sentMessage,
    checkinChannel1,
    checkinChannel2,
    maxPodEntries,
    registrationPeriodInDays,
  }: {
    reactions: NonNullable<Awaited<ReturnType<typeof initEnrollmentReactions>>>;
    sentMessage: NonNullable<SentMessage>;
    checkinChannel1: Channel | undefined;
    checkinChannel2: Channel | undefined;
    maxPodEntries: number;
    registrationPeriodInDays: number;
  },
) =>
  await Promise.all(
    Object.entries(reactions).map(async ([key, value], index) => {
      if (value?.emoji.name == null) return;
      return await linkPodToReactionService(supabase, {
        sentMessage,
        checkinChannel1,
        checkinChannel2,
        emojiName: value.emoji.name,
        podNumber: index + 1,
        key,
        maxPodEntries,
        registrationPeriodInDays,
      });
    }),
  );
