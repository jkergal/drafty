import {
  CHECKIN_ASYNC_CHANNEL,
  CHECKIN_CHANNEL_1,
  CHECKIN_CHANNEL_2,
  ENROLLMENTS_CHANNEL,
  TUTORIAL_CHANNEL,
} from '@/constants/DISCORD_SERVER';
import { Channels } from '@/types/types';
import { Client, TextChannel } from 'discord.js';

export const getChannels = (client: Client): Channels => {
  const enrollmentsChannel = client.channels.cache.get(ENROLLMENTS_CHANNEL as string) as TextChannel;
  const checkinChannel1 = client.channels.cache.get(CHECKIN_CHANNEL_1 as string) as TextChannel;
  const checkinChannel2 = client.channels.cache.get(CHECKIN_CHANNEL_2 as string) as TextChannel;
  const checkinAsyncChannel = client.channels.cache.get(CHECKIN_ASYNC_CHANNEL as string) as TextChannel;
  const tutorialChannel = client.channels.cache.get(TUTORIAL_CHANNEL as string) as TextChannel;

  return { enrollmentsChannel, checkinChannel1, checkinChannel2, checkinAsyncChannel, tutorialChannel };
};
