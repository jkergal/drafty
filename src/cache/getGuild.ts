import { Client } from 'discord.js';

export const getGuild = (client: Client) => {
  return client.guilds.cache.get('668478387123388426'); // Change your Discord server ID here
};
