import { PostgresErrorFr } from '@/errors/postgres-error-fr';
import { Database } from '@database/database.types';
import { SupabaseClient } from '@supabase/supabase-js';
import { objectToCamel } from 'ts-case-convert';

export const getDraftyConfig = async (supabase: SupabaseClient<Database>) => {
  const { data, error } = await supabase.from('drafty_configurations').select(`scheduled_message`);

  if (error !== null) throw new PostgresErrorFr(error.message, error.code);

  return objectToCamel(data);
};
