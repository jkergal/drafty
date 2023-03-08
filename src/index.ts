import interactionCreate from '@/listeners/interactionCreate';
import ready from '@/listeners/ready';
import { Client, IntentsBitField } from 'discord.js';
import * as dotenv from 'dotenv';
import { CRON_PARAMS } from './constants/CRON_PARAMS';
import { formatCronParams } from './helpers/format/formatCronParams';
import { startEnrollmentMessage } from './jobs/startEnrollmentMessage';

dotenv.config();

console.log(formatCronParams(CRON_PARAMS));

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
