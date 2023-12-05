import interactionCreate from '@/listeners/interactionCreate';
import ready from '@/listeners/ready';
import { Client, IntentsBitField } from 'discord.js';
import * as dotenv from 'dotenv';
import { startEnrollmentMessage } from './jobs/startEnrollmentMessage';
import { createDraftyConfig } from './repositories/create-drafty-config.repository';

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

ready(client, () => startEnrollmentMessage(client));

interactionCreate(client);

createDraftyConfig();
