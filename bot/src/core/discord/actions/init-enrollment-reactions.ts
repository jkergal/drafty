import { Guild, Message } from 'discord.js';
import { getEmojis } from '../cache/get-emojis';
import { ASYNC_EMOJI } from '@/constants/emojis';

export const initEnrollmentReactions = async (
  enrollmentSentMessage: Message<true>,
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
    monday: await enrollmentSentMessage.react(monday),
    tuesday: await enrollmentSentMessage.react(tuesday),
    wednesday: await enrollmentSentMessage.react(wednesday),
    thursday: await enrollmentSentMessage.react(thursday),
    friday: await enrollmentSentMessage.react(friday),
    saturday: await enrollmentSentMessage.react(saturday),
    sunday: await enrollmentSentMessage.react(sunday),
    sundayAsync: await enrollmentSentMessage.react(ASYNC_EMOJI),
  };
};
