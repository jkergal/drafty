import { Guild } from 'discord.js';
import { getEmojis } from '../cache/get-emojis';
import { ASYNC_EMOJI } from '@/constants/emojis';
import { SentMessage } from '@/core/jobs/enrollment-message/service';

export const initEnrollmentReactions = async (
  enrollmentSentMessage: SentMessage,
  guild: Guild,
) => {
  const { friday, monday, saturday, sunday, thursday, tuesday, wednesday } =
    await getEmojis(guild);

  if (
    monday === undefined ||
    tuesday === undefined ||
    wednesday === undefined ||
    thursday === undefined ||
    friday === undefined ||
    saturday === undefined ||
    sunday === undefined
  )
    return null;

  return {
    monday: await enrollmentSentMessage?.discord.react(monday),
    tuesday: await enrollmentSentMessage?.discord.react(tuesday),
    wednesday: await enrollmentSentMessage?.discord.react(wednesday),
    thursday: await enrollmentSentMessage?.discord.react(thursday),
    friday: await enrollmentSentMessage?.discord.react(friday),
    saturday: await enrollmentSentMessage?.discord.react(saturday),
    sunday: await enrollmentSentMessage?.discord.react(sunday),
    sundayAsync: await enrollmentSentMessage?.discord.react(ASYNC_EMOJI),
  };
};
