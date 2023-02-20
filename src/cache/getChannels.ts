import {
  CHECKIN_ASYNC_CHANNEL,
  CHECKIN_CHANNEL_1,
  CHECKIN_CHANNEL_2,
  ENROLLMENTS_CHANNEL,
  TUTORIAL_CHANNEL,
} from '@/constants/DISCORD_SERVER';
import { Channel, Client, TextChannel } from 'discord.js';

interface Channels {
  enrollmentsChannel: TextChannel | undefined;
  checkinChannel1: TextChannel | undefined;
  checkinChannel2: TextChannel | undefined;
  checkinAsyncChannel: TextChannel | undefined;
  tutorialChannel: TextChannel | undefined;
}

export const getChannels = (client: Client): Channels => {
  const enrollmentsChannel = client.channels.cache.get(ENROLLMENTS_CHANNEL as string) as TextChannel;
  const checkinChannel1 = client.channels.cache.get(CHECKIN_CHANNEL_1 as string) as TextChannel;
  const checkinChannel2 = client.channels.cache.get(CHECKIN_CHANNEL_2 as string) as TextChannel;
  const checkinAsyncChannel = client.channels.cache.get(CHECKIN_ASYNC_CHANNEL as string) as TextChannel;
  const tutorialChannel = client.channels.cache.get(TUTORIAL_CHANNEL as string) as TextChannel;

  return { enrollmentsChannel, checkinChannel1, checkinChannel2, checkinAsyncChannel, tutorialChannel };
};
