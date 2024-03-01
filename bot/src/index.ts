import { Client, IntentsBitField } from 'discord.js';
import interactionCreate from './core/discord/listeners/interaction-create';
import { startEnrollmentMessageJob } from './core/jobs/enrollment-message/enrollment-message.job';
import ready from './core/discord/listeners/ready';
import * as dotenv from 'dotenv';

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
