import { PostgresErrorFr } from '@/errors/postgres-error-fr';
import { Database } from '@database/types/generic.types';
import { SupabaseClient } from '@supabase/supabase-js';
import { objectToCamel } from 'ts-case-convert';

export const getDraftyConfigCron = async (supabase: SupabaseClient<Database>) => {
  const { data, error } = await supabase.from('drafty_configurations').select(`cron`);

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data[0]);
};

export const getDraftyConfigDetails = async (supabase: SupabaseClient<Database>) => {
  const { data, error } = await supabase
    .from('drafty_configurations')
    .select(`enrollment_message_content, current_mtg_format`);

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data[0]);
};
