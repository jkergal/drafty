import {
  FRIDAY_EMOJI,
  MONDAY_EMOJI,
  SATURDAY_EMOJI,
  SUNDAY_EMOJI,
  THURSDAY_EMOJI,
  TUESDAY_EMOJI,
  WEDNESDAY_EMOJI,
} from '@/constants/DISCORD_SERVER';
import { Guild } from 'discord.js';

export const getEmojis = (guild: Guild) => {
  const monday = guild.emojis.cache.get(MONDAY_EMOJI);
  const tuesday = guild.emojis.cache.get(TUESDAY_EMOJI);
  const wednesday = guild.emojis.cache.get(WEDNESDAY_EMOJI);
  const thursday = guild.emojis.cache.get(THURSDAY_EMOJI);
  const friday = guild.emojis.cache.get(FRIDAY_EMOJI);
  const saturday = guild.emojis.cache.get(SATURDAY_EMOJI);
  const sunday = guild.emojis.cache.get(SUNDAY_EMOJI);
  const async = ':alarm_clock:';

  return {
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    async,
  };
};
