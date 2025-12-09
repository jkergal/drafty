import { Channel, Client, Message } from 'discord.js';
import { createEnrollmentMessage, createPod } from './repository';
import { getDayOfNextfWeekDate } from '@/helpers/dates/get-day-of-next-week-timestamp';
import { sendTextMessage } from '@/core/discord/actions/send-text-message';
import { hydrateEnrollmentMessage } from './_helpers/hydrate-enrollment-message';
import { entryReactionsCollectorListener } from '@/core/discord/listeners/entry-reactions-collector';
import { SupabaseClient } from '@supabase/supabase-js';
import { POD_DAYS, POD_HOUR } from '@/constants/drafty';
import { initEnrollmentReactions } from '@/core/discord/actions/init-enrollment-reactions';

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

  if (sentMessage === undefined) return;

  await createEnrollmentMessage(supabase, {
    discord_id: sentMessage.id,
  });

  return sentMessage;
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
    sentMessage: Message<true>;
    checkinChannel1: Channel | undefined;
    checkinChannel2: Channel | undefined;
    emojiName: string | null;
    podNumber: number;
    key: string;
    maxPodEntries: number;
    registrationPeriodInDays: number;
  },
) => {
  await entryReactionsCollectorListener(sentMessage, {
    channel1: checkinChannel1,
    channel2: checkinChannel2,
    emojiName,
    maxPodEntries,
    registrationPeriodInDays,
    dayOfTheWeek: POD_DAYS[key as keyof typeof POD_DAYS].number,
    hour: POD_HOUR,
    podDay: POD_DAYS[key as keyof typeof POD_DAYS].name,
    podDiscordTimestamp: sentMessage.createdAt.toISOString(),
    podNumber,
  });

  return await createPod(supabase, {
    starts_at: getDayOfNextfWeekDate(1),
    ends_at: getDayOfNextfWeekDate(7),
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
    sentMessage: Message<true>;
    checkinChannel1: Channel | undefined;
    checkinChannel2: Channel | undefined;
    maxPodEntries: number;
    registrationPeriodInDays: number;
  },
) =>
  await Promise.all(
    Object.entries(reactions).map(
      async ([key, value], index) =>
        await linkPodToReactionService(supabase, {
          sentMessage,
          checkinChannel1,
          checkinChannel2,
          emojiName: value.emoji.name,
          podNumber: index + 1,
          key,
          maxPodEntries,
          registrationPeriodInDays,
        }),
    ),
  );
