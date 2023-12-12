import interactionCreate from '@/listeners/interactionCreate';
import ready from '@/listeners/ready';
import { Client, IntentsBitField } from 'discord.js';
import * as dotenv from 'dotenv';
import { supabaseAdmin } from './database/supabase-admin';
import { startEnrollmentMessage } from './jobs/startEnrollmentMessage';
import { getDraftyConfig } from './repositories/create-drafty-config.repository';
import { DraftyConfig } from '@database/types/main.types';

dotenv.config();

const token = process.env.DISCORD_BOT_TOKEN;

console.info('Drafty is starting...');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
  ],
});

client.login(token);

ready(client, async () => {
  startEnrollmentMessage(client);

  const draftyConfig: { scheduledMessage: DraftyConfig['scheduled_message'] }[] = await getDraftyConfig(
    supabaseAdmin,
  );
  console.info({ draftyConfig });
});

interactionCreate(client);
