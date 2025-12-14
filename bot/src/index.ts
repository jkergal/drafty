import '@/env';
import { Client, IntentsBitField } from 'discord.js';
import { startEnrollmentMessageJob } from './core/jobs/enrollment-message/enrollment-message.job';
import ready from './core/discord/listeners/ready';
import { interactionCreateListener } from './core/discord/listeners/interaction-create';

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

interactionCreateListener(client);
