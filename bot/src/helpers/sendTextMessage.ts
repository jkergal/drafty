import { Channel, ChannelType } from 'discord.js';

export const sendTextMessage = (channel: Channel | undefined, message: string, callback: () => void) => {
  if (channel?.type === ChannelType.GuildText) {
    channel.send({ content: message }).then(async () => {
      callback();
    });
  }
};
