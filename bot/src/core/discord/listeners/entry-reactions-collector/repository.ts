import { PostgresErrorFr } from '@/errors/postgres-error-fr';
import { TablesInsert } from '@database/types/__generated__/database.types';
import { Database } from '@database/types/generic.types';
import { SupabaseClient } from '@supabase/supabase-js';
import { objectToCamel } from 'ts-case-convert';

// export const addEntryToGameTable = async (
//   supabase: SupabaseClient<Database>,
//   params: TablesInsert<'game_tables'>,
// ) => {
//   const { data, error } = await supabase
//     .from('player_pod')
//     .insert(params)
//     .select(
//       `
//         id,
//         pod_id,
//         completed_at,
//         player_1_discord_id,
//         player_2_discord_id,
//         player_3_discord_id,
//         player_4_discord_id,
//         player_5_discord_id,
//         player_6_discord_id,
//         player_7_discord_id,
//         player_8_discord_id
//       `,
//     )
//     .single();

//   if (error !== null) throw new PostgresErrorFr(error.message, error.code);

//   return objectToCamel(data);
// };

// export const deleteEntryFromGameTable = async (
//   supabase: SupabaseClient<Database>,
//   playerDiscordId,
// ) => {
//   const { data, error } = await supabase
//     .from('game_tables')
//     .update(params)
//     .select(
//       `
//         id,
//         pod_id,
//         completed_at,
//         player_1_discord_id,
//         player_2_discord_id,
//         player_3_discord_id,
//         player_4_discord_id,
//         player_5_discord_id,
//         player_6_discord_id,
//         player_7_discord_id,
//         player_8_discord_id
//       `,
//     )
//     .single();

//   if (error !== null) throw new PostgresErrorFr(error.message, error.code);

//   return objectToCamel(data);
// };
