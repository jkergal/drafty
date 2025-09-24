import { Tables } from '@database/types/__generated__/database.types';
import { Channel, ChannelType } from 'discord.js';

export type PodParams = {
  maxPodEntries: Tables<'drafty_configurations'>['max_pod_entries'];
  registrationPeriodInDays: Tables<'drafty_configurations'>['registration_period_in_days'];
};

export const sendTextMessage = async (
  channel: Channel | undefined,
  message: string,
  callback: () => void,
) => {
  if (channel?.type === ChannelType.GuildText) {
    return await channel.send({ content: message }).then(async (sentMessage) => {
      callback();
      return sentMessage;
    });
  }
};
