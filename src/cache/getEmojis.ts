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

export const getEmojis = (guild: Guild | undefined) => {
  // @WORKAROUND : env typing issues, had to use "as string" here, event it was already typed
  const monday = guild?.emojis.cache.get(MONDAY_EMOJI as string);
  const tuesday = guild?.emojis.cache.get(TUESDAY_EMOJI as string);
  const wednesday = guild?.emojis.cache.get(WEDNESDAY_EMOJI as string);
  const thursday = guild?.emojis.cache.get(THURSDAY_EMOJI as string);
  const friday = guild?.emojis.cache.get(FRIDAY_EMOJI as string);
  const saturday = guild?.emojis.cache.get(SATURDAY_EMOJI as string);
  const sunday = guild?.emojis.cache.get(SUNDAY_EMOJI as string);
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
