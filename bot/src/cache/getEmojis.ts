import { Guild } from 'discord.js';

export const getEmojis = (guild: Guild | undefined) => {
  const monday = guild?.emojis.cache.get(process.env.MONDAY_EMOJI);
  const tuesday = guild?.emojis.cache.get(process.env.TUESDAY_EMOJI);
  const wednesday = guild?.emojis.cache.get(process.env.WEDNESDAY_EMOJI);
  const thursday = guild?.emojis.cache.get(process.env.THURSDAY_EMOJI);
  const friday = guild?.emojis.cache.get(process.env.FRIDAY_EMOJI);
  const saturday = guild?.emojis.cache.get(process.env.SATURDAY_EMOJI);
  const sunday = guild?.emojis.cache.get(process.env.SUNDAY_EMOJI);

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
