import {
  Channel,
  Message,
  MessageReaction,
  ReactionCollector,
  ReactionEmoji,
  User,
} from 'discord.js';
import { convertDaysToMs } from '@/helpers/computing/convert-days-to-ms';
import { POD_HOUR } from '@/constants/drafty';
import { PodDayName, PodDayNumber, PodParams } from '@/types/types';
import { entriesCollectingEndListener } from './entries-collecting-end';
import {
  addPlayer,
  addPodEntry,
  deletePodEntry,
  getPlayerByDiscordId,
  getPodIdByMessageDiscordIdAndEmojiName,
} from './repository';
import { createSupabaseClient } from '@/database/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { TPods } from '@database/types/__generated__/main.types';

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

export const entryReactionsCollectorListener = async (
  sentDiscordMessage: Message<true>,
  params: PodParams & ReactionParams & { podId: TPods['id'] },
): Promise<void> => {
  const supabase = await createSupabaseClient();
  const { maxPodEntries, registrationPeriodInDays, emojiName, podNumber, podId } = params;

  const filter = (reaction: MessageReaction, user: User) => {
    return (
      [emojiName].includes(reaction.emoji.name) &&
      user.id !== sentDiscordMessage.author.id
    );
  };

  const collector = sentDiscordMessage.createReactionCollector({
    filter,
    max: maxPodEntries,
    time: convertDaysToMs(registrationPeriodInDays),
    dispose: true,
  });

  entriesCollectorListener(collector, supabase);
  removeEntryListener(podId, collector, supabase);
  entriesCollectingEndListener(collector, sentDiscordMessage, {
    ...params,
    podNumber,
  });
};

const entriesCollectorListener = (
  collector: ReactionCollector,
  supabase: SupabaseClient,
) => {
  collector.on('collect', (reaction, user) => {
    (async () => {
      try {
        const player = await addPlayer(supabase, {
          discord_id: user.id,
          discord_username: user.username,
          discord_tag: user.tag,
        });

        const emojiName = reaction.emoji.name;

        const pod =
          emojiName !== null
            ? await getPodIdByMessageDiscordIdAndEmojiName(
                supabase,
                reaction.message.id,
                emojiName,
              )
            : null;

        if (pod === null) {
          // @TODO: properly handle this error
          console.error('Pod not found');
          return;
        }

        await addPodEntry(supabase, {
          player_id: player.id,
          pod_id: pod.id,
        });

        console.info(`➕ ${user.tag} registered to the pod : ${reaction.emoji.name}`);
      } catch (error) {
        console.error('Error processing reaction:', error);
      }
    })();
  });
};

const removeEntryListener = async (
  podId: TPods['id'],
  collector: ReactionCollector,
  supabase: SupabaseClient,
) => {
  collector.on('remove', (reaction, user) => {
    console.info(`➖ ${user.tag} removed the reaction ${reaction.emoji.name}`);
    // Query DB to remove entry
    // usersIdTable = usersIdTable.filter((userId) => userId != user.id);
    // console.info(usersIdTable);

    (async () => {
      try {
        const player = await getPlayerByDiscordId(supabase, user.id);

        await deletePodEntry(supabase, player.id, podId);
      } catch (error) {
        console.error('Error removing pod entry:', error);
      }
    })();
  });
};
