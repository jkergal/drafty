import { Channel, ChannelType } from 'discord.js';

export const sendTextMessage = async (
  channel: Channel | undefined,
  message: string,
  callback?: () => void,
) => {
  if (channel?.type === ChannelType.GuildText) {
    return await channel.send({ content: message }).then(async (sentMessage) => {
      if (callback) callback();

      return sentMessage;
    });
  }
};
