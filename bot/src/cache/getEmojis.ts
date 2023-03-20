import { Guild } from 'discord.js';

export const getEmojis = (guild: Guild | undefined) => {
  // @WORKAROUND : env typing issues, had to use "as string" here, even it was already typed
  const monday = guild?.emojis.cache.get(process.env.MONDAY_EMOJI as string);
  const tuesday = guild?.emojis.cache.get(process.env.TUESDAY_EMOJI as string);
  const wednesday = guild?.emojis.cache.get(process.env.WEDNESDAY_EMOJI as string);
  const thursday = guild?.emojis.cache.get(process.env.THURSDAY_EMOJI as string);
  const friday = guild?.emojis.cache.get(process.env.FRIDAY_EMOJI as string);
  const saturday = guild?.emojis.cache.get(process.env.SATURDAY_EMOJI as string);
  const sunday = guild?.emojis.cache.get(process.env.SUNDAY_EMOJI as string);

  return {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  };
};
