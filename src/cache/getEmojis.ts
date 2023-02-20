import { Guild } from 'discord.js';

export const getEmojis = (guild: Guild) => {
  const mondayEmoji = guild.emojis.cache.get('911345759650209804');
  const tuesdayEmoji = guild.emojis.cache.get('911345759729881119');
  const wednesdayEmoji = guild.emojis.cache.get('911345759650209822');
  const thursdayEmoji = guild.emojis.cache.get('911345759767642173');
  const fridayEmoji = guild.emojis.cache.get('911345759650218054');
  const saturdayEmoji = guild.emojis.cache.get('911345759344017479');
  const sundayEmoji = guild.emojis.cache.get('911345759398555669');
  const asyncEmoji = ':alarm_clock:';

  return {
    mondayEmoji,
    tuesdayEmoji,
    wednesdayEmoji,
    thursdayEmoji,
    fridayEmoji,
    saturdayEmoji,
    sundayEmoji,
    asyncEmoji,
  };
};
