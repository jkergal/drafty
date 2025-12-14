import { ASYNC_EMOJI } from '@/constants/emojis';
import { getEmojis } from '@/core/discord/cache/get-emojis';
import { getGuild } from '@/core/discord/cache/get-guilds';
import { getDayOfNextWeekTimestamp } from '@/helpers/dates/get-day-of-next-week-timestamp';
import { formatDiscordTimestamp } from '@/helpers/format/format-discord-timestamp';
import { TDraftyConfigurations } from '@database/types/__generated__/main.types';
import { Client } from 'discord.js';

type TagKey =
  | '$WEEK_START_DATE'
  | '$WEEK_END_DATE'
  | '$EMOJI_MONDAY'
  | '$TIMESTAMP_NEXT_WEEK_MONDAY'
  | '$CURRENT_MTG_FORMAT'
  | '$EMOJI_TUESDAY'
  | '$TIMESTAMP_NEXT_WEEK_TUESDAY'
  | '$EMOJI_WEDNESDAY'
  | '$TIMESTAMP_NEXT_WEEK_WEDNESDAY'
  | '$EMOJI_THURSDAY'
  | '$TIMESTAMP_NEXT_WEEK_THURSDAY'
  | '$EMOJI_FRIDAY'
  | '$TIMESTAMP_NEXT_WEEK_FRIDAY'
  | '$EMOJI_SATURDAY'
  | '$TIMESTAMP_NEXT_WEEK_SATURDAY'
  | '$EMOJI_SUNDAY'
  | '$TIMESTAMP_NEXT_WEEK_SUNDAY'
  | '$EMOJI_ASYNC';

type TagValues = Record<TagKey, string | undefined>;

export const getEnrollmentMessageContentTagValues = (
  client: Client,
  currentMtgFormat: TDraftyConfigurations['current_mtg_format'],
) => ({
  $WEEK_START_DATE: formatDiscordTimestamp(getDayOfNextWeekTimestamp(1), {
    shorten: true,
  }),
  $WEEK_END_DATE: formatDiscordTimestamp(getDayOfNextWeekTimestamp(7), {
    shorten: true,
  }),
  $EMOJI_MONDAY: getEmojis(getGuild(client)).monday?.toString(),
  $TIMESTAMP_NEXT_WEEK_MONDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(1)),
  $CURRENT_MTG_FORMAT: currentMtgFormat,
  $EMOJI_TUESDAY: getEmojis(getGuild(client)).tuesday?.toString(),
  $TIMESTAMP_NEXT_WEEK_TUESDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(2)),
  $EMOJI_WEDNESDAY: getEmojis(getGuild(client)).wednesday?.toString(),
  $TIMESTAMP_NEXT_WEEK_WEDNESDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(3)),
  $EMOJI_THURSDAY: getEmojis(getGuild(client)).thursday?.toString(),
  $TIMESTAMP_NEXT_WEEK_THURSDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(4)),
  $EMOJI_FRIDAY: getEmojis(getGuild(client)).friday?.toString(),
  $TIMESTAMP_NEXT_WEEK_FRIDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(5)),
  $EMOJI_SATURDAY: getEmojis(getGuild(client)).saturday?.toString(),
  $TIMESTAMP_NEXT_WEEK_SATURDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(6)),
  $EMOJI_SUNDAY: getEmojis(getGuild(client)).sunday?.toString(),
  $TIMESTAMP_NEXT_WEEK_SUNDAY: formatDiscordTimestamp(getDayOfNextWeekTimestamp(7)),
  $EMOJI_ASYNC: ASYNC_EMOJI,
});

export const hydrateEnrollmentMessage = ({
  baseMessage,
  client,
  currentMtgFormat,
}: {
  baseMessage: TDraftyConfigurations['enrollment_message_content'];
  client: Client;
  currentMtgFormat: TDraftyConfigurations['current_mtg_format'];
}): string => {
  const tagValues: TagValues = getEnrollmentMessageContentTagValues(
    client,
    currentMtgFormat,
  );

  const hydratedMessage = Object.keys(tagValues).reduce((_hydratedMessage, key) => {
    const tagKey = key as TagKey;
    const value = tagValues[tagKey] ?? '';
    return _hydratedMessage.replaceAll(tagKey, value);
  }, baseMessage);

  return hydratedMessage;
};
