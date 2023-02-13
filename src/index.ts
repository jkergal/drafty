import interactionCreate from '@/listeners/interactionCreate';
import ready from '@/listeners/ready';
import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import { startCronMessage } from './cron/startCronMessage';

dotenv.config();

const token = process.env.DISCORD_BOT_TOKEN;

console.info('Drafty is starting...');

const client = new Client({
  intents: [],
});

client.login(token);
ready(client);
interactionCreate(client);
startCronMessage();

console.log(client);
