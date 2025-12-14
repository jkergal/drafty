import { PostgresErrorFr } from '@/errors/postgres-error-fr';
import { toDbDate } from '@/helpers/dates/to-db-date';
import { TablesInsert } from '@database/types/__generated__/database.types';
import { TPods } from '@database/types/__generated__/main.types';
import { Database } from '@database/types/generic.types';
import { SupabaseClient } from '@supabase/supabase-js';
import { objectToCamel } from 'ts-case-convert';

export const addPodEntry = async (
  supabase: SupabaseClient<Database>,
  params: TablesInsert<'player_pod'>,
) => {
  const { data, error } = await supabase
    .from('player_pod')
    .insert(params)
    .select('id')
    .single();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};

export const deletePodEntry = async (
  supabase: SupabaseClient<Database>,
  playerId: string,
  podId: string,
) => {
  const { data, error } = await supabase
    .from('player_pod')
    .update({ deleted_at: toDbDate(new Date()) })
    .eq('player_id', playerId)
    .eq('pod_id', podId)
    .select()
    .single();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};

export const getPodIdByMessageDiscordIdAndEmojiName = async (
  supabase: SupabaseClient<Database>,
  enrollmentMessageDiscordId: string,
  emojiName: TPods['reaction_emoji_name'],
) => {
  const { data, error } = await supabase
    .from('pods')
    .select(
      `
        id, reaction_emoji_name,
        enrollment_messages!enrollment_message_id(
          discord_id
        )
      `,
    )
    .eq('enrollment_messages.discord_id', enrollmentMessageDiscordId)
    .eq('reaction_emoji_name', emojiName)
    .single();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};

export const addPlayer = async (
  supabase: SupabaseClient<Database>,
  params: TablesInsert<'players'>,
) => {
  const { data, error } = await supabase
    .from('players')
    .upsert(params, { onConflict: 'discord_id' })
    .select()
    .single();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};

export const getPlayerByDiscordId = async (
  supabase: SupabaseClient,
  playerDiscordId: string,
) => {
  const { data, error } = await supabase
    .from('players')
    .select('id')
    .eq('discord_id', playerDiscordId)
    .single();

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};
