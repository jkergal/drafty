import { Tables } from '@database/types/__generated__/database.types';
import { Channel, ChannelType, Message } from 'discord.js';

export type PodParams = {
  maxPodEntries: Tables<'drafty_configurations'>['max_pod_entries'];
  registrationPeriodInDays: Tables<'drafty_configurations'>['registration_period_in_days'];
};

export const sendTextMessage = (
  channel: Channel | undefined,
  message: string,
  params: PodParams,
  callback: (
    sentMessage: Message<true>,
    maxPodEntries: Tables<'drafty_configurations'>['max_pod_entries'],
  ) => void,
) => {
  if (channel?.type === ChannelType.GuildText) {
    channel.send({ content: message }).then(async (sentMessage) => {
      callback(sentMessage, params.maxPodEntries);
    });
  }
};
