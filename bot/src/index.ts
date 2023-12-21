import ready from '@/listeners/ready';
import { Client, IntentsBitField } from 'discord.js';
import * as dotenv from 'dotenv';
import interactionCreate from './listeners/interaction-create';
import { startEnrollmentMessageJob } from './jobs/enrollment-message/enrollment-message.job';

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
  startEnrollmentMessageJob(client);
});

interactionCreate(client);
