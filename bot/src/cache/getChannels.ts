import { Channels } from '@/types/types';
import { Client, TextChannel } from 'discord.js';

export const getChannels = (client: Client): Channels => {
  const enrollmentsChannel = client.channels.cache.get(process.env.ENROLLMENTS_CHANNEL) as TextChannel;
  const checkinChannel1 = client.channels.cache.get(process.env.CHECKIN_1_CHANNEL) as TextChannel;
  const checkinChannel2 = client.channels.cache.get(process.env.CHECKIN_2_CHANNEL) as TextChannel;
  const checkinAsyncChannel = client.channels.cache.get(process.env.CHECKIN_ASYNC_CHANNEL) as TextChannel;
  const tutorialChannel = client.channels.cache.get(process.env.TUTORIAL_CHANNEL) as TextChannel;

  return { enrollmentsChannel, checkinChannel1, checkinChannel2, checkinAsyncChannel, tutorialChannel };
};
