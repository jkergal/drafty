import { Commands } from '../Commands';
import { Client } from 'discord.js';
import { startCronMessage } from '@/cron/startCronMessage';
import { getChannels } from '@/cache/getChannels';

export default (client: Client, startCronjobs: () => void): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    console.info(`${client.user.username} is online`);

    await client.application.commands.set(Commands);
    startCronjobs();
  });
};
