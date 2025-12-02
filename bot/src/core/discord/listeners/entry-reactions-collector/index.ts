import {
  Channel,
  Message,
  MessageReaction,
  ReactionCollector,
  ReactionEmoji,
  User,
} from 'discord.js';
import { PodParams } from '../../actions/send-text-message';
import { convertDaysToMs } from '@/helpers/computing/convert-days-to-ms';
import { POD_HOUR } from '@/constants/drafty';
import { PodDayName, PodDayNumber } from '@/types/types';
import { entriesCollectingEndListener } from './entries-collecting-end';

export type ReactionParams = {
  emojiName: ReactionEmoji['name'];
  podDay: PodDayName;
  dayOfTheWeek: PodDayNumber;
  hour: typeof POD_HOUR;
  channel1: Channel | undefined;
  channel2: Channel | undefined;
  podDiscordTimestamp: string;
  podNumber: number;
};

export const entryReactionsCollectorListener = (
  sentMessage: Message<true>,
  params: PodParams & ReactionParams,
): void => {
  const { maxPodEntries, registrationPeriodInDays, emojiName, podNumber } = params;

  const filter = (reaction: MessageReaction, user: User) => {
    return [emojiName].includes(reaction.emoji.name) && user.id !== sentMessage.author.id;
  };

  const collector = sentMessage.createReactionCollector({
    filter,
    max: maxPodEntries,
    time: convertDaysToMs(registrationPeriodInDays),
    dispose: true,
  });

  entriesCollectorListener(collector);
  removeEntryListener(collector);
  entriesCollectingEndListener(collector, sentMessage, {
    ...params,
    podNumber,
  });
};

const entriesCollectorListener = (collector: ReactionCollector) => {
  collector.on('collect', (reaction, user) => {
    // usersIdTable.push(`${user.id}`);
    // Query DB to save entry
    console.info(`➕ ${user.tag} registered to the pod : ${reaction.emoji.name}`);
    // console.info(usersIdTable);
  });
};

const removeEntryListener = (collector: ReactionCollector) => {
  collector.on('remove', (reaction, user) => {
    console.info(`➖ ${user.tag} removed the reaction ${reaction.emoji.name}`);
    // Query DB to remove entry
    // usersIdTable = usersIdTable.filter((userId) => userId != user.id);
    // console.info(usersIdTable);
  });
};
