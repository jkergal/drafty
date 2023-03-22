import { Client } from 'discord.js';
import { Commands } from '../Commands';

export default (client: Client, startCronjobs: () => Promise<void>): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    console.info(`${client.user.username} is online`);

    await client.application.commands.set(Commands);
    startCronjobs();
  });
};
