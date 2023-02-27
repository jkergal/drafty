import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

export const getGuild = (client: Client) => {
  const GUILD_ID = process.env.GUILD_ID;

  // @WORKAROUND : Problème with env typing, had to use "as string" here, event it was already typed
  return client.guilds.cache.get(GUILD_ID as string);
};
