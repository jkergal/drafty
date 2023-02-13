import { Client } from 'discord.js';

export const getChannels = (client: Client) => {
  const channelEntries = client.channels.cache.get('684235805757145117'); // Change the channel ID for draft entries here
  const channelCheckIn1 = client.channels.cache.get('725725364726530159'); // Change the channel ID for pod 1 check-in here
  const channelCheckIn2 = client.channels.cache.get('725726906728710206'); // Change the channel ID for pod 2 check-in here
  const channelCheckInAsync = client.channels.cache.get('783154310653280256'); // Change the channel ID for asynchron pod check-in here
  const channelFonctionnement = client.channels.cache.get('769288446610636830'); // Change the channel ID of the channel you want to tag in your entries message

  return { channelEntries, channelCheckIn1, channelCheckIn2, channelCheckInAsync, channelFonctionnement };
};
