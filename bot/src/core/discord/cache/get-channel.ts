import { Client } from 'discord.js';

export const getChannels = (client: Client) => {
  const enrollmentsChannel = client.channels.cache.get(process.env.ENROLLMENTS_CHANNEL);
  const checkinChannel1 = client.channels.cache.get(process.env.CHECKIN_CHANNEL_1);
  const checkinChannel2 = client.channels.cache.get(process.env.CHECKIN_CHANNEL_2);
  const checkinAsyncChannel = client.channels.cache.get(
    process.env.CHECKIN_ASYNC_CHANNEL,
  );
  const tutorialChannel = client.channels.cache.get(process.env.TUTORIAL_CHANNEL);

  return {
    enrollmentsChannel,
    checkinChannel1,
    checkinChannel2,
    checkinAsyncChannel,
    tutorialChannel,
  };
};
