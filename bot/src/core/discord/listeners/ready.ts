import { Client } from 'discord.js';
import { Commands } from '../commands/_index';

export default (client: Client, startCronjobs: () => Promise<void>): void => {
  client.on('ready', () => {
    if (!client.user || !client.application) 
      return;

    console.info(`${client.user.username} is online`);

    void client.application.commands.set(Commands);
    startCronjobs();
  });
};
