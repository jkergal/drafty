import { Client } from 'discord.js';

export const getGuild = (client: Client) => {
  const GUILD_ID = process.env.GUILD_ID;

  return client.guilds.cache.get(GUILD_ID);
};
