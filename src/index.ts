import { Client, ClientOptions } from 'discord.js';
import * as dotenv from 'dotenv';
import { startCronMessage } from './cron/startCronMessage';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';

dotenv.config();

const token = process.env.DISCORD_TOKEN; // add your token here

console.info('Bot is starting...');

const client = new Client({
  intents: [],
});

client.login(token);
ready(client);
interactionCreate(client);
startCronMessage();

console.log(client);
